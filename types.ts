
export interface Project {
  title: string;
  description: string;
  links?: { label: string; url: string }[];
  image: string; 
  tech?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  stats: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  period: string;
  description: string;
}
