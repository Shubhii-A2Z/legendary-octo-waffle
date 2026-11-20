import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Education & Coursework
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md font-normal">
            Rigorous foundations in computer science, algorithms, operating systems, and computer engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 sm:p-8 hover:border-cyan-500/40 transition-all shadow-xl shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </span>

                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                  {edu.score}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {edu.institution}
              </h3>
              
              <div className="text-sm font-medium text-cyan-300 mt-1">
                {edu.degree}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.location}</span>
              </div>

              {edu.details && (
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                  {edu.details.map((d, i) => (
                    <p key={i} className="text-xs text-slate-300 leading-relaxed">
                      {d}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
