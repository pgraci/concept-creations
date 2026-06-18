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
              high-end visuals and native, UGC-style content for social, digital, film
              and television.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone/70">
              Beyond production, we offer full-service social media management for brands and
              commercial clients — strategy, creative and community, handled end-to-end. Every
              production runs on top-quality cinema equipment and a full-service team of directors,
              DPs, producers, MUA, styling, location scouting and set design. It&apos;s the same
              standard across every content type, from social to screen.
            </p>
          </Reveal>
        </div>

        {/* Stats — editorial, hairline-divided */}
        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <dl className="border-t border-bone/12">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between gap-6 border-b border-bone/12 py-5"
                >
                  <dt className="order-2 max-w-[9rem] text-right text-sm leading-snug text-bone/50">
                    {s.label}
                  </dt>
                  <dd className="order-1 font-display text-4xl font-light tracking-tight text-bone sm:text-5xl">
                    {s.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-bone/35">
              A decade of work across spirits, hospitality, retail and food &amp; beverage — from
              boutique kitchens to household names.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
