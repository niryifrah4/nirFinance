import { useEffect, useState } from "react";

export default function StickyBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`sticky-bar${visible ? '' : ' sticky-bar--hidden'}`} dir="rtl">
            <p className="sticky-text">
                שיחת אפיון ראשונית, <strong>30 דקות ללא עלות</strong>
            </p>
            <a href="#contact" className="sticky-cta">
                קבע שיחת אפיון ←
            </a>
        </div>
    );
}
