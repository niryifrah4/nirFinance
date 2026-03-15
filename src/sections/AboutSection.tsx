import { useState } from "react";
import SectionFrame from "../components/SectionFrame";
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

export default function AboutSection() {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <SectionFrame id="about">
            <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="mx-auto w-full max-w-md">
                    {!imageFailed ? (
                        <img
                            src={siteContent.about.imageSrc}
                            alt={siteContent.about.name}
                            className="aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                            onError={() => setImageFailed(true)}
                        />
                    ) : (
                        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-black/10">
                            <div className="text-center" dir="rtl">
                                <p className="text-2xl font-bold text-white">כאן תיכנס התמונה</p>
                                <p className="mt-2 text-sm text-[var(--sand)]">public/Nir.jpg</p>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="rounded-[2rem] border border-white/10 bg-black/10 p-6 text-right shadow-[0_16px_50px_rgba(0,0,0,0.14)] sm:p-8"
                    dir="rtl"
                >
                    <p className="text-sm font-medium tracking-wide text-[var(--lime)]">
                        {siteContent.about.eyebrow}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
                        {siteContent.about.name}
                    </h2>

                    {siteContent.about.badges.length ? (
                        <div className="mt-5 flex flex-wrap items-center justify-start gap-2">
                            {siteContent.about.badges.map((badge) => (
                                <span
                                    key={badge}
                                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-[var(--sand)]"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    <div className="mt-6 space-y-4">
                        {siteContent.about.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-base leading-8 text-[var(--sand)] sm:text-lg">
                                {renderTextWithLineBreaks(paragraph)}
                            </p>
                        ))}
                    </div>

                    <div className="mt-7 rounded-[1.5rem] border border-[rgba(173,254,122,0.28)] bg-[rgba(173,254,122,0.08)] p-5">
                        <p className="text-lg font-bold leading-8 text-[var(--lime)] sm:text-[1.15rem]">
                            {renderTextWithLineBreaks(siteContent.about.quote)}
                        </p>
                    </div>
                </div>
            </div>
        </SectionFrame>
    );
}