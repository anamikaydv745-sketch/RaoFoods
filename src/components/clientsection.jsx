import React from "react";
import aksh from "../assets/aksh.png";
import avsl from "../assets/avsl.png";
import capstone from "../assets/capstone.png";
import esic from "../assets/esic.png";
import foxsun from "../assets/foxsun.png";
import hipower from "../assets/hipower.png";
import hitech from "../assets/hitech.png";
import indica from "../assets/indica.png";
import jkpaints from "../assets/jkpaints.png";
import kei from "../assets/kei.png";
import kesri from "../assets/kesri.png";
import newcon from "../assets/newcon.png";
import orientcables from "../assets/orientcables.png";
import ral from "../assets/ral.png";
import ratan from "../assets/ratan.png";
import sbi from "../assets/sbi.png";
import westerncontrol from "../assets/westerncontrol.png";


export default function clientSection() {
  const logos = [
  aksh,
  avsl,
  capstone,
  esic,
  foxsun,
  hipower,
  hitech,
  indica,
  jkpaints,
  kei,
  kesri,
  newcon,
  orientcables,
  ral,
  ratan,
  sbi,
  westerncontrol
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
              className="h-12 object-contain  transition duration-300"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

