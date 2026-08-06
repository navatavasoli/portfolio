"use client";

import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MediaFrame } from "@/components/site/media-frame";

// EDIT-ME: swap `href` placeholders for real repo/demo links (or remove the link row).
const projects = [
  {
    index: "P-01",
    title: "Cryptography Research Project",
    role: "Independent Research",
    description:
      "The Applications of Linear non-Homogeneous Diophantine Equations to Computer Cryptography",
    fullDescription:
      "I worked as an independent researcher leading a deep dive into the use of homogeneous Diophantine equations to computer cryptography as part of the Canadian Mathematical Society's research competition.",
    highlights: [
      "Accepted into the CMS Mathematical Research Showcase",
      "Supervised by Dr. Nazanin Zaker at the University of Ottawa's Department of Mathematics",
      "Direct insights into cryptography for cybersecurity",
    ],
    tags: ["Cybersecurity", "Research"],
    href: "#",
    image: "/cryptography.png"
  },
  {
    index: "P-02",
    title: "Formula 1 Telemetry App",
    role: "Personal project",
    description:
      "Race results, championship standings, session schedules, and lap telemetry for the 2026 season with FastF1 data served from Python backend.",
    fullDescription:
      "Dashboard for following the 2026 F1 season for results, standings, and schedules alongside lap-by-lap telemetry. A Python backend pulls and processes timing data via the FastF1 library and serves it to a web frontend for charting speed, throttle, and gear traces.",
    highlights: [
      "Live-season results, championship standings, and session schedules",
      "Lap telemetry: speed, throttle, and gear traces via FastF1",
      "Python backend (FastAPI) serving a data-viz frontend",
      "Expanding to have ML pipelines for predictive analysis"
    ],
    tags: ["Python", "FastAPI", "Data Visualization"],
    href: "#",
    image: "/F1 app.png"
  },
  {
    index: "P-03",
    title: "rag-agent-lite",
    role: "Learning build",
    description:
      "Agentic RAG built up in five incremental stages: basic retrieval, hybrid dense+BM25 search, tool calling, LangGraph self-correction, and multi-agent orchestration — all running on local models.",
    fullDescription:
      "A from-scratch, five-stage build-up of an agentic RAG system, designed as a learning project to understand each layer before reaching for a framework's defaults. Every stage runs on local models via Ollama, with Qdrant as the vector store.",
    highlights: [
      "Stage 1: basic dense retrieval",
      "Stage 2: hybrid dense + BM25 search",
      "Stage 3: tool calling",
      "Stage 4: LangGraph self-correction loop",
      "Stage 5: multi-agent orchestration",
    ],
    tags: ["LangChain", "LangGraph", "Qdrant", "Ollama", "RAG"],
    href: "https://github.com/navatavasoli",
    image: "/RAG.png"
  },
  {
    index: "P-04",
    title: "Nerd Bot",
    role: "LLM Build",
    description:
      "A simple LLM to explain snippets of code for absolute beginners wanting to learn.",
    fullDescription:
      "NerdBot is an LLM that uses OpenAI's APIs to parse through snippets of user-entered code and helps to explain it to you line by line. Currently supporting Python, Java, and Swift.",
    highlights: [
      "Supported on Windows, Linux, and macOS.",
    ],
    tags: ["LLMs", "Python", "Java", "Swift"],
    href: "https://github.com/navatavasoli/nerdbot",
    image: "/nerdbot.png"
  },
  {
    index: "P-05",
    title: "The Legend of Zelda: Zelda's Awakening",
    role: "Independent Game",
    description:
      "An independent, Pygame build of the Legend of Zelda with a complete set of assets, audio, and two-player mechanisms.",
    fullDescription:
      "Build from scratch with Python (Pygame), the game has 10 minutes of playtime and more than 150 gameplay assets.",
    highlights: [
      "Downloadable on local devices"
    ],
    tags: ["Python", "Game Development"],
    href: "#",
    image: "/zelda.png"
  },
];

export function Projects() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((p) => (
        <Dialog key={p.index}>
          <DialogTrigger asChild>
            <article
              role="button"
              tabIndex={0}
              className="group flex cursor-pointer flex-col gap-4 rounded-md border border-border bg-card p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
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
              <div className="flex items-center justify-between">
                <span className="font-tech text-xs text-primary opacity-80 transition-opacity group-hover:opacity-100">
                  DETAILS{" "}
                  <ArrowUpRight className="inline h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                {p.href !== "#" && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 font-tech text-xs text-muted-foreground opacity-80 transition-opacity hover:text-foreground hover:opacity-100"
                  >
                    SOURCE <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </article>
          </DialogTrigger>
          <DialogContent>
            <MediaFrame
              label={`IMG · ${p.index}`}
              icon={ImageIcon}
              src={p.image}
              alt={p.title}
              className="aspect-video w-full rounded-b-none border-x-0 border-t-0"
            />
            <div className="flex flex-col gap-5 p-6">
              <DialogHeader>
                <div className="flex items-center justify-between font-tech text-xs text-muted-foreground">
                  <span className="text-primary">{p.index}</span>
                  <span>{p.role}</span>
                </div>
                <DialogTitle>{p.title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.fullDescription}
              </p>
              <ul className="flex flex-col gap-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-background px-2 py-0.5 font-tech text-[10px] tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.href !== "#" && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-1 font-tech text-xs text-primary opacity-80 transition-opacity hover:opacity-100"
                >
                  SOURCE{" "}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
