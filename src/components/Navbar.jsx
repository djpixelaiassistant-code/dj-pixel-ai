import useText
from "../hooks/useText";

import {
  useLanguage
} from "../context/LanguageContext";

import {
  useState,
  useEffect,
  useRef
} from "react";

import "../styles/navbar.css";

import logo from "../assets/logo.png";

import {
  FaBars,
  FaTimes,
  FaUserPlus,
  FaSignInAlt
} from "react-icons/fa";

export default function Navbar() {

  /* =========================
     STATES
  ========================= */

  const [open,setOpen] =
  useState(false);

  const text =
  useText();

  const {
    language,
    setLanguage
  } = useLanguage();

  const menuRef =
  useRef(null);

  const toggleRef =
  useRef(null);

  /* =========================
     ALL LANGUAGES
  ========================= */

  const languages = [

    "English",
    "தமிழ்",
    "हिन्दी",
    "తెలుగు",
    "ಕನ್ನಡ",
    "മലയാളം",
    "বাংলা",
    "ગુજરાતી",
    "ਪੰਜਾਬੀ",
    "मराठी",
    "اردو",
    "অসমীয়া",
    "ଓଡ଼ିଆ",
    "संस्कृत",
    "नेपाली",

    "العربية",
    "Français",
    "Español",
    "Deutsch",
    "Italiano",
    "Português",
    "Русский",
    "中文",
    "日本語",
    "한국어",
    "Türkçe",
    "ไทย",
    "Bahasa",
    "Melayu",
    "TiếngViệt",
    "Polski",
    "Nederlands",
    "Svenska",
    "Norsk",
    "Dansk",
    "Suomi",
    "Ελληνικά",
    "Čeština",
    "Magyar",
    "Română",
    "Українська",
    "فارسی",
    "עברית",
    "Kiswahili",
    "Afrikaans",
    "Filipino",
    "Slovenčina",
    "Hrvatski",
    "Srpski",
    "Български",
    "Lietuvių",
    "Latviešu",
    "Eesti",
    "Català",
    "Galego",
    "Euskara",
    "Македонски",
    "Shqip",
    "Bosanski",
    "Монгол"

  ];

  /* =========================
     OUTSIDE CLICK CLOSE
  ========================= */

  useEffect(()=>{

    const handleOutside = (e)=>{

      if(
        menuRef.current &&
        !menuRef.current.contains(
          e.target
        ) &&
        toggleRef.current &&
        !toggleRef.current.contains(
          e.target
        )
      ){

        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutside
    );

    document.addEventListener(
      "touchstart",
      handleOutside
    );

    return ()=>{

      document.removeEventListener(
        "mousedown",
        handleOutside
      );

      document.removeEventListener(
        "touchstart",
        handleOutside
      );
    };

  },[]);

  /* =========================
     CLOSE MENU ON RESIZE
  ========================= */

  useEffect(()=>{

    const handleResize = ()=>{

      if(window.innerWidth > 768){

        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return ()=>{

      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  },[]);

  return(

    <header className="navbar">

      {/* RUNNING GLOW */}

      <div className="navbar-glow"></div>

      {/* LOGO */}

      <div className="logo-wrap">

        <img
          src={logo}
          alt="logo"
          className="logo"
        />

      </div>

      {/* DESKTOP MENU */}

      <nav className="menu">

        <a
          href="#home"
          className="nav-link"
        >
          {text.home}
        </a>

        <a
          href="#services"
          className="nav-link"
        >
          {text.services}
        </a>

        <a
          href="#design"
          className="nav-link"
        >
          {text.design}
        </a>

        <a
          href="#about"
          className="nav-link"
        >
          {text.about}
        </a>

        <a
          href="#contact"
          className="nav-link"
        >
          {text.contact}
        </a>

      </nav>

      {/* DESKTOP ACTIONS */}

      <div className="nav-actions">

        {/* LANGUAGE SELECTOR */}

        <select
          className="language-selector"

          value={language}

          onChange={(e)=>
            setLanguage(
              e.target.value
            )
          }
        >

          {
            languages.map((lang,index)=>(

              <option
                key={index}
                value={lang}
              >

                {lang}

              </option>
            ))
          }

        </select>

        {/* SIGN UP */}

        <button className="nav-btn">

          <span className="nav-icon">

            <FaUserPlus />

          </span>

          <span>

            {text.signup}

          </span>

        </button>

        {/* LOGIN */}

        <button className="sign-btn">

          <span className="nav-icon">

            <FaSignInAlt />

          </span>

          <span>

            {text.login}

          </span>

        </button>

      </div>

      {/* MOBILE TOGGLE */}

      <div
        className="mobile-toggle"

        ref={toggleRef}

        onClick={()=>
          setOpen(!open)
        }
      >

        {
          open
          ? <FaTimes />
          : <FaBars />
        }

      </div>

      {/* MOBILE MENU */}

      {
        open && (

          <div
            className="mobile-menu"
            ref={menuRef}
          >

            {/* MOBILE LANGUAGE */}

            <select
              className="
              language-selector
              mobile-language
              "

              value={language}

              onChange={(e)=>
                setLanguage(
                  e.target.value
                )
              }
            >

              {
                languages.map((lang,index)=>(

                  <option
                    key={index}
                    value={lang}
                  >

                    {lang}

                  </option>
                ))
              }

            </select>

            {/* LINKS */}

            <a
              href="#"

              onClick={()=>
                setOpen(false)
              }
            >

              {text.home}

            </a>

            <a
              href="#"

              onClick={()=>
                setOpen(false)
              }
            >

              {text.services}

            </a>

            <a
              href="#"

              onClick={()=>
                setOpen(false)
              }
            >

              {text.design}

            </a>

            <a
              href="#"

              onClick={()=>
                setOpen(false)
              }
            >

              {text.about}

            </a>

            <a
              href="#"

              onClick={()=>
                setOpen(false)
              }
            >

              {text.contact}

            </a>

            {/* MOBILE SIGNUP */}

            <button
              className="mobile-btn"

              onClick={()=>
                setOpen(false)
              }
            >

              <span className="nav-icon">

                <FaUserPlus />

              </span>

              <span>

                {text.signup}

              </span>

            </button>

            {/* MOBILE LOGIN */}

            <button
              className="mobile-btn"

              onClick={()=>
                setOpen(false)
              }
            >

              <span className="nav-icon">

                <FaSignInAlt />

              </span>

              <span>

                {text.login}

              </span>

            </button>

          </div>
        )
      }

    </header>
  );
}