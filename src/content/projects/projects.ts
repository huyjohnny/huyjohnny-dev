export type Project = {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  bullets: string[];
  stack: string[];
  links: {
    github?: string;
    live?: string;
    liveNote?: string;
    appStore?: string;
    appStoreNote?: string;
  };
  meta?: string;
  coverImage?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "daily-leaf-ios",
    title: "Daily Leaf",
    oneLiner: "A focused iOS app delivering daily motivational quotes and reflections.",
    description:
      "Built a native iOS experience for daily motivation with clean typography, lightweight interactions, and personalized quote discovery.",
    bullets: [
      "Designed a minimal reading-first interface optimized for daily use.",
      "Implemented local persistence for saved quotes and user favorites.",
      "Focused on smooth transitions and accessible text hierarchy.",
    ],
    stack: ["Swift", "SwiftUI", "iOS", "Xcode"],
    links: {
      appStore: "https://apps.apple.com/us/app/daily-leaf/id6445947088",
    },
    meta: "Mobile App",
    coverImage: {
      src: "/images/projects/daily-leaf/dailyleaf_cover.webp",
      alt: "Daily Leaf motivational mobile app preview",
    },
  },
  {
    id: "stocks-platform",
    title: "Stock Portfolio Platform",
    oneLiner: "A full-stack platform to simulate stock portfolios and test investment scenarios.",
    description:
      "Developed a simulation-driven web platform for portfolio tracking, allocation testing, and performance analysis across different market assumptions.",
    bullets: [
      "Built portfolio simulation workflows for buy/sell actions and performance snapshots.",
      "Implemented backend APIs for portfolio calculations and historical data handling.",
      "Integrated persistent storage for user portfolios and uploaded simulation assets.",
    ],
    stack: ["Angular", "Spring Boot", "MySQL", "AWS"],
    links: {
      live: "https://example.com",
      liveNote: "Service down",
    },
    meta: "Full Stack",
    coverImage: {
      src: "/images/projects/stocks-platform/stocks_cover.webp",
      alt: "Stock portfolio platform dashboard preview",
    },
  },
  {
    id: "cloudlodge-hms",
    title: "CloudLodge",
    oneLiner: "A full-stack hospitality platform for account, booking, and payment workflows.",
    description:
      "Built and maintained key account and security workflows for a hotel management platform, including user flows, payment features, and booking support.",
    bullets: [
      "Implemented account management features and role-based user controls.",
      "Worked on security and authentication flows with backend service protections.",
      "Integrated Stripe payment and shopping-cart style booking interactions.",
    ],
    stack: ["React", "Spring Boot", "MongoDB", "AWS"],
    links: {
      live: "https://example.com",
      liveNote: "Service down",
    },
    meta: "Full Stack",
    coverImage: {
      src: "/images/projects/cloudlodge/hotel_cover.webp",
      alt: "CloudLodge hotel management system preview",
    },
  },
];
