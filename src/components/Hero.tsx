import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Terminal, 
  FileText, 
  MapPin, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Youtube, 
  Code2, 
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium text-slate-200">Software Engineering Intern @ Google</span>
            <span className="text-slate-500 font-mono text-[11px]">(Summer 2026)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>CSE @ Delhi Technological University &bull; CGPA 8.428</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Engineering resilient <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              distributed systems
            </span>{' '}
            & <br className="hidden sm:inline" />
            <span className="relative">
              agentic AI architectures.
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500/50 via-sky-400 to-transparent rounded-full hidden sm:block"></span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
            Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. I specialize in building autonomous LLM agents, 
            high-throughput asynchronous workflows with Redis & BullMQ, full-stack observability with OpenTelemetry & Grafana, 
            and AI-driven parameter tuning pipelines.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <span>Explore Featured Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Recruiter Resume (PDF)</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs font-medium text-cyan-300 bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-sm group"
          >
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
            <span>shubham@cli:~$</span>
            <span className="text-slate-500 group-hover:text-cyan-400">run help</span>
          </button>
        </div>

        {/* Social and Profile Links */}
        <div className="mt-10 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect & Profiles:</span>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a 
              href={personalInfo.leetcode} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode (1905 Knight)</span>
            </a>

            <a 
              href={personalInfo.codeforces} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
            >
              <Cpu className="w-4 h-4" />
              <span>Codeforces (Specialist)</span>
            </a>

            <a 
              href={personalInfo.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube (1.49k)</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800/60">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>New Delhi, India (Open to Relocation)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
