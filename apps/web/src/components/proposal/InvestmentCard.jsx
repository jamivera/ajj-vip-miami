import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CtaButton } from './primitives';

// ─────────────────────────────────────────────────────────────────────────────
//  Card de inversión — pieza de alto impacto. Precio, forma de pago (50/50),
//  destacados y CTA. Genérica: todo por props.
// ─────────────────────────────────────────────────────────────────────────────

export default function InvestmentCard({ eyebrow, title, price, description, payments = [], highlights = [], cta }) {
    return (
        <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-[hsl(var(--color-surface))] p-7 sm:p-10 lg:p-12">
                {/* Wash de color de marca */}
                <div
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, hsl(var(--color-primary) / 0.22), transparent 70%)' }}
                    aria-hidden="true"
                />
                <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                    {/* Izquierda: precio */}
                    <div>
                        {eyebrow ? <span className="tag-atlas">{eyebrow}</span> : null}
                        <h2 className="display mt-5 text-[clamp(1.6rem,4vw,2.4rem)] text-foreground">{title}</h2>
                        <div className="mt-6 flex items-end gap-3">
                            <span className="display text-[clamp(3rem,10vw,5rem)] leading-none text-foreground">{price}</span>
                        </div>
                        <p className="mt-4 text-[15px] text-muted-foreground">{description}</p>

                        {highlights.length ? (
                            <ul className="mt-7 flex flex-col gap-2.5">
                                {highlights.map((h) => (
                                    <li key={h} className="flex items-center gap-2.5 text-[14px] text-foreground/90">
                                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>

                    {/* Derecha: forma de pago + CTA */}
                    <div className="flex flex-col gap-4">
                        <div className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Forma de pago</div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {payments.map((p, i) => (
                                <div key={i} className="card-atlas rounded-xl p-5">
                                    <div className="display text-[1.6rem] leading-none text-brand-light">{p.pct}</div>
                                    <div className="mt-1 text-[20px] font-bold text-foreground">{p.amount}</div>
                                    <div className="mt-2 text-[12px] leading-snug text-muted-foreground">{p.when}</div>
                                </div>
                            ))}
                        </div>
                        {cta ? (
                            <CtaButton href={cta.href} variant="primary" location="investment" className="mt-3 w-full">
                                {cta.label}
                            </CtaButton>
                        ) : null}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
