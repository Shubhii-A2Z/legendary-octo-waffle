import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-2">
          <p className="text-cyan-400 font-semibold">
            Welcome to Shubham's Interactive Recruiter CLI v2.4 (React / TypeScript / Node)
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-yellow-400 font-bold">help</span> to view available commands, or click any of the shortcut pills below.
          </p>
        </div>
      )
    }
  ]);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const quickCommands = ['help', 'google', 'projects', 'skills', 'achievements', 'contact', 'clear'];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList(prev => [...prev, cmdStr]);
    setHistoryIndex(-1);

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-slate-400 mb-1">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
              <div><span className="text-cyan-400 font-bold">about</span> : Summary of Shubham's engineering background</div>
              <div><span className="text-cyan-400 font-bold">google</span> : GCE tuning, Gemini API RAG, & MCP metrics</div>
              <div><span className="text-cyan-400 font-bold">projects</span> : Rogue CLI agent, Relay workspace, AtmosAI</div>
              <div><span className="text-cyan-400 font-bold">skills</span> : Full breakdown of tech stack & tools</div>
              <div><span className="text-cyan-400 font-bold">achievements</span> : LeetCode Knight, CF Specialist, JEE Mains</div>
              <div><span className="text-cyan-400 font-bold">contact</span> : Direct email, phone, and profile handles</div>
              <div><span className="text-cyan-400 font-bold">hire</span> : Why recruit Shubham for your team</div>
              <div><span className="text-cyan-400 font-bold">clear</span> : Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        resultNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-white font-semibold">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400">{personalInfo.fullBio}</p>
            <p className="text-cyan-400">Current Status: {personalInfo.availabilityStatus}</p>
          </div>
        );
        break;

      case 'google':
      case 'exp':
      case 'experience':
        resultNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Google — Software Engineering Intern (Summer 2026)</p>
            <p className="text-slate-400">Bengaluru, India &bull; Google Compute Engine (GCE) & AI Platforms</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Engineered parameter-tuning approach detecting 200ms disruptions in GCE performance signals (+35% signal reliability).</li>
              <li>Built Gemini API + RAG pipeline automating benchmarking workloads (70% configuration effort reduction).</li>
              <li>Delivered real-time telemetry dashboard updated automatically via Model Context Protocol (MCP) integrations for 30+ engineers.</li>
            </ul>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2.5 text-xs text-slate-300">
            {projects.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500 pl-3">
                <span className="text-white font-bold">{p.title}</span> <span className="text-cyan-400">({p.subtitle})</span>
                <p className="text-slate-400 mt-0.5">{p.description}</p>
                <div className="text-[11px] text-slate-500 font-mono mt-1">Stack: {p.tags.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p><span className="text-cyan-400 font-bold">Languages:</span> C++, Python, TypeScript, Java, JavaScript, SQL</p>
            <p><span className="text-cyan-400 font-bold">AI & Agents:</span> LangChain, LLM Tool Calling, Gemini API, RAG, MCP, Groq</p>
            <p><span className="text-cyan-400 font-bold">Backend & Web:</span> Node.js, Express, PostgreSQL, Prisma, Redis, BullMQ, Redlock, Socket.io</p>
            <p><span className="text-cyan-400 font-bold">Observability & Cloud:</span> OpenTelemetry (OTel), Grafana LGTM, GCP (GCE), Docker, Git</p>
          </div>
        );
        break;

      case 'achievements':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>🏆 <strong className="text-white">Knight on LeetCode</strong> (Rating 1905, Top 4% globally)</p>
            <p>⚔️ <strong className="text-white">Specialist on Codeforces</strong> (Rating 1502)</p>
            <p>🎯 <strong className="text-white">JEE Mains 2023:</strong> AIR 9125 (99.1%ile among ~1M candidates)</p>
            <p>📜 <strong className="text-white">Academic Excellence Award:</strong> Highest marks in Class XII (91.4%)</p>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 underline">{personalInfo.email}</a></p>
            <p>📱 Phone: <span className="text-emerald-400 font-mono">{personalInfo.phone}</span></p>
            <p>💼 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 underline">{personalInfo.linkedin}</a></p>
            <p>🐙 GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-300 underline">{personalInfo.github}</a></p>
          </div>
        );
        break;

      case 'hire':
        resultNode = (
          <div className="space-y-2 text-xs text-slate-300 p-2 rounded bg-slate-900 border border-cyan-500/30">
            <p className="text-cyan-300 font-semibold">Why Hire Shubham?</p>
            <p>1. Strong Systems & Distributed foundations (OpenTelemetry, Redis Redlock, BullMQ, GCE qualification).</p>
            <p>2. Hands-on cutting edge AI agent experience (Gemini API, LangChain, MCP tools, autonomous RAG).</p>
            <p>3. Exceptional algorithmic rigor (LeetCode Knight 1905, Codeforces Specialist, JEE 99.1%ile).</p>
            <p>4. High agency and leadership (GDSC Co-Head, 1.49k YouTube tech creator, 30+ engineer stakeholder impact).</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        resultNode = (
          <div className="text-xs text-rose-400">
            Command not recognized: "{cmdStr}". Type <span className="text-cyan-400 font-bold">help</span> to view all commands.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmdStr, output: resultNode }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandList.length > 0) {
        const nextIdx = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandList.length) {
          setHistoryIndex(nextIdx);
          setInput(commandList[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[580px] max-h-[90vh] rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl flex flex-col overflow-hidden font-mono text-sm">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer" />
            <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-sans">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>shubham-terminal &bull; zsh / bash</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
          <span className="text-slate-500 shrink-0 font-sans">Quick pills:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-700/60 border border-slate-700 text-slate-300 transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs leading-relaxed">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">shubham@portfolio</span>
                <span className="text-slate-600">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-600">$</span>
                <span className="text-slate-100 font-bold">{item.command}</span>
              </div>
              <div className="pl-4">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-cyan-400">~</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. 'google', 'projects', 'skills', 'hire')..."
            className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={() => executeCommand(input)}
            className="px-2.5 py-1 text-[11px] rounded bg-cyan-600/30 text-cyan-300 hover:bg-cyan-600/50 transition-colors flex items-center gap-1"
          >
            <CornerDownLeft className="w-3 h-3" />
            <span>Enter</span>
          </button>
        </div>

      </div>
    </div>
  );
};
