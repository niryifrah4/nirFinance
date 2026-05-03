import { siteContent } from "../data/siteContent";

export default function ProcessSection() {
    return (
        <section id="process" className="process-section" dir="rtl">
            <div className="process-inner">
                <div className="section-label">איך זה עובד</div>
                <div className="divider" />
                <h2 className="section-title">{siteContent.process.sectionTitle}</h2>
                <p className="section-desc">{siteContent.process.sectionDescription}</p>

                <div className="process-steps">
                    {siteContent.process.steps.map((step) => (
                        <div key={step.number} className="process-step">
                            <div className="step-num">{step.number}</div>
                            <div className="step-title">{step.title}</div>
                            <div className="step-desc">{step.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
