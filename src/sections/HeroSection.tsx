import ScrollReveal from "../components/ScrollReveal";
import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

export default function HeroSection() {
    return (
        <section
            id="top"
            className="overflow-hidden bg-[linear-gradient(180deg,#1d4339_0%,#17352e_100%)] px-4 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24"
        >
            <div className="relative mx-auto max-w-6xl">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute left-[-4rem] top-10 h-36 w-36 rounded-full bg-[rgba(173,254,122,0.08)] blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-[-3rem] h-40 w-40 rounded-full bg-[rgba(255,165,59,0.08)] blur-3xl" />


<ScrollReveal className="relative mx-auto max-w-4xl text-center">
                    <div dir="rtl">
                        {/* Eyebrow */}
                        <p className="mb-5 text-sm font-medium tracking-wide text-white/50">
                            {siteContent.hero.badge}
                        </p>

                        {/* Headline — **text** = lime highlight box */}
                        <h1 className="font-bold leading-[1.35] text-white text-[1.8rem] sm:text-5xl lg:text-[3.2rem]">
                            {siteContent.hero.title.split(/(?<=\.) /).map((line, i) => {
                                const parts = line.split(/\*\*(.+?)\*\*/g);
                                return (
                                    <span key={i} className="block">
                                        {parts.map((part, j) =>
                                            j % 2 === 1 ? (
                                                <span
                                                    key={j}
                                                    className="inline-block rounded-[6px] bg-[var(--lime)] px-2 py-0.5 text-[#14322b] leading-tight mx-1"
                                                >
                                                    {part}
                                                </span>
                                            ) : part
                                        )}
                                    </span>
                                );
                            })}
                        </h1>

                        {/* Sub */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[var(--sand)] sm:text-lg">
                            {renderLines(siteContent.hero.description)}
                        </p>

                        {/* CTA — YouTube style */}
                        <div className="mt-10 flex flex-col items-center gap-3">
                            <a
                                href="#video"
                                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-[#FF0000] px-10 text-lg font-black text-white shadow-[0_8px_32px_rgba(255,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#cc0000]"
                            >
                                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
                                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
                                </svg>
                                {siteContent.hero.primaryButton}
                            </a>
                            <p className="mt-1 text-base font-bold text-[var(--lime)] sm:text-lg">{siteContent.hero.subtext}</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
