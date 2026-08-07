"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MousePointer2, Orbit } from "lucide-react";
import { SplineScene } from "@/components/ui/robot";
import { Spotlight } from "@/components/ui/spotlight";

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const SPECS = [
  { key: "RENDER", value: "WebGL · realtime" },
  { key: "RIG", value: "RB-07 / 6-axis" },
  { key: "INPUT", value: "pointer + drag" },
  { key: "BUILD", value: "shipped" },
];

export function RobotLab() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // The Spline runtime is a few hundred KB of WebGL — don't fetch it until the
  // band is nearly on screen.
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Interactive 3D robot"
      className="relative isolate overflow-hidden border-y border-border bg-card/40"
      style={{
        backgroundImage:
          "linear-gradient(oklch(0.27 0.018 262 / 0.45) 1px, transparent 1px), linear-gradient(90deg, oklch(0.27 0.018 262 / 0.45) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <Spotlight />

      {/* Corner registration marks, same language as the datasheet frames. */}
      <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-primary/50" />
      <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-primary/50" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-primary/50" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-primary/50" />

      <motion.div
        className="relative mx-auto grid w-full max-w-5xl items-center gap-8 px-6 py-20 md:grid-cols-[1fr_1.05fr] md:gap-4 md:py-24"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-tech text-xs tracking-[0.2em] text-primary">
              {"// LAB · RB-07"}
            </span>
            <span className="flex items-center gap-1.5 font-tech text-[10px] tracking-[0.15em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              ONLINE
            </span>
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Meet NAVA-BOT.
          </h2>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            The rapid adoption of AI into all facets of life can be difficult to grasp. Software can lose it's "fun" becoming
            more about numbers and results rather than about promoting human innovation. I'm on a mission to encourage innovation and promote
            human creativity through software, instead of having it replace us. Play around with the NAVA-BOT, and watch it follow your cursor!
          </p>

          <dl className="grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 font-tech text-sm">
            {SPECS.map((spec) => (
              <div key={spec.key} className="flex flex-col gap-1">
                <dt className="text-[10px] tracking-[0.15em] text-muted-foreground">
                  {spec.key}
                </dt>
                <dd className="text-foreground/90">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-4 font-tech text-[10px] tracking-[0.15em] text-muted-foreground/70">
            <span className="flex items-center gap-1.5">
              <MousePointer2 className="h-3 w-3 text-primary" strokeWidth={1.5} />
              MOVE TO TRACK
            </span>
            <span className="flex items-center gap-1.5">
              <Orbit className="h-3 w-3 text-primary" strokeWidth={1.5} />
              DRAG TO ORBIT
            </span>
          </div>
        </div>

        <div className="relative h-[340px] w-full md:h-[520px]">
          {/* Golden bloom behind the rig so it reads against the dark panel. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 inset-y-12 -z-10 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.82 0.15 92 / 0.14), transparent 65%)",
            }}
          />
          {reduce ? (
            <StaticRig />
          ) : (
            inView && <SplineScene scene={SCENE} onLoad={() => setLoaded(true)} />
          )}
          <span
            className="absolute bottom-0 left-0 font-tech text-[10px] tracking-[0.15em] text-muted-foreground/50"
            aria-live="polite"
          >
            {reduce ? "3D · PAUSED" : loaded ? "3D · RB-07.spline" : "3D · LOADING"}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/** Shown instead of the animated scene when the visitor prefers reduced motion. */
function StaticRig() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <Orbit className="h-10 w-10 text-primary/50" strokeWidth={1} />
        <span className="max-w-[16rem] font-tech text-[10px] leading-relaxed tracking-[0.15em] text-muted-foreground/70">
          ANIMATED SCENE DISABLED
          <br />
          REDUCED MOTION PREFERENCE DETECTED
        </span>
      </div>
    </div>
  );
}
