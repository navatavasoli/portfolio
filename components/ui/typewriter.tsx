"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 300;

type Phase = "typing" | "deleting";

export function Typewriter({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (reduce) return;

    const word = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < word.length) {
        const timeout = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(
        () => setText(text.slice(0, -1)),
        DELETE_SPEED
      );
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, PAUSE_AFTER_DELETE);
    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, reduce]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {reduce ? words[0] : text}
      <span
        aria-hidden="true"
        className="ml-0.5 h-[0.9em] w-[2px] animate-pulse bg-primary"
      />
    </span>
  );
}
