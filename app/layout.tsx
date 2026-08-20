import type { Metadata } from "next";
import { Roboto, Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar/Navbar";

const roboto = Roboto({
    weight: ["400", "500", "700", "900"],
    variable: "--font-roboto",
    subsets: ["latin"],
});

const raleway = Raleway({
    weight: ["400", "500", "600", "700"],
    variable: "--font-raleway",
    subsets: ["latin"],
});

const nunito = Nunito_Sans({
    weight: ["300", "400", "600", "700"],
    variable: "--font-nunito",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Recent Dentistry",
    description: "Your Journey to Optimal Oral Health Begins at Recent Dentistry",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${raleway.variable} ${nunito.variable} font-raleway antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
