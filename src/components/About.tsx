import React from 'react';
import { Terminal, Code2, Sparkles, BookOpen, Compass } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
            <span>03 / ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Engineering Identity &amp; Journey.
          </h2>
        </div>

        {/* Section 10: About Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side: Large Developer-style number {01} with ambient card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="ide-panel p-8 rounded-2xl border border-slate-800 bg-[#0d1320] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-slate-600">
                src/developer.core
              </div>

              {/* Large developer number {01} */}
              <div className="font-mono text-7xl sm:text-8xl lg:text-9xl font-extrabold text-sky-500/20 select-none tracking-tighter leading-none group-hover:text-sky-400/30 transition-colors">
                &#123;01&#125;
              </div>

              <div className="mt-6 space-y-3 relative z-10">
                <div className="text-xs font-mono text-sky-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Abduvohidxon Usmonov</span>
                </div>
                <div className="text-sm font-mono text-slate-300">
                  Role: Developer &amp; Builder
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-sans">
                  Crafting resilient codebases with a clear design sense and thoughtful product mechanics.
                </div>
              </div>

              {/* Subtle ambient image snippet */}
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-800 relative aspect-[16/9] opacity-80 group-hover:opacity-100 transition-opacity">
                <img
                  src="/src/assets/images/dev_portrait_abstract_1790445040668.jpg"
                  alt="Developer workspace and code engineering sanctuary"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1320] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-300">
                  // Focus: High Craft &amp; Execution
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy Text & Code Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                I enjoy turning ideas into working digital products.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                I'm interested in programming, artificial intelligence, web applications and building useful software. I like experimenting with new technologies and turning concepts into real projects.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Every project begins with a simple question: how does this software actually make life clearer, faster, or more enjoyable for the person using it? By pairing clean client-side ergonomics with practical AI workflows, I strive to create tools that feel dependable and refined.
              </p>
            </div>

            {/* Code-style Quote Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#090d16] border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-500">
                <span className="text-sky-400 font-semibold">// Developer Loop</span>
                <span>mindset.ts</span>
              </div>
              <pre className="text-slate-300 space-y-1">
                <div>
                  <span className="text-violet-400 font-semibold">while</span>{' '}
                  <span className="text-slate-200">(</span>
                  <span className="text-amber-300">learning</span>
                  <span className="text-slate-200">) &#123;</span>
                </div>
                <div className="pl-6 text-sky-300">
                  build<span className="text-slate-400">();</span>
                </div>
                <div className="pl-6 text-emerald-300">
                  improve<span className="text-slate-400">();</span>
                </div>
                <div className="text-slate-200">&#125;</div>
              </pre>
            </div>
          </div>
        </div>

        {/* Section 11: Development Timeline (Development Log) */}
        <div className="pt-10 space-y-8">
          <div className="space-y-1">
            <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">
              // MILESTONES
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">
              Development Log
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Sequential evolution from initial web fundamentals to full-stack products and AI systems.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10 my-8">
            {timelineData.map((item) => {
              const isActive = item.status === 'active';
              const isCompleted = item.status === 'completed';
              const isUpcoming = item.status === 'upcoming';

              return (
                <div key={item.number} className="relative group">
                  {/* Timeline Node Indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                      isActive
                        ? 'border-sky-400 bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]'
                        : isCompleted
                        ? 'border-slate-700 bg-slate-900 group-hover:border-sky-400'
                        : 'border-slate-800 bg-slate-950'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="ide-panel p-5 rounded-xl border border-slate-800/80 bg-[#0d131f] group-hover:border-slate-700 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                          {item.number}
                        </span>
                        <h4 className="font-mono font-semibold text-base text-white">
                          {item.title}
                        </h4>
                      </div>

                      <div className="text-[11px] font-mono">
                        {isActive ? (
                          <span className="text-sky-300 font-semibold bg-sky-500/15 px-2 py-0.5 rounded border border-sky-500/30">
                            Active Focus
                          </span>
                        ) : isCompleted ? (
                          <span className="text-slate-400">Completed</span>
                        ) : (
                          <span className="text-amber-400/80">In Pipeline</span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
