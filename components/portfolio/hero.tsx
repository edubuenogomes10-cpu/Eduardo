import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const emailAddress = "edubuenogomes10@gmail.com";
const whatsappUrl =
  "https://wa.me/5553999953748?text=Ola%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-2">Olá, eu sou</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Eduardo Bueno
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Desenvolvedor Web
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transformo ideias em experiências digitais incríveis. Especializado em
              criar aplicações web modernas, responsivas e de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg">
                <a href="#projetos">Ver Projetos</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar em Contato
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/edubuenogomes10-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <Image
                src="/edu.jpeg"
                alt="Foto de perfil"
                fill
                className="rounded-full object-cover border-4 border-card shadow-xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#sobre"
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
