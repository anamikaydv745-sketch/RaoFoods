import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-cover bg-center relative text-white">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-950/90"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Kaanta Foods Private Limited
          </h2>
          <p className="text-sm leading-6 text-gray-200">
            Led by some of the best chefs in the industry, we create customized
            menus that cater to diverse tastes and dietary needs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {["F", "I", "in", "T", "P"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full cursor-pointer hover:scale-110 transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1">
            Short Link
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="text-orange-400 cursor-pointer">Clients</li>
            <li className="hover:text-orange-400 cursor-pointer">Testimonials</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block pb-1">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-200">
            <p>📞 0124-4076616</p>

            <p>
              ✉ pankaj.arora@kaantafoods.in <br />
              sonu.arora@kaantafoods.in
            </p>

            <p>
              📍 GB-2B, Ground Floor, Raheja Square, <br />
              Sector-2, IMT Manesar, Gurugram
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-500 text-center py-4 text-sm relative">
        <p>
          Copyright © Kaanta Foods Private Limited. All Rights Reserved |
          Website designed by PGPS Web Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;