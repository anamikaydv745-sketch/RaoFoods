import React from "react";
import aboutusbg from "../assets/aboutusbg.png";
import homelogo from "../assets/homelogo.png";

function AboutHero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      
      {/* 🔥 Background Image */}
      <img
        src={aboutusbg} // replace with your image path
        alt="About Us"
        className="absolute w-full  h-full object-cover"
      />

      {/* 🔥 Overlay */}
       <div className="absolute inset-0 bg-[#f0e6d3]/50"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-black">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Us
        </h1>

        <div className="flex items-center gap-2 text-lg">
          <span className="flex items-center gap-1">
            <img src={homelogo} alt="Home" className="w-6 h-6" />Home
          </span>
          <span>-</span>
          <span className="text-black font-bold">
            About Us
          </span>
        </div>

      </div>
    </div>
  );
}

export default AboutHero;