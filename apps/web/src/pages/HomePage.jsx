import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteHeader from '@/components/endyxo/SiteHeader';
import SystemDiagram from '@/components/endyxo/SystemDiagram';
import AgencyOsShowcase from '@/components/endyxo/AgencyOsShowcase';
import SocialLinks from '@/components/endyxo/SocialLinks';
import HeroField from '@/components/endyxo/HeroField';
import RotatingWord from '@/components/endyxo/RotatingWord';
import { SITE } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

// ── Contenido (frases cortas, cada palabra con función) ──────────────────────

// Lo que vemos: la operación fragmentada de las empresas.
const FRAGMENTS = ['WhatsApp', 'Hojas de cálculo', 'Correos', 'Documentos', 'Anuncios', 'Analítica', 'Contenido', 'Aprobaciones'];

// Qué construimos.
const SOLUTIONS = [
    { id: '01', title: 'Productos digitales', text: 'Productos propios diseñados alrededor de problemas reales de operación.' },
    { id: '02', title: 'Sistemas a medida', text: 'Sistemas que conectan procesos, información y equipos en un solo lugar.' },
    { id: '03', title: 'Automatización e IA', text: 'Automatización, datos e inteligencia artificial donde de verdad aportan valor.' },
];

// AgencyOS: problema → solución → para quién.
const AGENCYOS_BLOCKS = [
    { k: 'Por qué nació', v: 'Las agencias operan en WhatsApp, hojas de cálculo y correos. Información dispersa, aprobaciones lentas, poca visibilidad.' },
    { k: 'Qué resuelve', v: 'Centraliza clientes, contenidos, aprobaciones, campañas y datos en un mismo espacio de trabajo.' },
    { k: 'Para quién', v: 'Agencias de marketing y equipos creativos que quieren escalar sin perder el control.' },
];

// Hacia dónde vamos.
const ECOSYSTEM = [
    { name: 'AgencyOS', status: 'Disponible', active: true },
    { name: 'Producto 02', status: 'En desarrollo', active: false },
    { name: 'Producto 03', status: 'Próximamente', active: false },
];

const VALUES = ['Simplicidad', 'Integración', 'Tecnología', 'Escalabilidad'];

function Eyebrow({ children }) {
    return (
        <span className="tag-atlas">
            <span className="h-1.5 w-1.5 rounded-full bg-brand glow-brand" aria-hidden="true" />
            {children}
        </span>
    );
}

function PrimaryLink({ href, children, dark = false }) {
    const label = typeof children === 'string' ? children : undefined;
    return (
        <a
            href={href}
            onClick={() => trackEvent('cta_click', { cta_text: label, cta_href: href })}
            className={`btn-atlas group px-7 py-3.5 ${dark ? 'btn-primary-atlas' : 'btn-glass-atlas'}`}
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
        </a>
    );
}

export default function HomePage() {
    return (
        <div id="top" className="relative z-[1] min-h-screen text-foreground">
            <Helmet>
                <html lang="es" />
                <title>Endyxo — Sistemas y software que conectan tu operación</title>
                <meta
                    name="description"
                    content="Endyxo diseña y desarrolla productos, software y sistemas digitales que conectan procesos, información y equipos. AgencyOS es nuestro producto flagship para agencias."
                />
                <link rel="canonical" href={`${SITE.domain}/`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Endyxo" />
                <meta property="og:title" content="Endyxo — Sistemas y software que conectan tu operación" />
                <meta property="og:description" content="Software y sistemas digitales que conectan procesos, información y equipos. Conoce AgencyOS, nuestro producto flagship." />
                <meta property="og:url" content={`${SITE.domain}/`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Endyxo — Sistemas y software que conectan tu operación" />
                <meta name="twitter:description" content="Software y sistemas digitales que conectan procesos, información y equipos. Conoce AgencyOS." />
            </Helmet>

            <SiteHeader />

            <main>
                {/* ═══════ HERO — quiénes somos + qué hacemos ═══════ */}
                <section className="relative flex min-h-[92vh] items-center overflow-hidden">
                    <HeroField />
                    <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
                    <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
                        <Reveal y={16}>
                            <Eyebrow>Compañía de tecnología</Eyebrow>
                        </Reveal>

                        <Reveal delay={0.08} y={20}>
                            <h1 className="mt-8 max-w-[18ch] text-[2.9rem] font-black leading-[0.98] tracking-tight sm:text-[4.6rem] lg:text-[6rem]">
                                Construimos los <span className="text-brand">sistemas</span> que hacen crecer tu empresa.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-muted-foreground sm:text-[20px]">
                                Diseñamos software y sistemas digitales a medida que conectan procesos, información y equipos.
                                Menos herramientas sueltas, más operación conectada.
                            </p>
                        </Reveal>

                        <Reveal delay={0.22}>
                            <p className="mono mt-6 flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                                Pensado para
                                <RotatingWord words={['agencias', 'startups', 'equipos', 'empresas que crecen']} className="font-semibold" />
                            </p>
                        </Reveal>

                        <Reveal delay={0.28}>
                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <PrimaryLink href="#agencyos" dark>
                                    Ver AgencyOS
                                </PrimaryLink>
                                <PrimaryLink href="#vision">Nuestra visión</PrimaryLink>
                            </div>
                        </Reveal>
                    </div>

                    <a
                        href="#problema"
                        aria-label="Ver más"
                        className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:block"
                    >
                        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
                    </a>
                </section>

                {/* ═══════ MARQUEE — textura tecnológica ═══════ */}
                <div className="overflow-hidden border-y border-border py-4">
                    <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
                        {[0, 1].map((dup) => (
                            <div key={dup} className="flex gap-10">
                                {['Software a medida', 'Sistemas conectados', 'Automatización', 'Inteligencia artificial', 'Datos', 'Productos digitales', 'AgencyOS', 'Operación'].map((w) => (
                                    <span key={w} className="mono flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                                        {w}
                                        <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══════ PROBLEMA — lo que vemos en el mercado ═══════ */}
                <section id="problema" className="mx-auto max-w-[90rem] scroll-mt-24 px-5 py-32 sm:px-8 sm:py-44">
                    <div className="mx-auto max-w-[46rem] text-center">
                        <Reveal>
                            <Eyebrow>Lo que vemos</Eyebrow>
                            <h2 className="mx-auto mt-8 max-w-[18ch] text-[2.1rem] font-extrabold leading-[1.05] sm:text-[3.4rem]">
                                No es un problema de esfuerzo. Es un problema de <span className="text-brand">sistema</span>.
                            </h2>
                            <p className="mx-auto mt-7 max-w-[48ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
                                Herramientas desconectadas, información dispersa y decisiones sin datos frenan el crecimiento.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
                            {FRAGMENTS.map((f) => (
                                <span key={f} className="chip-atlas">
                                    <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                                    {f}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ═══════ VISIÓN — por qué existimos ═══════ */}
                <section id="vision" className="scroll-mt-24 border-y border-border bg-secondary/40 py-32 sm:py-44">
                    <div className="mx-auto max-w-[72rem] px-5 text-center sm:px-8">
                        <Reveal>
                            <Eyebrow>Nuestra visión</Eyebrow>
                            <h2 className="mx-auto mt-8 max-w-[22ch] text-[2.1rem] font-extrabold leading-[1.08] sm:text-[3.4rem]">
                                El software debería reducir la complejidad. <span className="text-brand">No crear más.</span>
                            </h2>
                            <p className="mx-auto mt-8 max-w-[54ch] text-[17px] leading-relaxed text-muted-foreground sm:text-[19px]">
                                Construimos sistemas que conectan personas, procesos, información y tecnología —diseñados
                                alrededor de cómo operan realmente las empresas.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════ SOLUCIONES — qué construimos ═══════ */}
                <section id="soluciones" className="mx-auto max-w-[90rem] scroll-mt-24 px-5 py-32 sm:px-8 sm:py-44">
                    <Reveal>
                        <Eyebrow>Qué construimos</Eyebrow>
                        <h2 className="mt-8 max-w-[20ch] text-[2rem] font-extrabold leading-[1.05] sm:text-[3.2rem]">
                            Soluciones digitales conectadas, no piezas sueltas.
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {SOLUTIONS.map((p, i) => (
                            <Reveal key={p.id} delay={i * 0.08}>
                                <article className="card-atlas group h-full rounded-2xl p-8 sm:p-10">
                                    <div className="flex items-center justify-between">
                                        <span className="mono text-[10px] font-bold tracking-[0.24em] text-brand-light">{p.id}</span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-brand" />
                                    </div>
                                    <h3 className="mt-14 text-[19px] font-bold tracking-tight">{p.title}</h3>
                                    <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-16">
                        <SystemDiagram />
                    </div>
                </section>

                {/* ═══════ AGENCYOS — el producto flagship, explicado ═══════ */}
                <section id="agencyos" className="scroll-mt-24 border-y border-border bg-secondary/40 py-32 sm:py-44">
                    <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
                        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                            <Reveal>
                                <Eyebrow>Producto flagship</Eyebrow>
                                <p className="display mt-8 text-[3rem] font-black leading-none tracking-tight sm:text-[4rem]">AgencyOS</p>
                                <h2 className="mt-6 max-w-[20ch] text-[1.5rem] font-semibold leading-tight sm:text-[2rem]">
                                    El sistema operativo para <span className="text-brand">agencias de marketing</span>.
                                </h2>

                                <dl className="mt-10 space-y-6 border-t border-border pt-8">
                                    {AGENCYOS_BLOCKS.map((b) => (
                                        <div key={b.k} className="grid gap-1.5 sm:grid-cols-[160px_1fr] sm:gap-6">
                                            <dt className="mono text-[11px] uppercase tracking-[0.18em] text-brand-light">{b.k}</dt>
                                            <dd className="max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">{b.v}</dd>
                                        </div>
                                    ))}
                                </dl>

                                <div className="mt-10">
                                    <PrimaryLink href="#contacto" dark>
                                        Explorar AgencyOS
                                    </PrimaryLink>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <AgencyOsShowcase />
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* ═══════ ECOSISTEMA — hacia dónde vamos ═══════ */}
                <section id="ecosistema" className="mx-auto max-w-[90rem] scroll-mt-24 px-5 py-32 sm:px-8 sm:py-44">
                    <div className="mx-auto max-w-[46rem] text-center">
                        <Reveal>
                            <Eyebrow>Hacia dónde vamos</Eyebrow>
                            <h2 className="mx-auto mt-8 max-w-[20ch] text-[2rem] font-extrabold leading-[1.05] sm:text-[3.2rem]">
                                AgencyOS es el primer paso de un <span className="text-brand">ecosistema</span>.
                            </h2>
                            <p className="mx-auto mt-7 max-w-[48ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
                                Estamos construyendo la próxima capa de software empresarial: sistemas conectados que crecen contigo.
                            </p>
                        </Reveal>
                    </div>

                    <div className="mx-auto mt-16 max-w-[64rem] border-t border-border">
                        {ECOSYSTEM.map((p, i) => (
                            <Reveal key={p.name} delay={i * 0.08}>
                                <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border py-8 transition-colors hover:bg-white/[0.02] sm:py-9">
                                    <span className="mono text-[10px] tracking-[0.24em] text-muted-foreground">0{i + 1}</span>
                                    <span className={`display text-[1.5rem] font-bold tracking-tight sm:text-[2.2rem] ${p.active ? '' : 'text-muted-foreground'}`}>
                                        {p.name}
                                    </span>
                                    <span className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                        <span className={`h-1.5 w-1.5 rounded-full ${p.active ? 'bg-brand glow-brand dot-pulse' : 'bg-white/20'}`} />
                                        <span className="hidden sm:inline">{p.status}</span>
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ═══════ COMPAÑÍA — quiénes somos ═══════ */}
                <section id="compania" className="scroll-mt-24 border-y border-border bg-secondary/40 py-32 sm:py-44">
                    <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
                        <Reveal>
                            <Eyebrow>Compañía</Eyebrow>
                            <h2 className="mt-8 text-[2rem] font-extrabold leading-[1.05] sm:text-[2.8rem]">Endyxo</h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="max-w-[52ch] text-[18px] leading-relaxed sm:text-[21px]">
                                Existimos para convertir operaciones complejas en sistemas más simples.
                            </p>
                            <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
                                Desarrollamos productos propios y sistemas digitales bajo una misma filosofía: simplicidad,
                                integración, tecnología y escalabilidad.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-2.5">
                                {VALUES.map((v) => (
                                    <span key={v} className="chip-atlas">
                                        <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════ CTA FINAL ═══════ */}
                <section id="contacto" className="scroll-mt-24 py-32 sm:py-48">
                    <div className="mx-auto max-w-[72rem] px-5 sm:px-8">
                        <Reveal>
                            <div className="glass-panel relative overflow-hidden rounded-2xl border-[hsl(var(--brand)/0.20)] bg-[linear-gradient(135deg,hsl(var(--brand)/0.12),hsl(var(--brand)/0.03))] px-6 py-16 text-center shadow-[0_0_80px_hsl(var(--brand)/0.12)] sm:px-16 sm:py-24">
                                <h2 className="text-[2.2rem] font-black leading-[1.02] sm:text-[3.6rem]">
                                    Construyamos tu <span className="text-brand">sistema</span>.
                                </h2>
                                <p className="mx-auto mt-6 max-w-[44ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
                                    Cuéntanos cómo operas hoy. Te mostramos cómo conectarlo.
                                </p>
                                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <PrimaryLink href="#agencyos" dark>
                                        Ver AgencyOS
                                    </PrimaryLink>
                                    <PrimaryLink href={`mailto:${SITE.contact.email}`}>Contactar</PrimaryLink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border bg-[hsl(240_33%_3%)]">
                <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-brand glow-brand" aria-hidden="true" />
                                <span className="display text-[15px] font-extrabold tracking-[0.22em]">ENDYXO</span>
                            </div>
                            <p className="mt-4 max-w-[26ch] text-[13px] leading-relaxed text-muted-foreground">
                                Productos, software y sistemas digitales que conectan la operación de las empresas.
                            </p>
                            <SocialLinks className="mt-6" />
                        </div>
                        <nav aria-label="Footer">
                            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Navegación</p>
                            <ul className="mt-4 space-y-2 text-[13px]">
                                {[['Soluciones', '#soluciones'], ['AgencyOS', '#agencyos'], ['Compañía', '#compania'], ['Contacto', '#contacto']].map(([l, h]) => (
                                    <li key={h}>
                                        <a href={h} className="text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div>
                            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Legal</p>
                            <ul className="mt-4 space-y-2 text-[13px]">
                                <li><a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">Privacidad</a></li>
                                <li><a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">Términos</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Contacto</p>
                            <ul className="mt-4 space-y-2 text-[13px]">
                                <li>
                                    <a href={`mailto:${SITE.contact.email}`} onClick={() => trackEvent('contact_click', { method: 'email' })} className="text-muted-foreground transition-colors hover:text-foreground">
                                        {SITE.contact.email}
                                    </a>
                                </li>
                                <li>
                                    <a href={SITE.contact.phoneHref} onClick={() => trackEvent('contact_click', { method: 'phone' })} className="text-muted-foreground transition-colors hover:text-foreground">
                                        {SITE.contact.phone}
                                    </a>
                                </li>
                                <li>
                                    <a href={SITE.contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('contact_click', { method: 'whatsapp' })} className="text-muted-foreground transition-colors hover:text-foreground">
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                            <p className="mono mt-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                                AgencyOS — An Endyxo product
                            </p>
                        </div>
                    </div>
                    <div className="mt-14 border-t border-border pt-6">
                        <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            © {new Date().getFullYear()} ENDYXO. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
