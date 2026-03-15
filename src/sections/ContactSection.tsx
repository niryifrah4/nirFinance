import { useState, type ChangeEvent, type FormEvent } from "react";
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
        <section id="contact" className="scroll-mt-28 px-4 py-4 sm:py-5">
            <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(173,254,122,0.2),rgba(255,255,255,0.08),rgba(255,165,59,0.18))] p-[1px] shadow-[0_24px_90px_rgba(0,0,0,0.25)]">
                <div className="rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(10,22,18,0.92),rgba(16,48,40,0.96))] p-5 backdrop-blur-sm sm:p-8">
                    <form onSubmit={handleSubmit} dir="rtl">
                        <div className="mb-6 text-center">
                            <div className="inline-flex items-center justify-center gap-2 text-[var(--lime)]">
                                <GiftIcon />
                                <span className="text-sm font-medium tracking-wide">מתנה קטנה ממני</span>
                            </div>

                            <h2 className="mt-3 text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
                                {siteContent.contact.title}
                            </h2>

                            <div className="mt-4 space-y-2 text-base leading-7 text-[var(--sand)]">
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
                                    placeholder="שם מלא"
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-white outline-none transition focus:border-[var(--lime)]"
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
                                    placeholder="טלפון"
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-white outline-none transition focus:border-[var(--lime)]"
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
                                    placeholder="מייל"
                                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-white outline-none transition focus:border-[var(--lime)]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.type === "loading"}
                                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--lime)] px-6 text-base font-bold text-[var(--bg)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <SendIcon />
                                <span>{status.type === "loading" ? "שולח..." : siteContent.contact.buttonText}</span>
                            </button>
                        </div>

                        {status.type !== "idle" ? (
                            <div
                                className={`mt-4 rounded-2xl px-4 py-3 text-center text-sm font-medium ${status.type === "success"
                                        ? "bg-[rgba(173,254,122,0.12)] text-[var(--lime)]"
                                        : status.type === "error"
                                            ? "bg-[rgba(255,165,59,0.12)] text-[var(--orange)]"
                                            : "bg-white/8 text-white"
                                    }`}
                            >
                                {status.message}
                            </div>
                        ) : null}
                    </form>
                </div>
            </div>
        </section>
    );
}