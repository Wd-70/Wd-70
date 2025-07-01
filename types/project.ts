export type ProjectCategory = 'mobile' | 'web' | 'automation';

export interface PricingTier {
  price: number;
  features: string[];
  description?: string;
}

export interface ProjectPricing {
  standard: PricingTier;
  deluxe: PricingTier;
  premium: PricingTier;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  thumbnail: string;
  tags: string[];
  pricing: ProjectPricing;
  gallery: string[];
  techStack: string[];
  details?: {
    overview?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}
