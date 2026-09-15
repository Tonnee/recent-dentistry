import type { Metadata } from "next";
import PracticeSection from "../components/home/practice/practice-section";

export const metadata: Metadata = {
    title: "Our Dental Specialists | Recent Dentistry",
    description:
        "Meet Dr. Mamunur Rashid and our expert dental specialists providing world-class dentistry in Dhaka and Florida.",
};

export default function DoctorsPage() {
    return (
        <main className="py-8 sm:py-12">
            <h1 className="sr-only">Our Dental Specialists - Recent Dentistry</h1>
            <PracticeSection />
        </main>
    );
}
