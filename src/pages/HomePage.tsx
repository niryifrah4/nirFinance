import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import SocialProofSection from "../sections/SocialProofSection";
import VideoSection from "../sections/VideoSection";

export default function HomePage() {
    return (
        <main className="pb-6">
            <HeroSection />
            <VideoSection />
            <ServicesSection />
            <SocialProofSection />
            <AboutSection />
            <ContactSection />
        </main>
    );
}