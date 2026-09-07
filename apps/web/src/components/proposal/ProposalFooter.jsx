import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
//  Footer minimal de propuesta. Genérico.
// ─────────────────────────────────────────────────────────────────────────────

export default function ProposalFooter({ agency, client, year = new Date().getFullYear() }) {
    return (
        <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8">
            <div className="mx-auto flex w-full max-w-[80rem] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-brand glow-brand" aria-hidden="true" />
                    <span className="display text-[13px] font-extrabold tracking-[0.22em]">{agency}</span>
                </div>
                <p className="text-[12px] text-muted-foreground">
                    Propuesta comercial · {client} — {agency} © {year}
                </p>
                <p className="text-[11px] text-muted-foreground/70">
                    Documento confidencial. Válido para revisión del cliente.
                </p>
            </div>
        </footer>
    );
}
