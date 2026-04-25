import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código limpo",
    description:
      "Estruturo componentes e estilos para facilitar manutenção e evolução do projeto.",
  },
  {
    icon: Lightbulb,
    title: "Direção visual",
    description:
      "Busco interfaces que transmitam confiança e pareçam alinhadas ao negócio, não genéricas.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Priorizo carregamento rápido, responsividade e experiência estável em diferentes telas.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Trabalho próximo do cliente para transformar referência visual em solução clara e prática.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-band py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <span className="section-kicker">Sobre mim</span>
            <h2 className="section-heading mt-4 text-foreground">
              Desenvolvimento com atenção a detalhe, legibilidade e resultado.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Atuo criando experiências web completas, do visual à implementação,
                com foco em sites e interfaces que precisam comunicar qualidade de
                forma imediata.
              </p>
              <p>
                Minha base está em React, Next.js e Node.js, mas o que realmente
                me move é organizar a apresentação do produto para que ele pareça
                mais profissional, mais claro e mais confiável.
              </p>
              <p>
                Gosto de projetos em que design e código caminham juntos: a parte
                técnica precisa funcionar bem, e a parte visual precisa defender o
                valor do negócio.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="surface-panel min-h-[220px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
