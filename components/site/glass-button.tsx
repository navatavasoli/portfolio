import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(
  "relative isolate all-unset cursor-pointer rounded-full transition-all",
  {
    variants: {
      size: {
        default: "text-base font-medium",
        sm: "text-sm font-medium",
        lg: "text-lg font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative inline-flex select-none items-center gap-1.5 tracking-tighter",
  {
    variants: {
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "flex h-10 w-10 items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
  /** Renders the button as a real `<a>` tag pointing at this URL. */
  href?: string;
  target?: string;
  rel?: string;
}

const GlassButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GlassButtonProps
>(({ className, children, size, contentClassName, href, ...props }, ref) => {
  const Comp = (href ? "a" : "button") as React.ElementType;

  return (
    <div
      className={cn(
        "glass-button-wrap cursor-pointer rounded-full",
        className
      )}
    >
      <Comp
        className={cn("glass-button", glassButtonVariants({ size }))}
        href={href}
        ref={ref}
        {...props}
      >
        <span
          className={cn(glassButtonTextVariants({ size }), contentClassName)}
        >
          {children}
        </span>
      </Comp>
      <div className="glass-button-shadow rounded-full"></div>
    </div>
  );
});
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };