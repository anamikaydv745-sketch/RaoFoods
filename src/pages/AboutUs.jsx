import react from "react";
import AboutHero from "../components/AboutHero";
import Navbar from "../components/Navbar";
import AboutCompany from "../components/AboutCompany";
import AboutVisionMission from "../components/AboutVisionMission";
import Footer from "../components/Footer";


function AboutUs() {
    return (
        <div>
            <Navbar/>
            <AboutHero/>
            <AboutCompany/>
            <AboutVisionMission/>
            <Footer/>

        </div>
    )
}

export default AboutUs;