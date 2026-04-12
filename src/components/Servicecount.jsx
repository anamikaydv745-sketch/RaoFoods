import React from "react";
import { FaUser, FaUtensils, FaUsers } from "react-icons/fa";
import backgroundimg from "../assets/backgroundimg.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function servicecount(){
    return(
        <div className="relative w-full min-h-[500px] md:h-[500px] flex items-center justify-center">
              
              {/* Background Image */}
              <img
                src={backgroundimg} // 👉 replace with your image
                alt="food"
                className="absolute w-full h-full object-cover"
              />
        
              {/* Dark Overlay */}
              <div className="absolute w-full h-full bg-[#f0e6d3]/80"></div>
        
              {/* Content */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 text-black text-5xl text-center">
                
                {/* Item 1 */}
                <StatItem
                  number="1200+"
                  label="Meals Served Everyday"
                  icon={<FaUser />}
                />
        
                {/* Item 2 */}
                {/* <StatItem
                  number="1000+"
                  label="Culinary Experts"
                  icon={<FaUtensils />}
                /> */}
        
                {/* Item 3 */}
                <StatItem
                  number="52+"
                  label="Clients"
                  icon={<FaUsers />}
                />
        
              </div>
            </div>
    )
}



function StatItem({ number, label, icon }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.5,    // trigger when 50% visible
  });

  // extract number (remove + and commas)
  const cleanNumber = parseInt(number.replace(/[^0-9]/g, ""));

  return (
    <div ref={ref} className="flex flex-col items-center">
      
      {/* Circle */}
      <div className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center">
        
        <div className="absolute w-full h-full rounded-full border-6 border-white/30"></div>

        <div className="absolute w-full h-full rounded-full border-8 border-black border-t-transparent animate-spin-slow"></div>

        {/* 🔥 Animated Number */}
        <h2 className="text-3xl font-bold">
          {inView ? (
            <CountUp end={cleanNumber} duration={3} separator="," />
          ) : (
            "0"
          )}
          +
        </h2>
      </div>

      {/* Icon */}
      <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center -mt-6 text-white text-lg shadow-lg">
        {icon}
      </div>

      {/* Label */}
      <p className="mt-4 text-3xl font-bold">{label}</p>
    </div>
  );
}

export default servicecount;