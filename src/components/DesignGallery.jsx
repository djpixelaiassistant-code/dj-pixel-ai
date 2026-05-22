import "../styles/designgallery.css";

import img1 from "../assets/offer1.png";
import img2 from "../assets/offer2.png";
import img3 from "../assets/offer3.png";

const gallery = [

  {
    image:img1,
    title:"AI Poster Design"
  },

  {
    image:img2,
    title:"Futuristic Branding"
  },

  {
    image:img3,
    title:"AI Creative Studio"
  },

  {
    image:img1,
    title:"Neon Thumbnail"
  },

  {
    image:img2,
    title:"Digital AI Artwork"
  },

  {
    image:img3,
    title:"Creative Motion Design"
  }

];

export default function DesignGallery(){

  return(

    <section
      id="design"
      className="design-gallery"
    >

      {/* TOP GLOW */}

      <div className="gallery-top-glow"></div>

      {/* HEADING */}

      <h2 className="gallery-heading">

        AI Design Gallery

      </h2>

      {/* GRID */}

      <div className="gallery-grid">

        {
          gallery.map((item,index)=>(

            <div
              className="gallery-card"
              key={index}
            >

              <img
                src={item.image}
                alt="gallery"
              />

              <div className="gallery-overlay">

                <h3>

                  {item.title}

                </h3>

              </div>

            </div>
          ))
        }

      </div>

    </section>
  );
}