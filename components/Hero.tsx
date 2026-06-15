"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yMedia = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scaleMedia = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const line1 = "Stories worth".split(" ");
  const line2 = "watching.".split(" ");

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background reel */}
      <motion.div style={{ y: yMedia, scale: scaleMedia }} className="absolute inset-0 h-full w-full">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-bg.mp4"
          poster="/posters/reel.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(201,162,75,0.18),transparent_55%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-[var(--gutter)] pb-[10vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          <p className="eyebrow text-gold">{SITE.tagline}</p>
        </motion.div>

        <h1 className="font-display text-[clamp(3.2rem,12vw,11rem)] font-light leading-[0.92] tracking-[-0.02em] text-bone">
          <span className="block overflow-hidden">
            {line1.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.4 + i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {line2.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block italic text-gold-gradient"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.6 + i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
            A boutique content &amp; storytelling studio in {SITE.city}. We make premium and
            UGC-style content for social, film &amp; television — and run social media for the
            brands we love.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
            >
              Book a consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-sm font-semibold text-bone transition hover:border-gold hover:text-gold"
            >
              <PlayIcon /> Watch the reel
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-bone/50">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-bone/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
