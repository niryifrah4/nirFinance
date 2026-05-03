import { siteContent } from "../data/siteContent";

export default function ServicesSection() {
    return (
        <section id="services" className="services-section" dir="rtl">
            <div className="section">
                <div className="section-label">השירותים שלי</div>
                <div className="divider" />
                <h2 className="section-title">{siteContent.services.sectionTitle}</h2>
                <p className="section-desc">{siteContent.services.sectionDescription}</p>

                <div className="services-grid">
                    {siteContent.services.items.map((service, index) => (
                        <div key={service.title} className="service-card">
                            <div className="service-num">{String(index + 1).padStart(2, '0')}</div>
                            <div className="service-title">{service.title}</div>
                            <div className="service-desc">{service.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
