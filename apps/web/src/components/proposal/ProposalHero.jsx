import React from 'react';
import Reveal from '@/components/Reveal';
import { Eyebrow, MetricCard, CtaButton } from './primitives';

// ─────────────────────────────────────────────────────────────────────────────
//  Hero de propuesta — composición amplia y editorial.
//  Recibe eyebrow, headline, descripción, CTAs y métricas por props.
// ─────────────────────────────────────────────────────────────────────────────

export default function ProposalHero({ eyebrow, headline, description, primaryCta, secondaryCta, metrics = [] }) {
    return (
        <section id="propuesta" className="relative scroll-mt-20 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:pt-44">
            {/* Rejilla sutil detrás del hero */}
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative mx-auto w-full max-w-[80rem]">
                <div className="max-w-4xl">
                    <Reveal>
                        <Eyebrow>{eyebrow}</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="display mt-7 text-balance text-[clamp(2.1rem,6vw,4rem)] text-foreground">
                            {headline}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-[clamp(1rem,2.4vw,1.15rem)] leading-relaxed text-muted-foreground">
                            {description}
                        </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                            {primaryCta ? (
                                <CtaButton href={primaryCta.href} variant="primary" location="hero">
                                    {primaryCta.label}
                                </CtaButton>
                            ) : null}
                            {secondaryCta ? (
                                <CtaButton href={secondaryCta.href} variant="glass" location="hero">
                                    {secondaryCta.label}
                                </CtaButton>
                            ) : null}
                        </div>
                    </Reveal>
                </div>

                {metrics.length ? (
                    <Reveal delay={0.32}>
                        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-4">
                            {metrics.map((m) => (
                                <MetricCard key={m.label} value={m.value} label={m.label} />
                            ))}
                        </div>
                    </Reveal>
                ) : null}
            </div>
        </section>
    );
}
