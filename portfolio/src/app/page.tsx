import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Technologies } from "@/sections/Technologies";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div>
      <ParticleBackground />
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
