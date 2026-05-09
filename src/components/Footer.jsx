import logoVideo from "../assets/logo.mp4";
import "../styles/footer.css";

export default function Footer() {

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
            Modern AI powered creative
            digital platform for next
            generation experience.
          </p>

        </div>

        {/* LINKS */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="#">
            Home
          </a>

          <a href="#">
            Services
          </a>

          <a href="#">
            Design
          </a>

          <a href="#">
            About
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            support@aifuture.com
          </p>

          <p>
            +91 9095 123 717
          </p>

          <p>
            Chennai, India
          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 DJ Pixel Studio AI.
        All Rights Reserved.

      </div>

    </footer>
  );
}