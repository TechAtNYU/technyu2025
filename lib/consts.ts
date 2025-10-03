import { ProgramCardProps, TeamMember, ValueCardProps } from "./types"

export const programs = [
    "Dev Team",
    "Tech Treks",
    "Startup Week",
    "Mentorship",
]

export const contacts: [string, string][] = [
    ["Email", "mailto:hello@techatnyu.org"],
    ["Newsletter", "/newsletter"],
    ["Instagram", "https://www.instagram.com/techatnyu"],
    ["Discord", "https://discord.gg/q3cBnFMpMQ"],
    ["LinkedIn", "https://www.linkedin.com/company/tech-at-nyu"],
]

export const about = [
    "Team",
    "Mission",
]

export const programsLinks: ProgramCardProps[] = [
    {
        name: "Dev Team",
        url: "/dev-team",
        appOpen: false,
        svgicon: "/program-logos/dev-team.svg",
        tagline: "F**K albert, we're building a better one",
        description: "Build in a small cohort from 0 -> 1, learning from users, and creating public proof of work as we simulate the startup lifecycle with proper practice. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean."
    },
    {
        name: "Tech Treks",
        url: "/tech-treks",
        appOpen: false,
        svgicon: "/program-logos/tech-treks.svg",
        tagline: "The original program for newbies in tech",
        description: "Explore the tech industry with us! Meet professionals, visit companies, and get a behind-the-scenes look at the world of technology."
    },
    {
        name: "Startup Week",
        url: "/startup-week",
        appOpen: false,
        svgicon: "/program-logos/startup-week.svg",
        tagline: "Launch your startup journey",
        description: "Join us for a week-long event where you'll learn from industry experts, network with like-minded individuals, and turn your ideas into reality."
    },
    {
        name: "Mentorship",
        url: "/mentorship",
        appOpen: false,
        svgicon: "/program-logos/mentorship.svg",
        tagline: "Guidance from those who came before you",
        description: "Connect with experienced mentors who can provide valuable insights, advice, and support as you navigate your career in tech."
    }
]

export const team_members: TeamMember[] = [
    {
        name: "Liz (Yeonju) Kim",
        title: "President",
        category: "Leadership",
        imageUrl: "/team_pics/liz-kim.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/yeonjukim/",
        slug: "liz-kim"
    },
    {
        name: "Sean Lai",
        title: "Vice President",
        category: "Leadership",
        imageUrl: "/team_pics/sean-lai.jpg",
        linkedinUrl: "https://www.linkedin.com/in/seanlai/",
        slug: "sean-lai"
    },
    {
        name: "Cyan Yan",
        title: "Eboard, Dev Team",
        category: "Program Leads",
        imageUrl: "/team_pics/cyan-yan.jpg",
        linkedinUrl: "https://www.linkedin.com/in/cyan-yan-9b0b621b4/",
        slug: "cyan-yan"
    },
    {
        name: "Kevin Dong",
        title: "Vice President",
        category: "Leadership",
        imageUrl: "/team_pics/kevin-dong.jpg",
        linkedinUrl: "https://www.linkedin.com/in/kevin-dong-641b62194/",
        slug: "kevin-dong"
    },
    {
        name: "Parul Veda",
        title: "Treasurer",
        category: "Leadership",
        imageUrl: "/team_pics/parul-veda.jpg",
        linkedinUrl: "https://www.linkedin.com/in/parulveda/",
        slug: "parul-veda"
    },
    {
        name: "Aileen li",
        title: "Eboard, Mentorship",
        category: "Program Leads",
        imageUrl: "/team_pics/aileen-li.jpg",
        linkedinUrl: "https://www.linkedin.com/in/aileen-li-9b0b621b4/",
        slug: "aileen-li"
    },
    {
        name: "Seth Derusha",
        title: "Eboard, Tech-treks",
        category: "Program Leads",
        imageUrl: "/team_pics/seth-derusha.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/sethderusha/",
        slug: "seth-derusha"
    },
    {
        name: "Aimee Yu",
        title: "Eboard, Tech Treks",
        category: "Program Leads",
        imageUrl: "/team_pics/aimee-yu.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/aimeeyyu/",
        slug: "aimee-yu"
    },
    {
        name: "Nicole Wu",
        title: "Eboard, Startup Team",
        category: "Program Leads",
        imageUrl: "/team_pics/nicole-wu.jpg",
        linkedinUrl: "https://www.linkedin.com/in/nicolewu/",
        slug: "nicole-wu"
    },
    {
        name: "Andy Li",
        title: "Eboard, Dev Team",
        category: "Program Leads",
        imageUrl: "/team_pics/andy-li.png",
        linkedinUrl: "https://www.linkedin.com/in/andy-li/",
        slug: "andy-li"
    },
    {
        name: "Kaylee Chen",
        title: "Events Coordinator",
        category: "Operations",
        imageUrl: "/team_pics/kaylee-chen.jpg",
        linkedinUrl: "https://www.linkedin.com/in/kaylee-chen-9b0b621b4/",
        slug: "kaylee-chen"
    },
    {
        name: "Haley Ngai",
        title: "Operations, Marketing",
        category: "Operations",
        imageUrl: "/team_pics/haley-ngai.jpg",
        linkedinUrl: "https://www.linkedin.com/in/haley-ngai-9b0b621b4/",
        slug: "haley-ngai"
    },
    {
        name: "Jennifer Huang",
        title: "Creative Director",
        category: "Operations",
        imageUrl: "/team_pics/jennifer-huang.jpg",
        linkedinUrl: "https://www.linkedin.com/in/jennifer-huang-9b0b621b4/",
        slug: "jennifer-huang",
        fadeIn: "/team_pics/jenn-huang.jpg"
    },
    {
        name: "Bryan Ko",
        title: "Eboard, Mentorship",
        category: "Program Leads",
        imageUrl: "/team_pics/bryan-ko.png",
        linkedinUrl: "https://www.linkedin.com/in/bryan-ko-9b0b621b4/",
        slug: "bryan-ko"
    },
    {
        name: "Yoonchul Shin",
        title: "Events Coordinator",
        category: "Operations",
        imageUrl: "/team_pics/yoonchul-shin.png",
        linkedinUrl: "https://www.linkedin.com/in/yoonchul-shin-9b0b621b4/",
        slug: "yoonchul-shin"
    },
    {
        name: "Ellie Ho",
        title: "Marketing Director",
        category: "Operations",
        imageUrl: "/team_pics/ellie-ho.jpg",
        linkedinUrl: "https://www.linkedin.com/in/ellie-ho-9b0b621b4/",
        slug: "ellie-ho"
    },
    {
    name: "Marc Lam",
    title: "Marketing Director (Abroad)",
    category: "Operations",
    imageUrl: "/team_pics/marc-lam.jpg",
    linkedinUrl: "https://www.linkedin.com/in/marclam/",
    slug: "marc-lam"
    },
    {
        name: "Grace Gao",
        title: "Eboard, Startup Week",
        category: "Program Leads",
        imageUrl: "/team_pics/grace-gao.jpg",
        linkedinUrl: "https://www.linkedin.com/in/grace-gao-9b0b621b4/",
        slug: "grace-gao"
    },
    {
        name: "Vivek Patel",
        title: "Founder, President Emeritus",
        category: "Emeritus",
        imageUrl: "/team_pics/vivek-patel.png",
        linkedinUrl: "https://www.linkedin.com/in/vivek-patel-827b958b/",
        slug: "vivek-patel"
    },{
        name: "Terri Burns",
        title: "Type Capital Founder, Former President",
        category: "Emeritus",
        imageUrl: "/team_pics/terri-burns.png",
        linkedinUrl: "https://www.linkedin.com/in/terri-burns-927b4b1b/",
        slug: "terri-burns"
    }
]

export const valuesData: ValueCardProps[] = [
    {
        name: "Community",
        url: "#",
        svgicon: "/value-logos/community.svg",
        description: "Meet other tech-enthusiasts, builders, and curious minds."
    },
    {
        name: "Learning", 
        url: "#",
        svgicon: "/value-logos/learning.svg",
        description: "Pick up new skills or brush up your code."
    },
    {
        name: "Creativity",
        url: "#", 
        svgicon: "/value-logos/creativity.svg",
        description: "Ideate and innovate your ideas through design and creative computing."
    }
]