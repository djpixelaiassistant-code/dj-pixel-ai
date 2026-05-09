import React, {
  useEffect,
  useRef,
  useState
} from "react";

import { motion } from "framer-motion";

import Vapi from "@vapi-ai/web";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

import {
  FiMic,
  FiMicOff,
  FiVolume2,
  FiVolumeX,
  FiLock,
  FiUnlock
} from "react-icons/fi";

import MouseGlow from "./MouseGlow";
import ChatUI from "./ChatUI";
import Waveform from "./Waveform";

import "../styles/aiwelcome.css";
import "../styles/chatui.css";
import "../styles/mouseglow.css";
import "../styles/waveform.css";

import logo from "../assets/logo2.png";
import avatar from "../assets/ai-avatar.webp";

/* =========================================
   VAPI
========================================= */

const vapi = new Vapi(
  "e7c07938-2d1b-4d6d-8a88-3c3e5cc39231"
);

const assistantId =
  "d039c25f-cdb6-424f-a0af-523e24701c36";

export default function AIWelcome() {

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  /* =========================================
     STATES
  ========================================= */

  const [isMicMuted, setIsMicMuted] =
    useState(true);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isLocked, setIsLocked] =
    useState(false);

  const [showLock, setShowLock] =
    useState(false);

  const [isVoiceMuted, setIsVoiceMuted] =
    useState(false);

  const [talking, setTalking] =
    useState(false);

  const audioRef = useRef(null);

  const startY = useRef(0);

  /* =========================================
     SPEECH SUPPORT
  ========================================= */

  useEffect(() => {

    if (!browserSupportsSpeechRecognition) {

      console.log(
        "Speech Recognition not supported"
      );

    }

  }, [browserSupportsSpeechRecognition]);

  /* =========================================
     VAPI EVENTS
  ========================================= */

  useEffect(() => {

    if (!vapi) return;

    const handleSpeechStart = () => {

      setTalking(true);

    };

    const handleSpeechEnd = () => {

      setTalking(false);

    };

    const handleCallEnd = () => {

      setTalking(false);

      setIsRecording(false);

      setIsMicMuted(true);

    };

    vapi.on(
      "speech-start",
      handleSpeechStart
    );

    vapi.on(
      "speech-end",
      handleSpeechEnd
    );

    vapi.on(
      "call-end",
      handleCallEnd
    );

    return () => {

      try {

        vapi.stop();

      } catch (err) {

        console.log(err);

      }

    };

  }, []);

  /* =========================================
     AUTO INTRO VOICE
  ========================================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      if (
        audioRef.current &&
        !isVoiceMuted &&
        !isRecording
      ) {

        audioRef.current.play()
          .catch((err) => {
            console.log(err);
          });

        setTalking(true);

      }

    }, 4000);

    return () => clearTimeout(timer);

  }, [isVoiceMuted, isRecording]);

  /* =========================================
     AUDIO END
  ========================================= */

  const handleAudioEnd = () => {

    setTalking(false);

  };

  /* =========================================
     TOGGLE AI VOICE
  ========================================= */

  const toggleVoice = () => {

    const next = !isVoiceMuted;

    setIsVoiceMuted(next);

    if (next) {

      if (audioRef.current) {

        audioRef.current.pause();

        audioRef.current.currentTime = 0;

      }

      setTalking(false);

    } else {

      if (
        audioRef.current &&
        !isRecording
      ) {

        audioRef.current.play()
          .catch((err) => {
            console.log(err);
          });

        setTalking(true);

      }

    }

  };

  /* =========================================
     STOP RECORDING
  ========================================= */

  const stopRecording = () => {

    setIsRecording(false);

    setIsMicMuted(true);

    setIsLocked(false);

    setShowLock(false);

    setTalking(false);

    SpeechRecognition.stopListening();

    try {

      vapi.stop();

    } catch (err) {

      console.log(err);

    }

    document.body.style.overflow =
      "auto";

  };

  /* =========================================
     MIC MOVE
  ========================================= */

  const handleMicMove = (e) => {

    if (!isRecording) return;

    if (e.cancelable) {

      e.preventDefault();

    }

    const currentY =
      e.touches
        ? e.touches[0].clientY
        : e.clientY;

    const diff =
      startY.current - currentY;

    if (
      diff > 80 &&
      !isLocked
    ) {

      setIsLocked(true);

    }

  };

  /* =========================================
     MIC RELEASE
  ========================================= */

  const handleMicUp = () => {

    window.removeEventListener(
      "mousemove",
      handleMicMove
    );

    window.removeEventListener(
      "mouseup",
      handleMicUp
    );

    window.removeEventListener(
      "touchmove",
      handleMicMove
    );

    window.removeEventListener(
      "touchend",
      handleMicUp
    );

    if (isLocked) return;

    stopRecording();

  };

  /* =========================================
     MIC DOWN
  ========================================= */

  const handleMicDown = async (e) => {

    e.preventDefault();

    try {

      await vapi.start(assistantId);

      console.log("VAPI Started");

    } catch (err) {

      console.log(
        "VAPI ERROR:",
        err
      );

    }

    const y =
      e.touches
        ? e.touches[0].clientY
        : e.clientY;

    startY.current = y;

    if (audioRef.current) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

    }

    setTalking(false);

    setIsMicMuted(false);

    setIsRecording(true);

    setShowLock(true);

    resetTranscript();

    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US"
    });

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "mousemove",
      handleMicMove
    );

    window.addEventListener(
      "mouseup",
      handleMicUp
    );

    window.addEventListener(
      "touchmove",
      handleMicMove,
      { passive: false }
    );

    window.addEventListener(
      "touchend",
      handleMicUp
    );

  };

  /* =========================================
     LOCK TOGGLE
  ========================================= */

  const handleLockToggle = () => {

    if (isLocked) {

      stopRecording();

      return;

    }

    setIsLocked(true);

    setIsRecording(true);

    setIsMicMuted(false);

    setShowLock(true);

    resetTranscript();

    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US"
    });

  };

  return (

    <motion.section
      className="ai-welcome-section"

      initial={{
        opacity: 0,
        scale: 0.96
      }}

      animate={{
        opacity: 1,
        scale: 1
      }}

      transition={{
        duration: 1.2
      }}
    >

      {/* MOUSE GLOW */}

      <MouseGlow />

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/voice.mp3"
        onEnded={handleAudioEnd}
      />

      {/* LEFT */}

      <div className="welcome-left">

        <motion.img
          src={logo}
          alt="logo"
          className="welcome-logo"

          initial={{
            opacity: 0,
            x: -60
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1
          }}
        />

      </div>

      {/* CENTER */}

      <motion.div
        className="welcome-center"

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}
      >

        <h1>

          <span>WELCOME TO</span>

          DJ PIXEL

          <br />

          FUTURE AI

          <br />

          DESIGNER

        </h1>

        <div className="typing-text">

          {isRecording && (

            <Waveform
              isRecording={isRecording}
            />

          )}

          {
            talking
              ? "AI Speaking..."
              : isRecording
              ? "Listening..."
              : "Designing Future Experiences..."
          }

        </div>

        <p className="welcome-description">

          AI powered creative studio
          building futuristic digital
          experiences, premium designs
          and next-level interactive
          interfaces.

        </p>

        <button className="welcome-btn">

          Start AI Experience

        </button>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="welcome-right"

        initial={{
          opacity: 0,
          scale: 0.8
        }}

        animate={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 1
        }}
      >

        <div className="avatar-ring"></div>

        <div className="avatar-platform"></div>

        <img
          src={avatar}
          alt="AI Avatar"

          className={`welcome-avatar ${
            talking
              ? "talking"
              : ""
          }`}
        />

        {/* CHAT BUBBLE */}

        <motion.div
          className="chat-bubble"

          animate={{
            y: [0, -8, 0]
          }}

          transition={{
            repeat: Infinity,
            duration: 3
          }}
        >

          {
            talking
              ? "AI Speaking 👋"
              : isRecording
              ? transcript ||
                "Listening..."
              : "AI Assistant Ready"
          }

        </motion.div>

        {/* CHAT UI */}

        <div
          style={{
            marginTop: "20px",
            width: "100%"
          }}
        >

          <ChatUI
            transcript={transcript}
          />

        </div>

        {/* LOCK BUTTON */}

        {showLock && (

          <button
            className={`mic-lock-btn ${
              isLocked
                ? "locked"
                : ""
            }`}

            onClick={
              handleLockToggle
            }
          >

            {
              isLocked
                ? <FiLock />
                : <FiUnlock />
            }

          </button>

        )}

        {/* CONTROLS */}

        <div className="voice-controls">

          {/* MIC */}

          <div className="control-group">

            <button
              className={`mic-toggle
              ${
                isMicMuted
                  ? "muted"
                  : "active"
              }
              ${
                isRecording
                  ? "recording"
                  : ""
              }
              ${
                isLocked
                  ? "locked-mode"
                  : ""
              }`}

              onMouseDown={
                handleMicDown
              }

              onTouchStart={
                handleMicDown
              }
            >

              <div className="mic-slide-wrap">

                <div className="mic-slide-icon">

                  {
                    isMicMuted
                      ? <FiMicOff />
                      : <FiMic />
                  }

                </div>

              </div>

            </button>

          </div>

          {/* VOICE */}

          <div className="control-group">

            <button
              className={`mic-toggle ${
                isVoiceMuted ||
                isRecording
                  ? "muted voice-muted-auto"
                  : "active"
              }`}

              onClick={toggleVoice}
            >

              {
                isVoiceMuted ||
                isRecording
                  ? <FiVolumeX />
                  : <FiVolume2 />
              }

            </button>

          </div>

        </div>

      </motion.div>

    </motion.section>

  );

}