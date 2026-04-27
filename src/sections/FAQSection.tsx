import { useState } from "react";
import SectionFrame from "../components/SectionFrame";
import { siteContent } from "../data/siteContent";
import { renderLines } from "../utils/renderLines";

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 flex-shrink-0 stroke-current transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-2xl border border-[#d5dbd2] bg-white">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                aria-expanded={open}
            >
                <span className="text-base font-bold text-[#16342d] sm:text-[1.05rem]">
                    {question}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--lime)] text-[#14322b]">
                    <ChevronIcon open={open} />
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="border-t border-[#e8ece5] px-6 pb-6 pt-4 text-base leading-8 text-[#49655c]">
                    {renderLines(answer)}
                </p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <SectionFrame
            id="faq"
            title={siteContent.faq.sectionTitle}
            variant="light"
        >
            <div className="mx-auto max-w-3xl space-y-3" dir="rtl">
                {siteContent.faq.items.map((item) => (
                    <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
            </div>
        </SectionFrame>
    );
}
