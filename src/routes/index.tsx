import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowRight, BarChart3, ExternalLink, Database } from "lucide-react";
import {
  siPython,
  siPostgresql,
  siScikitlearn,
  siPandas,
  siNumpy,
  siTensorflow,
  siPlotly,
  type SimpleIcon,
} from "simple-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  projectsByLanguage,
  skillCategories,
  skillCategoryTitles,
  profile,
  portfolioCopy,
  type Language,
  type PortfolioCopy,
} from "@/lib/portfolio-data";
import profilePhoto from "@/assets/perfil.png.asset.json";
import dataScienceBanner from "@/assets/banner-datos.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portafolio · Científico de Datos" },
      {
        name: "description",
        content:
          "Portafolio profesional de un Científico de Datos: proyectos de machine learning, análisis y visualización con Python, SQL y Power BI.",
      },
      { property: "og:title", content: "Portafolio · Científico de Datos" },
      {
        property: "og:description",
        content:
          "Proyectos de machine learning, análisis y visualización de datos con Python, SQL y Power BI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function Navbar({ language, copy, onLanguageChange }: { language: Language; copy: PortfolioCopy; onLanguageChange: (language: Language) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: copy.nav.home, href: "#inicio" },
    { label: copy.nav.projects, href: "#proyectos" },
    { label: copy.nav.skills, href: "#habilidades" },
    { label: copy.nav.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1" aria-label={language === "es" ? "Seleccionar idioma" : "Select language"}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onLanguageChange("es")}
              aria-label="Español"
              aria-pressed={language === "es"}
              title="Español"
              className={language === "es" ? "bg-accent/15 ring-1 ring-accent" : "opacity-60 hover:opacity-100"}
            >
              <span aria-hidden="true" className="text-xl leading-none">🇪🇸</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onLanguageChange("en")}
              aria-label="English"
              aria-pressed={language === "en"}
              title="English"
              className={language === "en" ? "bg-accent/15 ring-1 ring-accent" : "opacity-60 hover:opacity-100"}
            >
              <span aria-hidden="true" className="text-xl leading-none">🇬🇧</span>
            </Button>
          </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          <span className="text-accent">●</span>Ramón Correa
        </a>
      </nav>
    </header>
  );
}

function Hero({ copy }: { copy: PortfolioCopy }) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center pb-16 pt-32"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="fade-up">
          <div className="mb-8 grid items-stretch gap-5 sm:grid-cols-[12rem_1fr]">
            <div className="aspect-[4/5] min-h-52 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <img
                src={profilePhoto.url}
                alt={`Retrato profesional de ${profile.name}`}
                width={768}
                height={1024}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <img
                src={dataScienceBanner.url}
                alt="Visualización abstracta de análisis de datos en tonos grises y verdes"
                width={1600}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-card/85 px-5 py-3 backdrop-blur-sm">
                 <p className="text-sm font-medium text-foreground">{copy.banner}</p>
              </div>
            </div>
          </div>
          <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 border-accent/30 text-accent"
          >
             {copy.role}
          </Badge>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
             {copy.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#proyectos">
                 {copy.heroProjects} <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-transparent"
            >
               <a href="#contacto">{copy.heroContact}</a>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, copy }: { project: (typeof projectsByLanguage.es)[number]; copy: PortfolioCopy }) {
  return (
    <Card className="group relative overflow-hidden border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BarChart3 className="size-5" />
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {project.metricLabel}
            </p>
            <p className="text-2xl font-bold text-accent">{project.metricValue}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-border pt-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-accent"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
               <Github className="mr-2 size-4" /> {copy.github}
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
               {copy.demo} <ExternalLink className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Projects({ language, copy }: { language: Language; copy: PortfolioCopy }) {
  const projects = projectsByLanguage[language];
  return (
    <section id="proyectos" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
             {copy.projectsEyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
             {copy.projectsTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">
             {copy.projectsIntro}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
             <ProjectCard key={project.title} project={project} copy={copy} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_ICONS: Partial<Record<string, SimpleIcon>> = {
  Python: siPython,
  SQL: siPostgresql,
  "Scikit-learn": siScikitlearn,
  Pandas: siPandas,
  NumPy: siNumpy,
  TensorFlow: siTensorflow,
  Matplotlib: siPlotly,
};

function TechnologyLogo({ name }: { name: string }) {
  const icon = SKILL_ICONS[name];

  if (icon) {
    return (
      <svg viewBox="0 0 24 24" className="size-8" role="img" aria-label={`${name} logo`}>
        <path fill="currentColor" d={icon.path} />
      </svg>
    );
  }

  if (name === "R") {
    return <span className="text-2xl font-bold" aria-label="R logo">R</span>;
  }

  if (name === "Power BI") {
    return <BarChart3 className="size-8" aria-label={`${name} logo`} />;
  }

  return <Database className="size-8" aria-hidden="true" />;
}

function SkillIcon({ name }: { name: string }) {
  return (
    <div className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-md border border-border bg-secondary/50 p-4 text-center transition-colors hover:border-accent/50 hover:bg-accent/5">
      <div className="flex size-12 items-center justify-center text-accent transition-transform duration-300 group-hover:scale-110">
        <TechnologyLogo name={name} />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

function Skills({ language, copy }: { language: Language; copy: PortfolioCopy }) {
  return (
    <section id="habilidades" className="scroll-mt-24 border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
             {copy.skillsEyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
             {copy.skillsTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">
             {copy.skillsIntro}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border bg-card shadow-soft">
              <CardContent className="p-6">
                 <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
                   {skillCategoryTitles[language][skillCategories.indexOf(category)]}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <SkillIcon key={skill.name} name={skill.name} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm({ copy }: { copy: PortfolioCopy }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="border-border bg-card shadow-soft">
      <CardContent className="p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                 {copy.name}
              </Label>
               <Input id="name" name="name" required placeholder={copy.namePlaceholder} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                 {copy.email}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                 placeholder={copy.emailPlaceholder}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
               {copy.message}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
               placeholder={copy.messagePlaceholder}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
             {copy.send}
          </Button>
          {sent && (
            <p className="text-center text-sm text-accent">
               {copy.sent}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

function Contact({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="contacto" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
             {copy.contactEyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
             {copy.contactTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">
             {copy.contactIntro}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
           <ContactForm copy={copy} />
          <div className="flex flex-col justify-center gap-4">
            <p className="text-muted-foreground">
               {copy.findMe}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="border-border bg-transparent hover:border-accent hover:text-accent"
              >
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 size-4" /> GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border bg-transparent hover:border-accent hover:text-accent"
              >
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 size-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: PortfolioCopy }) {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
           © {new Date().getFullYear()} {profile.name}. {copy.rights}
        </p>
        <div className="flex gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = portfolioCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar language={language} copy={copy} onLanguageChange={setLanguage} />
      <main>
        <Hero copy={copy} />
        <Projects language={language} copy={copy} />
        <Skills language={language} copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
