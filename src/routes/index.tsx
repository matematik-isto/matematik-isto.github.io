import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowRight, BarChart3, ExternalLink, Database, PieChart } from "lucide-react";
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
import { projects, skillCategories, profile } from "@/lib/portfolio-data";
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

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
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

function Hero() {
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
                <p className="text-sm font-medium text-foreground">Datos que explican. Modelos que anticipan.</p>
              </div>
            </div>
          </div>
          <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 border-accent/30 text-accent"
          >
            {profile.role}
          </Badge>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#proyectos">
                Ver proyectos <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-transparent"
            >
              <a href="#contacto">Contacto</a>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
              <Github className="mr-2 size-4" /> GitHub
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Ver demo <ExternalLink className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
            Proyectos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trabajo seleccionado
          </h2>
          <p className="mt-3 text-muted-foreground">
            Modelos predictivos, análisis y dashboards que generan impacto
            medible.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
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

  if (name === "Power BI" || name === "Tableau") {
    return <PieChart className="size-8" aria-label={`${name} logo`} />;
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

function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
            Habilidades
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stack técnico
          </h2>
          <p className="mt-3 text-muted-foreground">
            Herramientas con las que construyo soluciones de datos de extremo a
            extremo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border bg-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
                  {category.title}
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

function ContactForm() {
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
                Nombre
              </Label>
              <Input id="name" name="name" required placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@correo.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Cuéntame sobre tu proyecto…"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Enviar mensaje
          </Button>
          {sent && (
            <p className="text-center text-sm text-accent">
              ¡Gracias! Tu mensaje fue enviado correctamente.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
            Contacto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hablemos
          </h2>
          <p className="mt-3 text-muted-foreground">
            ¿Tienes un proyecto o una oportunidad? Escríbeme o conecta en
            redes.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="flex flex-col justify-center gap-4">
            <p className="text-muted-foreground">
              También puedes encontrarme en:
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

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
