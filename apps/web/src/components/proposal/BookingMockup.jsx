import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
//  Mockup CONCEPTUAL del formulario BOOK NOW. No es funcional: representa
//  visualmente cómo se verá la acción de reserva en la futura landing.
//  Los campos y el CTA se reciben por props.
// ─────────────────────────────────────────────────────────────────────────────

export default function BookingMockup({ fields = [], cta = 'BOOK NOW' }) {
    return (
        <div className="glass-panel rounded-2xl p-2">
            {/* Barra tipo ventana */}
            <div className="flex items-center gap-2 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="mono ml-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Book Now · Mockup conceptual
                </span>
            </div>

            <div className="rounded-xl bg-[hsl(var(--color-background))]/60 p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-2 text-brand">
                    <MapPin className="h-4 w-4" strokeWidth={1.7} />
                    <span className="text-[13px] font-bold uppercase tracking-[0.12em]">Solicitud de reserva</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2" aria-hidden="true">
                    {fields.map((field) => (
                        <div key={field} className="flex flex-col gap-1.5">
                            <span className="mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                {field}
                            </span>
                            <div className="flex h-10 items-center rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 text-[13px] text-muted-foreground/50">
                                &nbsp;
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    disabled
                    className="btn-atlas btn-primary-atlas pointer-events-none mt-5 w-full px-6 py-3.5 text-[14px]"
                >
                    {cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </button>
            </div>
        </div>
    );
}
