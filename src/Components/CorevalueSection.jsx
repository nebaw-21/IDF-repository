import React, { useState, useRef, useEffect } from "react"
import { 
  TrendingUp, 
  Handshake, 
  Smile, 
  Lightbulb, 
  Target 
} from "lucide-react"
import coreValuesData from "../../public/data/coreValues.json";

export default function CoreValuesSection() {
  const [coreValues] = useState(coreValuesData.coreValues)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const carouselContainerRef = useRef(null)
  const isTouchingRef = useRef(false)
  const touchStartXRef = useRef(0)
  const touchDeltaXRef = useRef(0)
  const autoPlayRef = useRef(null)

  // Function to render the appropriate icon component
  const renderIcon = (iconName) => {
    const iconMap = {
      TrendingUp: TrendingUp,
      Handshake: Handshake,
      Smile: Smile,
      Lightbulb: Lightbulb,
      Target: Target,
    }
    
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent className="w-10 h-10 text-[#1A2F55]" /> : null
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coreValues.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + coreValues.length) % coreValues.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e) => {
    isTouchingRef.current = true
    touchStartXRef.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const handleTouchMove = (e) => {
    if (!isTouchingRef.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    touchDeltaXRef.current = clientX - touchStartXRef.current
  }

  const handleTouchEnd = () => {
    if (!isTouchingRef.current) return
    const deltaX = touchDeltaXRef.current
    const swipeThreshold = 50
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    isTouchingRef.current = false
    touchDeltaXRef.current = 0
  }

  useEffect(() => {
    if (coreValues.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coreValues.length);
      }, 2500); // Adjust autoplay interval as needed
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [coreValues]);

  useEffect(() => {
    if (carouselRef.current && coreValues.length > 0) {
      const items = Array.from(carouselRef.current.children);
      if (items.length > 0) {
        const itemWidth = items[0].offsetWidth + 32; // Assuming gap-8 (32px)
        carouselRef.current.scrollTo({
          left: currentIndex * itemWidth,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, coreValues]);

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
    if (carouselContainerRef.current) observer.observe(carouselContainerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="core-values" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20 animate-fade-in">
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
            Our <span className="text-[#FFA500]">Core Values</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto poppins-regular">
            The principles that guide our actions and define our commitment to excellence.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={carouselContainerRef} className="relative animate-slide-up-delay">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FFA500] text-white p-3 rounded-full shadow-lg hover:bg-[#5BC0F8] transition-colors duration-300 z-20 hidden md:block animate-fade-in-delay-2"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFA500] text-white p-3 rounded-full shadow-lg hover:bg-[#5BC0F8] transition-colors duration-300 z-20 hidden md:block animate-fade-in-delay-2"
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)]" // Responsive widths
              >
                <div
                  className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-fade-in-delay-${index + 3} ${
                    index === currentIndex ? "border-[#FFA500] shadow-2xl" : "" // Highlight active card with orange
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 flex-shrink-0 ${
                      index % 2 === 0 ? "bg-[#5BC0F8]/10" : "bg-[#FFA500]/10" // Alternating icon background
                    }`}
                  >
                    {renderIcon(value.icon)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2F55] mb-3 poppins-bold">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base flex-grow poppins-regular">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-3 animate-fade-in-delay-8">
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
