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
    "DataData and AI professional with 6+ years of experience delivering analytics, data engineering, and machine learning solutions across financial and business domains. Experienced in building production-grade data pipelines, Retrieval-Augmented Generation (RAG) systems, and ML models that improve data quality, operational efficiency, and decision-making. Strong at bridging data, engineering, and business requirements to transform complex information into scalable, actionable insights.",

  location: "Göttingen, Germany",
  email: "onyi.ugba@outlook.com",
  lookingFor: " Immediate Full-Time Opportunities",
  avatar: "/images/avatar2.jpg",                   // Change .svg to .jpeg
  resumeUrl: "https://www.linkedin.com/in/onyi-ugba/",
  skills: [
  "Python",
  "SQL",
  "Apache Airflow",
  "ETL / ELT Pipelines",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "Incremental & Idempotent Loading",
  "Data Modeling",
  "Machine Learning",
  "Time Series Forecasting",
  "Retrieval-Augmented Generation (RAG)",
  "LLMs (Google Gemini, LangChain)",
  "Vector Databases (ChromaDB)"
  "Git & GitHub",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Onyi-RICH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/onyi-ugba/" },
    { label: "Email", href: "onyi.ugba@outlook.com" },
  ],
};
