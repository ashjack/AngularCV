export interface Project {
  id: number;
  name: string;
  image: string;
  intro: string;
  steps: string[];
  outro: string;
}

export interface Job {
  type: string;
  title: string;
  location: string;
  date: string;
  description: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  image: string;
  years: number;
}
