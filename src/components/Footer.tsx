import { siteContent } from "../data/siteContent";

export default function Footer() {
    return (
        <footer className="px-4 pb-6 pt-2">
            <div
                className="mx-auto max-w-6xl border-t border-white/10 py-6 text-center text-sm text-white/60"
                dir="rtl"
            >
                © {new Date().getFullYear()} | {siteContent.footer.text}
            </div>
        </footer>
    );
}