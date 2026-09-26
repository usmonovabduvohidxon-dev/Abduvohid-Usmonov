import React from 'react';
import { GitCommit, GitBranch, Cpu, Activity, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { buildingPipeline } from '../data/portfolioData';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-16 bg-[#090d16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ide-panel rounded-2xl border border-slate-800 bg-[#0d1320] overflow-hidden shadow-xl">
          {/* Panel Top Bar: GitHub / IDE Activity Style */}
          <div className="flex flex-wrap items-center justify-between px-5 sm:px-6 py-3.5 bg-[#0a0f19] border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white uppercase tracking-wider">
                Currently Building
              </span>
              <span className="text-slate-600">/</span>
              <div className="flex items-center gap-1 text-slate-400">
                <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                <span>main</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 mt-1 sm:mt-0">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>ACTIVE DEVELOPMENT</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info: Project details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-sky-400">Active Sprint Project</div>
                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">
                  USMONOV AI
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Refining intelligent tool workflows, prompt execution boundaries, and low-latency interaction models. Designed to assist developers with clean code insights and distraction-free workspace assistance.
              </p>

              {/* Developer Git activity indicator */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <GitCommit className="w-4 h-4 text-violet-400" />
                  <span>Latest: modular prompt parsing engine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Active sprint in progress</span>
                </div>
              </div>
            </div>

            {/* Right: Pipeline Progress (Design → Development → Testing → Release) */}
            <div className="lg:col-span-6 bg-[#090d15] p-5 sm:p-6 rounded-xl border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                <span>PIPELINE MILESTONE STAGES</span>
                <span className="text-sky-400">Stage 02 of 04</span>
              </div>

              {/* Visual Stages without fake percentages */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {buildingPipeline.map((step, idx) => {
                  const isCompleted = step.status === 'completed';
                  const isActive = step.status === 'active';
                  const isPending = step.status === 'pending';

                  return (
                    <div
                      key={step.step}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        isActive
                          ? 'bg-sky-500/10 border-sky-400/80 shadow-[0_0_15px_rgba(56,189,248,0.15)] ring-1 ring-sky-400/30'
                          : isCompleted
                          ? 'bg-slate-900/90 border-slate-700/80 text-slate-300'
                          : 'bg-slate-950/60 border-slate-800/60 text-slate-600'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-slate-500 mb-1">
                        0{idx + 1}
                      </div>

                      <div className="flex items-center justify-center gap-1 font-mono text-xs font-medium">
                        {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        {isActive && <Activity className="w-3 h-3 text-sky-400 animate-pulse" />}
                        <span className={isActive ? 'text-sky-300 font-bold' : isCompleted ? 'text-slate-300' : 'text-slate-500'}>
                          {step.step}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono mt-1.5 uppercase tracking-wider">
                        {isActive ? (
                          <span className="text-sky-400 font-semibold">● ACTIVE</span>
                        ) : isCompleted ? (
                          <span className="text-emerald-400/90">DONE</span>
                        ) : (
                          <span className="text-slate-600">QUEUED</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-2 flex items-center justify-between">
                <span>Target: Closed Developer Alpha</span>
                <span className="text-slate-400">Strict Code Quality Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
