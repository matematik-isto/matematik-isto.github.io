export type Project = {
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  technologies: string[];
  github: string;
  demo: string;
};

export type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

export const projects: Project[] = [
  {
    title: "Predicción de Churn de Clientes",
    description:
      "Modelo de machine learning para anticipar qué clientes cancelarían su suscripción, permitiendo retención proactiva y campañas focalizadas.",
    metricLabel: "Precisión",
    metricValue: "94%",
    technologies: ["Python", "Scikit-learn", "SQL"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Chicago Taxis: Clima y Demanda",
    description:
      "Análisis de registros de viajes en taxi de Chicago combinando datos de una API y consultas SQL para determinar si las condiciones climáticas impactan el uso de taxis.",
    metricLabel: "Fuentes de datos integradas",
    metricValue: "API + SQL",
    technologies: ["Python", "SQL", "Jupyter"],
    github: "https://github.com/matematik-isto/chicago_taxis_project",
    demo: "#",
  },
  {
    title: "Segmentación de Clientes con K-Means",
    description:
      "Agrupación no supervisada de clientes por comportamiento de compra para personalizar ofertas y optimizar el ROI de marketing.",
    metricLabel: "ROI de campaña",
    metricValue: "+32%",
    technologies: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/",
    demo: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "TensorFlow", level: 70 },
    ],
  },
  {
    title: "Visualización",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Matplotlib", level: 88 },
    ],
  },
];

export const profile = {
  name: "Ramón Correa Ramírez",
  role: "Científico de Datos",
  bio: "Transformo datos en decisiones. Diseño modelos predictivos y dashboards que ayudan a equipos a entender su negocio y actuar con confianza.",
  links: {
    github: "https://github.com/matematik-isto",
    linkedin: "https://www.linkedin.com/in/ram%C3%B3n-correa/",
  },
};
