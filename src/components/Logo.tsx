import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div
      className={`inline-flex items-center justify-center font-mono select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Usmonov Abduvohidxon Logo"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Subtle geometric outer container with hairline border */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="8"
          className="fill-slate-900/90 stroke-slate-700/80"
          strokeWidth="1.5"
        />

        {/* Diagonal corner notch indicating developer grid precision */}
        <path
          d="M31 1L39 9V39H1V1H31Z"
          fill="none"
          className="stroke-blue-500/20"
          strokeWidth="1"
        />

        {/* Letter U: Geometric, structured */}
        <path
          d="M9 12V21C9 24.3137 11.6863 27 15 27C18.3137 27 21 24.3137 21 21V12"
          className="stroke-sky-400"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter A: Geometric apex crossing with U */}
        <path
          d="M21 28L27 12L33 28"
          className="stroke-violet-400"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Crossbar for A */}
        <line
          x1="23.5"
          y1="23"
          x2="30.5"
          y2="23"
          className="stroke-cyan-300"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Center alignment node */}
        <circle cx="21" cy="28" r="1.2" className="fill-sky-400" />
      </svg>
    </div>
  );
};
