// ─────────────────────────────────────────────────────────────────────────────
//  ANALÍTICA + ATRIBUCIÓN  ·  ENDYXO
//
//  · No depende de librerías externas (0 KB extra, no bloquea render).
//  · Captura DINÁMICAMENTE cualquier parámetro UTM que llegue por la URL
//    (nunca valores fijos por campaña — la arquitectura es escalable).
//  · Persiste la atribución de PRIMER contacto (first-touch) y ÚLTIMO (last-touch)
//    para poder relacionar Fuente → Medio → Campaña → Contenido → Landing →
//    Interacción → Conversión.
//  · Empuja todo a window.dataLayer para que GTM/GA4 lo consuman.
//
//  El ID real de GTM se carga en /index.html. Aquí solo alimentamos dataLayer.
// ─────────────────────────────────────────────────────────────────────────────

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const CLICK_IDS = ['gclid', 'fbclid', 'ttclid', 'li_fat_id', 'msclkid']; // ads click-ids
const FIRST_TOUCH_KEY = 'endyxo_attribution_first';
const LAST_TOUCH_KEY = 'endyxo_attribution_last';

// Guardado para SSR/prerender: `window` no existe al renderizar en servidor.
const isBrowser = typeof window !== 'undefined';
if (isBrowser) window.dataLayer = window.dataLayer || [];

function readParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    [...UTM_KEYS, ...CLICK_IDS].forEach((k) => {
        const v = params.get(k);
        if (v) data[k] = v;
    });
    return data;
}

function inferChannel(attr) {
    // Deriva canal legible cuando no hay utm_source (directo, orgánico, referido).
    if (attr.utm_source || attr.utm_medium) return null;
    const ref = document.referrer;
    if (!ref) return { source: 'direct', medium: '(none)' };
    try {
        const host = new URL(ref).hostname.replace('www.', '');
        if (host === window.location.hostname) return null;
        const engines = ['google.', 'bing.', 'duckduckgo.', 'yahoo.', 'ecosia.'];
        if (engines.some((e) => host.includes(e))) return { source: host, medium: 'organic' };
        return { source: host, medium: 'referral' };
    } catch {
        return { source: 'direct', medium: '(none)' };
    }
}

function safeSet(storage, key, value) {
    try {
        storage.setItem(key, JSON.stringify(value));
    } catch {
        /* storage bloqueado — ignorar silenciosamente */
    }
}

function safeGet(storage, key) {
    try {
        return JSON.parse(storage.getItem(key) || 'null');
    } catch {
        return null;
    }
}

/**
 * Inicializa la captura de atribución. Llamar una vez, lo antes posible.
 */
export function initAttribution() {
    if (!isBrowser) return;
    const now = new Date().toISOString();
    const urlParams = readParams();
    const channel = inferChannel(urlParams);

    const attribution = {
        ...urlParams,
        ...(channel ? { utm_source: channel.source, utm_medium: channel.medium } : {}),
        landing_page: window.location.pathname + window.location.search,
        referrer: document.referrer || '(direct)',
        timestamp: now,
    };

    const hasSignal = Object.keys(urlParams).length > 0 || channel;

    // Last-touch: se sobrescribe cada visita con señal.
    if (hasSignal) safeSet(window.sessionStorage, LAST_TOUCH_KEY, attribution);

    // First-touch: solo se escribe una vez (persiste entre visitas).
    if (hasSignal && !safeGet(window.localStorage, FIRST_TOUCH_KEY)) {
        safeSet(window.localStorage, FIRST_TOUCH_KEY, attribution);
    }

    window.dataLayer.push({
        event: 'attribution_ready',
        attribution: getAttribution(),
    });
}

/**
 * Devuelve la atribución combinada (first-touch + last-touch) para adjuntarla
 * a formularios, conversiones o cualquier evento.
 */
export function getAttribution() {
    if (!isBrowser) return { first_touch: null, last_touch: null };
    return {
        first_touch: safeGet(window.localStorage, FIRST_TOUCH_KEY),
        last_touch: safeGet(window.sessionStorage, LAST_TOUCH_KEY),
    };
}

/**
 * Empuja un evento a dataLayer (GTM/GA4) con la atribución adjunta.
 * @param {string} event  Nombre del evento (ej. 'cta_click', 'generate_lead').
 * @param {object} params Parámetros adicionales del evento.
 */
export function trackEvent(event, params = {}) {
    if (!isBrowser) return;
    window.dataLayer.push({
        event,
        ...params,
        attribution: getAttribution(),
    });
}
