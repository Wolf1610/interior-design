import Hero from "@/sections/Hero";
import Navbar from "../sections/Navbar";
import CounterSection from "@/sections/CountSec";
import LogoTicker from "@/sections/LogoTicker";
import EndCounterSection from "@/sections/endCountSec";
import GalleryPage from "@/sections/Gallery";

export default function Home() {
  return (
    <div>
        <Navbar />      
        <Hero />
        <CounterSection />
        <LogoTicker />
        <EndCounterSection />
        <GalleryPage />
    </div>
  );
}
