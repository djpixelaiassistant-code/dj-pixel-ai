import "./LivePreviewSection.css";

import DisplayControls
from "../DisplayControls/DisplayControls";

import {
  FaMusic,
  FaBible,
  FaSearchPlus,
  FaDesktop,
  FaMagic
} from "react-icons/fa";

export default function LivePreviewSection(){

  return(

    <section className="live-preview-section">

      {/* ===================================
          LEFT SIDE
      =================================== */}

      <div className="preview-left">

        {/* BADGE */}

        <div className="top-badge">

          LIVE • POWERFUL • SIMPLE

        </div>

        {/* TITLE */}

        <h1>

          Display What Matters.

          <span>

            Live. Instantly. Beautifully.

          </span>

        </h1>

        {/* DESCRIPTION */}

        <p>

          Lyrics, Bible Verses,
          Images and more —
          Live on multiple screens
          in seconds.

        </p>

        {/* FEATURE ICONS */}

        <div className="feature-icons">

          {/* LIVE LYRICS */}

          <div className="feature-box">

            <FaMusic />

            <span>

              Live Lyrics

            </span>

          </div>

          {/* BIBLE */}

          <div className="feature-box">

            <FaBible />

            <span>

              Bible Verses

            </span>

          </div>

          {/* IMAGE ZOOM */}

          <div className="feature-box">

            <FaSearchPlus />

            <span>

              Image Zoom

            </span>

          </div>

          {/* MULTI SCREEN */}

          <div className="feature-box">

            <FaDesktop />

            <span>

              Multi Screen

            </span>

          </div>

          {/* AI SEARCH */}

          <div className="feature-box">

            <FaMagic />

            <span>

              AI Search

            </span>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="preview-buttons">

          <button className="start-btn">

            Start Free Now →

          </button>

          <button className="demo-btn">

            Watch Demo ⦿

          </button>

        </div>

      </div>

      {/* ===================================
          RIGHT SIDE
      =================================== */}

      <div className="preview-right">

        {/* MAIN DISPLAY */}

        <div className="main-display">

          {/* TITLE */}

          <div className="display-title">

            Amazing Grace

          </div>

          {/* LYRICS DISPLAY */}

          <div className="lyrics-display">

            {/* DISPLAY CONTROLS */}

            <DisplayControls />

            {/* LYRICS CONTENT */}

            <div className="lyrics-content">

              <h2>

                Amazing grace how sweet the sound

              </h2>

              <h2>

                That saved a wretch like me

              </h2>

              <p>

                ஆமேன் கர்த்தர் என்னை மீட்டது

              </p>

            </div>

          </div>

          {/* MONITOR STAND */}

          <div className="monitor-stand"></div>

        </div>

        {/* ===================================
            FLOATING DEVICES
        =================================== */}

        <div className="floating-devices">

          {/* VERSE DEVICE */}

          <div className="device-card verse-device">

            <h4>

              John 3:16

            </h4>

            <p>

              For God so loved the world,
              that He gave His only Son.

            </p>

          </div>

          {/* IMAGE DEVICE */}

          <div className="device-card image-device">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200"
              alt="preview"
            />

          </div>

          {/* LYRICS PREVIEW DEVICE */}

          <div className="device-card lyrics-preview-device">

            <h4>

              Current Lyrics

            </h4>

            <span>

              Amazing grace...

            </span>

            <span>

              How sweet the sound

            </span>

            <span>

              That saved me

            </span>

          </div>

        </div>

      </div>

    </section>
  );
}