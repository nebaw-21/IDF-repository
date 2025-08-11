import React, { useEffect, useRef } from "react";
import { navLinks, contactInfo, companyInfo } from "../Data/navigation";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const footerRef = useRef(null)
    const companyInfoRef = useRef(null)
    const quickLinksRef = useRef(null)
    const contactInfoRef = useRef(null)
    const copyrightRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      if (footerRef.current) observer.observe(footerRef.current)
      if (companyInfoRef.current) observer.observe(companyInfoRef.current)
      if (quickLinksRef.current) observer.observe(quickLinksRef.current)
      if (contactInfoRef.current) observer.observe(contactInfoRef.current)
      if (copyrightRef.current) observer.observe(copyrightRef.current)

      return () => observer.disconnect()
    }, [])
  
    return (
      <footer ref={footerRef} className="bg-[#1A2F55] text-white py-8 sm:py-10 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left">
            {/* Company Info */}
            <div ref={companyInfoRef} className="col-span-1 animate-slide-up-delay">
              <h3 className="text-2xl font-bold text-white mb-2 poppins-bold">{companyInfo.logo}</h3>
              <p className="text-gray-300 text-sm mb-2 poppins-regular">{companyInfo.name}</p>
              <p className="text-[#5BC0F8] text-sm font-semibold poppins-semibold">{companyInfo.tagline}</p>
            </div>
  
            {/* Quick Links & Contact Info */}
            <div ref={quickLinksRef} className="col-span-1 animate-slide-up-delay-2">
              <h4 className="text-lg font-semibold text-white mb-3 poppins-semibold">Quick Links</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {navLinks.map((link, index) => (
                  <li key={link.name} className={`animate-fade-in-delay-${index + 1}`}>
                    <a href={link.href} className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info & Social Media */}
            <div ref={contactInfoRef} className="col-span-1 animate-slide-up-delay-3">
              <h4 className="text-lg font-semibold text-white mb-3 poppins-semibold">Get in Touch</h4>
              <ul className="space-y-1 text-gray-300 text-sm mb-4">
                <li className="animate-fade-in-delay-4">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                    Email: {contactInfo.email}
                  </a>
                </li>
                <li className="animate-fade-in-delay-5">
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                    Phone: {contactInfo.phone}
                  </a>
                </li>
                <li className="poppins-regular animate-fade-in-delay-6">
                  Address: {contactInfo.address}
                </li>
              </ul>

            </div>
          </div>
  
          {/* Copyright */}
          <div ref={copyrightRef} className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs poppins-regular animate-fade-in-delay-7">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slide-up-delay {
            animation: slideUp 1s ease-out 0.2s forwards;
            opacity: 0;
          }
          
          .animate-slide-up-delay-2 {
            animation: slideUp 1s ease-out 0.4s forwards;
            opacity: 0;
          }
          
          .animate-slide-up-delay-3 {
            animation: slideUp 1s ease-out 0.6s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-1 {
            animation: fadeIn 0.8s ease-out 0.8s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-2 {
            animation: fadeIn 0.8s ease-out 0.9s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-3 {
            animation: fadeIn 0.8s ease-out 1.0s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-4 {
            animation: fadeIn 0.8s ease-out 1.1s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-5 {
            animation: fadeIn 0.8s ease-out 1.2s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-6 {
            animation: fadeIn 0.8s ease-out 1.3s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-7 {
            animation: fadeIn 0.8s ease-out 1.4s forwards;
            opacity: 0;
          }
        `}</style>
      </footer>
    )
  }
  