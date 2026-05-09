import { useState } from "react";

import "../styles/aiassistant.css";
import "../styles/avatar.css";
import "../styles/chat.css";
import "../styles/preview.css";
import "../styles/background.css";
import "../styles/responsive.css";

import BackgroundEffects from "./BackgroundEffects";
import AIPreview from "./AIPreview";
import AIChat from "./AIChat";
import AIAvatar from "./AIAvatar";

export default function AIAssistant() {

  const [preview, setPreview] = useState("dashboard");

  return (
    <section className="ai-assistant-section">

      <BackgroundEffects />

      <div className="ai-container">

        <AIPreview preview={preview} />

        <AIChat setPreview={setPreview} />

        <AIAvatar />

      </div>

    </section>
  );
}