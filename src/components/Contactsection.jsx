import React from "react";

export default function ContactSection() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* Call Section */}
        <div>
          <h2 className="text-[#560416] text-3xl font-semibold mb-4">
            Call
          </h2>
          <p className="text-black text-lg">
           9785527941,9785527942,8502021225
          </p>
        </div>

        <hr className="border-[#560416]" />

        {/* Mail Section */}
        <div>
          <h2 className="text-[#560416] text-4xl font-bold mb-4">
            Mail
          </h2>
          <p className="text-black text-lg">
           raofoodservice@gmail.com
           
          </p>
        </div>

        <hr className="border-[#560416]" />

        {/* Locations Section */}
        <div>
          <h2 className="text-[#560416] text-4xl font-bold mb-6">
            Locations
          </h2>

          <div className="text-left space-y-6">
            
            {/* Registered Office */}
            <div>
              <h3 className="font-bold text-black text-lg">
                Registered Office
              </h3>
              <p className="text-black">
                Mohan Vihar Plot no. 4,Near Baba Mohan ram Raod,
                Bhiwadi ,Rajasthan,301019

              </p>
            </div>

            {/* Branch Office */}
            {/* <div>
              <h3 className="font-semibold text-black text-lg">
                Branch Office
              </h3>
              <p className="text-black">
                No 16, 1st Floor, Golden Enclave, Block-B, Vithalapur,
                Ahmedabad, Gujarat - 382120
              </p>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
}