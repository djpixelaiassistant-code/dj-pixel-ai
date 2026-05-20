import logoVideo from "../assets/logo.mp4";
import "../styles/footer.css";

import { useLanguage }
from "../context/LanguageContext";

import languageData
from "../translations/language";

export default function Footer() {

  /* =========================
     LANGUAGE
  ========================= */

  const {
    language
  } = useLanguage();

  const text =
    languageData[language];

  return (

    <footer className="footer">

      {/* TOP GLOW */}

      <div className="footer-glow"></div>

      {/* CONTENT */}

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          {/* LOGO + VIDEO */}

          <div className="footer-brand-top">

            <h2 className="footer-logo">
              DJ Pixel Studio AI
            </h2>

            <div className="footer-video-wrap">

              <video
                className="footer-video"
                autoPlay
                muted
                loop
                playsInline
              >

                <source
                  src={logoVideo}
                  type="video/mp4"
                />

              </video>

            </div>

          </div>

          <p className="footer-text">

            {text.footerDesc}

          </p>

        </div>

        {/* LINKS */}

        <div className="footer-links">

          <h3>

            {text.quickLinks}

          </h3>

          <a href="#">

            {text.home}

          </a>

          <a href="#">

            {text.services}

          </a>

          <a href="#">

            {text.design}

          </a>

          <a href="#">

            {text.about}

          </a>

          <a href="#">

            {text.contact}

          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>

            {text.contact}

          </h3>

          <p>
            support@aifuture.com
          </p>

          <p>
            +91 9095 123 717
          </p>

          <p>

            {text.location}

          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 DJ Pixel Studio AI.

        {text.rights}

      </div>

    </footer>
  );
}