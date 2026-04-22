import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código legível, bem documentado e fácil de manter.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Criativas",
    description: "Encontro soluções inovadoras para problemas complexos.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Otimizo aplicações para máxima velocidade e eficiência.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho bem em equipe e me comunico de forma clara.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou um desenvolvedor apaixonado por tecnologia com experiência em
              criar aplicações web completas do início ao fim. Minha jornada na
              programação começou há alguns anos e desde então venho me
              aperfeiçoando constantemente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tenho experiência com desenvolvimento front-end usando React.js e
              back-end com Node.js. Busco sempre entregar projetos com qualidade,
              boas práticas e código limpo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quando não estou programando, gosto de aprender novas tecnologias,
              contribuir com projetos open source e compartilhar conhecimento com
              a comunidade de desenvolvedores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
