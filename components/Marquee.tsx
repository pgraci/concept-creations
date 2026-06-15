"use client";

const WORDS = [
  "Premium Content",
  "UGC",
  "Social Media Management",
  "Film & Television",
  "Brand Storytelling",
  "Direction",
  "Made in Jamaica",
];

export default function Marquee() {
  return (
    <div className="relative border-y border-bone/10 bg-ink-800/60 py-5">
      <div className="edge-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {WORDS.map((w) => (
                <span key={w} className="flex items-center">
                  <span className="px-7 font-display text-xl italic text-bone/55 sm:text-2xl">
                    {w}
                  </span>
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
