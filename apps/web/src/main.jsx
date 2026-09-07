import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from '@/App';
import { initAttribution } from '@/lib/analytics';
import '@/index.css';

// Captura UTM / atribución lo antes posible (antes de pintar la app).
initAttribution();

const container = document.getElementById('root');

// Si el build está prerenderizado (SSG), el #root ya tiene HTML → hidratamos
// (sin re-render, sin parpadeo). En dev el #root está vacío → montaje normal.
if (container.hasChildNodes()) {
	hydrateRoot(container, <App />);
} else {
	createRoot(container).render(<App />);
}
