import "./NeonLiveNavbar.css";

import {
  FaGlobe,
  FaChevronDown,
  FaBars,
  FaTimes
} from "react-icons/fa";

import {
  useState
} from "react";
import {
  Link
} from "react-router-dom";

import logo from "../../assets/neonlogo.png";

import {
  useLanguage
} from "../../context/LanguageContext";

import languageData
from "../../translations/language";

export default function NeonLiveNavbar(){

  /* LANGUAGE */

  const {
    language,
    setLanguage
  } = useLanguage();

  const text =
  languageData[language];

  /* MOBILE MENU */

  const [
    mobileMenu,
    setMobileMenu
  ] = useState(false);

  return(

    <>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="neon-navbar">

        {/* LEFT */}

        <div className="neon-left">

          <img
            src={logo}
            alt="logo"
            className="neon-logo"
          />

        </div>

        {/* CENTER */}

        <nav className="neon-links">

          <Link to="/">

  {text.home}

</Link>

          <a href="#">

            {text.lyrics}

          </a>

          <a href="#">

            {text.bible}

          </a>

          <a href="#">

            {text.media}

          </a>

          <a href="#">

            {text.screens}

          </a>

          <a href="#">

            {text.aiSearch}

          </a>

          <a href="#">

            {text.pricing}

          </a>

          <a href="#">

            {text.contact}

          </a>

        </nav>

        {/* RIGHT */}

        <div className="neon-right">

          {/* LANGUAGE */}

          <div className="language-box">

            <FaGlobe />

            <select
              value={language}
              onChange={(e)=>
                setLanguage(
                  e.target.value
                )
              }
            >

              {
                Object.keys(
                  languageData
                ).map((lang,index)=>(

                  <option
                    key={index}
                    value={lang}
                  >

                    {lang}

                  </option>
                ))
              }

            </select>

            <FaChevronDown
              className="arrow-icon"
            />

          </div>

          {/* MENU BUTTON */}

          <button
            className="menu-btn"

            onClick={()=>
              setMobileMenu(true)
            }
          >

            <FaBars />

          </button>

        </div>

      </header>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        className={`mobile-menu-overlay ${
          mobileMenu
          ? "show-menu"
          : ""
        }`}

        onClick={()=>
          setMobileMenu(false)
        }
      >

        {/* SIDE PANEL */}

        <div
          className="mobile-menu-panel"

          onClick={(e)=>
            e.stopPropagation()
          }
        >

          {/* CLOSE BUTTON */}

          <button
            className="close-btn"

            onClick={()=>
              setMobileMenu(false)
            }
          >

            <FaTimes />

          </button>

          {/* MOBILE LINKS */}

          <nav className="mobile-links">

            <Link
  to="/"

  onClick={()=>
    setMobileMenu(false)
  }
>

  {text.home}

</Link>

            <a href="#">

              {text.lyrics}

            </a>

            <a href="#">

              {text.bible}

            </a>

            <a href="#">

              {text.media}

            </a>

            <a href="#">

              {text.screens}

            </a>

            <a href="#">

              {text.aiSearch}

            </a>

            <a href="#">

              {text.pricing}

            </a>

            <a href="#">

              {text.contact}

            </a>

          </nav>

          {/* MOBILE LANGUAGE */}

          <div className="mobile-language">

            <FaGlobe />

            <select
              value={language}
              onChange={(e)=>
                setLanguage(
                  e.target.value
                )
              }
            >

              {
                Object.keys(
                  languageData
                ).map((lang,index)=>(

                  <option
                    key={index}
                    value={lang}
                  >

                    {lang}

                  </option>
                ))
              }

            </select>

          </div>

          {/* MOBILE BUTTONS */}

          <div className="mobile-auth-buttons">

            {/* LOGIN */}

            <button className="mobile-login">

              {text.login}

            </button>

            {/* SIGNUP */}

            <button className="mobile-signup">

              {text.signup}

            </button>

          </div>

        </div>

      </div>

    </>

  );
}