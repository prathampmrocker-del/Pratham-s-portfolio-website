export interface Project {
  id: string;
  projectCode: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  details?: {
    overview: string;
    objectives: string[];
    plannedTech: string[];
    timeline: string;
  };
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
  badgeClass: string;
  skills: string[];
}

export interface CareerInterest {
  title: string;
  icon: string;
  color: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  skillsLearned: string[];
}

export interface ContactDetails {
  name: string;
  role: string;
  degree: string;
  university: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
