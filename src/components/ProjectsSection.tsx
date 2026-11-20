import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  Github, 
  Youtube, 
  Terminal, 
  CheckCircle2, 
  Workflow
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Agents', 'Distributed Systems'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production & Engineering Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Featured Systems & AI Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl bg-slate-900/50 border border-slate-800/90 flex flex-col justify-between overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Header Banner */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Source on GitHub"
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Video / Demo"
                        className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mt-1">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Badges */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-2 text-center">
                      <div className="text-sm font-bold font-mono text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5" title={m.label}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bullets / Highlights */}
                <div className="mt-6 space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Callout */}
                {project.architectureNote && (
                  <div className="mt-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px] mb-1 font-semibold">
                      <Workflow className="w-3 h-3" /> Architecture Note:
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {project.architectureNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Tech Stack */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Project Simulation Callout banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-800/40 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Want to test the CLI coding agent commands?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Explore the interactive terminal mode built right into this portfolio website.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shrink-0"
          >
            Discuss Projects with Shubham
          </a>
        </div>

      </div>
    </section>
  );
};
