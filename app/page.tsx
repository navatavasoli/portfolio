import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { About } from "@/components/site/about";
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
      <RobotLab />
      <Section id="projects" index="02" title="PROJECTS">
        <Projects />
      </Section>
      <Section id="blog" index="03" title="BLOG">
        <Blog />
      </Section>
      <Section id="experience" index="04" title="EXPERIENCE">
        <Experience />
      </Section>
      <Section id="skills" index="05" title="SKILLS">
        <Skills />
      </Section>
      <Section id="contact" index="06" title="CONTACT">
        <Contact />
      </Section>
    </main>
  );
}
