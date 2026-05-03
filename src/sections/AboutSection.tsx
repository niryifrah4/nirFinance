import { useState } from "react";
import { siteContent } from "../data/siteContent";

export default function AboutSection() {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <section id="about" className="about-section" dir="rtl">
            <div className="about-inner">
                <div className="about-photo-wrap">
                    {!imageFailed ? (
                        <img
                            className="about-photo"
                            src={siteContent.about.imageSrc}
                            alt={siteContent.about.name}
                            onError={() => setImageFailed(true)}
                        />
                    ) : (
                        <div className="about-photo-placeholder">
                            <span style={{ color: 'var(--text-mid)', fontSize: 14 }}>כאן תיכנס התמונה</span>
                        </div>
                    )}
                    <div className="cfp-badge">CFP®</div>
                </div>

                <div className="about-text">
                    <div className="section-label">{siteContent.about.eyebrow}</div>
                    <div className="divider" />
                    <div className="about-name">{siteContent.about.name}</div>
                    <div className="about-role">
                        מתכנן פיננסי CFP · יועץ משכנתאות · יועץ לכלכלת המשפחה · ניהול תזרים מזומנים · התנהלות פיננסית
                    </div>

                    {siteContent.about.paragraphs.map((paragraph) => {
                        const isHighlight = paragraph.startsWith("##highlight## ");
                        const text = isHighlight ? paragraph.replace("##highlight## ", "") : paragraph;

                        if (isHighlight) {
                            return (
                                <p key={paragraph} className="about-highlight">
                                    {text}
                                </p>
                            );
                        }
                        return (
                            <p key={paragraph} className="about-para">
                                {text}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
