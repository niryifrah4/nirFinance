import { siteContent } from "../data/siteContent";

export default function StatsSection() {
    return (
        <div className="bg-[#16342d] border-y border-white/8" dir="rtl">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {siteContent.stats.items.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-black text-[var(--lime)] sm:text-3xl">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-sm font-medium text-white/60">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
