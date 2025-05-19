import ContactSection from "@/sections/ContactUsPage/ContectUS";
import MapSection from "@/sections/ContactUsPage/MapSection";
import SocialIcons from "@/sections/ContactUsPage/SocialIcoon";
import Footer from "@/sections/Home/Footer";
import Navbar from "@/sections/Home/Navbar";

export default function ContactUs() {

    return (
        <>
            <Navbar />
            <SocialIcons />
            <ContactSection />
            <MapSection />
            <Footer />
        </>
    );
}