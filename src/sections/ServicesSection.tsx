import { type ComponentType, type SVGProps } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

function FamilyPlanningIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path d="M35 36a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M61 36a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M48 46a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 66c1.8-10 10.2-16 20-16" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M51 50c9.8 0 18.2 6 20 16" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M41 73c1.8-8.7 8.3-13 15-13s13.2 4.3 15 13" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
    );
}

function WealthPlanningIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path d="M24 67h48" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M31 67V48" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M48 67V38" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M65 67V29" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="m58 33 7-7 7 7" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 26h16" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M34 18v16" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
    );
}

function LongTermIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <circle cx="48" cy="48" r="26" stroke="var(--lime)" strokeWidth="3.5" />
            <path d="M48 30v18l10 8" stroke="var(--orange)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 48H18" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M78 48h-4" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M48 22v-4" stroke="var(--lime)" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
    );
}

const serviceIcons: IconComponent[] = [FamilyPlanningIcon, WealthPlanningIcon, LongTermIcon];

const accentLineClasses = ["bg-[var(--lime)]", "bg-[var(--orange)]", "bg-[var(--lime)]"];

export default function ServicesSection() {
    return (
        <SectionFrame
            id="services"
            title={siteContent.services.sectionTitle}
            description={siteContent.services.sectionDescription}
        >
            <div className="grid gap-y-10 gap-x-8 sm:grid-cols-3" dir="rtl">
                {siteContent.services.items.map((service, index) => {
                    const Icon = serviceIcons[index] ?? serviceIcons[0];
                    const accentClass = accentLineClasses[index] ?? "bg-[var(--lime)]";

                    return (
                        <article
                            key={service.title}
                            className="rounded-2xl border border-white/8 bg-white/5 p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                        >
                            <Icon className="mx-auto h-20 w-20 sm:h-24 sm:w-24" />

                            <h3 className="mt-5 text-[1.15rem] font-bold leading-[1.25] text-white sm:text-[1.3rem]">
                                {service.title}
                            </h3>

                            <span
                                className={`mx-auto mt-4 block h-1 w-14 rounded-full ${accentClass}`}
                                aria-hidden="true"
                            />

                            <p className="mt-4 text-base leading-8 text-[var(--sand)]">
                                {renderLines(service.description)}
                            </p>
                        </article>
                    );
                })}
            </div>
        </SectionFrame>
    );
}
