import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Privacy Policy | Recent Dentistry",
    description: "Privacy Policy for Recent Dentistry.",
};

export default function PrivacyPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Privacy Policy
                </h1>
            </Container>
        </main>
    );
}
