import React from "react";
import "./AIAssistant.css";

import aiAvatar from "../assets/ai-avatar.png";

const AIAssistant = () => {
  return (
    <section className="ai-section">

      {/* LEFT CARD */}
      <div className="preview-card">

        <div className="card-top">
          <span>Card Preview</span>
          <span>360°</span>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop"
          alt="preview"
          className="preview-image"
        />

        <div className="explore-box">
          <div>
            <h4>Explore in 3D</h4>
            <p>Drag to Rotate</p>
          </div>

          <div className="arrow-buttons">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

      </div>

      {/* CENTER CHAT */}
      <div className="chat-area">

        <h1>
          AI FUTURE <br />
          ASSISTANT
        </h1>

        <div className="chat-bubble">
          👋 Hi! I am Looper, happy to chat! 😊
        </div>

        <div className="chat-bubble">
          How can I help you today?
        </div>

        <div className="action-buttons">
          <button>Schedule a Demo</button>
          <button>Know More About Us</button>
          <button>Read an Article</button>
        </div>

        <div className="input-box">
          <input type="text" placeholder="Type your message..." />

          <button className="send-btn">➤</button>

          <button className="mic-btn">🎤</button>
        </div>

      </div>

      {/* RIGHT AI */}
      <div className="ai-character">

        <div className="glow-ring"></div>

        <img src={aiAvatar} alt="AI Avatar" />

      </div>

    </section>
  );
};

export default AIAssistant;