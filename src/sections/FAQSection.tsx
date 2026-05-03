import { useState } from "react";
import { siteContent } from "../data/siteContent";

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`faq-item${open ? ' open' : ''}`}>
            <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                {question}
                <span className="faq-arrow">+</span>
            </button>
            {open && (
                <div className="faq-a">{answer}</div>
            )}
        </div>
    );
}

export default function FAQSection() {
    return (
        <section id="faq" className="faq-section" dir="rtl">
            <div className="faq-inner">
                <div>
                    <div className="section-label">שאלות נפוצות</div>
                    <div className="divider" />
                    <h2 className="section-title">מה שכולם<br />שואלים.</h2>
                    <p className="section-desc" style={{ marginTop: 20 }}>כל מה שרציתם לדעת לפני שמתחילים.</p>
                </div>

                <div className="faq-list">
                    {siteContent.faq.items.map((item) => (
                        <FAQItem key={item.question} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
