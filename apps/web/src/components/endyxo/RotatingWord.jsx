import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

// Palabra que rota suavemente. Tipografía como parte de la experiencia, sin
// competir con el mensaje. Si el usuario prefiere menos movimiento, queda fija.
export default function RotatingWord({ words = [], interval = 2200, className = '' }) {
    const reduce = useReducedMotion();
    const [i, setI] = useState(0);

    useEffect(() => {
        if (reduce || words.length <= 1) return undefined;
        const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
        return () => clearInterval(id);
    }, [reduce, words.length, interval]);

    return (
        <span className={`relative inline-grid ${className}`} aria-live="polite">
            {/* reserva de ancho para evitar saltos de layout (CLS) */}
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                {words.reduce((a, b) => (b.length > a.length ? b : a), '')}
            </span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[i]}
                    className="col-start-1 row-start-1 text-brand"
                    initial={reduce ? false : { y: '0.5em', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduce ? undefined : { y: '-0.5em', opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {words[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
