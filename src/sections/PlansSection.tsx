import { useState, type ChangeEvent, type FormEvent } from "react";

type Plan = {
    id: string;
    name: string;
    subtitle: string;
    features: string[];
    active: boolean;
};

const plans: Plan[] = [
    {
        id: "alone",
        name: "מסלול 1",
        subtitle: "מתכננים לבד",
        features: [
            "קורס תכנון פיננסי מלא",
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
            "קורס תכנון פיננסי מלא",
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

type NotifyState =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success" }
    | { type: "error"; message: string };

export default function PlansSection() {
    const [openPlanId, setOpenPlanId] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [notifyState, setNotifyState] = useState<NotifyState>({ type: "idle" });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleNotifyClick = (planId: string) => {
        setOpenPlanId(planId);
        setEmail("");
        setNotifyState({ type: "idle" });
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNotifySubmit = async (event: FormEvent<HTMLFormElement>, plan: Plan) => {
        event.preventDefault();

        if (!accessKey) {
            setNotifyState({ type: "error", message: "לא הוגדר Web3Forms access key." });
            return;
        }

        setNotifyState({ type: "loading" });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `🔔 הרשמה להתראה — ${plan.subtitle}`,
                    from_name: "אתר ניר יפרח",
                    email,
                    message: `נרשם להתראה על השקת המסלול:\n\n${plan.name} — ${plan.subtitle}\nאימייל: ${email}`,
                    botcheck: "",
                }),
            });

            const result = await response.json();
            if (!result.success) throw new Error(result.message || "משהו השתבש בשליחה.");

            const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
            fbq?.("track", "Lead", { content_name: `Notify: ${plan.subtitle}` });

            setNotifyState({ type: "success" });
            setEmail("");
        } catch (error) {
            const message = error instanceof Error ? error.message : "משהו השתבש. נסו שוב בעוד רגע.";
            setNotifyState({ type: "error", message });
        }
    };

    return (
        <section id="plans" className="packages-section" dir="rtl">
            <div className="packages-inner">
                <div className="section-label">בחרו את הדרך שמתאימה לכם</div>
                <div className="divider" />
                <h2 className="section-title">המסלולים שלנו</h2>

                <div className="packages-grid">
                    {plans.map((plan) => {
                        const isOpen = openPlanId === plan.id;
                        const isSuccess = isOpen && notifyState.type === "success";

                        return (
                            <div
                                key={plan.id}
                                className={`package-card${plan.active ? ' package-card--active' : ''}`}
                            >
                                <div className={`pkg-badge${plan.active ? ' pkg-badge--active' : ''}`}>
                                    {plan.active ? 'פעיל' : 'בקרוב'}
                                </div>
                                <div className="pkg-num">{plan.name}</div>
                                <div className="pkg-name">{plan.subtitle}</div>
                                <ul className="pkg-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>

                                {plan.active && (
                                    <a href="#contact" className="pkg-cta pkg-cta--primary">
                                        קבע שיחת אפיון
                                    </a>
                                )}

                                {!plan.active && !isOpen && (
                                    <button
                                        type="button"
                                        onClick={() => handleNotifyClick(plan.id)}
                                        className="pkg-cta pkg-cta--notify"
                                    >
                                        🔔 תודיעו לי כשזה משיק
                                    </button>
                                )}

                                {!plan.active && isOpen && isSuccess && (
                                    <div className="pkg-notify-success">
                                        ✓ נרשמת! נעדכן אותך כשהמסלול ישיק
                                    </div>
                                )}

                                {!plan.active && isOpen && !isSuccess && (
                                    <form
                                        className="pkg-notify-form"
                                        onSubmit={(event) => handleNotifySubmit(event, plan)}
                                    >
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder="המייל שלך"
                                            className="pkg-notify-input"
                                            disabled={notifyState.type === "loading"}
                                            autoFocus
                                            dir="ltr"
                                        />
                                        <button
                                            type="submit"
                                            className="pkg-notify-submit"
                                            disabled={notifyState.type === "loading"}
                                            aria-label="שליחה"
                                        >
                                            {notifyState.type === "loading" ? "..." : "✓"}
                                        </button>
                                        {notifyState.type === "error" && (
                                            <div className="pkg-notify-error">
                                                {notifyState.message}
                                            </div>
                                        )}
                                    </form>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
