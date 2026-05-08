import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";

import "./styles/index.css";
import "./styles/aiassistant.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* AI Assistant Section */}
      <AIAssistant />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;