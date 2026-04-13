import React from "react";
import thaliimg from "../assets/thali.png";
import raologo from "../assets/raologo.png";
import leaf from "../assets/leaf.png";
import dinner from "../assets/dinner.png";
import tomato from "../assets/tomato-slice.png";
import design1 from "../assets/design1.png";
import tomoto1 from "../assets/tomato.png";


function Hero() {
    return(
      // <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-10 bg-[#bcb28a] text-white relative overflow-hidden pt-[120px] md:pt-[160px]">
<div className="w-full max-w-[100vw] min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10 bg-[#bcb28a] text-white relative overflow-hidden pt-[120px] md:pt-[160px]">
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
           {/* <img
             src={dinner}
             className="absolute -bottom-9 -right-12 w-10 animate-floatY"
           /> */}
           <img
  src={dinner}
  className="absolute bottom-0 right-0 w-8 md:w-10 animate-floatY"
/>
         </span>
               </p>
               {/* <img
         src={tomato}
         className="absolute top-40 left-8 w-15 animate-floatY z-50"
       /> */}

       <img
  src={tomato}
  className="absolute top-20 left-2 w-8 md:w-12 animate-floatY z-50"
/>
       
       {/* <img
         src={design1}
         className="absolute -bottom-1 -right-1 w-15 animate-floatY z-50"
       /> */}

       <img
  src={design1}
  className="absolute bottom-0 right-0 w-8 md:w-12 animate-floatY z-50"
/>
               
             </div>
       
             {/* 🔥 Right Image Section */}
            <div className="w-full md:w-[45%] relative flex items-center justify-center mt-6 md:mt-0">

               {/* 🔥 Rotating Gradient Border */}
               <div className="absolute w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full animate-spin-slow p-[10px] md:p-[12px] bg-gradient-to-r from-[#560416] via-white to-[#a26e20]">

                 
                 {/* Inner circle (background match) */}
                 <div className="w-full h-full rounded-full bg-[#bcb28a]"></div>
               </div>
       
               {/* 🔥 Thali Image */}
               <img
                 src={thaliimg}
                 alt="food"
                 className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[436px] lg:h-[436px] object-cover rounded-full z-10"
               />
       
               {/* 🔥 Logo Top Left */}
               {/* <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-110 h-110  rounded-full flex items-center justify-center  z-20"> */}

               <div className="absolute top-2 left-2 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center z-20">
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
    )
}

export default Hero;
