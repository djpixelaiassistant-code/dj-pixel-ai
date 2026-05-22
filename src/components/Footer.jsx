import logoVideo
from "../assets/logo.mp4";

import "../styles/footer.css";

import useText
from "../hooks/useText";

export default function Footer() {

  /* =========================
     LANGUAGE
  ========================= */

  const text =
  useText();

  return (

    <footer
  id="contact"
  className="footer"
>

      {/* TOP GLOW */}

      <div className="footer-glow"></div>

      {/* CONTENT */}

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          {/* LOGO + VIDEO */}

          <div className="footer-brand-top">

            <h2 className="footer-logo">

              {text.footerLogo}

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

          <a href="#home">

            {text.home}

          </a>

          <a href="#services">

            {text.services}

          </a>

          <a href="#design">

            {text.design}

          </a>

          <a href="#about">

            {text.about}

          </a>

          <a href="#contact">

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

        {" "}

        {text.rights}

      </div>

    </footer>
  );
}