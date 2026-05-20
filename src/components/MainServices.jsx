import "../styles/MainServices.css";

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

/* LANGUAGE */
import { useLanguage } from "../context/LanguageContext";
import languageData from "../translations/language";

function MainServices() {
	

  /* LANGUAGE */
  const { language } = useLanguage();

  /* SAFE LANGUAGE FALLBACK FIX */
  const text = languageData?.[language] || languageData?.EN;

  /* SERVICES */
  const services = [
    {
      title: text?.neonLive || "Neon Live Stream",
      icon: <FaBroadcastTower />
    },
    {
      title: text?.poster || "AI Poster Design",
      icon: <FaImage />
    },
    {
      title: text?.visiting || "Visiting Card AI",
      icon: <FaIdCard />
    },
    {
      title: text?.social || "Social Media Post Generator",
      icon: <FaInstagram />
    },
    {
      title: text?.youtube || "YouTube Thumbnail AI",
      icon: <FaYoutube />
    },
    {
      title: text?.logo || "Logo Generator",
      icon: <FaPalette />
    },
    {
      title: text?.brochure || "AI Brochure Design",
      icon: <FaFileAlt />
    },
    {
      title: text?.collage || "AI Photo Collage Design",
      icon: <FaImages />
    },
    {
      title: text?.bottle || "AI Bottle Sticker Design",
      icon: <FaWineBottle />
    },
    {
      title: text?.love || "AI Love Card Design",
      icon: <FaHeart />
    },
    {
      title: text?.slider || "AI Photo Slider",
      icon: <FaPhotoVideo />
    },
    {
      title: text?.calendar || "AI Calendar Design",
      icon: <FaCalendarAlt />
    },
    {
      title: text?.video || "Reel / Video Generator",
      icon: <FaVideo />
    },
    {
      title: text?.church || "Church Media Store",
      icon: <FaChurch />
    },
    {
      title: text?.caption || "AI Caption + Hashtag",
      icon: <FaHashtag />
    },
    {
      title: text?.prompt || "Custom Search AI Prompt",
      icon: <FaRobot />
    },
    {
      title: text?.market || "Template Marketplace",
      icon: <FaStore />
    }
  ];

  return (
    <section className="main-services">

      {/* TITLE FIX */}
      <h2 className="services-title">
        {text?.servicesTitle || "DJ Pixel AI Studio Tools"}
      </h2>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default MainServices;