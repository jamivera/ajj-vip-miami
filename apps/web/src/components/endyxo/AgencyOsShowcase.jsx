import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Layers, Zap } from 'lucide-react';
import AgencyOsUI from './AgencyOsUI';

// Capas flotantes de producto (features reales de AgencyOS). Cuentan «qué
// estamos construyendo» sin párrafos: cada badge es un beneficio concreto.
const BADGES = [
    { label: 'Aprobaciones en 1 clic', icon: CheckCircle2, pos: 'left-[-12px] top-16 sm:left-[-42px]', float: 'float-y' },
    { label: 'Datos en tiempo real', icon: Zap, pos: 'right-[-12px] top-1/3 sm:right-[-40px]', float: 'float-y-2' },
    { label: 'Todo conectado', icon: Layers, pos: 'bottom-14 left-[-8px] sm:left-[-32px]', float: 'float-y-3' },
];

export default function AgencyOsShowcase() {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    // Parallax sutil: la maqueta se mueve en profundidad al hacer scroll.
    const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [44, -44]);

    return (
        <div ref={ref} className="relative">
            {/* Glow ambiental detrás del producto */}
            <div
                className="pointer-events-none absolute -inset-x-8 -inset-y-16 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,hsl(var(--brand)/0.20),transparent)]"
                aria-hidden="true"
            />

            <motion.div style={{ y }}>
                <AgencyOsUI />
            </motion.div>

            {/* Capas flotantes de features — profundidad + Liquid Glass */}
            {BADGES.map((b) => {
                const Icon = b.icon;
                return (
                    <div
                        key={b.label}
                        className={`glass-panel ${b.float} absolute z-10 hidden items-center gap-2 rounded-full px-3.5 py-2 sm:flex ${b.pos}`}
                        aria-hidden="true"
                    >
                        <Icon className="h-3.5 w-3.5 text-brand-light" strokeWidth={2} />
                        <span className="text-[12px] font-medium text-foreground/90">{b.label}</span>
                    </div>
                );
            })}
        </div>
    );
}
