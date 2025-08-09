import React from 'react'

export default function HeroSection() {
  return (
    <div className="relative md:-mt-30 min-h-screen bg-gradient-to-br from-[#1A2F55] via-[#1A2F55] to-[#0F1B3C] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 sm:top-10 left-2 sm:left-6 w-24 sm:w-40 md:w-72 h-24 sm:h-40 md:h-72 bg-[#5BC0F8]/10 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
        <div className="absolute top-16 sm:top-32 right-2 sm:right-10 w-28 sm:w-48 md:w-96 h-28 sm:h-48 md:h-96 bg-[#FFA500]/10 rounded-full blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/4 sm:left-1/3 w-20 sm:w-40 md:w-80 h-20 sm:h-40 md:h-80 bg-[#5BC0F8]/5 rounded-full blur-xl sm:blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-1/4 w-2.5 sm:w-4 h-2.5 sm:h-4 bg-[#5BC0F8] rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-1/4 right-1/4 w-3.5 sm:w-6 h-3.5 sm:h-6 bg-[#FFA500] rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/5 left-1/5 w-1.5 sm:w-3 h-1.5 sm:h-3 bg-[#5BC0F8] animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/5 right-1/3 w-2.5 sm:w-5 h-2.5 sm:h-5 bg-[#FFA500] rotate-45 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh] pt-10 sm:pt-20">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0">
            {/* Company Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#5BC0F8]/20 border border-[#5BC0F8]/30 rounded-full text-[#5BC0F8] text-xs sm:text-sm font-medium mb-3 sm:mb-6 backdrop-blur-sm poppins-medium">
              <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-2 animate-pulse"></span>
              Innovating for a Better Tomorrow
            </div>

            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight poppins-bold">
              <span className="block">We are building</span>
              <span className="block text-[#5BC0F8]">a better tomorrow</span>
            </h1>

            {/* Key Features */}
            <div className="mb-5 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-2 sm:gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-[#5BC0F8]/20 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#5BC0F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base poppins-bold">15+</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base poppins-medium">Years Experience</p>
                    <p className="text-gray-300 text-xs sm:text-sm poppins-regular">Industry Leadership</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-[#FFA500]/20 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base poppins-bold">🚀</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base poppins-medium">Digital Innovation</p>
                    <p className="text-gray-300 text-xs sm:text-sm poppins-regular">Cutting-edge Solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-[#5BC0F8]/20 hover:bg-white/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#5BC0F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base poppins-bold">🏆</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base poppins-medium">Trusted Partner</p>
                    <p className="text-gray-300 text-xs sm:text-sm poppins-regular">Public & Private Sectors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-12">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#FFA500]/25 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base poppins-semibold">
                Start Your Digital Journey
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#5BC0F8] text-[#5BC0F8] font-bold rounded-lg hover:bg-[#5BC0F8] hover:text-[#1A2F55] transition-all duration-300 text-sm sm:text-base poppins-semibold">
                Explore Our Solutions
              </button>
            </div>
          </div>

          {/* Right Content - Technology Stack Grid */}
          <div className="relative order-1 lg:order-2 px-2 sm:px-0">
            {/* Technology Stack Visualization */}
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Main Grid Container */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 p-2 sm:p-6 md:p-8">
                
                {/* Top Row */}
                <div className="col-span-1 space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-br from-[#5BC0F8] to-[#1A2F55] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🔧</div>
                      <div className="text-white text-xs sm:text-sm font-medium poppins-medium">System Development</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse delay-500">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">📊</div>
                      <div className="text-white text-xs sm:text-sm font-medium poppins-medium">Data Analytics</div>
                    </div>
                  </div>
                </div>

                {/* Center Column */}
                <div className="col-span-1 flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-[#1A2F55] to-[#0F1B3C] p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-[#5BC0F8]/30">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5BC0F8] mb-1 sm:mb-2 poppins-bold">iDF</div>
                      <div className="text-xs text-gray-300 poppins-regular">Data Fusion</div>
                      <div className="text-xs text-gray-300 poppins-regular">System PLC</div>
                      <div className="mt-2 sm:mt-3 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#5BC0F8] to-[#FFA500] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-span-1 space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-br from-[#5BC0F8] to-[#1A2F55] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse delay-1000">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🤖</div>
                      <div className="text-white text-xs sm:text-sm font-medium poppins-medium">AI Solutions</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🏢</div>
                      <div className="text-white text-xs sm:text-sm font-medium poppins-medium">ERP Systems</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Additional Services */}
              <div className="grid grid-cols-2 gap-1 sm:gap-3 md:gap-4 mt-3 sm:mt-6 px-2 sm:px-6 md:px-8">
                <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-[#5BC0F8]/20 hover:bg-[#5BC0F8]/10 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg mb-1">🎓</div>
                    <div className="text-white text-xs font-medium poppins-medium">LMS Development</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-[#FFA500]/20 hover:bg-[#FFA500]/10 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg mb-1">🔍</div>
                    <div className="text-white text-xs font-medium poppins-medium">Quality Assurance</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5BC0F8" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>
                  {/* Connecting lines from center to corners */}
                  <line x1="150" y1="150" x2="75" y2="75" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
                  <line x1="150" y1="150" x2="225" y2="75" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
                  <line x1="150" y1="150" x2="75" y2="225" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
                  <line x1="150" y1="150" x2="225" y2="225" stroke="url(#connectionGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-10 sm:h-20 fill-[#F5F9FF]">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  )
}
