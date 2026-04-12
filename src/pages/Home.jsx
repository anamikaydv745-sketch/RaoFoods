import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcomepage";
import Servicecount from "../components/Servicecount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
function Home() {
  return (
    
  <div>
    <Header/>
    <Navbar/>
    <Hero/>
    <Welcome/>
    <Servicecount/>
    <Footer/>
  </div>  
  );
}

export default Home;



