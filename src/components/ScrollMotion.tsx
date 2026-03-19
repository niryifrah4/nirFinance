import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollMotionProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
};

export default function ScrollMotion({
    children,
    className = "",
    delay = 0,
    y = 24,
    once = true,
}: ScrollMotionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(node);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [once]);

    return (
        <div
            ref={ref}
            className={`scroll-motion ${isVisible ? "is-visible" : ""} ${className}`.trim()}
            style={{
                transitionDelay: `${delay}ms`,
                transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${y}px, 0)`,
            }}
        >
            {children}
        </div>
    );
}
