export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'web' | 'system' | 'ai' | 'other';
  featured: boolean;
  imageAccent: string; // Tailwind gradient or color for the card's visual top
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  logoText: string;
  logoBg: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  iconName: string; // Key for Lucide icons
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    iconUrl?: string; // Standardized logos if needed, or simple icons
  }[];
}
