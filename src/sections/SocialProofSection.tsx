import { useState } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2">
            <path d="m9 6 6 6-6 6" />
        </svg>
    );
}

function ArrowLeftIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2">
            <path d="m15 6-6 6 6 6" />
        </svg>
    );
}

export default function SocialProofSection() {
    const items = siteContent.socialProof.items.filter((item) => item.src?.trim());
    const [activeIndex, setActiveIndex] = useState(0);
    const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

    if (!items.length) {
        return null;
    }

    const activeItem = items[activeIndex];

    const previousSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const markAsFailed = (src: string) => {
        setFailedImages((prev) => ({
            ...prev,
            [src]: true,
        }));
    };

    return (
        <SectionFrame id="social-proof" variant="light">
            <div className="relative mx-auto max-w-5xl">
                <div className="rounded-[2rem] border border-[#d7ddd5] bg-white p-4 shadow-[0_20px_70px_rgba(22,52,45,0.08)] sm:p-6">
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm rounded-[2rem] border border-[#d7ddd5] bg-[#f8f6ef] p-2 shadow-[0_14px_45px_rgba(22,52,45,0.08)]">
                            {failedImages[activeItem.src] ? (
                                <div
                                    className="flex aspect-[9/16] items-center justify-center rounded-[1.5rem] bg-[#eef1ec] px-6 text-center"
                                    dir="rtl"
                                >
                                    <p className="text-base font-medium leading-7 text-[#49655c]">
                                        התמונה לא נטענה. בדוק שהקובץ נמצא בנתיב שהוגדר ב־siteContent.
                                    </p>
                                </div>
                            ) : (
                                <div className="flex aspect-[9/16] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                                    <img
                                        key={activeItem.src}
                                        src={activeItem.src}
                                        alt={activeItem.alt}
                                        className="h-full w-full object-contain"
                                        loading="lazy"
                                        onError={() => markAsFailed(activeItem.src)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-2">
                        {items.map((item, index) => (
                            <button
                                key={`${item.src}-${index}`}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`overflow-hidden rounded-xl border transition ${index === activeIndex
                                    ? "border-[var(--lime)] opacity-100"
                                    : "border-[#d7ddd5] opacity-65 hover:opacity-100"
                                    }`}
                                aria-label={`מעבר לתמונה ${index + 1}`}
                            >
                                {failedImages[item.src] ? (
                                    <div className="flex h-14 w-10 items-center justify-center bg-[#eef1ec] text-[10px] text-[#49655c]">
                                        SP
                                    </div>
                                ) : (
                                    <div className="flex h-14 w-10 items-center justify-center bg-white">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                            onError={() => markAsFailed(item.src)}
                                        />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={previousSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7ddd5] bg-white text-[#16342d] transition hover:bg-[#eef1ec]"
                            aria-label="הקודם"
                        >
                            <ArrowLeftIcon />
                        </button>

                        <div className="flex items-center gap-2">
                            {items.map((item, index) => (
                                <button
                                    key={item.src}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`מעבר לתמונה ${index + 1}`}
                                    className={`h-2.5 rounded-full transition ${index === activeIndex
                                        ? "w-8 bg-[#16342d]"
                                        : "w-2.5 bg-[#b4c0b9] hover:bg-[#8ea196]"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={nextSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7ddd5] bg-white text-[#16342d] transition hover:bg-[#eef1ec]"
                            aria-label="הבא"
                        >
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </SectionFrame>
    );
}
