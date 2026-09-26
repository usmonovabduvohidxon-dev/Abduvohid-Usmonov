import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Lock, Layers, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Top Header (IDE style) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#080c14] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 pl-2">
              <span className="font-mono text-xs text-slate-400">spec://{project.id}.md</span>
              <span className="text-slate-600">·</span>
              <span className="text-[11px] font-mono text-sky-400">{project.tag}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Main Title & Status Bar */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-slate-500 mb-1">
                {project.isFuture ? '// FUTURE INITIATIVE' : '// FEATURED SYSTEM'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                {project.name}
              </h2>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
              <span className={`w-2 h-2 rounded-full ${project.isFuture ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
              <span className="text-slate-300 uppercase tracking-wider">{project.status}</span>
            </div>
          </div>

          {/* Visual Preview Container */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090d15] relative group">
            {project.image ? (
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.name} preview interface`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>UI Workspace & Architecture Spec</span>
                </div>
              </div>
            ) : (
              <div className="aspect-video w-full flex flex-col items-center justify-center p-8 bg-dev-grid text-center">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3 animate-pulse">
                  <Layers className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-mono font-semibold text-slate-200">
                  Architectural Discovery Phase
                </h4>
                <p className="text-xs font-mono text-slate-500 mt-1 max-w-sm">
                  System design and sandbox experiments are currently underway. Full specifications will be disclosed upon milestone clearance.
                </p>
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Overview & Architecture
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Highlights / Features List */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Technologies & Standards
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 font-mono text-xs text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-5 sm:px-8 py-4 bg-[#080c14] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Repository & sandbox in closed staging</span>
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub Button (disabled if private as specified in requirements) */}
            <button
              disabled={!project.githubUrl}
              onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
              className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 transition-colors ${
                project.githubUrl
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  : 'bg-slate-900/80 text-slate-500 border border-slate-800/60 cursor-not-allowed opacity-75'
              }`}
              title={project.githubUrl ? 'View GitHub Repository' : 'Private repository / in closed development'}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (Private)</span>
            </button>

            {/* Live Demo Button (disabled if no public demo) */}
            <button
              disabled={!project.demoUrl}
              onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
              className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 font-medium transition-colors ${
                project.demoUrl
                  ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-md'
                  : 'bg-slate-900/80 text-slate-500 border border-slate-800/60 cursor-not-allowed opacity-75'
              }`}
              title={project.demoUrl ? 'View Live Demo' : 'Live demo currently restricted to internal tests'}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
