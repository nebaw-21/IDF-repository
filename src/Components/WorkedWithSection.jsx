import React, { useEffect, useRef } from "react"
import { partnerLogos } from "../Data/partners"

export default function WorkedWithSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const carouselRef = useRef(null)

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
    if (carouselRef.current) observer.observe(carouselRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="worked-with" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20 animate-fade-in">
      {/* Section Header */}
      <div ref={headerRef} className="text-center mb-12 sm:mb-16 animate-slide-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2F55] mb-4 poppins-bold">WE WORKED WITH</h2>
        <div className="w-20 h-1 bg-[#5BC0F8] mx-auto rounded-full"></div> {/* Blue underline */}
      </div>

      {/* Logos Carousel */}
      <div ref={carouselRef} className="relative w-full overflow-hidden py-8 animate-slide-up-delay">
        <div className="flex animate-scroll-left-to-right whitespace-nowrap">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 lg:mx-20 animate-fade-in-delay-${index + 1}">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 sm:h-20 md:h-24 object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left-to-right {
          animation: scrollLeftToRight 30s linear infinite; /* Adjust duration as needed */
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
        
        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-5 {
          animation: fadeIn 0.8s ease-out 0.7s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-6 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-7 {
          animation: fadeIn 0.8s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-8 {
          animation: fadeIn 0.8s ease-out 1.0s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
