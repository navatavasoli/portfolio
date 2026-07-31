import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nava Tavasoli",
};

const skills = [
  "[Skill 1]",
  "[Skill 2]",
  "[Skill 3]",
  "[Skill 4]",
  "[Skill 5]",
  "[Skill 6]",
];

export default function AboutPage() {
  return (
    <main className="container mx-auto flex flex-col gap-16 px-4 py-20 lg:py-28">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl tracking-tighter font-regular">
          About me
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          [Write a short bio here — who you are, what you do, and what
          you&apos;re currently focused on. A couple of sentences is plenty.]
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          [Optional second paragraph — background, interests outside of work,
          or what got you into this field.]
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl tracking-tight font-medium">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl tracking-tight font-medium">Experience</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-medium">[Role title] · [Company]</p>
            <p className="text-sm text-muted-foreground">[Start] – [End]</p>
            <p className="text-muted-foreground">
              [One or two lines about what you did in this role.]
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">[Role title] · [Company]</p>
            <p className="text-sm text-muted-foreground">[Start] – [End]</p>
            <p className="text-muted-foreground">
              [One or two lines about what you did in this role.]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
