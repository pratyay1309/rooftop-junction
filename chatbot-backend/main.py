"""
Roof Junction Engineering — Gemini RAG Chatbot Backend
======================================================

REACT FRONTEND INTEGRATION:
  POST http://localhost:8000/chat
  Body: { "message": "...", "history": [{ "role": "user"|"assistant", "content": "..." }] }
  Response: { "reply": "..." }

  GET http://localhost:8000/suggested-prompts
  Response: { "prompts": ["...", "..."] }

HOW TO RUN:
  1. cd chatbot-backend/
  2. pip install -r requirements.txt
  3. Add your Gemini API key to ../.env
  4. uvicorn main:app --reload --port 8000
"""

import os
import re
import time
import logging
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from google.genai import errors as genai_errors
from google.genai import types as genai_types

from rag_data import KNOWLEDGE_CHUNKS

# ─── Load Environment Variables ──────────────────────────────────────────────

env_path = Path(__file__).resolve().parent.parent / ".env"
if not env_path.exists():
    env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
BACKEND_PORT = int(os.getenv("BACKEND_PORT", "8000"))
CORS_ORIGINS_ENV = os.getenv("CORS_ORIGIN", "http://localhost:5174,http://localhost:3000")
origins = CORS_ORIGINS_ENV.split(",")

if not GEMINI_API_KEY or GEMINI_API_KEY == "your_gemini_api_key_here":
    raise RuntimeError(
        "\n\n❌ GEMINI_API_KEY is not set!\n"
        "   1. Get a key from https://aistudio.google.com/app/apikey\n"
        "   2. Add it to the .env file: GEMINI_API_KEY=your_actual_key\n"
    )

# ─── Configure Gemini (new google-genai SDK) ─────────────────────────────────

client = genai.Client(api_key=GEMINI_API_KEY)
MODEL_NAME = "gemini-2.5-flash"

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ─── FastAPI App ──────────────────────────────────────────────────────────────

app = FastAPI(
    title="Roof Junction Chatbot API",
    description="Gemini-powered RAG chatbot for Roof Junction Engineering",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Pydantic Models ─────────────────────────────────────────────────────────


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []


class ChatResponse(BaseModel):
    reply: str


# ─── RAG: Simple Keyword Matching ────────────────────────────────────────────

_CHUNK_WORD_SETS: list[tuple[str, set[str]]] = []
for chunk in KNOWLEDGE_CHUNKS:
    words = set(re.findall(r"[a-z]{3,}", chunk.lower()))
    _CHUNK_WORD_SETS.append((chunk, words))

_STOP_WORDS = {
    "the", "and", "for", "are", "was", "were", "been", "being", "have", "has",
    "had", "does", "did", "will", "would", "shall", "should", "may", "might",
    "can", "could", "this", "that", "these", "those", "with", "from", "about",
    "into", "through", "during", "before", "after", "above", "below", "between",
    "under", "again", "further", "then", "once", "here", "there", "when", "where",
    "what", "which", "who", "whom", "how", "all", "each", "every", "both", "few",
    "more", "most", "other", "some", "such", "than", "too", "very", "just", "also",
    "your", "you", "our", "their", "its", "his", "her", "not", "only", "own",
    "tell", "know", "like", "want", "need", "please", "thanks", "thank",
}


def retrieve_relevant_chunks(query: str, top_k: int = 5) -> list[str]:
    """Keyword-based retrieval: match query words against knowledge chunks."""
    query_words = set(re.findall(r"[a-z]{3,}", query.lower())) - _STOP_WORDS

    if not query_words:
        return KNOWLEDGE_CHUNKS[-2:]  # fallback: company overview

    scored: list[tuple[float, str]] = []
    for chunk_text, chunk_words in _CHUNK_WORD_SETS:
        matches = query_words & chunk_words
        if matches:
            score = len(matches) + (len(matches) / len(query_words)) * 0.5
            scored.append((score, chunk_text))

    scored.sort(key=lambda x: x[0], reverse=True)
    return [text for _, text in scored[:top_k]]


# ─── Gemini Call with Retry ──────────────────────────────────────────────────

SYSTEM_PROMPT_TEMPLATE = """You are a helpful assistant for Roof Junction Engineering & Structural Solutions, a Pune-based roofing and structural steel company. Answer only based on the context provided below. Be concise, professional, and friendly. If the user's question is not covered by the context, respond with: "For detailed enquiries, please contact us at salesroofjunction2026@gmail.com or call +91 90217 15847."

Context:
{context}"""


def call_gemini_with_retry(system_prompt: str, history: list[ChatMessage], user_message: str, max_retries: int = 3) -> str:
    """Call Gemini with retry logic for rate limits (429 errors)."""

    # Build contents list for the API
    contents = []
    for msg in history:
        role = "user" if msg.role == "user" else "model"
        contents.append({"role": role, "parts": [{"text": msg.content}]})
    contents.append({"role": "user", "parts": [{"text": user_message}]})

    for attempt in range(max_retries):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=contents,
                config=genai_types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    temperature=0.7,
                    max_output_tokens=500,
                ),
            )
            return response.text.strip()

        except genai_errors.ClientError as e:
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                wait_time = (attempt + 1) * 15  # 15s, 30s, 45s
                logger.warning(f"Rate limited (attempt {attempt+1}/{max_retries}), waiting {wait_time}s...")
                time.sleep(wait_time)
                continue
            raise
        except Exception:
            raise

    raise Exception("Gemini API rate limit exceeded after retries")


# ─── Starter Prompts ─────────────────────────────────────────────────────────

STARTER_PROMPTS = [
    "What roofing products do you offer?",
    "How do I get a quote?",
    "Do you do industrial roofing?",
    "What are Sandwich PUF Panels?",
    "Where are you located?",
    "Can you handle repair and maintenance?",
]

# ─── API Endpoints ───────────────────────────────────────────────────────────


@app.get("/suggested-prompts")
async def get_suggested_prompts():
    """Starter prompt chips for the chat modal."""
    return {"prompts": STARTER_PROMPTS}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """Main chat endpoint with RAG retrieval + Gemini."""
    user_message = request.message.strip()
    if not user_message:
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    try:
        # RAG: retrieve relevant chunks
        relevant_chunks = retrieve_relevant_chunks(user_message, top_k=5)
        context = "\n\n".join(relevant_chunks)
        logger.info(f"Retrieved {len(relevant_chunks)} chunks for: '{user_message[:60]}'")

        # Build system prompt and call Gemini
        system_prompt = SYSTEM_PROMPT_TEMPLATE.format(context=context)
        reply = call_gemini_with_retry(system_prompt, request.history, user_message)
        logger.info(f"Reply generated ({len(reply)} chars)")

        return ChatResponse(reply=reply)

    except Exception as e:
        logger.error(f"Gemini API error: {e}")
        raise HTTPException(
            status_code=500,
            detail=(
                "Sorry, I'm having trouble connecting right now. "
                "Please try again in a moment or contact us at "
                "salesroofjunction2026@gmail.com or +91 90217 15847."
            ),
        )


@app.get("/health")
async def health_check():
    return {"status": "ok", "model": MODEL_NAME}


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
