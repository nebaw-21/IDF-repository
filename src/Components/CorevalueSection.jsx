import React from "react"
import { useState, useRef, useEffect } from "react"

export default function CoreValuesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const coreValues = [
    {
      icon: "📈",
      title: "Be Better Everyday",
      description:
        "We act as trusted advisors, earning confidence through transparency, security, and performance, constantly striving for improvement.",
    },
    {
      icon: "🤝",
      title: "Create a Culture of Respect and Trust",
      description:
        "We empower organizations by providing access to the technologies they need to thrive, fostering an environment of mutual respect.",
    },
    {
      icon: "😊",
      title: "Choose Positivity",
      description:
        "We foster a collaborative environment where mutual trust and constructive challenge lead to continuous growth and positive outcomes.",
    },
    {
      icon: "💡",
      title: "Innovation First",
      description:
        "We embrace emerging technologies and continuously evolve our solutions to deliver future-ready systems that solve real-world problems.",
    },
    {
      icon: "🎯",
      title: "Client-Centricity",
      description:
        "Our solutions are meticulously designed around our clients' success and operational effectiveness, ensuring their goals are met.",
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coreValues.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + coreValues.length) % coreValues.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const items = Array.from(carouselRef.current.children)
      if (items.length > 0) {
        // Calculate scroll amount based on the first item's width and gap
        const itemWidth = items[0].offsetWidth + 32 // Assuming gap-8 (32px)
        carouselRef.current.scrollTo({
          left: currentIndex * itemWidth,
          behavior: "smooth",
        })
      }
    }
  }, [currentIndex])

  return (
    <section id="core-values" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20">
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BC0F8]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#FFA500]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-[#1A2F55]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2F55] mb-4">
            Our <span className="text-[#FFA500]">Core Values</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our actions and define our commitment to excellence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FFA500] text-white p-3 rounded-full shadow-lg hover:bg-[#5BC0F8] transition-colors duration-300 z-20 hidden md:block"
            aria-label="Previous value"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFA500] text-white p-3 rounded-full shadow-lg hover:bg-[#5BC0F8] transition-colors duration-300 z-20 hidden md:block"
            aria-label="Next value"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scrollbar-hide space-x-8 py-4 px-2" // Added px-2 for slight padding on edges
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)]" // Responsive widths
              >
                <div
                  className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center ${
                    index === currentIndex ? "border-[#FFA500] shadow-2xl" : "" // Highlight active card with orange
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 flex-shrink-0 ${
                      index % 2 === 0 ? "bg-[#5BC0F8]/10" : "bg-[#FFA500]/10" // Alternating icon background
                    }`}
                  >
                    <span className="text-4xl sm:text-5xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A2F55] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg flex-grow">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {coreValues.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#FFA500] scale-125" : "bg-gray-400 hover:bg-gray-500" // Highlight active dot with orange
                }`}
                aria-label={`Go to value ${index + 1}`}
              ></button>
            ))}
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
        /* Hide scrollbar for a cleaner look */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  )
}
