// ─────────────────────────────────────────────────────────────────────────────
//  PRERENDER (SSG sin navegador)
//
//  Tras el build de cliente + SSR, renderiza la Home a HTML estático y lo
//  inyecta en el index.html servido. Así buscadores y motores de IA (GEO) leen
//  el contenido sin ejecutar JavaScript. En cliente, React HIDRATA ese HTML
//  (sin parpadeo).
//
//  Es resiliente: si el prerender falla, el build de cliente ya produjo una SPA
//  funcional, así que no se rompe el deploy (solo se avisa).
// ─────────────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd(); // apps/web
const clientHtmlPath = path.resolve(root, 'dist/index.html');
const ssrEntryPath = path.resolve(root, 'dist-ssr/entry-server.js');

async function main() {
    if (!existsSync(clientHtmlPath)) {
        console.warn('⚠ prerender: no existe', clientHtmlPath, '— se omite.');
        return;
    }
    if (!existsSync(ssrEntryPath)) {
        console.warn('⚠ prerender: no existe el bundle SSR', ssrEntryPath, '— se omite.');
        return;
    }

    const { render } = await import(pathToFileURL(ssrEntryPath).href);
    const appHtml = render();

    let html = readFileSync(clientHtmlPath, 'utf-8');
    if (!html.includes('<div id="root"></div>')) {
        console.warn('⚠ prerender: no se encontró <div id="root"></div> — se omite.');
        return;
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    writeFileSync(clientHtmlPath, html, 'utf-8');
    console.log('✓ Prerender: contenido inyectado en', clientHtmlPath);
}

main().catch((err) => {
    console.warn('⚠ prerender falló (el build de cliente sigue siendo válido):', err?.message || err);
    process.exit(0);
});
