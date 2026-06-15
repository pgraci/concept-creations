"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import HoverVideo from "./HoverVideo";
import { SITE } from "@/lib/content";

const DELIVERABLES = [
  { k: "Strategy", v: "Always-on content calendar" },
  { k: "Content", v: "Fresh original social & ads" },
  { k: "Production", v: "In-house shoots, weekly" },
  { k: "Channel", v: "Full account management" },
];

const RESULTS = [
  { value: "Daily", label: "Original content cadence" },
  { value: "2×", label: "Social + paid ad creative" },
  { value: "100%", label: "Jamaican coconut water" },
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-y border-bone/10 bg-gradient-to-b from-ink-800/60 to-ink py-28 sm:py-36"
    >
      {/* warm sun glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-sun/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px] px-[var(--gutter)]">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold">Case study · Social media management</p>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal y={40}>
              <HoverVideo
                src="/videos/sunjuice-square.mp4"
                poster="/posters/sunjuice-square.jpg"
                label="Sun Juice JA"
                category="Social content & ads"
                landscape={false}
                className="mx-auto aspect-[9/16] w-full max-w-[22rem]"
              />
            </Reveal>

            <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.04]">
              {RESULTS.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="noise-card p-5 text-center"
                >
                  <div className="font-display text-2xl text-gold-gradient sm:text-3xl">{r.value}</div>
                  <div className="mt-1 text-[0.7rem] leading-snug text-bone/55">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <AnimatedHeading
              text="Sun Juice JA — Jamaica's coconut water, made unmissable."
              highlight="unmissable."
              className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light leading-[1.06] tracking-[-0.01em] text-bone display-balance"
            />

            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-bone/70">
                We run Sun Juice JA end-to-end — strategy, production and publishing. Every week we
                create fresh, original content built for two jobs at once: thumb-stopping social
                that grows the community, and conversion-focused ad creative that sells the bottle.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6">
                {DELIVERABLES.map((d) => (
                  <div key={d.k} className="border-l border-gold/40 pl-4">
                    <div className="eyebrow text-gold/80">{d.k}</div>
                    <div className="mt-1.5 text-bone/80">{d.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.sunjuiceInstagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-bone/25 px-5 py-3 text-sm font-semibold text-bone transition hover:border-gold hover:text-gold"
                >
                  <InstagramIcon /> @sunjuiceja
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
                >
                  Want this for your brand? →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" />
    </svg>
  );
}
