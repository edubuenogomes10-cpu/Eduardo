import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Tools } from "@/components/portfolio/tools";

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
