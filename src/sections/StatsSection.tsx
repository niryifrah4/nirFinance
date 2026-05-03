import { siteContent } from "../data/siteContent";

export default function StatsSection() {
    return (
        <div className="stats-bar" dir="rtl">
            {siteContent.stats.items.map((stat, i) => (
                <div key={stat.label} className="stat-item" style={i === siteContent.stats.items.length - 1 ? { borderLeft: 'none' } : undefined}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}
