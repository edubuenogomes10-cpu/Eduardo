"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const githubUrl = "https://github.com/edubuenogomes10-cpu";
const emailAddress = "edubuenogomes10@gmail.com";
const whatsappBaseUrl = "https://wa.me/5553999953748";
const defaultWhatsappMessage =
  "Olá, vim pelo seu portfólio e gostaria de falar sobre um projeto.";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(53) 99995-3748",
    href: `${whatsappBaseUrl}?text=${encodeURIComponent(defaultWhatsappMessage)}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Bagé, RS",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: githubUrl,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardobuenog",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      "Olá, Eduardo! Vim pelo seu portfólio.",
      "",
      `Nome: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      "Mensagem:",
      formData.message,
    ].join("\r\n");

    window.open(
      `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-kicker">Contato</span>
            <h2 className="section-heading mt-4 text-foreground">
              Vamos construir uma presença digital mais forte para o seu projeto.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Se você quer um site com visual mais profissional, me chama. Posso
              ajudar tanto na parte técnica quanto na direção do acabamento.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="surface-panel flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-black/20 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <Card className="surface-panel rounded-[1.75rem] border-0 shadow-none">
            <CardContent className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Envie uma mensagem
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                O formulário monta a mensagem e abre direto no WhatsApp para
                acelerar o contato.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 rounded-2xl border-border/80 bg-black/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={emailAddress}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 rounded-2xl border-border/80 bg-black/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Me conte sobre o projeto, objetivo do site e prazo."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="rounded-2xl border-border/80 bg-black/20"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-full text-sm font-semibold shadow-[0_14px_32px_-18px_rgba(129,74,145,0.55)]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar no WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
