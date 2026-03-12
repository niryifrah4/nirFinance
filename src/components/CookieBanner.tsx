import { useEffect, useState } from "react";
import { legalContent } from "../data/legalContent";

type ConsentValue = "accepted" | "rejected";

export default function CookieBanner() {
    const { cookies } = legalContent;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!cookies.enabled) return;

        const savedValue = window.localStorage.getItem(cookies.storageKey);
        if (!savedValue) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        }
    }, [cookies.enabled, cookies.storageKey]);

    const handleChoice = (value: ConsentValue) => {
        window.localStorage.setItem(cookies.storageKey, value);
        setIsVisible(false);
    };

    if (!cookies.enabled || !isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-4 z-[70] px-4" dir="rtl">
            <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-[rgba(12,25,21,0.96)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-lg font-black text-white sm:text-xl">
                            {cookies.bannerTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--sand)] sm:text-base">
                            {cookies.bannerText}{" "}
                            <a
                                href={cookies.policyHref}
                                className="font-semibold text-[var(--lime)] transition hover:opacity-85"
                            >
                                למדיניות הפרטיות
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:min-w-[220px] sm:flex-row">
                        <button
                            type="button"
                            onClick={() => handleChoice("rejected")}
                            className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                        >
                            לדחות הכל
                        </button>

                        <button
                            type="button"
                            onClick={() => handleChoice("accepted")}
                            className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-[var(--lime)] px-5 text-sm font-bold text-[var(--bg)] transition hover:opacity-95"
                        >
                            לקבל הכל
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}