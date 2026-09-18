import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import MarketRates from "@/components/home/MarketRates";
import HowItWorks from "@/components/home/HowItWorks";
import Ecosystem from "@/components/home/Ecosystem";
import AppPromo from "@/components/home/AppPromo";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      <Categories />

      <MarketRates />

      <HowItWorks />

      <Ecosystem />

      <AppPromo/>

      <Testimonials />

      <FinalCTA />

      <Footer />
    </main>
  );
}