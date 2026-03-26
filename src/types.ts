export interface Project {
  title: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Training {
  title: string;
  period: string;
  description: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}
