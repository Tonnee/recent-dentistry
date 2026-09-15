import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/container/Container";

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    age: string;
    avatarSrc: string;
    bgClass: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "review-1",
        quote:
            '"Choosing Recent Dentistry was the best decision for my oral health. Dr. Rashid\'s expertise and the warm environment made my visits comfortable. Personalized care and attention to detail truly set them apart. I\'m grateful for the positive experience, reflected in their numerous five-star reviews. Highly recommend!"',
        author: "Raya Ahmed",
        age: "26 Years old",
        avatarSrc: "/patient-avatar-raya.png",
        bgClass: "bg-ocean-blue",
    },
    {
        id: "review-2",
        quote:
            '"Choosing Recent Dentistry was the best decision for my oral health. Dr. Rashid\'s expertise and the warm environment made my visits comfortable. Personalized care and attention to detail truly set them apart. I\'m grateful for the positive experience, reflected in their numerous five-star reviews. Highly recommend!"',
        author: "Raya Ahmed",
        age: "26 Years old",
        avatarSrc: "/patient-avatar-raya.png",
        bgClass: "bg-brand-blue",
    },
    {
        id: "review-3",
        quote:
            '"Choosing Recent Dentistry was the best decision for my oral health. Dr. Rashid\'s expertise and the warm environment made my visits comfortable. Personalized care and attention to detail truly set them apart. I\'m grateful for the positive experience, reflected in their numerous five-star reviews. Highly recommend!"',
        author: "Raya Ahmed",
        age: "26 Years old",
        avatarSrc: "/patient-avatar-raya.png",
        bgClass: "bg-ocean-blue",
    },
    {
        id: "review-4",
        quote:
            '"Choosing Recent Dentistry was the best decision for my oral health. Dr. Rashid\'s expertise and the warm environment made my visits comfortable. Personalized care and attention to detail truly set them apart. I\'m grateful for the positive experience, reflected in their numerous five-star reviews. Highly recommend!"',
        author: "Raya Ahmed",
        age: "26 Years old",
        avatarSrc: "/patient-avatar-raya.png",
        bgClass: "bg-brand-blue",
    },
];

export default function ReviewsSection() {
    return (
        <section
            id="reviews"
            className="relative py-12 sm:py-16 lg:py-24 bg-light-bg overflow-hidden"
        >
            <Container>
                {/* Top Section Header: Title + See More Reviews CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-14">
                    <h2 className="font-roboto text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black tracking-tight text-dark leading-tight">
                        Reviews
                    </h2>

                    <Link
                        href="/reviews"
                        className="inline-flex items-center justify-center rounded-[13px] border-2 border-primary-blue px-7 sm:px-9 py-3 sm:py-3.5 font-raleway font-medium text-base sm:text-lg text-deep-blue transition-all duration-200 hover:bg-primary-blue hover:text-white shadow-sm hover:shadow-md active:scale-95 self-start sm:self-auto"
                    >
                        See More Reviews
                    </Link>
                </div>

                {/* Subheading with Highlighted Keywords */}
                <div className="mb-4 sm:mb-6">
                    <p className="font-nunito font-bold text-3xl sm:text-4xl lg:text-[47px] leading-tight text-dark tracking-tight">
                        Check out{" "}
                        <span className="text-secondary-blue">feedbacks </span>
                        from our{" "}
                        <span className="text-secondary-blue">patients!</span>
                    </p>
                </div>

                {/* Descriptive Lead Paragraph */}
                <div className="mb-10 sm:mb-14 lg:mb-16 max-w-4xl">
                    <p className="font-raleway font-semibold text-base sm:text-lg lg:text-[22px] leading-relaxed text-dark">
                        Our patients&apos; welfare is our foremost concern,
                        emphasizing their health and comfort throughout their
                        experience with us.
                    </p>
                </div>
            </Container>

            {/* Testimonials Carousel Track (Extends edge-to-edge with aligned starting container padding) */}
            <div className="w-full overflow-x-auto no-scrollbar pb-4 pt-2 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 flex gap-5 sm:gap-6 snap-x snap-mandatory">
                {TESTIMONIALS.map((item) => (
                    <div
                        key={item.id}
                        className={`snap-start shrink-0 rounded-[30px] p-7 sm:p-9 lg:p-10 w-[90vw] sm:w-[580px] lg:w-[666px] min-h-[260px] lg:h-[279px] flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 lg:gap-10 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${
                            item.bgClass === "bg-ocean-blue"
                                ? "bg-ocean-blue"
                                : "bg-brand-blue"
                        }`}
                    >
                        {/* Author Profile on Left */}
                        <div className="flex flex-col items-center shrink-0 w-[140px]">
                            <div className="relative w-24 h-24 lg:w-[117px] lg:h-[117px] rounded-full overflow-hidden border-2 border-white/40 shadow-md">
                                <Image
                                    src={item.avatarSrc}
                                    alt={`${item.author} testimonial avatar`}
                                    fill
                                    sizes="120px"
                                    className="object-cover object-center"
                                />
                            </div>

                            <p className="font-raleway font-semibold text-base sm:text-[18px] text-accent-yellow text-center mt-3 sm:mt-4 leading-tight">
                                {item.author}
                            </p>
                            <p className="font-raleway text-xs sm:text-[14px] text-white/90 text-center mt-1">
                                {item.age}
                            </p>
                        </div>

                        {/* Testimonial Quote on Right */}
                        <div className="flex-1 flex items-center h-full">
                            <p className="font-raleway text-sm sm:text-[15px] lg:text-[16px] text-white leading-relaxed font-normal text-left">
                                {item.quote}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
