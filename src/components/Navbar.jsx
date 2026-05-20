import {
  useLanguage
} from "../context/LanguageContext";

import languageData
from "../translations/language";
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

  const [open,setOpen] = useState(false);

  const {
  language,
  setLanguage
} = useLanguage();

const text =
languageData[language];

  const menuRef = useRef(null);

  const toggleRef = useRef(null);


  /* =========================
     OUTSIDE CLICK CLOSE
  ========================= */

  useEffect(()=>{

    const handleOutside = (e)=>{

      if(
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
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
          href="#"
          className="nav-link"
        >
          {text.home}
        </a>

        <a
          href="#"
          className="nav-link"
        >
          {text.services}
        </a>

        <a
          href="#"
          className="nav-link"
        >
          {text.design}
        </a>

        <a
          href="#"
          className="nav-link"
        >
          {text.about}
        </a>

        <a
          href="#"
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
            setLanguage(e.target.value)
          }
        >

          <option value="EN">
            EN
          </option>

          <option value="தமிழ்">
            தமிழ்
          </option>

          <option value="हिन्दी">
            हिन्दी
          </option>

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

              <option value="EN">
                EN
              </option>

              <option value="தமிழ்">
                தமிழ்
              </option>

              <option value="हिन्दी">
                हिन्दी
              </option>

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