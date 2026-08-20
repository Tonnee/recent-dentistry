"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "../../ui/container/Container";

interface NavLinkItem {
    label: string;
    href: string;
}

const NAV_LINKS: NavLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Dentist", href: "/doctors" },
    { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-light-bg/90 backdrop-blur-md">
            <Container>
                <div className="flex h-24 items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0"
                        onClick={closeMobileMenu}
                    >
                        <div className="relative h-12 w-48 shrink-0">
                            <Image
                                src="/recent-dentistry-logo.png"
                                alt="Recent Dentistry Logo"
                                fill
                                sizes="200px"
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-lg font-medium transition-colors ${
                                        isActive
                                            ? "text-accent-yellow"
                                            : "text-nav-link hover:text-accent-yellow"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Contact CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue px-6 py-2.5 text-lg font-medium text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-brand-blue focus:outline-none"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-100">
                        <div className="flex flex-col space-y-3 px-2 pt-2 pb-4">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className={`px-4 py-2.5 rounded-lg text-lg font-medium transition-colors ${
                                            isActive
                                                ? "text-accent-yellow font-semibold"
                                                : "text-nav-link hover:text-accent-yellow"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-2 px-2">
                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className="w-full inline-flex items-center justify-center rounded-xl border-2 border-brand-blue px-6 py-2.5 text-lg font-medium text-brand-blue transition-colors hover:bg-brand-blue hover:text-white text-center"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}