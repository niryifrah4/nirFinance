import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import FAQSection from "../sections/FAQSection";
import HeroSection from "../sections/HeroSection";
import PlansSection from "../sections/PlansSection";
import ProcessSection from "../sections/ProcessSection";
import ServicesSection from "../sections/ServicesSection";
import StatsSection from "../sections/StatsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import VideoSection from "../sections/VideoSection";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <StatsSection />
            <VideoSection />
            <ServicesSection />
            <ProcessSection />
            <TestimonialsSection />
            <PlansSection />
            <AboutSection />
            <FAQSection />
            <ContactSection />
        </main>
    );
}
