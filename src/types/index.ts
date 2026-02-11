export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  keyDecisions: string[];
  tradeoffs: string[];
  whatNext: string;
  techStack: string[];
  tags: string[];
  metrics: {
    users?: string;
    throughput?: string;
    latency?: string;
    uptime?: string;
  };
  links: {
    github?: string;
    article?: string;
    video?: string;
    demo?: string;
  };
  architecture?: string;
  featured: boolean;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  platform: 'medium' | 'dev.to' | 'personal' | 'hashnode';
  url: string;
  readingTime: number;
  date: string;
  tags: string[];
  featured: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  category: 'system-design' | 'code-walkthrough' | 'performance' | 'fundamentals';
  date: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'messaging' | 'cloud' | 'devops' | 'tool';
  level: 'core' | 'strong' | 'familiar';
}
