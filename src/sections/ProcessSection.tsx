import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

export default function ProcessSection() {
    return (
        <section id="process" className="scroll-mt-28 bg-[#fdf6ee]">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto mb-10 max-w-3xl text-center" dir="rtl">
                    <h2 className="text-3xl font-bold leading-[1.08] text-[#16342d] sm:text-4xl">
                        {siteContent.process.sectionTitle}
                    </h2>
                    <p className="mt-4 text-base font-normal leading-8 text-[#49655c] sm:text-lg">
                        {siteContent.process.sectionDescription}
                    </p>
                </div>

                <div className="relative mt-4" dir="rtl">
                    {/* Connecting line on desktop */}
                    <div className="absolute right-[calc(50%-1px)] top-12 hidden h-[calc(100%-96px)] w-0.5 bg-[#e8dfd3] lg:block" aria-hidden="true" />

                    <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
                        {siteContent.process.steps.map((step, index) => (
                            <div key={step.number} className="relative text-center">
                                {/* Step number bubble */}
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f0e8de] bg-[#fffaf5] shadow-[0_8px_24px_rgba(22,52,45,0.08)]">
                                    <span
                                        className="text-2xl font-black"
                                        style={{ color: index % 2 === 0 ? "var(--lime)" : "var(--orange)" }}
                                    >
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-[1.2rem] font-bold text-[#16342d]">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-base leading-8 text-[#49655c]">
                                    {renderLines(step.description)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
