import React from "react";
import "./AIAssistant.css";

import girl from "../assets/ai-girl.png";
import preview from "../assets/preview-card.jpg";

const services = [
  "AI Website Design",
  "Branding & Identity",
  "AI Automation Solutions",
  "UI/UX Design",
  "Digital Marketing",
];

const AIAssistant = () => {
  return (
    <section className="ai-wrapper">

{/* ===== FUTURISTIC PREVIEW SECTION ===== */}

<div className="ultra-preview-card">

  {/* IMAGE AREA */}
  <div className="ultra-image-wrapper">

    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
      alt="preview"
      className="ultra-preview-image"
    />

    {/* FLOATING TAGS */}

    <div className="floating-tag top-tag">
      AI Design
    </div>

    <div className="floating-tag bottom-tag">
      Futuristic UI
    </div>

  </div>

  {/* BOTTOM */}
  <div className="ultra-preview-bottom">

    <div className="preview-left">

      <div className="cube-box">
        ✦
      </div>

      <div>
        <h3>Explore in 3D</h3>
        <p>Drag & rotate interaction</p>
      </div>

    </div>

    <div className="preview-arrows">

      <button>←</button>
      <button>→</button>

    </div>

  </div>

</div>

 {/* =========================
    ULTRA CHAT SECTION
========================= */}

<div className="ultra-chat-section">

  {/* TITLE */}

  <div className="ultra-title">

    <p className="ai-mini-text">
      NEXT GENERATION AI SYSTEM
    </p>

    <h1>
      DJ Pixel AI <br />
    </h1>

  </div>

  {/* CHAT AREA */}

  <div className="ultra-chat-container">

    {/* BOT MESSAGE */}

    <div className="ultra-message bot">

      <div className="message-glow"></div>

      <div className="avatar-circle">
        ✦
      </div>

      <div className="message-content">

        <h4>Looper AI</h4>

        <p>
          Hello 👋 I can build futuristic
          websites, branding systems,
          AI automation and interactive UI.
        </p>

      </div>

    </div>

    {/* USER MESSAGE */}

    <div className="ultra-message user">

      <div className="message-content">

        <h4>You</h4>

        <p>
          I need ultra futuristic AI website design.
        </p>

      </div>

    </div>

  </div>

  {/* ACTION BUTTONS */}

  <div className="ultra-actions">

    <button>
      Schedule Demo
    </button>

    <button>
      Explore Services
    </button>

    <button>
      Live AI Support
    </button>

  </div>

  {/* INPUT */}

  <div className="ultra-input-area">

    <div className="input-glow"></div>

    <input
      type="text"
      placeholder="Ask AI anything..."
    />

    <button className="ultra-send-btn">
      ➤
    </button>

    <button className="ultra-mic-btn">
      🎤
    </button>

  </div>

  {/* LIVE STATUS */}

  <div className="live-ai-status">

    <span className="live-dot"></span>

    <p>
      AI Assistant Online
    </p>

  </div>

</div>


      {/* RIGHT */}
      <div className="avatar-section">

        <div className="ring"></div>

        <img src={girl} alt="" />

      </div>

      {/* SERVICES */}
      <div className="services-section">

        <h2>Popular Services</h2>

        <div className="services-grid">

          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">✦</div>
              <p>{item}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AIAssistant;