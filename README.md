# Atlas — Web & Propuestas

Sitio web construido por **Atlas**. Incluye la landing principal y las
propuestas comerciales digitales, entre ellas la de **AJJ VIP Miami**.

- **Propuesta AJJ VIP Miami:** `/propuestas/ajj-vip-miami`

## Stack

- **React 18** + **Vite 7**
- **React Router 7**
- **Tailwind CSS v3** + componentes shadcn/ui (Radix)
- **Framer Motion** (animaciones)
- Prerender/SSG de la Home para SEO (hidratación en cliente)
- Monorepo con **npm workspaces** (app en `apps/web`)

## Estructura

```
.
├── apps/
│   └── web/               # Aplicación (Vite)
│       ├── src/
│       │   ├── pages/                     # Páginas y rutas
│       │   │   └── proposals/             # Propuestas comerciales
│       │   ├── components/proposal/       # Componentes reutilizables de propuestas
│       │   ├── config/proposals/          # Datos de cada propuesta (editable)
│       │   ├── index.css                  # Tokens de diseño (color editable)
│       │   └── App.jsx                    # Rutas
│       ├── public/                        # Estáticos (favicon, robots, sitemap)
│       └── vite.config.js
├── package.json           # Workspaces + scripts
├── vercel.json            # Config de despliegue (Vercel)
└── README.md
```

## Requisitos

- Node **22** (ver `.nvmrc`)

## Scripts

Desde la raíz del repositorio:

```bash
npm install       # instala dependencias del workspace
npm run dev       # entorno de desarrollo (http://localhost:3000)
npm run build     # build de producción → dist/apps/web
npm run start     # sirve el build de producción localmente
npm run lint      # lint
```

## Despliegue (Vercel)

La configuración vive en [`vercel.json`](./vercel.json):

| Ajuste            | Valor              |
| ----------------- | ------------------ |
| Framework         | Other              |
| Install Command   | `npm install`      |
| Build Command     | `npm run build`    |
| Output Directory  | `dist/apps/web`    |
| SPA fallback      | `/(.*) → /index.html` |

No requiere variables de entorno para funcionar. (Opcionalmente se pueden
configurar `TEMPLATE_BANNER_SCRIPT_URL` / `TEMPLATE_REDIRECT_URL` y el ID real
de Google Tag Manager; ver `REEMPLAZAR.md`.)
