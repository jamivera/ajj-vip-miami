// ─────────────────────────────────────────────────────────────────────────────
//  PROPUESTA COMERCIAL · AJJ VIP MIAMI
//
//  Documento comercial preparado por Atlas para presentar a AJJ VIP Miami.
//  Todo el contenido está escrito para el cliente (tono comercial, claro y
//  directo). La página y los componentes de /components/proposal son genéricos
//  y se alimentan de este archivo.
//
//  Para generar una propuesta para otro cliente:
//    1. Duplica este archivo (p.ej. proposals/otro-cliente.js).
//    2. Cambia cliente, precio, tiempos, secciones y CTAs.
//    3. Registra una ruta nueva en App.jsx apuntando a la nueva config.
//
//  COLOR: el color principal se define en index.css → `.proposal-root`
//  (token `--color-primary`). Cámbialo ahí una sola vez para rebrandear
//  toda la propuesta. Aquí NO se hardcodean colores.
// ─────────────────────────────────────────────────────────────────────────────

export const PROPOSAL = {
    // ── Autoría (Atlas presenta; AJJ es el protagonista) ─────────────────────
    agency: {
        name: 'ATLAS',
        // Contacto de Atlas para el botón "CONVERSAR".
        // REEMPLAZAR por el enlace real (WhatsApp/email). Mientras tanto lleva
        // a la sección de aprobación.
        contactHref: '#inversion',
    },

    // ── Cliente ──────────────────────────────────────────────────────────────
    client: {
        name: 'AJJ VIP Miami',
        shortName: 'AJJ',
        industry: 'Transporte privado',
        location: 'Miami, Florida',
    },

    // ── Metadatos ────────────────────────────────────────────────────────────
    meta: {
        eyebrow: 'PROPUESTA DE REDISEÑO Y DESARROLLO WEB',
        title: 'Propuesta · Rediseño y Desarrollo Web — AJJ VIP Miami',
        description:
            'Propuesta de Atlas para el rediseño y desarrollo de una nueva Landing Page para AJJ VIP Miami: una experiencia más clara, moderna y profesional para presentar los servicios, solicitar cotización y realizar reservas.',
    },

    // ── Números clave del proyecto (fuente única) ────────────────────────────
    project: {
        deliverable: 'Landing Page',
        priceLabel: '$700',
        priceValue: 700,
        currency: 'USD',
        workingDays: '15–20',
        calendarDays: '30',
        revisions: '2',
    },

    // ── Las 3 acciones comerciales de la nueva landing ───────────────────────
    primaryActions: ['BOOK NOW', 'REQUEST A QUOTE', 'WHATSAPP'],

    // ── Navegación (anchors) ─────────────────────────────────────────────────
    nav: [
        { label: 'Propuesta', href: '#oportunidad' },
        { label: 'Landing', href: '#landing' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Inversión', href: '#inversion' },
    ],

    // Texto del botón de aprobación (reutilizado en navbar, inversión y cierre).
    approveCta: { label: 'APROBAR PROPUESTA', href: '#inversion' },

    // ── HERO ─────────────────────────────────────────────────────────────────
    hero: {
        headline: 'Una nueva experiencia digital para AJJ VIP Miami.',
        description:
            'Proponemos rediseñar y desarrollar una nueva Landing Page que presente los servicios de AJJ de manera más clara, moderna y profesional, facilitando que potenciales clientes puedan conocer la empresa, solicitar una cotización y realizar una reserva.',
        primaryCta: { label: 'VER PROPUESTA', href: '#oportunidad' },
        secondaryCta: { label: 'VER INVERSIÓN', href: '#inversion' },
        metrics: [
            { value: '1', label: 'Landing Page' },
            { value: '15–20', label: 'Días laborables' },
            { value: '2', label: 'Rondas de ajustes' },
            { value: '$700', label: 'Inversión' },
        ],
    },

    // ── 01 · LA OPORTUNIDAD ──────────────────────────────────────────────────
    opportunity: {
        index: '01',
        eyebrow: 'La oportunidad',
        title: 'AJJ ya tiene el servicio. Ahora la experiencia digital debe estar a la altura.',
        paragraphs: [
            'A partir de la revisión del sitio actual de AJJ VIP Miami identificamos una oportunidad para mejorar la forma en que los servicios, vehículos, cobertura y opciones de reserva son presentados a potenciales clientes.',
            'La propuesta no consiste únicamente en realizar un cambio visual. Buscamos reorganizar la experiencia para que un visitante pueda comprender rápidamente lo esencial.',
        ],
        pillars: [
            { k: 'QUÉ OFRECE AJJ', v: 'Servicios presentados de manera clara.' },
            { k: 'POR QUÉ ELEGIR AJJ', v: 'Vehículos, atención, cobertura y diferenciales.' },
            { k: 'CÓMO RESERVAR', v: 'Un proceso directo y visible.' },
        ],
    },

    // ── 02 · ANÁLISIS Y REFERENCIAS ──────────────────────────────────────────
    analysis: {
        index: '02',
        eyebrow: 'Análisis y referencias',
        title: 'Partimos de lo que AJJ ya ha construido.',
        intro:
            'Para desarrollar esta propuesta revisamos la presencia digital actual de AJJ VIP Miami, la referencia compartida por el cliente y diferentes experiencias digitales dentro del mercado de transporte privado en Miami.',
        blocks: [
            {
                k: 'AJJ VIP MIAMI',
                v: 'Revisión de la web actual, estructura, contenido, servicios y experiencia de navegación.',
            },
            {
                k: 'REFERENCIA',
                v: 'Análisis de la experiencia presentada por Black SUV Miami, referencia compartida para el proyecto.',
            },
            {
                k: 'MERCADO MIAMI',
                v: 'Revisión de buenas prácticas utilizadas en servicios de Private Chauffeur, Black Car Service, Airport Transportation y Luxury Transportation.',
            },
        ],
        closing:
            'No buscamos replicar otra página. El objetivo es construir una experiencia propia para AJJ tomando como referencia las mejores prácticas identificadas en el mercado.',
    },

    // ── 03 · NUEVA LANDING PAGE (recorrido) ──────────────────────────────────
    architecture: {
        index: '03',
        eyebrow: 'Nueva Landing Page',
        title: 'Una página. Un recorrido claro.',
        intro:
            'La nueva Landing Page organizará la información de AJJ dentro de un recorrido pensado para llevar al usuario desde el descubrimiento del servicio hasta la reserva o solicitud de información.',
        steps: [
            { n: '01', k: 'HERO', v: 'Presentación y propuesta de valor.' },
            { n: '02', k: 'BOOK NOW', v: 'Acceso directo a reserva.' },
            { n: '03', k: 'SERVICES', v: 'Servicios principales.' },
            { n: '04', k: 'FLEET', v: 'Vehículos disponibles.' },
            { n: '05', k: 'WHY AJJ', v: 'Principales diferenciales.' },
            { n: '06', k: 'ROUTES / RATES', v: 'Rutas o tarifas, en caso de que AJJ decida publicarlas.' },
            { n: '07', k: 'REVIEWS', v: 'Experiencias y testimonios.' },
            { n: '08', k: 'SERVICE AREAS', v: 'Principales áreas de cobertura.' },
            { n: '09', k: 'FAQ', v: 'Preguntas frecuentes.' },
            { n: '10', k: 'FINAL CTA', v: 'Reserva, cotización y contacto.' },
        ],
    },

    // ── VISTA CONCEPTUAL (maqueta de alta fidelidad) ─────────────────────────
    //  Representación tentativa de la futura web de AJJ dentro de un browser
    //  frame con scroll interno. Usa información e imágenes REALES de AJJ
    //  (fuente: https://www.ajjvipmiami.com/). NO es el diseño final.
    //
    //  ASSETS: son recursos públicos del propio cliente, reutilizados
    //  temporalmente solo en esta representación conceptual. Si alguno deja de
    //  cargar, el mockup muestra un placeholder elegante (no se rompe). Para
    //  sustituir, cambia las URLs en `assets`.
    concept: {
        eyebrow: 'Vista conceptual',
        headline: 'Así podría verse la nueva experiencia digital de AJJ.',
        description:
            'Hemos desarrollado una primera aproximación visual basada en la información actual de AJJ y en la dirección compartida para el proyecto.',
        tag: 'CONCEPTO VISUAL · REPRESENTACIÓN TENTATIVA',
        disclaimer:
            'Esta representación permite visualizar una posible dirección estética y de experiencia. El diseño, contenido y funcionalidades definitivas serán desarrollados y validados durante el proyecto.',
        cornerLabel: 'CONCEPT PREVIEW',

        // Recursos públicos del cliente (su web actual). Reemplazables.
        //  Solo hay 2 fotografías reales de AJJ (ambas de su Cadillac Escalade
        //  en Miami). Se reutilizan en varias secciones. Para el "boat" no hay
        //  foto real → se usa un slide conceptual claramente etiquetado.
        assets: {
            logo: 'https://primary.jwwb.nl/public/h/q/r/temp-nedlnvnsfezhaxqjkusp/ai-logo-e53859e80ef5-standard.png?enable-io=true&enable=upscale&height=120',
            // Escalade de AJJ + skyline de Miami (moodier).
            ridePhoto:
                'https://primary.jwwb.nl/public/h/q/r/temp-nedlnvnsfezhaxqjkusp/img_0552-high.jpg?enable-io=true&enable=upscale&width=1400',
            // Escalade de AJJ en el waterfront de Miami (Bayside).
            miamiPhoto:
                'https://primary.jwwb.nl/public/h/q/r/temp-nedlnvnsfezhaxqjkusp/img_0540-standard.jpg',
            // Embarcaciones — REFERENCIA CONCEPTUAL (no son barcos propios de AJJ).
            //  3 fotos coherentes: yate/lancha privada de tamaño medio, agua,
            //  categoría consistente. Licencia libre (Pexels). Reemplazables por
            //  fotos reales cuando AJJ las proporcione. Placeholder si alguna falla.
            boats: [
                'https://images.pexels.com/photos/11639337/pexels-photo-11639337.jpeg?auto=compress&cs=tinysrgb&w=1400',
                'https://images.pexels.com/photos/35155740/pexels-photo-35155740.jpeg?auto=compress&cs=tinysrgb&w=1400',
                'https://images.pexels.com/photos/23368213/pexels-photo-23368213.jpeg?auto=compress&cs=tinysrgb&w=1400',
            ],
        },

        // Idiomas de atención de AJJ (confirmado en su web). Selector conceptual.
        languages: [
            { code: 'EN', name: 'English' },
            { code: 'ES', name: 'Español' },
            { code: 'IT', name: 'Italiano' },
        ],

        // Contenido de la landing conceptual (info real y confirmada de AJJ).
        mock: {
            url: 'ajjvipmiami.com',
            brand: 'AJJ VIP MIAMI',
            nav: [
                { label: 'RIDES', to: 'hero' },
                { label: 'EXPERIENCES', to: 'beyond' },
                { label: 'FLEET', to: 'fleet' },
                { label: 'ABOUT', to: 'about' },
                { label: 'CONTACT', to: 'final' },
            ],
            navCta: { label: 'BOOK NOW', to: 'booking' },

            // Hero con 3 imágenes (crossfade + zoom muy ligero). Texto estable.
            hero: {
                eyebrow: 'PRIVATE RIDES · MIAMI EXPERIENCES',
                headline: ['More than a ride.', 'Your Miami, your way.'],
                sub: 'Private transportation and personalized experiences across Miami & South Florida.',
                tagline: 'MIAMI · SOUTH FLORIDA',
                primary: { label: 'BOOK NOW', to: 'booking' },
                secondary: { label: 'EXPLORE SERVICES', to: 'services' },
                // slides: photo = foto real de AJJ; concept = slide conceptual.
                slides: [
                    { label: 'PRIVATE RIDE', photo: 'ride' },
                    { label: 'MIAMI EXPERIENCE', photo: 'miami' },
                    { label: 'BOAT / YACHT', photo: 'boat' },
                ],
            },

            booking: {
                eyebrow: 'PRIVATE RESERVATION',
                headline: 'Where can we take you?',
                fields: ['PICKUP', 'DESTINATION', 'DATE', 'TIME', 'PASSENGERS'],
                cta: 'BOOK YOUR RIDE',
            },

            // Services reorganizado en 3 universos.
            services: {
                eyebrow: 'OUR SERVICES',
                headline: 'More than transportation.',
                groups: [
                    { k: 'MOVE', items: ['Airport Transfers', 'Executive Transportation', 'Hourly Service', 'Events & Weddings'] },
                    { k: 'EXPERIENCE', items: ['Private Tours', 'Key West', 'Miami Experiences', 'Boat Rentals'] },
                    { k: 'PERSONALIZE', items: ['Special Occasions', 'Flowers', 'Balloons', 'Personalized Details'] },
                ],
            },

            // Transición editorial transporte → experiencias.
            beyond: {
                eyebrow: 'BEYOND TRANSPORTATION',
                headline: ['From the road to the water.', 'From transportation to experience.'],
                text: 'AJJ can be part of more than the journey — from private transportation to selected experiences and personalized moments across Miami.',
                pillars: ['PRIVATE RIDES', 'BOAT EXPERIENCES', 'PERSONALIZED MOMENTS'],
            },

            // Boat rentals / yacht experience (confirmado en la web de AJJ).
            //  Precio $850 NO confirmado (la web indica "yacht connection $800+",
            //  no $850) → se usa "REQUEST AVAILABILITY", sin inventar precio.
            boat: {
                eyebrow: 'ON THE WATER',
                headline: 'Miami looks different from the water.',
                text: 'Private boat experiences for your plans, celebrations and time on the water.',
                cta: { label: 'EXPLORE BOAT OPTIONS', to: 'final' },
                // Precio $850 NO confirmado en la web de AJJ (indica "$800+" en
                //  yacht connection, no $850) → se usa REQUEST A QUOTE.
                priceLabel: 'PRIVATE BOAT EXPERIENCE',
                price: 'REQUEST A QUOTE',
                groups: ['PRIVATE GROUPS', 'CELEBRATIONS', 'SPECIAL OCCASIONS'],
            },

            // Personalized moments — presentado como opciones conceptuales.
            personalized: {
                eyebrow: 'PERSONALIZED MOMENTS',
                headline: 'Some rides are part of the moment.',
                text: 'For special occasions, AJJ can help create a more personalized arrival with details prepared around the experience.',
                tags: ['FLOWERS', 'BALLOONS', 'SPECIAL SETUPS', 'PERSONALIZED DETAILS'],
                examples: 'ANNIVERSARIES · SURPRISES · SPECIAL OCCASIONS',
                note: 'PERSONALIZED OPTIONS AVAILABLE UPON REQUEST',
            },

            fleet: {
                eyebrow: 'THE FLEET',
                headline: 'Designed around comfort.',
                title: 'Cadillac Escalade',
                subtitle: 'Premium SUVs',
                attributes: ['PRIVATE', 'COMFORT', 'CONNECTED'],
            },

            airport: {
                eyebrow: 'AIRPORT TRANSFERS',
                headline: 'From arrival to destination.',
                points: [
                    { code: 'MIA', name: 'Miami International Airport' },
                    { code: 'FLL', name: 'Fort Lauderdale–Hollywood International Airport' },
                ],
                cta: 'BOOK AIRPORT TRANSFER',
            },

            about: {
                headline: ['Your schedule.', 'Your destination.', 'Your ride.'],
                attributes: ['24/7 BY RESERVATION', 'ENGLISH', 'ESPAÑOL', 'ITALIANO', 'PERSONAL ATTENTION'],
            },

            coverage: {
                headline: 'Wherever your plans take you.',
                areas: ['MIAMI', 'SOUTH FLORIDA', 'CORAL SPRINGS', 'KEY WEST'],
            },

            final: {
                eyebrow: 'AJJ VIP MIAMI',
                headline: 'Your destination starts with the right ride.',
                primary: { label: 'BOOK NOW', to: 'booking' },
                secondary: { label: 'REQUEST A QUOTE', to: 'booking' },
                footer: 'AJJ VIP Miami · Private Chauffeur & Luxury Transportation · Miami, FL',
            },
        },
    },

    // ── 04 · BOOK NOW ────────────────────────────────────────────────────────
    bookNow: {
        index: '04',
        eyebrow: 'Book Now',
        title: 'Reservar debe ser fácil.',
        headline: 'BOOK NOW',
        paragraphs: [
            'La nueva Landing Page contará con una acción de reserva clara y visible durante los principales momentos de navegación.',
            'Si AJJ actualmente utiliza un sistema de reservas, revisaremos su integración o vinculación dentro de la nueva experiencia.',
            'Si no dispone de uno, implementaremos un formulario estructurado para recibir solicitudes de reserva.',
        ],
        formFields: [
            'Pickup Location',
            'Destination',
            'Date',
            'Time',
            'Passengers',
            'Luggage',
            'Service',
            'Name',
            'Phone / WhatsApp',
            'Email',
        ],
        formCta: 'BOOK NOW',
        note: 'Los sistemas avanzados de reservas con disponibilidad en tiempo real, cálculo automático de tarifas, procesamiento de pagos o administración de reservas no forman parte de esta etapa.',
    },

    // ── 05 · SERVICIOS ───────────────────────────────────────────────────────
    services: {
        index: '05',
        eyebrow: 'Servicios',
        title: 'Una estructura adaptada a los servicios reales de AJJ.',
        intro:
            'La Landing Page contará con una sección específica para presentar de forma clara los principales servicios de AJJ VIP Miami.',
        badge: 'Propuesta tentativa',
        items: [
            'Airport Transfers',
            'Executive Transportation',
            'Private Tours',
            'Events & Weddings',
            'Hourly Transportation',
            'Yacht / Marina Connections',
        ],
        note: 'La estructura es tentativa. Los servicios, nombres, cantidad e información definitiva serán confirmados junto con AJJ antes de desarrollar esta sección.',
    },

    // ── 06 · FLEET ───────────────────────────────────────────────────────────
    fleet: {
        index: '06',
        eyebrow: 'Fleet',
        title: 'Los vehículos también forman parte de la experiencia.',
        intro:
            'La nueva página incorporará una sección visual para presentar los principales vehículos disponibles y facilitar que el cliente comprenda el nivel de servicio que puede esperar.',
        initial: 'Cadillac Escalade / Premium SUVs',
        initialLabel: 'Inicialmente se contempla',
        confirm: [
            'Vehículos disponibles.',
            'Fotografías.',
            'Capacidad de pasajeros.',
            'Capacidad de equipaje.',
            'Características principales.',
        ],
        confirmLabel: 'AJJ deberá confirmar',
        note: 'Solo se publicará información validada por AJJ.',
    },

    // ── 07 · EXPERIENCIA AJJ ─────────────────────────────────────────────────
    experience: {
        index: '07',
        eyebrow: 'Experiencia AJJ',
        title: 'Más que transporte: la experiencia alrededor del servicio.',
        intro:
            'Dependiendo de la información confirmada por AJJ, podremos comunicar elementos que refuerzan la percepción de un servicio profesional y de confianza.',
        attributes: [
            '24/7 Service',
            'Professional Chauffeurs',
            'Private Transportation',
            'Multilingual Service',
            'Comfort',
            'Punctuality',
            'Personalized Attention',
        ],
        note: 'Los atributos definitivos serán validados con AJJ antes de publicación.',
    },

    // ── 08 · RUTAS Y TARIFAS ─────────────────────────────────────────────────
    rates: {
        index: '08',
        eyebrow: 'Rutas y tarifas',
        title: 'Información clara desde el primer contacto.',
        options: [
            {
                tag: 'OPCIÓN A',
                k: 'Rutas + Tarifas',
                v: 'Si AJJ desea publicar precios, podremos destacar rutas frecuentes y valores iniciales.',
                examplesLabel: 'Ejemplos conceptuales',
                examples: ['Miami Airport → Miami Beach', 'Miami Airport → Brickell', 'Miami → Key West'],
            },
            {
                tag: 'OPCIÓN B',
                k: 'Request a Quote',
                v: 'Si AJJ prefiere manejar tarifas de manera personalizada, orientaremos al usuario directamente hacia la solicitud de cotización.',
            },
        ],
        note: 'La decisión definitiva será tomada con AJJ antes del desarrollo.',
    },

    // ── 09 · CONFIANZA ───────────────────────────────────────────────────────
    trust: {
        index: '09',
        eyebrow: 'Confianza',
        title: 'La decisión también se construye con confianza.',
        intro: 'La nueva Landing Page incorporará elementos que ayudan a generar seguridad en el visitante:',
        items: [
            'Reviews / testimonios reales.',
            'Información de cobertura.',
            'Datos de contacto.',
            'FAQ.',
            'Información relevante sobre el servicio.',
        ],
        note: 'Toda la información será proporcionada o validada por AJJ antes de su publicación.',
    },

    // ── 10 · QUÉ INCLUYE EL PROYECTO ─────────────────────────────────────────
    includes: {
        index: '10',
        eyebrow: 'Qué incluye',
        title: 'Todo lo necesario para dejar la nueva Landing Page operativa.',
        cards: [
            { k: 'ESTRATEGIA', v: 'Análisis, referencias y arquitectura de información.' },
            { k: 'DISEÑO', v: 'Diseño visual personalizado y responsive.' },
            { k: 'DESARROLLO', v: 'Construcción de la nueva Landing Page.' },
            { k: 'BOOK NOW', v: 'Integración o formulario de solicitud de reserva.' },
            { k: 'CONTACTO', v: 'Request a Quote, WhatsApp y click-to-call.' },
            { k: 'CONTENIDO', v: 'Organización y adaptación de la información proporcionada por AJJ.' },
            { k: 'SEO', v: 'Configuración técnica inicial.' },
            { k: 'ANALÍTICA', v: 'Instalación y configuración base de Google Analytics 4 y Google Tag Manager.' },
            { k: 'RESPONSIVE', v: 'Adaptación para desktop, tablet y mobile.' },
            { k: 'QA + PUBLICACIÓN', v: 'Pruebas, configuración final y publicación.' },
        ],
        analyticsNote:
            'En analítica se incluye únicamente la instalación y configuración base de Google Analytics 4 y Google Tag Manager. No incluye Meta Pixel, Google Ads, medición de eventos, eventos personalizados ni conversion tracking.',
    },

    // ── 11 · PROCESO DE TRABAJO ──────────────────────────────────────────────
    process: {
        index: '11',
        eyebrow: 'Proceso de trabajo',
        title: 'Un proceso claro de principio a publicación.',
        steps: [
            { n: '01', k: 'INFORMACIÓN', v: 'Recepción de contenidos, servicios, materiales y accesos.' },
            { n: '02', k: 'ESTRUCTURA', v: 'Organización de la información y definición del recorrido.' },
            { n: '03', k: 'DISEÑO', v: 'Desarrollo de la propuesta visual.' },
            { n: '04', k: 'DESARROLLO', v: 'Construcción y adaptación responsive.' },
            { n: '05', k: 'CONFIGURACIÓN + REVISIÓN', v: 'BOOK NOW, formularios, GA4, GTM, SEO técnico inicial, pruebas y ajustes.' },
            { n: '06', k: 'PUBLICACIÓN', v: 'Configuración final y puesta online.' },
        ],
    },

    // ── 12 · TIEMPOS ─────────────────────────────────────────────────────────
    timeline: {
        index: '12',
        eyebrow: 'Tiempos',
        title: 'Un proyecto definido para avanzar de forma ágil.',
        metrics: [
            { value: '15–20', label: 'Días laborables estimados' },
            { value: '30', label: 'Días calendario como plazo máximo' },
        ],
        note: 'El cronograma comenzará una vez recibidos los contenidos, accesos y materiales necesarios. Los retrasos derivados de entrega de información, accesos o aprobaciones podrán modificar la fecha prevista de publicación.',
    },

    // ── 13 · QUÉ NECESITAMOS DE AJJ ──────────────────────────────────────────
    requirements: {
        index: '13',
        eyebrow: 'Qué necesitamos de AJJ',
        title: 'Para comenzar, necesitamos construir sobre información real.',
        items: [
            'Logo.',
            'Fotografías y videos disponibles.',
            'Servicios definitivos.',
            'Información de los servicios.',
            'Vehículos y características.',
            'Áreas de cobertura.',
            'Tarifas, si serán públicas.',
            'Teléfono.',
            'WhatsApp.',
            'Email.',
            'Redes sociales.',
            'Reviews reales.',
            'Información necesaria para reservas.',
            'Políticas relevantes.',
            'Acceso al dominio.',
            'Acceso al hosting / plataforma.',
            'Accesos existentes de GA4 / GTM, si corresponden.',
        ],
    },

    // ── 14 · DOMINIO E INFRAESTRUCTURA ───────────────────────────────────────
    infrastructure: {
        index: '14',
        eyebrow: 'Dominio e infraestructura',
        title: 'Primero revisamos la infraestructura actual.',
        review: ['Dominio', 'Hosting', 'Plataforma', 'SSL', 'Accesos'],
        paragraphs: [
            'Si la infraestructura actual es compatible, se utilizará.',
            'Si fuera necesaria una nueva plataforma, hosting o licencia, se informará previamente a AJJ para su aprobación.',
        ],
        note: 'Hosting, dominio, licencias y servicios externos no están incluidos dentro de la inversión de desarrollo.',
    },

    // ── 15 · INVERSIÓN ───────────────────────────────────────────────────────
    investment: {
        index: '15',
        eyebrow: 'Inversión',
        title: 'Rediseño y Desarrollo Web',
        project: 'AJJ VIP Miami — Landing Page',
        price: '$700 USD',
        payments: [
            { pct: '50%', amount: '$350', when: 'Inicio del proyecto' },
            { pct: '50%', amount: '$350', when: 'Previo a publicación' },
        ],
        highlights: ['15–20 días laborables', '2 rondas de ajustes', 'Máximo 30 días calendario'],
    },

    // ── 16 · REVISIONES ──────────────────────────────────────────────────────
    revisions: {
        index: '16',
        eyebrow: 'Revisiones',
        title: 'Dos momentos claros para revisar y ajustar.',
        rounds: [
            { tag: 'RONDA 01', v: 'Revisión después de la presentación inicial.' },
            { tag: 'RONDA 02', v: 'Ajustes finales antes de publicación.' },
        ],
        paragraphs: [
            'Las observaciones deberán presentarse de forma consolidada para mantener el cronograma.',
            'Cambios estructurales, nuevas funcionalidades o solicitudes fuera del alcance podrán ser evaluados y cotizados por separado.',
        ],
    },

    // ── 17 · QUÉ NO ESTÁ INCLUIDO ────────────────────────────────────────────
    excluded: {
        index: '17',
        eyebrow: 'Qué no está incluido',
        title: 'Para mantener el alcance claro, esta etapa no incluye:',
        items: [
            'Hosting.',
            'Dominio.',
            'Licencias.',
            'Plataformas externas.',
            'Motor avanzado de reservas.',
            'Disponibilidad en tiempo real.',
            'Cálculo automático de tarifas.',
            'Pagos online.',
            'Dashboard administrativo personalizado.',
            'CRM.',
            'Aplicación móvil.',
            'Producción profesional de fotografía / video.',
            'Rediseño de branding / logotipo.',
            'Páginas adicionales.',
            'SEO mensual.',
            'Campañas publicitarias.',
            'Configuración de eventos personalizados.',
        ],
        note: 'Cualquier requerimiento adicional será informado y cotizado antes de su implementación.',
    },

    // ── 18 · ENTREGA FINAL ───────────────────────────────────────────────────
    delivery: {
        index: '18',
        eyebrow: 'Entrega final',
        title: 'Una Landing Page publicada y operativa.',
        intro: 'Al finalizar el proyecto verificaremos:',
        checklist: [
            'Landing publicada.',
            'Dominio conectado.',
            'SSL operativo.',
            'Desktop revisado.',
            'Tablet revisado.',
            'Mobile revisado.',
            'BOOK NOW funcionando.',
            'Formulario de cotización funcionando.',
            'WhatsApp funcionando.',
            'Click-to-call funcionando.',
            'Formularios probados.',
            'Google Analytics 4 instalado.',
            'Google Tag Manager instalado.',
            'SEO técnico inicial configurado.',
            'Imágenes principales optimizadas.',
            'Navegación y enlaces revisados.',
            'QA final realizado.',
        ],
    },

    // ── 19 · POSIBILIDAD DE CRECIMIENTO ──────────────────────────────────────
    growth: {
        index: '19',
        eyebrow: 'Posibilidad de crecimiento',
        title: 'Una base preparada para futuras etapas.',
        phases: [
            { k: 'BOOKING AVANZADO', v: 'Reservas automáticas, disponibilidad, tarifas y pagos.' },
            { k: 'SEO', v: 'Páginas específicas de servicios y ubicaciones.' },
            { k: 'EXPANSIÓN WEB', v: 'Nuevas páginas y secciones.' },
            { k: 'INTEGRACIONES', v: 'CRM y automatizaciones.' },
        ],
        note: 'Estas posibilidades corresponden a futuras etapas y no forman parte de la inversión actual.',
    },

    // ── 20 · CIERRE ──────────────────────────────────────────────────────────
    closing: {
        headline: 'Una nueva experiencia digital para AJJ VIP Miami.',
        text: 'El objetivo de esta propuesta es construir una presencia digital más clara, moderna y funcional, manteniendo la identidad de AJJ y facilitando que potenciales clientes puedan conocer sus servicios, solicitar información y realizar una reserva.',
        metrics: [
            { value: '$700', label: 'USD' },
            { value: '15–20', label: 'Días laborables' },
            { value: '2', label: 'Rondas de ajustes' },
        ],
        secondaryCta: { label: 'CONVERSAR' }, // usa agency.contactHref
    },
};

export default PROPOSAL;
