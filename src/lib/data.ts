export const profile = {
  name: 'Erfan Khalaji',
  title: 'AI Scientist',
  location: 'Edmonton, AB · Canada',
  email: 'ekhalaji@gmail.com',
  linkedin: 'https://www.linkedin.com/in/erfan-khalaji',
  github: 'https://github.com/erfan-khalaji',
  tagline:
    'AI Scientist shipping production-scale generative AI, computer vision, and NLP — where research rigor and real-world impact both matter.',
  summary:
    "AI Scientist with 7+ years of experience researching, architecting, and deploying large-scale ML systems across generative AI, computer vision, and NLP. Production deployments and research span agriculture, healthcare, and human-computer interaction for accessibility, applying ML to problems where research rigor and real-world impact both matter. Track record includes shipping a 2026 U.S. patent-awarded AI product operating at 1.5M+ acres and 50M+ inferences/month, peer-reviewed publications, and a Google Scholarship for Web Accessibility (W4A 2021) for ML research advancing accessibility for users on the autism spectrum.",
}

export const heroStats = [
  { value: '7+', label: 'Years in ML', sub: 'Research → production' },
  { value: '1.5M+', label: 'Acres deployed', sub: 'SWAT CAM in field' },
  { value: '50M+', label: 'Inferences / month', sub: 'Live production scale' },
  { value: '2026', label: 'U.S. patent', sub: 'Image-to-agronomy AI' },
] as const

export const focusAreas = [
  'Generative AI',
  'Computer Vision',
  'Natural Language Processing',
  'MLOps & Production ML',
  'Multimodal RAG',
  'RLHF / DPO / KTO',
] as const

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Artificial Intelligence Scientist',
    company: 'Croptimistic Technology',
    location: 'Edmonton, Canada',
    period: 'Apr 2024 — Present',
    current: true,
    highlights: [
      "Directed end-to-end research, development, evaluation, and production deployment of large-scale ML pipelines powering SWAT CAM (Croptimistic's flagship AI product), recognized by a 2026 U.S. patent for its image-to-agronomic-data process and scaled past 1.5M+ acres of commercial deployment across western Canada.",
      "Designed and trained SWAT CAM's core computer vision models, achieving 92% IoU on semantic segmentation of crop and weed classes, 96% IoU on row detection, and 93.5% R² on crop establishment variance regression, achieved through crop-adaptive architectures and fine-tuning strategies tuned to varying field conditions and crop types.",
      'Built a learning-to-rank recommender that helps agronomists select optimal management-zone maps for crop fields, processing large-scale Sentinel-2 satellite imagery and topographic data through extensive feature engineering. The top-ranked recommendation matches subject-matter-expert selections 76% of the time.',
      'Designed and shipped a multimodal RAG system over SWAT CAM outputs, combining LLM-based retrieval over tabular model results with VLM-based semantic search across millions of field images, giving agronomy subject matter experts a natural-language interface to query, compare, and triage field-level results.',
      "Built the platform's MLOps backbone: feature store, experiment tracking, automated training pipelines, CI/CD-based model deployment, and production monitoring with feature drift and performance regression detection, turning ad-hoc model iteration into a repeatable, auditable release process.",
    ],
  },
  {
    role: 'Machine Learning Resident',
    company: 'Alberta Machine Intelligence Institute',
    location: 'Edmonton, Canada',
    period: 'Sep 2023 — Apr 2024',
    highlights: [
      'Led applied AI research and end-to-end development for plant counting in densely-populated crop fields (a domain where individual plants are visually inseparable), taking the project from extensive literature review through rapid prototyping to first production release, achieving 87% R² on plant-density estimation from remote-sensing imagery.',
      'Owned the full experimentation pipeline: feature extraction, correlation and dimensionality analysis, architecture exploration, systematic ablation studies, and ML performance optimization, anchoring every architectural decision in measurable evidence and translating raw remote-sensing imagery into a deployable model.',
      'Led a cross-functional team of ML scientists, engineers, and agronomy stakeholders, driving stakeholder alignment meetings and operating a fast-prototyping discipline that enabled rapid pivots when hypotheses underperformed, compressing typical research-to-production cycles.',
    ],
  },
  {
    role: 'Machine Learning Researcher',
    company: 'Department of Radiology, UofA Hospital',
    location: 'Edmonton, Canada',
    period: 'Sep 2022 — Sep 2023',
    highlights: [
      'Developed and deployed an end-to-end 3D volumetric segmentation pipeline using nnUNet for upper airway and adenoid structures in CT scans (~500 scans); supervised clinical annotation workflows with radiologists to ensure label quality and clinical alignment.',
      'Built a gradient boosting classifier on extracted 3D geometric features to grade anatomical severity and recommend surgical intervention, delivered as a production clinical decision support tool achieving 78% IoU and 72% Dice score on segmentation.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Journey Education',
    location: 'Edmonton, Canada',
    period: 'Jan 2022 — Sep 2022',
    highlights: [
      'Built NLP and behavioral analytics pipelines combining BERT-based sentiment analysis with HCI signals (typing latency, time-on-page, interaction sequences) to surface UX friction patterns, turning qualitative feedback into structured, comparable metrics that drove product and UI/UX decisions.',
    ],
  },
  {
    role: 'Machine Learning Researcher',
    company: 'METU',
    location: 'Cyprus',
    period: 'Oct 2018 — Jan 2022',
    highlights: [
      'Researched and designed an end-to-end ML pipeline for autism detection integrating time-series eye-tracking data from web-based sessions, achieving 91.6% F1-score in classifying adults with high-functioning autism; work published in peer-reviewed journals.',
      'Awarded the Google Scholarship for Web Accessibility at the W4A (Web for All) Conference, 2021, recognizing ML research advancing web accessibility for users on the autism spectrum.',
    ],
  },
]

export type Project = {
  title: string
  subtitle: string
  period: string
  status: 'Ongoing' | 'In Testing' | 'Shipped'
  description: string
  highlights: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Adaptive AI Broadcasting Platform',
    subtitle: 'Multilingual content generation with RLHF-based voice learning',
    period: '2026 — Ongoing',
    status: 'Ongoing',
    description:
      "A GenAI content-creation engine that turns creator text into branded multi-format content across Persian and English, learning each creator's voice over time through online preference learning.",
    highlights: [
      'Architecting agentic workflows with RAG-based brand and reference retrieval over creator assets.',
      'Continuously generating labeled preference pairs from product usage to fine-tune per-creator "voice models" via PPO, DPO, and KTO.',
      'AI analytics layer over post-performance KPIs that recommends content formats with LLM-generated, data-grounded rationale — and conversational follow-up so creators can interrogate, challenge, and refine guidance.',
    ],
    tags: ['Agentic AI', 'RAG', 'RLHF', 'PPO / DPO / KTO', 'Multilingual', 'Analytics'],
  },
  {
    title: 'Mental Health Tracker',
    subtitle: 'Local-first agentic AI for CBT support',
    period: '2025 — In Testing',
    status: 'In Testing',
    description:
      'A local-first agentic AI system that conducts CBT-aligned therapeutic conversations, with longitudinal mood tracking, safety guardrails, and evaluation pipelines keeping outputs clinically grounded.',
    highlights: [
      'RAG over evidence-based clinical content with safety guardrails and evaluation pipelines for clinically grounded, emotionally appropriate output.',
      "Longitudinal mood and emotional-state tracker that builds per-user history across sessions, detecting mood drift and tailoring each session's focus.",
      'Fine-tuned Qwen and LLaMA 3.2 with QLoRA on CBT dialogue datasets; containerized training and inference with full MLOps practices.',
    ],
    tags: ['Agentic AI', 'QLoRA', 'Qwen', 'LLaMA 3.2', 'Local-First', 'Guardrails', 'CBT'],
  },
]

export type Publication = {
  authors: string
  year: string
  title: string
  venue: string
}

export const publications: Publication[] = [
  {
    authors: 'Khalaji, E. et al.',
    year: '2023',
    title: 'Effects of data preprocessing on detecting autism using web-based eye-tracking',
    venue: 'Behaviour & Information Technology',
  },
  {
    authors: 'Qadir, Z., Khalaji, E. et al.',
    year: '2021',
    title: 'Predicting energy output of hybrid PV–wind systems using feature selection',
    venue: 'Energy Reports',
  },
  {
    authors: 'Rashid, H., Khalaji, E. et al.',
    year: '2020',
    title: 'Fault prediction of wind turbine gearbox based on SCADA data and ML',
    venue: 'ACIT Conference',
  },
]

export type SkillGroup = {
  category: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Generative AI',
    description: 'Frameworks and tooling for building production LLM systems.',
    items: [
      'LangChain',
      'LlamaIndex',
      'Hugging Face (PEFT, TRL)',
      'Ollama',
      'FAISS',
      'Chroma',
      'sentence-transformers',
      'CLIP',
      'DeepEval',
    ],
  },
  {
    category: 'ML Libraries & Frameworks',
    description: 'Core stack for model development and experimentation.',
    items: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-Learn', 'NumPy', 'SciPy', 'Hugging Face', 'Keras'],
  },
  {
    category: 'Natural Language Processing',
    description: 'Transformer-based language and retrieval systems.',
    items: ['Transformer models', 'Embeddings', 'Text processing', 'Information retrieval'],
  },
  {
    category: 'Computer Vision',
    description: 'From classical CV to modern segmentation pipelines.',
    items: ['Object detection', 'Image segmentation', '3D volumetric segmentation'],
  },
  {
    category: 'MLOps & Cloud',
    description: 'Shipping models to production and keeping them healthy.',
    items: ['Docker', 'Kubernetes', 'Airflow', 'MLflow', 'CI/CD', 'AWS', 'GCP', 'Azure'],
  },
  {
    category: 'Programming & Engineering',
    description: 'Languages and engineering tools.',
    items: ['Python', 'C++', 'SQL', 'FastAPI', 'Git', 'CUDA'],
  },
]

export const education = [
  {
    degree: 'MSc in Computing Science',
    institution: 'University of Alberta',
    location: 'Edmonton, Canada',
    detail: 'GPA: 3.9 / 4.0',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const
