import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-semibold text-slate-200">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="text-xs text-slate-400 font-mono">
              Designed & Built for High-Impact Software Engineering Roles
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>recruiter_cli</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <span>Ready for instant deployment to Vercel</span>
        </div>
      </div>
    </footer>
  );
};
