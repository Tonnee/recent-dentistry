import type { Metadata } from "next";
import ReviewsSection from "../components/home/reviews/reviews-section";

export const metadata: Metadata = {
    title: "Patient Reviews & Testimonials | Recent Dentistry",
    description:
        "Read verified feedback and testimonials from our patients about their comfortable, high-quality dental experiences at Recent Dentistry.",
};

export default function ReviewsPage() {
    return (
        <main className="py-8 sm:py-12">
            <h1 className="sr-only">Patient Reviews & Testimonials - Recent Dentistry</h1>
            <ReviewsSection />
        </main>
    );
}
