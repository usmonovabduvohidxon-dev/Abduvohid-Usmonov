import React, { useEffect, useState } from 'react';
import { Terminal, CheckCircle2, X } from 'lucide-react';

export const EasterEggModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState<string>('');

  useEffect(() => {
    const targetWord = 'usmonov';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      // Only track alphabet characters
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        setKeyBuffer((prev) => {
          const updated = (prev + e.key.toLowerCase()).slice(-targetWord.length);
          if (updated === targetWord) {
            setIsOpen(true);
            return '';
          }
          return updated;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-[#0d131f] border border-sky-500/40 rounded-xl shadow-[0_0_50px_rgba(56,189,248,0.2)] overflow-hidden">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 pl-2">system.easter_egg.ts</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Terminal className="w-6 h-6 animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Keyword `usmonov` detected</span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight pt-1">
              Developer mode unlocked.
            </h3>

            <p className="text-slate-400 font-mono text-sm">
              Keep building.
            </p>
          </div>

          <div className="p-3 bg-black/40 rounded-lg border border-slate-800/80 text-left font-mono text-xs text-slate-400 space-y-1">
            <div className="text-sky-400">// runtime status</div>
            <div>&gt; mode: builder_focus</div>
            <div>&gt; philosophy: "Build. Learn. Improve."</div>
            <div>&gt; status: 200 OK</div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs tracking-wider uppercase font-mono rounded-lg transition-colors shadow-lg shadow-sky-500/20"
          >
            Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  );
};
