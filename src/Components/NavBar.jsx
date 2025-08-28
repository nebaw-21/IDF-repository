import React, { useState, useEffect, useRef } from "react";
import navigationData from "../../public/data/navigation.json";

export default function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuItems] = useState(
    navigationData.navLinks.map((link) => ({
      name: link.name,
      href: link.href.replace("#", ""), // Remove # from href
    }))
  );
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsMenuOpen(!isMenuOpen);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Adjust these values to control when a section is considered "active"
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      observerOptions
    );

    // Observe all sections
    const sections = ["home", "about", "services", "projectS", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (navRef.current) observer.observe(navRef.current);
    if (logoRef.current) observer.observe(logoRef.current);
    if (menuRef.current) observer.observe(menuRef.current);

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-[#1A2F55] shadow-lg sticky top-0 z-50 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0 animate-slide-up">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-white hover:text-[#5BC0F8] transition-colors poppins-bold"
            >
              <img
                src="/assets/logo.svg"
                alt="Logo"
                className="w-25 h-20  p-4  cover-fit"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div ref={menuRef} className="hidden md:block animate-slide-up-delay">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md poppins-medium animate-fade-in-delay-${
                    index + 1
                  } ${
                    activeSection === item.href
                      ? "text-[#5BC0F8] bg-[#5BC0F8]/10 border border-[#5BC0F8]/30"
                      : "text-white hover:text-[#5BC0F8] hover:bg-[#5BC0F8]/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-slide-up-delay">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#5BC0F8] focus:outline-none focus:text-[#5BC0F8] p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-[#1A2F55]/95 to-[#0F1B3C]/95 backdrop-blur-md border-t border-[#5BC0F8]/20 shadow-2xl z-40">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 poppins-medium ${
                    activeSection === item.href
                      ? "text-[#5BC0F8] bg-[#5BC0F8]/10 border border-[#5BC0F8]/30"
                      : "text-white hover:text-[#5BC0F8] hover:bg-[#5BC0F8]/10"
                  }`}
                  style={{
                    animation: `slideInDown 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-4 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-5 {
          animation: fadeIn 0.6s ease-out 0.7s forwards;
          opacity: 0;
        }
      `}</style>
    </nav>
  );
}
