import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Bueno | Desenvolvedor Web",
  verification: {
    google: "uuUNu75m-Y_8deLtPyMFOyeunbiNPG1rotIszacYZN0",
  },
  description:
    "Portfólio de desenvolvedor full stack especializado em React, Node.js e tecnologias web modernas",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
