export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  tags: string[];
  category: 'AI & Agents' | 'Distributed Systems' | 'Full Stack';
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  architectureNote?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  status: 'Upcoming / Completed';
  bullets: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Achievement {
  title: string;
  platform: string;
  rating?: string;
  description: string;
  badge: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  details?: string[];
}
