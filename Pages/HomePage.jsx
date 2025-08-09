import React from "react";
import Navbar from "../src/Components/NavBar"
import HeroSection from "../src/Components/HeroSection";
import Footer from "../src/Components/FooterSection";
import AboutSection from "../src/Components/AboutSection";
import ServiceSection from "../src/Components/ServiceSection";
import CorevalueSection from "../src/Components/CorevalueSection";
import ProjectSection from "../src/Components/projectSection";
import WorkedWithSection from "../src/Components/WorkedWithSection";
import ContactSection from "../src/Components/ContactUsSection";

function HomePage() {
   
  return (
    <>
<Navbar/>
 <HeroSection/>
 <AboutSection/>
 <ServiceSection/>
 <CorevalueSection/>
 <ProjectSection/>
 <WorkedWithSection/>
 <ContactSection/>
 
 <Footer/>
    </>
  );
}

export default HomePage;
