# Roof Junction Engineering Website

This project is a React frontend and Python FastAPI backend for Roof Junction Engineering.

## Deployment

### DEPLOYING THE BACKEND TO RENDER:
1. Go to render.com and sign up / log in.
2. Click "New" → "Web Service".
3. Connect your GitHub repository.
4. Set Root Directory to: `chatbot-backend`
5. Build Command: `pip install -r requirements.txt`
6. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. Under "Environment Variables", add:
   - `GEMINI_API_KEY` = (your actual Gemini API key)
   - `CORS_ORIGIN` = `https://your-vercel-app.vercel.app`
8. Click Deploy. Once done, copy the URL (e.g. `https://roof-junction-chatbot.onrender.com`).

### DEPLOYING THE FRONTEND TO VERCEL:
1. Go to vercel.com and sign up / log in with GitHub.
2. Click "New Project" → import your GitHub repository.
3. If React is in a subfolder, set Root Directory to that folder.
4. Under "Environment Variables", add:
   - `VITE_API_URL` = `https://roof-junction-chatbot.onrender.com`
     (use the Render URL from the previous step)
5. Click Deploy.
6. Once deployed, copy the Vercel URL and go back to Render → update `CORS_ORIGIN` to this Vercel URL → Redeploy.

## Local Development
- **Frontend**: ensure `.env.local` has `VITE_API_URL=http://localhost:8000`, then run: `npm run dev`
- **Backend**: `cd chatbot-backend` && `uvicorn main:app --reload --port 8000`
