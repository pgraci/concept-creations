# Concept Creations

An award-winning marketing site for **Concept Creations** — a boutique content &
storytelling studio in Kingston, Jamaica. Premium and UGC-style content for social,
digital, film & television, plus full-service social media management.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**.

## Highlights

- **Cinematic hero** with an autoplaying, muted background reel and parallax.
- **Hover-to-unmute showreel** — every clip autoplays muted and raises the sound
  on hover (tap on mobile), with a live audio indicator.
- **Sun Juice JA case study** for full social media management — fresh original
  content for both social and ads, linked to [@sunjuiceja](https://www.instagram.com/sunjuiceja/).
- **Monochromatic client roster** recovered from the studio's corporate reel:
  Appleton Estate, Starbucks, MegaMart, Rainforest Seafoods, CPJ, Buzo, Konnexx,
  Bird Shack and Edge Chem.
- **Contact** with a dual-mode form: *book a consultation call* (date + time
  preference) or *request a quote*, capturing name, socials, brand and a brief
  (one video / multiple / UGC / full social management).
- Links to [@conceptcreations.studios](https://www.instagram.com/conceptcreations.studios/).
- Reduced-motion aware, responsive, SEO + Open Graph metadata, film-grain finish.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Form submissions

The contact form posts to `app/api/inquiry/route.ts`, which validates the inquiry
and emails it via [Resend](https://resend.com) to `info@conceptcreations.ltd`. The
submitter's address is set as the reply-to, so replies go straight back to them.

Environment variables (set in Vercel):

- `RESEND_API_KEY` — **required**. Your Resend API key.
- `INQUIRY_TO` — optional. Override the recipient (defaults to `info@conceptcreations.ltd`).
- `INQUIRY_FROM` — optional. Override the sender (defaults to
  `inquiries@conceptcreations.ltd`). The sending domain must be verified in Resend;
  until then, set this to `onboarding@resend.dev`.

## Media

Source videos live in the repo root; web-optimized versions are generated into
`public/videos` (and posters into `public/posters`). The lightweight muted
`hero-bg.mp4` powers the hero; the full `reel.mp4` and Sun Juice clips power the
hover-to-unmute showreel.

## Structure

```
app/            layout, page, globals, /api/inquiry
components/     Nav, Hero, Marquee, About, Services, Work, CaseStudy,
                Process, Clients, Contact, Footer + animation primitives
lib/content.ts  site copy, services, work, client roster
public/         brand logo, videos, posters
```
