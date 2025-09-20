export type ProgramCardProps = {
  name: string;
  url: string;
  appOpen: boolean;
  svgicon: string;
  tagline: string;
  description: string;
};

export type TeamMember = {
  name: string;
  title: string;
  category: string;
  imageUrl: string;
  linkedinUrl?: string;
  slug: string;
};

export type ValueCardProps = {
  name: string;
  url: string;
  svgicon: string;
  description: string;
};
