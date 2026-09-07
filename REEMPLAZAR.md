# 🔧 Datos de ejemplo a reemplazar

Todo lo de abajo son **placeholders**. Cámbialos por los reales y la web queda lista.
La mayoría vive en **un solo archivo**: `apps/web/src/config/site.js`.

---

## 1. `apps/web/src/config/site.js`  ← edita casi todo aquí
| Dato | Valor de ejemplo | Reemplaza por |
|---|---|---|
| Dominio | `https://endyxo.com` | Tu dominio final |
| Email | `hola@endyxo.com` | Tu correo real |
| ~~Teléfono~~ | `+593 99 833 1304` | ✅ real (0998331304) |
| ~~WhatsApp~~ | `wa.me/593998331304` | ✅ real |
| Instagram | `instagram.com/endyxo` | URL real |
| Facebook | `facebook.com/endyxo` | URL real |
| LinkedIn | `linkedin.com/company/endyxo` | URL real |
| TikTok | `tiktok.com/@endyxo` | URL real |
| X / Twitter | `x.com/endyxo` | URL real |
| GA4 ID | `G-XXXXXXXXXX` | Tu Measurement ID (se enlaza vía GTM) |
| Ubicaciones | `Quito, Ecuador` | Mercados donde operan (SEO local) |

> Si aún no usas alguna red, borra su URL (déjala vacía) y **no se mostrará**.

---

## 2. `apps/web/index.html`  ← SEO técnico + GTM
| Dato | Valor de ejemplo | Dónde |
|---|---|---|
| **ID de GTM** | `GTM-XXXXXXX` (aparece **2 veces**: `<head>` y `<noscript>`) | Tu contenedor real de Google Tag Manager |
| Dominio | `https://endyxo.com/` (canonical, OG, JSON-LD) | Tu dominio final |
| Imagen social | `https://endyxo.com/og-image.jpg` | Imagen real 1200×630 (súbela a `public/`) |
| `sameAs` (JSON-LD) | redes de ejemplo | Mismas URLs reales que en `site.js` |
| Title / Description | ya optimizados y editables | Ajusta si cambia el posicionamiento |

> ⚠️ El ID de GTM del `index.html` es el que **carga de verdad** el contenedor.
> Mantén el mismo valor en `site.js` solo como referencia.

---

## 3. `apps/web/public/`  ← archivos estáticos
| Archivo | Qué es | Acción |
|---|---|---|
| `favicon.svg` | Favicon placeholder (índigo, letra “E”) | Reemplaza por el definitivo |
| `robots.txt` | Dominio del sitemap = `endyxo.com` | Cambia si el dominio es otro |
| `sitemap.xml` | Dominio = `endyxo.com` | Cambia si el dominio es otro |
| `og-image.jpg` | **No existe aún** | Añade la imagen social 1200×630 |

---

## 4. Analítica — cómo queda montado
- **GTM** ya está integrado (solo falta tu ID). GA4 se conecta **dentro de GTM**.
- Se capturan automáticamente y se envían a `dataLayer`:
  - `attribution_ready` (UTM first-touch + last-touch, al cargar).
  - `cta_click` (botones principales, con texto y destino).
  - `social_click` / `contact_click` (redes, email, teléfono, WhatsApp).
- **UTM dinámicos**: detecta `utm_source/medium/campaign/content/term` + click-ids
  (`gclid`, `fbclid`, `ttclid`…) de la URL, sin valores fijos por campaña.
  Se conservan en la sesión y pueden adjuntarse a formularios/conversiones futuras
  con `getAttribution()` (`apps/web/src/lib/analytics.js`).

Para medir un formulario/lead en el futuro:
```js
import { trackEvent } from '@/lib/analytics';
trackEvent('generate_lead', { form: 'contacto' }); // incluye atribución automáticamente
```

---

## 5. Build con prerender (SEO/GEO)
`npm run build` hace 3 pasos automáticamente:
1. `vite build` → SPA de cliente.
2. `vite build --ssr` → bundle de servidor (`dist/.ssr/`).
3. `tools/prerender.mjs` → renderiza la Home a HTML y lo **inyecta en
   `dist/apps/web/index.html`**.

Resultado: el HTML servido ya contiene todo el contenido (H1, H2, narrativa,
AgencyOS) → buscadores y motores de IA lo leen **sin ejecutar JavaScript**.
En el navegador, React **hidrata** ese HTML (sin parpadeo, sin re-render).

> Es resiliente: si el prerender fallara, el build de cliente sigue siendo una
> SPA válida (no rompe el deploy). El aviso `MODULE_TYPELESS_PACKAGE_JSON`
> durante el build es cosmético.
