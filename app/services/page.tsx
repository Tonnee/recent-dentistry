import type { Metadata } from "next";
import { Container } from "../components/ui/container/Container";

export const metadata: Metadata = {
    title: "Services | Recent Dentistry",
    description: "Our dental services at Recent Dentistry.",
};

export default function ServicesPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container>
                <h1 className="font-roboto font-bold text-3xl sm:text-5xl text-dark">
                    Services
                </h1>
            </Container>
        </main>
    );
}
