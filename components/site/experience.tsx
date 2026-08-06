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
    desc: "RCMP-funded study on LLMs for cybersecurity education; Python/SQL analysis of experimental results.",
  },
  {
    period: "2025",
    role: "Board of Directors · UI/UX Web Developer",
    org: "SEDS Canada",
    desc: "Organization-wide events; supervised NASA Space Apps competitions across Canada.",
  },
  {
    period: "2024",
    role: "Software Developer",
    org: "Shabodi Inc.",
    desc: "AWS-compatible detection of SIM swap and duplication on 5G enterprise networks.",
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
            <p className="text-sm text-primary">{r.org}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {r.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
