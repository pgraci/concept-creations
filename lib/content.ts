export const SITE = {
  name: "Concept Creations",
  tagline: "Boutique Content & Storytelling Studio",
  city: "Kingston, Jamaica",
  email: "hello@conceptcreations.studio",
  instagram: "https://www.instagram.com/conceptcreations.studios/",
  instagramHandle: "@conceptcreations.studios",
  sunjuiceInstagram: "https://www.instagram.com/sunjuiceja/",
};

export type Service = {
  no: string;
  title: string;
  blurb: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Premium Content",
    blurb:
      "Cinematic, high-end production for brands that refuse to blend in. Concept to colour-grade, shot with intention.",
    bullets: ["Brand & commercial films", "Product & food cinematography", "Direction & art direction", "Studio & on-location"],
  },
  {
    no: "02",
    title: "UGC-Style Content",
    blurb:
      "Native, scroll-stopping content engineered to feel authentic and convert — built for the feed, not the festival.",
    bullets: ["Creator-led short form", "Reels, TikTok & Shorts", "Hooks & retention edits", "Performance-driven ads"],
  },
  {
    no: "03",
    title: "Social Media Management",
    blurb:
      "Full-service strategy, content and community. We run the channel end-to-end so the brand simply shows up beautifully.",
    bullets: ["Strategy & content calendars", "Daily publishing & community", "Always-on creative", "Analytics & growth"],
  },
  {
    no: "04",
    title: "Film & Television",
    blurb:
      "Broadcast-grade storytelling — narrative, documentary and commercial work for screen, stream and air.",
    bullets: ["Commercials & TVCs", "Documentary & branded film", "Production services", "Post & finishing"],
  },
];

export type Work = {
  title: string;
  category: string;
  src: string;
  poster: string;
  span: "wide" | "tall" | "square";
  year: string;
};

export const WORK: Work[] = [
  {
    title: "Corporate Reel",
    category: "Brand Film · Showreel",
    src: "/videos/reel.mp4",
    poster: "/posters/reel.jpg",
    span: "square",
    year: "2025",
  },
  {
    title: "Sun Juice — Summer Campaign",
    category: "Commercial · Food & Beverage",
    src: "/videos/sunjuice-wide.mp4",
    poster: "/posters/sunjuice-wide.jpg",
    span: "wide",
    year: "2025",
  },
  {
    title: "Sun Juice — Social Cut",
    category: "UGC · Short Form",
    src: "/videos/sunjuice-square.mp4",
    poster: "/posters/sunjuice-square.jpg",
    span: "square",
    year: "2025",
  },
];

// Client roster recovered from the Concept Creations corporate reel.
export type Client = { name: string; tag: string; style: "serif" | "sans" | "italic" };
export const CLIENTS: Client[] = [
  { name: "Appleton Estate", tag: "Spirits", style: "italic" },
  { name: "Starbucks", tag: "Coffee", style: "serif" },
  { name: "MegaMart", tag: "Retail", style: "italic" },
  { name: "Rainforest Seafoods", tag: "Food", style: "sans" },
  { name: "CPJ", tag: "Distribution", style: "sans" },
  { name: "Buzo", tag: "Osteria Italiana", style: "serif" },
  { name: "Konnexx", tag: "Services Ltd.", style: "sans" },
  { name: "Bird Shack", tag: "Fried Chicken", style: "sans" },
  { name: "Edge Chem", tag: "Paints", style: "serif" },
];

export const STATS = [
  { value: "9+", label: "Brands trusted us" },
  { value: "120M+", label: "Views delivered" },
  { value: "4K", label: "Cinema-grade capture" },
  { value: "100%", label: "Made in Jamaica" },
];

export const PROCESS = [
  { no: "01", title: "Discover", text: "We dig into the brand, the audience and the why. Strategy before a single frame." },
  { no: "02", title: "Concept", text: "Creative direction, moodboards and scripts that turn the brief into a world." },
  { no: "03", title: "Create", text: "Premium production or native UGC — captured, directed and edited to feel inevitable." },
  { no: "04", title: "Amplify", text: "We publish, manage and optimise so the work actually moves the numbers." },
];
