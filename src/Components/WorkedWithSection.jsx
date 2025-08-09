import React from "react"
import ECC from "../assets/ECC.png"
import II from "../assets/II.png"
import EMI from "../assets/EMI.png"
import mit from "../assets/mit.png"
import icap from "../assets/icap.svg"

export default function WorkedWithSection() {
  const partnerLogos = [
    { src: EMI, alt: "EMI Logo" },
    { src: ECC, alt: "Ethiopian Chamber of Commerce Logo" },
    { src: icap, alt: "ICAP Global Health Logo" },
    { src: mit, alt: "MIT Logo" },
    // Duplicate logos to create a seamless loop
    { src: II, alt: "Industry Information System Logo" },
    { src: ECC, alt: "Ethiopian Chamber of Commerce Logo" },
    { src: icap, alt: "ICAP Global Health Logo" },
    { src: mit, alt: "MIT Logo" },
  ]

  return (
    <section id="worked-with" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2F55] mb-4 poppins-bold">WE WORKED WITH</h2>
        <div className="w-20 h-1 bg-[#5BC0F8] mx-auto rounded-full"></div> {/* Blue underline */}
      </div>

      {/* Logos Carousel */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-scroll-left-to-right whitespace-nowrap">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 lg:mx-20">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 sm:h-20 md:h-24 object-contain transition-all duration-300"
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
      `}</style>
    </section>
  )
}
