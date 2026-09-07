import React, { useEffect } from 'react';
import { ArrowRight, Car } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { PROPOSAL as P } from '@/config/proposals/ajj-vip-miami';

import ProposalNavbar from '@/components/proposal/ProposalNavbar';
import ProposalHero from '@/components/proposal/ProposalHero';
import ProposalFooter from '@/components/proposal/ProposalFooter';
import InvestmentCard from '@/components/proposal/InvestmentCard';
import BookingMockup from '@/components/proposal/BookingMockup';
import ConceptPreview from '@/components/proposal/ConceptPreview';
import {
    Section,
    SectionHeader,
    ScopeCard,
    MetricCard,
    PillRow,
    CtaButton,
    ProcessStep,
    ArchitectureStep,
    Checklist,
    PlainList,
    Eyebrow,
} from '@/components/proposal/primitives';

// Compone el eyebrow "NN · Título" de cada sección a partir de la config.
const label = (s) => `${s.index} · ${s.eyebrow}`;

export default function AjjVipMiami() {
    const contactCta = { label: P.closing.secondaryCta.label, href: P.agency.contactHref };

    // Título y metadatos de la pestaña (página client-side; sin react-helmet
    // para evitar su fallo de actualización bajo React 19). Es una propuesta
    // que se comparte por enlace, así que el título debe fijarse de forma fiable.
    useEffect(() => {
        const prevTitle = document.title;
        document.title = P.meta.title;

        const setMeta = (attr, key, content) => {
            let el = document.head.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
            return el;
        };

        setMeta('name', 'description', P.meta.description);
        setMeta('name', 'robots', 'noindex, nofollow');
        setMeta('property', 'og:type', 'website');
        setMeta('property', 'og:title', P.meta.title);
        setMeta('property', 'og:description', P.meta.description);

        return () => {
            document.title = prevTitle;
        };
    }, []);

    return (
        <div id="top" className="proposal-root relative z-[1] min-h-screen text-foreground">
            <ProposalNavbar brand={P.agency.name} nav={P.nav} cta={P.approveCta} />

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <ProposalHero
                eyebrow={P.meta.eyebrow}
                headline={P.hero.headline}
                description={P.hero.description}
                primaryCta={P.hero.primaryCta}
                secondaryCta={P.hero.secondaryCta}
                metrics={P.hero.metrics}
            />

            {/* ── 01 · LA OPORTUNIDAD ───────────────────────────────────────── */}
            <Section id="oportunidad">
                <SectionHeader eyebrow={label(P.opportunity)} title={P.opportunity.title} />
                <div className="mt-6 flex max-w-3xl flex-col gap-4">
                    {P.opportunity.paragraphs.map((para) => (
                        <p key={para} className="text-[15px] leading-relaxed text-muted-foreground">
                            {para}
                        </p>
                    ))}
                </div>
                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {P.opportunity.pillars.map((pil, i) => (
                        <Reveal key={pil.k} delay={i * 0.08}>
                            <ScopeCard k={pil.k} v={pil.v} index={`0${i + 1}`} />
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.1}>
                    <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-brand/20 bg-[hsl(var(--color-primary)/0.05)] p-6 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[13px] font-medium text-foreground">Las tres acciones de la nueva landing</span>
                        <PillRow items={P.primaryActions} />
                    </div>
                </Reveal>
            </Section>

            {/* ── 02 · ANÁLISIS Y REFERENCIAS ───────────────────────────────── */}
            <Section id="analisis" className="proposal-alt">
                <SectionHeader eyebrow={label(P.analysis)} title={P.analysis.title} intro={P.analysis.intro} />
                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {P.analysis.blocks.map((b, i) => (
                        <Reveal key={b.k} delay={i * 0.08}>
                            <ScopeCard k={b.k} v={b.v} index={`0${i + 1}`} />
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.1}>
                    <p className="mt-10 max-w-3xl text-balance text-[clamp(1.05rem,2.2vw,1.3rem)] font-medium leading-snug text-brand-light">
                        {P.analysis.closing}
                    </p>
                </Reveal>
            </Section>

            {/* ── 03 · NUEVA LANDING PAGE (recorrido) ───────────────────────── */}
            <Section id="landing">
                <SectionHeader eyebrow={label(P.architecture)} title={P.architecture.title} intro={P.architecture.intro} />
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {P.architecture.steps.map((s, i) => (
                        <Reveal key={s.n} delay={(i % 2) * 0.06}>
                            <ArchitectureStep n={s.n} k={s.k} v={s.v} />
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* ── VISTA CONCEPTUAL (momento de alto impacto) ────────────────── */}
            <Section id="concepto" className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(1000px 520px at 50% -10%, hsl(var(--color-primary) / 0.10), transparent 65%)',
                    }}
                    aria-hidden="true"
                />
                <div className="relative">
                    <SectionHeader
                        eyebrow={P.concept.eyebrow}
                        title={P.concept.headline}
                        intro={P.concept.description}
                    />
                    <Reveal delay={0.08} className="mt-12">
                        <ConceptPreview concept={P.concept} />
                    </Reveal>
                </div>
            </Section>

            {/* ── 04 · BOOK NOW ─────────────────────────────────────────────── */}
            <Section id="book-now" className="proposal-alt">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
                    <div>
                        <Eyebrow>{label(P.bookNow)}</Eyebrow>
                        <h2 className="display mt-6 text-[clamp(1.7rem,4vw,2.6rem)] text-foreground">{P.bookNow.title}</h2>
                        <p className="mt-4 text-[clamp(2rem,7vw,3.4rem)] font-extrabold leading-none tracking-tight text-brand-light">
                            {P.bookNow.headline}
                        </p>
                        <div className="mt-7 flex flex-col gap-4">
                            {P.bookNow.paragraphs.map((para) => (
                                <p key={para} className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                                    {para}
                                </p>
                            ))}
                        </div>
                        <p className="mt-7 rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 text-[13px] leading-relaxed text-muted-foreground/80">
                            {P.bookNow.note}
                        </p>
                    </div>
                    <Reveal delay={0.1}>
                        <BookingMockup fields={P.bookNow.formFields} cta={P.bookNow.formCta} />
                    </Reveal>
                </div>
            </Section>

            {/* ── 05 · SERVICIOS ────────────────────────────────────────────── */}
            <Section id="servicios">
                <div className="flex flex-wrap items-center gap-3">
                    <Eyebrow>{label(P.services)}</Eyebrow>
                    <span className="chip-atlas">{P.services.badge}</span>
                </div>
                <div className="mt-6">
                    <SectionHeader title={P.services.title} intro={P.services.intro} />
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {P.services.items.map((item, i) => (
                        <Reveal key={item} delay={(i % 3) * 0.05}>
                            <div className="card-atlas flex items-center justify-between rounded-xl p-5">
                                <span className="text-[15px] font-medium text-foreground">{item}</span>
                                <ArrowRight className="h-4 w-4 text-brand" strokeWidth={1.6} />
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground/80">{P.services.note}</p>
            </Section>

            {/* ── 06 · FLEET ────────────────────────────────────────────────── */}
            <Section id="fleet" className="proposal-alt">
                <SectionHeader eyebrow={label(P.fleet)} title={P.fleet.title} intro={P.fleet.intro} />
                <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
                    <Reveal>
                        <div className="card-atlas flex h-full flex-col justify-between gap-6 rounded-2xl p-7">
                            <Car className="h-7 w-7 text-brand" strokeWidth={1.4} />
                            <div>
                                <div className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                    {P.fleet.initialLabel}
                                </div>
                                <div className="display mt-2 text-[clamp(1.4rem,3.4vw,2rem)] text-foreground">
                                    {P.fleet.initial}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                            <div className="mono text-[11px] uppercase tracking-[0.14em] text-brand">{P.fleet.confirmLabel}</div>
                            <Checklist className="mt-5" columns={1} items={P.fleet.confirm} />
                        </div>
                    </Reveal>
                </div>
                <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground/80">{P.fleet.note}</p>
            </Section>

            {/* ── 07 · EXPERIENCIA AJJ ──────────────────────────────────────── */}
            <Section id="experiencia">
                <SectionHeader eyebrow={label(P.experience)} title={P.experience.title} intro={P.experience.intro} />
                <Reveal delay={0.06}>
                    <div className="mt-10 flex flex-wrap gap-2.5">
                        {P.experience.attributes.map((attr) => (
                            <span key={attr} className="chip-atlas !text-[13px]">
                                {attr}
                            </span>
                        ))}
                    </div>
                </Reveal>
                <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground/80">{P.experience.note}</p>
            </Section>

            {/* ── 08 · RUTAS Y TARIFAS ──────────────────────────────────────── */}
            <Section id="rutas" className="proposal-alt">
                <SectionHeader eyebrow={label(P.rates)} title={P.rates.title} />
                <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
                    {P.rates.options.map((opt, i) => (
                        <Reveal key={opt.tag} delay={i * 0.08}>
                            <div className="card-atlas flex h-full flex-col rounded-2xl p-7">
                                <span className="tag-atlas w-fit">{opt.tag}</span>
                                <h3 className="mt-4 text-[18px] font-bold text-foreground">{opt.k}</h3>
                                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{opt.v}</p>
                                {opt.examples ? (
                                    <div className="mt-5 border-t border-white/[0.07] pt-5">
                                        <div className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
                                            {opt.examplesLabel}
                                        </div>
                                        <ul className="mt-3 flex flex-col gap-2">
                                            {opt.examples.map((ex) => (
                                                <li key={ex} className="flex items-center gap-2 text-[14px] text-foreground/90">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                                                    {ex}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground/80">{P.rates.note}</p>
            </Section>

            {/* ── 09 · CONFIANZA ────────────────────────────────────────────── */}
            <Section id="confianza">
                <SectionHeader eyebrow={label(P.trust)} title={P.trust.title} intro={P.trust.intro} />
                <Reveal delay={0.06}>
                    <div className="mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-8">
                        <Checklist items={P.trust.items} />
                    </div>
                </Reveal>
                <p className="mt-8 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground/80">{P.trust.note}</p>
            </Section>

            {/* ── 10 · QUÉ INCLUYE EL PROYECTO ──────────────────────────────── */}
            <Section id="alcance" className="proposal-alt">
                <SectionHeader eyebrow={label(P.includes)} title={P.includes.title} />
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {P.includes.cards.map((c, i) => (
                        <Reveal key={c.k} delay={(i % 5) * 0.05}>
                            <ScopeCard k={c.k} v={c.v} />
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 max-w-3xl rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 text-[13px] leading-relaxed text-muted-foreground/80">
                    {P.includes.analyticsNote}
                </p>
            </Section>

            {/* ── 11 · PROCESO DE TRABAJO ───────────────────────────────────── */}
            <Section id="proceso">
                <SectionHeader eyebrow={label(P.process)} title={P.process.title} />
                <ol className="mt-12 max-w-3xl">
                    {P.process.steps.map((s, i) => (
                        <ProcessStep key={s.n} n={s.n} k={s.k} v={s.v} last={i === P.process.steps.length - 1} />
                    ))}
                </ol>
            </Section>

            {/* ── 12 · TIEMPOS ──────────────────────────────────────────────── */}
            <Section id="tiempos" className="proposal-alt">
                <SectionHeader eyebrow={label(P.timeline)} title={P.timeline.title} />
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {P.timeline.metrics.map((m) => (
                        <MetricCard key={m.label} value={m.value} label={m.label} className="!p-8" />
                    ))}
                </div>
                <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-muted-foreground/80">{P.timeline.note}</p>
            </Section>

            {/* ── 13 · QUÉ NECESITAMOS DE AJJ ───────────────────────────────── */}
            <Section id="requerimientos">
                <SectionHeader eyebrow={label(P.requirements)} title={P.requirements.title} />
                <Reveal delay={0.06}>
                    <div className="mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
                        <Checklist items={P.requirements.items} columns={3} />
                    </div>
                </Reveal>
            </Section>

            {/* ── 14 · DOMINIO E INFRAESTRUCTURA ────────────────────────────── */}
            <Section id="infraestructura" className="proposal-alt">
                <SectionHeader eyebrow={label(P.infrastructure)} title={P.infrastructure.title} />
                <div className="mt-8 flex flex-wrap gap-2.5">
                    {P.infrastructure.review.map((r) => (
                        <span key={r} className="chip-atlas">
                            {r}
                        </span>
                    ))}
                </div>
                <div className="mt-8 flex max-w-3xl flex-col gap-4">
                    {P.infrastructure.paragraphs.map((para) => (
                        <p key={para} className="text-[15px] leading-relaxed text-muted-foreground">
                            {para}
                        </p>
                    ))}
                </div>
                <p className="mt-7 max-w-3xl rounded-lg border border-white/[0.07] bg-white/[0.02] p-4 text-[13px] leading-relaxed text-muted-foreground/80">
                    {P.infrastructure.note}
                </p>
            </Section>

            {/* ── 15 · INVERSIÓN ────────────────────────────────────────────── */}
            <Section id="inversion">
                <InvestmentCard
                    eyebrow={P.investment.eyebrow}
                    title={P.investment.title}
                    price={P.investment.price}
                    description={P.investment.project}
                    payments={P.investment.payments}
                    highlights={P.investment.highlights}
                    cta={P.approveCta}
                />
            </Section>

            {/* ── 16 · REVISIONES ───────────────────────────────────────────── */}
            <Section id="revisiones" className="proposal-alt">
                <SectionHeader eyebrow={label(P.revisions)} title={P.revisions.title} />
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
                    {P.revisions.rounds.map((r, i) => (
                        <Reveal key={r.tag} delay={i * 0.08}>
                            <div className="card-atlas rounded-2xl p-7">
                                <span className="tag-atlas">{r.tag}</span>
                                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">{r.v}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-8 flex max-w-3xl flex-col gap-3">
                    {P.revisions.paragraphs.map((para) => (
                        <p key={para} className="text-[13px] leading-relaxed text-muted-foreground/80">
                            {para}
                        </p>
                    ))}
                </div>
            </Section>

            {/* ── 17 · QUÉ NO ESTÁ INCLUIDO ─────────────────────────────────── */}
            <Section id="excluido">
                <SectionHeader eyebrow={label(P.excluded)} title={P.excluded.title} />
                <div className="mt-10">
                    <PlainList items={P.excluded.items} columns={3} />
                </div>
                <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-muted-foreground/80">{P.excluded.note}</p>
            </Section>

            {/* ── 18 · ENTREGA FINAL ────────────────────────────────────────── */}
            <Section id="entrega" className="proposal-alt">
                <SectionHeader eyebrow={label(P.delivery)} title={P.delivery.title} intro={P.delivery.intro} />
                <Reveal delay={0.06}>
                    <div className="mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
                        <Checklist items={P.delivery.checklist} />
                    </div>
                </Reveal>
            </Section>

            {/* ── 19 · POSIBILIDAD DE CRECIMIENTO ───────────────────────────── */}
            <Section id="crecimiento">
                <SectionHeader eyebrow={label(P.growth)} title={P.growth.title} intro={P.growth.note} />
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {P.growth.phases.map((f, i) => (
                        <Reveal key={f.k} delay={(i % 4) * 0.05}>
                            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                                <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-brand-light">{f.k}</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{f.v}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* ── 20 · CIERRE ───────────────────────────────────────────────── */}
            <section id="cierre" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(900px 500px at 50% 0%, hsl(var(--color-primary) / 0.14), transparent 70%)',
                    }}
                    aria-hidden="true"
                />
                <div className="relative mx-auto w-full max-w-[64rem] text-center">
                    <Reveal>
                        <h2 className="display mx-auto max-w-4xl text-balance text-[clamp(2rem,6vw,3.6rem)] text-foreground">
                            {P.closing.headline}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="mx-auto mt-7 max-w-2xl text-[clamp(1rem,2.4vw,1.15rem)] leading-relaxed text-muted-foreground">
                            {P.closing.text}
                        </p>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <div className="mt-9 flex justify-center">
                            <PillRow items={P.primaryActions} />
                        </div>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
                            {P.closing.metrics.map((m) => (
                                <div key={m.label} className="text-center">
                                    <div className="display text-[clamp(1.8rem,5vw,2.6rem)] leading-none text-foreground">
                                        {m.value}
                                    </div>
                                    <div className="mono mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.32}>
                        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
                            <CtaButton href={P.approveCta.href} variant="primary" location="closing">
                                {P.approveCta.label}
                            </CtaButton>
                            <CtaButton href={contactCta.href} variant="glass" location="closing">
                                {contactCta.label}
                            </CtaButton>
                        </div>
                    </Reveal>
                </div>
            </section>

            <ProposalFooter agency={P.agency.name} client={P.client.name} />
        </div>
    );
}
