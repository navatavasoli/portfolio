"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A red-to-blue glow that trails the cursor across the nearest positioned ancestor.
 * Listens on the parent element rather than itself so it keeps tracking while
 * the pointer is over content stacked above it (text, buttons, a WebGL canvas).
 */
export function Spotlight({
  className,
  size = 560,
}: {
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 22 });
  const opacity = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });
  const transform = useMotionTemplate`translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host || reduce) return;

    const move = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      opacity.set(1);
    };
    const leave = () => opacity.set(0);

    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y, opacity]);

  if (reduce) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute left-0 top-0 blur-2xl", className)}
      style={{
        width: size,
        height: size,
        transform,
        opacity,
        background:
          "radial-gradient(circle at center, oklch(0.62 0.22 27 / 0.18), oklch(0.5 0.16 258 / 0.1) 45%, transparent 70%)",
      }}
    />
  );
}
