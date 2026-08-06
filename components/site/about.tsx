export function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a third-year student at the University of Ottawa doing a
          double degree — a BSc in Computing Technology and a BASc in
          Electrical Engineering. I like the layer where software meets
          silicon: signals, circuits, and the systems built on top of them.
        </p>
        <p>
          Right now that means co-leading{" "}
          <span className="text-foreground">Atlas Tech Diodes</span>, a
          hardware cybersecurity project building low-cost unidirectional data
          diodes, and a student AI/ML role doing data-science support in
          Canada&apos;s defence sector.
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
          <dt className="text-muted-foreground">BASE</dt>
          <dd className="text-right">Ottawa, CA</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">FOCUS</dt>
          <dd className="text-right">HW security · AI/ML</dd>
        </div>
      </dl>
    </div>
  );
}
