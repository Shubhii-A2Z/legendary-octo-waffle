import { Project, Experience, SkillGroup, Achievement, Education } from '../types';

export const personalInfo = {
  name: "Shubham Singh Negi",
  title: "Software Engineer & AI Systems Developer",
  shortBio: "CS undergrad at Delhi Technological University (DTU) and incoming Software Engineering Intern at Google. Specialized in agentic AI architectures, RAG pipelines, distributed systems, and real-time observability.",
  fullBio: "I am a Computer Science & Engineering undergraduate at Delhi Technological University (DTU '27) with deep experience building resilient systems and autonomous AI agents. Passionate about eliminating engineering bottlenecks through generative AI, parameter optimization, distributed workflows, and end-to-end telemetry.",
  email: "negishubham2005@gmail.com",
  phone: "+91 9582781128",
  location: "New Delhi, India",
  github: "https://github.com/Shubhii-A2Z",
  githubHandle: "Shubhii-A2Z",
  linkedin: "https://linkedin.com/in/shubham-negi-dtu",
  linkedinHandle: "shubham-negi-dtu",
  youtube: "https://youtube.com/@Shubhii-A2Z",
  leetcode: "https://leetcode.com/u/Shubhii-A2Z",
  codeforces: "https://codeforces.com/profile/Shubhii-A2Z",
  availabilityStatus: "Open for High-Impact Software Engineering Roles & Collabs",
};

export const keyMetrics = [
  { label: "GCE Signal Reliability", value: "+35%", detail: "Optimized 200ms disruption detection at Google" },
  { label: "Configuration Effort Cut", value: "70%", detail: "Automated via Gemini API & RAG pipelines" },
  { label: "Mean Time to Detection", value: "78m → 9m", detail: "Observability drill-downs with OpenTelemetry" },
  { label: "LeetCode Knight Rating", value: "1905", detail: "Specialist (1502) on Codeforces & 99.1%ile JEE" },
];

export const experiences: Experience[] = [
  {
    company: "Google",
    role: "Software Engineering Intern",
    location: "Bengaluru, India",
    period: "May 2026 – July 2026",
    type: "Internship",
    status: "Upcoming / Completed",
    bullets: [
      "Designed a parameter-tuning approach to reduce variance in Google Compute Engine (GCE) qualification performance signals, enabling reliable detection of 200ms disruptions and improving signal reliability by 35% for critical engineering decisions.",
      "Engineered an AI-driven Python framework using Gemini API and RAG pipelines to automate workload benchmarking and parameter tuning, cutting manual configuration effort by 70% and accelerating release cycles.",
      "Delivered a real-time dashboard tracking AI agent progress and metric variance, updated automatically by agents through MCP integrations, providing actionable insights for 30+ engineers."
    ],
    metrics: [
      { label: "Signal Reliability", value: "+35%" },
      { label: "Effort Reduction", value: "70%" },
      { label: "Engineering Stakeholders", value: "30+" },
      { label: "Disruption Resolution", value: "200ms" },
    ],
    technologies: ["Python", "Gemini API", "RAG Pipelines", "Model Context Protocol (MCP)", "Google Compute Engine (GCE)", "Benchmarking Systems", "Distributed Infrastructure"]
  }
];

export const projects: Project[] = [
  {
    id: "rogue",
    title: "Rogue",
    subtitle: "Autonomous Interactive CLI Coding Agent",
    period: "Recent",
    category: "AI & Agents",
    tags: ["Python", "LangChain", "Groq", "Jinja2", "CLI Tooling", "Agent Memory"],
    description: "An interactive CLI coding agent that autonomously inspects codebases, executes directory audits, orchestrates file manipulations, and executes commands safely with human-in-the-loop guardrails.",
    highlights: [
      "Reduced manual scripting time by 48% through LangChain-driven LLM orchestration of complex file manipulations, code modifications, and directory tree audits.",
      "Integrated token-level streaming and checkpoint-based short-term memory, achieving a 35% increase in response fidelity.",
      "Implemented a bulletproof human-in-the-loop safety supervisor that intercepted 100% of privileged and destructive operations for explicit user sign-off."
    ],
    metrics: [
      { label: "Manual Scripting Time", value: "-48%" },
      { label: "Response Fidelity", value: "+35%" },
      { label: "Privileged Interception", value: "100%" }
    ],
    githubUrl: "https://github.com/Shubhii-A2Z/Rogue",
    videoUrl: "https://youtube.com/@Shubhii-A2Z",
    architectureNote: "Features dynamic prompt templating with Jinja2, low-latency inferencing powered by Groq LPU acceleration, stateful checkpointing, and terminal-friendly streaming UI."
  },
  {
    id: "relay",
    title: "Relay",
    subtitle: "Enterprise Real-Time Collaboration & Distributed Workspace",
    period: "Recent",
    category: "Distributed Systems",
    tags: ["TypeScript", "Express", "PostgreSQL", "Socket.io", "OpenTelemetry", "Grafana LGTM", "BullMQ", "Redis", "Redlock"],
    description: "A full-stack collaborative workspace platform supporting real-time chat, synchronized collaborative document editing, and multi-peer video calling built on an end-to-end type-safe TypeScript architecture.",
    highlights: [
      "Engineered an end-to-end type-safe architecture supporting sub-millisecond WebSocket events for real-time collaborative text editing and low-latency WebRTC signalling.",
      "Instituted end-to-end observability using OpenTelemetry, Grafana LGTM (Loki, Grafana, Tempo, Mimir), and custom RED (Rate, Errors, Duration) dashboards, slashing Mean Time to Detection (MTTD) from 78 minutes down to 9 minutes.",
      "Architected a resilient distributed asynchronous processing pipeline utilizing BullMQ, Redis, and Redlock for distributed concurrency control, cutting batch job latency by 63% and delivering 99.97% task-completion reliability monitored via Bull Board."
    ],
    metrics: [
      { label: "Mean Time to Detect (MTTD)", value: "78m → 9m" },
      { label: "Batch Job Latency", value: "-63%" },
      { label: "Task Reliability", value: "99.97%" }
    ],
    githubUrl: "https://github.com/Shubhii-A2Z/Relay",
    videoUrl: "https://youtube.com/@Shubhii-A2Z",
    architectureNote: "Utilizes Redis pub/sub for horizontal socket scaling, Redlock for distributed transactional locking, and OpenTelemetry instrumentation across all HTTP and RPC boundaries."
  },
  {
    id: "atmosai",
    title: "AtmosAI",
    subtitle: "Intelligent Meteorological Agent with Tool Calling",
    period: "Recent",
    category: "AI & Agents",
    tags: ["Python", "LLM Tool Calling", "Streamlit", "Jinja2", "Open-Meteo API", "Chain-of-Thought"],
    description: "An autonomous meteorological conversational agent leveraging structured function/tool calling to dynamically resolve geographic entities and fetch live forecasting telemetry.",
    highlights: [
      "Created an LLM agent that autonomously triggers function calling tools to chain Open-Meteo geocoding and live meteorological forecast APIs, providing real-time weather analytics.",
      "Designed Jinja2 prompt templates enriched with chain-of-thought (CoT) reasoning protocols, eliminating hallucinated geographic coordinates.",
      "Delivered a slick, responsive Streamlit conversational interface with real-time markdown weather cards and interactive atmospheric telemetry graphs."
    ],
    metrics: [
      { label: "Location Precision", value: "100%" },
      { label: "Tool Calling Chaining", value: "Multi-Step" },
      { label: "API Latency", value: "<400ms" }
    ],
    githubUrl: "https://github.com/Shubhii-A2Z/AtmosAI",
    architectureNote: "Uses schema-validated function call signatures, temperature modulation, and Jinja2 templating for deterministic JSON parameter extraction."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages used across systems, agent backends, and competitive problem solving.",
    skills: [
      { name: "C / C++", level: "Competitive / Systems", highlight: true },
      { name: "Python", level: "AI / Data / Backend", highlight: true },
      { name: "TypeScript", level: "Full-Stack / Systems", highlight: true },
      { name: "Java", level: "OOP / Enterprise", highlight: false },
      { name: "JavaScript", level: "Modern ES6+", highlight: false },
      { name: "SQL", level: "PostgreSQL / Analytics", highlight: true },
    ]
  },
  {
    category: "AI & Autonomous Agents",
    description: "State-of-the-art LLM orchestration, agentic architectures, and inference workflows.",
    skills: [
      { name: "LangChain", level: "Advanced", highlight: true },
      { name: "LLM Tool Calling & Function Calling", level: "Advanced", highlight: true },
      { name: "Gemini API", level: "Production", highlight: true },
      { name: "RAG Pipelines", level: "Advanced", highlight: true },
      { name: "Model Context Protocol (MCP)", level: "Production", highlight: true },
      { name: "Prompt Engineering & Jinja2 CoT", level: "Expert", highlight: false },
      { name: "Groq LPU Inference", level: "High-Throughput", highlight: false },
    ]
  },
  {
    category: "Backend & Distributed Systems",
    description: "High-scale backend architectures, asynchronous pipelines, and caching layers.",
    skills: [
      { name: "Node.js & Express", level: "Advanced", highlight: true },
      { name: "PostgreSQL & Prisma ORM", level: "Advanced", highlight: true },
      { name: "Redis & BullMQ", level: "High Throughput", highlight: true },
      { name: "Redlock Distributed Concurrency", level: "Advanced", highlight: true },
      { name: "Socket.io (WebSockets)", level: "Real-time", highlight: false },
      { name: "REST APIs & Type-Safe Architecture", level: "Production", highlight: false },
    ]
  },
  {
    category: "Cloud, Observability & DevOps",
    description: "Infrastructure monitoring, containerization, and cloud deployment pipelines.",
    skills: [
      { name: "OpenTelemetry (OTel)", level: "Traces / Metrics", highlight: true },
      { name: "Grafana LGTM Stack", level: "Loki, Tempo, Mimir", highlight: true },
      { name: "Google Cloud Platform (GCP / GCE)", level: "Compute & Workloads", highlight: true },
      { name: "Docker", level: "Containerization", highlight: false },
      { name: "Git & GitHub CI/CD", level: "Version Control", highlight: false },
      { name: "Linux / Shell Scripting", level: "Environments", highlight: false },
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Specialist on Codeforces",
    platform: "Codeforces",
    rating: "Max Rating: 1502",
    badge: "Specialist",
    description: "Actively competing in Div. 2 rounds, solving algorithmic challenges involving dynamic programming, graph theory, and combinatorics.",
    link: "https://codeforces.com/profile/Shubhii-A2Z"
  },
  {
    title: "Knight on LeetCode",
    platform: "LeetCode",
    rating: "Max Rating: 1905",
    badge: "Knight (Top 4%)",
    description: "Ranked in the top 4% globally with 400+ algorithmic and data structure problems mastered across biweekly and weekly contests.",
    link: "https://leetcode.com/u/Shubhii-A2Z"
  },
  {
    title: "JEE Mains AIR 9125",
    platform: "National Testing Agency (NTA)",
    rating: "99.1%ile",
    badge: "Top 0.9% in India",
    description: "Secured All India Rank 9125 among over 1 million engineering aspirants nationwide in the highly competitive JEE Mains 2023.",
  },
  {
    title: "Academic Excellence Award",
    platform: "Basava International School",
    rating: "Rank 1 in Class XII",
    badge: "Merit Scholar",
    description: "Honored with the prestigious Academic Excellence Award for securing highest marks in Class XII CBSE Board Examinations (91.4%).",
  }
];

export const leadership = [
  {
    title: "Co-Head – Google Developer Student Clubs (GDSC DTU)",
    period: "Dec 2024 – Sept 2025",
    organization: "Delhi Technological University",
    description: "Leading the competitive programming and algorithmic development wing for one of the premier technical societies on campus.",
    bullets: [
      "Curated and launched a centralized technical resource hub comprising 15+ comprehensive blogs and step-by-step tutorials on advanced Data Structures & Algorithms.",
      "Mentored and trained junior university batches to compete in ICPC regionals and global competitive coding contests.",
      "Organized hackathons, code review clinics, and technical workshops reached by 200+ engineering students."
    ]
  },
  {
    title: "Technical Content Creator (YouTube)",
    period: "Ongoing",
    organization: "YouTube Community",
    stats: "1.49k+ Subscribers",
    description: "Creating high-signal video editorials dissecting high-rated Codeforces problems and competitive programming strategies.",
    bullets: [
      "Published deep-dive video walkthroughs solving complex Div. 2 / Div. 1 Codeforces problems with intuitive mathematical explanations.",
      "Fostered an engaged peer community of 1,490+ aspiring software engineers and competitive programmers.",
      "Authored clean C++ / Python reference implementations shared via public GitHub repositories."
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "Delhi Technological University (formerly DCE)",
    degree: "B.Tech in Computer Science & Engineering",
    period: "July 2023 – July 2027",
    location: "Rohini, New Delhi, India",
    score: "CGPA: 8.428",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Theory of Computation, Distributed Systems.",
      "Activities: Co-Head at GDSC DTU, Competitive Programming Core Team."
    ]
  },
  {
    institution: "Basava International School",
    degree: "Senior Secondary Education (CBSE Class XII & X)",
    period: "2020 – 2023",
    location: "Dwarka, New Delhi, India",
    score: "Class XII: 91.4% (Merit Scholar) | Class X: 94.8%",
    details: [
      "Honored with the Academic Excellence Award for highest marks in Class XII.",
      "Awarded Merit Scholar certification for exceptional academic performance."
    ]
  }
];
