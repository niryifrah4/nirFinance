import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";

function PlayIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
        </svg>
    );
}

export default function VideoSection() {
    const { title, description, src, poster } = siteContent.video;

    return (
        <SectionFrame
            id="video"
            title={title}
            description={description}
            titleClassName="bg-gradient-to-l from-[var(--lime)] via-white to-[var(--orange)] bg-clip-text text-transparent"
        >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                {src ? (
                    <video
                        className="aspect-video w-full bg-black/20"
                        controls
                        playsInline
                        poster={poster || undefined}
                    >
                        <source src={src} />
                        הדפדפן שלכם לא תומך בהצגת וידאו.
                    </video>
                ) : (
                    <div className="relative aspect-video w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))]">
                        <div className="pointer-events-none absolute left-[10%] top-[18%] h-28 w-28 rounded-full bg-[rgba(173,254,122,0.08)] blur-3xl" />
                        <div className="pointer-events-none absolute bottom-[10%] right-[12%] h-28 w-28 rounded-full bg-[rgba(255,165,59,0.08)] blur-3xl" />

                        <div className="relative flex h-full items-center justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                                <PlayIcon />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </SectionFrame>
    );
}