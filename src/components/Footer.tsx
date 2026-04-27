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
            <footer className="px-4 pb-6 pt-2">
                <div
                    className="mx-auto max-w-6xl border-t border-white/10 py-6 text-center text-sm text-white/60"
                    dir="rtl"
                >
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                        <span className="font-normal">
                            © {new Date().getFullYear()} | {siteContent.footer.text}
                        </span>

                        {legalLinks.map((link) => (
                            <div key={link.href} className="flex items-center gap-3">
                                <span className="text-white/25">•</span>
                                <a
                                    href={link.href}
                                    className="font-medium transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            <CookieBanner />
        </>
    );
}