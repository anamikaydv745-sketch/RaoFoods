import React from "react";
import raologo from "../assets/raologo.png";

function Navbar() {
  return (
    <div className="bg-[#bcb28a] relative z-50 ">
    <nav className="w-[100%] fixed top-0 h-22 bg-[#560416] shadow-md rounded-full px-8 py-4 flex items-center justify-between  z-50">
      
      {/* Left Side - Logo/Text */}
      <div className="flex items-center gap-3 h-full">
        <img 
          src={raologo} 
          alt="Rao Foods Logo" 
          className="h-30 mt-4 w-auto object-contain"
        />
       
      </div>

      {/* Right Side - Menu */}
      <ul className="flex gap-8 text-white text-2xl md:text-2xl font-semibold">
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">Home</li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">About Us</li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">Services</li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">Clients</li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">Contact</li>
      </ul>

    </nav>
    </div>
  );
}

export default Navbar;