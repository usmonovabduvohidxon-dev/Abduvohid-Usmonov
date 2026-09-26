import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';
import { terminalResponses } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string | string[];
}

export const TerminalComponent: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: terminalResponses.whoami
    },
    {
      command: 'current_status',
      output: terminalResponses.current_status
    },
    {
      command: 'motivation',
      output: terminalResponses.motivation
    }
  ]);

  const [cmdIndex, setCmdIndex] = useState(-1);
  const commandHistory = useRef<string[]>(['whoami', 'current_status', 'motivation']);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const safeCommands = [
    'help',
    'whoami',
    'current_status',
    'projects',
    'skills',
    'about',
    'contact',
    'motivation',
    'clear'
  ];

  const handleExecute = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Track command history
    commandHistory.current.push(cmd);
    setCmdIndex(-1);

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd in terminalResponses) {
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: terminalResponses[cmd] }
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [
            `Command not recognized: "${rawCmd}"`,
            'Type "help" or click one of the quick commands below to explore available queries.'
          ]
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleExecute(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.current.length > 0) {
        const nextIdx = cmdIndex === -1 ? commandHistory.current.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(commandHistory.current[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= commandHistory.current.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIdx);
          setInputVal(commandHistory.current[nextIdx]);
        }
      }
    }
  };

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal-section" className="py-16 bg-[#080c14] border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Terminal Frame */}
        <div className="ide-panel rounded-2xl border border-slate-800 bg-[#0a0f18] overflow-hidden shadow-2xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#070b12] border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 pl-2 font-mono text-xs text-slate-400">
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>usmonov-cli — zsh</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors p-1"
                title="Clear terminal output"
              >
                <Trash2 className="w-3 h-3" />
                <span className="hidden sm:inline">clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="p-5 font-mono text-xs sm:text-sm min-h-[220px] max-h-[380px] overflow-y-auto space-y-4 leading-relaxed">
            <div className="text-slate-500 text-xs">
              Welcome to USMONOV.DEV Interactive Console v1.0. Type <span className="text-sky-300">help</span> to view available query commands.
            </div>

            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {/* Command Line */}
                <div className="flex items-center gap-2 text-sky-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="font-semibold text-slate-100">{entry.command}</span>
                </div>

                {/* Output */}
                <div className="text-slate-300 pl-4 space-y-0.5">
                  {Array.isArray(entry.output) ? (
                    entry.output.map((line, lIdx) => (
                      <div key={lIdx} className="text-slate-300">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div>{entry.output}</div>
                  )}
                </div>
              </div>
            ))}

            <div ref={terminalBottomRef} />
          </div>

          {/* Interactive Input Form */}
          <div className="p-3 bg-[#080c14] border-t border-slate-800/80 flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="text-emerald-400 font-bold pl-2 select-none">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. whoami, projects, help)..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono"
            />
            <button
              onClick={() => handleExecute(inputVal)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
              title="Execute command"
            >
              <span>run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </div>

          {/* Safe Command Quick Buttons */}
          <div className="px-4 py-2 bg-[#060910] border-t border-slate-900 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            <span className="text-slate-500 mr-1 hidden sm:inline">Quick commands:</span>
            {safeCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleExecute(cmd)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
