import { useRef, useState } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";

type SafariVideoElement = HTMLVideoElement & {
    webkitEnterFullscreen?: () => void;
};

function PlayIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
        </svg>
    );
}

export default function VideoSection() {
    const { title, description, src, poster } = siteContent.video;
    const videoRef = useRef<SafariVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            if (video.requestFullscreen) {
                await video.requestFullscreen();
            } else if (video.webkitEnterFullscreen) {
                video.webkitEnterFullscreen();
            }

            await video.play();
            setIsPlaying(true);
        } catch {
            try {
                await video.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        }
    };

    const handlePause = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            setIsPlaying(false);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
        }
    };

    return (
        <SectionFrame id="video" title={title} description={description}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                {src ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                        <video
                            ref={videoRef}
                            className="h-full w-full bg-black object-cover"
                            controls={isPlaying}
                            poster={poster || undefined}
                            preload="metadata"
                            onPause={handlePause}
                            onEnded={handleEnded}
                        >
                            <source src={src} type="video/mp4" />
                            הדפדפן שלכם לא תומך בהצגת וידאו.
                        </video>

                        {!isPlaying ? (
                            <button
                                type="button"
                                onClick={handlePlayClick}
                                aria-label="ניגון הסרטון"
                                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/25"
                            >
                                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm transition hover:scale-105">
                                    <PlayIcon />
                                </span>
                            </button>
                        ) : null}

                        <div className="pointer-events-none absolute left-[10%] top-[18%] h-28 w-28 rounded-full bg-[rgba(173,254,122,0.08)] blur-3xl" />
                        <div className="pointer-events-none absolute bottom-[10%] right-[12%] h-28 w-28 rounded-full bg-[rgba(255,165,59,0.08)] blur-3xl" />
                    </div>
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