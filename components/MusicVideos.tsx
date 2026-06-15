"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { MUSIC_VIDEOS, type MusicVideo } from "@/lib/content";

const TINTS: Record<MusicVideo["tint"], string> = {
  gold: "from-gold/20 via-ink-700 to-ink-900",
  coral: "from-coral/20 via-ink-700 to-ink-900",
  jade: "from-jade/25 via-ink-700 to-ink-900",
};

function Slot({ v, i }: { v: MusicVideo; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-video overflow-hidden rounded-xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${TINTS[v.tint]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(244,241,234,0.07),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(0deg,#fff_0_1px,transparent_1px_3px)]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-bone/10 transition duration-500 group-hover:ring-gold/40" />

      {/* index + upcoming label */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <span className="font-display text-sm font-light text-bone/40">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-bone/45">Upcoming</span>
      </div>

      {/* play */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-bone/25 text-bone/80 transition duration-500 group-hover:scale-110 group-hover:border-gold group-hover:text-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5">
        <div>
          <h3 className="font-display text-xl font-light leading-tight text-bone sm:text-2xl">
            {v.artist}
          </h3>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-bone/45">{v.scope}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function MusicVideos() {
  return (
    <section id="music-videos" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-gold/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-[var(--gutter)]">
        {/* Header */}
        <div className="mb-16 grid gap-8 border-b border-bone/12 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">Music video production</p>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Music videos, shot on location in Jamaica."
              highlight="Jamaica."
              className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone display-balance"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.12}>
              <p className="text-base leading-relaxed text-bone/65">
                We produce music videos for both local celebrities and international talent — shot on
                location across the island, with the same cinema-grade kit and full-service crew
                behind every Concept Creations production.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-light"
              >
                Plan a music video <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* 16:9 slots */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MUSIC_VIDEOS.map((v, i) => (
            <Slot key={v.artist} v={v} i={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-xs text-bone/30">
            Featured music videos coming soon — slots reserved for upcoming releases.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
