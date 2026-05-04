import { useEffect } from "react";

export default function ThankYouPage() {
    useEffect(() => {
        // Fire Meta Pixel Lead event ONLY here — single source of truth for ad attribution
        const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
        fbq?.("track", "Lead");

        // Update document title for clarity
        if (typeof document !== "undefined") {
            document.title = "תודה! · ניר יפרח CFP";
        }
    }, []);

    return (
        <div
            style={{
                background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                minHeight: "100vh",
                fontFamily: "'Heebo', Arial, sans-serif",
                direction: "rtl",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* glow blobs (matching brand) */}
            <div
                style={{
                    position: "absolute",
                    right: "-8rem",
                    top: "8rem",
                    width: "24rem",
                    height: "24rem",
                    borderRadius: "9999px",
                    background: "rgba(173,254,122,0.08)",
                    filter: "blur(100px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "-6rem",
                    width: "20rem",
                    height: "20rem",
                    borderRadius: "9999px",
                    background: "rgba(255,165,59,0.04)",
                    filter: "blur(100px)",
                    pointerEvents: "none",
                }}
            />

            <main
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px 24px 80px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Animated lime checkmark */}
                <div
                    style={{
                        width: 96,
                        height: 96,
                        borderRadius: "9999px",
                        background: "#ADFE7A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 32,
                        boxShadow:
                            "0 16px 48px rgba(173,254,122,0.32), 0 0 0 12px rgba(173,254,122,0.12)",
                        animation: "pv-thx-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        style={{
                            width: 48,
                            height: 48,
                            fill: "none",
                            stroke: "#14322B",
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                        }}
                        aria-hidden="true"
                    >
                        <path d="M4 12.6l5.2 5.2L20 7" />
                    </svg>
                </div>

                {/* Heading */}
                <h1
                    style={{
                        fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                        fontWeight: 900,
                        color: "#fff",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.1,
                        margin: "0 0 18px",
                    }}
                >
                    תודה!
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.55,
                        fontWeight: 600,
                        margin: "0 0 8px",
                        maxWidth: "560px",
                    }}
                >
                    קיבלתי את הפרטים שלכם.
                </p>
                <p
                    style={{
                        fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                        color: "#ADFE7A",
                        lineHeight: 1.55,
                        fontWeight: 800,
                        letterSpacing: "-0.01em",
                        margin: "0 0 36px",
                        maxWidth: "560px",
                    }}
                >
                    אחזור אליכם בתוך יום עסקים אחד 📞
                </p>

                {/* Checklist gift — direct download */}
                <div
                    style={{
                        background: "rgba(173,254,122,0.08)",
                        border: "1px solid rgba(173,254,122,0.28)",
                        borderRadius: "16px",
                        padding: "28px 28px 26px",
                        maxWidth: "520px",
                        width: "100%",
                        marginBottom: "40px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: 36, marginBottom: 12, lineHeight: 1 }}>🎁</div>
                    <div
                        style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#ADFE7A",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                        }}
                    >
                        המתנה שלי אליכם
                    </div>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "#fff",
                            lineHeight: 1.4,
                            margin: "0 0 18px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        הצ'ק ליסט הפיננסי המקיף
                    </p>

                    <a
                        href="https://bit.ly/fchecklist"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "#ADFE7A",
                            color: "#14322B",
                            fontSize: "15px",
                            fontWeight: 900,
                            padding: "13px 28px",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            letterSpacing: "-0.01em",
                            boxShadow: "0 8px 24px rgba(173,254,122,0.3)",
                            transition: "transform 0.15s, box-shadow 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(173,254,122,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(173,254,122,0.3)";
                        }}
                    >
                        ⬇  הורדת הצ'ק ליסט
                    </a>

                    <p
                        style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.5)",
                            margin: "16px 0 0",
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        Google Sheets · עדיף לפתוח במחשב
                    </p>
                </div>

                {/* Secondary CTA — watch the video */}
                <div>
                    <p
                        style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "rgba(255,255,255,0.45)",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            margin: "0 0 14px",
                        }}
                    >
                        בינתיים
                    </p>
                    <a
                        href="/#video"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "transparent",
                            color: "#fff",
                            padding: "13px 26px",
                            border: "1.5px solid rgba(173,254,122,0.4)",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "14px",
                            letterSpacing: "-0.005em",
                            transition: "background 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(173,254,122,0.1)";
                            e.currentTarget.style.borderColor = "#ADFE7A";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "rgba(173,254,122,0.4)";
                        }}
                    >
                        <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: "currentColor" }} aria-hidden="true">
                            <path d="M6.5 5.5v9l7-4.5-7-4.5Z" />
                        </svg>
                        צפו בסרטון של 5 דקות
                    </a>
                </div>

                {/* tiny footer link back home */}
                <a
                    href="/"
                    style={{
                        marginTop: 48,
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        fontWeight: 600,
                    }}
                >
                    ← חזרה לדף הבית
                </a>
            </main>

            <style>{`
                @keyframes pv-thx-pop {
                    0% { transform: scale(0); opacity: 0; }
                    60% { transform: scale(1.08); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
