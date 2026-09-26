import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: '01 Home', href: '#home' },
    { id: 'projects', label: '02 Projects', href: '#projects' },
    { id: 'skills', label: '03 Skills', href: '#skills' },
    { id: 'about', label: '04 About', href: '#about' },
    { id: 'contact', label: '05 Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-[#080c14]/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand + Available Indicator */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            >
              <Logo size={28} />
              <span className="font-mono font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors">
                USMONOV.DEV
              </span>
            </a>

            {/* Status indicator: subtle developer pill/label */}
            <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>available for projects</span>
            </div>
          </div>

          {/* Middle: Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Code Action `< / >` + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              title="Command Palette (Ctrl+K or ⌘K)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-xs text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all duration-150 shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="font-mono font-semibold">&lt; / &gt;</span>
              <span className="hidden lg:inline text-[10px] text-slate-400 border border-slate-700/60 bg-slate-900/60 px-1 rounded">⌘K</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1a] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top duration-150">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-800/80 text-xs font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>available for projects</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`block px-3 py-2 rounded-lg font-mono text-sm transition-colors ${
                activeSection === item.id
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/30"
            >
              <Code2 className="w-4 h-4" />
              <span>Open Developer Palette &lt; / &gt;</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
