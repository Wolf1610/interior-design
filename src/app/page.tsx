import Hero from "@/sections/Hero";
import Navbar from "../sections/Navbar";
import CounterSection from "@/sections/CountSec";
import LogoTicker from "@/sections/LogoTicker";
import EndCounterSection from "@/sections/endCountSec";
import GalleryPage from "@/sections/Gallery";
import ReviewSection from "@/sections/Review";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />      
        <Hero />
        <CounterSection />
        <LogoTicker />
        <EndCounterSection />
        <GalleryPage />
        <ReviewSection />
        <Faqs />
        <Footer />
    </div>
  );
}
