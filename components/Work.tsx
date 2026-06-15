"use client";

import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import HoverVideo from "./HoverVideo";
import { WORK } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-[1500px] px-[var(--gutter)] py-28 sm:py-36">
      <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p className="eyebrow text-gold">Selected work</p>
            </div>
          </Reveal>
          <AnimatedHeading
            text="The reel speaks. Lean in to listen."
            highlight="listen."
            className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone"
          />
        </div>
        <Reveal delay={0.15}>
          <p className="max-w-xs text-sm text-bone/55">
            Each piece autoplays muted. Hover for sound — click to play fullscreen.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {WORK.map((w, i) => (
          <Reveal key={w.title} y={40} delay={i * 0.08}>
            <HoverVideo
              src={w.src}
              poster={w.poster}
              label={w.title}
              category={w.category}
              year={w.year}
              landscape={w.orientation === "landscape"}
              className="aspect-[9/16] w-full"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
