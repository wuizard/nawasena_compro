import { About } from "@/features/about/components/About";
import { Approach } from "@/features/approach/components/Approach";
import { Contact, FloatingWhatsApp } from "@/features/contact";
import { Footer } from "@/features/footer/components/Footer";
import { Hero } from "@/features/hero/components/Hero";
import { Intro } from "@/features/intro/components/Intro";
import { Navbar } from "@/features/navigation/components/Navbar";
import { Products } from "@/features/products/components/Products";
import { Services } from "@/features/services/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <Intro />
        <Services />
        <Approach />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
