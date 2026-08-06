import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { About } from "@/components/site/about";
import { Projects } from "@/components/site/projects";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Section id="about" index="01" title="ABOUT">
        <About />
      </Section>
      <Section id="projects" index="02" title="PROJECTS">
        <Projects />
      </Section>
      <Section id="experience" index="03" title="EXPERIENCE">
        <Experience />
      </Section>
      <Section id="skills" index="04" title="SKILLS">
        <Skills />
      </Section>
      <Section id="contact" index="05" title="CONTACT">
        <Contact />
      </Section>
    </main>
  );
}
