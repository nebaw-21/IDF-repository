import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react" // Using Lucide React for icons

export default function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const carouselContainerRef = useRef(null)
  const isTouchingRef = useRef(false)
  const touchStartXRef = useRef(0)
  const touchDeltaXRef = useRef(0)
  const autoPlayRef = useRef(null)

  // Fetch projects data
  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data.projects))
      .catch(error => console.error('Error loading projects:', error))
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
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

  useEffect(() => {
    // Autoplay: advance carousel left-to-right
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 2500)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [])

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
    <section ref={sectionRef} id="projectS" className="relative py-16 sm:py-24 bg-[#F5F9FF] overflow-hidden md:-mt-20 animate-fade-in">
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
            Our <span className="text-[#5BC0F8]">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto poppins-regular">
            Below are some of our notable products and projects. We have successfully developed and delivered multiple
            large-scale engagements currently serving our clients as well as users.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={carouselContainerRef} className="relative animate-slide-up-delay">
          {/* Navigation Arrows - Distinct Style */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 border border-[#1A2F55]/20 text-[#1A2F55] p-3 rounded-full shadow-lg hover:bg-[#1A2F55] hover:text-white transition-all duration-300 z-20 hidden md:block animate-fade-in-delay-2"
            aria-label="Previous project"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 border border-[#1A2F55]/20 text-[#1A2F55] p-3 rounded-full shadow-lg hover:bg-[#1A2F55] hover:text-white transition-all duration-300 z-20 hidden md:block animate-fade-in-delay-2"
            aria-label="Next project"
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
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)]" // 1 card on mobile, 3 on medium/large
              >
                                 <div
                   className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-[280px] sm:h-[320px] animate-fade-in-delay-${index + 3} ${
                     index === currentIndex || (index === currentIndex + 1 && window.innerWidth >= 768) || (index === currentIndex + 2 && window.innerWidth >= 1024)
                       ? "border-[#5BC0F8] shadow-2xl" // Highlight active and next cards on larger screens
                       : ""
                   }`}
                 >
                   <div className="flex flex-col sm:flex-row sm:items-start mb-6 flex-1">
                     <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 mx-auto sm:mx-0 mb-4 sm:mb-0">
                       <img
                         src={project.image}
                         alt={`${project.title} logo`}
                         className="w-full h-full object-contain p-2"
                       />
                     </div>
                     <div className="sm:ml-6 flex-grow text-center sm:text-left flex flex-col">
                       <h3 className="text-lg sm:text-xl font-bold text-[#1A2F55] mb-2 leading-tight poppins-bold line-clamp-2">
                         {project.title}
                       </h3>
                       <p className="text-gray-600 text-sm sm:text-base poppins-regular line-clamp-3 flex-1">{project.description}</p>
                     </div>
                   </div>
                   <div className="flex justify-center sm:justify-end mt-auto">
                     <a
                       href={project.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center text-[#5BC0F8] hover:text-[#FFA500] font-semibold transition-colors duration-200 poppins-semibold"
                       aria-label={`Learn more about ${project.title}`}
                     >
                       View Project
                       <ArrowUpRight className="ml-1 w-5 h-5" />
                     </a>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots - Distinct Style (Line Indicators) */}
          <div className="flex justify-center mt-8 space-x-2 animate-fade-in-delay-7">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-6 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#1A2F55] w-8" : "bg-gray-400 hover:bg-gray-500" // Darker dot, expands
                }`}
                aria-label={`Go to project ${index + 1}`}
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
        
        /* Line clamp utilities for consistent card heights */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
