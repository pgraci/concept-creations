"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Splits a string into words and reveals each on a spring as it enters view.
 */
export default function AnimatedHeading({
  text,
  className,
  highlight,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  /** word(s) to render in the gold gradient */
  highlight?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const highlightWords = new Set((highlight ?? "").split(" ").filter(Boolean));

  const MotionTag = Tag === "h1" ? motion.h1 : Tag === "h3" ? motion.h3 : motion.h2;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${highlightWords.has(word) ? "text-gold-gradient italic" : ""}`}
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      )) as ReactNode}
    </MotionTag>
  );
}
