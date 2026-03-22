import ScrollReveal from "../components/ScrollReveal";
import { siteContent } from "../data/siteContent";

const highlightedSentence =
    "לחצו פליי וגלו ב־5 דקות איך אתם צריכים להסתכל על ניהול הכסף שלכם.";

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
    const mobileTitle = titleParts.join(" | ");

    const baseDescription = siteContent.hero.description
        .replace(highlightedSentence, "")
        .trim();

    return (
        <section
            id="top"
            className="overflow-hidden bg-[linear-gradient(180deg,#1d4339_0%,#17352e_100%)] px-4 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24"
        >
            <div className="relative mx-auto max-w-6xl">
                <div className="pointer-events-none absolute left-[-4rem] top-10 h-36 w-36 rounded-full bg-[rgba(173,254,122,0.08)] blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-[-3rem] h-40 w-40 rounded-full bg-[rgba(255,165,59,0.08)] blur-3xl" />

                <ScrollReveal className="relative mx-auto max-w-4xl text-center">
                    <div dir="rtl">
                        <h1 className="text-[1.9rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:hidden">
                            {mobileTitle}
                        </h1>

                        <h1 className="hidden font-bold leading-[1.08] text-white sm:block sm:text-5xl lg:text-[3.4rem]">
                            <span className="block">{firstLine}</span>
                            {secondLine ? <span className="mt-2 block">{secondLine}</span> : null}
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--sand)] sm:text-lg">
                            {renderTextWithLineBreaks(baseDescription)}
                        </p>

                        <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-8 text-[var(--lime)] sm:text-2xl sm:leading-10">
                            {highlightedSentence}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}