"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

export type LightboxItem = {
  src: string;
  poster?: string;
  title?: string;
  category?: string;
  /** Hint that the source is landscape, so it rotates to fill portrait mobile. */
  landscape?: boolean;
};

type OpenFn = (item: LightboxItem) => void;

const LightboxContext = createContext<OpenFn>(() => {});
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const open = useCallback<OpenFn>((it) => setItem(it), []);
  const close = useCallback(() => setItem(null), []);

  useEffect(() => {
    if (!item) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>{item && <Modal item={item} onClose={close} />}</AnimatePresence>
    </LightboxContext.Provider>
  );
}

function Modal({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Unmute + play once the source is ready.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const start = () => {
      v.volume = 1;
      v.muted = false;
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    };
    if (v.readyState >= 1) start();
    v.addEventListener("loadedmetadata", start);
    return () => v.removeEventListener("loadedmetadata", start);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title ? `${item.title} — video player` : "Video player"}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-ink/50 text-bone/80 backdrop-blur-md transition hover:border-gold hover:text-gold sm:right-6 sm:top-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Caption */}
      {item.title && (
        <div className="absolute left-4 top-5 z-20 sm:left-8 sm:top-7">
          {item.category && <p className="eyebrow mb-1 text-gold/90">{item.category}</p>}
          <h3 className="font-display text-xl text-bone sm:text-2xl">{item.title}</h3>
        </div>
      )}

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-[min(92vw,1400px)] items-center justify-center"
      >
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          loop
          playsInline
          className="max-h-[90vh] w-full rounded-xl object-contain shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
