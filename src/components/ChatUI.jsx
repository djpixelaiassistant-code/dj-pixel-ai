import React from "react";

export default function ChatUI({
  transcript
}) {

  return (

    <div className="chat-ui">

      <div className="chat-msg user">

        {transcript || "Say Something..."}

      </div>

      <div className="chat-msg ai">

        AI Processing...

      </div>

    </div>
  );
}