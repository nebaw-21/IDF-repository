import React from "react";
export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    const navLinks = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ]

  
    return (
      <footer className="bg-[#1A2F55] text-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left">
            {/* Company Info */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-white mb-2 poppins-bold">YourLogo</h3>
              <p className="text-gray-300 text-sm mb-2 poppins-regular">iDaptive Data Fusion System PLC</p>
              <p className="text-[#5BC0F8] text-sm font-semibold poppins-semibold">Innovating for a Better Tomorrow</p>
            </div>
  
            {/* Quick Links & Contact Info */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-3 poppins-semibold">Quick Links</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info & Social Media */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-3 poppins-semibold">Get in Touch</h4>
              <ul className="space-y-1 text-gray-300 text-sm mb-4">
                <li>
                  <a href="mailto:idfeth@gmail.com" className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                    Email: idfeth@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+251911630791" className="hover:text-[#5BC0F8] transition-colors duration-200 poppins-regular">
                    Phone: +251911630791
                  </a>
                </li>
                <li className="poppins-regular">
                  Address: Jomo Kenyatta Avenue, <br /> Mekane Iyesus Building, House No 227B Office No 204
                </li>
              </ul>

            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs poppins-regular">
            &copy; {currentYear} iDaptive Data Fusion System PLC. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  