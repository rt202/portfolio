export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  status?: string;
  imageUrl: string;
};

export const siteConfig = {
  siteUrl: "https://ronak.mlprep.org",
  seo: {
    title: "Ronak Thakker | Data Scientist and ML Builder",
    description:
      "Portfolio for Ronak Thakker featuring ML Prep, local multi-model LLM experiments, and predictive modeling work in fantasy basketball.",
    ogImagePath: "/og-preview.svg"
  },
  links: {
    mlPrepUrl: "https://mlprep.org"
  },
  name: "Ronak Thakker",
  title: "Data Scientist and ML Builder",
  tagline:
    "I build production-minded ML products, local LLM workflows, and decision systems that make model outputs useful in the real world.",
  hero: {
    intro: "Hi, I'm",
    subtitle: "Data Scientist | Applied ML | Local AI Systems",
    resumeUrl: ""
  },
  about: {
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description:
      "I focus on building machine learning systems that are practical to ship and easy to reason about. My recent work spans interview prep products, local multi-model LLM experiments, and predictive modeling projects where the interface matters just as much as the model.",
    skills: [
      "Python",
      "Machine Learning",
      "LLM Evaluation",
      "Prompt Routing",
      "SQL",
      "React",
      "Vite",
      "Supabase",
      "Vercel",
      "Feature Engineering",
      "Forecasting"
    ]
  },
  projects: {
    intro:
      "A selection of applied ML products and experiments across interview prep, local LLM systems, and sports analytics.",
    featuredProjectId: "ml-prep",
    items: [
      {
        id: "ml-prep",
        title: "ML Prep",
        description:
          "Interview prep platform with structured learning paths, API-backed progress tracking, and production deployment across Vercel services.",
        tags: ["React", "Vite", "Vercel", "Supabase"],
        githubUrl: "#",
        liveUrl: "https://mlprep.org",
        status: "Live",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "local-llm-router",
        title: "Local Multi-Model LLM Router",
        description:
          "Local workstation setup that routes prompts across Bonsai, Gemma, and Qwen depending on task fit, quality, and latency tradeoffs.",
        tags: ["Local LLM", "Gemma", "Qwen", "Evaluation"],
        githubUrl: "#",
        liveUrl: "#demos",
        status: "In Progress",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fantasy-basketball",
        title: "Fantasy Basketball Prediction Engine",
        description:
          "Prediction workflow for fantasy basketball projections with feature-driven estimates, scenario analysis, and lightweight front-end explainability.",
        tags: ["Forecasting", "Sports Analytics", "Feature Engineering"],
        githubUrl: "#",
        liveUrl: "#demos",
        status: "Prototype",
        imageUrl:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
      }
    ] as Project[]
  },
  contact: {
    heading: "Get in Touch",
    message:
      "Open to data science roles, ML collaborations, and analytics consulting. Let's build something impactful.",
    email: "rthakk@outlook.com",
    linkedinUrl: "https://www.linkedin.com/in/rothakker/",
    githubUrl: "https://github.com/rt202"
  },
  socials: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub"
  }
};
