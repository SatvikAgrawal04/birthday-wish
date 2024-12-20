// Cake.jsx
import React from "react";
import "./Cake.css"; // Import the associated CSS file

const Cake = () => (
  <div className="hero-container relative w-full h-screen flex items-center justify-center bg-pink-500">
    <div className="cake">
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div className="candle">
        <div className="flame"></div>
      </div>
    </div>
  </div>
);

export default Cake;
