import Hero from "@/sections/Home/Hero";
import Navbar from "../sections/Home/Navbar";
import CounterSection from "@/sections/Home/CountSec";
import LogoTicker from "@/sections/Home/LogoTicker";
import EndCounterSection from "@/sections/Home/endCountSec";
import GalleryPage from "@/sections/Home/Gallery";
import ReviewSection from "@/sections/Home/Review";
import Faqs from "@/sections/Home/Faqs";
import Footer from "@/sections/Home/Footer";

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
