/**
 * עמוד דוגמא בלבד — /preview
 * מציג את עיצוב ה-Hero החדש לאישור לפני יישום
 */

import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

export default function PreviewPage() {
    return (
        <div
            style={{
                background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                minHeight: "100vh",
                fontFamily: "'Fb Tubic Sans', Arial, sans-serif",
                direction: "rtl",
            }}
        >
            {/* ── Preview Banner ── */}
            <div
                style={{
                    background: "#adfe7a",
                    color: "#14322b",
                    textAlign: "center",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                }}
            >
                🔍 מצב דוגמא — לא הדף האמיתי · <a href="/" style={{ color: "#14322b", textDecoration: "underline" }}>חזרה לדף הנוכחי</a>
            </div>

            {/* ── NEW Hero ── */}
            <section
                style={{
                    position: "relative",
                    display: "flex",
                    minHeight: "92svh",
                    alignItems: "center",
                    overflow: "hidden",
                    padding: "80px 24px",
                }}
            >
                {/* Glow blobs */}
                <div style={{
                    position: "absolute", left: "-6rem", top: "5rem",
                    width: "18rem", height: "18rem", borderRadius: "9999px",
                    background: "rgba(173,254,122,0.07)", filter: "blur(80px)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "2rem", right: "-4rem",
                    width: "14rem", height: "14rem", borderRadius: "9999px",
                    background: "rgba(255,165,59,0.05)", filter: "blur(80px)",
                    pointerEvents: "none",
                }} />

                <div style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "1152px" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 400px",
                        gap: "80px",
                        alignItems: "center",
                    }}>

                        {/* ── Text ── */}
                        <div>
                            {/* Badge pill */}
                            <span style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                border: "1px solid rgba(173,254,122,0.25)",
                                background: "rgba(173,254,122,0.1)",
                                borderRadius: "9999px",
                                padding: "6px 16px",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "0.05em",
                                color: "#adfe7a",
                                marginBottom: "28px",
                            }}>
                                {siteContent.hero.badge}
                            </span>

                            {/* Headline */}
                            <h1 style={{
                                fontWeight: 900,
                                lineHeight: 1.28,
                                color: "#fff",
                                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                                margin: "0 0 24px",
                            }}>
                                {siteContent.hero.title.split(/(?<=\.) /).map((line, i) => {
                                    const parts = line.split(/\*\*(.+?)\*\*/g);
                                    return (
                                        <span key={i} style={{ display: "block" }}>
                                            {parts.map((part, j) =>
                                                j % 2 === 1 ? (
                                                    <span key={j} style={{
                                                        display: "inline-block",
                                                        background: "#adfe7a",
                                                        color: "#14322b",
                                                        borderRadius: "6px",
                                                        padding: "2px 8px",
                                                        margin: "0 4px",
                                                        lineHeight: "1.3",
                                                    }}>
                                                        {part}
                                                    </span>
                                                ) : part
                                            )}
                                        </span>
                                    );
                                })}
                            </h1>

                            {/* Description */}
                            <p style={{
                                maxWidth: "500px",
                                fontSize: "18px",
                                lineHeight: 2,
                                color: "rgba(255,255,255,0.6)",
                                margin: "0 0 40px",
                            }}>
                                {renderLines(siteContent.hero.description)}
                            </p>

                            {/* CTA buttons */}
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                                <a
                                    href="#video"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        minHeight: "54px",
                                        borderRadius: "9999px",
                                        background: "#adfe7a",
                                        color: "#14322b",
                                        fontWeight: 900,
                                        fontSize: "16px",
                                        padding: "0 32px",
                                        textDecoration: "none",
                                        boxShadow: "0 8px 32px rgba(173,254,122,0.28)",
                                    }}
                                >
                                    <svg viewBox="0 0 20 20" style={{ width: 20, height: 20, fill: "currentColor" }}>
                                        <path d="M6.5 5.5v9l7-4.5-7-4.5Z" />
                                    </svg>
                                    {siteContent.hero.primaryButton}
                                </a>
                                <a
                                    href="#contact"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "underline",
                                        textUnderlineOffset: "4px",
                                    }}
                                >
                                    או קבע שיחת אפיון ←
                                </a>
                            </div>

                            <p style={{
                                marginTop: "20px",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "rgba(173,254,122,0.75)",
                            }}>
                                {siteContent.hero.subtext}
                            </p>
                        </div>

                        {/* ── Photo ── */}
                        <div style={{ position: "relative", width: "360px" }}>
                            {/* Glow ring */}
                            <div style={{
                                position: "absolute",
                                inset: "-20px",
                                borderRadius: "2.5rem",
                                border: "1px solid rgba(173,254,122,0.12)",
                            }} />

                            <img
                                src="/Nir.jpg"
                                alt="ניר יפרח — מתכנן פיננסי CFP"
                                style={{
                                    position: "relative",
                                    zIndex: 10,
                                    width: "100%",
                                    aspectRatio: "3/4",
                                    objectFit: "cover",
                                    objectPosition: "center 15%",
                                    borderRadius: "2rem",
                                    boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
                                    display: "block",
                                }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/DSC03313-Enhanced-NR-Edit.jpg";
                                }}
                            />

                            {/* CFP badge */}
                            <div style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "-20px",
                                zIndex: 20,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                borderRadius: "16px",
                                background: "#adfe7a",
                                padding: "10px 16px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                            }}>
                                <span style={{ color: "#14322b", fontSize: "14px", fontWeight: 900 }}>CFP ✓</span>
                            </div>

                            {/* Objectivity pill */}
                            <div style={{
                                position: "absolute",
                                top: "20px",
                                left: "-20px",
                                zIndex: 20,
                                borderRadius: "16px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(29,67,57,0.9)",
                                padding: "10px 16px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                                backdropFilter: "blur(8px)",
                            }}>
                                <span style={{ color: "#fff", fontSize: "14px", fontWeight: 700 }}>100% אובייקטיבי</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Sticky Bar preview ── */}
            <div style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#16342d",
                borderTop: "1px solid rgba(173,254,122,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 40px",
                gap: "16px",
                zIndex: 50,
            }}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
                    שיחת אפיון ראשונית —{" "}
                    <strong style={{ color: "#fff" }}>30 דקות, ללא עלות</strong>
                </p>
                <a
                    href="#contact"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "9999px",
                        background: "#adfe7a",
                        color: "#14322b",
                        fontWeight: 900,
                        fontSize: "14px",
                        padding: "10px 24px",
                        textDecoration: "none",
                        boxShadow: "0 4px 20px rgba(173,254,122,0.3)",
                        whiteSpace: "nowrap",
                    }}
                >
                    קבע שיחת אפיון ←
                </a>
            </div>
        </div>
    );
}
