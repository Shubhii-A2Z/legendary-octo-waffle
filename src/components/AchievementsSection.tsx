import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, ExternalLink, Star } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive & Academic Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Awards & Notable Achievements
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md font-normal">
            Proven problem-solving aptitude under strict algorithmic constraints and national-level competitive examinations.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-900/40 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all group overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-40 transition-opacity">
                <Trophy className="w-12 h-12 text-amber-400" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-amber-950/60 text-amber-300 border border-amber-800/60 mb-4">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>{item.badge}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-cyan-400 mt-1">
                  {item.rating}
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
                  >
                    <span>Verify Profile</span>
                    <ExternalLink className="w-3 h-3" />
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
