"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="surface-panel flex h-16 items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/20 bg-[#0f0f0f]">
              <Image
                src="/logo_edu.ico"
                alt="Logo Eduardo Bueno"
                fill
                className="object-contain p-1.5"
                sizes="40px"
              />
            </span>
            <div className="leading-tight">
              <strong className="block text-sm font-semibold text-foreground">
                Eduardo Bueno
              </strong>
              <span className="block text-xs text-muted-foreground">
                Desenvolvedor Web
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-black/20 p-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="surface-panel mt-3 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
