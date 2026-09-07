import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from '@/pages/HomePage';
import AjjVipMiami from '@/pages/proposals/AjjVipMiami';

// Entry de PRERENDER (SSG). Genera el HTML del cuerpo para inyectarlo en el
// index.html del build → el contenido queda en el HTML servido, legible por
// buscadores y motores de IA (GEO) sin ejecutar JavaScript.
//
// Ninguna de las dos usa hooks de router (usan <a href>), así que no hace falta
// Router. El <head> ya vive estático en index.html. Cuando el despliegue es solo
// para la propuesta (VITE_HOME_IS_PROPOSAL=1, p.ej. GitHub Pages), se prerenderiza
// la propuesta en la raíz para que coincida con el cliente (sin parpadeo).
const HOME_IS_PROPOSAL = import.meta.env.VITE_HOME_IS_PROPOSAL === '1';

export function render() {
    return renderToString(HOME_IS_PROPOSAL ? <AjjVipMiami /> : <HomePage />);
}
