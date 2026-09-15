import HeroSection from "./components/home/hero/HeroSection";
import ServicesSection from "./components/home/services/services-section";
import WhyUsSection from "./components/home/why-us/why-us-section";
import PracticeSection from "./components/home/practice/practice-section";
import ReviewsSection from "./components/home/reviews/reviews-section";
import CtaSection from "./components/cta/cta-section";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <WhyUsSection />
            <PracticeSection />
            <ReviewsSection />
            <CtaSection />
        </main>
    );
}
