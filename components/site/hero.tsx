"use client";

import { ArrowUpRight, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/site/media-frame";
import { Typewriter } from "@/components/ui/typewriter";

const ROLES = ["developer", "engineer", "speaker", "researcher"];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-5xl gap-10 px-6 pb-16 pt-40 md:grid-cols-[1.3fr_1fr] md:items-center md:pb-24 md:pt-48"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6">
          <span className="font-tech text-xs tracking-[0.2em] text-primary">
            CS + EE · UNIVERSITY OF OTTAWA
          </span>
          <h1 className="font-signature bg-gradient-to-r from-foreground to-primary bg-clip-text text-5xl font-bold uppercase tracking-tight text-transparent md:text-7xl">
            Nava Tavasoli
          </h1>
          <p className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            I&apos;m a <Typewriter words={ROLES} className="text-primary" />
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hardware security, signal processing, and applied AI/ML —
            building at the layer where software meets silicon.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="group gap-2 font-tech transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="#projects">
                View Projects{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-tech transition-all hover:-translate-y-0.5 hover:border-primary/60"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <MediaFrame
          label="IMG · NT-01"
          icon={UserRound}
          src="/headshot.png"
          alt="Nava Tavasoli"
          className="aspect-square w-full max-w-xs justify-self-center md:justify-self-end"
        />
      </motion.div>
    </section>
  );
}
