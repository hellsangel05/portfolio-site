"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const response = await fetch("https://aichatbot27.app.n8n.cloud/webhook/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });

    const data = await response.json();
    console.log("Response from n8n:", data);

    // Handle array response from n8n
    let botResponse = "";

    if (Array.isArray(data) && data.length > 0 && data[0].output) {
      botResponse = data[0].output;
    } else if (data?.answer) {
      botResponse = data.answer;
    } else {
      console.error("Unexpected response format:", data);
      botResponse = "Sorry, I received an unexpected response format.";
    }

    const botMessage = { role: "assistant", content: botResponse };
    setMessages((prev) => [...prev, botMessage]);

  } catch (error) {
    console.error("Error:", error);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Sorry, something went wrong. Check the console for details." },
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          💬 Ask me anything
        </button>
      )}

      {isOpen && (
        <div className="bg-white border rounded-lg shadow-xl w-96 h-[500px] flex flex-col text-gray-900">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Ask about Angel</h3>
            <button onClick={() => setIsOpen(false)} className="text-xl">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-black-500 text-sm">Ask me anything about Angel's work, skills, or projects!</p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-100 ml-auto max-w-[80%]"
                    : "bg-black-100 mr-auto max-w-[80%]"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
            {loading && <p className="text-black-400 text-sm">Thinking...</p>}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask a question..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}