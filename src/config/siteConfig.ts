export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  status?: string;
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
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    description:
      "I'm a data scientist with experience in machine learning, statistics, and experimentation. I focus on building models that ship to production and deliver measurable impact. I love collaborating with product and engineering teams to create data-driven features. My work blends rigorous analysis with practical implementation to drive smarter decisions.",
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
        tags: ["Python", "Airflow", "XGBoost", "Snowflake"],
        githubUrl: "#",
        liveUrl: "#",
        status: "Live Demo"
      },
      {
        id: "personalization-engine",
        title: "Personalization Engine",
        description:
          "Real-time recommendation service that improved CTR and session depth using hybrid collaborative filtering.",
        tags: ["PyTorch", "FastAPI", "Redis", "Docker"],
        githubUrl: "#",
        liveUrl: "#",
        status: "In Progress"
      },
      {
        id: "anomaly-hub",
        title: "Anomaly Detection Hub",
        description:
          "Self-serve dashboard for anomaly detection that flags data quality issues and unusual KPIs.",
        tags: ["React", "TypeScript", "Postgres", "Supabase"],
        githubUrl: "#",
        liveUrl: "#"
      },
      {
        id: "nlp-feedback",
        title: "NLP Feedback Miner",
        description:
          "Topic modeling and sentiment pipeline that clusters user feedback into actionable product insights.",
        tags: ["Python", "spaCy", "GCP", "BigQuery"],
        githubUrl: "#",
        liveUrl: "#"
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
