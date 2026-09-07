import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const NAV = [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'AgencyOS', href: '#agencyos' },
    { label: 'Compañía', href: '#compania' },
    { label: 'Contacto', href: '#contacto' },
];

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/[0.06] bg-[hsl(var(--background)/0.82)] shadow-[0_1px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl backdrop-saturate-150'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8">
                <a href="#top" className="flex items-center gap-2" aria-label="ENDYXO inicio">
                    <span className="h-2 w-2 rounded-full bg-brand glow-brand dot-pulse" aria-hidden="true" />
                    <span className="display text-[15px] font-extrabold tracking-[0.22em]">ENDYXO</span>
                </a>

                <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
                    {NAV.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="relative text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#agencyos"
                        onClick={() => trackEvent('cta_click', { cta_text: 'Explorar AgencyOS', cta_location: 'header' })}
                        className="btn-atlas btn-primary-atlas group px-4 py-2 text-[13px]"
                    >
                        Explorar AgencyOS
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                    </a>
                </div>

                <button
                    type="button"
                    className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                >
                    {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-border bg-[hsl(var(--background)/0.95)] backdrop-blur-xl md:hidden">
                    <nav className="flex flex-col px-5 py-2" aria-label="Móvil">
                        {NAV.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-border/70 py-4 text-[15px]"
                            >
                                {n.label}
                            </a>
                        ))}
                        <a
                            href="#agencyos"
                            onClick={() => setOpen(false)}
                            className="btn-atlas btn-primary-atlas mt-4 mb-5 w-full px-5 py-3.5 text-[14px]"
                        >
                            Explorar AgencyOS <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
