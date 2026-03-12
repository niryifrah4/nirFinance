import { useMemo, useState } from "react";
import { siteContent } from "../data/siteContent";

export default function Header() {
    const [logoFailed, setLogoFailed] = useState(false);

    const whatsappHref = useMemo(() => {
        const message = encodeURIComponent(siteContent.header.whatsappMessage);
        return `${siteContent.socialLinks.whatsapp}?text=${message}`;
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(173,254,122,0.22),rgba(255,255,255,0.08),rgba(255,165,59,0.2))] p-[1px] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                    <div className="flex flex-row-reverse items-center justify-between rounded-[calc(1.5rem-1px)] bg-[rgba(20,50,43,0.86)] px-4 py-3 backdrop-blur-xl sm:px-6">
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
                                    <div className="text-lg font-black leading-none text-white sm:text-xl">
                                        {siteContent.header.logoText}
                                    </div>
                                    <div className="mt-1 text-xs font-medium text-[var(--lime)] sm:text-sm">
                                        תכנון פיננסי
                                    </div>
                                </div>
                            )}
                        </a>

                        <div className="rounded-full bg-[linear-gradient(90deg,var(--lime),var(--orange),#ffffff,var(--lime))] bg-[length:200%_100%] p-[1.5px] animate-[shimmer_4s_linear_infinite] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[46px] flex-col items-center justify-center whitespace-nowrap rounded-full bg-[rgba(20,50,43,0.96)] px-5 py-2 text-center transition hover:bg-[rgba(16,40,34,0.98)] sm:px-6"
                            >
                                <span className="text-sm font-bold leading-none text-white sm:text-[15px]">
                                    {siteContent.header.buttonText}
                                </span>
                                <span className="mt-1 text-[11px] font-medium leading-none text-[var(--lime)] sm:text-xs">
                                    {siteContent.header.buttonSubtext}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes shimmer {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}
            </style>
        </header>
    );
}