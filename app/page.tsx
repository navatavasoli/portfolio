import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { About } from "@/components/site/about";
import { Terminal } from "@/components/site/interactive-terminal";
import { Projects } from "@/components/site/projects";
import { Blog } from "@/components/site/blog";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Contact } from "@/components/site/contact";
import { RobotLab } from "@/components/site/robot-lab";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Section id="about" index="01" title="ABOUT">
        <About />
      </Section>
      <Section id="terminal" index="02" title="TERMINAL">
        <Terminal />
      </Section>
      <RobotLab />
      <Section id="projects" index="03" title="PROJECTS">
        <Projects />
      </Section>
      <Section id="blog" index="04" title="BLOG">
        <Blog />
      </Section>
      <Section id="experience" index="05" title="EXPERIENCE">
        <Experience />
      </Section>
      <Section id="skills" index="06" title="SKILLS">
        <Skills />
      </Section>
      <Section id="contact" index="07" title="CONTACT">
        <Contact />
      </Section>
    </main>
  );
}
