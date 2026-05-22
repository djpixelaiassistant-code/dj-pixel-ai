import "../styles/neonlive.css";

import NeonLiveNavbar
from "../components/NeonLiveNavbar/NeonLiveNavbar";

import LivePreviewSection
from "../components/LivePreviewSection/LivePreviewSection";

export default function NeonLive(){

  return(

    <>

      {/* NAVBAR */}

      <NeonLiveNavbar />

      {/* PAGE */}

      <div className="neon-page">

        {/* BACKGROUND GLOW */}

        <div className="bg-glow"></div>

        {/* LIVE PREVIEW */}

        <LivePreviewSection />

      </div>

    </>

  );
}