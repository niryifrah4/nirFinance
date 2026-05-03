import { useRef, useState } from "react";
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
        <section id="video" className="video-section" dir="rtl">
            <div className="video-inner">
                <div className="video-wrap">
                    {src ? (
                        <>
                            <video
                                ref={videoRef}
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
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(0,0,0,0.3)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    <span style={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: '#16342D', marginRight: -4 }} aria-hidden="true">
                                            <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
                                        </svg>
                                    </span>
                                </button>
                            )}
                        </>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'var(--dark)' }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>אין וידאו</span>
                        </div>
                    )}
                </div>

                <div className="video-text">
                    <div className="section-label">צפו בסרטון</div>
                    <div className="divider" />
                    <h2 className="section-title">{title}</h2>
                    <p className="section-desc" style={{ marginTop: 24 }}>{siteContent.hero.subtext}</p>
                </div>
            </div>
        </section>
    );
}
