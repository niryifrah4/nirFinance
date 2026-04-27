import { useEffect, useMemo, useState } from "react";
import { legalContent, type LegalSection, type LegalTabKey } from "../data/legalContent";

const tabOrder: LegalTabKey[] = ["accessibility", "privacy", "terms"];

function isLegalTabKey(value: string | null): value is LegalTabKey {
    return value === "accessibility" || value === "privacy" || value === "terms";
}

function getTabFromUrl(): LegalTabKey {
    if (typeof window === "undefined") return "accessibility";

    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");

    return isLegalTabKey(tab) ? tab : "accessibility";
}

function SectionBlock({ section }: { section: LegalSection }) {
    return (
        <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <h3 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h3>

            {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-[var(--sand)]">
                    {paragraph}
                </p>
            ))}

            {section.items?.length ? (
                <ul className="mt-4 space-y-3 text-[var(--sand)]">
                    {section.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-7">
                            <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-[var(--lime)]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </section>
    );
}

export default function LegalPage() {
    const [activeTab, setActiveTab] = useState<LegalTabKey>(getTabFromUrl);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set("tab", activeTab);
        const nextUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, "", nextUrl);
    }, [activeTab]);

    const activeContent = useMemo(() => legalContent.tabs[activeTab], [activeTab]);

    return (
        <main className="min-h-screen px-4 pb-6 pt-28 sm:pt-32">
            <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(173,254,122,0.2),rgba(255,255,255,0.08),rgba(255,165,59,0.18))] p-[1px] shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
                <div className="rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(10,22,18,0.92),rgba(16,48,40,0.96))] p-5 backdrop-blur-sm sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-5 sm:gap-6" dir="rtl">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <div className="text-sm font-medium text-[var(--lime)]">
                                    עודכן לאחרונה: {legalContent.updatedAt}
                                </div>
                                <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                    {legalContent.pageTitle}
                                </h1>
                                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--sand)]">
                                    כאן תוכלו לעבור בין הצהרת הנגישות, מדיניות הפרטיות ותנאי השימוש של האתר.
                                </p>
                            </div>

                            <a
                                href="/"
                                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-5 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                            >
                                חזרה לדף הבית
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {tabOrder.map((tabKey) => {
                                const isActive = tabKey === activeTab;

                                return (
                                    <button
                                        key={tabKey}
                                        type="button"
                                        onClick={() => setActiveTab(tabKey)}
                                        className={`inline-flex min-h-[48px] items-center justify-center rounded-2xl px-5 text-sm font-medium transition sm:text-base ${isActive
                                                ? "bg-[var(--lime)] text-[var(--bg)]"
                                                : "border border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                                            }`}
                                    >
                                        {legalContent.tabs[tabKey].label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-5 sm:p-6">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                {activeContent.label}
                            </h2>
                            <p className="mt-4 text-base leading-8 text-[var(--sand)]">
                                {activeContent.intro}
                            </p>
                        </div>

                        <div className="grid gap-5">
                            {activeContent.sections.map((section) => (
                                <SectionBlock key={section.title} section={section} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}