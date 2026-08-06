"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-16 md:py-24"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-tech text-xs font-medium tracking-[0.2em] text-primary">
          {index} · {title}
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>
      {children}
    </motion.section>
  );
}
