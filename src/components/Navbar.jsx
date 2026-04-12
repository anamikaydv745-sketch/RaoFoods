import React from "react";
import raologo from "../assets/raologo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

      <div className="md:hidden text-white text-2xl cursor-pointer">
  <FaBars onClick={() => setIsOpen(true)} />
</div>

      {/* Right Side - Menu */}
<ul className="hidden md:flex gap-8 text-white text-2xl font-semibold">
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">
          <Link to="/">Home</Link>
        </li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">
           <Link to="/about">About Us</Link>
        </li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">
          <Link to="/services">Services</Link>
        </li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">
          <Link to="/clients">Clients</Link>
        </li>
        <li className="relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bcb28a] hover:text-white hover:-translate-y-1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

    </nav>

    {/* Sidebar */}
<div className={`fixed top-0 right-0 h-full w-[70%] bg-[#560416] z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>

  {/* Close button */}
  <div className="flex justify-end p-4 text-white text-2xl cursor-pointer">
    <FaTimes onClick={() => setIsOpen(false)} />
  </div>

  {/* Menu Items */}
  <ul className="flex flex-col gap-6  text-white text-xl font-semibold p-6">
    <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
    <li onClick={() => setIsOpen(false)}><Link to="/about">About Us</Link></li>
    <li onClick={() => setIsOpen(false)}><Link to="/services">Services</Link></li>
    <li onClick={() => setIsOpen(false)}><Link to="/clients">Clients</Link></li>
    <li onClick={() => setIsOpen(false)}><Link to="/contact">Contact</Link></li>
  </ul>

</div>

{isOpen && (
  <div 
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setIsOpen(false)}
  ></div>
)}
    </div>
  );
}

export default Navbar;