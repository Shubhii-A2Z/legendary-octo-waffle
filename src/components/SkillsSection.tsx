import React from 'react';
import { skillGroups } from '../data/portfolioData';
import { 
  Code, 
  Cpu, 
  Server, 
  Cloud, 
  Sparkles
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'AI & Autonomous Agents':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Backend & Distributed Systems':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Cloud, Observability & DevOps':
        return <Cloud className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Skills & System Proficiencies
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            From low-level data structures and algorithmic complexity in C++ to high-throughput asynchronous pipelines, RAG agent workflows, and distributed telemetry.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-7 hover:border-cyan-500/30 transition-all shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {getIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                      skill.highlight
                        ? 'bg-slate-950/90 border-cyan-500/30 text-white shadow-sm'
                        : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <span className="font-medium flex items-center gap-2">
                      {skill.highlight ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      )}
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
