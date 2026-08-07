import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "nava.tavasoli@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/nava-tavasoli/";

export function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Get in touch
      </h3>
      <p className="font-subtext max-w-lg text-muted-foreground">
        I'm currently open to internship opportunities for Summer 2027.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          size="lg"
          className="gap-2 font-tech transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          asChild
        >
          <a href={`mailto:${EMAIL}`}>
            <Mail className="h-4 w-4" /> Email me
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="group gap-2 font-tech transition-all hover:-translate-y-0.5 hover:border-primary/60"
          asChild
        >
          <a href="https://github.com/navatavasoli" target="_blank" rel="noopener noreferrer">
            GitHub{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="group gap-2 font-tech transition-all hover:-translate-y-0.5 hover:border-primary/60"
          asChild
        >
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </div>
      <p className="border-t border-border pt-6 font-tech text-xs text-muted-foreground">
        © 2026 NAVA TAVASOLI · BUILT WITH PASSION  
      </p>
    </div>
  );
}
