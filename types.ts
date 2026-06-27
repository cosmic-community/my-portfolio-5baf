export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    tagline?: string;
    bio?: string;
    avatar?: CosmicImage;
    email?: string;
    location?: string;
    resume?: {
      url: string;
    };
    github_url?: string;
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string;
    proficiency?: Proficiency | string;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    role?: string;
    company_logo?: CosmicImage;
    start_date?: string;
    end_date?: string;
    currently_working?: boolean;
    description?: string;
    tech_used?: string[];
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    summary?: string;
    description?: string;
    cover_image?: CosmicImage;
    screenshots?: CosmicImage[];
    tech_stack?: string[];
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}