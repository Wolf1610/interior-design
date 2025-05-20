import Commercials from "@/sections/commercial/Commercial";
import Hero from "@/sections/commercial/Hero";
import Footer from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar";


export default function Commercial() {

    return (
        <>
            <Navbar />
            <Hero />
            <Commercials /> 
            <Footer />
        </>
    );
}