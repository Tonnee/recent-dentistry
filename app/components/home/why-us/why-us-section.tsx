import Image from "next/image";
import { Container } from "@/app/components/ui/container/Container";

interface WhyChooseUsItem {
    id: number;
    prefix: string;
    highlights: { text: string; isYellow: boolean }[];
}

const WHY_US_ITEMS: WhyChooseUsItem[] = [
    {
        id: 1,
        prefix: "1. ",
        highlights: [
            { text: "Quality", isYellow: true },
            { text: " Service", isYellow: false },
        ],
    },
    {
        id: 2,
        prefix: "2. ",
        highlights: [
            { text: "Top-tier", isYellow: true },
            { text: " Dental ", isYellow: false },
            { text: "Specialist", isYellow: true },
        ],
    },
    {
        id: 3,
        prefix: "3. ",
        highlights: [
            { text: "Consult only ", isYellow: false },
            { text: "10 Patients", isYellow: true },
            { text: " a day", isYellow: false },
        ],
    },
    {
        id: 4,
        prefix: "4. ",
        highlights: [
            { text: "Maximum ", isYellow: false },
            { text: "Waiting", isYellow: true },
            { text: " time ", isYellow: false },
            { text: "10 Minutes", isYellow: true },
        ],
    },
    {
        id: 5,
        prefix: "5. ",
        highlights: [
            { text: "Extra-ordinary ", isYellow: false },
            { text: "Hygiene", isYellow: true },
            { text: " Management", isYellow: false },
        ],
    },
    {
        id: 6,
        prefix: "6. ",
        highlights: [
            { text: "Feel like ", isYellow: false },
            { text: "Home", isYellow: true },
        ],
    },
];

export default function WhyUsSection() {
    return (
        <section
            id="why-us"
            className="relative py-12 sm:py-16 lg:py-24 bg-light-bg overflow-hidden"
        >
            <Container>
                {/* Section Title */}
                <div className="mb-8 sm:mb-12 lg:mb-14">
                    <h2 className="font-roboto text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black tracking-tight text-dark leading-tight">
                        Bring Joy to Your Smile
                    </h2>
                </div>

                {/* 2-Column Asymmetrical Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.41fr_1fr] gap-6 items-stretch">
                    {/* Left Column (Procedure Showcase & Clinic Room) */}
                    <div className="flex flex-col gap-6 justify-between">
                        {/* Top Card: Dr. Rashid treating patient over Sky Cyan Card */}
                        <div className="relative rounded-[30px] overflow-hidden h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[620px]">
                            {/* Cyan Card Background occupying lower 62% */}
                            <div className="absolute bottom-0 left-0 right-0 h-[62%] rounded-[30px] bg-sky-cyan shadow-md" />

                            {/* Floating "Commitment to Quality Care" Header at top-right */}
                            <div className="absolute top-2 sm:top-4 lg:top-6 right-4 sm:right-6 lg:right-8 z-20 text-right pointer-events-none">
                                <p className="font-nunito font-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] text-secondary-blue leading-tight tracking-tight">
                                    Commitment
                                </p>
                                <p className="font-nunito font-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] text-dark leading-tight tracking-tight">
                                    to Quality Care
                                </p>
                            </div>

                            {/* Dentist & Patient Cutout Image */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                <Image
                                    src="/dentist-patient-care.png"
                                    alt="Dr. Rashid providing dental treatment to patient"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 58vw"
                                    className="object-contain object-bottom drop-shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Bottom Card: Clinic Interior Room */}
                        <div className="relative rounded-[30px] overflow-hidden h-[260px] sm:h-[340px] lg:h-[420px] xl:h-[449px] shadow-sm group">
                            <Image
                                src="/dental-clinic-room.png"
                                alt="Recent Dentistry modern clinic room with dental equipment"
                                fill
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                            {/* Subtle dark blue overlay */}
                            <div
                                className="absolute inset-0 bg-brand-blue/15 pointer-events-none"
                                aria-hidden="true"
                            />
                        </div>
                    </div>

                    {/* Right Column: "Why People Like Us" Value Propositions */}
                    <div className="relative rounded-[30px] bg-gradient-to-b from-brand-blue to-deep-blue p-7 sm:p-10 lg:p-12 xl:p-14 overflow-hidden flex flex-col justify-between shadow-xl min-h-[640px] sm:min-h-[760px] lg:min-h-0 lg:h-full">
                        <div className="z-20 relative">
                            {/* Card Header */}
                            <h3 className="font-nunito font-bold text-3xl sm:text-4xl lg:text-[38px] text-white tracking-tight leading-tight mb-6 sm:mb-8 lg:mb-10">
                                Why People{" "}
                                <span className="text-accent-yellow">Like</span> Us
                            </h3>

                            {/* 6 Value Proposition Items */}
                            <ul className="space-y-3.5 sm:space-y-4 lg:space-y-5 max-w-sm sm:max-w-md">
                                {WHY_US_ITEMS.map((item) => (
                                    <li
                                        key={item.id}
                                        className="font-nunito font-bold text-base sm:text-lg lg:text-[20px] xl:text-[22px] leading-snug text-white tracking-tight"
                                    >
                                        <span>{item.prefix}</span>
                                        {item.highlights.map((part, idx) => (
                                            <span
                                                key={idx}
                                                className={
                                                    part.isYellow
                                                        ? "text-accent-yellow"
                                                        : "text-white"
                                                }
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Female Dentist Standing Cutout at bottom right */}
                        <div className="absolute bottom-0 right-0 sm:right-2 lg:right-4 w-[260px] sm:w-[340px] lg:w-[400px] xl:w-[460px] h-[360px] sm:h-[460px] lg:h-[560px] xl:h-[620px] pointer-events-none z-10">
                            <Image
                                src="/female-dentist-mask.png"
                                alt="Recent Dentistry specialist dentist"
                                fill
                                priority
                                sizes="(max-width: 1024px) 340px, 460px"
                                className="object-contain object-bottom drop-shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
