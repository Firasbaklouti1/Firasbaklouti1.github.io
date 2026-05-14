export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  location: string;
  email: string;
  profileImage: string;
  resumeUrl: string;
  shortBio: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  platform: 'upwork' | 'github' | 'linkedin' | 'stackoverflow' | string;
}

export interface About {
  paragraphs: string[];
  keyExpertise: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  details: string;
  image: string;
  link: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  shortTitle: string;
  color: string;
  skills: string[];
  styles?: {
    iconBg: string;
    iconText: string;
    badgeHover: string;
  };
}

export interface SoftSkill {
  name: string;
  color: string;
  styles?: {
    badge: string;
    border: string;
    hover: string;
  };
}

export interface EducationDegree {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface LinkedAccount {
  name: string;
  description: string;
}

export interface Education {
  degrees: EducationDegree[];
  linkedAccounts: LinkedAccount[];
}

export interface Certification {
  id: string;
  number: string;
  title: string;
  issuer: string;
  duration: string;
  completedDate: string;
  issuedBy: string;
  description: string;
  pdfUrl: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  about: About;
  experience: Experience[];
  projects: Project[];
  skills: {
    categories: SkillCategory[];
    softSkills: SoftSkill[];
  };
  education: Education;
  certifications: Certification[];
}
