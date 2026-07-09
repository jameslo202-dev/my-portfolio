export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Social {
  label: string;
  href: string;
  icon: string;
}
