import type { Metadata } from "next";
import ServicesSection from "../components/home/services/services-section";

export const metadata: Metadata = {
    title: "Our Services | Recent Dentistry",
    description:
        "Explore our comprehensive dental services including General Dentistry, Orthodontics, Dental Implants, Cosmetic Dentistry, Oral Surgery, and Emergency Appointments.",
};

export default function ServicesPage() {
    return (
        <main className="py-8 sm:py-12">
            <h1 className="sr-only">Dental Care Services - Recent Dentistry</h1>
            <ServicesSection />
        </main>
    );
}
