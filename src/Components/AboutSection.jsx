import React from "react"
import { useState } from "react"
import aboutImage from "../assets/about.png"

export default function WhyUsSection() {
  const [openItem, setOpenItem] = useState(1) // Start with 'Experiences' (id 1) open

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  const whyUsItems = [
    {
      id: 1,
      title: "Experiences",
      description:
        "With over 15 years of industry-leading service, iDaptive Data Fusion System PLC has consistently delivered cutting-edge IT solutions across public and private sectors in Ethiopia. Our extensive experience ensures robust and reliable outcomes.",
    },
    {
      id: 2,
      title: "Consistent",
      description:
        "Consistency is key to our success. We adhere to standardized SDLC processes and internationally-aligned best practices, ensuring high-quality, maintainable, and scalable solutions that meet evolving client needs.",
    },
    {
      id: 3,
      title: "Quality of Service",
      description:
        "Our unwavering focus is on delivering exceptional user experiences and results. We are committed to rigorous testing frameworks and continuous improvement to ensure our systems are reliable, user-friendly, and perform optimally.",
    },
    {
      id: 4,
      title: "Adaptive",
      description:
        "We are highly adaptive to changing client needs and emerging technologies. Our agile methodologies allow for iterative development and continuous delivery, ensuring faster time-to-market and flexible solutions.",
    },
    {
      id: 5,
      title: "Agile",
      description:
        "Embracing agile methodologies, we foster iterative development, continuous delivery, and rapid adaptation. This approach ensures that our solutions are not only future-ready but also evolve efficiently with your business.",
    },
  ]

  return (
    <section id="why-us" className="relative py-10 sm:py-20 bg-[#F5F9FF] overflow-hidden">
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5BC0F8]/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#FFA500]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-[#1A2F55]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2F55]">
            Why <span className="text-[#5BC0F8]">Choose Us?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Our commitment to excellence, innovation, and client success sets us apart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Accordion */}
          <div className="space-y-4">
            {whyUsItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                  openItem === item.id
                    ? "bg-gradient-to-br from-white to-[#F5F9FF] border border-[#5BC0F8]/30"
                    : "bg-white border border-gray-100 hover:shadow-xl"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-3 sm:p-4 text-left focus:outline-none"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                  aria-controls={`content-${item.id}`}
                >
                  <span className="flex items-center">
                    <span
                      className={`text-xl sm:text-2xl font-bold mr-4 transition-colors duration-300 ${
                        openItem === item.id ? "text-[#5BC0F8]" : "text-gray-400"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                        openItem === item.id ? "text-[#1A2F55]" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#5BC0F8] transform transition-transform duration-300 ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openItem === item.id && (
                  <div
                    id={`content-${item.id}`}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-base sm:text-lg leading-relaxed animate-fade-in"
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>

                     {/* Right Content - Illustration */}
           <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden rounded-3xl shadow-2xl shadow-[#1A2F55]/20 transform hover:scale-105 transition-transform duration-500">
             <img
               src={aboutImage}
               alt="iDaptive Data Fusion System Illustration"
               className="w-full h-full object-cover"
             />
             {/* Subtle overlay for depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F55]/20 to-transparent"></div>
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
