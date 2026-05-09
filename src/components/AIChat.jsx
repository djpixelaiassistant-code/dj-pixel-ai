import { useState } from "react";

import TypingAnimation from "./TypingAnimation";

export default function AIChat({ setPreview }) {

  const [message, setMessage] = useState("");

  const [aiText, setAiText] = useState(
    "Waiting for prompt..."
  );

  const handleSend = () => {

    const text = message.toLowerCase();

    if (text.includes("dashboard")) {

      setPreview("dashboard");

      setAiText(
        "Generating AI dashboard UI..."
      );

    }

    else if (
      text.includes("ecommerce")
    ) {

      setPreview("ecommerce");

      setAiText(
        "Creating ecommerce experience..."
      );

    }

    else if (
      text.includes("portfolio")
    ) {

      setPreview("portfolio");

      setAiText(
        "Building futuristic portfolio..."
      );

    }

    else {

      setAiText(
        "Generating modern interface..."
      );

    }

    setMessage("");
  };

  return (

    <div className="chat-box">

      <div className="chat-messages">

        <div className="ai-message">
          <TypingAnimation />
        </div>

        <div className="user-message">

          {message || "Create futuristic dashboard"}

        </div>

        <div className="ai-message stream-text">

          {aiText}

        </div>

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask AI to generate UI..."
          className="chat-input"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          className="send-btn"
          onClick={handleSend}
        >
          Send
        </button>

      </div>

    </div>
  );
}