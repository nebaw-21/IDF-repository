import React from "react"
import { useState, useRef, useEffect } from "react"
import { ExternalLink } from "lucide-react" // Using ExternalLink for better symbolism
import projectsData from "../../public/data/projects.json"

export default function ProjectsSection() {
  const [projects] = useState(projectsData.projects)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const carouselContainerRef = useRef(null)
  const isTouchingRef = useRef(false)
  const touchStartXRef = useRef(0)
  const touchDeltaXRef = useRef(0)
  const autoPlayRef = useRef(null)

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
    if (projects.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 2500)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [projects])

  useEffect(() => {
    if (carouselRef.current && projects.length > 0) {
      const items = Array.from(carouselRef.current.children)
      if (items.length > 0) {
        const itemWidth = items[0].offsetWidth + 32
        carouselRef.current.scrollTo({
          left: currentIndex * itemWidth,
          behavior: "smooth",
        })
      }
    }
  }, [currentIndex, projects])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (headerRef.current) observer.observe(headerRef.current)
    if (carouselContainerRef.current) observer.observe(carouselContainerRef.current)

    return () => observer.disconnect()
  }, [])

  // Click logic: only auto-open when there's a single link; otherwise show individual link pills
  const handleProjectLinks = (e, project) => {
    e.preventDefault()
    const links = project.links || []
    if (links.length !== 1) return
    const url = links[0]?.url
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Helper: derive a short, consistent domain display from a URL
  const getShortUrl = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== 'string') return 'link'
    let url = rawUrl.trim()
    // Ensure protocol shown
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url
    // Remove trailing slash for consistency (but keep if only protocol + domain)
    if (url.endsWith('/') && url.length > 12) url = url.slice(0, -1)
  const MAX_LEN = 10 // tighter visible chars before ellipsis (was 16)
  if (url.length <= MAX_LEN) return url
  return url.slice(0, MAX_LEN - 1) + '…'
  }

  return (
    <section
      ref={sectionRef}
      id="projectS"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F5F9FF] overflow-hidden -mt-15 md:-mt-23 animate-fade-in"
    >
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BC0F8]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#FFA500]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-[#1A2F55]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2F55] mb-4 poppins-bold">
            Our <span className="text-[#FFA500]">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto poppins-regular">
            Below are some of our notable products and projects. We have successfully developed and delivered multiple
            large-scale engagements currently serving our clients as well as users.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={carouselContainerRef} className="relative animate-slide-up-delay -mt-8">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-[#1A2F55]/20 text-[#1A2F55] p-4 rounded-full shadow-xl hover:bg-[#1A2F55] hover:text-white hover:scale-105 transition-all duration-300 z-20 hidden md:flex items-center justify-center animate-fade-in-delay-2"
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
            className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-[#1A2F55]/20 text-[#1A2F55] p-4 rounded-full shadow-xl hover:bg-[#1A2F55] hover:text-white hover:scale-105 transition-all duration-300 z-20 hidden md:flex items-center justify-center animate-fade-in-delay-2"
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
            className="flex overflow-x-auto sm:overflow-x-hidden scrollbar-hide gap-4 sm:gap-6 lg:gap-8 py-6 px-3 sm:px-4 snap-x snap-mandatory sm:snap-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[88%] xs:w-[80%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-21px)] snap-start"
              >
                <div
                  className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100/50 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 flex flex-col h-auto min-h-[260px] sm:h-[350px] lg:h-[380px] animate-fade-in-delay-${index + 3} group ${
                    index === currentIndex ||
                    (index === currentIndex + 1 && window.innerWidth >= 640) ||
                    (index === currentIndex + 2 && window.innerWidth >= 1024)
                      ? "border-[#5BC0F8]/30 shadow-2xl ring-2 ring-[#5BC0F8]/10"
                      : ""
                  }`}
                >
                  <div className={`p-4 sm:p-6 flex flex-col h-full relative ${project.links && project.links.length >= 2 ? 'pt-12 sm:pt-16' : ''}`}>
                    <div className="absolute top-4 right-4 flex gap-2 items-center">
                      {project.links && project.links.length === 1 && (
                        <button
                          onClick={(e) => handleProjectLinks(e, project)}
                          className="inline-flex items-center justify-center w-10 h-10 bg-[#5BC0F8]/10 hover:bg-[#5BC0F8] text-[#5BC0F8] hover:text-white rounded-full transition-all duration-300 group-hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5BC0F8]"
                          aria-label={`Open link for ${project.title}`}
                          title="Opens link in new tab"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      )}
                      {project.links && project.links.length === 2 && (
                        <div className="flex gap-1">
                          {project.links.map((l,i) => {
                            const shortTxt = getShortUrl(l.url)
                            return (
                              <a
                                key={i}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="swap-pill px-3 h-6 inline-flex items-center justify-center rounded-full bg-[#5BC0F8]/10 hover:bg-[#5BC0F8] text-[#1A2F55] hover:text-white text-[10px] sm:text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5BC0F8] w-32 sm:w-36"
                                title={`${l.label || 'Link'} → ${l.url}`}
                                aria-label={`Open ${l.label || `Link ${i+1}`} for ${project.title}`}
                              >
                                <span className="pill-url truncate">{shortTxt}</span>
                                <span className="pill-label truncate">{l.label || `Link ${i+1}`}</span>
                              </a>
                            )
                          })}
                        </div>
                      )}
                      {project.links && project.links.length > 2 && (
                        <div className="flex gap-1 -mt-1">
                          {project.links.slice(0,2).map((l,i) => {
                            const shortTxt = getShortUrl(l.url)
                            return (
                              <a
                                key={i}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="swap-pill px-3 h-7 inline-flex items-center justify-center rounded-full bg-[#5BC0F8]/10 hover:bg-[#5BC0F8] text-[#1A2F55] hover:text-white text-[10px] sm:text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5BC0F8] w-32 sm:w-36"
                                title={`${l.label || 'Link'} → ${l.url}`}
                                aria-label={`Open ${l.label || `Link ${i+1}`} for ${project.title}`}
                              >
                                <span className="pill-url truncate">{shortTxt}</span>
                                <span className="pill-label truncate">{l.label || `Link ${i+1}`}</span>
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 pr-4 sm:pr-12">
                      <div className="flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200/50 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain p-2 sm:p-3"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1A2F55] leading-snug break-words hyphens-auto">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words hyphens-auto">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-4 sm:mt-8 space-x-3 animate-fade-in-delay-7">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#1A2F55] w-12" : "bg-gray-400 hover:bg-gray-500 w-8"
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Added line-clamp-6 for better description display */
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
  /* Swap pill hover/focus visibility */
  .swap-pill .pill-label { display: none; }
  .swap-pill:hover .pill-url, .swap-pill:focus .pill-url { display: none; }
  .swap-pill:hover .pill-label, .swap-pill:focus .pill-label { display: inline; }
      `}</style>
    </section>
  )
}
