import dashboardExec from "@/assets/marketing-dashboard-executive-summary.png.asset.json";
import dashboardModel from "@/assets/marketing-dashboard-semantic-model.png.asset.json";
import dashboardDb from "@/assets/marketing-dashboard-database.png.asset.json";

export type Project = {
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  technologies: string[];
  github: string;
  demo: string;
  demoGallery?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

export type Language = "es" | "en";

export type DemoImage = { src: string; caption: string };

export type PortfolioCopy = {
  nav: { home: string; projects: string; skills: string; contact: string };
  role: string;
  bio: string;
  banner: string;
  heroProjects: string;
  heroContact: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsIntro: string;
  github: string;
  demo: string;
  skillsEyebrow: string;
  skillsTitle: string;
  skillsIntro: string;
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  send: string;
  sent: string;
  findMe: string;
  rights: string;
};

export const projectsByLanguage: Record<Language, Project[]> = {
  es: [
  {
    title: "Predicción de Churn de Clientes",
    description:
      "Modelo de machine learning para anticipar qué clientes cancelarían su suscripción, permitiendo retención proactiva y campañas focalizadas.",
    metricLabel: "Precisión",
    metricValue: "94%",
    technologies: ["Python", "Scikit-learn", "SQL"],
    github: "https://github.com/",
    demo: "https://concrete-breakfast-589.notion.site/Predicci-n-de-churn-de-clientes-3dd0287441db80bfae21c9e11e6c4132",
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
    title: "Planes de Telefonía: Análisis de Rentabilidad",
    description:
      "Análisis de los planes Surf y Ultimate de Megaline con datos de 500 clientes (llamadas, mensajes e internet) para determinar qué plan genera más ingresos y ajustar el presupuesto de publicidad.",
    metricLabel: "Clientes analizados",
    metricValue: "500",
    technologies: ["Python", "Pandas", "Seaborn"],
    github: "https://github.com/matematik-isto/cellphone_plans_project",
    demo: "#",
  },
  {
    title: "Dashboard de Marketing en Power BI",
    description:
      "Dashboard de Power BI para una empresa de marketing digital: selección de trimestre, tarjetas de KPI con su variación respecto al trimestre anterior, gráfica de gastos anuales y tablas de desempeño de canales y campañas. Los datos se almacenan en una base de datos PostgreSQL.",
    metricLabel: "KPIs por trimestre",
    metricValue: "8",
    technologies: ["Power BI", "PostgreSQL", "SQL", "DAX"],
    github: "https://github.com/matematik-isto/marketing_dashboard",
    demo: "#",
    demoGallery: true,
  },
  ],
  en: [
    {
      title: "Customer Churn Prediction",
      description:
        "Machine learning model designed to predict which customers would cancel their subscription, enabling proactive retention and targeted campaigns.",
      metricLabel: "Accuracy",
      metricValue: "94%",
      technologies: ["Python", "Scikit-learn", "SQL"],
      github: "https://github.com/",
      demo: "https://concrete-breakfast-589.notion.site/Predicci-n-de-churn-de-clientes-3dd0287441db80bfae21c9e11e6c4132",
    },
    {
      title: "Chicago Taxis: Weather and Demand",
      description:
        "Analysis of Chicago taxi trip records combining API data and SQL queries to determine whether weather conditions affect taxi usage.",
      metricLabel: "Integrated data sources",
      metricValue: "API + SQL",
      technologies: ["Python", "SQL", "Jupyter"],
      github: "https://github.com/matematik-isto/chicago_taxis_project",
      demo: "#",
    },
    {
      title: "Mobile Plans: Profitability Analysis",
      description:
        "Analysis of Megaline's Surf and Ultimate plans using data from 500 customers—calls, messages, and internet usage—to identify the most profitable plan and optimize the advertising budget.",
      metricLabel: "Customers analyzed",
      metricValue: "500",
      technologies: ["Python", "Pandas", "Seaborn"],
      github: "https://github.com/matematik-isto/cellphone_plans_project",
      demo: "#",
    },
    {
      title: "Power BI Marketing Dashboard",
      description:
        "Power BI dashboard for a digital marketing company: quarter selection, KPI cards with quarter-over-quarter changes, annual spend chart, and channel and campaign performance tables. Data is stored in a PostgreSQL database.",
      metricLabel: "KPIs per quarter",
      metricValue: "8",
      technologies: ["Power BI", "PostgreSQL", "SQL", "DAX"],
      github: "https://github.com/matematik-isto/marketing_dashboard",
      demo: "#",
      demoGallery: true,
    },
  ],
};

export const projects = projectsByLanguage.es;

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

export const skillCategoryTitles: Record<Language, string[]> = {
  es: ["Lenguajes", "Machine Learning", "Visualización"],
  en: ["Languages", "Machine Learning", "Visualization"],
};

export const demoGalleryByLanguage: Record<Language, DemoImage[]> = {
  es: [
    {
      src: dashboardExec.url,
      caption:
        "Resumen ejecutivo: selección de trimestre, tarjetas de KPI con su variación respecto al trimestre anterior, gráfica anual y tablas de desempeño por canal, fuente y campaña.",
    },
    {
      src: dashboardModel.url,
      caption:
        "Modelo semántico: medidas de KPI (gasto, CPM, CTR, CPC, impresiones, conversiones…) y relaciones entre canales, fuentes y campañas.",
    },
    {
      src: dashboardDb.url,
      caption:
        "Base de datos PostgreSQL: tablas de campañas, canales, fuentes y datos de marketing que alimentan el dashboard.",
    },
  ],
  en: [
    {
      src: dashboardExec.url,
      caption:
        "Executive summary: quarter selector, KPI cards showing change versus the previous quarter, annual chart, and channel, source, and campaign performance tables.",
    },
    {
      src: dashboardModel.url,
      caption:
        "Semantic model: KPI measures (spend, CPM, CTR, CPC, impressions, conversions…) and relationships between channels, sources, and campaigns.",
    },
    {
      src: dashboardDb.url,
      caption:
        "PostgreSQL database: campaign, channel, source, and marketing data tables that feed the dashboard.",
    },
  ],
};

export const profile = {
  name: "Ramón Correa Ramírez",
  role: "Científico de Datos",
  bio: "Transformo datos en decisiones. Diseño modelos predictivos y dashboards que ayudan a equipos a entender su negocio y actuar con confianza.",
  links: {
    github: "https://github.com/matematik-isto",
    linkedin: "https://www.linkedin.com/in/ram%C3%B3n-correa/",
  },
};

export const portfolioCopy: Record<Language, PortfolioCopy> = {
  es: {
    nav: { home: "Inicio", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    role: "Científico de Datos",
    bio: "Transformo datos en decisiones. Diseño modelos predictivos y dashboards que ayudan a equipos a entender su negocio y actuar con confianza.",
    banner: "Datos que explican. Modelos que anticipan.",
    heroProjects: "Ver proyectos",
    heroContact: "Contacto",
    projectsEyebrow: "Proyectos",
    projectsTitle: "Trabajo seleccionado",
    projectsIntro: "Modelos predictivos, análisis y dashboards que generan impacto medible.",
    github: "GitHub",
    demo: "Ver demo",
    skillsEyebrow: "Habilidades",
    skillsTitle: "Stack técnico",
    skillsIntro: "Herramientas con las que construyo soluciones de datos de extremo a extremo.",
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos",
    contactIntro: "¿Tienes un proyecto o una oportunidad? Escríbeme o conecta en redes.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@correo.com",
    messagePlaceholder: "Cuéntame sobre tu proyecto…",
    send: "Enviar mensaje",
    sent: "¡Gracias! Tu mensaje fue enviado correctamente.",
    findMe: "También puedes encontrarme en:",
    rights: "Todos los derechos reservados.",
  },
  en: {
    nav: { home: "Home", projects: "Projects", skills: "Skills", contact: "Contact" },
    role: "Data Scientist",
    bio: "I turn data into decisions. I design predictive models and dashboards that help teams understand their business and act with confidence.",
    banner: "Data that explains. Models that anticipate.",
    heroProjects: "View projects",
    heroContact: "Contact",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected work",
    projectsIntro: "Predictive models, analysis, and dashboards that create measurable impact.",
    github: "GitHub",
    demo: "View demo",
    skillsEyebrow: "Skills",
    skillsTitle: "Technical stack",
    skillsIntro: "Tools I use to build end-to-end data solutions.",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk",
    contactIntro: "Have a project or an opportunity? Send me a message or connect with me online.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me about your project…",
    send: "Send message",
    sent: "Thank you! Your message was sent successfully.",
    findMe: "You can also find me on:",
    rights: "All rights reserved.",
  },
};
