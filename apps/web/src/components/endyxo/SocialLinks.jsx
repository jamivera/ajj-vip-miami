import React from 'react';
import { SOCIAL_LINKS } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

// Glifos de marca (lucide no incluye iconos de marcas). Paths simplificados.
const ICONS = {
    instagram: (
        <>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
    ),
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    linkedin: (
        <>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </>
    ),
    tiktok: <path d="M16 8.5a4.5 4.5 0 0 0 4 2.2V7.3a3.2 3.2 0 0 1-2.5-3.3H14v11.1a2.5 2.5 0 1 1-2.5-2.5c.2 0 .4 0 .6.1V9.2a5.7 5.7 0 1 0 4.4 5.5V8.5z" />,
    x: <path d="M4 4l7.5 9.5L4.3 20H7l5.6-6.1L17 20h3l-7.8-9.9L19.4 4h-2.6l-5.1 5.6L7 4z" />,
};

/**
 * Fila de redes sociales en lenguaje Liquid Glass de ATLAS.
 * Las URLs vienen de src/config/site.js (marcadas «REEMPLAZAR»).
 */
export default function SocialLinks({ className = '' }) {
    if (!SOCIAL_LINKS.length) return null;

    return (
        <div className={`flex flex-wrap gap-2.5 ${className}`}>
            {SOCIAL_LINKS.map((s) => {
                const filled = s.key === 'facebook' || s.key === 'tiktok' || s.key === 'x';
                return (
                    <a
                        key={s.key}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        onClick={() => trackEvent('social_click', { social_network: s.key })}
                        className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.10] bg-white/[0.04] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--brand)/0.4)] hover:bg-[hsl(var(--brand)/0.14)]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-[15px] w-[15px] text-muted-foreground transition-colors group-hover:text-foreground"
                            fill={filled ? 'currentColor' : 'none'}
                            stroke={filled ? 'none' : 'currentColor'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            {ICONS[s.key]}
                        </svg>
                    </a>
                );
            })}
        </div>
    );
}
