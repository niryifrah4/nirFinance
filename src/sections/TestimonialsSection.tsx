import { useState } from "react";
import { siteContent } from "../data/siteContent";

const avatarImages = [
    "https://i.pravatar.cc/96?img=33",
    "https://i.pravatar.cc/96?img=47",
    "https://i.pravatar.cc/96?img=12",
];

function Avatar({ image, name }: { image?: string; name: string }) {
    const [failed, setFailed] = useState(false);

    const initials = name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("");

    if (image && !failed) {
        return (
            <img
                src={image}
                alt={name}
                className="testi-avatar"
                onError={() => setFailed(true)}
            />
        );
    }

    return (
        <div
            className="testi-avatar"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--sage-lt)',
                fontSize: 14,
                fontWeight: 700,
                color: 'var(--forest)',
            }}
        >
            {initials}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="testimonials-section" dir="rtl">
            <div className="testimonials-inner">
                <div className="section-label">לקוחות מספרים</div>
                <div className="divider" />
                <h2 className="section-title">{siteContent.testimonials.sectionTitle}</h2>

                <div className="testimonials-grid">
                    {siteContent.testimonials.items.map((item, index) => (
                        <div key={item.author} className="testi-card">
                            <span className="testi-result">{item.result}</span>
                            <p className="testi-text">{item.text}</p>
                            <div className="testi-author">
                                <Avatar image={avatarImages[index] ?? item.image} name={item.author} />
                                <div>
                                    <div className="testi-name">{item.author}</div>
                                    {item.profession && (
                                        <div className="testi-job">{item.profession}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
