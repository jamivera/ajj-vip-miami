import React, { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
//  HeroField · movimiento ambiental del hero (ATLAS)
//
//  Campo de partículas índigo con profundidad y parallax sutil de puntero.
//  Optimizado para performance:
//   · nº de partículas escalado por ancho de viewport (menos en móvil).
//   · DPR limitado a 2.
//   · se pausa cuando la pestaña no está visible.
//   · respeta prefers-reduced-motion (dibuja un frame estático, sin bucle).
//   · pointer-events: none y detrás del contenido.
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let width = 0;
        let height = 0;
        let particles = [];
        let raf = 0;
        let running = true;
        const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

        function resize() {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(70, Math.max(18, Math.round((width * height) / 22000)));
            particles = Array.from({ length: count }, () => {
                const depth = Math.random(); // 0 lejos … 1 cerca
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: depth,
                    r: 0.6 + depth * 1.8,
                    vx: (Math.random() - 0.5) * (0.05 + depth * 0.14),
                    vy: (Math.random() - 0.5) * (0.05 + depth * 0.14),
                    a: 0.12 + depth * 0.55,
                };
            });
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            pointer.x += (pointer.tx - pointer.x) * 0.05;
            pointer.y += (pointer.ty - pointer.y) * 0.05;
            const px = (pointer.x - 0.5) * 26;
            const py = (pointer.y - 0.5) * 26;

            for (const p of particles) {
                if (running && !reduce) {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < -4) p.x = width + 4;
                    else if (p.x > width + 4) p.x = -4;
                    if (p.y < -4) p.y = height + 4;
                    else if (p.y > height + 4) p.y = -4;
                }
                const dx = p.x + px * p.z;
                const dy = p.y + py * p.z;
                ctx.beginPath();
                ctx.arc(dx, dy, p.r, 0, Math.PI * 2);
                // índigo ATLAS (#6560F0) con brillo según profundidad
                ctx.fillStyle = `rgba(${120 + p.z * 40}, ${118 + p.z * 30}, 255, ${p.a})`;
                ctx.fill();
            }
        }

        function loop() {
            draw();
            raf = requestAnimationFrame(loop);
        }

        function onPointer(e) {
            pointer.tx = e.clientX / window.innerWidth;
            pointer.ty = e.clientY / window.innerHeight;
        }

        function onVisibility() {
            running = !document.hidden;
            if (running && !reduce && !raf) loop();
            else if (!running && raf) {
                cancelAnimationFrame(raf);
                raf = 0;
            }
        }

        resize();
        draw();
        if (!reduce) {
            loop();
            window.addEventListener('pointermove', onPointer, { passive: true });
        }
        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            if (raf) cancelAnimationFrame(raf);
            window.removeEventListener('pointermove', onPointer);
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
        />
    );
}
