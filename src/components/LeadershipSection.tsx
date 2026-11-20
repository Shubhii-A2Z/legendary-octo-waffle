import React from 'react';
import { leadership } from '../data/portfolioData';
import { Users, Youtube, ExternalLink, CheckCircle2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Community & Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Leadership & Community Contribution
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md font-normal">
            Committed to knowledge sharing, mentoring aspiring engineers, and creating educational tech resources.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 sm:p-8 hover:border-cyan-500/40 transition-all shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
                    {item.period}
                  </span>
                  {item.stats && (
                    <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded border border-rose-800/60 flex items-center gap-1">
                      <Youtube className="w-3.5 h-3.5" />
                      {item.stats}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {item.organization}
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {item.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {item.title.includes('YouTube') && (
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Codeforces Editorials & Tutorials</span>
                  <a
                    href="https://youtube.com/@Shubhii-A2Z"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300"
                  >
                    <span>Visit Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
