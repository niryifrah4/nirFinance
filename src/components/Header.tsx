import { useState } from "react";
import { siteContent } from "../data/siteContent";

export default function Header() {
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <header>
            <a href="#top" className="header-logo" aria-label={siteContent.header.logoText}>
                {!logoFailed && (
                    <img
                        src={siteContent.header.logoSrc}
                        alt={siteContent.header.logoText}
                        onError={() => setLogoFailed(true)}
                    />
                )}
                <span className="header-logo-text">{siteContent.header.logoText}</span>
            </a>
            <nav className="header-nav">
                <a href="#video">סרטון</a>
                <a href="#services">שירותים</a>
                <a href="#process">תהליך</a>
                <a href="#plans">מסלולים</a>
                <a href="#about">אודות</a>
                <a href="#testimonials">המלצות</a>
                <a href="#faq">שאלות</a>
                <a href="#contact" className="nav-cta">צור קשר</a>
            </nav>
        </header>
    );
}
