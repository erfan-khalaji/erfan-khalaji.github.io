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
      "Lead Development of large-scale multi-modal machine learning systems for precision agriculture applications",
      "Productionized end-to-end ML pipelines processing 50M+ images monthly, supporting 288K+ daily inferences",
      "Achieved 91–93% precision across various multi-modal ML tasks through systematic experimentation and optimization",
      "Implemented scalable, cloud-native MLOps workflows using Python, PyTorch, Docker, MLflow, and AWS/GCP, following industry-standard practices for model versioning, deployment, and monitoring",
      "Collaborated with cross-functional teams to translate complex multimodal data into actionable insights",
    ],
  },
  {
    title: "Machine Learning Scientist",
    company: "Alberta Machine Intelligence Institute",
    location: "Edmonton, Canada",
    period: "Sep 2023 – Apr 2024",
    description: [
      "Developed object density estimation models to support data-driven decision-making and forecasting",
      "Built end-to-end proof-of-concept pipelines and transitioned models into production-ready systems",
      "Collaborated with cross-functional teams across data engineering, modeling, and deployment workflows",
      "Achieved 87% R² and RMSE of 3.56 through model optimization and feature engineering",
      "Enabled new data-driven revenue opportunities and improved operational forecasting capabilities",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "Department of Radiology, UofA Hospital",
    location: "Edmonton, Canada",
    period: "Jan 2023 – Sep 2023",
    description: [
      "Adapted and applied deep learning models for upper airway and adenoid segmentation in medical imaging data",
      "Developed and evaluated computer vision pipelines for anatomical structure segmentation in clinical datasets",
      "Collaborated with cross-disciplinary clinical teams to align model development with medical requirements",
      "Contributed to the annotation and curation of large-scale medical image datasets for supervised ML workflows",
    ],
  },
  {
    title: "Data Scientist",
    company: "Journey Education",
    location: "Edmonton, Canada",
    period: "Jan 2022 – Jan 2023",
    description: [
      "Led data collection, preprocessing, and QA workflows, including outlier detection and data validation",
      "Developed sentiment analysis pipelines to extract actionable insights from customer feedback",
      "Applied natural language processing techniques to support product and user-experience decision-making",
      "Delivered live coding sessions and technical workshops to communicate practical ML workflows",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming & GPU Computing",
    icon: "",
    skills: ["Python", "SQL", "C++", "CUDA"],
  },
  {
    name: "MLOps & Cloud",
    icon: "",
    skills: ["Docker", "Airflow", "MLflow", "Kubeflow", "CI/CD", "AWS", "GCP", "Azure", "Git"],
  },
  {
    name: "Natural Language Processing",
    icon: "",
    skills: ["Text Processing", "Embeddings", "Transformer Models", "LLMs"],
  },
  {
    name: "Computer Vision",
    icon: "",
    skills: ["Object Detection", "Image Segmentation", "Image Classification", "VLMs"],
  },
  {
    name: "Data Science & Analytics",
    icon: "",
    skills: ["Data Wrangling", "Data Visualization", "Statistical Modeling", "Feature Engineering"],
  },
  {
    name: "ML Libraries & Frameworks",
    icon: "",
    skills: ["PyTorch", "TensorFlow", "NumPy", "SciPy", "scikit-learn", "OpenAI Gym (RL)", "LangChain"],
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

// Helper functions to mask sensitive information
export function maskPhone(phone: string): string {
  // Format: 780-***-2848
  const parts = phone.split('-');
  if (parts.length === 3) {
    return `${parts[0]}-***-${parts[2]}`;
  }
  return phone.replace(/\d{3}-\d{3}/, '***-***');
}

export function maskEmail(email: string): string {
  // Format: ekhal***@gmail.com
  const [localPart, domain] = email.split('@');
  if (localPart.length > 4) {
    const visible = localPart.substring(0, 4);
    return `${visible}***@${domain}`;
  }
  return `***@${domain}`;
}

export const professionalSummary =
  "Applied AI Scientist with 7+ years of experience designing, optimizing, and deploying production-grade machine learning systems, including Vision-Language Models (VLMs), Large Language Models (LLMs), and Reinforcement Learning from Human Feedback (RLHF). Strong expertise in Python and cloud platforms (AWS, GCP), with a focus on building trustworthy AI solutions that convert complex multimodal data into actionable insights across agriculture and biomedicine.";

export const experienceBreakdown = {
  total: "7+",
  industry: "4+",
  academia: "3",
};

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
}

export const education: Education = {
  degree: "MSc in Computing Science",
  institution: "University of Alberta",
  location: "Edmonton, AB, Canada",
  gpa: "3.9 / 4.0",
};

export const personalInterests = {
  hobbies: ["Photography", "Chess", "Basketball", "Birdwatching", "Hiking"],
  mission: "I love AI as a way of impacting future generations, helping vulnerable groups like animals and the planet, doing high impact work. I'm that kind of person."
};

