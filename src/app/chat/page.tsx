'use client'

import { useChat } from 'ai/react';
import "./style.css"
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="chat-container">
      <div className="header">
        <div className="support-text">Support</div>
        <div className="date-text">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>

      <div className="messages-container">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`message ${m.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {m.role === 'user' ? 'You: ' : 'SIA: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          className="input-field"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
