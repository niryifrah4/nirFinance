import { useState } from "react";

export default function HeroSection() {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <section id="top" className="hero" dir="rtl">
            {/* glow blobs */}
            <div className="hero-blob hero-blob-1" aria-hidden="true" />
            <div className="hero-blob hero-blob-2" aria-hidden="true" />

            <div className="hero-inner hero-split">

                {/* ── עמודת טקסט ── */}
                <div className="hero-text-col">
                    <div className="hero-eyebrow">מתכנן פיננסי CFP · יועץ משכנתאות · כלכלת המשפחה</div>

                    <h1 className="hero-title">
                        <span className="hero-l1">מרוויחים טוב.</span>
                        <span className="hero-l1">אז למה בסוף החודש</span>
                        <span className="hero-hl hl">לא נשאר כלום?</span>
                    </h1>

                    <p className="hero-desc">
                        ניר יפרח יבנה איתכם תמונה פיננסית אחת וברורה — שתחבר בין התזרים, הפנסיה, המשכנתא וההשקעות. ולראשונה תרגישו שאתם שולטים.
                    </p>

                    <ul className="hero-pain">
                        <li>לא ברור מה יהיה עם הפנסיה בעוד 30 שנה</li>
                        <li>מרוויחים יפה אבל אין תחושת התקדמות</li>
                        <li>משכנתא, ביטוחים, קרן השתלמות — תמונה מבולבלת</li>
                    </ul>

                    <div className="hero-actions">
                        <a href="#video" className="btn-primary">▶&nbsp; צפו בסרטון של 5 דקות</a>
                        <a href="#contact" className="btn-ghost">קבעו שיחת היכרות ←</a>
                    </div>
                    <p className="hero-trust-line">ללא עלות &nbsp;·&nbsp; ללא התחייבות &nbsp;·&nbsp; 30 דקות</p>
                </div>

                {/* ── עמודת תמונה ── */}
                <div className="hero-photo-col">
                    <div className="hero-photo-wrap">
                        {!imgFailed ? (
                            <img
                                src="/Nir.jpg"
                                alt="ניר יפרח CFP"
                                className="hero-photo"
                                onError={() => setImgFailed(true)}
                            />
                        ) : (
                            <div className="hero-photo-fallback" />
                        )}
                        <div className="hero-badge hero-badge-cfp">CFP® מוסמך</div>
                        <div className="hero-badge hero-badge-obj">
                            <span className="hero-badge-dot" />
                            100% אובייקטיבי
                        </div>
                    </div>
                </div>

            </div>
            <div className="hero-scroll" aria-hidden="true">SCROLL</div>
        </section>
    );
}
