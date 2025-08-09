import React from "react";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F9FF] text-[#1A2F55] p-4">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Outer pulsating circle */}
        <div className="absolute w-full h-full rounded-full bg-[#5BC0F8]/30 animate-ping-slow"></div>
        {/* Inner spinning circle */}
        <div className="w-16 h-16 rounded-full border-4 border-t-4 border-t-[#FFA500] border-b-[#5BC0F8] border-l-[#5BC0F8] border-r-[#FFA500] animate-spin"></div>
        {/* Logo/Icon placeholder in center */}
        <div className="absolute text-3xl font-bold text-[#1A2F55]">iDF</div>
      </div>
      
      <p className="text-lg text-gray-600">Please wait a moment.</p>

      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.7;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}
