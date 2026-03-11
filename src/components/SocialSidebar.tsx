import type { ReactNode } from "react";
import { siteContent } from "../data/siteContent";

type SocialItem = {
    href: string;
    label: string;
    bgClassName: string;
    icon: ReactNode;
};

function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.29-1.66a11.87 11.87 0 0 0 5.79 1.49h.01c6.57 0 11.91-5.35 11.91-11.92 0-3.18-1.24-6.16-3.48-8.43ZM12.09 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.79 9.79 0 0 1-1.52-5.27c0-5.4 4.39-9.8 9.79-9.8 2.62 0 5.08 1.02 6.93 2.88a9.73 9.73 0 0 1 2.86 6.92c0 5.4-4.39 9.8-9.79 9.8Zm5.37-7.35c-.29-.14-1.72-.85-1.98-.95-.27-.1-.46-.14-.65.14-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49l-.56-.01c-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.42s1.03 2.81 1.17 3c.14.19 2.02 3.09 4.89 4.34.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.97-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z" />
        </svg>
    );
}

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
            href: siteContent.socialLinks.whatsapp,
            label: "WhatsApp",
            bgClassName: "bg-[#25D366] text-white",
            icon: <WhatsAppIcon />,
        },
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