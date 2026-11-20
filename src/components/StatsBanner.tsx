import React from 'react';
import { keyMetrics } from '../data/portfolioData';
import { Activity, Zap, Clock, Trophy } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const icons = [
    <Activity className="w-5 h-5 text-cyan-400" />,
    <Zap className="w-5 h-5 text-sky-400" />,
    <Clock className="w-5 h-5 text-indigo-400" />,
    <Trophy className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section className="relative py-12 border-y border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyMetrics.map((item, index) => (
            <div
              key={item.label}
              className="relative p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-80 transition-opacity">
                {icons[index % icons.length]}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 font-mono tracking-tight">
                {item.value}
              </div>

              <div className="mt-2 text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                {item.label}
              </div>

              <div className="mt-1 text-xs text-slate-400 leading-normal">
                {item.detail}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
