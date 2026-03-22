import { useState } from "react";
import { siteContent } from "../data/siteContent";

export default function Header() {
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-[1.5rem] border border-black/8 bg-white p-[1px] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                    <div className="flex flex-row-reverse items-center justify-between rounded-[calc(1.5rem-1px)] bg-white px-4 py-3 sm:px-6">
                        <a
                            href="#top"
                            className="flex min-h-[44px] items-center"
                            aria-label={siteContent.header.logoText}
                        >
                            {!logoFailed ? (
                                <img
                                    src={siteContent.header.logoSrc}
                                    alt={siteContent.header.logoText}
                                    className="h-10 w-auto object-contain sm:h-11"
                                    onError={() => setLogoFailed(true)}
                                />
                            ) : (
                                <div dir="rtl" className="text-right">
                                    <div className="text-lg font-bold leading-none text-[#14322b] sm:text-xl">
                                        {siteContent.header.logoText}
                                    </div>
                                    <div className="mt-1 text-xs font-medium text-[#1d4339] sm:text-sm">
                                        תכנון פיננסי
                                    </div>
                                </div>
                            )}
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex min-h-[48px] flex-col items-center justify-center whitespace-nowrap rounded-full bg-[var(--lime)] px-5 py-2 text-center shadow-[0_14px_30px_rgba(173,254,122,0.22)] transition hover:-translate-y-0.5 hover:bg-[#c2ff9a] sm:px-6"
                        >
                            <span className="text-sm font-bold leading-none text-[#14322b] sm:text-[15px]">
                                {siteContent.header.buttonText}
                            </span>
                            <span className="mt-1 text-[11px] font-medium leading-none text-[#1d4339] sm:text-xs">
                                {siteContent.header.buttonSubtext}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}