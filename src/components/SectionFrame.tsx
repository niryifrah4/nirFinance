import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type SectionVariant = "dark" | "light";

type SectionFrameProps = {
    id: string;
    title?: string;
    description?: string;
    children: ReactNode;
    variant?: SectionVariant;
    containerClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
};

export default function SectionFrame({
    id,
    title,
    description,
    children,
    variant = "dark",
    containerClassName = "",
    contentClassName = "",
    titleClassName = "",
}: SectionFrameProps) {
    const isDark = variant === "dark";

    const sectionClasses = isDark
        ? "bg-[linear-gradient(180deg,#1d4339_0%,#17352e_100%)] text-white"
        : "bg-[#f6f3eb] text-[#16342d]";

    const headingClasses = [
        "text-3xl font-bold leading-[1.08] sm:text-4xl",
        titleClassName || (isDark ? "text-white" : "text-[#16342d]"),
    ]
        .filter(Boolean)
        .join(" ");

    const descriptionClasses = isDark ? "text-[var(--sand)]" : "text-[#49655c]";

    return (
        <section id={id} className={`scroll-mt-28 ${sectionClasses}`}>
            <div className={["mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24", containerClassName].filter(Boolean).join(" ")}>
                <ScrollReveal>
                    {(title || description) && (
                        <div className="mx-auto mb-10 max-w-3xl text-center" dir="rtl">
                            {title ? <h2 className={headingClasses}>{title}</h2> : null}

                            {description ? (
                                <p className={`mt-4 text-base font-normal leading-8 sm:text-lg ${descriptionClasses}`}>
                                    {description}
                                </p>
                            ) : null}
                        </div>
                    )}

                    <div className={contentClassName}>{children}</div>
                </ScrollReveal>
            </div>
        </section>
    );
}
