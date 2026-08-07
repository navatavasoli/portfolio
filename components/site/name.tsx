"use client";

import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Letter = {
  char: string;
  d: string;
};

// Single-stroke script (Hershey "Script 1-stroke") so each letter draws like a
// pen stroke, the same technique as the Apple "hello" effect this is based on.
const LETTERS: Letter[] = [
  { char: "N", d: "M189 559 L126 528 L94.5 464 L94.5 433 L126 370 L189 338 L220 338 L284 370 L315 433 L315 496 L284 654 L252 780 L189 1000 M252 780 L346 528 L410 402 L441 370 L504 338 L567 338 L630 370 L662 433 L662 496 L630 654 L567 874 L567 968.5 L598 1000 L630 1000 L693 968.5 L724 937 L788 842" },
  { char: "a", d: "M1071 811 L1040 748 L976 716 L914 716 L850.5 748 L819 780 L787.5 842 L787.5 905.5 L819 968.5 L882 1000 L945 1000 L1008 968.5 L1040 905.5 L1102 716 L1071 874 L1071 968.5 L1102 1000 L1134 1000 L1197 968.5 L1228 937 L1292 842" },
  { char: "v", d: "M1291.5 842 L1354.5 716 L1323 874 L1323 968.5 L1354.5 1000 L1386 1000 L1480 968.5 L1544 905.5 L1575 811 L1575 716 M1575 716 L1606 842 L1638 874 L1701 874 L1764 842" },
  { char: "a", d: "M2047 811 L2016 748 L1952 716 L1890 716 L1826.5 748 L1795 780 L1763.5 842 L1763.5 905.5 L1795 968.5 L1858 1000 L1921 1000 L1984 968.5 L2016 905.5 L2078 716 L2047 874 L2047 968.5 L2078 1000 L2110 1000 L2173 968.5 L2204 937 L2268 842" },
  { char: "T", d: "M2960 528 L2898 528 L2834 496 L2803 433 L2834 370 L2929 338 L3024 338 L3150 370 L3244 370 L3307 338 M3150 370 L3086 590 L3024 780 L2960 905.5 L2898 968.5 L2834 1000 L2772 1000 L2708.5 968.5 L2677 905.5 L2677 842 L2708.5 811 L2772 811 L2834 842" },
  { char: "a", d: "M3527 811 L3496 748 L3432 716 L3370 716 L3306.5 748 L3275 780 L3243.5 842 L3243.5 905.5 L3275 968.5 L3338 1000 L3401 1000 L3464 968.5 L3496 905.5 L3558 716 L3527 874 L3527 968.5 L3558 1000 L3590 1000 L3653 968.5 L3684 937 L3748 842" },
  { char: "v", d: "M3747.5 842 L3810.5 716 L3779 874 L3779 968.5 L3810.5 1000 L3842 1000 L3936 968.5 L4000 905.5 L4031 811 L4031 716 M4031 716 L4062 842 L4094 874 L4157 874 L4220 842" },
  { char: "a", d: "M4503 811 L4472 748 L4408 716 L4346 716 L4282.5 748 L4251 780 L4219.5 842 L4219.5 905.5 L4251 968.5 L4314 1000 L4377 1000 L4440 968.5 L4472 905.5 L4534 716 L4503 874 L4503 968.5 L4534 1000 L4566 1000 L4629 968.5 L4660 937 L4724 842" },
  { char: "s", d: "M4723.5 842 L4786.5 748 L4818 685 L4818 748 L4881 842 L4912 905.5 L4912 968.5 L4850 1000 M4723.5 968.5 L4786.5 1000 L4912 1000 L4976 968.5 L5007 937 L5070 842" },
  { char: "o", d: "M5258 716 L5196 716 L5132.5 748 L5101 780 L5069.5 842 L5069.5 905.5 L5101 968.5 L5164 1000 L5227 1000 L5290 968.5 L5322 937 L5353 874 L5353 811 L5322 748 L5258 716 L5227 748 L5227 811 L5258 874 L5322 905.5 L5416 905.5 L5479 874 L5510 842" },
  { char: "l", d: "M5510.5 842 L5573.5 748 L5668 590 L5699 528 L5731 433 L5731 370 L5699 338 L5637 370 L5605 433 L5573.5 559 L5542 780 L5542 968.5 L5573.5 1000 L5605 1000 L5668 968.5 L5699 937 L5763 842" },
  { char: "i", d: "M5857 559 L5857 590 L5889 590 L5889 559 L5857 559 M5762.5 842 L5825.5 716 L5762.5 905.5 L5762.5 968.5 L5794 1000 L5825.5 1000 L5889 968.5 L5920 937 L5983 842" },
];

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function NameSignature({ className, speed = 1, onAnimationComplete, ...props }: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-14 md:h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 270 6020 800"
      fill="none"
      stroke="currentColor"
      strokeWidth="58"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Nava Tavasoli</title>
      {LETTERS.map(({ d }, i) => {
        const delay = calc(i * 0.18);
        const isLast = i === LETTERS.length - 1;
        return (
          <motion.path
            key={i}
            d={d}
            style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
            initial={initialProps}
            animate={animateProps}
            transition={{
              duration: calc(0.5),
              ease: "easeInOut",
              delay,
              opacity: { duration: calc(0.25), delay },
            }}
            onAnimationComplete={isLast ? onAnimationComplete : undefined}
          />
        );
      })}
    </motion.svg>
  );
}

export { NameSignature };
