const groups = [
  {
    label: "LANGUAGES",
    items: ["Python", "TypeScript", "Java", "Go", "SQL", "MATLAB"],
  },
  {
    label: "HARDWARE & SIGNALS",
    items: ["Simulink", "Arduino", "Raspberry Pi", "ROS", "Circuit analysis", "Lab instrumentation"],
  },
  {
    label: "AI/ML & DATA",
    items: ["LangChain", "LangGraph", "RAG", "pandas", "Power BI", "CUDA (Numba)"],
  },
  {
    label: "CLOUD & TOOLS",
    items: ["Docker", "AWS", "Google Cloud", "Firebase", "Git", "Azure DevOps"],
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
                className="rounded-sm border border-border bg-card px-3 py-1.5 font-tech text-xs text-foreground/90"
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
