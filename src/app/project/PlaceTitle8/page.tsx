import Footer from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar";
import GalleryPage from "@/sections/Place1Page/Gallery";
import Hero from "@/sections/Place1Page/Hero";
import HomePlan from "@/sections/Place1Page/HomePlan";
import YoutubeSection from "@/sections/Place1Page/YoutubeSection";

export default function PlaceTitle1() {
    return (
        <>
            <Navbar />
            <Hero />
            <YoutubeSection />
            <GalleryPage />
            <HomePlan />
            <Footer />
        </>
    );
}