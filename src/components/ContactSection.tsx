import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending or redirect to mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Opportunity Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's build something exceptional together.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            I am always eager to discuss engineering opportunities, systems architectures, distributed workloads, and innovative AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-7 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white">Direct Reach</h3>
              <p className="text-xs text-slate-400 mt-1">Feel free to email or call directly — I respond promptly.</p>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 truncate block transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-all shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / Mobile</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-emerald-400 truncate block transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-all shrink-0"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                <div className="text-sm font-semibold text-white">Delhi, India &bull; Open to Relocation</div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-sky-950/50 hover:bg-sky-900/50 text-sky-300 border border-sky-800/60 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Direct Email Dispatcher Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">Fills your email client directly with pre-formatted details.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe (Tech Recruiter @ Company)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Message / Opportunity Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Shubham, we reviewed your work on autonomous agents, GCE signal optimization, and OpenTelemetry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Launch Email Client & Send</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
