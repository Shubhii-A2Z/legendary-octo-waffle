import React, { useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
SHUBHAM SINGH NEGI
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

EDUCATION
Delhi Technological University (DTU) — Rohini, New Delhi, India
B.Tech in Computer Science & Engineering | CGPA: 8.428 (July 2023 - July 2027)

Basava International School — Dwarka, New Delhi
CBSE Class XII: 91.4% (Merit Scholar) | Class X: 94.8% (2020 - 2023)

EXPERIENCE
Google — Bengaluru, India
Software Engineering Intern (May 2026 - July 2026)
- Designed a parameter-tuning approach to reduce variance in Google Compute Engine (GCE) qualification performance signals, enabling reliable detection of 200ms disruptions and improving signal reliability by 35% for critical engineering decisions.
- Engineered an AI-driven Python framework using Gemini API and RAG pipelines to automate workload benchmarking and parameter tuning, cutting manual configuration effort by 70% and accelerating release cycles.
- Delivered a real-time dashboard tracking AI agent progress and metric variance, updated automatically by agents through MCP integrations, providing actionable insights for 30+ engineers.

PROJECTS
Rogue | Python, LangChain, Groq, Jinja2
- Engineered an interactive CLI coding agent that reduced manual scripting time by 48% through LangChain-driven LLM orchestration of file manipulation, directory audits, and remote command execution.
- Integrated token-level streaming and checkpoint-based short-term memory, achieving a 35% increase in response fidelity while enabling a human-in-the-loop that intercepted 100% of privileged operations for user approval.

Relay | TypeScript, Express, PostgreSQL, Socket.io, OpenTelemetry, Grafana LGTM, BullMQ, Redis, Redlock
- Designed and built a full-stack collaborative workspace platform supporting real-time chat, collaborative docs, and video calling on an end-to-end type-safe TypeScript architecture.
- Instituted end-to-end observability with OpenTelemetry, Grafana LGTM, and custom RED dashboards, reducing mean time to detection from 78 minutes to 9 minutes through trace-to-log drill-downs.
- Deployed an asynchronous processing pipeline using BullMQ, Redis, and Redlock, cutting batch job latency by 63% and delivering 99.97% task-completion reliability via Bull Board monitoring.

AtmosAI | Python, LLM Tool Calling, Streamlit, Jinja2
- Created an LLM agent using tool calling to chain Open-Meteo geocoding and forecast APIs, returning live weather for any location through a Streamlit chat interface.
- Designed Jinja2 prompt templates with chain-of-thought reasoning.

TECHNICAL SKILLS
- Languages: Java, Python, TypeScript, C/C++, JavaScript, SQL
- AI & Agents: LangChain, LLM Tool Calling, Prompt Engineering
- Backend & Web: Node.js, Express, Prisma, PostgreSQL, Redis, REST APIs
- Developer Tools: Git, Docker, Google Cloud Platform

AWARDS & ACHIEVEMENTS
- Rated Specialist (1502) on Codeforces | Knight (1905) on LeetCode
- JEE Mains AIR 9125 (99.1%ile), 2023 | Academic Excellence Award for highest marks in Class XII

LEADERSHIP & COMMUNITY
- Co-Head - GDSC (DTU) (Dec 2024 - Sept 2025): Created a resource hub with 15+ blogs and tutorials on advanced DSA.
- YouTube Creator (1.49k subscribers): Publish video explanations of high-rated Codeforces problems for learners.
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[92vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-sm">Shubham Singh Negi &bull; Resume Preview</span>
            <span className="text-xs text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-mono">
              Recruiter-Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all font-semibold shadow-sm"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Representation */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/70">
          <div className="max-w-[800px] mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl font-sans text-[13px] leading-relaxed select-text print:p-0 print:shadow-none">
            
            {/* Header */}
            <div className="text-center pb-4 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                SHUBHAM SINGH NEGI
              </h1>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700">
                <span className="flex items-center gap-1">📞 {personalInfo.phone}</span>
                <span>|</span>
                <span className="flex items-center gap-1">✉️ {personalInfo.email}</span>
                <span>|</span>
                <span>💼 linkedin.com/in/{personalInfo.linkedinHandle}</span>
                <span>|</span>
                <span>🐙 github.com/{personalInfo.githubHandle}</span>
              </div>
            </div>

            {/* Education */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                EDUCATION
              </h2>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900">Delhi Technological University</div>
                    <div className="italic text-slate-800">B.Tech in Computer Science & Engineering | CGPA: 8.428</div>
                  </div>
                  <div className="text-right text-xs text-slate-700">
                    <div>Rohini, New Delhi, India</div>
                    <div className="italic">July 2023 – July 2027</div>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900">Basava International School</div>
                    <div className="text-slate-800">CBSE Class XII: 91.4% (Merit Scholar) | Class X: 94.8%</div>
                  </div>
                  <div className="text-right text-xs text-slate-700">
                    <div>Dwarka, New Delhi</div>
                    <div className="italic">2020 – 2023</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                EXPERIENCE
              </h2>
              <div className="mt-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">Google</span>
                  </div>
                  <div className="text-right text-xs text-slate-700">
                    <span>Bengaluru, India</span>
                  </div>
                </div>
                <div className="flex justify-between items-start italic text-slate-800 text-xs">
                  <span>Software Engineering Intern</span>
                  <span>May 2026 – July 2026</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-slate-800 text-[12.5px]">
                  <li>Designed a parameter-tuning approach to reduce variance in <strong>Google Compute Engine (GCE)</strong> qualification performance signals, enabling reliable detection of <strong>200ms disruptions</strong> and improving signal reliability by <strong>35%</strong> for critical engineering decisions.</li>
                  <li>Engineered an AI-driven Python framework using <strong>Gemini API and RAG pipelines</strong> to automate workload benchmarking and parameter tuning, cutting manual configuration effort by <strong>70%</strong> and accelerating release cycles.</li>
                  <li>Delivered a real-time dashboard tracking AI agent progress and metric variance, updated automatically by agents through <strong>MCP integrations</strong>, providing actionable insights for <strong>30+ engineers</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                PROJECTS
              </h2>
              <div className="mt-2 space-y-3">
                {/* Rogue */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[13px]">
                    <span>Rogue</span>
                    <span className="font-normal text-slate-600">|</span>
                    <span className="font-medium text-slate-700 text-xs">Python, LangChain, Groq, Jinja2</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-800 text-[12.5px]">
                    <li>Engineered an interactive CLI coding agent that reduced manual scripting time by <strong>48%</strong> through <strong>LangChain-driven</strong> LLM orchestration of file manipulation, directory audits, and remote command execution.</li>
                    <li>Integrated token-level streaming and checkpoint-based short-term memory, achieving a <strong>35% increase</strong> in response fidelity while enabling a <strong>human-in-the-loop</strong> that intercepted 100% of privileged operations for user approval.</li>
                  </ul>
                </div>

                {/* Relay */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[13px]">
                    <span>Relay</span>
                    <span className="font-normal text-slate-600">|</span>
                    <span className="font-medium text-slate-700 text-xs">TypeScript, Express, PostgreSQL, Socket.io, OpenTelemetry, Grafana</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-800 text-[12.5px]">
                    <li>Designed and built a full-stack collaborative workspace platform supporting real-time chat, collaborative docs, and video calling on an end-to-end type-safe <strong>TypeScript architecture</strong>.</li>
                    <li>Instituted end-to-end observability with <strong>OpenTelemetry, Grafana LGTM</strong>, and custom RED dashboards, reducing mean time to detection from <strong>78 minutes to 9 minutes</strong> through trace-to-log drill-downs.</li>
                    <li>Deployed an asynchronous processing pipeline using <strong>BullMQ, Redis, and Redlock</strong>, cutting batch job latency by <strong>63%</strong> and delivering <strong>99.97% task-completion reliability</strong> via Bull Board monitoring.</li>
                  </ul>
                </div>

                {/* AtmosAI */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[13px]">
                    <span>AtmosAI</span>
                    <span className="font-normal text-slate-600">|</span>
                    <span className="font-medium text-slate-700 text-xs">Python, LLM Tool Calling, Streamlit, Jinja2</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-800 text-[12.5px]">
                    <li>Created an LLM agent using <strong>tool calling</strong> to chain Open-Meteo geocoding and forecast APIs, returning live weather for any location through a Streamlit chat interface.</li>
                    <li>Designed Jinja2 prompt templates with <strong>chain-of-thought</strong> reasoning.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                TECHNICAL SKILLS
              </h2>
              <div className="mt-2 text-[12.5px] space-y-1 text-slate-800">
                <p><strong>Languages:</strong> Java, Python, TypeScript, C/C++, JavaScript, SQL</p>
                <p><strong>AI & Agents:</strong> LangChain, LLM Tool Calling, Prompt Engineering</p>
                <p><strong>Backend & Web:</strong> Node.js, Express, Prisma, PostgreSQL, Redis, REST APIs</p>
                <p><strong>Developer Tools:</strong> Git, Docker, Google Cloud Platform</p>
              </div>
            </div>

            {/* Awards & Achievements */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                AWARDS & ACHIEVEMENTS
              </h2>
              <div className="mt-2 text-[12.5px] space-y-1 text-slate-800">
                <p>• Rated <strong>Specialist (1502)</strong> on Codeforces | <strong>Knight (1905)</strong> on LeetCode</p>
                <p>• <strong>JEE Mains AIR 9125 (99.1%ile)</strong>, 2023 | <strong>Academic Excellence Award</strong> for highest marks in Class XII</p>
              </div>
            </div>

            {/* Leadership & Community */}
            <div className="mt-5">
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-0.5">
                LEADERSHIP & COMMUNITY
              </h2>
              <div className="mt-2 space-y-2 text-[12.5px] text-slate-800">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">Co-Head – GDSC (DTU)</span>
                    <span className="italic text-xs text-slate-700">Dec 2024 – Sept 2025</span>
                  </div>
                  <p className="mt-0.5">Created a resource hub with 15+ blogs and tutorials on advanced DSA to prepare the team for competitive programming.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">YouTube Creator (1.49k subscribers)</span>
                    <span className="italic text-xs text-slate-700">Ongoing</span>
                  </div>
                  <p className="mt-0.5">Publish video explanations of high-rated Codeforces problems for learners.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
