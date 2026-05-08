import React from "react";
import "../styles/aiassistant.css";

import aiGirl from "../assets/ai.png";

import ChatPanel from "./ChatPanel";
import PreviewPanel from "./PreviewPanel";
import VoiceButton from "./VoiceButton";
import SuggestionChips from "./SuggestionChips";

const AIAssistant = () => {
  return (
    <section className="ai-assistant-section">

      <div className="ai-left">

        <div className="ai-character-wrapper">
          <img
            src={aiGirl}
            alt="AI Assistant"
            className="ai-character"
          />

          <div className="ai-glow-circle"></div>
        </div>

      </div>

      <div className="ai-right">

        <ChatPanel />

        <SuggestionChips />

        <PreviewPanel />

        <VoiceButton />

      </div>

    </section>
  );
};

export default AIAssistant;