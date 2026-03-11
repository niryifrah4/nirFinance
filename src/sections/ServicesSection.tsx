import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";

function FamilyIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-current" fill="none" strokeWidth="1.8">
            <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M6.5 19a5.5 5.5 0 0 1 11 0" />
            <path d="M5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M19 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
    );
}

function SelfEmployedIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-current" fill="none" strokeWidth="1.8">
            <path d="M4 19h16" />
            <path d="M7 19V9h10v10" />
            <path d="M9 9V6h6v3" />
            <path d="M10 13h4" />
        </svg>
    );
}

function InvestmentIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-current" fill="none" strokeWidth="1.8">
            <path d="M4 19h16" />
            <path d="M7 16v-4" />
            <path d="M12 16V8" />
            <path d="M17 16v-7" />
            <path d="m15 7 2-2 2 2" />
        </svg>
    );
}

function MortgageIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-current" fill="none" strokeWidth="1.8">
            <path d="m3 11 9-7 9 7" />
            <path d="M5 10.5V20h14v-9.5" />
            <path d="M10 20v-5h4v5" />
        </svg>
    );
}

const icons = [FamilyIcon, SelfEmployedIcon, InvestmentIcon, MortgageIcon];
const iconAccentClasses = [
    "text-[var(--lime)]",
    "text-[var(--orange)]",
    "text-[var(--lime)]",
    "text-[var(--orange)]",
];
const titleAccentClasses = [
    "bg-gradient-to-l from-white to-[var(--lime)] bg-clip-text text-transparent",
    "bg-gradient-to-l from-white to-[var(--orange)] bg-clip-text text-transparent",
    "bg-gradient-to-l from-white to-[var(--lime)] bg-clip-text text-transparent",
    "bg-gradient-to-l from-white to-[var(--orange)] bg-clip-text text-transparent",
];

export default function ServicesSection() {
    return (
        <SectionFrame id="services">
            <div className="grid gap-5 md:grid-cols-2">
                {siteContent.services.items.map((service, index) => {
                    const Icon = icons[index] ?? FamilyIcon;
                    const iconAccentClass = iconAccentClasses[index] ?? "text-[var(--lime)]";
                    const titleAccentClass = titleAccentClasses[index] ?? "text-white";

                    return (
                        <article
                            key={service.title}
                            className="group rounded-[1.75rem] border border-white/10 bg-black/10 p-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:bg-white/[0.06]"
                            dir="rtl"
                        >
                            <div
                                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6 ${iconAccentClass}`}
                            >
                                <Icon />
                            </div>

                            <h3 className={`text-2xl font-black leading-[1.15] ${titleAccentClass}`}>
                                {service.title}
                            </h3>

                            <p className="mt-4 text-base leading-7 text-[var(--sand)]">
                                {service.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </SectionFrame>
    );
}