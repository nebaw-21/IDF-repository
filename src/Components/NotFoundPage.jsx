import React from "react";

export default function NotFound({ onGoHome }) {
  const goToHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F9FF] text-[#1A2F55] p-4 text-center">
      <h1 className="text-8xl sm:text-9xl font-extrabold text-[#5BC0F8] mb-4 animate-bounce-slow">404</h1>
      <h2 className="text-3xl sm:text-5xl font-bold mb-6">Page Not Found</h2>
      <p className="text-lg sm:text-xl text-gray-700 max-w-md mb-8">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={goToHome}
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
      >
        Go to Homepage
      </button>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  )
}
