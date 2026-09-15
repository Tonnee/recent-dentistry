import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/container/Container";

export interface ServiceCardItem {
    id: string;
    title?: string;
    href: string;
    type: "solid" | "image";
    bgClass?: string;
    textClass?: string;
    iconSrc?: string;
    imageSrc?: string;
    imageAlt?: string;
    gridPlacement: string;
    minHeightClass?: string;
}

const SERVICES: ServiceCardItem[] = [
    {
        id: "general-dentistry",
        title: "General Dentistry",
        href: "/services",
        type: "solid",
        bgClass: "bg-cyan-accent",
        textClass: "text-white",
        iconSrc: "/general-dentistry-icon.png",
        gridPlacement: "lg:col-start-1 lg:row-start-1",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "orthodontics",
        title: "Orthodontics",
        href: "/services",
        type: "solid",
        bgClass: "bg-accent-yellow",
        textClass: "text-white",
        iconSrc: "/orthodontics-icon.png",
        gridPlacement: "lg:col-start-2 lg:row-start-1",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        href: "/services",
        type: "image",
        imageSrc: "/dental-surgery-procedure.png",
        imageAlt: "Dental Implants model and procedure",
        gridPlacement: "lg:col-start-3 lg:row-start-1",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "cosmetic-dentistry",
        title: "Cosmetic Dentistry",
        href: "/services",
        type: "image",
        imageSrc: "/female-dentist-portrait.png",
        imageAlt: "Cosmetic Dentistry dental examination and treatment",
        gridPlacement: "lg:col-start-4 lg:row-start-1 lg:row-span-2",
        minHeightClass: "min-h-[340px] sm:min-h-[400px] lg:min-h-0",
    },
    {
        id: "periodontics",
        title: "Periodontics",
        href: "/services",
        type: "image",
        imageSrc: "/happy-dental-patient.png",
        imageAlt: "Periodontics patient dental checkup",
        gridPlacement: "lg:col-start-1 lg:row-start-2 lg:row-span-2",
        minHeightClass: "min-h-[340px] sm:min-h-[400px] lg:min-h-0",
    },
    {
        id: "pediatric-care",
        href: "/about",
        type: "image",
        imageSrc: "/dental-examination-procedure.png",
        imageAlt: "Dentist teaching young child oral hygiene with dental model",
        gridPlacement: "lg:col-start-2 lg:row-start-2",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "oral-surgery",
        title: "Oral Surgery",
        href: "/services",
        type: "solid",
        bgClass: "bg-brand-blue",
        textClass: "text-white",
        iconSrc: "/oral-surgery-icon.png",
        gridPlacement: "lg:col-start-3 lg:row-start-2",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "emergency-appointment",
        title: "Emergency Appointment",
        href: "/appointment",
        type: "image",
        imageSrc: "/dental-clinic-interior.png",
        imageAlt: "Recent Dentistry emergency care treatment clinic room",
        gridPlacement: "sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
    {
        id: "contact-us",
        title: "Contact Us",
        href: "/contact",
        type: "solid",
        bgClass: "bg-ice-blue/45",
        textClass: "text-dark",
        iconSrc: "/recent-dentistry-emblem.png",
        gridPlacement: "lg:col-start-4 lg:row-start-3",
        minHeightClass: "min-h-[260px] sm:min-h-[290px] lg:min-h-0",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative py-12 sm:py-16 lg:py-24 bg-light-bg overflow-hidden"
        >
            <Container>
                {/* Section Title */}
                <div className="mb-8 sm:mb-12 lg:mb-14">
                    <h2 className="font-roboto text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black tracking-tight text-dark capitalize leading-tight">
                        Our services
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-5 sm:gap-6 lg:h-[1032px]">
                    {SERVICES.map((service) => {
                        const isSolid = service.type === "solid";

                        if (isSolid) {
                            return (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className={`group relative flex flex-col items-center justify-between rounded-[30px] p-6 sm:p-8 lg:p-9 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-accent focus-visible:ring-offset-2 ${service.bgClass} ${service.gridPlacement} ${service.minHeightClass}`}
                                >
                                    {/* Centered Icon */}
                                    <div className="flex flex-1 items-center justify-center pt-2 sm:pt-4">
                                        {service.iconSrc && (
                                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[91px] lg:h-[91px] shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
                                                <Image
                                                    src={service.iconSrc}
                                                    alt={`${service.title || "Service"} icon`}
                                                    fill
                                                    sizes="(max-width: 768px) 80px, 91px"
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Title */}
                                    <span
                                        className={`font-nunito font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px] leading-tight tracking-tight whitespace-nowrap ${service.textClass}`}
                                    >
                                        {service.title}
                                    </span>
                                </Link>
                            );
                        }

                        // Image Card
                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={`group relative flex flex-col justify-end overflow-hidden rounded-[30px] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-accent focus-visible:ring-offset-2 ${service.gridPlacement} ${service.minHeightClass}`}
                            >
                                {/* Background Image */}
                                {service.imageSrc && (
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.imageAlt || service.title || "Recent Dentistry Service"}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                )}

                                {/* Subtle Dark Blue Bottom Gradient Overlay */}
                                {service.title && (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/25 to-transparent pointer-events-none"
                                        aria-hidden="true"
                                    />
                                )}

                                {/* Bottom Title */}
                                {service.title && (
                                    <span className="relative z-10 font-nunito font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px] text-white leading-tight tracking-tight text-center pb-6 sm:pb-7 lg:pb-8 px-4 whitespace-nowrap">
                                        {service.title}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
