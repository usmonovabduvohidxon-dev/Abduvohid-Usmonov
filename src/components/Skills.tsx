import React, { useState } from 'react';
import { Layout, Terminal, Cpu, Check, Box, ChevronRight, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Modules' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Development', label: 'Development' },
    { id: 'AI & Tools', label: 'AI & Tools' }
  ];

  const filtered = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
              <span>02 / SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
              Technologies &amp; Tools.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              An IDE-like technology grid reflecting day-to-day engineering competencies, interface standards, and developer productivity tooling.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons allowed per guidelines) */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900/90 border border-slate-800 self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {filtered.map((categoryGroup) => {
            const Icon = categoryGroup.title === 'Frontend'
              ? Layout
              : categoryGroup.title === 'Development'
              ? Terminal
              : Cpu;

            return (
              <div
                key={categoryGroup.title}
                className="ide-panel rounded-2xl border border-slate-800/80 bg-[#0d131f] overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between px-6 py-3.5 bg-[#090d16] border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span className="font-bold text-white text-sm">
                      {categoryGroup.title}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-400 text-xs">{categoryGroup.category}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {categoryGroup.skills.length} modules loaded
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-[#090d15]/80 border border-slate-800/80 hover:border-sky-500/30 hover:bg-[#0c1220] transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </span>
                          {skill.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                              {skill.badge}
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-mono text-sky-400/90">
                          {skill.level}
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed pt-1">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>verified</span>
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
