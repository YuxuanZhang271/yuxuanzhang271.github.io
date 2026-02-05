
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  links?: {
    pdf?: string;
    code?: string;
    video?: string;
    openreview?: string;
  };
  tags: string[];
  isPreprint?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  type: 'award' | 'publication' | 'talk' | 'education' | 'general';
}

export interface ResearchArea {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
}

// Added Teaching interface to support the Teaching & Mentorship section
export interface Teaching {
  course: string;
  role: string;
  period: string;
  institution: string;
}
