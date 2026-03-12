import { siteContent } from "../data/siteContent";

function renderTextWithLineBreaks(text: string) {
    const sentences = text
        .split(/(?<=\.)\s*/g)
        .map((sentence) => sentence.trim())
        .filter(Boolean);

    return sentences.map((sentence, index) => (
        <span key={`${sentence}-${index}`}>
            {sentence}
            {index < sentences.length - 1 ? <br /> : null}
        </span>
    ));
}

export default function HeroSection() {
    const titleParts = siteContent.hero.title.split("|").map((part) => part.trim());
    const firstLine = titleParts[0] ?? siteContent.hero.title;
    const secondLine = titleParts[1] ?? "";

    return (
        <section id="top" className="px-4 pb-4 pt-28 sm:pt-32">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,rgba(173,254,122,0.2),rgba(255,255,255,0.08),rgba(255,165,59,0.18))] p-[1px] shadow-[0_30px_120px_rgba(0,0,0,0.22)]">
                <div className="relative rounded-[calc(2.4rem-1px)] bg-white/5 px-6 py-16 backdrop-blur-sm sm:px-10 sm:py-20 lg:px-16">
                    <div className="pointer-events-none absolute left-[-4rem] top-10 h-36 w-36 rounded-full bg-[rgba(173,254,122,0.08)] blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 right-[-3rem] h-40 w-40 rounded-full bg-[rgba(255,165,59,0.07)] blur-3xl" />

                    <div className="relative mx-auto max-w-4xl text-center" dir="rtl">
                        <div className="mx-auto mb-6 h-[2px] w-24 rounded-full bg-gradient-to-l from-[var(--orange)] via-[var(--lime)] to-white/30" />

                        <h1 className="text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
                            <span className="block text-white">{firstLine}</span>
                            {secondLine ? <span className="mt-2 block text-white">{secondLine}</span> : null}
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-[var(--sand)] sm:text-xl sm:leading-8">
                            {renderTextWithLineBreaks(siteContent.hero.description)}
                        </p>

                        <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3">
                            <a
                                href="#video"
                                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-[rgba(10,22,18,0.78)] px-7 text-base font-bold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:bg-[rgba(10,22,18,0.9)]"
                            >
                                {siteContent.hero.primaryButton}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}