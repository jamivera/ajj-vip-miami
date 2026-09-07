import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Plane, Anchor, Menu, X } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
//  VISTA CONCEPTUAL · Maqueta de ALTA FIDELIDAD de la futura web de AJJ dentro
//  de un browser frame. El usuario la recorre con SCROLL INTERNO propio (altura
//  controlada), sin secuestrar el scroll de la propuesta (overscroll:contain).
//
//  Comunica progresivamente que AJJ es más que un Black SUV: private rides →
//  boat experiences → personalized moments. Usa información e imágenes REALES
//  de AJJ; donde no hay foto real (boat) usa un slide conceptual etiquetado.
//
//  No es funcional: inputs decorativos, ningún formulario envía datos.
//  Solo navega internamente (nav / CTAs = smooth-scroll dentro del frame).
// ─────────────────────────────────────────────────────────────────────────────

/** Foto con fallback elegante si el recurso del cliente no carga. */
function Photo({ src, alt, className = '', imgClassName = '' }) {
    const [failed, setFailed] = useState(false);
    return (
        <div className={`relative overflow-hidden bg-[#0b0b10] ${className}`}>
            {!failed && src ? (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onError={() => setFailed(true)}
                    className={`h-full w-full object-cover ${imgClassName}`}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">AJJ · imagen conceptual</span>
                </div>
            )}
        </div>
    );
}

/** Slide/compo conceptual "on the water" (no hay foto real de barco de AJJ). */
function ConceptWater({ className = '', label = true }) {
    return (
        <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, #0a1622 0%, #0a0f18 46%, #050506 100%)' }}
            />
            {/* halo de marca muy sutil */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(90% 70% at 70% 20%, hsl(var(--color-primary) / 0.16), transparent 60%)' }}
            />
            {/* reflejos de agua */}
            <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-[0.22]" viewBox="0 0 400 120" preserveAspectRatio="none">
                {[20, 42, 64, 86, 104].map((y, i) => (
                    <path
                        key={y}
                        d={`M0 ${y} q 50 ${i % 2 ? 6 : -6} 100 0 t 100 0 t 100 0 t 100 0`}
                        fill="none"
                        stroke="hsl(var(--color-primary))"
                        strokeWidth="1"
                        opacity={1 - i * 0.15}
                    />
                ))}
            </svg>
            {/* silueta de yate */}
            <svg className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-[58%]" viewBox="0 0 400 150">
                <path
                    d="M28 104 L372 104 L338 126 L70 126 Z"
                    fill="#05070b"
                    stroke="hsl(var(--color-primary) / 0.5)"
                    strokeWidth="1.2"
                />
                <path d="M120 104 L300 104 L280 78 L165 78 L150 92 L120 92 Z" fill="#0a0e15" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <path d="M150 92 L272 92" stroke="hsl(var(--color-primary) / 0.4)" strokeWidth="1" />
            </svg>
            {label ? (
                <span className="absolute bottom-2 right-2.5 rounded bg-black/40 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.16em] text-white/40">
                    AJJ · imagen conceptual
                </span>
            ) : null}
        </div>
    );
}

/** Botón conceptual del mockup (solo navega internamente). */
function MockBtn({ children, primary, onClick, className = '' }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                primary ? 'text-white' : 'text-white/85 hover:text-white'
            } ${className}`}
            style={
                primary
                    ? {
                          background: 'linear-gradient(145deg, hsl(var(--color-primary)), hsl(var(--color-primary-dark)))',
                          boxShadow: '0 8px 26px hsl(var(--color-primary) / 0.34)',
                      }
                    : { border: '1px solid rgba(255,255,255,0.22)' }
            }
        >
            {children}
        </button>
    );
}

function Eyebrow({ children, className = '' }) {
    return <div className={`text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-light ${className}`}>{children}</div>;
}

/** Selector de idioma conceptual EN / ES / IT (solo cambia el estado activo). */
function LangSelector({ languages, active, onChange, className = '' }) {
    return (
        <div className={`flex items-center gap-0.5 rounded-full border border-white/12 p-0.5 ${className}`}>
            {languages.map((l) => (
                <button
                    key={l.code}
                    type="button"
                    onClick={() => onChange(l.code)}
                    aria-pressed={active === l.code}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.06em] transition-colors ${
                        active === l.code ? 'bg-white/15 text-white' : 'text-white/45 hover:text-white/80'
                    }`}
                >
                    {l.code}
                </button>
            ))}
        </div>
    );
}

export default function ConceptPreview({ concept }) {
    const reduceMotion = useReducedMotion();
    const viewportRef = useRef(null);
    const { assets = {}, mock = {}, tag, disclaimer, cornerLabel, languages = [] } = concept;
    const boats = assets.boats || [];

    const [scrolled, setScrolled] = useState(false);
    const [slide, setSlide] = useState(0);
    const [activeLang, setActiveLang] = useState(languages[0]?.code || 'EN');
    const [menuOpen, setMenuOpen] = useState(false);
    const [boatIdx, setBoatIdx] = useState(0);

    const photoFor = (s) =>
        s.photo === 'ride'
            ? assets.ridePhoto
            : s.photo === 'miami'
              ? assets.miamiPhoto
              : s.photo === 'boat'
                ? boats[0]
                : null;

    // Navegación interna: desplaza el viewport del mockup a la sección destino.
    const go = (to) => {
        const vp = viewportRef.current;
        if (!vp) return;
        const el = vp.querySelector(`[data-sec="${to}"]`);
        if (!el) return;
        const top = el.getBoundingClientRect().top - vp.getBoundingClientRect().top + vp.scrollTop;
        vp.scrollTo({ top: Math.max(0, top - 2), behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    const onScroll = () => setScrolled((viewportRef.current?.scrollTop || 0) > 12);

    // Crossfade del hero (3 imágenes, cinemático).
    const slides = mock.hero?.slides || [];
    useEffect(() => {
        if (reduceMotion || slides.length < 2) return undefined;
        const id = setInterval(() => setSlide((v) => (v + 1) % slides.length), 4800);
        return () => clearInterval(id);
    }, [reduceMotion, slides.length]);

    // Slider de embarcaciones (auto lento + control manual con flechas/puntos).
    useEffect(() => {
        if (reduceMotion || boats.length < 2) return undefined;
        const id = setInterval(() => setBoatIdx((v) => (v + 1) % boats.length), 5200);
        return () => clearInterval(id);
    }, [reduceMotion, boats.length]);
    const boatPrev = () => setBoatIdx((v) => (v - 1 + boats.length) % boats.length);
    const boatNext = () => setBoatIdx((v) => (v + 1) % boats.length);

    // Reveal interno (root = viewport del mockup).
    useEffect(() => {
        if (reduceMotion) return undefined;
        const vp = viewportRef.current;
        if (!vp) return undefined;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-in');
                        io.unobserve(e.target);
                    }
                });
            },
            { root: vp, threshold: 0.18 },
        );
        vp.querySelectorAll('.mock-reveal').forEach((n) => io.observe(n));
        return () => io.disconnect();
    }, [reduceMotion]);

    return (
        <div className="relative pt-7">
            {cornerLabel ? (
                <span className="absolute right-3 top-0 z-20 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur">
                    {cornerLabel}
                </span>
            ) : null}

            {/* Browser frame */}
            <div className="concept-frame mx-auto w-full max-w-[74rem] overflow-hidden rounded-2xl border border-white/[0.1]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0d0d12] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="mx-auto flex items-center gap-1.5 rounded-md bg-black/40 px-3 py-1 text-[11px] text-white/45">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                        {mock.url}
                    </span>
                </div>

                {/* Viewport con scroll interno (universo AJJ) */}
                <div ref={viewportRef} onScroll={onScroll} className="mock-viewport text-white">
                    {/* NAVBAR */}
                    <div
                        className={`sticky top-0 z-30 transition-colors duration-300 ${
                            scrolled || menuOpen ? 'border-b border-white/10 bg-black/80 backdrop-blur-md' : 'bg-transparent'
                        }`}
                    >
                        <div className="relative flex items-center justify-between px-5 py-3.5 sm:px-8">
                            <div className="flex items-center gap-2.5">
                                <Photo
                                    src={assets.logo}
                                    alt="AJJ VIP Miami"
                                    className="h-7 w-7 shrink-0 rounded !bg-transparent"
                                    imgClassName="!object-contain"
                                />
                                <span className="text-[13px] font-extrabold tracking-[0.18em]">{mock.brand}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <nav className="hidden items-center gap-6 lg:flex">
                                    {mock.nav.map((n) => (
                                        <button
                                            key={n.label}
                                            type="button"
                                            onClick={() => go(n.to)}
                                            className="text-[11px] font-medium tracking-[0.14em] text-white/60 transition-colors hover:text-white"
                                        >
                                            {n.label}
                                        </button>
                                    ))}
                                </nav>
                                {languages.length ? (
                                    <LangSelector
                                        languages={languages}
                                        active={activeLang}
                                        onChange={setActiveLang}
                                        className="hidden lg:flex"
                                    />
                                ) : null}
                                <MockBtn
                                    primary
                                    onClick={() => go(mock.navCta.to)}
                                    className="hidden lg:inline-flex !px-4 !py-2 !text-[10px]"
                                >
                                    {mock.navCta.label}
                                </MockBtn>
                                {/* Hamburguesa mobile */}
                                <button
                                    type="button"
                                    onClick={() => setMenuOpen((o) => !o)}
                                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                                    aria-expanded={menuOpen}
                                    className="flex h-9 w-9 items-center justify-center text-white/80 lg:hidden"
                                >
                                    {menuOpen ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
                                </button>
                            </div>
                        </div>

                        {/* Menú mobile (nav + LANGUAGE + BOOK NOW) */}
                        {menuOpen ? (
                            <div className="border-t border-white/10 bg-black/85 px-5 pb-4 pt-1 backdrop-blur-md lg:hidden">
                                <nav className="flex flex-col">
                                    {mock.nav.map((n) => (
                                        <button
                                            key={n.label}
                                            type="button"
                                            onClick={() => {
                                                go(n.to);
                                                setMenuOpen(false);
                                            }}
                                            className="border-b border-white/[0.06] py-3 text-left text-[13px] tracking-[0.12em] text-white/75"
                                        >
                                            {n.label}
                                        </button>
                                    ))}
                                </nav>
                                {languages.length ? (
                                    <div className="mt-4">
                                        <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Language</div>
                                        <div className="mt-2 flex flex-col">
                                            {languages.map((l) => (
                                                <button
                                                    key={l.code}
                                                    type="button"
                                                    onClick={() => setActiveLang(l.code)}
                                                    className={`flex items-center justify-between py-2 text-[13px] transition-colors ${
                                                        activeLang === l.code ? 'text-white' : 'text-white/55'
                                                    }`}
                                                >
                                                    {l.name}
                                                    <span className={`text-[10px] tracking-[0.1em] ${activeLang === l.code ? 'text-brand-light' : 'text-white/35'}`}>
                                                        {l.code}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                                <MockBtn
                                    primary
                                    onClick={() => {
                                        go(mock.navCta.to);
                                        setMenuOpen(false);
                                    }}
                                    className="mt-4 w-full justify-center"
                                >
                                    {mock.navCta.label}
                                </MockBtn>
                            </div>
                        ) : null}
                    </div>

                    {/* ── HERO (3 imágenes crossfade) ── */}
                    <section data-sec="hero" className="relative flex min-h-[560px] flex-col justify-end overflow-hidden sm:min-h-[680px]">
                        {/* slides */}
                        <div className="absolute inset-0">
                            {slides.map((s, idx) => {
                                const src = photoFor(s);
                                const active = idx === slide;
                                return (
                                    <div key={s.label} className={`mock-hero-slide ${active ? 'is-active' : ''}`}>
                                        {src ? (
                                            <img className="mock-hero-img" src={src} alt={`AJJ VIP Miami — ${s.label}`} loading="lazy" decoding="async" />
                                        ) : (
                                            <ConceptWater className="h-full w-full" label={false} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {/* overlay legibilidad */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(5,5,6,0.55) 0%, rgba(5,5,6,0.14) 34%, rgba(5,5,6,0.78) 80%, #050506 100%), linear-gradient(90deg, rgba(5,5,6,0.72) 0%, transparent 58%)',
                            }}
                        />
                        {/* texto estable */}
                        <div className="mock-reveal relative px-5 pb-14 sm:px-10 sm:pb-16">
                            <Eyebrow className="!text-white/70">{mock.hero.eyebrow}</Eyebrow>
                            <h3 className="mt-4 max-w-[20ch] text-[clamp(1.9rem,5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                                {mock.hero.headline[0]}
                                <br />
                                <span className="text-white/70">{mock.hero.headline[1]}</span>
                            </h3>
                            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-white/65 sm:text-[14px]">{mock.hero.sub}</p>
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <MockBtn primary onClick={() => go(mock.hero.primary.to)}>
                                    {mock.hero.primary.label}
                                </MockBtn>
                                <MockBtn onClick={() => go(mock.hero.secondary.to)}>{mock.hero.secondary.label}</MockBtn>
                            </div>
                            <div className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">{mock.hero.tagline}</div>
                        </div>
                        {/* indicador de slides */}
                        {slides.length > 1 ? (
                            <div className="absolute bottom-5 right-5 flex items-center gap-3 sm:right-10">
                                <span className="mono text-[10px] tracking-[0.2em] text-white/50">
                                    {String(slide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                                </span>
                                <div className="flex gap-1.5">
                                    {slides.map((s, idx) => (
                                        <span
                                            key={s.label}
                                            className={`h-0.5 rounded-full transition-all duration-500 ${idx === slide ? 'w-6 bg-white/80' : 'w-3 bg-white/25'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : null}
                        {!reduceMotion ? (
                            <ChevronDown className="scroll-cue absolute bottom-5 left-1/2 h-5 w-5 -translate-x-1/2 text-white/40" strokeWidth={1.5} />
                        ) : null}
                    </section>

                    {/* ── BOOKING ── */}
                    <section data-sec="booking" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="mock-reveal">
                            <Eyebrow>{mock.booking.eyebrow}</Eyebrow>
                            <h3 className="mt-3 text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em]">{mock.booking.headline}</h3>
                            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4">
                                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
                                    {mock.booking.fields.map((f) => (
                                        <div key={f} className="rounded-xl border border-white/[0.07] bg-black/30 px-3.5 py-3">
                                            <div className="text-[9px] uppercase tracking-[0.14em] text-white/35">{f}</div>
                                            <div className="mt-2 h-2 w-3/4 rounded-full bg-white/12" />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => go('booking')}
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white"
                                    style={{
                                        background: 'linear-gradient(145deg, hsl(var(--color-primary)), hsl(var(--color-primary-dark)))',
                                        boxShadow: '0 8px 26px hsl(var(--color-primary) / 0.3)',
                                    }}
                                >
                                    {mock.booking.cta} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* ── SERVICES (3 universos) ── */}
                    <section data-sec="services" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="mock-reveal">
                            <Eyebrow>{mock.services.eyebrow}</Eyebrow>
                            <h3 className="mt-3 text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em]">{mock.services.headline}</h3>
                        </div>
                        <div className="mock-reveal mt-8 grid gap-5 md:grid-cols-3">
                            {mock.services.groups.map((g) => (
                                <div key={g.k} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                                    <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-light">{g.k}</div>
                                    <div className="my-4 h-px w-full bg-white/[0.08]" />
                                    <ul className="flex flex-col gap-2.5">
                                        {g.items.map((it) => (
                                            <li key={it} className="text-[13px] text-white/70">
                                                {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── BEYOND TRANSPORTATION (editorial) ── */}
                    <section data-sec="beyond" className="relative border-t border-white/[0.05] px-5 py-20 text-center sm:px-10 sm:py-24">
                        <div className="mock-glow pointer-events-none absolute inset-0 opacity-60" />
                        <div className="mock-reveal relative mx-auto max-w-3xl">
                            <Eyebrow className="!text-brand-light">{mock.beyond.eyebrow}</Eyebrow>
                            <h3 className="mt-4 text-[clamp(1.7rem,4vw,2.7rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                                {mock.beyond.headline.map((l, i) => (
                                    <span key={l} className={i > 0 ? 'text-white/45' : ''}>
                                        {l}
                                        {i < mock.beyond.headline.length - 1 ? <br /> : null}
                                    </span>
                                ))}
                            </h3>
                            <p className="mx-auto mt-6 max-w-xl text-[14px] leading-relaxed text-white/60">{mock.beyond.text}</p>
                            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                                {mock.beyond.pillars.map((p, i) => (
                                    <React.Fragment key={p}>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">{p}</span>
                                        {i < mock.beyond.pillars.length - 1 ? <span className="text-brand/60">·</span> : null}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── BOAT RENTALS (fotografía grande + slider) ── */}
                    <section data-sec="boat" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="mock-reveal relative h-[460px] overflow-hidden rounded-2xl border border-white/[0.08] sm:h-[540px]">
                            {/* slides (crossfade + zoom ligero) */}
                            <div className="absolute inset-0">
                                {boats.length ? (
                                    boats.map((src, idx) => (
                                        <div key={src} className={`mock-hero-slide ${idx === boatIdx ? 'is-active' : ''}`}>
                                            <Photo
                                                src={src}
                                                alt="Private boat experience — reference concept"
                                                className="h-full w-full"
                                                imgClassName="mock-hero-img"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <ConceptWater className="h-full w-full" />
                                )}
                            </div>
                            {/* overlay para legibilidad */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(180deg, rgba(5,5,6,0.34) 0%, rgba(5,5,6,0.08) 30%, rgba(5,5,6,0.82) 80%, #050506 100%), linear-gradient(90deg, rgba(5,5,6,0.7) 0%, transparent 62%)',
                                }}
                            />
                            {/* micro-label: referencia conceptual (no es barco propio de AJJ) */}
                            <span className="absolute left-4 top-4 rounded bg-black/45 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-white/45">
                                Reference concept
                            </span>

                            {/* controles del slider */}
                            {boats.length > 1 ? (
                                <div className="absolute right-4 top-4 flex items-center gap-3 sm:right-6">
                                    <span className="mono text-[10px] tracking-[0.2em] text-white/60">
                                        {String(boatIdx + 1).padStart(2, '0')} / {String(boats.length).padStart(2, '0')}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={boatPrev}
                                            aria-label="Previous"
                                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                        >
                                            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.8} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={boatNext}
                                            aria-label="Next"
                                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                                        >
                                            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                                        </button>
                                    </div>
                                </div>
                            ) : null}

                            {/* contenido */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                                <Eyebrow>{mock.boat.eyebrow}</Eyebrow>
                                <h3 className="mt-3 max-w-[16ch] text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                                    {mock.boat.headline}
                                </h3>
                                <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/70 sm:text-[14px]">{mock.boat.text}</p>
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {mock.boat.groups.map((gr) => (
                                        <span
                                            key={gr}
                                            className="rounded-full border border-white/18 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75"
                                        >
                                            {gr}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-5 flex flex-wrap items-center gap-5">
                                    <MockBtn primary onClick={() => go(mock.boat.cta.to)}>
                                        <Anchor className="h-3.5 w-3.5" strokeWidth={1.8} />
                                        {mock.boat.cta.label}
                                    </MockBtn>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] uppercase tracking-[0.16em] text-white/45">{mock.boat.priceLabel}</span>
                                        <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-white">{mock.boat.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── PERSONALIZED MOMENTS (editorial) ── */}
                    <section data-sec="personalized" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                            <Photo
                                src={assets.ridePhoto}
                                alt="AJJ VIP Miami"
                                className="mock-reveal aspect-[4/3] rounded-2xl border border-white/[0.08]"
                                imgClassName="brightness-[0.82]"
                            />
                            <div className="mock-reveal">
                                <Eyebrow>{mock.personalized.eyebrow}</Eyebrow>
                                <h3 className="mt-3 text-[clamp(1.6rem,3.6vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                                    {mock.personalized.headline}
                                </h3>
                                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60">{mock.personalized.text}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {mock.personalized.tags.map((t) => (
                                        <span key={t} className="rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/70">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 text-[11px] uppercase tracking-[0.14em] text-brand-light">{mock.personalized.note}</div>
                                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">{mock.personalized.examples}</div>
                            </div>
                        </div>
                    </section>

                    {/* ── FLEET ── */}
                    <section data-sec="fleet" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
                            <div className="mock-reveal order-2 lg:order-1">
                                <Eyebrow>{mock.fleet.eyebrow}</Eyebrow>
                                <h3 className="mt-3 text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em]">{mock.fleet.headline}</h3>
                                <div className="mt-5 text-[clamp(1.3rem,3vw,1.9rem)] font-extrabold">{mock.fleet.title}</div>
                                <div className="text-[13px] uppercase tracking-[0.16em] text-white/50">{mock.fleet.subtitle}</div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {mock.fleet.attributes.map((a) => (
                                        <span key={a} className="rounded-full border border-white/15 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Photo
                                src={assets.miamiPhoto}
                                alt="Cadillac Escalade — AJJ VIP Miami"
                                className="mock-reveal order-1 aspect-[4/3] rounded-2xl border border-white/[0.08] lg:order-2"
                            />
                        </div>
                    </section>

                    {/* ── AIRPORT ── */}
                    <section data-sec="airport" className="border-t border-white/[0.05] px-5 py-16 sm:px-10 sm:py-20">
                        <div className="mock-reveal">
                            <Eyebrow>{mock.airport.eyebrow}</Eyebrow>
                            <h3 className="mt-3 text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em]">{mock.airport.headline}</h3>
                        </div>
                        <div className="mock-reveal mt-8 grid gap-3 sm:grid-cols-2">
                            {mock.airport.points.map((pt) => (
                                <div key={pt.code} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                                    <Plane className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.4} />
                                    <div>
                                        <div className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold leading-none tracking-[-0.02em]">{pt.code}</div>
                                        <div className="mt-1.5 text-[12px] text-white/55">{pt.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mock-reveal mt-6">
                            <MockBtn onClick={() => go('booking')}>{mock.airport.cta}</MockBtn>
                        </div>
                    </section>

                    {/* ── ABOUT (editorial) ── */}
                    <section data-sec="about" className="border-t border-white/[0.05] px-5 py-20 sm:px-10 sm:py-24">
                        <h3 className="mock-reveal text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                            {mock.about.headline.map((line, idx) => (
                                <span key={line} className={idx > 0 ? 'text-white/45' : ''}>
                                    {line}
                                    {idx < mock.about.headline.length - 1 ? <br /> : null}
                                </span>
                            ))}
                        </h3>
                        <div className="mock-reveal mt-8 flex flex-wrap gap-2.5">
                            {mock.about.attributes.map((a) => (
                                <span key={a} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[11px] font-medium tracking-[0.1em] text-white/70">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* ── COVERAGE ── */}
                    <section data-sec="coverage" className="relative border-t border-white/[0.05] px-5 py-20 sm:px-10 sm:py-24">
                        <div className="mock-glow pointer-events-none absolute inset-0 opacity-70" />
                        <div className="relative">
                            <h3 className="mock-reveal text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em]">{mock.coverage.headline}</h3>
                            <div className="mock-reveal mt-8 flex flex-col gap-1.5">
                                {mock.coverage.areas.map((area) => (
                                    <div
                                        key={area}
                                        className="text-[clamp(1.6rem,5vw,3rem)] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-white/85 transition-colors duration-300 hover:text-white"
                                    >
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── FINAL CTA ── */}
                    <section data-sec="final" className="relative border-t border-white/[0.05] px-5 py-20 text-center sm:px-10 sm:py-28">
                        <div className="mock-glow pointer-events-none absolute inset-0" />
                        <div className="mock-reveal relative mx-auto max-w-2xl">
                            <Eyebrow className="!text-brand-light">{mock.final.eyebrow}</Eyebrow>
                            <h3 className="mt-4 text-[clamp(1.7rem,4.4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">{mock.final.headline}</h3>
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <MockBtn primary onClick={() => go(mock.final.primary.to)}>
                                    {mock.final.primary.label}
                                </MockBtn>
                                <MockBtn onClick={() => go(mock.final.secondary.to)}>{mock.final.secondary.label}</MockBtn>
                            </div>
                        </div>
                        <div className="relative mt-16 border-t border-white/[0.06] pt-6 text-[10px] uppercase tracking-[0.16em] text-white/35">
                            {mock.final.footer}
                        </div>
                    </section>
                </div>
            </div>

            {/* Tag conceptual + disclaimer */}
            <div className="mx-auto mt-6 flex max-w-[74rem] flex-col items-start gap-3">
                {tag ? <span className="mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">{tag}</span> : null}
                {disclaimer ? <p className="max-w-3xl text-[12px] leading-relaxed text-muted-foreground/70">{disclaimer}</p> : null}
            </div>
        </div>
    );
}
