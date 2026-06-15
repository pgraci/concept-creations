"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative border-t border-bone/10 bg-ink-800/40 py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-[var(--gutter)]">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">What we do</p>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Four ways we make brands move."
              highlight="move."
              className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-bone/60">
              One studio, end-to-end — from the first concept to the last post. Pick a single film,
              a content series, or hand us the whole channel.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/[0.04] sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="noise-card group relative overflow-hidden p-8 transition-colors duration-500 hover:bg-bone/[0.06] sm:p-12"
            >
              <div className="absolute right-8 top-8 font-display text-5xl text-bone/10 transition-colors duration-500 group-hover:text-gold/30">
                {s.no}
              </div>

              <h3 className="font-display text-2xl text-bone sm:text-3xl">{s.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-bone/65">{s.blurb}</p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-bone/12 px-3.5 py-1.5 text-xs text-bone/65 transition group-hover:border-gold/30 group-hover:text-bone/85"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
