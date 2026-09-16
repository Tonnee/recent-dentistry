import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Contact Us | Recent Dentistry",
    description: "Contact Recent Dentistry.",
};

export default function ContactPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Contact Us
                </h1>
            </Container>
        </main>
    );
}
