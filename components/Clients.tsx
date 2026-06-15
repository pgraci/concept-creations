"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { CLIENTS, type Client } from "@/lib/content";

function Wordmark({ c }: { c: Client }) {
  const type =
    c.style === "serif"
      ? "font-display font-medium tracking-tight"
      : c.style === "italic"
      ? "font-display italic font-light tracking-tight"
      : "font-sans font-extrabold uppercase tracking-[0.05em]";
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 text-center">
      <span
        className={`text-2xl text-bone/55 transition-colors duration-300 hover:text-bone sm:text-3xl ${type}`}
      >
        {c.name}
      </span>
      <span className="text-[0.6rem] uppercase tracking-[0.25em] text-bone/25">{c.tag}</span>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-[var(--gutter)]">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">In good company</p>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Trusted by brands across the island."
              highlight="island."
              className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm text-bone/55">
              From spirits and seafood to coffee and hospitality — a decade of work, in good
              company.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/[0.04] sm:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="noise-card flex items-center justify-center"
            >
              <Wordmark c={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
