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
    id: "waste-identification-system",
    title: "Waste Identification System",
    oneLiner: "An agentic AI copilot for traceable, citation-grounded RCRA waste determinations.",
    description:
      "Built an AI-assisted compliance platform that turns multimodal regulatory sources into traceable waste determinations, with citation validation, persistent audit trails, and human review built into the workflow.",
    bullets: [
      "Built multimodal RAG ingestion pipelines across 10+ file formats, processing six regulatory documents totaling 91 pages into normalized, citation-grounded context.",
      "Architected an 11-table PostgreSQL data layer for compliance dossiers, audit trails, and review queues, keeping AI-assisted determinations traceable.",
      "Implemented citation validation, readiness checks, escalation logic, and human-review guardrails to prevent unsupported compliance determinations.",
      "Deployed the containerized platform across 8+ Azure resources using Docker and GitHub Actions.",
    ],
    stack: ["Microsoft Agent Framework", "Azure", "FastAPI", "PostgreSQL"],
    links: {},
    meta: "Agentic AI",
    coverImage: {
      src: "/images/projects/waste-identification-system/waste_cover.webp",
      alt: "Rows of blue industrial material drums in a warehouse",
    },
  },
];
