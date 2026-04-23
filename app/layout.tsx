import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eduardo Bueno | Desenvolvedor Web',
  verification: {
    google: 'uuUNu75m-Y_8deLtPyMFOyeunbiNPG1rotIszacYZN0',
  },
  description: 'Portfólio de desenvolvedor full stack especializado em React, Node.js e tecnologias web modernas',
  generator: 'v0.app',
  icons: {
    icon: '/logo_edu.ico',
    shortcut: '/logo_edu.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className="bg-background scroll-smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
