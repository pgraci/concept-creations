export const SITE = {
  name: "Concept Creations",
  tagline: "Boutique Content & Storytelling Studio",
  city: "Kingston, Jamaica",
  email: "info@conceptcreationstudios.com",
  instagram: "https://www.instagram.com/conceptcreations.studios/",
  instagramHandle: "@conceptcreations.studios",
  sunjuiceInstagram: "https://www.instagram.com/sunjuiceja/",
};

export type Work = {
  title: string;
  category: string;
  src: string;
  poster: string;
  orientation: "vertical" | "landscape";
  year: string;
};

export const WORK: Work[] = [
  {
    title: "Corporate Reel",
    category: "Brand Film · Showreel",
    src: "/videos/reel.mp4",
    poster: "/posters/reel.jpg",
    orientation: "vertical",
    year: "2025",
  },
  {
    title: "Sun Juice — Summer Campaign",
    category: "Commercial · Food & Beverage",
    src: "/videos/sunjuice-wide.mp4",
    poster: "/posters/sunjuice-wide.jpg",
    orientation: "landscape",
    year: "2025",
  },
  {
    title: "Sun Juice — Social Cut",
    category: "UGC · Short Form",
    src: "/videos/sunjuice-square.mp4",
    poster: "/posters/sunjuice-square.jpg",
    orientation: "vertical",
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

// Full-service music-video crew.
export const CREW = [
  "Directors",
  "Directors of Photography",
  "Producers",
  "Makeup (MUA)",
  "Styling & Wardrobe",
  "Location Scouting",
  "Set Design",
];

// Placeholder music-video slots — swap in real artists / films later.
export type MusicVideo = {
  artist: string;
  label: string;
  scope: string;
  year: string;
  tint: "gold" | "coral" | "jade";
  placeholder: boolean;
};

export const MUSIC_VIDEOS: MusicVideo[] = [
  { artist: "Bruno Mars", label: "Official Music Video", scope: "International · On location", year: "Coming soon", tint: "gold", placeholder: true },
  { artist: "Rihanna", label: "Official Music Video", scope: "International · On location", year: "Coming soon", tint: "coral", placeholder: true },
  { artist: "Drake", label: "Official Music Video", scope: "International · On location", year: "Coming soon", tint: "jade", placeholder: true },
];
