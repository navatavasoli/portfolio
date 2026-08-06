export function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
      <div className="flex flex-col items-center justify-center gap-4 text-center text-base leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a third-year student at the University of Ottawa doing a
          double degree in BSc in Computing Technology (BSc) and
          Electrical Engineering (BASc). I&apos;m working in the layer where software meets
          silicon: signals, circuits, and the systems built on top of them.
        </p>
      </div>
      <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-6 rounded-md border border-border bg-card p-6 font-tech text-sm">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <dt className="text-xs tracking-wide text-muted-foreground">DEGREE</dt>
          <dd>CS + EE</dd>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <dt className="text-xs tracking-wide text-muted-foreground">YEAR</dt>
          <dd>3rd</dd>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <dt className="text-xs tracking-wide text-muted-foreground">MY BASES</dt>
          <dd>Toronto · Ottawa</dd>
        </div>
        <div className="col-span-2 flex flex-col items-center gap-1.5 text-center">
          <dt className="text-xs tracking-wide text-muted-foreground">SPECIALIZATIONS</dt>
          <dd>GPU Acceleration · AI/ML · Agentic AI</dd>
        </div>
      </dl>
    </div>
  );
}
