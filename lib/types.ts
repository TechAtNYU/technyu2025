export type ProgramCardProps = {
  name: string;
  url: string;
  appOpen: boolean;
  svgicon: string;
  tagline: string;
  description_small: string;
  description_large: string;
};

export type TeamMember = {
  name: string;
  title: string;
  category: string;
  imageUrl: string;
  linkedinUrl?: string;
  slug: string;
  fadeIn?: string; // Optional second image URL to fade in on hover
};

export type ValueCardProps = {
  name: string;
  svgicon: string;
  description: string;
};

