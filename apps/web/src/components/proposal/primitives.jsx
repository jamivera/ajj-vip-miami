import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
//  Primitivas reutilizables para propuestas comerciales Atlas.
//  Genéricas: reciben todo por props. No contienen datos de ningún cliente.
// ─────────────────────────────────────────────────────────────────────────────

/** Etiqueta técnica superior (tag ATLAS). */
export function Eyebrow({ children, className = '' }) {
    return (
        <span className={cn('tag-atlas', className)}>
            <span className="h-1.5 w-1.5 rounded-full bg-brand glow-brand" aria-hidden="true" />
            {children}
        </span>
    );
}

/** Contenedor de sección con id, ancho máximo editorial y padding responsive. */
export function Section({ id, className = '', innerClassName = '', children }) {
    return (
        <section id={id} className={cn('relative scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:py-32', className)}>
            <div className={cn('mx-auto w-full max-w-[76rem]', innerClassName)}>{children}</div>
        </section>
    );
}

/** Encabezado de sección: eyebrow · título · headline · intro. */
export function SectionHeader({ eyebrow, title, headline, intro, align = 'left', className = '' }) {
    const centered = align === 'center';
    return (
        <header className={cn('flex flex-col gap-4', centered && 'items-center text-center', className)}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {title ? (
                <h2 className="display max-w-3xl text-balance text-[clamp(1.7rem,4vw,2.6rem)] text-foreground">
                    {title}
                </h2>
            ) : null}
            {headline ? (
                <p className="max-w-3xl text-balance text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium text-brand-light">
                    {headline}
                </p>
            ) : null}
            {intro ? (
                <p className={cn('max-w-2xl text-[15px] leading-relaxed text-muted-foreground', centered && 'mx-auto')}>
                    {intro}
                </p>
            ) : null}
        </header>
    );
}

/** Métrica destacada (hero, tiempos, cierre). */
export function MetricCard({ value, label, className = '' }) {
    return (
        <div className={cn('card-atlas rounded-xl p-5 sm:p-6', className)}>
            <div className="display text-[clamp(1.6rem,4vw,2.4rem)] leading-none text-foreground">{value}</div>
            <div className="mono mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        </div>
    );
}

/** Card genérica clave/valor (pilares, análisis, incluye, requerimientos…). */
export function ScopeCard({ k, v, index, icon: Icon, className = '' }) {
    return (
        <div className={cn('card-atlas group flex h-full flex-col gap-3 rounded-xl p-6', className)}>
            <div className="flex items-center gap-3">
                {typeof index === 'string' || typeof index === 'number' ? (
                    <span className="mono text-[12px] font-semibold text-brand">{index}</span>
                ) : null}
                {Icon ? <Icon className="h-4 w-4 text-brand" strokeWidth={1.6} /> : null}
                <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-foreground">{k}</h3>
            </div>
            {v ? <p className="text-[14px] leading-relaxed text-muted-foreground">{v}</p> : null}
        </div>
    );
}

/** Fila de "pills" para las 3 acciones comerciales (BOOK NOW · QUOTE · WHATSAPP). */
export function PillRow({ items, className = '' }) {
    return (
        <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
            {items.map((item, i) => (
                <React.Fragment key={item}>
                    <span className="tag-atlas !text-[11px] !tracking-[0.12em]">{item}</span>
                    {i < items.length - 1 ? (
                        <span className="text-brand/50" aria-hidden="true">
                            ·
                        </span>
                    ) : null}
                </React.Fragment>
            ))}
        </div>
    );
}

/** Botón CTA consistente (primario indigo / glass). Registra evento. */
export function CtaButton({ href, children, variant = 'primary', location = 'proposal', external, className = '' }) {
    const label = typeof children === 'string' ? children : undefined;
    const isPrimary = variant === 'primary';
    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={() => trackEvent('cta_click', { cta_text: label, cta_location: location, cta_href: href })}
            className={cn('btn-atlas group px-7 py-3.5 text-[13px]', isPrimary ? 'btn-primary-atlas' : 'btn-glass-atlas', className)}
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
        </a>
    );
}

/** Paso numerado para timelines verticales (proceso). */
export function ProcessStep({ n, k, v, last = false }) {
    return (
        <li className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
            {/* Rail + nodo */}
            <div className="relative flex flex-col items-center">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-[hsl(var(--color-surface))] text-[13px] font-bold text-brand">
                    {n}
                </span>
                {!last ? <span className="timeline-rail absolute top-11 h-full w-px" aria-hidden="true" /> : null}
            </div>
            <div className="pt-1.5">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-foreground">{k}</h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">{v}</p>
            </div>
        </li>
    );
}

/** Lista con checks (requisitos, entrega final). Rejilla responsive. */
export function Checklist({ items, columns = 2, className = '' }) {
    const cols = columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2';
    return (
        <ul className={cn('grid gap-x-8 gap-y-3', cols, className)}>
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                        <Check className="h-3 w-3" strokeWidth={2.4} />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

/** Lista sobria (qué NO está incluido) — presentación secundaria, sin peso visual. */
export function PlainList({ items, columns = 3, className = '' }) {
    const cols = columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2';
    return (
        <ul className={cn('grid gap-x-8 gap-y-2.5', cols, className)}>
            {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

/** Paso de la arquitectura de la landing (card numerada). */
export function ArchitectureStep({ n, k, v }) {
    return (
        <div className="card-atlas group relative flex items-start gap-5 overflow-hidden rounded-xl p-6">
            <span className="num-ghost text-[clamp(2rem,5vw,3rem)]">{n}</span>
            <div className="pt-1">
                <h3 className="text-[14px] font-bold uppercase tracking-[0.09em] text-foreground">{k}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{v}</p>
            </div>
        </div>
    );
}
