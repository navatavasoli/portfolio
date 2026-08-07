import Link from "next/link";

const links = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#terminal", label: "TERMINAL" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#contact", label: "WORK WITH ME" },
  { href: "/#blog", label: "BLOG" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="group font-tech text-sm text-foreground">
          <span className="mr-2 border border-primary/60 px-1.5 py-0.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            NT
          </span>
          © nava tavasoli 2026
        </Link>
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative font-tech text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <a
            href="https://github.com/navatavasoli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.69 1.24 3.34.95.1-.75.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 2.88-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
