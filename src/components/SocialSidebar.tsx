import type { ReactNode } from "react";
import { siteContent } from "../data/siteContent";

type SocialItem = {
    href: string;
    label: string;
    bgClassName: string;
    icon: ReactNode;
};

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M23.5 7.2a3 3 0 0 0-2.11-2.12C19.53 4.5 12 4.5 12 4.5s-7.53 0-9.39.58A3 3 0 0 0 .5 7.2 31.54 31.54 0 0 0 0 12a31.54 31.54 0 0 0 .5 4.8 3 3 0 0 0 2.11 2.12C4.47 19.5 12 19.5 12 19.5s7.53 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.54 31.54 0 0 0 24 12a31.54 31.54 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
    );
}

export default function SocialSidebar() {
    const items: SocialItem[] = [
        {
            href: siteContent.socialLinks.instagram,
            label: "Instagram",
            bgClassName:
                "bg-[linear-gradient(135deg,#F58529_0%,#DD2A7B_45%,#8134AF_75%,#515BD4_100%)] text-white",
            icon: <InstagramIcon />,
        },
        {
            href: siteContent.socialLinks.youtube,
            label: "YouTube",
            bgClassName: "bg-[#FF0000] text-white",
            icon: <YouTubeIcon />,
        },
    ];

    return (
        <div className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2 sm:right-4 sm:gap-3">
            {items.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full shadow-[0_14px_35px_rgba(0,0,0,0.25)] transition hover:scale-105 sm:h-12 sm:w-12 ${item.bgClassName}`}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
}