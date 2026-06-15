"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { SITE } from "@/lib/content";

type Intent = "call" | "quote";

const SCOPES = [
  { id: "single", label: "One video", hint: "A single hero piece" },
  { id: "multiple", label: "Multiple videos", hint: "A content series" },
  { id: "ugc", label: "UGC content", hint: "Native, creator-led" },
  { id: "social", label: "Full social management", hint: "We run the channel" },
];

const TIMES = ["Morning", "Midday", "Afternoon", "Evening"];

const inputBase =
  "w-full rounded-xl border border-bone/15 bg-bone/[0.03] px-4 py-3.5 text-bone placeholder:text-bone/35 outline-none transition focus:border-gold/60 focus:bg-bone/[0.05]";
const labelBase = "mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-bone/55";

export default function Contact() {
  const [intent, setIntent] = useState<Intent>("call");
  const [scope, setScope] = useState("multiple");
  const [time, setTime] = useState("Morning");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.intent = intent;
    payload.scope = scope;
    if (intent === "call") payload.timePreference = time;
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-[var(--gutter)]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">Let&apos;s create</p>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Book a call. Or request a quote."
              highlight="quote."
              className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1.04] tracking-[-0.01em] text-bone"
            />
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-bone/70">
                Tell us about the brand and what you have in mind — a single video, a full series,
                or someone to run the whole channel. We&apos;ll come back within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 space-y-5">
                <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition group-hover:border-gold group-hover:text-gold">
                    <MailIcon />
                  </span>
                  <span className="text-bone/80 transition group-hover:text-bone">{SITE.email}</span>
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition group-hover:border-gold group-hover:text-gold">
                    <IgIcon />
                  </span>
                  <span className="text-bone/80 transition group-hover:text-bone">
                    {SITE.instagramHandle}
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70">
                    <PinIcon />
                  </span>
                  <span className="text-bone/80">{SITE.city}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form card */}
          <div className="lg:col-span-7">
            <Reveal y={40}>
              <div className="noise-card rounded-3xl border border-bone/12 p-6 sm:p-9">
                <AnimatePresence mode="wait">
                  {status === "done" ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink">
                        <CheckIcon />
                      </div>
                      <h3 className="mt-6 font-display text-3xl text-bone">
                        {intent === "call" ? "Call requested." : "Quote on the way."}
                      </h3>
                      <p className="mt-3 max-w-sm text-bone/60">
                        Thank you — we&apos;ve got your details and we&apos;ll be in touch within one
                        business day to lock things in.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        ← Send another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Intent toggle */}
                      <div className="relative grid grid-cols-2 gap-1 rounded-full border border-bone/12 bg-ink-700/60 p-1">
                        <button
                          type="button"
                          onClick={() => setIntent("call")}
                          className={`relative z-10 rounded-full py-2.5 text-sm font-semibold transition ${
                            intent === "call" ? "text-ink" : "text-bone/60 hover:text-bone"
                          }`}
                        >
                          Book a consultation
                        </button>
                        <button
                          type="button"
                          onClick={() => setIntent("quote")}
                          className={`relative z-10 rounded-full py-2.5 text-sm font-semibold transition ${
                            intent === "quote" ? "text-ink" : "text-bone/60 hover:text-bone"
                          }`}
                        >
                          Request a quote
                        </button>
                        <motion.span
                          layout
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-gold"
                          style={{ left: intent === "call" ? "0.25rem" : "calc(50% + 0rem)" }}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelBase} htmlFor="name">
                            Your name
                          </label>
                          <input id="name" name="name" required className={inputBase} placeholder="Jane Brown" />
                        </div>
                        <div>
                          <label className={labelBase} htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className={inputBase}
                            placeholder="you@brand.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelBase} htmlFor="brand">
                            Brand / company
                          </label>
                          <input id="brand" name="brand" className={inputBase} placeholder="Brand name" />
                        </div>
                        <div>
                          <label className={labelBase} htmlFor="socials">
                            Social accounts
                          </label>
                          <input
                            id="socials"
                            name="socials"
                            className={inputBase}
                            placeholder="@instagram, @tiktok…"
                          />
                        </div>
                      </div>

                      {/* Scope selector */}
                      <div>
                        <label className={labelBase}>What are you looking for?</label>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {SCOPES.map((s) => (
                            <button
                              type="button"
                              key={s.id}
                              onClick={() => setScope(s.id)}
                              className={`rounded-xl border px-3 py-3 text-left transition ${
                                scope === s.id
                                  ? "border-gold/70 bg-gold/10"
                                  : "border-bone/12 bg-bone/[0.02] hover:border-bone/30"
                              }`}
                            >
                              <span
                                className={`block text-sm font-semibold ${
                                  scope === s.id ? "text-gold" : "text-bone/85"
                                }`}
                              >
                                {s.label}
                              </span>
                              <span className="mt-0.5 block text-[0.7rem] leading-tight text-bone/45">
                                {s.hint}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Booking-only fields */}
                      <AnimatePresence initial={false}>
                        {intent === "call" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="grid gap-5 pt-1 sm:grid-cols-2">
                              <div>
                                <label className={labelBase} htmlFor="date">
                                  Preferred date
                                </label>
                                <input id="date" name="date" type="date" className={`${inputBase} [color-scheme:dark]`} />
                              </div>
                              <div>
                                <label className={labelBase}>Preferred time</label>
                                <div className="grid grid-cols-4 gap-1.5">
                                  {TIMES.map((t) => (
                                    <button
                                      type="button"
                                      key={t}
                                      onClick={() => setTime(t)}
                                      className={`rounded-lg border px-1 py-2.5 text-xs font-medium transition ${
                                        time === t
                                          ? "border-gold/70 bg-gold/10 text-gold"
                                          : "border-bone/12 text-bone/60 hover:border-bone/30"
                                      }`}
                                    >
                                      {t}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div>
                        <label className={labelBase} htmlFor="brief">
                          Your idea / brief
                        </label>
                        <textarea
                          id="brief"
                          name="brief"
                          rows={4}
                          className={`${inputBase} resize-none`}
                          placeholder="A few lines on the brand, the goal, timing and anything you've got in mind…"
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-coral">
                          Something went wrong — please email us at {SITE.email}.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-bold text-ink transition hover:bg-gold-light disabled:opacity-60 sm:w-auto"
                      >
                        {status === "sending"
                          ? "Sending…"
                          : intent === "call"
                          ? "Request my consultation call"
                          : "Send my quote request"}
                        <span aria-hidden className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
