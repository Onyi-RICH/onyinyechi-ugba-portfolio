export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Onyinyechi C. Ugba",
  role: "Data Science & Data Engineering Intern",
  summary:
    "Data professional with 6+ years of experience across financial data management, analytics, and business intelligence. Skilled in building end-to-end data pipelines, machine learning models, and analytics solutions that improve data quality, operational efficiency, and decision-making. I enjoy working at the intersection of data, business, and engineering to turn complex information into actionable insights.",

  location: "Göttingen, Germany",
  email: "onyi.ugba@outlook.com",
  lookingFor: " Immediate Full-Time Opportunities (Data Science, Data Engineering)",
  avatar: "/images/avatar.svg",
  resumeUrl: "https://www.linkedin.com/in/onyi-ugba/",
  skills: [
   // Core Languages & Scripting
  "Python (Pandas, SQLAlchemy, GeoPandas, Scikit-learn)",
  "SQL",
  "Bash / Shell Scripting",

  // Data Engineering & Pipelines
  "ETL / ELT Pipelines",
  "Incremental Loading",
  "Apache Airflow",
  "Workflow Orchestration",
  "Data Quality & Validation",

  // Databases & Data Modeling
  "PostgreSQL",
  "Database Design",
  "Schema Modeling",
  "Data Constraints",
  "SQL Performance Optimization",

  // APIs & Data Integration
  "REST APIs",
  "API Integration",
  "Rate Limiting",
  "Geocoding APIs (Nominatim)",

  // DevOps & Infrastructure
  "Docker",
  "Containerized Data Services",
  "Secrets Management",
  "Structured Logging",

  // Version Control & CI/CD
  "Git",
  "GitHub",
  "GitHub Actions",
  "CI/CD Pipelines",

  // Analytics & Machine Learning
  "Statistical Analysis",
  "Predictive Modeling",
  "Scikit-learn",
  "Applied Machine Learning",
  "Experimental Design",
  "Model Evaluation & Validation",

  // Engineering Practices
  "Reproducible Data Workflows",
  "Documentation & Data Lineage",
  "Monitoring & Debugging",

  // Collaboration & Professional Skills
  "Pragmatic Problem Solving",
  "Critical Thinking & Troubleshooting",
  "Cross-Functional Collaboration",
  "Technical Documentation",
  "Attention to Detail",
  "Stakeholder Communication",
  "Decision Support Analytics",
  "Continuous Learning & Growth Mindset"
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Onyi-RICH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/onyi-ugba/" },
    { label: "Email", href: "onyi.ugba@outlook.com" },
  ],
};
