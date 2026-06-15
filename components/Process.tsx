"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section className="relative border-t border-bone/10 bg-ink-800/40 py-24 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-[var(--gutter)]">
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold">How we work</p>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.04] md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="noise-card group p-8 sm:p-9"
            >
              <span className="font-display text-2xl text-gold/70">{p.no}</span>
              <h3 className="mt-4 font-display text-xl text-bone">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
