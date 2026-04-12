import { CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    "Indica/ orient Group (Mess).",
    "F&B Services in Industrial, Corporate and Outdoor Catering.",
    "Kitchen Planning & Equipment services.",
    "Training and Manpower placement.",
    "House Keeping & Facility Management",
    "We deliver quality every time.",
    "We have amply demonstrated that by winning prestigious contracts against some presumably well established companies."
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Header */}
      <div className="mb-10">
        {/* <p className="text-orange-500 font-semibold text-lg flex items-center gap-2">
          Services
          <span className="w-10 h-[2px] bg-orange-500 inline-block"></span>
        </p> */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#560416] mt-20">
          Our Hospitality Operations
        </h2>
      </div>

      {/* Card */}
      <div className="bg-gray-200 rounded-xl p-6 md:p-10 shadow-sm">
        <ul className="space-y-5">
          {services.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="text-[#560416] w-6 h-6 mt-1" />
              <span className="text-gray-800 text-lg leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

