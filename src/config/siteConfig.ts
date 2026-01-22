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
  name: "YOUR NAME",
  title: "Data Scientist",
  tagline:
    "I turn messy data into clear insights and deployable machine learning systems.",
  hero: {
    intro: "Hi, I'm",
    subtitle: "Data Scientist | Machine Learning | Analytics",
    resumeUrl: "#"
  },
  about: {
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    skills: [
      "Python",
      "pandas",
      "scikit-learn",
      "SQL",
      "AWS",
      "PyTorch",
      "Feature Engineering",
      "Experimentation"
    ]
  },
  projects: {
    intro:
      "A selection of machine learning and data products I've built across forecasting, personalization, and analytics automation.",
    featuredProjectId: "forecasting-ops",
    items: [
      {
        id: "forecasting-ops",
        title: "Demand Forecasting Ops",
        description:
          "End-to-end forecasting pipeline with automated retraining, monitoring, and alerting for supply chain planning.",
        tags: ["Python", "Airflow", "XGBoost"],
        githubUrl: "#",
        liveUrl: "#",
        status: "Live Demo",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "personalization-engine",
        title: "Personalization Engine",
        description:
          "Real-time recommendation service that improved CTR using hybrid collaborative filtering.",
        tags: ["PyTorch", "FastAPI", "Redis"],
        githubUrl: "#",
        liveUrl: "#",
        status: "In Progress",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "anomaly-hub",
        title: "Anomaly Detection Hub",
        description:
          "Self-serve dashboard for anomaly detection that flags data quality issues and unusual KPIs.",
        tags: ["React", "TypeScript", "Postgres"],
        githubUrl: "#",
        liveUrl: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
      }
    ] as Project[]
  },
  contact: {
    heading: "Get in Touch",
    message:
      "Open to data science roles, ML collaborations, and analytics consulting. Let's build something impactful.",
    email: "hello@example.com",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/"
  },
  socials: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub"
  }
};
