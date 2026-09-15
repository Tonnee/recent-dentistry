import Image from "next/image";
import { Container } from "@/app/components/ui/container/Container";

interface DoctorCard {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    bgClass: string;
}

const DOCTORS: DoctorCard[] = [
    {
        id: "hadia-zaman-1",
        name: "Dr. Hadia Zaman",
        role: "Implantologist",
        imageSrc: "/dr-hadia-zaman-dentist.png",
        bgClass: "bg-ocean-blue",
    },
    {
        id: "hadia-zaman-2",
        name: "Dr. Hadia Zaman",
        role: "Implantologist",
        imageSrc: "/dr-samira-khan-dentist.png",
        bgClass: "bg-soft-cyan",
    },
    {
        id: "hadia-zaman-3",
        name: "Dr. Hadia Zaman",
        role: "Implantologist",
        imageSrc: "/dr-nabil-ahmed-dentist.png",
        bgClass: "bg-soft-cyan",
    },
    {
        id: "hadia-zaman-4",
        name: "Dr. Hadia Zaman",
        role: "Implantologist",
        imageSrc: "/dr-tanvir-hossain-dentist.png",
        bgClass: "bg-ocean-blue",
    },
];

export default function PracticeSection() {
    return (
        <section
            id="practice"
            className="relative py-12 sm:py-16 lg:py-24 bg-light-bg overflow-hidden"
        >
            <Container>
                {/* Section Title */}
                <div className="mb-8 sm:mb-12 lg:mb-14">
                    <h2 className="font-roboto text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black tracking-tight text-dark leading-tight">
                        Our Practice is the Art of Creating Smile
                    </h2>
                </div>

                {/* 2-Column Balanced Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left Column: 2x2 Doctors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {DOCTORS.map((doc) => (
                            <div
                                key={doc.id}
                                className={`group relative rounded-[30px] overflow-hidden h-[300px] sm:h-[328px] flex flex-col justify-end p-6 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                                    doc.bgClass === "bg-ocean-blue"
                                        ? "bg-ocean-blue"
                                        : "bg-soft-cyan"
                                }`}
                            >
                                {/* Doctor Portrait */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <Image
                                        src={doc.imageSrc}
                                        alt={`${doc.name} - ${doc.role}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Subtle Dark Blue Bottom Gradient Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent pointer-events-none"
                                    aria-hidden="true"
                                />

                                {/* Doctor Name & Role */}
                                <div className="relative z-10">
                                    <h3 className="font-nunito font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                                        {doc.name}
                                    </h3>
                                    <p className="font-raleway font-semibold text-sm sm:text-base text-light-blue capitalize mt-1">
                                        {doc.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Experience Statement & Dr. Mamunur Rashid Feature Card */}
                    <div className="flex flex-col justify-between h-full gap-6">
                        {/* Top: 27 Years of Work Experience Statement */}
                        <div className="pt-2 sm:pt-4 lg:pt-6 pb-2 max-w-xs sm:max-w-sm">
                            <p className="font-nunito font-bold text-xl sm:text-2xl lg:text-[26px] leading-relaxed text-dark">
                                <span className="font-extrabold text-secondary-blue">
                                    27 Years
                                </span>{" "}
                                of Work Experience on Dental Practice in{" "}
                                <span className="font-extrabold text-secondary-blue">
                                    Dhaka
                                </span>{" "}
                                &{" "}
                                <span className="font-extrabold text-secondary-blue">
                                    Florida
                                </span>
                            </p>
                        </div>

                        {/* Bottom: Dr. Mamunur Rashid Feature Card with Rising Portrait */}
                        <div className="relative rounded-[30px] bg-brand-blue min-h-[300px] lg:h-[328px] p-7 sm:p-10 lg:p-12 flex flex-col justify-center shadow-xl">
                            {/* Cutout Portrait Rising Above the Card Boundary */}
                            <div className="absolute bottom-0 right-0 sm:right-2 lg:right-4 w-[280px] sm:w-[380px] lg:w-[440px] xl:w-[478px] h-[400px] sm:h-[520px] lg:h-[620px] xl:h-[648px] pointer-events-none z-10">
                                <Image
                                    src="/dr-mamunur-rashid-dentist.png"
                                    alt="Dr. Mamunur Rashid - Principal Dentist & Specialist Orthodontist"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 380px, 478px"
                                    className="object-contain object-bottom drop-shadow-lg"
                                />
                            </div>

                            {/* Left Content: Name & Specializations */}
                            <div className="relative z-20 max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
                                <h3 className="font-nunito font-bold text-3xl sm:text-4xl lg:text-[43px] text-accent-yellow leading-[1.15] tracking-tight mb-4 sm:mb-6">
                                    Dr. Mamunur
                                    <br />
                                    Rashid
                                </h3>
                                <div className="space-y-1 font-raleway font-semibold text-light-blue text-sm sm:text-base lg:text-[18px] capitalize leading-snug">
                                    <p>principal dentist</p>
                                    <p>specialist orthodontist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
