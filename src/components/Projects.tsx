import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Terminal, Lock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
            <span>01 / PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Things I've built.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected applications and engineering concepts combining AI interactions, clean client interfaces, and scalable foundations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {projectsData.map((project, idx) => {
            const isLarge = idx === 0 || idx === 1;
            const colSpan = isLarge ? 'lg:col-span-6' : 'lg:col-span-12';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group cursor-pointer ide-panel rounded-2xl overflow-hidden border border-slate-800/80 bg-[#0d131f] hover:border-sky-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.15)] relative`}
              >
                {/* Top IDE Window Bar for Project Card */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#090d16] border-b border-slate-800/80 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-rose-500/80 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-amber-500/80 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-emerald-500/80 transition-colors" />
                    </div>
                    <span className="text-[11px] text-slate-500 pl-1">proj_{project.id}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-sky-400">{project.tag}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Visual Preview Banner */}
                    {project.image ? (
                      <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800/90 relative group-hover:border-slate-700 transition-colors">
                        <img
                          src={project.image}
                          alt={project.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d131f] via-transparent to-transparent opacity-50" />
                        <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-xs text-[10px] font-mono text-slate-300 border border-white/10 flex items-center gap-1.5">
                          <Terminal className="w-3 h-3 text-sky-400" />
                          <span>Interactive Architecture Preview</span>
                        </div>
                      </div>
                    ) : (
                      /* Placeholder Next Project Card styling */
                      <div className="aspect-[21/9] sm:aspect-video w-full rounded-xl overflow-hidden bg-dev-grid border border-dashed border-slate-800 flex flex-col items-center justify-center p-6 text-center group-hover:border-sky-500/40 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-2">
                          <Sparkles className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                          Architecture &amp; Sandbox Pipeline
                        </span>
                        <span className="text-[11px] font-mono text-amber-400/90 mt-1">
                          status: developing...
                        </span>
                      </div>
                    )}

                    {/* Project Title & Tagline */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:text-sky-300 transition-colors">
                          {project.name}
                        </h3>
                        {project.isFuture && (
                          <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-amber-500/10 text-amber-300 rounded border border-amber-500/30">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Extra Hover Reveal Spec */}
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Key Stack &amp; Protocols:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      Phase: <span className="text-slate-300">{project.activePhase || 'Active'}</span>
                    </span>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 group-hover:text-sky-300"
                    >
                      <span>View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
