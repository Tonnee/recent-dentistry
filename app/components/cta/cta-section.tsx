import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/container/Container";

export interface CtaSectionProps {
    className?: string;
    phoneNumber?: string;
}

export default function CtaSection({
    className = "",
    phoneNumber = "+8801847128602",
}: CtaSectionProps) {
    return (
        <section
            id="consultancy-cta"
            className={`relative pt-16 sm:pt-20 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-light-bg overflow-hidden ${className}`}
        >
            <Container className="relative">
                {/* 1. Header Area Above the Blue Card (Desktop aligned to right column) */}
                <div className="flex flex-col lg:pl-[42%] xl:pl-[40%] mb-3 sm:mb-4">
                    {/* Poetic Subheading */}
                    <p className="font-nunito font-bold text-lg sm:text-xl lg:text-[24px] text-deep-blue leading-snug">
                        Your <span className="text-cyan-accent">smile</span> is our masterpiece
                        <br />
                        – let us paint it with{" "}
                        <span className="text-cyan-accent">care and precision.</span>
                    </p>

                    {/* "Best Care" Title */}
                    <h2 className="font-roboto font-black text-dark text-5xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight leading-none mt-4 sm:mt-6">
                        Best Care
                    </h2>
                </div>

                {/* 2. Main Blue Banner Card */}
                <div className="relative rounded-[30px] bg-brand-blue min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex flex-col justify-center px-6 sm:px-10 lg:pr-12 lg:pl-[42%] xl:pl-[40%] py-10 sm:py-12 lg:py-14 shadow-xl">
                    {/* Doctor Portrait (Extends above the blue card on desktop, bottom-aligned) */}
                    <div className="lg:absolute lg:bottom-0 lg:left-4 xl:left-8 w-[280px] sm:w-[360px] lg:w-[460px] xl:w-[490px] h-[380px] sm:h-[480px] lg:h-[620px] xl:h-[660px] mx-auto lg:mx-0 order-last lg:order-none pointer-events-none z-20 mt-6 lg:mt-0">
                        {/* Sparkle Decoration near Doctor's Shoulder */}
                        <div className="absolute top-[28%] sm:top-[26%] right-2 sm:right-6 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 opacity-20 pointer-events-none z-10">
                            <Image
                                src="/sparkle-decoration.png"
                                alt=""
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        <Image
                            src="/dentist-consultancy-portrait.png"
                            alt="Lead Dentist - Recent Dentistry"
                            fill
                            sizes="(max-width: 1024px) 360px, (max-width: 1280px) 460px, 490px"
                            className="object-contain object-bottom drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Content inside Blue Card */}
                    <div className="relative z-10 flex flex-col items-start">
                        {/* "For Your Oral Health" */}
                        <h3 className="font-roboto font-black text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-white leading-tight tracking-tight">
                            For Your{" "}
                            <span className="text-accent-yellow">Oral Health</span>
                        </h3>

                        {/* "on your first consultancy" */}
                        <p className="font-roboto font-medium text-white/90 text-base sm:text-lg lg:text-[22px] mt-2 sm:mt-3 mb-6 sm:mb-8">
                            on your first consultancy
                        </p>

                        {/* Call for Appointment CTA Button */}
                        <Link
                            href={`tel:${phoneNumber}`}
                            className="inline-flex items-center justify-center font-raleway font-semibold text-dark text-base sm:text-lg bg-accent-yellow hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 active:scale-95 transition-all px-7 sm:px-9 py-3 sm:py-3.5 rounded-[13px] shadow-md"
                            aria-label="Call for Appointment"
                        >
                            Call for Appoinment
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
