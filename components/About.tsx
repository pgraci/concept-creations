"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { STATS } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1500px] px-[var(--gutter)] py-28 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p className="eyebrow text-gold">Who we are</p>
            </div>
          </Reveal>

          <AnimatedHeading
            as="h2"
            text="We turn brands into stories people actually want to watch."
            highlight="stories"
            className="font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone display-balance"
          />

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/70">
              Concept Creations is a boutique content and storytelling studio based in Kingston,
              Jamaica. We sit at the intersection of cinema and the scroll — crafting premium,
              high-end visuals and native, UGC-style content for social, digital, film and
              television.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone/70">
              Beyond production, we offer full-service social media management for brands and
              commercial clients — strategy, creative and community, handled end-to-end.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.04]">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="noise-card relative flex flex-col gap-2 p-7 sm:p-9"
              >
                <span className="font-display text-4xl text-gold-gradient sm:text-5xl">{s.value}</span>
                <span className="text-sm text-bone/60">{s.label}</span>
              </motion.div>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-6 px-1 text-sm leading-relaxed text-bone/45">
              Recovered from a decade of work across spirits, hospitality, retail and food &amp;
              beverage — from boutique kitchens to household names.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
