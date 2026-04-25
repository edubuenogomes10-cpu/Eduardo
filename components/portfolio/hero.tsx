import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const emailAddress = "edubuenogomes10@gmail.com";
const whatsappUrl =
  "https://wa.me/5553999953748?text=Olá%2C%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.";

const stats = [
  { label: "Projetos publicados", value: "2+" },
  { label: "Stack principal", value: "React + Next" },
  { label: "Entrega", value: "UI responsiva" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,rgba(180,142,57,0.18),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-kicker">Portfólio profissional</span>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
              Desenvolvimento web com presença visual mais madura e execução
              cuidadosa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Sou Eduardo Bueno. Projeto e desenvolvo sites e interfaces com foco
              em clareza, performance e acabamento profissional para negócios que
              precisam parecer sérios desde o primeiro olhar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-foreground px-7 text-sm font-semibold text-background shadow-[0_14px_32px_-18px_rgba(32,24,10,0.4)] hover:bg-foreground/90"
              >
                <a href="#projetos">Ver projetos</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 rounded-full border-primary/30 bg-black/25 px-7 text-sm font-semibold text-foreground"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-black/25 px-5 py-4 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://github.com/edubuenogomes10-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-black/20 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/eduardobuenog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-black/20 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-black/20 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="surface-panel relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-x-8 top-0 h-32 rounded-b-full bg-primary/10 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#171411]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,175,95,0.16),transparent_40%)]" />
                <Image
                  src="/edu.jpeg"
                  alt="Foto de perfil de Eduardo Bueno"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-black/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Especialidade
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Landing pages, portfólios e interfaces em React e Next.js com
                    visual consistente.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-black/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Direção
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Menos cara de template, mais clareza, ritmo visual e confiança
                    na apresentação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#sobre"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Explorar portfólio
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
