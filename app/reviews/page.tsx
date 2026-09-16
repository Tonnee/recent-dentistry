import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Reviews | Recent Dentistry",
    description: "Patient reviews and testimonials for Recent Dentistry.",
};

export default function ReviewsPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Reviews
                </h1>
            </Container>
        </main>
    );
}
