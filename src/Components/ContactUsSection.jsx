import React, { useEffect, useRef } from "react"

import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const contactCardRef = useRef(null)
  const mapRef = useRef(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (headerRef.current) observer.observe(headerRef.current)
    if (contactCardRef.current) observer.observe(contactCardRef.current)
    if (mapRef.current) observer.observe(mapRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-25 animate-fade-in">
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BC0F8]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#FFA500]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-[#1A2F55]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2F55] mb-4 poppins-bold">
            GET <span className="text-[#5BC0F8]">IN TOUCH</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto poppins-regular">
            We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
          <div className="w-20 h-1 bg-[#5BC0F8] mx-auto rounded-full mt-4"></div> {/* Blue underline */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Contact Information Card */}
          <div ref={contactCardRef} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:shadow-2xl transition-all duration-300 animate-slide-up-delay">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A2F55] mb-8 pb-4 border-b border-gray-200 poppins-bold">
              Connect with Our Team
            </h3>
            <div className="space-y-6 pt-4">
              {/* Location */}
              <div className="flex items-start group animate-fade-in-delay-2">
                <div className="flex-shrink-0 w-14 h-14 bg-[#5BC0F8]/10 rounded-full flex items-center justify-center mr-5 group-hover:bg-[#5BC0F8] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-[#5BC0F8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#1A2F55] mb-1 poppins-semibold">Our Location</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed poppins-regular">
                    Jomo Kenyatta Avenue, Mekane Iyesus Building, House No 227B Office No 204
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group animate-fade-in-delay-3">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFA500]/10 rounded-full flex items-center justify-center mr-5 group-hover:bg-[#FFA500] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-7 h-7 text-[#FFA500] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#1A2F55] mb-1 poppins-semibold">Email Us</h4>
                  <a
                    href="mailto:idfeth@gmail.com"
                    className="text-gray-700 text-sm sm:text-base hover:text-[#5BC0F8] transition-colors duration-200 font-medium poppins-medium"
                  >
                    idfeth@gmail.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start group animate-fade-in-delay-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#5BC0F8]/10 rounded-full flex items-center justify-center mr-5 group-hover:bg-[#5BC0F8] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-7 h-7 text-[#5BC0F8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#1A2F55] mb-1 poppins-semibold">Call Us</h4>
                  <a
                    href="tel:+251911630791"
                    className="text-gray-700 text-sm sm:text-base hover:text-[#FFA500] transition-colors duration-200 font-medium poppins-medium"
                  >
                    +251 911 630791
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Embedded Google Map */}
          <div ref={mapRef} className="w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 transform hover:shadow-2xl transition-all duration-300 animate-slide-up-delay-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6000000000004!2d38.76000000000001!3d9.010000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f000000001%3A0x123456789abcdef0!2sEthiopian%20Evangelical%20Church%20Mekane%20Yesus%20(EECMY)!5e0!3m2!1sen!2set!4v1678886400000!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animateBlob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: animateBlob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
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
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        
        .animate-slide-up-delay {
          animation: slideUp 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay-2 {
          animation: slideUp 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fadeIn 0.8s ease-out 1.0s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
