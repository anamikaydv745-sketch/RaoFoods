import react from "react";
import ClientSection from "../components/clientsection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Clients() {
    return(
        <div>
            <Header/>
            <Navbar/>
            <ClientSection/>
            <Footer/>

        </div>
    )
}

export default Clients;