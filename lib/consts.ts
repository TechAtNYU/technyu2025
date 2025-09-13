import { url } from "inspector"

export const programs = [
    "Dev Team",
    "Tech Treks",
    "Startup Week",
    "Mentorship",
]

export const contacts = [
    "Email",
    "Newsletter",
    "Instagram",
    "Discord",
    "LinkedIn",
]

export const about = [
    "Team",
    "Mission",
]
export type ProgramCardProps = {
  name: string;
  url: string;
  svgicon: string;
  tagline: string;
  description: string;
};

export const programsLinks: ProgramCardProps[] = [
    {
        name: "Dev Team",
        url: "/dev-team",
        svgicon: "desktop.svg",
        tagline: "F**K albert, we're building a better one",
        description: "Build in a small cohort from 0 -> 1, learning from users, and creating public proof of work as we simulate the startup lifecycle with proper practice."
    },
    {
        name: "Tech Treks",
        url: "/tech-treks",
        svgicon: "/program-logos/tech-treks.svg",
        tagline: "The original program for newbies in tech",
        description: "Explore the tech industry with us! Meet professionals, visit companies, and get a behind-the-scenes look at the world of technology."
    },
    {
        name: "Startup Week",
        url: "/startup-week",
        svgicon: "/program-logos/startup-week.svg",
        tagline: "Launch your startup journey",
        description: "Join us for a week-long event where you'll learn from industry experts, network with like-minded individuals, and turn your ideas into reality."
    },
    {
        name: "Mentorship",
        url: "/mentorship",
        svgicon: "/program-logos/mentorship.svg",
        tagline: "Guidance from those who came before you",
        description: "Connect with experienced mentors who can provide valuable insights, advice, and support as you navigate your career in tech."
    }
]