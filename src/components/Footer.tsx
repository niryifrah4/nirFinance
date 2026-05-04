import CookieBanner from "./CookieBanner";
import { siteContent } from "../data/siteContent";

const legalLinks = [
    {
        label: "הצהרת נגישות",
        href: "/legal?tab=accessibility",
    },
    {
        label: "מדיניות פרטיות",
        href: "/legal?tab=privacy",
    },
    {
        label: "תנאי שימוש",
        href: "/legal?tab=terms",
    },
];

export default function Footer() {
    return (
        <>
            <footer
                style={{
                    background: "#16342D",
                    padding: "24px 16px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        textAlign: "center",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "'Heebo', Arial, sans-serif",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px 14px",
                    }}
                    dir="rtl"
                >
                    <span style={{ fontWeight: 500 }}>
                        © {new Date().getFullYear()} | {siteContent.footer.text}
                    </span>

                    {legalLinks.map((link) => (
                        <span key={link.href} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "rgba(255,255,255,0.25)" }}>•</span>
                            <a
                                href={link.href}
                                style={{
                                    color: "rgba(255,255,255,0.7)",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "#ADFE7A"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                            >
                                {link.label}
                            </a>
                        </span>
                    ))}
                </div>
            </footer>

            <CookieBanner />
        </>
    );
}