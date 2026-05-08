import React from "react";

import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";

const cards = [
  {
    image: offer1,
    title: "AI Automation",
  },
  {
    image: offer2,
    title: "Futuristic Dashboard",
  },
  {
    image: offer3,
    title: "Voice Interaction",
  },
];

const PreviewPanel = () => {
  return (
    <div className="preview-grid">

      {cards.map((card, index) => (
        <div className="preview-card" key={index}>

          <img src={card.image} alt="" />

          <h3>{card.title}</h3>

        </div>
      ))}

    </div>
  );
};

export default PreviewPanel;