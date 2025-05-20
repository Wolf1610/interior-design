import PrivateBulglows from "@/sections/Architecture/private-bunglows";
import Footer from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar";
import Hero from "@/sections/Private-Bunglows/Hero";

export default function PrivateBulglow() {
    return (
        <>
            <Navbar />
            <Hero />
            <PrivateBulglows />
            <Footer />
        </>
    );
}