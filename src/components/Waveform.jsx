import React from "react";

export default function Waveform({
  isRecording
}) {

  return (

    <div className="waveform-wrap">

      {[...Array(20)].map((_, i) => (

        <span
          key={i}
          className={
            isRecording
              ? "wave active"
              : "wave"
          }
        />

      ))}

    </div>
  );
}