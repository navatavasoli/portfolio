const rows = [
  {
    period: "JUN 2026 — NOW",
    role: "AI/ML Engineer (Student)",
    org: "Canadian defence sector", // EDIT-ME: name the employer if you're comfortable
    desc: "Data-science support: analysis tooling and BI dashboards for decision-makers.",
  },
  {
    period: "2025",
    role: "Co-Principal Cybersecurity Researcher",
    org: "uOttawa Faculty of Engineering",
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
  {
    period: "2024",
    role: "Cryptography Researcher",
    org: "Canadian Mathematical Society",
    desc: "Cipher-based encryption method built on Diophantine equations.",
  },
];

export function Experience() {
  return (
    <div className="flex flex-col">
      {rows.map((r) => (
        <div
          key={r.role}
          className="grid gap-2 border-t border-border py-5 last:border-b md:grid-cols-[160px_1fr_1.2fr] md:gap-6"
        >
          <span className="font-tech text-xs leading-6 text-muted-foreground">
            {r.period}
          </span>
          <div>
            <h3 className="font-medium">{r.role}</h3>
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
