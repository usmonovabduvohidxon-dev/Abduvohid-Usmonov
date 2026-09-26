export interface Project {
  id: string;
  name: string;
  tag: string;
  category: 'AI / Web App' | 'Messenger / Web App' | 'Experimental';
  description: string;
  longDescription: string;
  technologies: string[];
  status: string;
  activePhase?: string;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  isFuture?: boolean;
}

export interface SkillCategory {
  title: string;
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    badge?: string;
    description: string;
  }[];
}

export interface TimelineItem {
  number: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  date?: string;
}

export interface TerminalOutput {
  id: string;
  command: string;
  output: string | string[];
  timestamp: string;
  isError?: boolean;
}
