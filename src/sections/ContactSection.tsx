import { useState, type ChangeEvent, type FormEvent } from "react";

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

const checklistTags = [
    "התנהלות כלכלית",
    "בנקים ואשראי",
    "פנסיה וביטוחים",
    "השקעות",
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
                    email: formValues.email,
                    message: `פנייה חדשה מהאתר\n\nשם מלא: ${formValues.name}\nטלפון: ${formValues.phone}\nאימייל: ${formValues.email}`,
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
        <section id="contact" className="contact-section" dir="rtl">
            <div className="contact-inner">

                {/* Right column: title + gift */}
                <div className="contact-left">
                    <div className="section-label">בואו נדבר</div>
                    <div className="divider" />
                    <h2 className="contact-title">
                        השאירו פרטים לקביעת<br />שיחת אפיון ללא עלות
                    </h2>
                    <p className="contact-sub">
                        בשיחת האפיון נבין מאיפה אתם מתחילים, לאן אתם רוצים להגיע, ואיך מגיעים לשם בצורה הנכונה ביותר עבורכם.
                    </p>

                    <div className="gift-box">
                        <div className="gift-icon">🎁</div>
                        <div>
                            <div className="gift-title">בונוס מתנה ממני</div>
                            <div className="gift-name">הצ׳ק ליסט הפיננסי המקיף</div>
                            <div className="gift-desc">
                                Google Sheets מקיף שכולל מעקב אחרי:
                                <div className="gift-tags">
                                    {checklistTags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left column: form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="contact-name">שם מלא *</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            required
                            placeholder="ישראל ישראלי"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="contact-phone">טלפון נייד *</label>
                        <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            required
                            placeholder="05X-XXXXXXX"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="contact-email">דואר אלקטרוני</label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="israel@gmail.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="form-submit"
                        disabled={status.type === "loading"}
                    >
                        {status.type === "loading" ? "שולח..." : "שלח לי ←"}
                    </button>

                    {status.type !== "idle" && (
                        <div className={`form-status form-status--${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    <p className="form-privacy">
                        הפרטים שלכם נשמרים אצלי בלבד ולא יועברו לאף גורם
                    </p>
                </form>

            </div>
        </section>
    );
}
