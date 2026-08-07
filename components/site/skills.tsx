const groups = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "Java", "Go", "SQL", "MATLAB", "PowerShell", "Scheme", "Prolog", "HTML", "Jupyter Notebook"],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    items: ["React", "Next.js", "Node.js", "Flask", "Spline", "vanilla JS"],
  },
  {
    label: "HARDWARE & SIGNALS",
    items: ["Simulink", "Arduino", "Raspberry Pi", "ROS", "Altera Quartus", "NVIDIA NIMs", "NVIDIA GPUs"],
  },
  {
    label: "AI/ML & DATA",
    items: ["LangChain", "LangGraph", "CUDA", "Mongo DB", "Pydantic"],
  },
  {
    label: "CLOUD & TOOLS",
    items: ["Docker", "AWS", "Google Cloud Platform", "Firebase", "Git", "Azure DevOps", "Apache Maven"],
  },
  {
    label: "FEATURED SKILLS",
    items: ["Public Speaking", "Technical Writing", "Creative Problem Solving", "Project Management and Coordination"],
  },
];

export function Skills() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-3">
          <h3 className="font-tech text-xs tracking-[0.2em] text-muted-foreground">
            {g.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-border bg-card px-3 py-1.5 font-tech text-xs text-foreground/90 transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
