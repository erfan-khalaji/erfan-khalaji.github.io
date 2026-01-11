export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const jobs: Job[] = [
  {
    title: "AI & Data Scientist",
    company: "Croptimistic Technology",
    location: "Edmonton, Canada",
    period: "Apr 2024 – Present",
    description: [
      "Led advanced predictive analytics and machine learning initiatives supporting data-driven decision-making in precision agriculture",
      "Designed and deployed production-grade predictive models processing 50M+ records monthly and supporting 288K+ daily inferences",
      "Conducted diagnostic and predictive analyses to identify patterns, trends, and optimization opportunities across large, complex datasets",
      "Partnered with cross-functional stakeholders to translate analytical findings into actionable operational and strategic insights",
      "Implemented scalable analytics pipelines and model lifecycle management using Python, AWS/GCP, Docker, and MLflow",
      "Documented methodologies, assumptions, validation, and testing to support model governance and knowledge reuse",
    ],
  },
  {
    title: "Machine Learning Scientist",
    company: "Alberta Machine Intelligence Institute",
    location: "Edmonton, Canada",
    period: "Sep 2023 – Apr 2024",
    description: [
      "Led predictive modeling and statistical analysis initiatives to support forecasting and operational planning",
      "Developed end-to-end analytical pipelines from problem definition through model deployment and evaluation",
      "Applied feature engineering and advanced regression techniques, achieving 87% R² and RMSE of 3.56",
      "Collaborated with data engineers and business stakeholders to ensure analytics solutions aligned with decision-making needs",
      "Communicated complex model results and assumptions to non-technical audiences",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "Department of Radiology, UofA Hospital",
    location: "Edmonton, Canada",
    period: "Jan 2023 – Sep 2023",
    description: [
      "Applied statistical and machine learning techniques to analyze large-scale medical imaging datasets",
      "Developed and validated predictive computer vision models to support clinical research and data-driven insights",
      "Collaborated with clinicians and researchers to translate analytical outputs into meaningful clinical interpretations",
      "Contributed to data curation, quality assessment, and documentation supporting reproducible analytics workflows",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Science & Analytics",
    icon: "",
    skills: [
      "Predictive Modeling",
      "Statistical Analysis",
      "Feature Engineering",
      "Hypothesis Testing",
      "EDA",
      "Model Validation",
    ],
  },
  {
    name: "Machine Learning",
    icon: "",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "NLP",
      "Model Optimization",
      "Production ML",
      "Computer Vision",
    ],
  },
  {
    name: "Programming",
    icon: "",
    skills: ["Python", "SQL (Advanced)", "R"],
  },
  {
    name: "Cloud & Platforms",
    icon: "",
    skills: ["AWS (S3, EC2)", "GCP", "Data Pipelines", "Large-Scale Datasets"],
  },
  {
    name: "MLOps & Deployment",
    icon: "",
    skills: ["MLflow", "Docker", "CI/CD", "Model Monitoring", "Model Versioning"],
  },
  {
    name: "Visualization & Storytelling",
    icon: "",
    skills: ["Data Visualization", "Executive Reporting", "Stakeholder Communication"],
  },
];

export const projects: Project[] = [
  {
    title: "Precision Agriculture ML Platform",
    description:
      "Production-grade predictive analytics system processing 50M+ records monthly with 288K+ daily inferences. Built with Python, AWS/GCP, Docker, and MLflow.",
    tech: ["Python", "AWS", "GCP", "MLflow", "Docker"],
    icon: "",
  },
  {
    title: "Advanced Regression Models",
    description:
      "Developed end-to-end analytical pipelines achieving 87% R² and RMSE of 3.56 through advanced feature engineering and regression techniques.",
    tech: ["Python", "Feature Engineering", "Statistical Modeling"],
    icon: "",
  },
  {
    title: "Medical Imaging Computer Vision",
    description:
      "Developed and validated predictive computer vision models for large-scale medical imaging datasets to support clinical research and insights.",
    tech: ["Computer Vision", "Deep Learning", "Medical Imaging"],
    icon: "",
  },
];

export const contactInfo = {
  name: "Erfan Khalaji",
  location: "Edmonton, AB, Canada",
  phone: "780-982-2848",
  email: "ekhalaji@gmail.com",
  linkedin: "https://www.linkedin.com/in/erfan-khalaji/",
  github: "https://github.com/erfan-khalaji",
  resume: "/Erfan_Khalaji_Data_Scientist_Resume_BCAA.pdf",
};

export const professionalSummary =
  "Senior Data Scientist with 6+ years of experience leading advanced descriptive, diagnostic, and predictive analytics to support strategic and operational decision-making. Proven expertise in statistical modeling, machine learning, and large-scale data analysis across the full data lifecycle. Highly skilled in Python, cloud-based analytics platforms (AWS, GCP), and production deployment of predictive models. Strong communicator with a track record of translating complex data into clear, actionable insights for technical and non-technical stakeholders.";

export const stats = {
  yearsExperience: "6+",
  recordsProcessed: "50M+",
  dailyInferences: "288K+",
};

