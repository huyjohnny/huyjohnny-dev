export const siteContent = {
  nav: {
    brand: "Johnny Huynh",
  },
  hero: {
    badge: "Built with intention and warm minimal vibes",
    name: "Johnny Huynh",
    role: "Full Stack Software Engineer",
    summary:
      "I build full-stack web and mobile applications from end to end, focusing on scalable architecture, reliable APIs, and polished user experiences.",
    visual: {
      src: "/images/wooden_blocks.png",
      alt: "Illustration of stacked Jenga-like blocks representing system building",
    },
    primaryCta: {
      label: "See My Work!",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact",
      href: "#contact",
    },
    socials: [
      { label: "GitHub", href: "https://github.com/huyjohnny" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/huyjohnny" },
      { label: "Resume", href: "/resume.pdf" },
    ],
    chips: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
  },
  projects: {
    title: "Selected Work",
    subtitle:
      "A curated set of projects that reflect product thinking, clean execution, and frontend depth.",
  },
  about: {
    subtitle: "A quick snapshot of how I think, build, and collaborate.",
    photo: {
      src: "/images/about.webp",
      alt: "Portrait of Johnny Huynh",
    } as const,
    narrative:
      "I’m happiest when I’m learning and building across web and mobile. I love solving problems like logic puzzles, and I enjoy working on both iOS and Android experiences. Mobile especially excites me because it’s so visual and interactive. Even everyday features feel meaningful when they’re designed with care.",
    currently:
      "Currently building an iOS app focused on health.",
    personality: ["Coffee", "Cooking", "Coding", "Music"],
    strengths: [
      "Turning complex requirements into clear, end-to-end product workflows.",
      "Building full-stack applications with reliable APIs and thoughtful interfaces.",
      "Designing AI-assisted tools with grounded outputs, safeguards, and human review.",
      "Shipping secure cloud software and improving it through testing and collaboration.",
    ],
    toolbox: [
      { group: "Languages", items: ["Python", "Java", "TypeScript", "Swift"] },
      { group: "Application Development", items: ["Spring Boot / FastAPI", "React / Angular", "SwiftUI"] },
      { group: "Cloud & AI", items: ["AWS / Azure", "Agent Frameworks"] },
    ],
    certifications: [
      "AWS Solutions Architect – Associate (SAA-C03)",
      "Azure AI Apps and Agents Developer Associate (AI-103)",
      "Claude Certified Developer – Foundations (CCDV-F)",
    ],
    learning: "Currently sharpening: AI evaluation and production reliability",
  },
  contact: {
    title: "Contact",
    subtitle: "If you have a project in mind, I'd love to hear about it.",
    ctaLine: "Want to build something clean and delightful?",
    supportLine: "Email is best. I usually respond quickly.",
    email: "johnnieisland.help@gmail.com",
    socials: [
      { label: "GitHub", href: "https://github.com/huyjohnny" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/huyjohnny" },
      { label: "Resume", href: "/resume.pdf" },
    ],
    footerNote: "Thanks for stopping by.",
  },
  footer: {
    note: "Designed and built by Johnny Huynh.",
  },
} as const;
