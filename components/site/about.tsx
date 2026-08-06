export function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a third-year student at the University of Ottawa doing a
          double degree in BSc in Computing Technology (BSc) and
          Electrical Engineering (BASc). I&apos;m working in the layer where software meets
          silicon: signals, circuits, and the systems built on top of them.
        </p>
        <p>
        </p>
      </div>
      <dl className="flex h-fit flex-col gap-3 rounded-md border border-border bg-card p-5 font-tech text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">DEGREE</dt>
          <dd className="text-right">CS + EE</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">YEAR</dt>
          <dd className="text-right">3rd</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">MY BASES</dt>
          <dd className="text-right">Toronto · Ottawa</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">SPECIALIZATIONS</dt>
          <dd className="text-right">GPU Acceleration · AI/ML · Agentic AI</dd>
        </div>
      </dl>
    </div>
  );
}
