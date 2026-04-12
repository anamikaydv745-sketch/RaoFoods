import React from "react";

export default function clientSection() {
  const logos = [
    "/logos/pricol.png",
    "/logos/ficm.png",
    "/logos/sunbeam.png",
    "/logos/frasle.png",
    "/logos/krishna.png",
    "/logos/msp.png",
    "/logos/amom.png",
    "/logos/spm.png",
    "/logos/roop.png",
    "/logos/lgb.png",
    "/logos/cars24.png",
    "/logos/ifb.png",
    "/logos/wo.png",
    
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-12xl pt-10 md:text-6xl font-bold text-[#560416]">
          Our Clients
        </h2>
        <p className="text-black text-3xl mt-2">
          Trusted by leading companies
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition"
          >
            <img
              src={logo}
              alt={`client-${index}`}
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

