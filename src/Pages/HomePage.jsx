import React from "react";
import Navbar from "../Components/NavBar"
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/FooterSection";
import AboutSection from "../Components/AboutSection";
import ServiceSection from "../Components/ServiceSection";
import CorevalueSection from "../Components/CorevalueSection";
import ProjectSection from "../Components/projectSection";
import WorkedWithSection from "../Components/WorkedWithSection";
import ContactSection from "../Components/ContactUsSection";

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
