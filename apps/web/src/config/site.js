// ─────────────────────────────────────────────────────────────────────────────
//  CONFIGURACIÓN CENTRAL DEL SITIO  ·  ENDYXO
//
//  ⚠️  TODOS los valores marcados con  «REEMPLAZAR»  son DATOS DE EJEMPLO.
//  Cámbialos por los reales aquí y se actualizarán en toda la web.
//  (El ID de GTM también está en /index.html — ver REEMPLAZAR.md)
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
    name: 'ENDYXO',
    legalName: 'ENDYXO',
    // Dominio final del sitio (sin barra final).
    domain: 'https://endyxo.com', // REEMPLAZAR si el dominio definitivo es otro

    // ── CONTACTO ────────────────────────────────────────────────────────────
    contact: {
        email: 'hola@endyxo.com', // REEMPLAZAR
        // Teléfono real (Ecuador 0998331304 → formato internacional).
        phone: '+593 99 833 1304',
        phoneHref: 'tel:+593998331304',
        // WhatsApp: número con código de país, sin «+» ni espacios.
        whatsapp: 'https://wa.me/593998331304',
    },

    // ── REDES SOCIALES ──────────────────────────────────────────────────────
    // Deja en null/'' cualquier red que aún no uses y no se mostrará.
    social: {
        instagram: 'https://instagram.com/endyxo', // REEMPLAZAR
        facebook: 'https://facebook.com/endyxo', // REEMPLAZAR
        linkedin: 'https://linkedin.com/company/endyxo', // REEMPLAZAR
        tiktok: 'https://tiktok.com/@endyxo', // REEMPLAZAR
        x: 'https://x.com/endyxo', // REEMPLAZAR
    },

    // ── ANALÍTICA ───────────────────────────────────────────────────────────
    // GA4 se configura DENTRO de GTM (recomendado). El ID de GTM que carga
    // realmente el contenedor está en /index.html.
    analytics: {
        gtmId: 'GTM-XXXXXXX', // REEMPLAZAR (debe coincidir con /index.html)
        ga4Id: 'G-XXXXXXXXXX', // REEMPLAZAR (referencia; se enlaza vía GTM)
    },

    // ── SEO LOCAL ───────────────────────────────────────────────────────────
    // Mercados/ubicaciones donde operan. Se usan en el schema y microcopy local.
    locations: [
        { city: 'Quito', region: 'Pichincha', country: 'Ecuador', countryCode: 'EC' }, // REEMPLAZAR/AÑADIR
    ],
};

// Lista de redes con etiqueta legible (para render en footer, etc.).
export const SOCIAL_LINKS = [
    { key: 'instagram', label: 'Instagram', url: SITE.social.instagram },
    { key: 'facebook', label: 'Facebook', url: SITE.social.facebook },
    { key: 'linkedin', label: 'LinkedIn', url: SITE.social.linkedin },
    { key: 'tiktok', label: 'TikTok', url: SITE.social.tiktok },
    { key: 'x', label: 'X', url: SITE.social.x },
].filter((s) => s.url);

export default SITE;
