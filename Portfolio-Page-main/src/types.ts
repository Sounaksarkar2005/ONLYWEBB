export type ProjectCategory = 
  | 'All'
  | 'UI/UX Design'
  | 'Webpage Design'
  | 'Lifestyle'
  | 'Web Apps'
  | 'Photography'
  | 'Brand Identity';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  coverImage: string;
  galleryImages: string[];
  description: string;
  fullDetails: {
    overview: string;
    challenge: string;
    solution: string;
    deliverables: string[];
    year: string;
    client: string;
    role: string;
    tools: string[];
    liveUrl?: string;
  };
  featuredInHero?: boolean;
  fanAngle?: number; // Tilt angle in degrees for hero fan
  fanOffsetY?: number; // Vertical offset for hero fan
  badgeText?: string; // e.g. "Illustrator is all around you", "Anthony McKnight Dashboard"
}

export type ViewMode = 'hero' | 'gallery' | 'about' | 'contact';
