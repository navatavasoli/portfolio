import { ArrowUpRight } from "lucide-react";

// EDIT-ME: swap `href` placeholders for real repo/demo links (or remove the link row).
const projects = [
  {
    index: "P-01",
    title: "Atlas Tech Diodes",
    role: "Co-lead",
    description:
      "Hardware cybersecurity project developing low-cost unidirectional data diodes for critical-infrastructure applications. Research grant application in progress.",
    tags: ["Hardware Security", "Embedded", "Research"],
    href: "#",
  },
  {
    index: "P-02",
    title: "F1 Telemetry Web App",
    role: "Personal project",
    description:
      "Race results, championship standings, session schedules, and lap telemetry (speed, throttle, gear) for the 2026 season — FastF1 data served from a Python backend.",
    tags: ["Python", "FastAPI", "Data Viz"],
    href: "#",
  },
  {
    index: "P-03",
    title: "rag-agent-lite",
    role: "Learning build",
    description:
      "Agentic RAG built up in five incremental stages: basic retrieval, hybrid dense+BM25 search, tool calling, LangGraph self-correction, and multi-agent orchestration — all running on local models.",
    tags: ["LangChain", "LangGraph", "Qdrant", "Ollama"],
    href: "https://github.com/navatavasoli",
  },
];

export function Projects() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.index}
          className="group flex flex-col gap-4 rounded-md border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex items-center justify-between font-tech text-xs text-muted-foreground">
            <span className="text-primary">{p.index}</span>
            <span>{p.role}</span>
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {p.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {p.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-border px-2 py-0.5 font-tech text-[10px] tracking-wider text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-foreground/90"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={p.href}
            className="inline-flex items-center gap-1 font-tech text-xs text-primary opacity-80 transition-opacity hover:opacity-100"
          >
            SOURCE{" "}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </article>
      ))}
    </div>
  );
}
