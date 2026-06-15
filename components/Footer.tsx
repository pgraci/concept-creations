"use client";

import Image from "next/image";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 bg-ink-800/50">
      {/* Big wordmark */}
      <div className="mx-auto max-w-[1500px] px-[var(--gutter)] pt-20">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="group block"
          aria-label="Concept Creations on Instagram"
        >
          <p className="font-display text-[clamp(2.4rem,9vw,8.5rem)] font-light leading-none tracking-[-0.02em] text-bone/90 transition-colors duration-500 group-hover:text-gold">
            Let&apos;s make
            <br />
            <span className="italic">something worth watching.</span>
          </p>
        </a>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-gold-light"
        >
          Start a project <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mx-auto mt-20 max-w-[1500px] px-[var(--gutter)] pb-10">
        <div className="flex flex-col gap-8 border-t border-bone/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/brand/logo.png"
            alt="Concept Creations"
            width={200}
            height={54}
            className="h-10 w-auto max-w-[200px] shrink-0 self-start object-contain"
          />

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-bone/60">
            <a href="#work" className="hover:text-gold">Work</a>
            <a href="#case-study" className="hover:text-gold">Case Studies</a>
            <a href="#clients" className="hover:text-gold">Clients</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition hover:border-gold hover:text-gold"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-bone/10 pt-8 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Concept Creations. Boutique content &amp; storytelling — {SITE.city}.</p>
          <p className="flex items-center gap-2">
            Crafted in Jamaica <span className="text-gold">✦</span> Made to be watched
          </p>
        </div>
      </div>
    </footer>
  );
}
