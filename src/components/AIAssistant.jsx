import { useState, useEffect } from "react";

export default function AIAssistant() {

  const messages = [
    "Hello 👋 Welcome to AI FUTURE",
    "We build futuristic AI experiences",
    "Chat, Voice & Smart Automation",
    "Interactive Designs for next generation",
    "Your imagination becomes reality here"
  ];

  const [index,setIndex] = useState(0);

  /* AUTO TEXT CHANGE */

  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex((prev)=>
        (prev + 1) % messages.length
      );

    },3000);

    return ()=>clearInterval(interval);

  },[]);

  return (

    <section className="ai-section">

      {/* LEFT SIDE */}

      <div className="ai-left">

        {/* AI VIDEO */}

        <div className="ai-avatar-wrap">

          <video
            className="ai-avatar"
            autoPlay
            muted
            loop
            playsInline
          >

            {/* DUMMY VIDEO */}
            <source
              src="/ai.mp4"
              type="video/mp4"
            />

          </video>

        </div>

        {/* AI STATUS */}

        <div className="ai-live">

          <span className="live-dot"></span>

          AI Assistant Online

        </div>

      </div>

      {/* CENTER */}

      <div className="ai-center">

        <h2 className="ai-title">

          AI FUTURE ASSISTANT

        </h2>

        <p className="ai-message">

          {messages[index]}

        </p>

        {/* CHAT BOX */}

        <div className="chat-box">

          <div className="chat-msg ai">

            👋 Hello, how can I help you today?

          </div>

          <div className="chat-msg user">

            I need futuristic website design

          </div>

        </div>

        {/* INPUT */}

        <div className="chat-input-wrap">

          <input
            type="text"
            placeholder="Type your message..."
          />

          <button>

            Send

          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="ai-right">

        <div className="preview-card">

          <div className="preview-glow"></div>

          <img
            src="/preview.png"
            alt="preview"
            className="preview-img"
          />

        </div>

      </div>

    </section>
  );
}