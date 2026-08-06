import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function MediaFrame({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-md border border-border bg-card",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(oklch(0.27 0.018 262 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.27 0.018 262 / 0.5) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-primary/60" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-primary/60" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary/60" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary/60" />
      <Icon className="h-8 w-8 text-muted-foreground/40" strokeWidth={1.25} />
      <span className="absolute bottom-2 left-2 font-tech text-[10px] tracking-[0.15em] text-muted-foreground/60">
        {label}
      </span>
    </div>
  );
}
