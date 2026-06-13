export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image?: string;
  thumbnail?: string;
  technologies: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  achievements: string[];
  metrics?: Record<string, unknown>;
  githubLink?: string;
  liveLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt?: string;
  featured: boolean;
  published: boolean;
  views: number;
  image?: string;
  category: string;
  tags: string[];
  author: string;
  readingTime?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: Date;
  expiryDate?: Date;
  credentialUrl?: string;
  credentialId?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  type: "internship" | "full-time" | "freelance" | "research";
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  achievements: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  gpa?: string;
  description?: string;
  coursework: string[];
  achievements: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
