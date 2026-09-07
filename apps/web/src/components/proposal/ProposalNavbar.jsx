import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
//  Navbar de propuesta — sticky, glass al hacer scroll, hamburguesa en mobile,
//  smooth scroll (heredado de html { scroll-behavior:smooth }).
//  Genérica: recibe marca, navegación y CTA por props.
// ─────────────────────────────────────────────────────────────────────────────

export default function ProposalNavbar({ brand, nav = [], cta }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onCta = () =>
        trackEvent('cta_click', { cta_text: cta?.label, cta_location: 'proposal_header' });

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/[0.06] bg-[hsl(var(--background)/0.82)] shadow-[0_1px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl backdrop-saturate-150'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-5 sm:px-8">
                <a href="#top" className="flex items-center gap-2.5" aria-label={`${brand} inicio`}>
                    <span className="h-2 w-2 rounded-full bg-brand glow-brand dot-pulse" aria-hidden="true" />
                    <span className="display text-[15px] font-extrabold tracking-[0.22em]">{brand}</span>
                    <span className="hidden text-[11px] text-muted-foreground sm:inline">· Propuesta</span>
                </a>

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Secciones de la propuesta">
                    {nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>

                {cta ? (
                    <div className="hidden lg:block">
                        <a
                            href={cta.href}
                            onClick={onCta}
                            target={cta.external ? '_blank' : undefined}
                            rel={cta.external ? 'noopener noreferrer' : undefined}
                            className="btn-atlas btn-primary-atlas group px-4 py-2 text-[13px]"
                        >
                            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.6} />
                            {cta.label}
                        </a>
                    </div>
                ) : null}

                <button
                    type="button"
                    className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                >
                    {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
                </button>
            </div>

            {open ? (
                <div className="border-t border-border bg-[hsl(var(--background)/0.97)] backdrop-blur-xl lg:hidden">
                    <nav className="flex flex-col px-5 py-2" aria-label="Navegación móvil">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-border/70 py-4 text-[15px]"
                            >
                                {n.label}
                            </a>
                        ))}
                        {cta ? (
                            <a
                                href={cta.href}
                                onClick={() => {
                                    setOpen(false);
                                    onCta();
                                }}
                                target={cta.external ? '_blank' : undefined}
                                rel={cta.external ? 'noopener noreferrer' : undefined}
                                className="btn-atlas btn-primary-atlas mb-5 mt-4 w-full px-5 py-3.5 text-[14px]"
                            >
                                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                                {cta.label}
                            </a>
                        ) : null}
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
