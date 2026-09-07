import React from 'react';
import { motion } from 'framer-motion';

const SIDEBAR = ['Overview', 'Clientes', 'Proyectos', 'Contenidos', 'Aprobaciones', 'Campañas', 'Métricas', 'Bitácora'];

const CLIENTS = [
    { name: 'Cliente A', state: 'Aprobado', tone: 'brand' },
    { name: 'Cliente B', state: 'En revisión', tone: 'muted' },
    { name: 'Cliente C', state: 'Planificación', tone: 'muted' },
    { name: 'Cliente D', state: 'Aprobado', tone: 'brand' },
];

const METRICS = [
    { k: 'Campañas activas', v: '18' },
    { k: 'Piezas en revisión', v: '42' },
    { k: 'Aprobaciones hoy', v: '11' },
];

const ACTIVITY = [
    'Brief actualizado — Proyecto 04',
    'Copy aprobado — Calendario semanal',
    'Meta Ads sincronizado — API',
    'Nueva versión de pieza — v3',
];

export default function AgencyOsUI() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--brand)/0.18)] bg-[linear-gradient(140deg,hsl(240_40%_7%),hsl(244_45%_11%)_75%)] shadow-[0_40px_100px_-30px_hsl(var(--brand)/0.40)]"
            aria-hidden="true"
        >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand glow-brand dot-pulse" />
                    <span className="mono text-[10px] font-bold tracking-[0.24em]">AGENCYOS</span>
                </div>
                <span className="mono text-[10px] tracking-[0.2em] text-muted-foreground">workspace / operación</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
                <nav className="hidden border-r border-white/[0.06] p-3 md:block">
                    {SIDEBAR.map((s, i) => (
                        <div
                            key={s}
                            className={`flex items-center justify-between rounded-md px-2 py-2 text-[12px] ${
                                i === 0
                                    ? 'bg-[hsl(var(--brand)/0.16)] font-medium text-foreground'
                                    : 'text-muted-foreground'
                            }`}
                        >
                            {s}
                            {i === 4 && <span className="mono text-[10px] text-brand-light">3</span>}
                        </div>
                    ))}
                </nav>

                <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-3 gap-3">
                        {METRICS.map((m) => (
                            <div key={m.k} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3 sm:p-4">
                                <p className="mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{m.k}</p>
                                <p className="display mt-2 text-xl font-extrabold sm:text-2xl">{m.v}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr]">
                        <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02]">
                            <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                                <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Clientes</span>
                                <span className="mono text-[10px] text-muted-foreground">estado</span>
                            </div>
                            {CLIENTS.map((c) => (
                                <div key={c.name} className="flex items-center justify-between border-b border-white/[0.05] px-3 py-2.5 last:border-0">
                                    <span className="text-[12px]">{c.name}</span>
                                    <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                        <span className={`h-1.5 w-1.5 rounded-full ${c.tone === 'brand' ? 'bg-brand glow-brand' : 'bg-white/25'}`} />
                                        {c.state}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02]">
                            <div className="border-b border-white/[0.06] px-3 py-2">
                                <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Actividad</span>
                            </div>
                            <ul className="p-3">
                                {ACTIVITY.map((a) => (
                                    <li key={a} className="relative mb-3 pl-4 text-[11.5px] leading-snug text-muted-foreground last:mb-0">
                                        <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-white/25" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="flex items-end justify-between">
                            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rendimiento de campañas</span>
                            <span className="mono flex items-center gap-1.5 text-[10px] text-brand-light">
                                <span className="h-1 w-1 rounded-full bg-brand glow-brand dot-pulse" /> live
                            </span>
                        </div>
                        <div className="mt-4 flex h-20 items-end gap-1.5">
                            {[38, 52, 44, 66, 58, 74, 62, 88, 70, 94, 80, 100].map((h, i) => (
                                <span
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`flex-1 rounded-sm ${i > 9 ? 'bg-brand glow-brand' : 'bg-white/10'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
