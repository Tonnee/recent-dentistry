import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "FAQ | Recent Dentistry",
    description: "Frequently Asked Questions about Recent Dentistry.",
};

export default function FaqPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Frequently Asked Questions
                </h1>
            </Container>
        </main>
    );
}
