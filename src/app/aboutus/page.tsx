import EstablishSection from "@/sections/AboutUsPage/Establish";
import ForteSec from "@/sections/AboutUsPage/ForteSec";
import Hero from "@/sections/AboutUsPage/Hero";
import ImageTicker from "@/sections/AboutUsPage/ImageTicker";
import Intro from "@/sections/AboutUsPage/Intro";
import MeetOurTeam from "@/sections/AboutUsPage/Team";
import CounterSection from "@/sections/Home/CountSec";
import EndCounterSection from "@/sections/Home/endCountSec";
import Footer from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar";


export default function AboutUs() {

    return (
        <>
            <Navbar />
            <Hero />
            <Intro />
            <CounterSection />
            <ImageTicker />
            <EndCounterSection />
            <EstablishSection />
            <ForteSec />
            <MeetOurTeam />
            <Footer />
        </>
    );
}