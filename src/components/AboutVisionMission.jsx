import React from "react";
import { Target, Lightbulb, Gem } from "lucide-react";
import missionimg from "../assets/missionimg2.png";

function VisionMission() {
  return (
    <div className="w-full bg-[#eef2ef] py-16 px-4 md:px-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔥 LEFT SIDE CARDS */}
        <div className="space-y-8">

          {/* 🔶 Card 1 */}
          <div className="flex items-start gap-6 bg-[#bcb28a] text-black p-6 rounded-xl shadow-lg">
            
            <div className="bg-[#560416] p-4 rounded-xl">
              <Target size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Vision</h2>
              <p className="text-black leading-relaxed">
                To become a trusted and beloved brand known for offering
                high-quality, delicious and nutritious food that enhances
                people’s lives.
              </p>
            </div>
          </div>

          {/* 🔶 Card 2 */}
          <div className="flex items-start gap-6 bg-[#bcb28a] text-black p-6 rounded-xl shadow-lg">
            
            <div className="bg-[#560416] p-4 rounded-xl">
              <Lightbulb size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Mission</h2>
              <p className="text-black leading-relaxed">
                To provide exceptional value to our customers by delivering
                high-quality food and impressive services with empowered staff.
              </p>
            </div>
          </div>

          {/* 🔶 Card 3 */}
          <div className="flex items-start gap-6 bg-[#bcb28a] text-black p-6 rounded-xl shadow-lg">
            
            <div className="bg-[#560416] p-4 rounded-xl">
              <Gem size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Core Value</h2>
              <p className="text-black leading-relaxed">
                Hygiene first, quality must, customer satisfaction, respect for
                individuals, and zero waste approach.
              </p>
            </div>
          </div>

        </div>

        {/* 🔥 RIGHT SIDE IMAGE DESIGN */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Image */}
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rotate-45 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={missionimg} // your image
              alt="restaurant"
              className="w-full h-full object-cover -rotate-45 scale-125"
            />
          </div>

          {/* Orange Shape Top */}
          <div className="absolute top-0 right-10 w-24 h-24 bg-[#560416] rotate-45"></div>

          {/* Orange Shape Bottom */}
          <div className="absolute bottom-0 left-10 w-24 h-24 bg-[#560416] rotate-45"></div>

        </div>

      </div>
    </div>
  );
}

export default VisionMission;