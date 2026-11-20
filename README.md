# Shubham Singh Negi — Portfolio & Engineering Showcase

A modern, high-performance developer portfolio built for **Shubham Singh Negi** (Incoming Software Engineering Intern @ Google, B.Tech CSE @ Delhi Technological University). Designed specifically to showcase high-impact engineering accomplishments, systems metrics, autonomous AI agents, and competitive programming achievements to tech recruiters and hiring managers.

---

## 🌟 Key Features

- **Recruiter-Centric Design**: Minimalist cyber-slate dark mode aesthetic inspired by top engineering brands (Google, Linear, Vercel) with micro-interactions, metrics counters, and glowing accents.
- **Quantifiable Impact Showcase**:
  - **Google GCE Variance Optimization**: **+35%** signal reliability, **200ms** disruption detection.
  - **AI Automation & RAG**: **70%** reduction in manual configuration effort via Gemini API.
  - **Relay Distributed Observability**: Slashing MTTD from **78m to 9m** with OpenTelemetry & Grafana LGTM, plus **99.97%** job reliability using Redis Redlock & BullMQ.
  - **Rogue Coding Agent**: **-48%** manual scripting time with human-in-the-loop security.
  - **Competitive Programming**: **LeetCode Knight (1905, Top 4%)**, **Codeforces Specialist (1502)**, **JEE Mains 99.1%ile (AIR 9125)**.
- **Interactive Recruiter Terminal (CLI)**:
  - An interactive terminal emulator modal (`shubham@cli:~$`) allowing engineering managers to run commands like `help`, `google`, `projects`, `skills`, `hire`, `cat resume`, and `contact`.
- **Pixel-Perfect Resume Modal**:
  - Full-screen single-page preview matching standard Ivy/Google engineering resume formats.
  - One-click **Print / Save as PDF** support and **Copy Plaintext** for ATS applications.
- **Direct Contact & Verification Links**:
  - One-click email & phone number copy to clipboard with toast confirmations.
  - Verified profile links to GitHub, LinkedIn, LeetCode, Codeforces, and YouTube.

---

## 🛠️ Tech Stack

- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Lucide Icons
- **Deployment**: Vercel-ready with zero-config `vercel.json`

---

## 🚀 Getting Started

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## ☁️ Deploying to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio build"
   git branch -M main
   git remote add origin https://github.com/Shubhii-A2Z/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Vercel will automatically detect **Vite**, set the build command to `npm run build`, and output directory to `dist`.
5. Click **Deploy** — your portfolio is live in under 60 seconds!
