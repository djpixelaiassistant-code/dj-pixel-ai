import { Link }
from "react-router-dom";
import "./MainServices.css";

import useText
from "../../hooks/useText";

import {
  FaBroadcastTower,
  FaImage,
  FaIdCard,
  FaInstagram,
  FaYoutube,
  FaPalette,
  FaFileAlt,
  FaImages,
  FaWineBottle,
  FaHeart,
  FaPhotoVideo,
  FaCalendarAlt,
  FaVideo,
  FaChurch,
  FaHashtag,
  FaRobot,
  FaStore
} from "react-icons/fa";

function MainServices(){

  /* =========================
     LANGUAGE
  ========================= */

  const text =
  useText();

  /* =========================
     SERVICES
  ========================= */

  const services = [

    {
      title:text.neonLive,
      icon:<FaBroadcastTower />
    },

    {
      title:text.poster,
      icon:<FaImage />
    },

    {
      title:text.visiting,
      icon:<FaIdCard />
    },

    {
      title:text.social,
      icon:<FaInstagram />
    },

    {
      title:text.youtube,
      icon:<FaYoutube />
    },

    {
      title:text.logo,
      icon:<FaPalette />
    },

    {
      title:text.brochure,
      icon:<FaFileAlt />
    },

    {
      title:text.collage,
      icon:<FaImages />
    },

    {
      title:text.bottle,
      icon:<FaWineBottle />
    },

    {
      title:text.love,
      icon:<FaHeart />
    },

    {
      title:text.slider,
      icon:<FaPhotoVideo />
    },

    {
      title:text.calendar,
      icon:<FaCalendarAlt />
    },

    {
      title:text.video,
      icon:<FaVideo />
    },

    {
      title:text.church,
      icon:<FaChurch />
    },

    {
      title:text.caption,
      icon:<FaHashtag />
    },

    {
      title:text.prompt,
      icon:<FaRobot />
    },

    {
      title:text.market,
      icon:<FaStore />
    }

  ];

  return(

    <section
  id="services"
  className="main-services"
>

      {/* TITLE */}

      <h2 className="services-heading">

        {text.servicesTitle}

      </h2>

      {/* GRID */}

      <div className="services-grid">

        {
          services.map((item,index)=>(
		  <div
  className="service-card"

  key={index}
>

              {/* ICON */}

              <div className="icon-wrap">

                {item.icon}

              </div>

              {/* TITLE */}

              <h3>

                {item.title}

              </h3>

              {/* DESCRIPTION */}

              <p>

                {text.heroText}

              </p>

              {/* BUTTON */}

{
  item.title === text.neonLive

  ? (

    <Link to="/neon-live">

      <button
        className="service-btn"
      >

        Explore →

      </button>

    </Link>

  )

  : (

    <button
      className="service-btn"
    >

      Explore →

    </button>

  )
}

            </div>
          ))
        }

      </div>

    </section>
  );
}

export default MainServices;