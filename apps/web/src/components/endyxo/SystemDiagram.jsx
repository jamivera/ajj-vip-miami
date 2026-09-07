import React from 'react';
import { motion } from 'framer-motion';

const NODES = ['Clients', 'Content', 'Data'];

export default function SystemDiagram() {
    return (
        <div className="relative w-full border-t border-border pt-10">
            <div className="mb-8 flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Endyxo system</span>
                <span className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand glow-brand dot-pulse" aria-hidden="true" /> active
                </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {NODES.map((n, i) => (
                    <motion.div
                        key={n}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="card-atlas group relative rounded-xl p-6"
                    >
                        <span className="mono text-[10px] tracking-[0.24em] text-brand-light">0{i + 1}</span>
                        <p className="display mt-6 text-lg font-bold">{n}</p>
                        <span className="mt-3 block h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-[hsl(var(--brand))]" />
                    </motion.div>
                ))}
            </div>

            <div className="relative h-24" aria-hidden="true">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M16.6 0 V45 H50 V100" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" vectorEffect="non-scaling-stroke" pathLength="1" className="draw-line" />
                    <path d="M50 0 V100" fill="none" stroke="hsl(var(--brand))" strokeWidth="0.4" vectorEffect="non-scaling-stroke" pathLength="1" className="draw-line" />
                    <path d="M83.4 0 V45 H50 V100" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" vectorEffect="non-scaling-stroke" pathLength="1" className="draw-line" />
                </svg>
            </div>

            <div className="flex flex-col items-center gap-6 rounded-xl border border-[hsl(var(--brand)/0.22)] bg-[linear-gradient(135deg,hsl(var(--brand)/0.10),transparent_60%)] px-6 py-8 shadow-[0_0_50px_hsl(var(--brand)/0.08)] sm:flex-row sm:justify-between">
                <div>
                    <span className="mono text-[10px] uppercase tracking-[0.28em] text-brand-light">Layer</span>
                    <p className="display mt-2 text-2xl font-extrabold">AgencyOS</p>
                </div>
                <div className="hidden flex-1 px-10 sm:block">
                    <div className="relative h-px w-full bg-border">
                        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand glow-brand dot-pulse" />
                    </div>
                </div>
                <p className="mono text-[11px] uppercase tracking-[0.28em]">One system</p>
            </div>
        </div>
    );
}
