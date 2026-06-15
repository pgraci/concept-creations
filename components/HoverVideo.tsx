"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  src: string;
  poster: string;
  className?: string;
  rounded?: string;
  label?: string;
  category?: string;
  year?: string;
};

/**
 * Autoplays muted in the viewport. On hover (or focus / tap) it unmutes and
 * raises the volume; on leave it fades back to muted. A small audio indicator
 * tells the user sound is available.
 */
export default function HoverVideo({
  src,
  poster,
  className = "",
  rounded = "rounded-2xl",
  label,
  category,
  year,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audible, setAudible] = useState(false);

  const enable = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 0;
    // Ensure playback continues after the muted-autoplay → audible switch.
    const p = v.play();
    if (p && typeof p.then === "function") p.catch(() => {});
    setAudible(true);
    // Gentle fade-in of volume.
    let vol = 0;
    const id = window.setInterval(() => {
      vol = Math.min(1, vol + 0.12);
      if (v) v.volume = vol;
      if (vol >= 1) window.clearInterval(id);
    }, 30);
    v.dataset.fade = String(id);
  }, []);

  const disable = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.dataset.fade) window.clearInterval(Number(v.dataset.fade));
    v.muted = true;
    setAudible(false);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden ${rounded} ${className}`}
      onMouseEnter={enable}
      onMouseLeave={disable}
      onFocus={enable}
      onBlur={disable}
      onTouchStart={() => (audible ? disable() : enable())}
      tabIndex={0}
      role="group"
      aria-label={label ? `${label} — hover to listen` : "Showreel video, hover to listen"}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        src={src}
        poster={poster}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
      />

      {/* cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bone/10 transition group-hover:ring-gold/40" />

      {/* audio indicator */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-bone/15 bg-ink/55 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-bone/80 backdrop-blur-md">
        <AnimatePresence mode="wait" initial={false}>
          {audible ? (
            <motion.span
              key="on"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-gold"
            >
              <Equalizer /> Sound on
            </motion.span>
          ) : (
            <motion.span
              key="off"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5"
            >
              <Muted /> Hover for sound
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* caption */}
      {(label || category) && (
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div>
            {category && (
              <p className="eyebrow mb-1 text-gold/90">{category}</p>
            )}
            {label && (
              <h3 className="font-display text-xl leading-tight text-bone sm:text-2xl">{label}</h3>
            )}
          </div>
          {year && (
            <span className="shrink-0 font-display text-sm text-bone/60">{year}</span>
          )}
        </div>
      )}
    </div>
  );
}

function Equalizer() {
  return (
    <span className="flex h-3 items-end gap-[2px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[2px] rounded-full bg-gold"
          animate={{ height: ["35%", "100%", "55%", "85%", "40%"] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          style={{ height: "50%" }}
        />
      ))}
    </span>
  );
}

function Muted() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-80">
      <path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor" />
      <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
