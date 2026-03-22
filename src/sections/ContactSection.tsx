import { useState, type ChangeEvent, type FormEvent } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { siteContent } from "../data/siteContent";

type FormValues = {
    name: string;
    phone: string;
    email: string;
};

type Status =
    | { type: "idle"; message: string }
    | { type: "loading"; message: string }
    | { type: "success"; message: string }
    | { type: "error"; message: string };

const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
};

function GiftIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
            <path d="M20 7h-2.18A3 3 0 0 0 18 6a3 3 0 0 0-5.5-1.63A3 3 0 0 0 7 6c0 .35.06.69.18 1H5a2 2 0 0 0-2 2v3h8V9h2v3h8V9a2 2 0 0 0-2-2ZM9 6a1 1 0 1 1 2 0v1H9.5A1.5 1.5 0 0 1 9 6Zm6 0a1 1 0 1 1-2 0c0-.55.45-1 1-1s1 .45 1 1Zm-4 8H3v6a2 2 0 0 0 2 2h6v-8Zm2 8h6a2 2 0 0 0 2-2v-6h-8v8Z" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M21.2 3.3a1 1 0 0 0-1.03-.2L3.8 9.18a1 1 0 0 0 .08 1.89l6.4 2.13 2.13 6.4a1 1 0 0 0 .92.68h.06a1 1 0 0 0 .9-.78l6.08-16.37a1 1 0 0 0-.15-.83ZM12.7 17.2l-1.4-4.2 4.96-4.97-6.38 3.5-4.2-1.4 11.8-4.39L12.7 17.2Z" />
        </svg>
    );
}

export default function ContactSection() {
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [status, setStatus] = useState<Status>({
        type: "idle",
        message: "",
    });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!accessKey) {
            setStatus({
                type: "error",
                message: "לא הוגדר Web3Forms access key בקובץ הסביבה.",
            });
            return;
        }

        setStatus({
            type: "loading",
            message: "שולח פרטים...",
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: "פנייה חדשה מאתר ניר יפרח",
                    from_name: "אתר ניר יפרח",
                    name: formValues.name,
                    phone: formValues.phone,
                    email: formValues.email,
                    message: `פנייה חדשה מהאתר

שם מלא: ${formValues.name}
טלפון: ${formValues.phone}
מייל: ${formValues.email}`,
                    botcheck: "",
                }),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.message || "משהו השתבש בשליחת הטופס.");
            }

            const fbq = (window as Window & {
                fbq?: (...args: unknown[]) => void;
            }).fbq;

            fbq?.("track", "Lead");

            setStatus({
                type: "success",
                message: "הפרטים נשלחו בהצלחה. ניר יחזור אליכם בהקדם.",
            });

            setFormValues(initialValues);
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "משהו השתבש. נסו שוב בעוד רגע.";

            setStatus({
                type: "error",
                message,
            });
        }
    };

    return (
        <section id="contact" className="scroll-mt-28 bg-[#f6f3eb]">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
                <ScrollReveal>
                    <form onSubmit={handleSubmit} dir="rtl">
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center justify-center gap-2 text-[#1d4339]">
                                <GiftIcon />
                                <span className="text-sm font-medium tracking-wide">מתנה קטנה ממני</span>
                            </div>

                            <h2 className="mt-3 text-3xl font-bold leading-[1.05] text-[#16342d] sm:text-4xl">
                                השאירו פרטים לקביעת שיחת אפיון ללא עלות
                            </h2>

                            <div className="mt-3 space-y-1 text-base font-semibold leading-7 text-[#1d4339] sm:text-lg">
                                <p>בונוס מתנה ממני</p>
                                <p>הצ׳ק ליסט לניהול פיננסי המלא במתנה!</p>
                            </div>

                            <div className="mt-4 space-y-2 text-base leading-7 text-[#49655c]">
                                {siteContent.contact.descriptionLines.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    שם מלא
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="השם המלא שלך"
                                    className="h-14 w-full rounded-2xl border border-[#9cb0a6] bg-white px-4 text-[#16342d] outline-none transition placeholder:text-[#3f544d] focus:border-[var(--lime)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    טלפון
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formValues.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="טלפון לחזרה"
                                    className="h-14 w-full rounded-2xl border border-[#9cb0a6] bg-white px-4 text-[#16342d] outline-none transition placeholder:text-[#3f544d] focus:border-[var(--lime)]"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">
                                    מייל
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="כתובת מייל"
                                    className="h-14 w-full rounded-2xl border border-[#9cb0a6] bg-white px-4 text-[#16342d] outline-none transition placeholder:text-[#3f544d] focus:border-[var(--lime)]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.type === "loading"}
                                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#1d4339] px-6 text-base font-bold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <SendIcon />
                                <span>{status.type === "loading" ? "שולח..." : siteContent.contact.buttonText}</span>
                            </button>
                        </div>

                        {status.type !== "idle" ? (
                            <div
                                className={`mt-4 rounded-2xl px-4 py-3 text-center text-sm font-medium ${status.type === "success"
                                        ? "bg-[rgba(173,254,122,0.18)] text-[#285343]"
                                        : status.type === "error"
                                            ? "bg-[rgba(255,165,59,0.16)] text-[#8b5a18]"
                                            : "bg-[#e9ede7] text-[#16342d]"
                                    }`}
                            >
                                {status.message}
                            </div>
                        ) : null}
                    </form>
                </ScrollReveal>
            </div>
        </section>
    );
}