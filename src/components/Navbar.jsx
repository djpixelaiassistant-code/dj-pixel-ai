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

  const [open,setOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleRef = useRef(null);

  const menu = [
    "Home",
    "Services",
    "Design",
    "About",
    "Contact"
  ];

  /* =========================
     OUTSIDE CLICK CLOSE
  ========================= */

  useEffect(()=>{

    const handleOutside = (e)=>{

      if(
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
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

  return (

    <header className="navbar">

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

        {menu.map((item,index)=>(

          <a
            href="#"
            key={index}
            className="nav-link"
          >
            {item}
          </a>

        ))}

      </nav>

      {/* DESKTOP BUTTONS */}

      <div className="nav-actions">

        {/* SIGN UP */}

        <button className="nav-btn">

          <span className="nav-icon">
            <FaUserPlus />
          </span>

          <span>
            Sign Up
          </span>

        </button>

        {/* LOGIN */}

        <button className="sign-btn">

          <span className="nav-icon">
            <FaSignInAlt />
          </span>

          <span>
            Login
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

        {open
          ? <FaTimes />
          : <FaBars />
        }

      </div>

      {/* MOBILE MENU */}

      {open && (

        <div
          className="mobile-menu"
          ref={menuRef}
        >

          {menu.map((item,index)=>(

            <a
              href="#"
              key={index}
              onClick={()=>
                setOpen(false)
              }
            >
              {item}
            </a>

          ))}

          {/* MOBILE SIGNUP */}

          <button className="mobile-btn">

            <span className="nav-icon">
              <FaUserPlus />
            </span>

            <span>
              Sign Up
            </span>

          </button>

          {/* MOBILE LOGIN */}

          <button className="mobile-btn">

            <span className="nav-icon">
              <FaSignInAlt />
            </span>

            <span>
              Login
            </span>

          </button>

        </div>

      )}

    </header>
  );
}