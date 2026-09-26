import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Copy, Check, FileCode2, Sparkles, Terminal } from 'lucide-react';
import { portfolioConfig, systemMetrics } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'philosophy'>('profile');
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState(2);

  // Subtle line highlight rotation or hover
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev % 12) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const profileJs = [
    { num: 1, text: 'const developer = {', type: 'keyword' },
    { num: 2, text: '    name: "Abduvohidxon",', type: 'string' },
    { num: 3, text: '    role: "Developer",', type: 'string' },
    { num: 4, text: '    website: "usmonov.dev",', type: 'string' },
    { num: 5, text: '', type: 'empty' },
    { num: 6, text: '    building: [', type: 'keyword' },
    { num: 7, text: '        "Usmonov AI",', type: 'accent-1' },
    { num: 8, text: '        "Usgram"', type: 'accent-2' },
    { num: 9, text: '    ],', type: 'keyword' },
    { num: 10, text: '', type: 'empty' },
    { num: 11, text: '    mindset: "Build. Learn. Improve."', type: 'string' },
    { num: 12, text: '};', type: 'keyword' }
  ];

  const stackTs = [
    { num: 1, text: 'export const techStack = {', type: 'keyword' },
    { num: 2, text: '    primary: ["JavaScript", "TypeScript", "React"],', type: 'string' },
    { num: 3, text: '    styling: ["Tailwind CSS", "CSS Modules"],', type: 'string' },
    { num: 4, text: '    backend: ["Node.js", "REST APIs", "Real-time"],', type: 'string' },
    { num: 5, text: '    intelligence: ["AI Systems", "Prompt Engine"],', type: 'accent-1' },
    { num: 6, text: '    tooling: ["Git", "VS Code", "Vite"],', type: 'string' },
    { num: 7, text: '    focus: "Reliable, clean, production tools"', type: 'accent-2' },
    { num: 8, text: '};', type: 'keyword' }
  ];

  const philosophyMd = [
    { num: 1, text: '# Engineering Principles', type: 'keyword' },
    { num: 2, text: '', type: 'empty' },
    { num: 3, text: '- Useful ideas over unnecessary complexity', type: 'string' },
    { num: 4, text: '- Clean interfaces and real-world utility', type: 'string' },
    { num: 5, text: '- Relentless continuous improvement', type: 'accent-1' },
    { num: 6, text: '', type: 'empty' },
    { num: 7, text: '// "Build. Learn. Improve."', type: 'accent-2' }
  ];

  const getActiveContent = () => {
    if (activeTab === 'stack') return stackTs;
    if (activeTab === 'philosophy') return philosophyMd;
    return profileJs;
  };

  const handleCopyCode = () => {
    const raw = getActiveContent().map(l => l.text).join('\n');
    navigator.clipboard?.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dev-grid"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="text-sky-400 font-semibold">//</span>
              <span>developer portfolio</span>
            </div>

            {/* Large Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-slate-100">{portfolioConfig.shortName}.</span>
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-300">
                I build{' '}
                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-bold">
                  digital products
                </span>
                .
              </p>
            </div>

            {/* Role designation */}
            <div className="inline-block px-3 py-1 rounded bg-slate-800/80 border border-slate-700/60 font-mono text-xs sm:text-sm font-medium text-sky-300">
              {portfolioConfig.role}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              {portfolioConfig.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm font-mono flex items-center gap-2 transition-all duration-150 shadow-lg shadow-sky-500/20 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-medium text-sm font-mono flex items-center gap-2 transition-all duration-150"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Secondary small text */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>{portfolioConfig.currentStatus}</span>
            </div>
          </div>

          {/* Right Column: Interactive Code Window + Mini System Status */}
          <div className="lg:col-span-6 space-y-4">
            {/* IDE Window Frame */}
            <div className="ide-panel rounded-xl overflow-hidden shadow-2xl border border-slate-800/90 bg-[#0b0f19]">
              {/* Window Header / Tab bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d15] border-b border-slate-800/80 select-none">
                <div className="flex items-center gap-3">
                  {/* macOS / IDE style window control dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e]/80 inline-block border border-rose-600/30" />
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block border border-amber-600/30" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981]/80 inline-block border border-emerald-600/30" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'profile'
                          ? 'bg-[#0f172a] text-sky-300 border-t-2 border-t-sky-400 font-medium'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-900/60'
                      }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>profile.js</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('stack')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'stack'
                          ? 'bg-[#0f172a] text-sky-300 border-t-2 border-t-sky-400 font-medium'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-900/60'
                      }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>stack.config.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('philosophy')}
                      className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'philosophy'
                          ? 'bg-[#0f172a] text-sky-300 border-t-2 border-t-sky-400 font-medium'
                          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-900/60'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      <span>mission.md</span>
                    </button>
                  </div>
                </div>

                {/* Right controls inside IDE header: Copy Code Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* IDE Code View Area with line numbers and syntax highlighting */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-[#0b0f19]">
                <pre className="space-y-0.5">
                  {getActiveContent().map((line) => {
                    const isHighlighted = line.num === activeLine;
                    return (
                      <div
                        key={line.num}
                        onMouseEnter={() => setActiveLine(line.num)}
                        className={`flex items-start rounded px-2 py-0.5 transition-colors ${
                          isHighlighted ? 'bg-slate-800/40 border-l-2 border-sky-400 pl-1.5' : 'border-l-2 border-transparent'
                        }`}
                      >
                        {/* Line number */}
                        <span className="w-7 select-none text-slate-600 text-right pr-4 text-xs">
                          {line.num}
                        </span>

                        {/* Code line content */}
                        <span className="flex-1 font-mono">
                          {renderSyntaxHighlightedLine(line.text)}
                          {/* Blinking cursor at end of line 8 */}
                          {line.num === 8 && (
                            <span className="inline-block w-2 h-4 bg-sky-400 ml-1 translate-y-0.5 animate-pulse" />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              </div>

              {/* IDE Status Bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-[#080c14] border-t border-slate-800/80 text-[11px] font-mono text-slate-500 select-none">
                <div className="flex items-center gap-3">
                  <span className="text-sky-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    <span>LF</span>
                  </span>
                  <span>UTF-8</span>
                  <span>{activeTab === 'stack' ? 'TypeScript' : activeTab === 'philosophy' ? 'Markdown' : 'JavaScript'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Ln {activeLine}, Col 1</span>
                </div>
              </div>
            </div>

            {/* Mini System Status Cards (Section 6) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {systemMetrics.map((widget, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#0e1422]/90 border border-slate-800/90 shadow-sm hover:border-slate-700 transition-colors"
                >
                  <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                    {widget.label}
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    {widget.status === 'normal' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    )}
                    {widget.status === 'highlight' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
                    )}
                    {widget.status === 'accent' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                    )}
                    <span className="text-xs sm:text-sm font-mono font-semibold text-slate-200">
                      {widget.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for realistic IDE syntax highlighting without bulky external libraries
function renderSyntaxHighlightedLine(text: string) {
  if (!text) return <span>&nbsp;</span>;

  // Render comments
  if (text.trim().startsWith('//') || text.trim().startsWith('#') || text.trim().startsWith('-')) {
    return <span className="text-slate-500 italic">{text}</span>;
  }

  // Keyword highlighting
  if (text.includes('const ') || text.includes('export const ') || text.includes('return ')) {
    const parts = text.split(/(const |export const | = |: )/g);
    return (
      <>
        {parts.map((part, idx) => {
          if (part === 'const ' || part === 'export const ') {
            return <span key={idx} className="text-violet-400 font-semibold">{part}</span>;
          }
          if (part === ' = ' || part === ': ') {
            return <span key={idx} className="text-sky-400">{part}</span>;
          }
          return <span key={idx} className="text-slate-300">{highlightStrings(part)}</span>;
        })}
      </>
    );
  }

  return highlightStrings(text);
}

function highlightStrings(str: string) {
  const parts = str.split(/(".*?"|'.*?'|\[|\]|\{|\})/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('"') && p.endsWith('"')) {
          if (p.includes('Usmonov AI')) {
            return <span key={i} className="text-sky-300 font-semibold">{p}</span>;
          }
          if (p.includes('Usgram')) {
            return <span key={i} className="text-cyan-300 font-semibold">{p}</span>;
          }
          return <span key={i} className="text-emerald-300/90">{p}</span>;
        }
        if (p === '[' || p === ']' || p === '{' || p === '}') {
          return <span key={i} className="text-amber-400 font-bold">{p}</span>;
        }
        return <span key={i} className="text-slate-300">{p}</span>;
      })}
    </>
  );
}
