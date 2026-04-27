import type { ReactNode } from "react";

/**
 * Parses **text** markers → lime bold spans.
 */
function parseInline(str: string): ReactNode {
    const parts = str.split(/\*\*(.+?)\*\*/g);
    if (parts.length === 1) return str;
    return parts.map((part, i) =>
        i % 2 === 1 ? (
            <span key={i} className="font-bold text-[var(--lime)] underline decoration-[var(--lime)] underline-offset-4 decoration-2">
                {part}
            </span>
        ) : (
            part
        )
    );
}

/**
 * Splits text at every period and renders each sentence on its own line.
 * Also supports **text** for inline lime bold emphasis.
 */
export function renderLines(text: string) {
    const lines = text
        .split(/(?<=\.)\s+/)
        .map((s) => s.trim())
        .filter(Boolean);

    if (lines.length <= 1) return <>{parseInline(text)}</>;

    return (
        <>
            {lines.map((line, i) => (
                <span key={i} className="block">
                    {parseInline(line)}
                </span>
            ))}
        </>
    );
}
