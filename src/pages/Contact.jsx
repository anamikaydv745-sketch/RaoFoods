import react from "react";
import ContactMap from "../components/contactmap";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contactsection";
import Footer from "../components/Footer";

function Contact(){
    return(
        <div>
            <Navbar/>
            <ContactMap/>
            <ContactSection/>
            <Footer />
        </div>
    )
}

export default Contact;