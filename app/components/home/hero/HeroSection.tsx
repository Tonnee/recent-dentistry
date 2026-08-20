import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/container/Container";

export default function HeroSection() {
    return (
        <section className="relative pt-10 sm:pt-14 lg:pt-40 pb-12 lg:pb-20 bg-light-bg">
            <Container className="relative">
                
                

                {/* 2. Main Blue Banner Card Container */}
                <div className="relative rounded-[30px] bg-brand-blue min-h-[413px] pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 pr-6 sm:pr-10 lg:pr-14 pl-6 md:pl-[340px] lg:pl-[440px] flex flex-col md:flex-row items-end justify-between gap-8 lg:gap-12 shadow-xl">

                    {/* "Best care" Headline (Positioned on white canvas above blue card, left-aligned with right column) */}
                    <div className="absolute -top-20 sm:-top-28 lg:-top-[170px] right-6 sm:right-10 lg:right-14 w-full md:w-[600px] text-left pointer-events-none whitespace-nowrap z-20">
                        <h1 className="font-roboto text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black tracking-tight leading-none text-dark">
                            Best <span className="text-cyan-accent text-5xl sm:text-7xl md:text-8xl lg:text-[123px]">care</span>
                        </h1>
                    </div>

                    
                    {/* Dentist Portrait Image (Bottom-aligned to card bottom, head extending above card top) */}
                    <div className="absolute bottom-0 left-4 sm:left-8 lg:left-12 w-[260px] sm:w-[360px] lg:w-[458px] h-[460px] sm:h-[580px] lg:h-[688px] z-20 pointer-events-none">
                        {/* Sparkle Icon */}
                        <div className="absolute top-28 right-4 w-9 h-9 opacity-70 pointer-events-none z-10">
                            <Image
                                src="/sparkle-decoration.png"
                                alt=""
                                width={36}
                                height={36}
                                className="object-contain"
                            />
                        </div>

                        <Image
                            src="/dentist-hero-portrait.png"
                            alt="Dr. Rashid - Recent Dentistry Lead Dentist"
                            fill
                            sizes="(max-width: 768px) 260px, 458px"
                            className="object-contain object-bottom drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Middle Rating Stats & Customer Avatars Column (Raleway) */}
                    <div className="flex flex-col items-end text-right shrink-0 z-10 self-center lg:self-end pb-2 font-raleway">
                        {/* We care about your smile */}
                        <p className="text-light-blue text-sm sm:text-base lg:text-[17px] font-semibold leading-relaxed text-right mb-6 sm:mb-10">
                            We care about<br />your smile
                        </p>
                        
                        {/* 5 Yellow Stars */}
                        <div className="flex items-center justify-end gap-1.5 mb-2.5 w-full">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-accent-yellow fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Over 2000 satisfied customers */}
                        <p className="text-light-blue text-xs sm:text-sm lg:text-[16px] font-semibold leading-snug text-right mb-4">
                            Over 2000<br />satisfied customers
                        </p>

                        {/* Customer Avatars SVG */}
                        <div className="relative w-[160px] sm:w-[199px] h-[45px] sm:h-[55px]">
                            <Image
                                src="/satisfied-customers-avatars.svg"
                                alt="Satisfied customers"
                                fill
                                className="object-contain object-right"
                            />
                        </div>
                    </div>

                    {/* Right Column: "Best care", "Best protection", Subtitle, CTA Button */}
                    <div className="relative flex flex-col items-start justify-end z-10 w-full space-y-3 sm:space-y-4 max-w-[600px]">
                        {/* "Best protection" Headline */}
                        <h2 className="font-roboto text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black tracking-tight leading-none text-white">
                            Best <span className="text-accent-yellow text-5xl sm:text-7xl md:text-8xl lg:text-[106px] lowercase">protection</span>
                        </h2>


                        {/* Subtitle */}
                        <p className="font-nunito text-white text-xs sm:text-sm lg:text-base font-light tracking-wide leading-relaxed text-left max-w-md pt-1">
                            Your Journey to Optimal Oral Health Begins at <span className="font-semibold">Recent Dentistry</span>
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <Link
                                href="/appointment"
                                className="font-raleway inline-flex items-center justify-center rounded-[13px] bg-accent-yellow px-8 py-4 text-base sm:text-lg font-medium text-dark transition-all duration-200 hover:bg-yellow-400 hover:shadow-lg active:scale-95"
                            >
                                Call for Appointment
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
