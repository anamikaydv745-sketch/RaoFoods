import React from "react";
import thaliimg from "../assets/thali.png";
import raologo from "../assets/raologo.png";
import leaf from "../assets/leaf.png";
import dinner from "../assets/dinner.png";
import tomato from "../assets/tomato-slice.png";
import design1 from "../assets/design1.png";
import tomoto1 from "../assets/tomato.png";
import homelogo from "../assets/homelogo.png";
import pgroom from "../assets/pgroom.png";
import thaliya from "../assets/thaliya.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import { FaUser, FaUtensils, FaUsers } from "react-icons/fa";
import backgroundimg from "../assets/backgroundimg.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";



function Home() {
  return (
    <>
    <div className="w-full h-[100vh] flex items-center justify-between px-10 bg-[#bcb28a] text-white relative overflow-hidden">

      {/* 🔥 Left Content */}
      <div className="max-w-xl z-10">
        
        <p className="text-[#560416] mb-10   text-5xl md:text-5xl font-bold">
          Bringing Taste To Life
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-4">
          A Taste of Excellence  <br />
         in Every Bite
        </h1>

        <p className="text-[#0a0a0a] font-semibold mb-6">
          Rao Foods delivers high-quality catering services  
  corporate events, and special occasions. With a focus on taste, 
  hygiene, and presentation, we turn every meal into a memorable {" "}.

  <span className="relative inline-block">
    experience
    <img
      src={dinner}
      className="absolute -bottom-9 -right-12 w-10 animate-floatY"
    />
  </span>
        </p>
        <img
  src={tomato}
  className="absolute top-20 left-8 w-15 animate-floatY z-50"
/>

<img
  src={design1}
  className="absolute -bottom-1 -right-1 w-15 animate-floatY z-50"
/>
        
      </div>

      {/* 🔥 Right Image Section */}
      <div className="w-[45%] relative hidden md:flex items-center justify-center">

        {/* 🔥 Rotating Gradient Border */}
        <div className="absolute w-[460px] h-[460px] rounded-full animate-spin-slow p-[12px] bg-gradient-to-r from-[#560416] via-white to-[#a26e20]">
          
          {/* Inner circle (background match) */}
          <div className="w-full h-full rounded-full bg-[#bcb28a]"></div>
        </div>

        {/* 🔥 Thali Image */}
        <img
          src={thaliimg}
          alt="food"
          className="w-[436px] h-[436px] object-cover rounded-full z-10"
        />

        {/* 🔥 Logo Top Left */}
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-110 h-110  rounded-full flex items-center justify-center  z-20">
          <img
            src={raologo}
            alt="logo"
            className="w-50 h-50 object-contain"
          />
        </div>

        {/* 🔥 Floating Icons */}

<img
  src={leaf}
  className="absolute top-5 right-5 w-24 animate-floatY z-50"
/>



<img
  src={tomoto1}
  className="absolute bottom-10 left-10 w-15 animate-floatY z-20"
/>



      </div>

    </div>


 <div className="w-full min-h-screen bg-[#f5f5f5] px-10 py-12 flex flex-col lg:flex-row gap-10">

      {/* LEFT CONTENT */}
      <div className="flex-1">
        
        {/* Heading */}
        <p className="text-orange-500 text-2xl  font-semibold mb-2 flex items-center gap-2">
          Welcome To
         
        </p>

        <h1 className="text-4xl font-bold text-[#1c1c3c] mb-6">
          Rao Foods & PG Services
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          where we elevate dining experiences and in industrial, corporate,
          and outdoor settings across India. Our mission is to redefine workplace
          food by delivering flavorful, nutritious meals that energize your team.
        </p>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Our PG services offer a perfect blend of comfort, safety, and quality living. With freshly prepared meals, clean and well-maintained spaces, and a secure environment, we ensure a hassle-free stay for students and professionals alike.

         
        </p>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Card 1 */}
          <div className="bg-[#dbcaa4] p-6 rounded-2xl relative w-full md:w-1/2 shadow-md">
            
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#d9a32e] w-12 h-12 rounded-full flex items-center justify-center">
  
  <img 
    src={homelogo}   // 👈 your image path
    alt="pg"
    className="w-6 h-6 object-contain"
  />

</div>

            <h3 className="text-xl font-bold text-[#1c1c3c] mb-3">
              Comfortable PG Living
            </h3>

            <p className="text-gray-600 text-sm">
              We offer well-maintained PG accommodations with clean rooms, nutritious meals, and a secure environment,
               ensuring a comfortable stay for students and professionals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#dbcaa4] p-6 rounded-2xl relative w-full md:w-1/2 shadow-md">
            
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#d9a32e] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
              🔥
            </div>

            <h3 className="text-xl font-bold text-[#1c1c3c] mb-3">
              Passion for Food
            </h3>

            <p className="text-gray-600 text-sm">
              We use fresh ingredients to craft meals that are delicious
              and nutritious.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        
        <img
          src={img10}
          className="rounded-xl object-cover h-48 w-full"
        />

        <img
          src={pgroom}
          className="rounded-xl object-cover h-64 w-full"
        />

        <img
          src={thaliya}
          className="rounded-xl object-cover h-64 w-full"
        />

        <img
          src={img11}
          className="rounded-xl object-cover h-48 w-full"
        />

      </div>
    </div>


    <div className="relative w-full h-[500px] flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src={backgroundimg} // 👉 replace with your image
        alt="food"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-[#f0e6d3]/80"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-60 text-black text-5xl text-center">
        
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
  </>
  );
}

export default Home;



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
      <div className="relative w-60 h-60 flex items-center justify-center">
        
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
