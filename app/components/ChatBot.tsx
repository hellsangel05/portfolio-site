"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) {
      return;
    }

    const currentInput = input;
    const userMessage: Message = { role: "user", content: currentInput };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://aichatbot27.app.n8n.cloud/webhook/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: currentInput }),
        }
      );

      const data = await response.json();

      let botResponse = "";

      if (Array.isArray(data) && data.length > 0 && data[0]?.output) {
        botResponse = data[0].output;
      } else if (data?.answer) {
        botResponse = data.answer;
      } else {
        botResponse =
          "I received an unexpected response format. Please try another question.";
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botResponse },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The assistant is unavailable right now. You can still use the project and about pages to review my work.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-shell">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chatbot-trigger">
          Experimental portfolio assistant
        </button>
      )}

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-title">Ask about my work</p>
              <p className="chatbot-subtitle">
                Experimental assistant connected to my portfolio notes
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close"
              aria-label="Close assistant"
            >
              x
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <p className="chatbot-empty">
                Try asking what I build, what roles I am targeting, or which
                tools I have used so far.
              </p>
            )}
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "chatbot-bubble chatbot-bubble-user"
                    : "chatbot-bubble chatbot-bubble-assistant"
                }
              >
                {message.content}
              </div>
            ))}
            {loading && <p className="chatbot-empty">Thinking...</p>}
          </div>

          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  void sendMessage();
                }
              }}
              placeholder="Ask a question"
              className="chatbot-input"
            />
            <button
              onClick={() => void sendMessage()}
              disabled={loading}
              className="chatbot-send"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
