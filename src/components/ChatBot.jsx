import { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

// Before deploying to Vercel, add VITE_API_URL as an environment variable in the Vercel project dashboard, pointing to your Render backend URL.
const API_URL = import.meta.env.VITE_API_URL;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm the Roof Junction assistant. Ask me about our products, services, or how to get a quote." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [starterPrompts, setStarterPrompts] = useState([]);
  const messagesEndRef = useRef(null);

  // Fetch starter prompts on mount
  useEffect(() => {
    fetch(`${API_URL}/suggested-prompts`)
      .then(res => res.json())
      .then(data => setStarterPrompts(data.prompts || []))
      .catch(() => setStarterPrompts([
        "What roofing products do you offer?",
        "How do I get a quote?",
        "Where are you located?"
      ]));
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userMsg = text.trim();
    if (!userMsg || loading) return;

    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const history = newMessages
        .slice(1, -1)
        .map(m => ({ role: m.role, content: m.content }));

      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Something went wrong');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't connect right now. Please contact us directly at salesroofjunction2026@gmail.com or call +91 90217 15847.`
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Show starter chips only before user sends first message
  const showStarters = messages.length <= 1 && !loading;

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
        id="chatbot-fab"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="chatbot-overlay" onClick={() => setIsOpen(false)}>
          <div className="chatbot-modal" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header__info">
                <img src="/roofjunction_logo.png" alt="Logo" className="chatbot-header__logo" />
                <div>
                  <h3 className="chatbot-header__title">Roof Junction Assistant</h3>
                  <span className="chatbot-header__status">
                    <span className="chatbot-header__dot"></span>
                    Online
                  </span>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="chatbot-msg__avatar">RJ</div>
                  )}
                  <div className="chatbot-msg__bubble">
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="chatbot-msg chatbot-msg--assistant">
                  <div className="chatbot-msg__avatar">RJ</div>
                  <div className="chatbot-msg__bubble chatbot-msg__typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}

              {/* Starter Prompt Chips — only shown before first message */}
              {showStarters && starterPrompts.length > 0 && (
                <div className="chatbot-chips">
                  {starterPrompts.map((p, i) => (
                    <button key={i} className="chatbot-chip" onClick={() => sendMessage(p)}>
                      {p}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form className="chatbot-input" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={loading}
                autoFocus
                id="chatbot-input"
              />
              <button type="submit" disabled={loading || !input.trim()} className="chatbot-send" id="chatbot-send">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
