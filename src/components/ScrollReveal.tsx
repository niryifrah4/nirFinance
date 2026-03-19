import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
        >
            {children}
        </div>
    );
}
