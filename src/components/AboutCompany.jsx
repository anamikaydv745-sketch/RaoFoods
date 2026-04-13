import react from "react";

import companyimg from "../assets/companyimg.png";
import ownerimg from "../assets/ownerimg.jpeg";


function AboutCompany() {
  return (
    <div className="w-full bg-gray-100 py-16 px-4 md:px-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔥 LEFT IMAGE SECTION */}
        <div className="relative">
          
          <img
            src={companyimg} // your image
            alt="office"
            className="w-full h-[450px] object-cover rounded-lg"
          />

          {/* 🔶 Orange Circle Badge */}
          <div className="absolute -top-10 right-10 bg-[#560416] text-white w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white">
            <h1 className="text-4xl font-bold">15+</h1>
            <p className="text-sm text-center leading-tight">
              Years <br /> Experience
            </p>
          </div>

          {/* 🔥 Bottom Info Card */}
         <div className="absolute -bottom-10 left-6">
  
  {/* TEXT BOX */}
  <div className="bg-[#bcb28a] text-black p-6  rounded-lg shadow-lg max-w-sm relative">
    <p className="text-sm leading-relaxed">
      Devendra Kr. Yadav – Having more than 15 years of
      industry experience – operating many industrial &
      corporate units
    </p>

    {/* IMAGE */}
    {/* <div className="
      hidden md:block
      absolute md:-right-27 top-1/2 -translate-y-1/2
      w-30 h-30 md:w-38 md:h-38
      rounded-full overflow-hidden border-4 border-white shadow-lg
    ">
      <img
        src={ownerimg}
        alt="founder"
        className="w-full h-full object-cover"
      />
    </div> */}

    {/* <div className="
  absolute right-2 md:-right-10
  top-1/2 -translate-y-1/2
  w-20 h-20 md:w-38 md:h-38
  rounded-full overflow-hidden border-4 border-white shadow-lg
">
  <img
    src={ownerimg}
    alt="founder"
    className="w-full h-full object-cover"
  />
</div> */}


<div className="
  absolute left-2 md:-left-10
  top-0 md:-top-30
  w-14 h-14 md:w-38 md:h-38
  rounded-full overflow-hidden border-4 border-white shadow-lg
">
  <img
    src={ownerimg}
    alt="founder"
    className="w-full h-full object-cover"
  />
</div>

  </div>

</div>
        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div>
          
          {/* 🔸 Heading */}
          <p className="text-[#560416] font-bold text-4xl mb-2 flex items-center gap-2">
            About Company
            {/* <span className="w-10 h-[2px] bg-orange-500"></span> */}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Rao Food Service
          </h1>

          <p className="text-gray-600 mb-6">
           A leading and one of the oldest businesses in the Bhiwadi region,
            offering on-site canteen and delivering hygienic, high-quality food
            with a strong brand presence.

          </p>

          {/* 🔸 HISTORY */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            HISTORY
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
           In 2008, we started our journey with a single kitchen, 
           delivering just 20–30 tiffins daily with zero workforce,
            driven purely by dedication and passion. From these humble
             beginnings, we have grown steadily to become a trusted name
              in the industry. Today, we proudly provide on-site canteen,
               catering, and facility management services to 25+ reputed 
               companies. With a strong commitment to hygiene, quality,
                and customer satisfaction, we continue to expand our operations
                
                 and enhance our services, aiming to set new benchmarks in the food
                  and facility management sector.
          </p>

          {/* 🔸 TEAM */}
          {/* <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Experienced Management Team
          </h2>

          <p className="text-gray-600 leading-relaxed">
            KAANTA FOODS is led by a team of highly qualified professionals
            with extensive industry experience. Our team has set up and operated
            many sites before joining Kaanta Foods.
          </p> */}

        </div>
      </div>
    </div>
  );
}

export default AboutCompany;