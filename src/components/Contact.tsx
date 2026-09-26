import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check, MessageSquare, ArrowUpRight, Terminal } from 'lucide-react';
import { contactLinks, portfolioConfig } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contactLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const subject = encodeURIComponent(`Project Inquiry from ${senderName || 'Visitor'} — via USMONOV.DEV`);
    const body = encodeURIComponent(
      `Name: ${senderName || 'Not specified'}\nEmail: ${senderEmail || 'Not specified'}\n\nMessage:\n${message}\n\n---\nSent via USMONOV.DEV portfolio.`
    );

    // Open user's email client
    window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-sky-400 uppercase">
            <span>04 / CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
            Have an idea?
          </h2>
          <p className="text-slate-400 text-lg">
            Let's build something useful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="ide-panel p-5 rounded-xl border border-slate-800 bg-[#0d131f] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Primary Channel</div>
                    <div className="font-mono text-sm font-semibold text-white">Email</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
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

              <div className="p-2.5 rounded bg-black/40 border border-slate-800 font-mono text-xs text-sky-300 select-all break-all">
                {contactLinks.email}
              </div>

              <a
                href={`mailto:${contactLinks.email}`}
                className="w-full py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Compose Direct Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="ide-panel p-5 rounded-xl border border-slate-800 bg-[#0d131f] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Version Control</div>
                    <div className="font-mono text-sm font-semibold text-white">GitHub</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-0.5 rounded">
                  Configurable
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/40 border border-slate-800 font-mono text-xs text-slate-400 truncate">
                {contactLinks.github === 'YOUR_GITHUB_URL' ? (
                  <span className="text-slate-500">// Update via contactLinks.github</span>
                ) : (
                  contactLinks.github
                )}
              </div>

              <a
                href={contactLinks.github !== 'YOUR_GITHUB_URL' ? contactLinks.github : '#'}
                onClick={(e) => {
                  if (contactLinks.github === 'YOUR_GITHUB_URL') {
                    e.preventDefault();
                    alert(`To connect your real GitHub profile, update 'YOUR_GITHUB_URL' inside src/data/portfolioData.ts`);
                  }
                }}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Telegram Card */}
            <div className="ide-panel p-5 rounded-xl border border-slate-800 bg-[#0d131f] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Chat</div>
                    <div className="font-mono text-sm font-semibold text-white">Telegram</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-0.5 rounded">
                  Configurable
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/40 border border-slate-800 font-mono text-xs text-slate-400 truncate">
                {contactLinks.telegram === 'YOUR_TELEGRAM_URL' ? (
                  <span className="text-slate-500">// Update via contactLinks.telegram</span>
                ) : (
                  contactLinks.telegram
                )}
              </div>

              <a
                href={contactLinks.telegram !== 'YOUR_TELEGRAM_URL' ? contactLinks.telegram : '#'}
                onClick={(e) => {
                  if (contactLinks.telegram === 'YOUR_TELEGRAM_URL') {
                    e.preventDefault();
                    alert(`To connect your Telegram account, replace 'YOUR_TELEGRAM_URL' inside src/data/portfolioData.ts`);
                  }
                }}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open Telegram Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Project Inquiry Composer (Right Column) */}
          <div className="lg:col-span-7">
            <div className="ide-panel p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0d1320] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2">
                    inquiry_payload.json
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Fast Response</span>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400">Your Name</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex"
                      className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400">Your Email / Handle</label>
                    <input
                      type="text"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400">Project Concept or Message</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, or idea..."
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-sky-400 leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 font-mono">
                    Will open your native mail client with formatted draft
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs font-mono flex items-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {formSent && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Email client initiated. Looking forward to connecting!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
