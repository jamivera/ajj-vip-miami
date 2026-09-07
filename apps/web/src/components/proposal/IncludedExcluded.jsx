import React from 'react';
import { Check, Minus } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
//  Dos columnas: incluido / no incluido. Genérica.
// ─────────────────────────────────────────────────────────────────────────────

function Column({ heading, items, tone }) {
    const included = tone === 'included';
    const Icon = included ? Check : Minus;
    return (
        <div
            className={`rounded-2xl border p-6 sm:p-8 ${
                included
                    ? 'border-brand/25 bg-[hsl(var(--color-primary)/0.05)]'
                    : 'border-white/[0.07] bg-white/[0.02]'
            }`}
        >
            <div className="flex items-center gap-2.5">
                <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        included ? 'bg-brand/20 text-brand' : 'bg-white/5 text-muted-foreground'
                    }`}
                >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground">{heading}</h3>
            </div>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {items.map((item) => (
                    <li
                        key={item}
                        className={`flex items-start gap-2.5 text-[14px] leading-snug ${
                            included ? 'text-foreground/90' : 'text-muted-foreground'
                        }`}
                    >
                        <Icon
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${included ? 'text-brand' : 'text-muted-foreground/70'}`}
                            strokeWidth={2}
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function IncludedExcluded({ included = [], excluded = [], includedLabel = 'Incluido', excludedLabel = 'No incluido' }) {
    return (
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <Column heading={includedLabel} items={included} tone="included" />
            <Column heading={excludedLabel} items={excluded} tone="excluded" />
        </div>
    );
}
