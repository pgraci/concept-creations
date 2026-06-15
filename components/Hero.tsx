"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/content";
import { useLightbox } from "./Lightbox";
import { useIntroReady } from "./Intro";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};
const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const lineUp = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const openLightbox = useLightbox();
  const ready = useIntroReady();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMedia = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scaleMedia = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-32%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const animateState = ready ? "show" : "hidden";

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

      {/* Scroll-parallax wrapper */}
      <motion.div
        style={{ y: yText, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-[var(--gutter)] pb-[10vh]"
      >
        {/* Build-in container */}
        <motion.div variants={container} initial="hidden" animate={animateState}>
          <motion.div variants={fadeUp} className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <p className="eyebrow text-gold">{SITE.tagline}</p>
          </motion.div>

          <motion.h1
            variants={headline}
            className="font-display text-[clamp(3.2rem,10.8vw,9.9rem)] font-light uppercase leading-[0.95] tracking-[-0.01em] text-bone"
          >
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span variants={lineUp} className="block will-change-transform">
                Stories worth
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span variants={lineUp} className="block italic text-gold-gradient will-change-transform">
                Watching.
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
              Concept Creations is a boutique content production &amp; storytelling studio in{" "}
              {SITE.city}. We make premium and UGC-style content for social, film &amp; television —
              and run social media for the brands we love.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
              >
                Book a consultation
                <span aria-hidden>→</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  openLightbox({
                    src: "/videos/reel.mp4",
                    poster: "/posters/reel.jpg",
                    title: "Corporate Reel",
                    category: "Brand Film · Showreel",
                    landscape: false,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3 text-sm font-semibold text-bone transition hover:border-gold hover:text-gold"
              >
                <PlayIcon /> Watch the reel
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
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
