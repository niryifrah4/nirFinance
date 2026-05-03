import { siteContent } from "../data/siteContent";

export default function HeroSection() {
    return (
        <section id="top" className="hero" dir="rtl">
            <div className="hero-accent" aria-hidden="true" />
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-eyebrow">{siteContent.hero.badge}</div>

                    <h1 className="hero-title">
                        <span className="hero-l1">אתם מנהלים עסק של מיליונים.</span>
                        <span className="hero-l2 hl">קוראים לו המשפחה שלכם.</span>
                    </h1>

                    <p className="hero-question">ואת זה אתם מנהלים על סמך תחושת בטן?</p>

                    <div className="hero-actions">
                        <a href="#video" className="btn-primary">▶&nbsp; {siteContent.hero.primaryButton}</a>
                    </div>
                    <p className="hero-sub">{siteContent.hero.subtext}</p>
                </div>
            </div>
            <div className="hero-scroll" aria-hidden="true">SCROLL</div>
        </section>
    );
}
