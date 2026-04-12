import react from "react";
import ContactMap from "../components/contactmap";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contactsection";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <ContactMap/>
            <ContactSection/>
            <Footer />
        </div>
    )
}

export default Contact;