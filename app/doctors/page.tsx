import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Dentist | Recent Dentistry",
    description: "Our dentists and dental specialists at Recent Dentistry.",
};

export default function DoctorsPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Dentist
                </h1>
            </Container>
        </main>
    );
}
