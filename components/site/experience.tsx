const rows = [
  {
    period: "JUNE 2026 — AUGUST 2026",
    role: "AI/ML Engineer (Data Science Support)",
    org: "Department of National Defence - Warfighter Support Division",
    desc: "Developed agentic models for military applications using LangChain, LangGraph, and RAG. Performed data analysis and optimized raw inputs for entry into an ML pipeline. Developed an autonomous LLM assessment application to query and grade AI models.",
  },
  {
    period: "MARCH 2025 - PRESENT",
    role: "Co-Principal Cybersecurity Researcher",
    org: "uOttawa Faculty of Electrical Engineering and Computer Science",
    desc: "Led an RCMP-funded study on LLMs for cybersecurity education, determining the most effective uses of LLMs in anti-sextortion education. Preparing an academic paper for peer-review and publication.",
  },
  {
    period: "JUNE 2024 - MAY 2026",
    role: "Vice President of Outreach · UI/UX Web Developer",
    org: "SEDS Canada",
    desc: "Assisted in the coordination of the NASA Space Apps. Hosted organization-wide events. Led the web design for the Women of SEDS Conference in Canada.",
    href: "https://wseds.seds.ca/wseds-conference/",
  },
  {
    period: "JANUARY 2025 - JANUARY 2026",
    role: "Teaching Assistant",
    org: "University of Ottawa School of Engineering Design and Innovation",
    desc: "Managed student projects and assisted in teaching technical laboratories for GNG1103: Introduction to Engineering Design.",
  },
  {
    period: "JANUARY 2025 - JUNE 2025",
    role: "Head of Product Development",
    org: "The Seam Team",
    desc: "Led the software design and 3D modelling of a custom prosthetic device 3D printed and delivered to a customer.",
    href: "https://sewable.framer.website/",
  },
  {
    period: "SEPTEMBER 2024 - DECEMBER 2024",
    role: "Software Developer",
    org: "Shabodi Inc.",
    desc: "Developed an AWS Bedrock-hosted application for the detection of SIM swap and duplication on 5G enterprise networks to replace Microsoft Authenticator.",
  },
  {
    period: "JUNE 2022 - JULY 2023",
    role: "Engineering Documentation Lead",
    org: "VEX Robotics Team 82855T",
    desc: "Managed the documentation process for building a robot in VEX's 2022-2023 Spin Up Game. Led a small group of individuals in the creative design process. Organized dates to ensure that the notebook was accurately detailed for every day of the building progress.",
  },
  {
    period: "OCTOBER 2020 - JULY 2023",
    role: "Co-Founder",
    org: "Youth Climate Group",
    desc: "Organized volunteers on a local and global scale to create educational and political materials and resources relating to climate change. Developed and optimized a web-page for the organization. Directed events in support of climate change education. Created educational videos for climate science. Networked with journalists, artists, and scientists on a global scale.",
  },
  {
    period: "OCTOBER 2020 - SEPTEMBER 2021",
    role: "Writer",
    org: "The Junior Economic Club of Toronto",
    desc: "Researched and wrote about various global economic concepts and present-day events, with publications featured in international JEC releases.",
    href: "https://www.linkedin.com/in/nava-tavasoli/overlay/Position/1684776344/treasury/?profileId=ACoAADF5HNsBXA25Iz4wiDOwOvurym_761zQVJo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3B%2F9cwDH9MQN%2BTy9ZMRgPxhw%3D%3D",
  },
];

const certifications = [
  {
    name: "Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    year: "2026",
  },
  {
    name: "Building LLMs with Prompt Engineering",
    issuer: "NVIDIA",
    year: "2026",
  },
  {
    name: "Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2026",
  },
  {
    name: "North Builders Track",
    issuer: "Cohere",
    year: "2026",
  },
  {
    name: "Soldering",
    issuer: "uOttawa Richard L’Abbé Makerspace",
    year: "2025",
  },
  {
    name: "Machining Level I - Manual Milling Skills I",
    issuer: "uOttawa Richard L’Abbé Makerspace",
    year: "2025",
  },
  {
    name: "Laser Cutting",
    issuer: "uOttawa Richard L’Abbé Makerspace",
    year: "2024",
  },
];

export function Experience() {
  return (
    <div className="flex flex-col">
      {rows.map((r) => (
        <div
          key={r.role}
          className="group grid gap-2 border-t border-l-2 border-border border-l-transparent py-5 pl-3 -ml-3 last:border-b transition-colors hover:bg-card hover:border-l-primary md:grid-cols-[160px_1fr_1.2fr] md:gap-6"
        >
          <span className="font-tech text-xs leading-6 text-muted-foreground">
            {r.period}
          </span>
          <div>
            <h3 className="font-display font-semibold tracking-tight">
              {r.role}
            </h3>
            {r.href ? (
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {r.org}
              </a>
            ) : (
              <p className="text-sm text-primary">{r.org}</p>
            )}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {r.desc}
          </p>
        </div>
      ))}

      <div className="mt-10">
        <h3 className="font-tech text-xs tracking-wide text-muted-foreground">
          CERTIFICATIONS
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <h4 className="font-display text-sm font-semibold tracking-tight">
                {c.name}
              </h4>
              <p className="text-sm text-primary">{c.issuer}</p>
              <p className="font-tech text-xs text-muted-foreground">
                {c.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
