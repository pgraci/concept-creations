"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const IntroContext = createContext(true);
/** True once the opening sequence has finished and the site is revealed. */
export const useIntroReady = () => useContext(IntroContext);

const EASE = [0.16, 1, 0.3, 1] as const;

export function IntroProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"logo" | "fade" | "done">("logo");
  const ready = phase === "done";

  useEffect(() => {
    if (reduce) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("fade"), 3000); // hold logo ~3s
    const t2 = setTimeout(() => setPhase("done"), 3650); // logo faded to black → reveal
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduce]);

  // Lock scroll (and pin to top) until the site is revealed.
  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <IntroContext.Provider value={ready}>
      <AnimatePresence>
        {!ready && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: phase === "logo" ? 1 : 0,
                scale: phase === "logo" ? 1 : 1.03,
              }}
              transition={{ duration: 0.9, ease: EASE }}
              className="px-10"
            >
              <Image
                src="/brand/logo.png"
                alt="Concept Creations"
                width={560}
                height={151}
                priority
                className="h-14 w-auto sm:h-20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
