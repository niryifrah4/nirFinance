import { useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { siteContent } from "../data/siteContent";

type SafariVideoElement = HTMLVideoElement & {
    webkitEnterFullscreen?: () => void;
};

export default function VideoSection() {
    const { title, src, poster } = siteContent.video;
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
        if (videoRef.current?.paused) setIsPlaying(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
        if (videoRef.current) videoRef.current.currentTime = 0;
    };

    return (
        <section
            id="video"
            className="scroll-mt-8 bg-[#f4f6f3] px-4 py-16 sm:py-20 lg:py-24"
        >
            <ScrollReveal className="mx-auto max-w-4xl">
                {/* Title */}
                <div className="mb-10 text-center" dir="rtl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1d4339]/50">
                        צפו בסרטון
                    </p>
                    <h2 className="text-3xl font-black leading-tight text-[#16342d] sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                </div>

                {/* Video container */}
                <div className="relative">
                    {/* Glow behind video */}
                    <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-[var(--lime)]/8 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                        {src ? (
                            <div className="relative aspect-video w-full bg-black">
                                <video
                                    ref={videoRef}
                                    className="h-full w-full object-cover"
                                    controls={isPlaying}
                                    poster={poster || undefined}
                                    preload="metadata"
                                    onPause={handlePause}
                                    onEnded={handleEnded}
                                >
                                    <source src={src} type="video/mp4" />
                                </video>

                                {!isPlaying && (
                                    <button
                                        type="button"
                                        onClick={handlePlayClick}
                                        aria-label="ניגון הסרטון"
                                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/35 transition hover:bg-black/45"
                                    >
                                        {/* Pulse rings */}
                                        <span className="relative flex items-center justify-center">
                                            <span className="absolute h-32 w-32 animate-ping rounded-full bg-white/8" />
                                            <span className="absolute h-24 w-24 animate-ping rounded-full bg-white/5 [animation-delay:0.4s]" />
                                            {/* Play button */}
                                            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7b3a] text-white shadow-[0_12px_40px_rgba(255,123,58,0.45)] transition hover:scale-105">
                                                <svg viewBox="0 0 24 24" className="h-9 w-9 translate-x-0.5 fill-current" aria-hidden="true">
                                                    <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="relative aspect-video w-full bg-[#16342d]">
                                <div className="flex h-full items-center justify-center">
                                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                                            <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Subtext */}
                <p className="mt-6 text-center text-sm text-[#1d4339]/40" dir="rtl">
                    {siteContent.hero.subtext}
                </p>
            </ScrollReveal>
        </section>
    );
}
