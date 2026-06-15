import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <CaseStudy />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
