import React from "react";
import homelogo from "../assets/homelogo.png";
import pgroom from "../assets/pgroom.png";
import thaliya from "../assets/thaliya.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";

function welcome() {
    return(
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
    )
}

export default welcome;