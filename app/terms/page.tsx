import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Terms & Conditions | Recent Dentistry",
    description: "Terms and Conditions for Recent Dentistry.",
};

export default function TermsPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Terms &amp; Conditions
                </h1>
            </Container>
        </main>
    );
}
