import React from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Cpu
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Software Engineering Experience
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md font-normal">
            Proven track record solving complex systems variance, automated tuning with Gemini RAG, and live engineering observability.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/40 transition-all shadow-xl shadow-black/40 overflow-hidden"
            >
              {/* Google Brand Color Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-amber-400 to-emerald-500" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  {/* Google Logo / Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center p-2.5 shadow-md shrink-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        {exp.role}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="text-slate-500">&bull;</span>
                      <span className="text-slate-300 font-sans">{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {exp.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-2 text-center">
                      <div className="text-lg font-bold font-mono text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-4">
                {exp.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <div>{bullet}</div>
                  </div>
                ))}
              </div>

              {/* Technologies Stack Chips */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Core Tech:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
