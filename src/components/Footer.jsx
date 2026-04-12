import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import teleponecall from "../assets/telephonecall.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import { Link } from "react-router-dom";


const Footer = () => {

    const socialIcons = [
  { icon: FaFacebookF, link: "https://www.facebook.com/Raofoodservice/" },
  { icon: FaInstagram, link: "https://www.instagram.com/raofoodservice?igsh=bjlhNnljeXRpdTBw" },
 
];
  return (
    <footer className=" bg-cover bg-center relative text-white">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#bcb28a]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#560416] mb-4">
            Rao Foods Private Limited
          </h2>
          <p className="text-l leading-6 text-white">
            Led by some of the best chefs in the industry, we create customized
            menus that cater to diverse tastes and dietary needs.
          </p>

          {/* Social Icons */}
          



<div className="flex gap-3 mt-6">
  {socialIcons.map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center bg-[#560416] text-white rounded-full cursor-pointer 
        hover:scale-110 hover:bg-orange-500 transition duration-300"
      >
        <Icon />
      </a>
    );
  })}
</div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#560416] inline-block pb-1">
            Short Link
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#560416] cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#560416] cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-[#560416] cursor-pointer">
              <Link to="/clients">Clients</Link>
            </li>
            <li className="hover:text-[#560416] cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-[#560416] inline-block pb-1">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-white">
            <p><img src={teleponecall} alt="Phone" className="inline-block size-6 mr-2" /> 9785527941</p>

            <p>
              <img src={email} alt="Email" className="inline-block size-6 mr-2" /> raofoodservice@gmail.com <br />
             
            </p>

            <p>
              <img src={location} alt="Location" className="inline-block size-6 mr-2" /> 
               Mohan Vihar Plot No.4, <br />
               Bhiwadi , Rajasthan
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#560416] text-center py-4 text-sm relative">
        <p>
          Copyright @ Rao Foods Private Limited. All Rights Reserved |
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;