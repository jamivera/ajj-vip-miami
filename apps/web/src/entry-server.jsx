import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from '@/pages/HomePage';

// Entry de PRERENDER (SSG). Genera el HTML del cuerpo para inyectarlo en el
// index.html del build → el contenido queda en el HTML servido, legible por
// buscadores y motores de IA (GEO) sin ejecutar JavaScript.
//
// La Home no usa hooks de router (usa <a href>), así que no hace falta Router.
// El <head> (title, meta, OG, JSON-LD) ya vive estático en index.html.
export function render() {
    return renderToString(<HomePage />);
}
