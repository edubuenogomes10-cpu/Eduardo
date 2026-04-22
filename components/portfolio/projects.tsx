import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Clock } from "lucide-react";

const projects = [
  {
    title: "Med Vet Hayna",
    description:
      "Site institucional desenvolvido para a Med Vet Hayna, com foco em apresentar servicos, contato e uma experiencia responsiva.",
    image: "/projects/medvethayna-cover.png",
    technologies: ["Next.js", "React", "CSS"],
    liveUrl: "https://medvethayna.com.br/",
    githubUrl: "https://github.com/edubuenogomes10-cpu",
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
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi. Cada um representa um
            desafio unico e uma oportunidade de aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              className={`group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 ${
                project.comingSoon ? "opacity-80" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Em Breve</span>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                {!project.comingSoon && (
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    {project.githubUrl !== "#" && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Codigo
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
