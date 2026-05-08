import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

import "./styles/index.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <AIAssistant />

      <Footer />
    </>
  );
}

export default App;