import React from "react";
import { FaMicrophone } from "react-icons/fa";

const VoiceButton = () => {
  return (
    <button className="voice-button">

      <FaMicrophone />

      <span>Talk with AI</span>

    </button>
  );
};

export default VoiceButton;