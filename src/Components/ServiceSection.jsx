import { useState, useRef, useEffect } from "react"
import React from "react"
export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const services = [
    {
      icon: "💻",
      title: "System Development",
      description:
        "We build robust, scalable, and secure systems tailored to client needs using modern architectures and agile methods.",
    },
    {
      icon: "🔬",
      title: "Data Science & Data Analytics",
      description:
        "Transforming data into actionable insights using advanced statistical, machine learning, and visualization tools.",
    },
    {
      icon: "🤝",
      title: "Consulting Services",
      description:
        "Strategic IT and data consulting to help organizations plan, implement, and optimize digital solutions.",
    },
    {
      icon: "✅",
      title: "System Testing & Quality Assurance",
      description: "Rigorous testing frameworks to ensure high-quality, reliable, and user-friendly systems.",
    },
    {
      icon: "🏢",
      title: "ERP Development & Implementation",
      description: "Custom, intelligent ERP systems integrating all business processes into one seamless platform.",
    },
    {
      icon: "🎓",
      title: "Learning Management System (LMS) Development",
      description:
        "Customized e-learning solutions to enhance training, knowledge sharing, and institutional learning.",
    },
    {
      icon: "🧠",
      title: "Artificial Intelligence Solutions",
      description: "From intelligent automation to predictive modeling, we apply AI to solve real-world problems.",
    },
    {
      icon: "🗄️",
      title: "Data Warehousing",
      description:
        "Design and implementation of scalable data warehouses that consolidate multi-source data for business intelligence.",
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const items = Array.from(carouselRef.current.children)
      if (items.length > 0) {
        // Calculate scroll amount based on the first item's width and gap
        // Assuming gap-8 (32px) between items
        const itemWidth = items[0].offsetWidth + 32
        carouselRef.current.scrollTo({
          left: currentIndex * itemWidth,
          behavior: "smooth",
        })
      }
    }
  }, [currentIndex])

  return (
    <section
      id="services"
      className="relative py-10 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20" // Changed background to light blue/white
    >
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
            Our <span className="text-[#5BC0F8]">Cutting-Edge Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering innovative IT solutions tailored to your dynamic needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#5BC0F8] text-white p-3 rounded-full shadow-lg hover:bg-[#FFA500] transition-colors duration-300 z-20 hidden md:block"
            aria-label="Previous service"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#5BC0F8] text-white p-3 rounded-full shadow-lg hover:bg-[#FFA500] transition-colors duration-300 z-20 hidden md:block"
            aria-label="Next service"
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
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)]" // Responsive widths
              >
                <div
                  className={`bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                    index === currentIndex ? "border-[#5BC0F8] shadow-2xl" : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#5BC0F8]/10 rounded-full mx-auto mb-6">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A2F55] text-center mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#5BC0F8] scale-125" : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
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
