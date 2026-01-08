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
  lookingFor: " Immediate Full-Time Opportunities",
  avatar: "/images/avatar.svg",
  resumeUrl: "https://www.linkedin.com/in/onyi-ugba/",
  skills: [
  "Python",
  "SQL",
  "Apache Airflow",
  "ETL / ELT Pipelines",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "Incremental Loading",
  "Data Modeling",
  "Machine Learning",
  "Time Series Forecasting",
  "Git & GitHub",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Onyi-RICH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/onyi-ugba/" },
    { label: "Email", href: "onyi.ugba@outlook.com" },
  ],
};
