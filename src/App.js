import React from "react";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MessageSection from "./components/MessageSection";
import Confetti from "react-confetti";

function App() {
  return (
    <div className="bg-pinkTheme min-h-screen text-white">
      <Confetti />
      <HeroSection />
      <Gallery />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default App;
