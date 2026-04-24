"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (q?: string) => {
    const question = (q ?? input).trim();
    if (!question) return;
    setMessages(prev => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://aichatbot27.app.n8n.cloud/webhook/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      let answer = "";
      if (Array.isArray(data) && data[0]?.output) answer = data[0].output;
      else if (data?.answer) answer = data.answer;
      else answer = "Sorry — I hit a snag. Try again?";
      setMessages(prev => [...prev, { role: "assistant", content: answer }]);
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button className="chat-fab" onClick={() => setIsOpen(true)}>
        <span className="chat-dot"></span>
        <span>Ask <em style={{ fontStyle: "italic" }}>my AI</em></span>
      </button>
    );
  }

  return (
    <div className="chat-panel">
      <div className="chat-head">
        <div className="chat-head-l">
          <div className="chat-avatar">A</div>
          <div>
            <div className="chat-head-title">Angel&apos;s AI</div>
            <div className="chat-head-sub">Online · trained on my work</div>
          </div>
        </div>
        <button className="chat-close" onClick={() => setIsOpen(false)}>×</button>
      </div>
      <div className="chat-body">
        {messages.length === 0 && (
          <>
            <div className="chat-intro">
              Hey — I&apos;m a concierge trained on Angel&apos;s <em>work &amp; résumé</em>. Ask me anything.
            </div>
            <div className="chat-chips">
              {[
                "What does Angel actually ship?",
                "Is he open to junior roles?",
                "Tell me about ADGo Studios",
                "What's his strongest skill?",
              ].map(q => (
                <button key={q} className="chat-chip" onClick={() => sendMessage(q)}>{q}</button>
              ))}
            </div>
          </>
        )}
        {messages.map((m, i) => (
          <div key={i} className={"chat-msg " + (m.role === "user" ? "user" : "bot")}>{m.content}</div>
        ))}
        {loading && <div className="chat-msg bot typing">thinking…</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask about Angel…"
        />
        <button className="chat-send" onClick={() => sendMessage()} disabled={loading}>→</button>
      </div>
    </div>
  );
}
