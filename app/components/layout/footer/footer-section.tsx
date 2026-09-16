import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/container/Container";

export interface FooterNavLink {
    label: string;
    href: string;
    isHighlighted?: boolean;
}

export interface FooterSocialLink {
    name: string;
    href: string;
    iconSrc: string;
}

export interface FooterSectionProps {
    className?: string;
}

const NAV_COLUMN_ONE: FooterNavLink[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
];

const NAV_COLUMN_TWO: FooterNavLink[] = [
    { label: "About", href: "/about" },
    { label: "Dentist", href: "/doctors", isHighlighted: true },
    { label: "FAQ", href: "/faq" },
];

const SOCIAL_LINKS: FooterSocialLink[] = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        iconSrc: "/facebook-icon.svg",
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        iconSrc: "/instagram-icon.svg",
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        iconSrc: "/twitter-icon.svg",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/8801847128602",
        iconSrc: "/whatsapp-icon.svg",
    },
];

export default function FooterSection({ className = "" }: FooterSectionProps) {
    return (
        <footer
            className={`w-full bg-dark text-white rounded-t-3xl md:rounded-t-4xl lg:rounded-t-[48px] overflow-hidden ${className}`}
        >
            <Container className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Brand, Tagline, and Navigation Columns */}
                    <div className="flex flex-col space-y-8 sm:space-y-10">
                        {/* Logo & Brand Name */}
                        <div className="flex items-center gap-3.5">
                            <div className="relative w-10 h-12 sm:w-11 sm:h-13 shrink-0">
                                <Image
                                    src="/recent-dentistry-emblem.png"
                                    alt="Recent Dentistry Emblem"
                                    fill
                                    sizes="48px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="font-raleway font-semibold text-2xl sm:text-[26px] tracking-wide text-white">
                                Recent Dentistry
                            </span>
                        </div>

                        {/* Brand Tagline */}
                        <p className="font-raleway text-slate-300 text-sm sm:text-base max-w-sm leading-relaxed">
                            Smiles are contagious, and we&apos;re in the
                            <br />
                            business of spreading infectious joy.
                        </p>

                        {/* Navigation Links Grid (2 Columns) */}
                        <nav aria-label="Footer Navigation">
                            <div className="grid grid-cols-2 max-w-xs sm:max-w-sm gap-x-12 sm:gap-x-16 gap-y-4 sm:gap-y-5">
                                {/* First Column */}
                                <ul role="list" className="space-y-4 sm:space-y-5">
                                    {NAV_COLUMN_ONE.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className={`text-base sm:text-lg font-medium transition-colors hover:text-accent-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded ${
                                                    link.isHighlighted
                                                        ? "text-accent-yellow font-semibold"
                                                        : "text-white"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Second Column */}
                                <ul role="list" className="space-y-4 sm:space-y-5">
                                    {NAV_COLUMN_TWO.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className={`text-base sm:text-lg font-medium transition-colors hover:text-accent-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded ${
                                                    link.isHighlighted
                                                        ? "text-accent-yellow font-semibold"
                                                        : "text-white"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Right Column: Social Media, Contact, and Legal Links */}
                    <div className="flex flex-col items-start lg:items-end justify-between space-y-8 sm:space-y-10 lg:text-right h-full">
                        {/* Social Media Section */}
                        <div className="flex flex-col items-start lg:items-end space-y-5">
                            <h3 className="font-raleway font-semibold text-2xl sm:text-[28px] text-white tracking-tight">
                                We are on Social Media
                            </h3>
                            {/* Social Icons Row */}
                            <div className="flex items-center gap-5 sm:gap-6">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded-full"
                                    >
                                        <Image
                                            src={social.iconSrc}
                                            alt={social.name}
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-contain"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col items-start lg:items-end space-y-3 pt-2">
                            <a
                                href="tel:+8801847128602"
                                className="font-raleway text-slate-200 hover:text-accent-yellow transition-colors text-base sm:text-lg font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                            >
                                +88 01847-128602
                            </a>
                            <a
                                href="mailto:mamunbds.usa@gmail.com"
                                className="font-raleway text-slate-200 hover:text-accent-yellow transition-colors text-base sm:text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                            >
                                mamunbds.usa@gmail.com
                            </a>
                        </div>

                        {/* Legal Links (Privacy Policy, Terms & Conditions) */}
                        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
                            <Link
                                href="/privacy"
                                className="font-raleway text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="font-raleway text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
