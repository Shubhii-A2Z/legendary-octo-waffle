import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <StatsBanner />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <LeadershipSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Modals */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
};

export default App;
