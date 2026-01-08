export type CvArticle = {
  title: string;      // Job title or role
  org?: string;       // Company / institution
  location?: string; // City / Remote
  period?: string;   // Dates
  bullets: string[]; // What you did
  tags?: string[];   // Skills shown as chips
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Data Science/Engineer Intern',
    org: 'Webeet.io',
    location: 'Berlin (Remote)',
    period: 'Oct 2025 – Present',
    bullets: [
      'Built production-grade, Dockerized Apache Airflow ETL pipelines ingesting complex GitHub API data (issues, comments, timelines) using Python and PostgreSQL',
      'Reduced API overhead by 40% through incremental loading strategies and watermarking, enabling idempotent pipeline re-runs',
      'Improved system reliability with Airflow Secrets Management, structured logging, SLAs, automated retries, and in-memory caching',
      'Achieved 99%+ pipeline uptime while maintaining GitHub API rate-limit compliance through optimized request strategies',
      'Modeled deeply nested API responses into analytical schemas supporting historical event tracking and reproducible analytics',
      'Engineered geospatial data pipelines extracting 150+ Berlin library records from OpenStreetMap using Python and GeoPandas',
      'Improved data completeness from 60% to 95% via automated address enrichment using the Nominatim API with rate limiting',
      'Designed PostgreSQL schemas with constraints and validation workflows to ensure spatial data integrity',
      'Developed multi-stage ETL pipelines for NYC education datasets, delivering insights on school safety and SAT performance trends',
    ],
    tags: [
      'Python',
      'Apache Airflow',
      'ETL / ELT',
      'Incremental Loading',
      'PostgreSQL',
      'Docker',
      'REST APIs',
      'GeoPandas',
      'Data Modeling',
    ],
    type: 'work',
  },

  {
    title: 'Financial Officer',
    org: 'Post-Graduate Fellowship, Nsukka',
    location: 'Nigeria',
    period: 'Jul 2017 – Jul 2018',
    bullets: [
      ' Built structured data tracking systems for departmental financial records exceeding ₦500K per quarter',
      'Implemented standardized data entry and validation processes improving data consistency',
    ],
    tags: ['Data Management', 'Data Validation', 'Reporting', 'Process Optimization'],
    type: 'work',
  },

  {
    title: 'Data Assistant',
    org: 'Ikenne Local Government Area',
    location: 'Nigeria',
    period: 'Jun 2015 – May 2016',
    bullets: [
      'Processed and validated 5,000+ municipal records using systematic quality control checks',
      'Created standardized data templates to support monthly and quarterly reports, reducing reporting errors by 15%',
    ],
    tags: ['Data Quality', 'Data Processing', 'Reporting', 'Data Organization'],
    type: 'work',
  },

  {
    title: 'Machine Learning (Data Science)',
    org: 'Masterschool Berlin',
    location: 'Remote',
    period: 'Jul 2025 – Aug 2025',
    bullets: [
      'Developed a retail demand forecasting solution using XGBoost and 3+ years of historical sales data',
      'Engineered time-based features including seasonality, holidays, day-of-week, and lag variables',
      'Evaluated model performance using time-series validation strategies',
      'Delivered an end-to-end forecasting pipeline supporting inventory and promotion planning',
    ],
    tags: [
      'Machine Learning',
      'Time Series Forecasting',
      'XGBoost',
      'Python',
      'Feature Engineering',
    ],
    type: 'education',
  },
];



