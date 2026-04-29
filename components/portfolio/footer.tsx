import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/edubuenogomes10-cpu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardobuenog",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/eduardo_buenodev/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:edubuenogomes10@gmail.com",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-black/30 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 sm:px-6">
        <div className="social-dock">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="social-icon"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
              <span className="social-icon__label">{link.label}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Eduardo Bueno. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvido com Next.js, React e atenção a acabamento visual.
        </p>
      </div>
    </footer>
  );
}
