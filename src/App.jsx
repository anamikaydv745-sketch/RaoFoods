import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
 import Contact from "./pages/Contact";
 import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;