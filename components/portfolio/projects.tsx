import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Thayná Mendoza Veterinária",
    description:
      "Site institucional com apresentação elegante, contato facilitado e identidade visual voltada ao atendimento veterinário.",
    image: "/projects/thayna-mendoza-veterinaria.png",
    imageClassName: "object-contain p-7",
    imageWrapperClassName: "bg-white",
    technologies: ["Next.js", "React", "CSS"],
    liveUrl: "https://medvethayna.com.br/",
    githubUrl: "https://github.com/edubuenogomes10-cpu",
    comingSoon: false,
  },
  {
    title: "Márcio Garcia Fotografia",
    description:
      "Portfólio de fotografia com foco em presença visual, apresentação dos ensaios e contato comercial.",
    image: "/projects/marcio-garcia-logo.png",
    imageClassName: "object-contain p-7",
    imageWrapperClassName: "bg-white",
    technologies: [],
    liveUrl: "https://www.marciogarciafotografia.com.br/",
    githubUrl: "#",
    comingSoon: false,
  },
  {
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    image: "/projects/project2.jpg",
    technologies: [],
    liveUrl: "#",
    githubUrl: "#",
    comingSoon: true,
  },
  {
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    image: "/projects/project3.jpg",
    technologies: [],
    liveUrl: "#",
    githubUrl: "#",
    comingSoon: true,
  },
  {
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    image: "/projects/project4.jpg",
    technologies: [],
    liveUrl: "#",
    githubUrl: "#",
    comingSoon: true,
  },
  {
    title: "Em breve",
    description: "Novo projeto em desenvolvimento.",
    image: "/projects/project5.jpg",
    technologies: [],
    liveUrl: "#",
    githubUrl: "#",
    comingSoon: true,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Projetos</span>
            <h2 className="section-heading mt-4 text-foreground">
              Trabalhos com foco em identidade, clareza e entrega objetiva.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Cada projeto aqui entra como uma vitrine de acabamento visual e
            implementação. A ideia é mostrar menos volume e mais consistência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              className={`group overflow-hidden rounded-[1.5rem] border-border/70 bg-[#171717]/88 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 ${
                project.comingSoon ? "opacity-85" : ""
              }`}
            >
              <div
                className={`relative h-56 overflow-hidden border-b border-border/60 ${
                  project.imageWrapperClassName ?? "bg-[#141311]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-500 ${
                    project.imageClassName ?? "object-cover"
                  } ${project.comingSoon ? "" : "group-hover:scale-[1.02]"}`}
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(28,20,30,0.16),rgba(28,20,30,0.62))]">
                    <div className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      Em breve
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full border border-primary/10 bg-primary/6 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {!project.comingSoon && (
                  <div className="mt-6 flex gap-3">
                    <Button asChild className="rounded-full px-5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </a>
                    </Button>
                    {project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        asChild
                        className="rounded-full border-border/80 bg-black/25 px-5"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
