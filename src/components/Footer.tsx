import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { Logo } from './Logo';
import { portfolioConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-900 py-12 relative text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Quote */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <Logo size={24} />
              <span className="font-bold text-white text-sm tracking-tight">
                {portfolioConfig.domain}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="text-slate-400">
              Built with code, curiosity and persistence.
            </p>
          </div>

          {/* Right: Copyright + Code Tag + Scroll to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <span>&copy; {portfolioConfig.year} {portfolioConfig.name}</span>
            </div>

            {/* <code /> badge */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-sky-400 font-mono font-medium">
              <Code2 className="w-3.5 h-3.5" />
              <span>&lt;code /&gt;</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
