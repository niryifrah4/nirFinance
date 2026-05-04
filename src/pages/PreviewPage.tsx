/**
 * עמוד דוגמא בלבד — /preview
 * Hero (forest) > Video (forest-2) > Reframe (cream)
 * שאר הסקשנים מיועדים למי שדילג על הסרטון
 */

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

/** Break a Hebrew sentence into multiple lines after every period. */
function splitAtPeriods(text: string) {
    return text.split(/(?<=\.) /).map((part, i, arr) => (
        <Fragment key={i}>
            {part}
            {i < arr.length - 1 && <br />}
        </Fragment>
    ));
}

const aboutParagraphs = [
    "בן 33, נשוי לשי, אבא לרני ונועם. בעשור האחרון הקמתי שני חדרי כושר ומסעדה — ניהלתי כסף בפועל, לא בתיאוריה.",
    "כשהבנתי שאנשים קרובים אליי חולמים על משהו אחד ומקבלים החלטות אחרות לגמרי רק על סמך תחושת בטן יצאתי ללמוד ולקבל הסמכת CFP, יועץ לכלכלת המשפחה ויועץ משכנתאות.",
    "פיננסים זה לא רק מספרים. לפני המספרים יש אנשים, יש מטרות, יש חלומות. אני מתרגם בין השניים לתכנית כלכלית אחת ברורה שמותאמת למידות שלכם.",
];

const aboutHighlight =
    "לרוב המשפחות יש את אותן מטרות — הבית, החינוך, הפנסיה, החופש. אבל אין להן את הידע והכלים להרכיב את הכל לתכנית ברורה — וכאן אני נכנס לתמונה.";

const testimonials = [
    {
        result: "זוג נשוי + 2",
        text: "תודה על כל הסבלנות והנכונות בתהליך. תודה שאתה קיים. תודה שאתה גם חבר וגם איש מקצוע. אנחנו לא לוקחים כלום כמובן מאליו. וכיף לנו שטוב כמוך הגיע אלינו. יום יבוא ונגיד — ניר יפרח זה שהיום הוא מפלצת וכולם מכירים, אז ליווה אותנו ונתן לנו את הכלים למי שאנחנו היום.",
        author: "אלעד ונעמה אלקובי",
        profession: "מהנדס בחברת נדל״ן",
    },
    {
        result: "עצמאית, ליווי אישי",
        text: "קיבלתי הודעה מהבנק שיש לי 9,341 ש״ח שכלל לא ידעתי עליהם. שלדעתי 10 שנים זה לא היה המצב — תמיד היה מינוס. אז זה לגמרי שלך! ואני מאחלת לכולם שיכירו אותך.",
        author: "שני אזולאי",
        profession: "תרפיסטית",
    },
    {
        result: "זוג נשוי + 2",
        text: "גם אנחנו מאוד שמחים להכיר אותך ולעבור את התהליך המדהים הזה ביחד איתך. למדנו המון, מרגישים יותר מסופקים שגם אנחנו דואגים לעתיד שלנו ושל הילדים שלנו. וגם יודעים בדיוק מה הולך לנו בבנק — הכנסות, הוצאות, והשקעות. תודה רבה לך על הכל.",
        author: "אורי ושירה יצחקי כהן",
        profession: "עצמאי + עובדת סוציאלית",
    },
];

const pillars: { title: string; icon: ReactNode }[] = [
    {
        title: "ניהול תזרים מזומנים",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="11" rx="1.5" stroke="#16342D" strokeWidth="1.6" />
                <circle cx="12" cy="12.5" r="2.5" stroke="#16342D" strokeWidth="1.6" />
                <path d="M3 11h2M19 11h2" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "מגוון השקעות",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 19h18" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M6 19v-4M10 19v-7M14 19v-10M18 19v-12" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M14 9l2-2 2 2" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "צביעת כסף לפי יעדים",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="#16342D" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.5" stroke="#16342D" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="1.5" fill="#16342D" />
            </svg>
        ),
    },
    {
        title: "מעקב נכון אחרי מינוף",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 6v14M5 20h14" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M5 12l-2 4h6l-2-4M19 10l-2 4h6l-2-4" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="6" r="1.6" fill="#16342D" />
            </svg>
        ),
    },
    {
        title: "ניהול סיכונים",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l-7 3v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" stroke="#16342D" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "תכנון פנסיוני",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="#16342D" strokeWidth="1.6" />
                <path d="M8 9V7a4 4 0 0 1 8 0v2" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="14" r="1.5" fill="#16342D" />
            </svg>
        ),
    },
    {
        title: "תכנון פרישה",
        icon: (
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 19c2-6 6-9 9-9s7 3 9 9" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="18" cy="7" r="2.5" stroke="#16342D" strokeWidth="1.6" />
                <path d="M3 21h18" stroke="#16342D" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
];

const faqItems = [
    {
        question: "למי זה מתאים?",
        answer:
            "לזוגות ומשפחות שמסתדרים אבל אין להם תמונה שלמה — ולאנשים שנמצאים במינוס ורוצים לצאת ממנו. בין אם יש לכם הכנסה יציבה ואין תוכנית, ובין אם אתם מרגישים שהכסף ״נעלם״ בסוף החודש — יש כאן עבודה משמעותית שאפשר לעשות ביחד.",
    },
    {
        question: "למי זה לא מתאים?",
        answer:
            "למי שמחפש להתעשר מחר בבוקר. התהליך שלנו בנוי על בניית בסיס חזק — לא על קיצורי דרך. אם אתם מחפשים טיפ להשקעה חמה או מניה שתזנק, זה לא המקום הנכון.",
    },
    {
        question: "כמה זמן לוקח התהליך?",
        answer:
            "שיחת האפיון לוקחת כ-30 דקות. לאחריה, התהליך המלא — מיפוי, בניית תכנית וליווי שוטף — לוקח בדרך כלל כחמישה חודשים עד חצי שנה, בהתאם למסלול שתבחרו.",
    },
    {
        question: "כמה עולה לעבוד איתי?",
        answer:
            "שיחת האפיון היא חינם לגמרי. אשמח למסור עלויות ומחירים בהתאם לסוג התוכנית שנגדיר ביחד בשיחה — כי כל מקרה שונה.",
    },
    {
        question: "מה ההבדל בין מתכנן פיננסי CFP לכל איש פיננסים אחר?",
        answer:
            "הכל מתחיל בסוג ההכשרה. CFP הוא תואר עולמי מוכר שמחייב לימוד מעמיק של כל תחומי הפיננסים — ניהול תזרים מזומנים, פנסיה, ביטוחים, מיסוי ותכנון פרישה. הרבה אנשים קוראים לעצמם ״מתכנן פיננסי״ — אבל זה לא תואר מוגן בחוק.",
    },
    {
        question: "אנחנו מסתדרים טוב, למה שנצטרך תוכנית?",
        answer:
            "בדיוק בגלל שאתם מסתדרים — יש ערך לשמר ולהגדיל את מה שבניתם. רוב הזוגות שאני פוגש חושבים שהם בסדר, ואז בשיחה הראשונה מגלים פערים שלא ידעו שיש — בביטוחים, בפנסיה, בתכנון עתידי. ״מסתדרים״ זה לא אותו דבר כמו ״תוכנית״.",
    },
];

const plans = [
    {
        id: "alone",
        name: "מסלול 1",
        subtitle: "מתכננים לבד",
        features: [
            "גישה לקורס התכנון פיננסי המלא",
            "גישה למערכת התכנון",
            "גישה לקהילה",
        ],
        active: false,
    },
    {
        id: "together",
        name: "מסלול 2",
        subtitle: "מתכננים ביחד",
        features: [
            "גישה לקורס התכנון פיננסי המלא",
            "גישה למערכת התכנון",
            "2 מפגשים פרונטליים / זום",
            "גישה לקהילה",
        ],
        active: false,
    },
    {
        id: "full",
        name: "מסלול 3",
        subtitle: "הליווי המלא",
        features: [
            "5 מפגשים פרונטליים / זום",
            "מיפוי פיננסי מלא",
            "בניית תכנית טווח ארוך ותכנון הון",
            "סקירה ופגישה עם סוכן פנסיוני",
            "גישה למערכת התכנון",
            "גישה לקהילה ולקורס הדיגיטלי",
        ],
        active: true,
    },
];

const processSteps = [
    {
        number: "01",
        title: "מיפוי והבנת היכולות הפיננסיות",
        description:
            "נבין מה נקודת המוצא שלנו. איך אנחנו מתנהלים פיננסית. איזה נכסים ואיזה התחייבויות יש לנו.",
    },
    {
        number: "02",
        title: "שלב התכנון",
        description:
            "שיפור ההתנהלות הפיננסית שכולל בניית תזרים מזומנים חזק, שיפור הגנות פיננסיות, ניהול סיכונים וצביעת כסף לפי מטרות ויעדים. כל השקעה צריכה לפגוש יעד. עוד כסף זה פשוט לא חזק מספיק.",
    },
    {
        number: "03",
        title: "מעקב ובקרה",
        description:
            "תכנון השקעות ופיזור נכסים בהתאם למטרות וליעדים. מעקב שוטף שמבטיח שהתכנית מתעדכנת לפי שינויים בחיים או בשוק. כי תכנית חיה תמיד מנצחת תכנית מהמדף.",
    },
];

const reframes = [
    {
        num: "01",
        before: "אנחנו צריכים להרוויח יותר",
        after:
            "ברוב המקרים הבעיה היא לא ההכנסה — אלא איך מנהלים אותה. רוב המשפחות יכולות לחסוך הרבה יותר ממה שהן חושבות.",
    },
    {
        num: "02",
        before: "נחסוך קצת יותר בחודש הבא",
        after:
            "לנהל חיים כלכליים בלי תכנית זה כמו לטוס בלי נווט. אתם זזים, אבל לא יודעים לאן — ובסוף חוזרים לאותה נקודה.",
    },
    {
        num: "03",
        before: "כל אחד מאיתנו מטפל בחלק שלו",
        after:
            "כסף בזוגיות זה ספורט קבוצתי. גם אם שניכם עובדים קשה, אתם דוחפים לכיוונים שונים עם הרגלים שונים וצורות חשיבה שונות. תכנית פיננסית היא הרבה מעבר למספרים על תשואות והשקעות.",
    },
];

type NotifyState =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success" }
    | { type: "error"; message: string };

type ContactValues = { name: string; phone: string; email: string };
type ContactStatus =
    | { type: "idle"; message: string }
    | { type: "loading"; message: string }
    | { type: "success"; message: string }
    | { type: "error"; message: string };

const checklistTags = [
    "התנהלות כלכלית",
    "בנקים ואשראי",
    "פנסיה וביטוחים",
    "השקעות",
];

type SafariVideoElement = HTMLVideoElement & {
    webkitEnterFullscreen?: () => void;
};

export default function PreviewPage({ showBanner = true }: { showBanner?: boolean } = {}) {
    const videoRef = useRef<SafariVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTesti, setActiveTesti] = useState(0);

    const prevTesti = () =>
        setActiveTesti((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const nextTesti = () =>
        setActiveTesti((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    // Notify-me for inactive plans
    const [openPlanId, setOpenPlanId] = useState<string | null>(null);
    const [notifyEmail, setNotifyEmail] = useState("");
    const [notifyState, setNotifyState] = useState<NotifyState>({ type: "idle" });
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    // IntersectionObserver to animate strikethrough on Reframe cards
    useEffect(() => {
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
        );
        document.querySelectorAll(".pv-cancel").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Contact form
    const [contactValues, setContactValues] = useState<ContactValues>({
        name: "",
        phone: "",
        email: "",
    });
    const [contactStatus, setContactStatus] = useState<ContactStatus>({
        type: "idle",
        message: "",
    });

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!accessKey) {
            setContactStatus({ type: "error", message: "לא הוגדר Web3Forms access key." });
            return;
        }
        setContactStatus({ type: "loading", message: "שולח פרטים..." });
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: "פנייה חדשה מאתר ניר יפרח",
                    from_name: "אתר ניר יפרח",
                    name: contactValues.name,
                    phone: contactValues.phone,
                    email: contactValues.email,
                    message: `פנייה חדשה מהאתר\n\nשם מלא: ${contactValues.name}\nטלפון: ${contactValues.phone}\nאימייל: ${contactValues.email}`,
                    botcheck: "",
                }),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message || "משהו השתבש בשליחת הטופס.");
            // Redirect to thank-you page (Pixel Lead event fires there)
            window.location.href = "/thank-you";
            return;
        } catch (err) {
            const message = err instanceof Error ? err.message : "משהו השתבש. נסו שוב.";
            setContactStatus({ type: "error", message });
        }
    };

    const openNotify = (id: string) => {
        setOpenPlanId(id);
        setNotifyEmail("");
        setNotifyState({ type: "idle" });
    };

    const submitNotify = async (
        e: React.FormEvent<HTMLFormElement>,
        plan: typeof plans[0],
    ) => {
        e.preventDefault();
        if (!accessKey) {
            setNotifyState({ type: "error", message: "שגיאת תצורה" });
            return;
        }
        setNotifyState({ type: "loading" });
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `🔔 הרשמה להתראה — ${plan.subtitle}`,
                    from_name: "אתר ניר יפרח",
                    email: notifyEmail,
                    message: `נרשם להתראה: ${plan.name} — ${plan.subtitle}\nאימייל: ${notifyEmail}`,
                    botcheck: "",
                }),
            });
            const result = await res.json();
            if (!result.success) throw new Error(result.message || "שגיאה");
            const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
            fbq?.("track", "Lead", { content_name: `Notify: ${plan.subtitle}` });
            setNotifyState({ type: "success" });
            setNotifyEmail("");
        } catch (err) {
            const message = err instanceof Error ? err.message : "שגיאה. נסו שוב.";
            setNotifyState({ type: "error", message });
        }
    };

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
        <div
            style={{
                background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                minHeight: "100vh",
                fontFamily: "'Heebo', Arial, sans-serif",
                direction: "rtl",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* ── STICKY HEADER NAV ── */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    background: "rgba(245,242,236,0.92)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: "1px solid rgba(22,52,45,0.08)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        padding: "12px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    {/* Logo (photo only) */}
                    <a
                        href="#top"
                        aria-label="לראש הדף"
                        style={{
                            display: "inline-block",
                            flexShrink: 0,
                        }}
                    >
                        <span style={{
                            width: 36, height: 36,
                            borderRadius: "9999px",
                            border: "1.5px solid rgba(22,52,45,0.2)",
                            overflow: "hidden",
                            display: "inline-block",
                        }}>
                            <img
                                src="/Nir.jpg"
                                alt="ניר יפרח"
                                style={{
                                    width: "100%", height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center 20%",
                                    display: "block",
                                }}
                            />
                        </span>
                    </a>

                    {/* Desktop nav links (hidden on mobile) */}
                    <nav className="pv-nav-links" style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                    }}>
                        {[
                            { href: "#video", label: "הסרטון" },
                            { href: "#about", label: "מי אני" },
                            { href: "#planning", label: "מה זה כולל" },
                            { href: "#process", label: "איך זה עובד" },
                            { href: "#plans", label: "המסלולים" },
                            { href: "#faq", label: "שאלות" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "rgba(22,52,45,0.7)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "#16342D"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(22,52,45,0.7)"; }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side: CTA + hamburger */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                        {/* CTA button — forest dark, less bright */}
                        <a
                            href="#contact"
                            style={{
                                background: "#16342D",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: 800,
                                padding: "9px 18px",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                letterSpacing: "-0.01em",
                                whiteSpace: "nowrap",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "#0f211b"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "#16342D"; }}
                        >
                            צור קשר
                        </a>

                        {/* Hamburger (mobile only) */}
                        <button
                            type="button"
                            className="pv-hamburger"
                            onClick={() => setIsMenuOpen((v) => !v)}
                            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                            aria-expanded={isMenuOpen}
                            style={{
                                width: 40, height: 40,
                                borderRadius: "9999px",
                                border: "1px solid rgba(22,52,45,0.18)",
                                background: "transparent",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                                padding: 0,
                                transition: "background 0.2s",
                            }}
                        >
                            <span style={{
                                width: 18, height: 2, background: "#16342D", borderRadius: 2,
                                transition: "transform 0.2s",
                                transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                            }} />
                            <span style={{
                                width: 18, height: 2, background: "#16342D", borderRadius: 2,
                                opacity: isMenuOpen ? 0 : 1,
                                transition: "opacity 0.15s",
                            }} />
                            <span style={{
                                width: 18, height: 2, background: "#16342D", borderRadius: 2,
                                transition: "transform 0.2s",
                                transform: isMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                            }} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <div
                        onClick={closeMenu}
                        style={{
                            position: "fixed",
                            inset: 0,
                            top: "60px",
                            background: "rgba(22,52,45,0.5)",
                            backdropFilter: "blur(8px)",
                            zIndex: 99,
                            animation: "pv-fade 0.2s ease",
                        }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: "#F5F2EC",
                                padding: "16px",
                                borderBottom: "1px solid rgba(22,52,45,0.08)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px",
                            }}
                        >
                            {[
                                { href: "#video", label: "הסרטון" },
                                { href: "#about", label: "מי אני" },
                                { href: "#planning", label: "מה זה כולל" },
                                { href: "#process", label: "איך זה עובד" },
                                { href: "#plans", label: "המסלולים" },
                                { href: "#faq", label: "שאלות" },
                                { href: "#contact", label: "צור קשר" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    style={{
                                        display: "block",
                                        padding: "14px 16px",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        color: "#16342D",
                                        textDecoration: "none",
                                        borderRadius: "10px",
                                        transition: "background 0.15s",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(22,52,45,0.06)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>
            {/* card hover animations + mobile responsiveness */}
            <style>{`
                .pv-card-light {
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .pv-card-light:hover {
                    background: #F5F2EC !important;
                    transform: translateY(-2px);
                }
                .pv-card-dark {
                    border-top: 2px solid transparent;
                    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }
                .pv-card-dark:hover {
                    background: rgba(255,255,255,0.07) !important;
                    border-top-color: #ADFE7A;
                    transform: translateY(-2px);
                }

                .pv-testi-arrow:hover {
                    background: #ADFE7A !important;
                    transform: translateY(-50%) scale(1.06) !important;
                }

                @keyframes pv-fade {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .pv-grid-contact {
                    grid-template-columns: 1fr 1fr;
                    gap: 56px;
                }
                @media (max-width: 900px) {
                    .pv-grid-contact {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                }
                .pv-input {
                    width: 100%;
                    background: rgba(255,255,255,0.06);
                    border: 1.5px solid rgba(173,254,122,0.18);
                    border-radius: 8px;
                    padding: 13px 14px;
                    font-size: 15px;
                    font-family: inherit;
                    color: #fff;
                    transition: border-color 0.2s, background 0.2s;
                    direction: rtl;
                    outline: none;
                }
                .pv-input::placeholder { color: rgba(255,255,255,0.35); }
                .pv-input:focus {
                    border-color: #ADFE7A;
                    background: rgba(255,255,255,0.1);
                }

                /* Animated strikethrough — true line-through that works on multi-line text */
                .pv-cancel {
                    text-decoration: line-through;
                    text-decoration-color: transparent;
                    text-decoration-thickness: 3px;
                    text-decoration-skip-ink: none;
                    transition: text-decoration-color 0.7s cubic-bezier(0.7, 0, 0.3, 1);
                }
                .pv-cancel.is-visible {
                    text-decoration-color: rgba(229,115,115,0.78);
                }

                .pv-pill:hover {
                    background: rgba(173,254,122,0.18) !important;
                    border-color: rgba(173,254,122,0.4) !important;
                    transform: translateY(-1px);
                }

                /* Mobile responsive — under 900px */
                @media (max-width: 900px) {
                    .pv-grid-3 {
                        grid-template-columns: 1fr !important;
                    }
                    .pv-grid-about {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .pv-grid-about-photo {
                        max-width: 320px;
                        margin: 0 auto;
                    }
                    .pv-grid-pillars {
                        grid-template-columns: 1fr !important;
                    }
                    .pv-testi-arrow {
                        width: 40px !important;
                        height: 40px !important;
                        right: 0 !important;
                        left: 0 !important;
                    }
                    .pv-testi-arrow[aria-label="העדות הקודמת"] {
                        right: 8px !important;
                        left: auto !important;
                    }
                    .pv-testi-arrow[aria-label="העדות הבאה"] {
                        left: 8px !important;
                        right: auto !important;
                    }
                    .pv-nowrap-desktop {
                        white-space: normal !important;
                    }
                    .pv-hero-title-line {
                        white-space: normal !important;
                    }
                }

                /* Smaller mobile — under 480px */
                .pv-hamburger { display: none; }
                @media (max-width: 1000px) {
                    .pv-nav-links {
                        display: none !important;
                    }
                    .pv-hamburger {
                        display: flex !important;
                    }
                }
                .pv-hamburger:hover {
                    background: rgba(22,52,45,0.06) !important;
                }

                @media (max-width: 480px) {
                    .pv-section {
                        padding-left: 20px !important;
                        padding-right: 20px !important;
                    }
                    .pv-play-btn {
                        width: 72px !important;
                        height: 72px !important;
                    }
                    .pv-play-svg {
                        width: 30px !important;
                        height: 30px !important;
                    }
                    .pv-big-num {
                        font-size: 48px !important;
                    }
                }
            `}</style>
            {/* ── Preview Banner (only on /preview) ── */}
            {showBanner && (
                <div
                    style={{
                        background: "#adfe7a",
                        color: "#14322b",
                        textAlign: "center",
                        padding: "10px 16px",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                    }}
                >
                    🔍 תצוגה — Hero + Video (ה-funnel המרכזי) ·{" "}
                    <a href="/" style={{ color: "#14322b", textDecoration: "underline" }}>
                        חזרה לאתר
                    </a>
                </div>
            )}

            {/* Glow blobs */}
            <div
                style={{
                    position: "absolute",
                    right: "-8rem",
                    top: "8rem",
                    width: "24rem",
                    height: "24rem",
                    borderRadius: "9999px",
                    background: "rgba(173,254,122,0.07)",
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

            {/* ── HERO ── */}
            <section
                id="top"
                style={{
                    maxWidth: "820px",
                    margin: "0 auto",
                    padding: "64px 32px 40px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "9999px",
                        overflow: "hidden",
                        margin: "0 auto 18px",
                        border: "2px solid rgba(173,254,122,0.4)",
                    }}
                >
                    <img
                        src="/Nir.jpg"
                        alt="ניר יפרח"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center 20%",
                        }}
                    />
                </div>

                <h1
                    style={{
                        fontWeight: 900,
                        lineHeight: 1.05,
                        color: "#fff",
                        fontSize: "clamp(1.7rem, 4.4vw, 3.4rem)",
                        margin: "0 0 18px",
                        letterSpacing: "-0.025em",
                    }}
                >
                    <span className="pv-hero-title-line" style={{ display: "block" }}>
                        אתם מנהלים עסק של{" "}
                        <span style={{ color: "#adfe7a" }}>מיליונים.</span>
                    </span>
                    <span style={{ display: "block" }}>קוראים לו המשפחה שלכם.</span>
                </h1>

                <div style={{ margin: "0 0 24px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            background: "#fff",
                            color: "#14322b",
                            padding: "4px 12px",
                            borderRadius: "8px",
                            fontSize: "clamp(1.1rem, 1.65vw, 1.4rem)",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            letterSpacing: "-0.01em",
                            boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
                        }}
                    >
                        5 דקות שישנו את הדרך שבה אתם חושבים ומתנהלים עם הכסף שלכם.
                    </span>
                </div>

                <a
                    href="#video"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#adfe7a",
                        color: "#14322b",
                        fontSize: "17px",
                        fontWeight: 900,
                        padding: "11px 22px",
                        borderRadius: "9999px",
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                    }}
                >
                    <svg
                        viewBox="0 0 20 20"
                        style={{ width: 24, height: 24, fill: "currentColor" }}
                        aria-hidden="true"
                    >
                        <path d="M6.5 5.5v9l7-4.5-7-4.5Z" />
                    </svg>
                    צפו בסרטון
                </a>
            </section>

            {/* ── VIDEO SECTION (cream — the funnel anchor) ── */}
            <section
                id="video"
                style={{
                    background: "#F5F2EC",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 32px 48px",
                }}
            >
                <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
                {/* small section label */}
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        color: "#16342D",
                        opacity: 0.65,
                        textTransform: "uppercase",
                        marginBottom: "20px",
                    }}
                >
                    הסרטון
                </div>

                {/* Title */}
                <h2
                    style={{
                        textAlign: "center",
                        fontWeight: 900,
                        fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
                        color: "#16342D",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        margin: "0 0 16px",
                    }}
                >
                    להתחיל לנהל, להפסיק להתנהל.
                </h2>

                {/* Subtitle */}
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
                        color: "#5C5A54",
                        margin: "0 auto 48px",
                        maxWidth: "560px",
                        lineHeight: 1.7,
                        fontWeight: 500,
                    }}
                >
                    תוך 5 דקות תבינו את ההבדל בין משפחה שמנהלת למשפחה שמנחשת.
                </p>

                {/* THE VIDEO — big, central */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "1024px",
                        margin: "0 auto",
                        aspectRatio: "16/9",
                        borderRadius: "20px",
                        overflow: "hidden",
                        background: "#0a1f1a",
                        boxShadow:
                            "0 30px 80px rgba(22,52,45,0.18), 0 0 0 1px rgba(22,52,45,0.08)",
                    }}
                >
                    <video
                        ref={videoRef}
                        controls={isPlaying}
                        poster=""
                        preload="metadata"
                        playsInline
                        onPause={handlePause}
                        onEnded={handleEnded}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    >
                        <source
                            src="https://res.cloudinary.com/dtjr9qzet/video/upload/v1773334171/2_ocxr95.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {!isPlaying && (
                        <button
                            type="button"
                            onClick={handlePlayClick}
                            aria-label="ניגון הסרטון"
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "24px",
                                background:
                                    "linear-gradient(160deg, #1d4339 0%, #16342d 100%)",
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.2s",
                                padding: "32px 24px",
                                overflow: "hidden",
                            }}
                        >
                            {/* lime glow */}
                            <span
                                aria-hidden="true"
                                style={{
                                    position: "absolute",
                                    width: "60%",
                                    aspectRatio: "1/1",
                                    borderRadius: "9999px",
                                    background:
                                        "radial-gradient(circle, rgba(173,254,122,0.18) 0%, rgba(173,254,122,0) 70%)",
                                    pointerEvents: "none",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />

                            {/* Headline overlay */}
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "#fff",
                                    direction: "rtl",
                                    maxWidth: "640px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: 800,
                                        letterSpacing: "0.2em",
                                        color: "#ADFE7A",
                                        textTransform: "uppercase",
                                        marginBottom: "12px",
                                    }}
                                >
                                    סרטון של 5 דקות
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
                                        fontWeight: 900,
                                        lineHeight: 1.2,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    איך מנהלים{" "}
                                    <span style={{ color: "#ADFE7A" }}>עסק של מיליונים</span>
                                </div>
                            </div>

                            {/* Big play button */}
                            <span
                                style={{
                                    width: 88,
                                    height: 88,
                                    borderRadius: "9999px",
                                    background: "#adfe7a",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow:
                                        "0 16px 48px rgba(173,254,122,0.35), 0 0 0 8px rgba(173,254,122,0.15)",
                                    transition: "transform 0.2s",
                                    flexShrink: 0,
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        width: 36,
                                        height: 36,
                                        fill: "#14322b",
                                        marginRight: -6,
                                    }}
                                    aria-hidden="true"
                                >
                                    <path d="M8 5.14v13.72c0 .73.79 1.19 1.42.83l10.22-6.86a.95.95 0 0 0 0-1.66L9.42 4.31A.95.95 0 0 0 8 5.14Z" />
                                </svg>
                            </span>

                            {/* Sub headline */}
                            <div
                                style={{
                                    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                                    fontWeight: 600,
                                    color: "rgba(255,255,255,0.7)",
                                    letterSpacing: "-0.005em",
                                    textAlign: "center",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                בלי ניחושים. בלי תחושת בטן.
                            </div>

                            {/* legacy hidden */}
                            <span
                                style={{
                                    display: "none",
                                }}
                            >
                                ⏱ 5 דקות
                            </span>
                        </button>
                    )}
                </div>
                </div>
            </section>

            {/* ── REFRAME SECTION (white) ── */}
            <section
                id="reframe"
                style={{
                    background: "#fff",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#16342D",
                            opacity: 0.65,
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        תחשבו על זה רגע
                    </div>

                    {/* BIG STAT */}
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                        <div
                            style={{
                                fontSize: "clamp(3rem, 8vw, 6rem)",
                                fontWeight: 900,
                                color: "#16342D",
                                letterSpacing: "-0.04em",
                                lineHeight: 1,
                                marginBottom: "16px",
                            }}
                        >
                            <span
                                style={{
                                    background: "#16342D",
                                    color: "#ADFE7A",
                                    padding: "0 14px",
                                    borderRadius: "10px",
                                    display: "inline-block",
                                    lineHeight: 1.05,
                                }}
                            >
                                ₪9,000,000
                            </span>
                        </div>
                        <p
                            className="pv-nowrap-desktop"
                            style={{
                                fontSize: "clamp(0.95rem, 1.45vw, 1.25rem)",
                                color: "#16342D",
                                lineHeight: 1.25,
                                margin: 0,
                                fontWeight: 600,
                                whiteSpace: "nowrap",
                            }}
                        >
                            זה הסכום שזוג יכניס ב-30 השנים הקרובות אם הם מרוויחים 25,000 ₪ נטו בחודש.
                        </p>
                        <p
                            style={{
                                fontSize: "clamp(0.95rem, 1.45vw, 1.25rem)",
                                color: "#16342D",
                                lineHeight: 1.25,
                                maxWidth: "660px",
                                margin: "4px auto 0",
                                fontWeight: 600,
                            }}
                        >
                            וזה עוד לפני גדילה במשכורות, פנסיה, השקעות וירושות עתידיות.
                        </p>
                    </div>

                    {/* Punchline */}
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(1.1rem, 1.55vw, 1.3rem)",
                            color: "#16342D",
                            lineHeight: 1.4,
                            maxWidth: "680px",
                            margin: "0 auto 4px",
                            fontWeight: 600,
                        }}
                    >
                        כשמסתכלים על זה ככה — זה{" "}
                        <span style={{ fontWeight: 800 }}>דורש תכנון</span>.
                    </p>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)",
                            color: "#c0392b",
                            lineHeight: 1.4,
                            maxWidth: "680px",
                            margin: "0 auto 8px",
                            fontWeight: 800,
                            letterSpacing: "-0.015em",
                        }}
                    >
                        רוב המשפחות פשוט מסתמכות על תחושות בטן.
                    </p>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                            color: "#5C5A54",
                            lineHeight: 1.45,
                            margin: "0 auto 28px",
                            fontWeight: 600,
                            letterSpacing: "-0.005em",
                        }}
                    >
                        ואז מרגישים את זה:
                    </p>

                    {/* 3 reframe cards — Services brand pattern (light) */}
                    <div
                        className="pv-grid-3"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "2px",
                            background: "rgba(173,254,122,0.18)",
                        }}
                    >
                        {reframes.map((r) => (
                            <div
                                key={r.num}
                                className="pv-card-light"
                                style={{
                                    background: "#fff",
                                    padding: "40px 32px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* "wrong belief" — animated strikethrough on scroll */}
                                <div
                                    style={{
                                        fontSize: "clamp(1.15rem, 1.5vw, 1.3rem)",
                                        color: "#16342D",
                                        fontWeight: 800,
                                        lineHeight: 1.3,
                                        marginBottom: "14px",
                                        letterSpacing: "-0.015em",
                                    }}
                                >
                                    <span className="pv-cancel">"{r.before}"</span>
                                </div>

                                {/* the truth */}
                                <div
                                    style={{
                                        fontSize: "15px",
                                        color: "#5C5A54",
                                        lineHeight: 1.55,
                                        fontWeight: 500,
                                    }}
                                >
                                    {splitAtPeriods(r.after)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT SECTION (forest dark) — נעים מאוד ── */}
            <section
                id="about"
                style={{
                    background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div
                    className="pv-grid-about"
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "minmax(280px, 380px) 1fr",
                        gap: "56px",
                        alignItems: "center",
                    }}
                >
                    {/* ── Photo column (left in RTL) ── */}
                    <div className="pv-grid-about-photo" style={{ position: "relative" }}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "3/4",
                                borderRadius: "20px",
                                overflow: "hidden",
                                background: "#0a1f1a",
                                boxShadow:
                                    "0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(173,254,122,0.1)",
                            }}
                        >
                            <img
                                src="/DSC03313-Enhanced-NR-Edit.jpg"
                                alt="ניר יפרח"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center 25%",
                                    display: "block",
                                }}
                            />
                        </div>
                        {/* CFP badge floating */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-12px",
                                left: "-12px",
                                background: "#ADFE7A",
                                color: "#14322B",
                                fontSize: "13px",
                                fontWeight: 900,
                                padding: "8px 14px",
                                borderRadius: "10px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                                letterSpacing: "0.05em",
                            }}
                        >
                            CFP®
                        </div>
                    </div>

                    {/* ── Text column (right in RTL) ── */}
                    <div>
                        {/* eyebrow */}
                        <div
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.2em",
                                color: "#ADFE7A",
                                textTransform: "uppercase",
                                marginBottom: "12px",
                            }}
                        >
                            נעים מאוד!
                        </div>

                        {/* name */}
                        <h2
                            style={{
                                fontWeight: 900,
                                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                                color: "#fff",
                                letterSpacing: "-0.025em",
                                lineHeight: 1,
                                margin: "0 0 8px",
                            }}
                        >
                            ניר יפרח
                        </h2>

                        {/* role tagline */}
                        <div
                            style={{
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.55)",
                                fontWeight: 500,
                                lineHeight: 1.5,
                                marginBottom: "24px",
                            }}
                        >
                            מתכנן פיננסי CFP · יועץ משכנתאות · יועץ לכלכלת המשפחה
                        </div>

                        {/* paragraphs */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                            }}
                        >
                            {aboutParagraphs.map((p) => (
                                <p
                                    key={p}
                                    style={{
                                        fontSize: "15px",
                                        color: "rgba(255,255,255,0.85)",
                                        lineHeight: 1.7,
                                        margin: 0,
                                        fontWeight: 500,
                                    }}
                                >
                                    {splitAtPeriods(p)}
                                </p>
                            ))}

                            {/* highlight paragraph — boxed with lime accent */}
                            <div
                                style={{
                                    marginTop: "8px",
                                    background: "rgba(173,254,122,0.08)",
                                    borderRight: "3px solid #ADFE7A",
                                    borderRadius: "8px",
                                    padding: "16px 18px",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "15px",
                                        color: "#fff",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        fontWeight: 600,
                                    }}
                                >
                                    {splitAtPeriods(aboutHighlight)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS FINANCIAL PLANNING (cream — pills) ── */}
            <section
                id="planning"
                style={{
                    background: "#F5F2EC",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#16342D",
                            opacity: 0.65,
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        מה זה תכנון פיננסי
                    </div>

                    {/* Title */}
                    <h2
                        className="pv-nowrap-desktop"
                        style={{
                            textAlign: "center",
                            fontWeight: 900,
                            fontSize: "clamp(1.3rem, 2.4vw, 1.95rem)",
                            color: "#16342D",
                            letterSpacing: "-0.015em",
                            lineHeight: 1.2,
                            margin: "0 auto 6px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        תכנון פיננסי זה לא רק דיבורים על תשואות וריבית דריבית.
                    </h2>

                    {/* Big lime callout */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "12px",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                                fontWeight: 900,
                                color: "#14322B",
                                background: "#ADFE7A",
                                padding: "4px 16px",
                                borderRadius: "8px",
                                lineHeight: 1.15,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            זו תכנית חיים שלמה.
                        </span>
                    </div>

                    {/* sub */}
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
                            color: "#5C5A54",
                            margin: "0 auto 40px",
                            maxWidth: "640px",
                            lineHeight: 1.65,
                            fontWeight: 500,
                        }}
                    >
                        שמתחשבת בכם, במטרות שלכם, וביכולות.
                    </p>

                    {/* 7 pillars — simple pills */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "10px",
                            maxWidth: "780px",
                            margin: "0 auto 32px",
                        }}
                    >
                        {pillars.map((p) => (
                            <span
                                key={p.title}
                                className="pv-pill"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    background: "#fff",
                                    border: "1px solid rgba(22,52,45,0.1)",
                                    borderRadius: "9999px",
                                    padding: "8px 16px 8px 14px",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#16342D",
                                    letterSpacing: "-0.01em",
                                    transition: "background 0.2s, border-color 0.2s, transform 0.15s",
                                    cursor: "default",
                                }}
                            >
                                <span style={{ width: 18, height: 18, display: "inline-flex", flexShrink: 0 }}>
                                    {p.icon}
                                </span>
                                {p.title}
                            </span>
                        ))}
                    </div>

                    {/* closing line */}
                    <div
                        style={{
                            textAlign: "center",
                            paddingTop: "32px",
                            borderTop: "1px solid rgba(22,52,45,0.12)",
                            maxWidth: "780px",
                            margin: "0 auto",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",
                                fontWeight: 700,
                                color: "#16342D",
                                lineHeight: 1.6,
                                margin: 0,
                            }}
                        >
                            וכל זה{" "}
                            <span
                                style={{
                                    background: "#ADFE7A",
                                    color: "#14322B",
                                    fontWeight: 900,
                                    padding: "2px 10px",
                                    borderRadius: "6px",
                                    display: "inline-block",
                                    lineHeight: 1.3,
                                }}
                            >
                                מבלי להתפשר על חיים טובים גם בהווה.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PROCESS SECTION (white) ── */}
            <section
                id="process"
                style={{
                    background: "#fff",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#16342D",
                            opacity: 0.65,
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        איך זה עובד
                    </div>

                    {/* Title */}
                    <h2
                        style={{
                            textAlign: "center",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
                            color: "#16342D",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.18,
                            margin: "0 0 12px",
                        }}
                    >
                        כולם רוצים להשקיע.
                    </h2>

                    {/* Description */}
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "clamp(0.95rem, 1.25vw, 1.1rem)",
                            color: "#5C5A54",
                            margin: "0 auto 40px",
                            maxWidth: "560px",
                            lineHeight: 1.6,
                            fontWeight: 500,
                        }}
                    >
                        אבל ככה עושים את זה נכון.
                    </p>

                    {/* 3 process steps — light card pattern with BIG translucent numbers */}
                    <div
                        className="pv-grid-3"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "2px",
                            background: "rgba(22,52,45,0.12)",
                        }}
                    >
                        {processSteps.map((s) => (
                            <div
                                key={s.number}
                                className="pv-card-light"
                                style={{
                                    background: "#fff",
                                    padding: "40px 32px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* BIG translucent number */}
                                <div
                                    style={{
                                        fontSize: "64px",
                                        fontWeight: 900,
                                        color: "rgba(22,52,45,0.1)",
                                        lineHeight: 1,
                                        marginBottom: "20px",
                                        letterSpacing: "-0.04em",
                                    }}
                                >
                                    {s.number}
                                </div>

                                {/* title */}
                                <h3
                                    style={{
                                        fontSize: "20px",
                                        color: "#16342D",
                                        fontWeight: 800,
                                        margin: "0 0 14px",
                                        lineHeight: 1.3,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {s.title}
                                </h3>

                                {/* description */}
                                <p
                                    style={{
                                        fontSize: "15px",
                                        color: "#5C5A54",
                                        lineHeight: 1.55,
                                        margin: 0,
                                        fontWeight: 500,
                                    }}
                                >
                                    {splitAtPeriods(s.description)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS SECTION (forest dark) ── */}
            <section
                id="testimonials"
                style={{
                    background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#ADFE7A",
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        לקוחות מספרים
                    </div>

                    {/* Title */}
                    <h2
                        style={{
                            textAlign: "center",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
                            color: "#fff",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.18,
                            margin: "0 0 40px",
                        }}
                    >
                        מה אומרים לקוחות
                    </h2>

                    {/* Testimonials carousel */}
                    <div
                        style={{
                            position: "relative",
                            maxWidth: "780px",
                            margin: "0 auto",
                        }}
                    >
                        {/* Active card */}
                        <div
                            key={testimonials[activeTesti].author}
                            style={{
                                background: "rgba(255,255,255,0.04)",
                                padding: "44px 56px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                                borderRadius: "16px",
                                border: "1px solid rgba(173,254,122,0.18)",
                                animation: "pv-fade 0.3s ease",
                            }}
                        >
                            {/* result tag */}
                            <span
                                style={{
                                    display: "inline-block",
                                    alignSelf: "flex-start",
                                    fontSize: "11px",
                                    fontWeight: 800,
                                    letterSpacing: "0.15em",
                                    color: "#ADFE7A",
                                    textTransform: "uppercase",
                                    background: "rgba(173,254,122,0.12)",
                                    padding: "5px 10px",
                                    borderRadius: "4px",
                                }}
                            >
                                {testimonials[activeTesti].result}
                            </span>

                            {/* quote */}
                            <p
                                style={{
                                    fontSize: "clamp(1rem, 1.4vw, 1.18rem)",
                                    color: "rgba(255,255,255,0.9)",
                                    lineHeight: 1.75,
                                    margin: 0,
                                    fontWeight: 500,
                                }}
                            >
                                {splitAtPeriods(testimonials[activeTesti].text)}
                            </p>

                            {/* author */}
                            <div
                                style={{
                                    paddingTop: "20px",
                                    borderTop: "1px solid rgba(173,254,122,0.15)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        color: "#fff",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {testimonials[activeTesti].author}
                                </div>
                                <div
                                    style={{
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.55)",
                                        marginTop: "2px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {testimonials[activeTesti].profession}
                                </div>
                            </div>
                        </div>

                        {/* Prev arrow (right side in RTL) */}
                        <button
                            type="button"
                            onClick={prevTesti}
                            aria-label="העדות הקודמת"
                            className="pv-testi-arrow"
                            style={{
                                position: "absolute",
                                right: "-26px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "52px",
                                height: "52px",
                                borderRadius: "9999px",
                                border: "1px solid rgba(22,52,45,0.12)",
                                background: "#fff",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 6px 18px rgba(22,52,45,0.08)",
                                transition: "transform 0.2s, background 0.2s",
                            }}
                        >
                            <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "#16342D" }} aria-hidden="true">
                                <path d="M8.5 5.5l7 6.5-7 6.5V5.5z" />
                            </svg>
                        </button>

                        {/* Next arrow (left side in RTL) */}
                        <button
                            type="button"
                            onClick={nextTesti}
                            aria-label="העדות הבאה"
                            className="pv-testi-arrow"
                            style={{
                                position: "absolute",
                                left: "-26px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "52px",
                                height: "52px",
                                borderRadius: "9999px",
                                border: "1px solid rgba(22,52,45,0.12)",
                                background: "#fff",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 6px 18px rgba(22,52,45,0.08)",
                                transition: "transform 0.2s, background 0.2s",
                            }}
                        >
                            <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "#16342D" }} aria-hidden="true">
                                <path d="M15.5 5.5l-7 6.5 7 6.5V5.5z" />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination dots */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "8px",
                            marginTop: "28px",
                        }}
                    >
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setActiveTesti(i)}
                                aria-label={`עדות ${i + 1}`}
                                style={{
                                    width: i === activeTesti ? "28px" : "8px",
                                    height: "8px",
                                    borderRadius: "9999px",
                                    border: "none",
                                    cursor: "pointer",
                                    background:
                                        i === activeTesti
                                            ? "#ADFE7A"
                                            : "rgba(255,255,255,0.22)",
                                    transition: "width 0.25s ease, background 0.2s",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PLANS SECTION (cream) ── */}
            <section
                id="plans"
                style={{
                    background: "#F5F2EC",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#16342D",
                            opacity: 0.65,
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        המסלולים שלנו
                    </div>

                    {/* Title */}
                    <h2
                        style={{
                            textAlign: "center",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
                            color: "#16342D",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.18,
                            margin: "0 0 40px",
                        }}
                    >
                        בחרו את המסלול שלכם
                    </h2>

                    {/* 3 plan cards */}
                    <div
                        className="pv-grid-3"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "16px",
                            alignItems: "stretch",
                        }}
                    >
                        {plans.map((plan) => {
                            const isOpen = openPlanId === plan.id;
                            const isSuccess = isOpen && notifyState.type === "success";

                            return (
                                <div
                                    key={plan.id}
                                    style={{
                                        background: plan.active ? "#16342D" : "#fff",
                                        borderRadius: "16px",
                                        padding: "32px 28px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "18px",
                                        border: plan.active
                                            ? "1px solid rgba(173,254,122,0.4)"
                                            : "1px solid rgba(22,52,45,0.08)",
                                        boxShadow: plan.active
                                            ? "0 16px 40px rgba(22,52,45,0.18)"
                                            : "none",
                                        position: "relative",
                                    }}
                                >
                                    {/* Badge */}
                                    <div
                                        style={{
                                            display: "inline-flex",
                                            alignSelf: "flex-start",
                                            fontSize: "11px",
                                            fontWeight: 800,
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            padding: "5px 10px",
                                            borderRadius: "4px",
                                            background: plan.active
                                                ? "#ADFE7A"
                                                : "rgba(22,52,45,0.06)",
                                            color: plan.active ? "#14322B" : "#5C5A54",
                                        }}
                                    >
                                        {plan.active ? "המסלול המומלץ" : "בקרוב"}
                                    </div>

                                    {/* Plan name */}
                                    <div>
                                        <div
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: 700,
                                                letterSpacing: "0.12em",
                                                color: plan.active
                                                    ? "rgba(173,254,122,0.7)"
                                                    : "#5E8060",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {plan.name}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "22px",
                                                fontWeight: 900,
                                                color: plan.active ? "#fff" : "#16342D",
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {plan.subtitle}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul
                                        style={{
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                            flex: 1,
                                        }}
                                    >
                                        {plan.features.map((f) => (
                                            <li
                                                key={f}
                                                style={{
                                                    fontSize: "14px",
                                                    color: plan.active
                                                        ? "rgba(255,255,255,0.78)"
                                                        : "#5C5A54",
                                                    lineHeight: 1.5,
                                                    display: "flex",
                                                    gap: "8px",
                                                }}
                                            >
                                                <span style={{ color: "#ADFE7A", flexShrink: 0 }}>✓</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    {plan.active && (
                                        <a
                                            href="#contact"
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                padding: "14px 20px",
                                                borderRadius: "8px",
                                                background: "#ADFE7A",
                                                color: "#14322B",
                                                fontSize: "15px",
                                                fontWeight: 900,
                                                textDecoration: "none",
                                                letterSpacing: "-0.01em",
                                                marginTop: "8px",
                                            }}
                                        >
                                            קבעו שיחת אפיון ←
                                        </a>
                                    )}

                                    {!plan.active && !isOpen && (
                                        <button
                                            type="button"
                                            onClick={() => openNotify(plan.id)}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                textAlign: "center",
                                                padding: "13px 20px",
                                                borderRadius: "8px",
                                                background: "transparent",
                                                color: "#16342D",
                                                fontSize: "14px",
                                                fontWeight: 800,
                                                border: "1.5px solid rgba(22,52,45,0.2)",
                                                cursor: "pointer",
                                                fontFamily: "inherit",
                                                marginTop: "8px",
                                                transition: "background 0.2s, border-color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(22,52,45,0.06)";
                                                e.currentTarget.style.borderColor = "#16342D";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "transparent";
                                                e.currentTarget.style.borderColor = "rgba(22,52,45,0.2)";
                                            }}
                                        >
                                            🔔 תודיעו לי כשזה באוויר
                                        </button>
                                    )}

                                    {!plan.active && isOpen && isSuccess && (
                                        <div
                                            style={{
                                                textAlign: "center",
                                                padding: "13px 16px",
                                                borderRadius: "8px",
                                                background: "rgba(173,254,122,0.3)",
                                                color: "#16342D",
                                                fontSize: "14px",
                                                fontWeight: 700,
                                                marginTop: "8px",
                                            }}
                                        >
                                            ✓ נרשמת! נעדכן אותך
                                        </div>
                                    )}

                                    {!plan.active && isOpen && !isSuccess && (
                                        <form
                                            onSubmit={(e) => submitNotify(e, plan)}
                                            style={{
                                                display: "flex",
                                                gap: "6px",
                                                marginTop: "8px",
                                            }}
                                        >
                                            <input
                                                type="email"
                                                required
                                                dir="ltr"
                                                value={notifyEmail}
                                                onChange={(e) => setNotifyEmail(e.target.value)}
                                                placeholder="המייל שלך"
                                                disabled={notifyState.type === "loading"}
                                                autoFocus
                                                aria-label="כתובת מייל לקבלת התראה"
                                                style={{
                                                    flex: 1,
                                                    minWidth: 0,
                                                    padding: "11px 14px",
                                                    borderRadius: "8px",
                                                    border: "1.5px solid rgba(22,52,45,0.25)",
                                                    fontSize: "14px",
                                                    fontFamily: "inherit",
                                                    background: "#fff",
                                                    color: "#16342D",
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                disabled={notifyState.type === "loading"}
                                                aria-label="שליחה"
                                                style={{
                                                    padding: "0 16px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    background: "#16342D",
                                                    color: "#ADFE7A",
                                                    fontWeight: 900,
                                                    fontSize: "16px",
                                                    cursor: "pointer",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                {notifyState.type === "loading" ? "..." : "✓"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION (white) ── */}
            <section
                id="faq"
                style={{
                    background: "#fff",
                    position: "relative",
                    zIndex: 1,
                    padding: "40px 24px 48px",
                }}
            >
                <div style={{ maxWidth: "820px", margin: "0 auto" }}>
                    {/* small section label */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            color: "#16342D",
                            opacity: 0.65,
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        שאלות נפוצות
                    </div>

                    {/* Title */}
                    <h2
                        style={{
                            textAlign: "center",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
                            color: "#16342D",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.18,
                            margin: "0 0 36px",
                        }}
                    >
                        מה כולם שואלים
                    </h2>

                    {/* Accordion */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {faqItems.map((item, i) => {
                            const isOpen = openFaqIdx === i;
                            return (
                                <div
                                    key={item.question}
                                    style={{
                                        border: "1px solid rgba(22,52,45,0.1)",
                                        borderRadius: "12px",
                                        background: isOpen ? "#F5F2EC" : "#fff",
                                        transition: "background 0.2s",
                                        overflow: "hidden",
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaqIdx(isOpen ? null : i)}
                                        aria-expanded={isOpen}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "16px",
                                            padding: "18px 22px",
                                            background: "transparent",
                                            border: "none",
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            textAlign: "right",
                                            color: "#16342D",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        <span style={{ flex: 1 }}>{item.question}</span>
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                width: 30,
                                                height: 30,
                                                flexShrink: 0,
                                                borderRadius: "9999px",
                                                background: isOpen ? "#ADFE7A" : "rgba(22,52,45,0.06)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "background 0.2s, transform 0.25s",
                                                transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                                            }}
                                        >
                                            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "#16342D" }} aria-hidden="true">
                                                <path d="M11 5h2v14h-2z" />
                                                <path d="M5 11h14v2H5z" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        style={{
                                            maxHeight: isOpen ? "500px" : "0",
                                            opacity: isOpen ? 1 : 0,
                                            transition: "max-height 0.35s ease, opacity 0.25s ease, padding 0.25s ease",
                                            padding: isOpen ? "0 22px 20px" : "0 22px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "#5C5A54",
                                                lineHeight: 1.8,
                                                margin: 0,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {splitAtPeriods(item.answer)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CONTACT SECTION (forest dark) ── */}
            <section
                id="contact"
                style={{
                    background: "linear-gradient(160deg,#1d4339 0%,#16342d 100%)",
                    position: "relative",
                    zIndex: 1,
                    padding: "48px 24px 56px",
                }}
            >
                <div
                    className="pv-grid-contact"
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        alignItems: "start",
                    }}
                >
                    {/* RIGHT COLUMN (RTL): title + gift box */}
                    <div>
                        {/* eyebrow */}
                        <div
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.2em",
                                color: "#ADFE7A",
                                textTransform: "uppercase",
                                marginBottom: "14px",
                            }}
                        >
                            בואו נדבר
                        </div>

                        {/* Title */}
                        <h2
                            style={{
                                fontWeight: 900,
                                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                                color: "#fff",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.18,
                                margin: "0 0 16px",
                            }}
                        >
                            השאירו פרטים לקביעת
                            <br />
                            שיחת אפיון ללא עלות
                        </h2>

                        {/* sub */}
                        <p
                            style={{
                                fontSize: "15px",
                                color: "rgba(255,255,255,0.7)",
                                lineHeight: 1.7,
                                margin: "0 0 28px",
                                fontWeight: 500,
                            }}
                        >
                            {splitAtPeriods(
                                "בשיחת האפיון נבין מאיפה אתם מתחילים. לאן אתם רוצים להגיע. ואיך מגיעים לשם בצורה הנכונה ביותר עבורכם.",
                            )}
                        </p>

                        {/* Gift box */}
                        <div
                            style={{
                                background: "rgba(173,254,122,0.06)",
                                border: "1px solid rgba(173,254,122,0.2)",
                                borderRadius: "14px",
                                padding: "22px 24px",
                                display: "flex",
                                gap: "16px",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "32px",
                                    flexShrink: 0,
                                    lineHeight: 1,
                                }}
                            >
                                🎁
                            </div>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: 800,
                                        letterSpacing: "0.15em",
                                        color: "#ADFE7A",
                                        textTransform: "uppercase",
                                        marginBottom: "6px",
                                    }}
                                >
                                    בונוס מתנה ממני
                                </div>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: 800,
                                        color: "#fff",
                                        marginBottom: "10px",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    הצ׳ק ליסט הפיננסי המקיף
                                </div>
                                <div
                                    style={{
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.65)",
                                        lineHeight: 1.55,
                                        marginBottom: "10px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Google Sheets שכולל מעקב אחרי:
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "6px",
                                    }}
                                >
                                    {checklistTags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                display: "inline-block",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                color: "#16342D",
                                                background: "#ADFE7A",
                                                padding: "4px 9px",
                                                borderRadius: "9999px",
                                                letterSpacing: "-0.005em",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LEFT COLUMN (RTL): form */}
                    <form
                        onSubmit={handleContactSubmit}
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(173,254,122,0.16)",
                            borderRadius: "16px",
                            padding: "32px 28px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label
                                htmlFor="pv-contact-name"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.04em",
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                שם מלא *
                            </label>
                            <input
                                id="pv-contact-name"
                                type="text"
                                name="name"
                                required
                                value={contactValues.name}
                                onChange={handleContactChange}
                                placeholder="ישראל ישראלי"
                                className="pv-input"
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label
                                htmlFor="pv-contact-phone"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.04em",
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                טלפון נייד *
                            </label>
                            <input
                                id="pv-contact-phone"
                                type="tel"
                                name="phone"
                                required
                                value={contactValues.phone}
                                onChange={handleContactChange}
                                placeholder="05X-XXXXXXX"
                                className="pv-input"
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label
                                htmlFor="pv-contact-email"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.04em",
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                דואר אלקטרוני *
                            </label>
                            <input
                                id="pv-contact-email"
                                type="email"
                                name="email"
                                required
                                value={contactValues.email}
                                onChange={handleContactChange}
                                placeholder="israel@gmail.com"
                                className="pv-input"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={contactStatus.type === "loading"}
                            style={{
                                background: "#ADFE7A",
                                color: "#14322B",
                                fontSize: "16px",
                                fontWeight: 900,
                                padding: "16px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: contactStatus.type === "loading" ? "not-allowed" : "pointer",
                                fontFamily: "inherit",
                                marginTop: "8px",
                                letterSpacing: "-0.01em",
                                opacity: contactStatus.type === "loading" ? 0.7 : 1,
                                transition: "background 0.2s, opacity 0.2s",
                            }}
                        >
                            {contactStatus.type === "loading"
                                ? "שולח..."
                                : "שלח פרטים"}
                        </button>

                        {contactStatus.type === "success" && (
                            <div
                                style={{
                                    background: "rgba(173,254,122,0.18)",
                                    border: "1px solid rgba(173,254,122,0.4)",
                                    borderRadius: "8px",
                                    padding: "12px 14px",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                {contactStatus.message}
                            </div>
                        )}

                        {contactStatus.type === "error" && (
                            <div
                                style={{
                                    background: "rgba(229,115,115,0.15)",
                                    border: "1px solid rgba(229,115,115,0.4)",
                                    borderRadius: "8px",
                                    padding: "12px 14px",
                                    fontSize: "14px",
                                    color: "#ffb4a8",
                                    textAlign: "center",
                                }}
                            >
                                {contactStatus.message}
                            </div>
                        )}

                        <p
                            style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.45)",
                                textAlign: "center",
                                margin: "4px 0 0",
                                lineHeight: 1.5,
                                fontWeight: 500,
                            }}
                        >
                            הפרטים שלכם נשמרים אצלי בלבד ולא יועברו לאף גורם.
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
}
