import { useState, type ComponentType, type SVGProps } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ServiceVisual = {
    src: string;
    alt: string;
    fallback: IconComponent;
};

function FamilyPlanningIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M35 36a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M61 36a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M48 46a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25 66c1.8-10 10.2-16 20-16"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M51 50c9.8 0 18.2 6 20 16"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M41 73c1.8-8.7 8.3-13 15-13s13.2 4.3 15 13"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function WealthPlanningIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M24 67h48"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M31 67V48"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M48 67V38"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M65 67V29"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="m58 33 7-7 7 7"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26 26h16"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M34 18v16"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function SelfEmployedIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <rect
                x="24"
                y="33"
                width="48"
                height="32"
                rx="10"
                stroke="var(--lime)"
                strokeWidth="3.5"
            />
            <path
                d="M37 33v-5c0-4.4 3.6-8 8-8h6c4.4 0 8 3.6 8 8v5"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path d="M24 49h48" stroke="var(--lime)" strokeWidth="3.5" />
            <path
                d="M44 49v7h8v-7"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function PensionIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M48 18v60"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M60 27c0-6.6-5.4-10-12-10s-12 3.4-12 10 5.4 10 12 10 12 3.4 12 10-5.4 10-12 10-12-3.4-12-10"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M66 64a11 11 0 0 1-18 8"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MortgageIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="m22 45 26-20 26 20"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M28 43v28h40V43"
                stroke="var(--lime)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M42 71V55h12v16"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M62 29h8v8"
                stroke="var(--orange)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const serviceVisuals: ServiceVisual[] = [
    {
        src: "/icons/familyfinancialplanning.svg",
        alt: "אייקון תכנון פיננסי למשפחות ויחידים",
        fallback: FamilyPlanningIcon,
    },
    {
        src: "/icons/wealthplanninginvestment.svg",
        alt: "אייקון תכנון הון",
        fallback: WealthPlanningIcon,
    },
    {
        src: "/icons/businessfinanceconsultant.svg",
        alt: "אייקון ליווי פיננסי לעצמאים",
        fallback: SelfEmployedIcon,
    },
    {
        src: "/icons/pensionretirementplanning.svg",
        alt: "אייקון ליווי פנסיוני ותכנון פרישה",
        fallback: PensionIcon,
    },
    {
        src: "/icons/mortgagehomefinance.svg",
        alt: "אייקון משכנתאות ומימון",
        fallback: MortgageIcon,
    },
];

function ServiceIcon({
    src,
    alt,
    Fallback,
}: {
    src: string;
    alt: string;
    Fallback: IconComponent;
}) {
    const [failed, setFailed] = useState(false);

    if (!failed) {
        return (
            <img
                src={src}
                alt={alt}
                className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24"
                loading="lazy"
                onError={() => setFailed(true)}
            />
        );
    }

    return <Fallback className="mx-auto h-20 w-20 sm:h-24 sm:w-24" />;
}

const desktopPlacement = [
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2 md:col-start-2",
    "md:col-span-2 md:col-start-4",
];

const accentLineClasses = [
    "bg-[var(--lime)]",
    "bg-[var(--orange)]",
    "bg-[var(--lime)]",
    "bg-[var(--orange)]",
    "bg-[var(--lime)]",
];

export default function ServicesSection() {
    return (
        <SectionFrame id="services">
            <div className="grid gap-y-10 gap-x-6 md:grid-cols-6 md:gap-y-14" dir="rtl">
                {siteContent.services.items.map((service, index) => {
                    const visual = serviceVisuals[index] ?? serviceVisuals[0];
                    const placementClass = desktopPlacement[index] ?? "md:col-span-2";
                    const accentClass = accentLineClasses[index] ?? "bg-[var(--lime)]";

                    return (
                        <article
                            key={service.title}
                            className={[
                                "text-center",
                                "px-2 sm:px-4",
                                "transition-transform duration-300 hover:-translate-y-1",
                                placementClass,
                            ].join(" ")}
                        >
                            <ServiceIcon
                                src={visual.src}
                                alt={visual.alt}
                                Fallback={visual.fallback}
                            />

                            <h3 className="mt-5 text-[1.15rem] font-bold leading-[1.25] text-white sm:text-[1.35rem]">
                                {service.title}
                            </h3>

                            <span
                                className={`mx-auto mt-4 block h-1 w-14 rounded-full ${accentClass}`}
                                aria-hidden="true"
                            />

                            <p className="mt-4 text-base leading-8 text-[var(--sand)]">
                                {service.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </SectionFrame>
    );
}