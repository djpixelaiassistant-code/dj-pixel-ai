import React, {
  useEffect,
  useRef,
  useState
} from "react";

import "../styles/aiwelcome.css";

import {
  FiMic,
  FiMicOff,
  FiVolume2,
  FiVolumeX,
  FiLock,
  FiUnlock
} from "react-icons/fi";

import logo from "../assets/logo2.png";
import avatar from "../assets/ai-avatar.webp";

export default function AIWelcome() {

  /* =========================================
     MIC STATES
  ========================================= */

  const [isMicMuted, setIsMicMuted] =
    useState(true);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isLocked, setIsLocked] =
    useState(false);

  const [showLock, setShowLock] =
    useState(false);

  /* =========================================
     AI VOICE STATES
  ========================================= */

  const [isVoiceMuted, setIsVoiceMuted] =
    useState(false);

  const [talking, setTalking] =
    useState(false);

  const audioRef = useRef(null);

  /* =========================================
     DRAG START POSITION
  ========================================= */

  const startY = useRef(0);

  /* =========================================
     AUTO WELCOME VOICE
  ========================================= */

  useEffect(() => {

    const timer = setTimeout(() => {

      if (
        audioRef.current &&
        !isVoiceMuted
      ) {

        audioRef.current.play();

        setTalking(true);
      }

    }, 4000);

    return () => clearTimeout(timer);

  }, []);

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

    const next =
      !isVoiceMuted;

    setIsVoiceMuted(next);

    if (next) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

      setTalking(false);

    } else {

      audioRef.current.play();

      setTalking(true);
    }
  };

  /* =========================================
     MIC DOWN
  ========================================= */

  const handleMicDown = (e) => {

    const y =
      e.touches
        ? e.touches[0].clientY
        : e.clientY;

    startY.current = y;

    /* STOP AI VOICE */

    if (audioRef.current) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;
    }

    setTalking(false);

    /* START RECORD */

    setIsMicMuted(false);

    setIsRecording(true);

    setShowLock(true);

    /* GLOBAL EVENTS */

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
      handleMicMove
    );

    window.addEventListener(
      "touchend",
      handleMicUp
    );
  };

  /* =========================================
     MIC MOVE
  ========================================= */

  const handleMicMove = (e) => {

    if (!isRecording) return;

    const currentY =
      e.touches
        ? e.touches[0].clientY
        : e.clientY;

    const diff =
      startY.current - currentY;

    /* DRAG UP LOCK */

    if (
      diff > 80 &&
      !isLocked
    ) {

      setIsLocked(true);

      console.log("Mic Locked");
    }
  };

  /* =========================================
     MIC RELEASE
  ========================================= */

  const handleMicUp = () => {

    /* REMOVE EVENTS */

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

    /* IF LOCKED
       KEEP RECORDING */

    if (isLocked) {

      return;
    }

    /* NORMAL RELEASE */

    setIsRecording(false);

    setIsMicMuted(true);

    setShowLock(false);

    console.log("Recording Stopped");
  };

  /* =========================================
     LOCK TOGGLE
  ========================================= */

  const handleLockToggle = () => {

    /* STOP LOCK MODE */

    if (isLocked) {

      setIsLocked(false);

      setIsRecording(false);

      setIsMicMuted(true);

      setShowLock(false);

      console.log(
        "Locked Recording Stopped"
      );

      return;
    }

    /* ENABLE LOCK */

    setIsLocked(true);

    setIsRecording(true);

    setIsMicMuted(false);

    setShowLock(true);

    console.log(
      "Locked Recording Active"
    );
  };

  return (

    <section className="ai-welcome-section">

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/voice.mp3"
        onEnded={handleAudioEnd}
      />

      {/* LEFT */}

      <div className="welcome-left">

        <img
          src={logo}
          alt="logo"
          className="welcome-logo"
        />

      </div>

      {/* CENTER */}

      <div className="welcome-center">

        <h1>

          <span>WELCOME TO</span>

          DJ PIXEL

          <br />

          FUTURE AI

          <br />

          DESIGNER

        </h1>

        <div className="typing-text">

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

      </div>

      {/* RIGHT */}

      <div className="welcome-right">

        <div className="avatar-ring"></div>

        <div className="avatar-platform"></div>

        <img
          src={avatar}
          alt="AI Avatar"
          className={`welcome-avatar ${
            talking ? "talking" : ""
          }`}
        />

        <div className="chat-bubble">

          {
            talking
              ? "Welcome Back 👋"
              : isRecording
              ? "AI Listening 🎤"
              : "AI Assistant Ready"
          }

        </div>

        {/* LOCK BUTTON */}

        {showLock && (

          <button
            className={`mic-lock-btn ${
              isLocked
                ? "locked"
                : ""
            }`}
            onClick={handleLockToggle}
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
              onMouseDown={handleMicDown}
              onTouchStart={handleMicDown}
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

          {/* AI VOICE */}

          <div className="control-group">

            <button
className={`mic-toggle ${
  isVoiceMuted || isRecording
    ? "muted voice-muted-auto"
    : "active"
}`}
              onClick={toggleVoice}
            >

              {
                isVoiceMuted
                  ? <FiVolumeX />
                  : <FiVolume2 />
              }

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}