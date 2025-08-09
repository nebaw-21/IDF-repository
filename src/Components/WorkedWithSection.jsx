import React from "react"
export default function WorkedWithSection() {
  const partnerLogos = [
    { src: "/public/images/industry-info-logo.png", alt: "Industry Information System Logo" },
    { src: "/public/images/eccsa-logo.png", alt: "Ethiopian Chamber of Commerce Logo" },
    { src: "/public/images/icap-logo-bw.png", alt: "ICAP Global Health Logo" },
    { src: "/public/images/mit-logo-bw.png", alt: "MIT Logo" },
    // Duplicate logos to create a seamless loop
    { src: "/public/images/industry-info-logo.png", alt: "Industry Information System Logo" },
    { src: "/public/images/eccsa-logo.png", alt: "Ethiopian Chamber of Commerce Logo" },
    { src: "/public/images/icap-logo-bw.png", alt: "ICAP Global Health Logo" },
    { src: "/public/images/mit-logo-bw.png", alt: "MIT Logo" },
  ]

  return (
    <section id="worked-with" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2F55] mb-4">WE WORKED WITH</h2>
        <div className="w-20 h-1 bg-[#5BC0F8] mx-auto rounded-full"></div> {/* Blue underline */}
      </div>

      {/* Logos Carousel */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-scroll-left-to-right whitespace-nowrap">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 lg:mx-20">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="h-16 sm:h-20 md:h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
