import { useState } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

function Avatar({ image, name }: { image?: string; name: string }) {
    const [failed, setFailed] = useState(false);

    if (image && !failed) {
        return (
            <img
                src={image}
                alt={name}
                className="h-12 w-12 rounded-full object-cover border-2 border-[var(--lime)]/40"
                onError={() => setFailed(true)}
            />
        );
    }

    // Initials fallback
    const initials = name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("");

    return (
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--lime)]/15 border border-[var(--lime)]/30">
            <span className="text-sm font-bold text-[var(--lime)]">{initials}</span>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <SectionFrame id="testimonials" title={siteContent.testimonials.sectionTitle} variant="dark">
            <div className="grid gap-6 sm:grid-cols-3" dir="rtl">
                {siteContent.testimonials.items.map((item) => (
                    <article
                        key={item.author}
                        className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                    >
                        {/* Result badge */}
                        <div className="mb-4 inline-block self-start rounded-full bg-[var(--lime)] px-3 py-1 text-xs font-bold text-[#14322b]">
                            ✦ {item.result}
                        </div>

                        {/* Quote */}
                        <p className="flex-1 border-r-2 border-[var(--lime)] pr-4 text-sm leading-7 text-[var(--sand)]">
                            {renderLines(item.text)}
                        </p>

                        {/* Author row */}
                        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                            <Avatar image={item.image} name={item.author} />
                            <div>
                                <p className="text-sm font-bold text-white">{item.author}</p>
                                {item.profession && (
                                    <p className="text-xs text-white/45">{item.profession}</p>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </SectionFrame>
    );
}
