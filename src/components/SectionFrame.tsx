import type { ReactNode } from "react";

type SectionFrameProps = {
    id: string;
    title?: string;
    description?: string;
    children: ReactNode;
    containerClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
};

export default function SectionFrame({
    id,
    title,
    description,
    children,
    containerClassName = "",
    contentClassName = "",
    titleClassName = "",
}: SectionFrameProps) {
    const outerClasses = [
        "mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(173,254,122,0.2),rgba(255,255,255,0.08),rgba(255,165,59,0.18))] p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.18)]",
        containerClassName,
    ]
        .filter(Boolean)
        .join(" ");

    const innerClasses =
        "rounded-[calc(2rem-1px)] bg-white/5 p-6 backdrop-blur-sm sm:p-10 lg:p-12";

    const headingClasses = [
        "text-3xl font-black leading-[1.08] sm:text-4xl",
        titleClassName || "text-white",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section id={id} className="scroll-mt-28 px-4 py-4 sm:py-5">
            <div className={outerClasses}>
                <div className={innerClasses}>
                    {(title || description) && (
                        <div className="mx-auto mb-8 max-w-3xl text-center" dir="rtl">
                            {title ? <h2 className={headingClasses}>{title}</h2> : null}

                            {description ? (
                                <p className="mt-4 text-base leading-7 text-[var(--sand)] sm:text-lg sm:leading-8">
                                    {description}
                                </p>
                            ) : null}
                        </div>
                    )}

                    <div className={contentClassName}>{children}</div>
                </div>
            </div>
        </section>
    );
}