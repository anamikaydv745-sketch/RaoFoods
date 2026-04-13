import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {

    const socialIcons = [
      { icon: FaFacebookF, link: "https://www.facebook.com/Raofoodservice/" },
      { icon: FaInstagram, link: "https://www.instagram.com/raofoodservice?igsh=bjlhNnljeXRpdTBw" },
     
    ];


  return (
    <div className="w-full max-w-[100vw] bg-[#bcb28a] text-white fixed top-0 left-0 z-[1000]">
      <div className="flex items-center justify-between px-6 py-2">
        
        {/* Left Section */}
        <div
        className="flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-4 bg-[#560416] px-3 md:px-6 py-2 text-xs sm:text-sm md:text-base"
          style={{
            clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="flex items-center gap-2">
            {/* <Phone size={16} /> */}
            <span>9785527941</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>9785527942</span>
          <span className="hidden sm:inline">|</span>
          <span>8502021225</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {socialIcons.map((social, i) => (
            <a
              key={i}
               href={social.link}
               target="_blank"
                rel="noopener noreferrer"
              className="bg-[#560416] p-2 rounded-full hover:scale-110 transition"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}