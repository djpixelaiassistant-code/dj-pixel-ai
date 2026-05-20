import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import AIWelcome from "./components/AIWelcome";
import MainServices from "./components/MainServices";

import "./styles/index.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <AIWelcome />
	  <MainServices />
      <Footer />
    </>
  );
}

export default App;