import { IntroProvider } from "@/components/Intro";
import { LightboxProvider } from "@/components/Lightbox";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import MusicVideos from "@/components/MusicVideos";
import CaseStudy from "@/components/CaseStudy";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <IntroProvider>
      <LightboxProvider>
        <main className="grain relative">
          <Nav />
          <Hero />
          <Marquee />
          <About />
          <Work />
          <MusicVideos />
          <CaseStudy />
          <Clients />
          <Contact />
          <Footer />
        </main>
      </LightboxProvider>
    </IntroProvider>
  );
}
