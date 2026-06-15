"use client";

import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { CLIENTS, type Client } from "@/lib/content";

function Wordmark({ c }: { c: Client }) {
  const base =
    "whitespace-nowrap text-bone/45 transition-colors duration-300 hover:text-bone";
  const type =
    c.style === "serif"
      ? "font-display font-medium tracking-tight"
      : c.style === "italic"
      ? "font-display italic font-light tracking-tight"
      : "font-sans font-extrabold uppercase tracking-[0.05em]";
  return (
    <span className={`inline-flex items-baseline gap-2 px-9 ${base}`}>
      <span className={`text-3xl sm:text-4xl ${type}`}>{c.name}</span>
      <span className="hidden text-[0.6rem] uppercase tracking-[0.25em] text-bone/25 sm:inline">
        {c.tag}
      </span>
    </span>
  );
}

export default function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clients" className="relative py-28 sm:py-36">
      <div className="mx-auto mb-16 max-w-[1500px] px-[var(--gutter)]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">In good company</p>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Trusted by brands across the island."
              highlight="island."
              className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-bone"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm text-bone/55">
              From spirits and seafood to coffee and hospitality — a decade of work, in one
              monochrome line.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Row 1 */}
      <div className="edge-fade overflow-hidden border-y border-bone/10 py-9">
        <div className="flex w-max animate-marquee items-center">
          {row.map((c, i) => (
            <Wordmark key={`a${i}`} c={c} />
          ))}
        </div>
      </div>

      {/* Row 2 — reversed */}
      <div className="edge-fade overflow-hidden border-b border-bone/10 py-9">
        <div className="flex w-max animate-marquee-slow items-center [animation-direction:reverse]">
          {row
            .slice()
            .reverse()
            .map((c, i) => (
              <Wordmark key={`b${i}`} c={c} />
            ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1500px] px-[var(--gutter)]">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-bone/30">
            Appleton Estate · Starbucks · MegaMart · Rainforest Seafoods · CPJ · Buzo · Konnexx ·
            Bird Shack · Edge Chem
          </p>
        </Reveal>
      </div>
    </section>
  );
}
