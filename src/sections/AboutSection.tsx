import { useState } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

export default function AboutSection() {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <SectionFrame id="about" variant="dark">
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <div className="mx-auto w-[60%] sm:w-[55%] lg:w-full lg:max-w-md">
                    {!imageFailed ? (
                        <img
                            src={siteContent.about.imageSrc}
                            alt={siteContent.about.name}
                            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                            onError={() => setImageFailed(true)}
                        />
                    ) : (
                        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-dashed border-white/15 bg-black/10">
                            <div className="text-center" dir="rtl">
                                <p className="text-2xl font-bold text-white">כאן תיכנס התמונה</p>
                                <p className="mt-2 text-sm text-[var(--sand)]">public/Nir.jpg</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center lg:text-right" dir="rtl">
                    <p className="text-sm font-medium tracking-wide text-[var(--lime)]">
                        {siteContent.about.eyebrow}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
                        {siteContent.about.name}
                    </h2>

                    <div className="mt-6 space-y-3">
                        {siteContent.about.paragraphs.map((paragraph) => {
                            const isHighlight = paragraph.startsWith("##highlight## ");
                            const text = isHighlight ? paragraph.replace("##highlight## ", "") : paragraph;
                            return (
                                <p
                                    key={paragraph}
                                    className={`text-base leading-8 sm:text-lg ${
                                        isHighlight
                                            ? "font-bold text-[var(--lime)]"
                                            : "text-[var(--sand)]"
                                    }`}
                                >
                                    {renderLines(text)}
                                </p>
                            );
                        })}
                    </div>


                </div>
            </div>
        </SectionFrame>
    );
}
