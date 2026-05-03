type Plan = {
    name: string;
    subtitle: string;
    features: string[];
    active: boolean;
};

const plans: Plan[] = [
    {
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

export default function PlansSection() {
    return (
        <section id="plans" className="packages-section" dir="rtl">
            <div className="packages-inner">
                <div className="section-label">בחרו את הדרך שמתאימה לכם</div>
                <div className="divider" />
                <h2 className="section-title">המסלולים שלנו</h2>

                <div className="packages-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
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
                            {plan.active ? (
                                <a href="#contact" className="pkg-cta pkg-cta--primary">
                                    קבע שיחת אפיון
                                </a>
                            ) : (
                                <span className="pkg-cta pkg-cta--muted">בקרוב</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
