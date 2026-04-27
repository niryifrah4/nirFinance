import { useState, type ChangeEvent, type FormEvent } from "react";
import ScrollReveal from "../components/ScrollReveal";

type FormValues = {
    name: string;
    phone: string;
};

type Status =
    | { type: "idle"; message: string }
    | { type: "loading"; message: string }
    | { type: "success"; message: string }
    | { type: "error"; message: string };

const initialValues: FormValues = {
    name: "",
    phone: "",
};

const trustItems = [
    "ללא עמלות — ייעוץ אובייקטיבי לחלוטין",
    "ללא התחייבות",
    "מתאים לכל מצב פיננסי",
];

const checklistItems = [
    "התנהלות פיננסית",
    "פנסיה וביטוחים",
    "השקעות",
    "ביטוחים",
    "נדל״ן",
];

export default function ContactSection() {
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!accessKey) {
            setStatus({ type: "error", message: "לא הוגדר Web3Forms access key בקובץ הסביבה." });
            return;
        }

        setStatus({ type: "loading", message: "שולח פרטים..." });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: "פנייה חדשה מאתר ניר יפרח",
                    from_name: "אתר ניר יפרח",
                    name: formValues.name,
                    phone: formValues.phone,
                    message: `פנייה חדשה מהאתר\n\nשם מלא: ${formValues.name}\nטלפון: ${formValues.phone}`,
                    botcheck: "",
                }),
            });

            const result = await response.json();
            if (!result.success) throw new Error(result.message || "משהו השתבש בשליחת הטופס.");

            const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
            fbq?.("track", "Lead");

            setStatus({ type: "success", message: "הפרטים נשלחו! ניר יחזור אליך בהקדם." });
            setFormValues(initialValues);
        } catch (error) {
            const message = error instanceof Error ? error.message : "משהו השתבש. נסו שוב בעוד רגע.";
            setStatus({ type: "error", message });
        }
    };

    return (
        <section id="contact" className="scroll-mt-28 bg-[#f6f3eb]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24">
                <ScrollReveal>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start" dir="rtl">

                        {/* Left — pitch */}
                        <div>
                            <p className="text-sm font-semibold tracking-wide text-[#1d4339] uppercase mb-3">
                                הצעד הראשון — בלי עלות
                            </p>
                            <h2 className="text-3xl font-bold leading-[1.4] text-[#16342d] sm:text-4xl">
                                <span className="inline-block rounded-[6px] bg-[#1d4339] px-2 py-0.5 text-[var(--lime)] mx-0.5">30 דקות</span>
                                {" "}שיכולות לשנות את הכיוון הפיננסי שלכם
                            </h2>
                            <p className="mt-4 text-base leading-8 text-[#3f544d] sm:text-lg">
                                בשיחת האפיון נבין מאיפה אתם מתחילים, לאן אתם רוצים להגיע, ואיך מגיעים לשם בצורה הנכונה ביותר עבורכם.
                            </p>

                            {/* Trust items */}
                            <ul className="mt-6 space-y-3">
                                {trustItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#1d4339]">
                                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--lime)]/20 text-[#1d4339]">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Gift box */}
                            <div className="mt-8 rounded-2xl border border-[#1d4339]/15 bg-white p-5">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🎁</span>
                                    <div>
                                        <p className="font-bold text-[#16342d]">בונוס מתנה — צ׳ק ליסט פיננסי מקיף</p>
                                        <p className="mt-1 text-sm text-[#3f544d]">Google Sheets שמכסה את כל התחומים:</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {checklistItems.map((item) => (
                                                <span key={item} className="rounded-full bg-[var(--lime)]/20 px-3 py-1 text-xs font-semibold text-[#1d4339]">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div className="rounded-3xl bg-[#1d4339] p-8 shadow-[0_20px_60px_rgba(22,52,45,0.18)]">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">השאירו פרטים ואחזור אלייכם בהקדם</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">שם מלא</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="השם המלא שלך"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/90 focus:border-[var(--lime)] focus:bg-white/15"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="sr-only">טלפון</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="טלפון לחזרה"
                                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/90 focus:border-[var(--lime)] focus:bg-white/15"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status.type === "loading"}
                                    className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--lime)] text-base font-black text-[#14322b] shadow-[0_8px_24px_rgba(173,254,122,0.25)] transition hover:bg-[#c2ff9a] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {status.type === "loading" ? (
                                        "שולח..."
                                    ) : (
                                        <>
                                            שלח פרטים
                                        </>
                                    )}
                                </button>

                                {status.type !== "idle" && (
                                    <div
                                        className={`rounded-2xl px-4 py-3 text-center text-sm font-medium ${
                                            status.type === "success"
                                                ? "bg-[var(--lime)]/20 text-[var(--lime)]"
                                                : status.type === "error"
                                                ? "bg-[rgba(255,165,59,0.2)] text-[var(--orange)]"
                                                : "bg-white/10 text-white/70"
                                        }`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <p className="text-center text-xs text-white/40 pt-1">
                                    הפרטים שלכם נשמרים אצלי בלבד ולא יועברו לאף גורם
                                </p>
                            </form>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
