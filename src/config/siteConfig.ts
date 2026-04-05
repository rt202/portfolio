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
      "Portfolio for Ronak Thakker featuring ML Prep, Project Darkrai, and predictive modeling work in fantasy basketball.",
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
    profileImage: "/images/headshot-2023.jpg",
    description:
      "I'm a production-minded data scientist with a broad scope of skills, ranging from database work, machine learning, llm development, and operations. Outside of my work, I am currently working on a few projects: Creating a local LLM, hosting a website to help others with their coding skills, and in-depth analysis of basketball players. My knowledge on operations allows me to be production-minded and sets me apart as a data scientist that can build projects fully end-to-end.",
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
      "A selection of applied ML products and experiments across interview prep, self-hosted local AI systems, and sports analytics.",
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
        imageUrl: "/images/mlprep-homepage.png"
      },
      {
        id: "project-darkrai",
        title: "Project Darkrai",
        description:
          "My local LLM build focused on creating and hosting my own model on my computer, with an end-to-end workflow for experimentation, inference, and self-managed deployment.",
        tags: ["Local LLM", "Self-Hosted AI", "Inference", "Experimentation"],
        githubUrl: "#",
        liveUrl: "#demos",
        status: "In Progress",
        imageUrl: "/images/project-darkrai-logo.png"
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
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
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
