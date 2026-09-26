import React from 'react';

export const DeveloperLogo: React.FC<{ size?: number }> = ({ size = 80 }) => {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* Outer soft ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-[2px] shadow-lg shadow-blue-500/20">
        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
          <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
            {/* Geometric Modern UA Monogram / Developer Icon */}
            <rect x="6" y="8" width="36" height="32" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* Code Brackets */}
            <path
              d="M17 19L12 24L17 29"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 19L36 24L31 29"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 17L22 31"
              stroke="#6366f1"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
