import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// EDIT-ME: real email + LinkedIn URL below.
const EMAIL = "you@example.com";
const LINKEDIN = "https://www.linkedin.com/in/YOUR-HANDLE";

export function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
        Get in touch
      </h3>
      <p className="max-w-lg text-muted-foreground">
        Open to internships, research collaborations, and interesting hardware
        or AI/ML problems. The fastest channel is email.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button size="lg" className="gap-2 font-tech" asChild>
          <a href={`mailto:${EMAIL}`}>
            <Mail className="h-4 w-4" /> Email me
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2 font-tech" asChild>
          <a href="https://github.com/navatavasoli" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2 font-tech" asChild>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <p className="border-t border-border pt-6 font-tech text-xs text-muted-foreground">
        © 2026 NAVA TAVASOLI · BUILT WITH NEXT.JS · DATASHEET REV 3.0
      </p>
    </div>
  );
}
