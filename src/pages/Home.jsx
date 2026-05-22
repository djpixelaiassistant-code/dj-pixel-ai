import React from "react";

import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AIWelcome from "../components/AIWelcome";
import MainServices
from "../components/MainServices/MainServices";
import DesignGallery
from "../components/DesignGallery";

export default function Home(){

  return(

    <>

      <Navbar />

      <Hero />

      <AIWelcome />

      <MainServices />

      <DesignGallery />

      <About />

      <Footer />

    </>
  );
}