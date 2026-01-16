export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
   {
    title: "Insurance RAG Engine",
    description:
      "Designed and built a production-grade Retrieval-Augmented Generation (RAG) system for insurance/ legal policy analysis using Google Gemini, LangChain, and ChromaDB. Implemented a PDF ingestion and chunking pipeline that transforms insurance documents into a searchable vector database. Enabled hallucination-free, explainable AI responses by returning the exact policy text snippets used for each answer. Developed an interactive Streamlit UI supporting document upload, natural language queries, and source-grounded outputs.",
    tags: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Google Gemini",
      "LangChain",
      "ChromaDB",
      "Vector Databases",
      "LLMs",
      "Streamlit",
      "PDF Processing",
      "Explainable AI",
    ],
    repo: "https://github.com/Onyi-RICH/PolicyAudit-rag-engine",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "GitHub Issues ETL Pipeline",
    description:
      "Built a Dockerized Apache Airflow ETL pipeline to ingest and process nested GitHub API data. Reduced processing overhead by 40% using incremental loading and watermarking. Ensured 99%+ pipeline reliability through structured logging, automated retries, and Airflow Secrets Management. Modeled complex JSON responses into an analytical schema supporting historical event tracking and idempotent loads.",
    tags: ["Python", "Apache Airflow", "ETL / ELT", "Incremental Loading", "REST APIs", "PostgreSQL", "Docker", "Structured Logging",],
    repo: "https://github.com/Onyi-RICH/github-issues-airflow-etl",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "Berlin Library Geospatial Data Pipeline",
    description:
      "Engineered a Python and GeoPandas data pipeline extracting 150+ geospatial records from OpenStreetMap. Improved dataset completeness from 60% to 95% through automated address enrichment using the Nominatim API. Enforced 100% coordinate accuracy with validation scripts and PostgreSQL constraints to ensure spatial data integrity.",
    tags: [
      "Python",
      "GeoPandas",
      "Geospatial Data",
      "API Integration",
      "PostgreSQL",
      "Data Validation",
      "OpenStreetMap",
    ],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/Onyi-RICH/OSM-berlin-poi-libraries-pipeline",
  },

  {
    title: "NYC Education Data ETL & Analytics Pipeline",
    description:
      "Developed a multi-stage ETL pipeline processing 4+ public education datasets using Python and PostgreSQL. Designed custom validation schemas and optimized analytical data models. Delivered actionable insights on school safety trends and SAT performance patterns through structured, analysis-ready tables.",
    tags: [
      "Python",
      "PostgreSQL",
      "ETL Pipelines",
      "Data Modeling",
      "Data Validation",
      "Analytics",
    ],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/Onyi-RICH/nyc-schools-analysis",
  },

  {
    title: "Retail Demand Forecasting Application",
    description:
      "Built a demand forecasting solution to predict daily unit sales per store-item-date for a large Ecuadorian grocery retailer. Trained time-series and machine learning models and deployed an interactive Streamlit application to support inventory planning and promotion decisions.",
    tags: [
      "Python",
      "Machine Learning",
      "Time Series Forecasting",
      "Scikit-learn",
      "Streamlit",
      "Demand Forecasting",
    ],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/Onyi-RICH/retail-demand-forcasting",
  },
];
