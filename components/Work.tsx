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
            Every piece autoplays muted. Hover — or tap on mobile — to bring up the sound.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7" y={40}>
          <HoverVideo
            src={WORK[1].src}
            poster={WORK[1].poster}
            label={WORK[1].title}
            category={WORK[1].category}
            year={WORK[1].year}
            className="aspect-[16/10] h-full w-full"
          />
        </Reveal>

        <Reveal className="lg:col-span-5" y={40} delay={0.1}>
          <HoverVideo
            src={WORK[2].src}
            poster={WORK[2].poster}
            label={WORK[2].title}
            category={WORK[2].category}
            year={WORK[2].year}
            className="aspect-square h-full w-full"
          />
        </Reveal>

        <Reveal className="lg:col-span-12" y={40} delay={0.05}>
          <HoverVideo
            src={WORK[0].src}
            poster={WORK[0].poster}
            label={WORK[0].title}
            category={WORK[0].category}
            year={WORK[0].year}
            className="aspect-[21/9] h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
