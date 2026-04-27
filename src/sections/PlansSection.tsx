import SectionFrame from "../components/SectionFrame";

type Plan = {
    name: string;
    subtitle: string;
    features: string[];
    active: boolean;
};

const plans: Plan[] = [
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
        name: "מסלול 1",
        subtitle: "מתכננים לבד",
        features: [
            "קורס תכנון פיננסי מלא",
            "גישה למערכת התכנון",
            "גישה לקהילה",
        ],
        active: false,
    },
];

export default function PlansSection() {
    return (
        <SectionFrame
            id="plans"
            title="מסלולים"
            description="בחרו את הדרך שמתאימה לכם."
            variant="light"
        >
            <div className="grid gap-6 sm:grid-cols-3" dir="rtl">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-2xl border p-7 transition ${
                            plan.active
                                ? "border-[#1d4339] bg-[#1d4339] text-white shadow-[0_16px_48px_rgba(22,52,45,0.18)]"
                                : "border-[#e0e4de] bg-[#f4f6f3] opacity-60"
                        }`}
                    >
                        {/* Badge */}
                        <div className="mb-4 inline-flex self-start">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${
                                    plan.active
                                        ? "bg-[var(--lime)] text-[#14322b]"
                                        : "bg-[#dde2da] text-[#8a9e8d]"
                                }`}
                            >
                                {plan.active ? "פעיל" : "בקרוב"}
                            </span>
                        </div>

                        {/* Name */}
                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${plan.active ? "text-[var(--lime)]/70" : "text-[#adb8aa]"}`}>
                            {plan.name}
                        </p>
                        <h3 className={`text-xl font-bold leading-snug ${plan.active ? "text-white" : "text-[#7a8c78]"}`}>
                            {plan.subtitle}
                        </h3>

                        {/* Divider */}
                        <div className={`my-5 h-px ${plan.active ? "bg-white/15" : "bg-[#d8ddd6]"}`} />

                        {/* Features */}
                        <ul className="flex-1 space-y-3">
                            {plan.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm">
                                    <span className={`mt-0.5 leading-none ${plan.active ? "text-[var(--lime)]" : "text-[#adb8aa]"}`}>✓</span>
                                    <span className={plan.active ? "text-white/80" : "text-[#8a9e8d]"}>{f}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="mt-7">
                            {plan.active ? (
                                <a
                                    href="#contact"
                                    className="block w-full rounded-xl bg-[var(--lime)] py-3 text-center text-sm font-bold !text-[#14322b] transition hover:bg-[#c2ff9a]"
                                >
                                    קבע שיחת אפיון
                                </a>
                            ) : (
                                <div className="block w-full rounded-xl border border-[#d8ddd6] py-3 text-center text-sm font-bold text-[#adb8aa]">
                                    בקרוב
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionFrame>
    );
}
