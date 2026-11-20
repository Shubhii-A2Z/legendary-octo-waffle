import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                SN
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Shubham Singh Negi
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono">SWE @ Google Intern &bull; DTU</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Interactive Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 transition-all shadow-sm"
              title="Open Interactive Recruiter CLI"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>terminal</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700 font-sans">CLI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-100 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 rounded-lg shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all font-sans"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Quick Links */}
            <div className="flex items-center gap-1 pl-1 border-l border-slate-800">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-slate-100 bg-cyan-600 rounded-md"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-cyan-300 bg-slate-900 border border-slate-700/80 rounded-lg"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive Terminal CLI</span>
              </button>
              
              <div className="flex items-center justify-center gap-4 pt-2">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 text-xs">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 flex items-center gap-1 text-xs">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 text-xs">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
