export type L = { es: string; en: string }

export type SkillGroup = { category: L; skills: string[] }

export type TimelineItem = {
  company: string
  role: L
  period: L
  description: L[]
}

export type Project = {
  name: string
  stack: string[]
  description: L
  challenge: L
  solution: L
  github?: string
  demo?: string
}

export type EducationItem = {
  institution: string
  degree: L
  period: L
}

export type CourseItem = {
  name: L
  provider: string
  year?: string
}

export type ContactItem = {
  icon: string
  label: L
  value: string
  href?: string
}

export type BookContent =
  | { type: 'about'; text: L[]; highlights: L[] }
  | { type: 'stack'; groups: SkillGroup[] }
  | { type: 'experience'; items: TimelineItem[] }
  | { type: 'projects'; items: Project[] }
  | { type: 'experimental'; items: Project[] }
  | { type: 'education'; items: EducationItem[] }
  | { type: 'courses'; items: CourseItem[] }
  | { type: 'contact'; items: ContactItem[] }

export type Book = {
  id: string
  spine: {
    titleKey: string       // i18n key
    subtitleKey: string    // i18n key
    color: string
    highlightColor: string
    thickness: number      // px width of the spine
    roman: string          // Roman numeral for visual decoration
  }
  content: BookContent
}

export const BOOKS: Book[] = [
  {
    id: 'about',
    spine: {
      titleKey: 'books.about.spineTitle',
      subtitleKey: 'books.about.spineSubtitle',
      color: '#6B2D3E',
      highlightColor: '#9B4D5E',
      thickness: 52,
      roman: 'I',
    },
    content: {
      type: 'about',
      text: [
        { es: 'Desarrollador Fullstack apasionado por construir productos que realmente marquen la diferencia. Me muevo con comodidad entre frontend y backend, creando experiencias fluidas desde la base de datos hasta el navegador.', en: 'Fullstack developer passionate about building products that truly make a difference. I thrive at the intersection of frontend and backend, crafting seamless experiences from database to browser.' },
        { es: 'Con una carrera en Ingeniería Civil en Informática de la Universidad Técnica Federico Santa María, he construido y lanzado aplicaciones móviles y web de nivel productivo en múltiples industrias.', en: 'With a degree in Civil Informatics Engineering from Universidad Técnica Federico Santa María, I have built and shipped production-grade mobile and web applications across multiple industries.' },
        { es: 'Me encanta aprender, adaptarme rápidamente a nuevas tecnologías y colaborar estrechamente con mi equipo para entregar soluciones limpias e impactantes.', en: 'I love learning, adapting quickly to new technologies, and collaborating closely with teammates to deliver clean, impactful solutions.' },
      ],
      highlights: [
        { es: 'Desarrollador Fullstack', en: 'Fullstack Developer' },
        { es: 'Ingeniero Civil Informático', en: 'Software Engineer' },
        { es: 'Móvil & Web', en: 'Mobile & Web' },
        { es: 'AWS & Cloud', en: 'AWS & Cloud' },
        { es: 'Trabajo en equipo', en: 'Team Player' },
      ],
    },
  },
  {
    id: 'stack',
    spine: {
      titleKey: 'books.stack.spineTitle',
      subtitleKey: 'books.stack.spineSubtitle',
      color: '#1B435B',
      highlightColor: '#2D6A8A',
      thickness: 60,
      roman: 'II',
    },
    content: {
      type: 'stack',
      groups: [
        {
          category: { es: 'Frontend', en: 'Frontend' },
          skills: [
            'React',
            'Next.js',
            'Vue.js',
            'React Native',
            'Expo',
            'Flutter',
            'Angular',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'Vite',
            'Pinia',
            'Vuex',
            'GetX',
            'Framer Motion',
            'HTML5',
            'CSS3',
          ],
        },
        {
          category: { es: 'Backend', en: 'Backend' },
          skills: [
            'Node.js',
            'Fastify',
            'Express',
            'Ruby on Rails',
            'GraphQL',
            'Apollo Server',
            'Sidekiq',
            'WebSockets',
            'JWT',
            'Go / Golang',
            'PHP',
            'Java',
            'C#',
            'Python',
            'C/C++',
          ],
        },
        {
          category: { es: 'Bases de datos', en: 'Databases' },
          skills: [
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'SQLite',
            'Redis',
            'DynamoDB',
            'Qdrant',
            'DuckDB',
            'Hive',
          ],
        },
        {
          category: { es: 'IA y automatización', en: 'AI & Automation' },
          skills: [
            'OpenAI',
            'Perplexity',
            'Embeddings',
            'Vector search',
            'Playwright',
            'PDF / Excel parsing',
          ],
        },
        {
          category: { es: 'Nube y herramientas', en: 'Cloud & Tools' },
          skills: [
            'AWS',
            'Amazon Amplify',
            'Cognito',
            'AppSync',
            'S3',
            'Lambda',
            'SES',
            'Docker',
            'Vercel',
            'Heroku',
            'GitHub Actions',
            'CircleCI',
            'Mercado Pago',
            'Transbank',
            'SendGrid',
            'Unity',
            'SAP',
            'Git',
            'Excel',
          ],
        },
      ],
    },
  },
  {
    id: 'experience',
    spine: {
      titleKey: 'books.experience.spineTitle',
      subtitleKey: 'books.experience.spineSubtitle',
      color: '#2D4A1E',
      highlightColor: '#4A7530',
      thickness: 48,
      roman: 'III',
    },
    content: {
      type: 'experience',
      items: [
        {
          company: 'Blackend',
          role: { es: 'Desarrollador Fullstack', en: 'Fullstack Developer' },
          period: { es: 'Febrero 2025 – Presente', en: 'February 2025 – Present' },
          description: [
            { es: 'Desarrollo y mantención de múltiples aplicaciones productivas para móvil y web.', en: 'Development and maintenance of multiple production applications for mobile and web.' },
            { es: 'Lideré el ciclo completo del producto, desde el diseño de arquitectura hasta el despliegue en iOS, Android y web.', en: 'Led full product lifecycle from architecture design to deployment across iOS, Android and web.' },
            { es: 'Conversación directa con clientes para entender sus necesidades y desarrollar soluciones alineadas a lo que buscan.', en: 'Direct client conversations to understand their needs and build solutions aligned with what they want.' },
            { es: 'Soporte de aplicaciones: atención a usuarios y resolución de problemas en el día a día.', en: 'Application support: assisting users and resolving day-to-day issues.' },
          ],
        },
        {
          company: 'IBM S.A',
          role: { es: 'Consultor IT', en: 'IT Consultant' },
          period: { es: 'Enero – Julio 2023', en: 'January – July 2023' },
          description: [
            { es: 'Migración de versión SAP para el proyecto Carozzi.', en: 'SAP version migration for the Carozzi project.' },
            { es: 'Verificación de consistencia de versiones, carga de perfiles y créditos, actualización de roles y configuración de condiciones de contrato.', en: 'Version consistency verification, profile and credit loading, role updates and contract conditions setup.' },
          ],
        },
        {
          company: 'Práctica Industrial MELÓN S.A',
          role: { es: 'Desarrollador en Práctica', en: 'Intern Developer' },
          period: { es: 'Enero – Marzo 2021', en: 'January – March 2021' },
          description: [
            { es: 'Revisión y diagramación de procesos de negocio.', en: 'Business process review and diagramming.' },
            { es: 'Elaboración de documentos técnicos de entrega.', en: 'Preparation of technical delivery documents.' },
          ],
        },
      ],
    },
  },
  {
    id: 'projects',
    spine: {
      titleKey: 'books.projects.spineTitle',
      subtitleKey: 'books.projects.spineSubtitle',
      color: '#5C3A1E',
      highlightColor: '#8A5A30',
      thickness: 72,
      roman: 'IV',
    },
    content: {
      type: 'projects',
      items: [
        {
          name: 'LicitaWin',
          stack: ['Vue 3', 'TypeScript', 'Fastify', 'Pinia', 'Tailwind', 'OpenAI', 'Perplexity'],
          description: { es: 'SaaS para proveedores del Estado chileno que cotizan Compras Ágiles en Mercado Público: búsqueda de oportunidades, cotizador con precios de retail asistido por IA, gestión de equipo y envío a mercadopublico.cl.', en: 'SaaS for Chilean public-procurement suppliers quoting Agile Purchases on Mercado Público: opportunity search, AI-assisted retail price quoting, team management and submission to mercadopublico.cl.' },
          challenge: { es: 'Orquestar búsqueda de precios en retail chileno, sincronización con Mercado Público y flujos multi-rol (vendedores, admins) con alto volumen de oportunidades.', en: 'Orchestrating Chilean retail price search, Mercado Público sync and multi-role flows (sellers, admins) under high opportunity volume.' },
          solution: { es: 'SPA Vue 3 + API Fastify con proxy de IA, WebSockets para gestión en tiempo real, panel de oportunidades y extensión de Chrome para el envío autenticado a Mercado Público.', en: 'Vue 3 SPA + Fastify API with AI proxy, WebSockets for real-time management, opportunity panel and a Chrome extension for authenticated Mercado Público submission.' },
          demo: 'https://licitawin.blackend.dev',
        },
        {
          name: 'Alisur Formulator',
          stack: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Sidekiq', 'ActiveAdmin'],
          description: { es: 'Plataforma multi-tenant de formulación nutricional de raciones para ganado lechero (modelo CNCPS), con pedidos, pagos, inventario y calendario de producción para Alisur, Colún y Coagra.', en: 'Multi-tenant nutritional ration formulation platform for dairy cattle (CNCPS model), with orders, payments, inventory and production calendar for Alisur, Colún and Coagra.' },
          challenge: { es: 'Calcular fórmulas nutricionales válidas bajo restricciones por tenant, ingredientes y límites de granos, integrando comercio (pedidos/pagos) en la misma app.', en: 'Computing valid nutritional formulas under per-tenant, ingredient and grain-limit constraints, while integrating commerce (orders/payments) in the same app.' },
          solution: { es: 'Formulador interactivo Vue sobre Rails 6.1, ejecución CNCPS asíncrona, contexto multi-empresa y flujos de pedido/pago (PuntoPagos/Transbank) con ActiveAdmin.', en: 'Interactive Vue formulator on Rails 6.1, async CNCPS execution, multi-company context and order/payment flows (PuntoPagos/Transbank) with ActiveAdmin.' },
        },
        {
          name: 'Checkview',
          stack: ['Flutter', 'Amplify Gen 2', 'AWS', 'Hive', 'GetX'],
          description: { es: 'App móvil de inspección de calidad agrícola (intake, visit, finish, destination) para inspectores y empresas: reportes con defectos/mediciones, gestión de especies, clientes, exportadores y growers, más envío de reportes por correo.', en: 'Mobile agricultural quality-inspection app (intake, visit, finish, destination) for inspectors and companies: defect/measurement reports, species/client/exporter/grower management, and report email delivery.' },
          challenge: { es: 'Operar en packing y terreno con conectividad intermitente, sin perder reportes, fotos ni catálogos, y sincronizar sin conflictos al volver online.', en: 'Operating in packing houses and the field with intermittent connectivity without losing reports, photos or catalogs, then syncing without conflicts when back online.' },
          solution: { es: 'Flutter offline-first con Hive + Amplify Gen 2 (Cognito, AppSync, S3, Lambda): repositorios GetX, sync diferido y reportes HTML/PDF enviados vía backend.', en: 'Offline-first Flutter with Hive + Amplify Gen 2 (Cognito, AppSync, S3, Lambda): GetX repositories, deferred sync and HTML/PDF reports sent through the backend.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Academia R',
          stack: ['React Native', 'Moodle API', 'TypeScript'],
          description: { es: 'App de e-learning para colaboradores de Ripley: catálogo de cursos Moodle, progreso, contenidos y evaluaciones desde el móvil, sin depender del campus web.', en: 'E-learning app for Ripley employees: Moodle course catalog, progress, content and assessments on mobile, without relying on the web campus.' },
          challenge: { es: 'La API REST de Moodle es inconsistente (auth por token, payloads heterogéneos) y debía sentirse nativa en iOS/Android con sesión estable.', en: 'Moodle’s REST API is inconsistent (token auth, heterogeneous payloads) and still needed to feel native on iOS/Android with a stable session.' },
          solution: { es: 'Capa de abstracción tipada que normaliza endpoints Moodle a un estado de app limpio, con refresh de token y pantallas orientadas a progreso del curso.', en: 'Typed abstraction layer normalizing Moodle endpoints into clean app state, with token refresh and course-progress-oriented screens.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Hereneo',
          stack: ['Vue.js', 'JavaScript', 'Vuex', 'Fastify', 'PostgreSQL'],
          description: { es: 'Marketplace de productos infantiles que conecta padres con vendedores verificados: catálogo, búsqueda, fichas de producto y flujo de compra enfocado en confianza y usabilidad.', en: 'Infant-products marketplace connecting parents with verified sellers: catalog, search, product detail and checkout focused on trust and usability.' },
          challenge: { es: 'Catálogo amplio con filtros cruzados (edad, categoría, precio, vendedor) sin degradar la experiencia en dispositivos modestos.', en: 'A wide catalog with cross filters (age, category, price, seller) without degrading UX on modest devices.' },
          solution: { es: 'Frontend Vue con filtros computados, debounce y lazy loading; API Fastify + PostgreSQL para catálogo, vendedores y carrito/sesión sin recargas innecesarias.', en: 'Vue frontend with computed filters, debounce and lazy loading; Fastify API + PostgreSQL for catalog, sellers and cart/session without unnecessary reloads.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Caliper',
          stack: ['React Native', 'SQLite'],
          description: { es: 'App de campo para inventario forestal: captura de mediciones y estructuras de árboles, organización por parcelas/equipos y compartición de datos entre brigadas en terreno.', en: 'Field app for forest inventory: capture measurements and tree structures, organize by plots/teams and share data across ground crews.' },
          challenge: { es: 'Modelar jerarquías forestales complejas y seguir trabajando sin señal, con sync confiable al reconectar varios dispositivos.', en: 'Modeling complex forest hierarchies and keep working offline, with reliable sync when several devices reconnect.' },
          solution: { es: 'Esquema local SQLite con cola de cambios pendientes y sincronización al recuperar red, más UI móvil pensada para uso con guantes y poca batería.', en: 'Local SQLite schema with a pending-change queue and sync-on-reconnect, plus a mobile UI suited for gloves and low battery.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Chiquitina',
          stack: ['Ruby on Rails', 'PostgreSQL', 'ActionMailbox'],
          description: { es: 'Plataforma que convierte solicitudes llegadas por correo en tickets/workflows trazables: parseo, enrutamiento, estados y seguimiento para reducir el procesamiento manual.', en: 'Platform that turns inbound email requests into traceable tickets/workflows: parsing, routing, statuses and tracking to cut manual processing.' },
          challenge: { es: 'Correos con formatos irregulares, adjuntos y múltiples remitentes debían entrar a flujos estructurados sin perder contexto ni historial.', en: 'Irregular email formats, attachments and multiple senders had to enter structured flows without losing context or history.' },
          solution: { es: 'Pipeline ActionMailbox con reglas de enrutamiento, estados versionados en PostgreSQL y panel operativo para revisar/avanzar cada solicitud.', en: 'ActionMailbox pipeline with routing rules, versioned statuses in PostgreSQL and an ops panel to review/advance each request.' },
          github: 'https://github.com/darkyuyo',
        },
      ],
    },
  },
  {
    id: 'experimental',
    spine: {
      titleKey: 'books.experimental.spineTitle',
      subtitleKey: 'books.experimental.spineSubtitle',
      color: '#4A2C5E',
      highlightColor: '#7A4A8E',
      thickness: 44,
      roman: 'V',
    },
    content: {
      type: 'experimental',
      items: [
        {
          name: 'D&D Compendium',
          stack: ['Next.js', 'TypeScript', 'Tailwind', 'Zod', 'next-intl'],
          description: { es: 'Compendio privado de referencia para la mesa de D&D (reglas 2024): monstruos, conjuros, clases, especies, equipo, hojas de personaje y mapas, con interfaz bilingüe ES/EN a partir de los PDFs del Manual del Jugador y el Manual de Monstruos.', en: 'Private D&D 2024 table reference: monsters, spells, classes, species, gear, character sheets and maps, with a bilingual ES/EN UI built from Player’s Handbook and Monster Manual PDFs.' },
          challenge: { es: 'Pasar PDFs irregulares (texto + OCR) a datos tipados bilingües útiles en mesa, sin perder estructura ni calidad de búsqueda/filtrado.', en: 'Turning messy PDFs (text + OCR) into typed bilingual data useful at the table without losing structure or search/filter quality.' },
          solution: { es: 'Pipeline de extracción/parseo con validación Zod, app Next.js con i18n, fichas enlazadas al compendio y herramientas de mesa (personajes y mapas).', en: 'Extraction/parse pipeline with Zod validation, Next.js app with i18n, sheets linked to the compendium, and table tools (characters and maps).' },
          github: 'https://github.com/darkyuyo/dnd-compendium',
        },
        {
          name: 'Arsis — VR',
          stack: ['Unity', 'C#', 'XR Toolkit'],
          description: { es: 'Experiencia VR para la Feria de Software: escenarios inmersivos donde el usuario practica habilidades sociales y profesionales (entrevista, networking, presentación) en un entorno controlado.', en: 'VR experience for the Software Fair: immersive scenarios where users practice social and professional skills (interview, networking, presentation) in a controlled environment.' },
          challenge: { es: 'Interacciones mano/controlador fluidas y presencia creíble sin caer bajo 72/90 FPS en hardware de feria.', en: 'Fluid hand/controller interactions and believable presence without dropping under 72/90 FPS on fair hardware.' },
          solution: { es: 'Grafo de escena y LODs optimizados, variantes de shaders livianas e interacciones sobre XR Toolkit con feedback háptico/visual acotado.', en: 'Optimized scene graph and LODs, lightweight shader variants and XR Toolkit interactions with restrained haptic/visual feedback.' },
        },
        {
          name: 'Videojuego — Memoria USM',
          stack: ['Unity', 'C#'],
          description: { es: 'Prototipo jugable de titulación alineado a criterios de fondo cultural: mecánicas, narrativa y producción mínima para demostrar el concepto en jurado y demo pública.', en: 'Playable graduation prototype aligned with cultural-fund criteria: mechanics, narrative and minimal production to prove the concept in jury and public demo.' },
          challenge: { es: 'Alcance académico vs. calidad de demo: evitar feature creep y aún así entregar un loop completo y legible.', en: 'Academic scope vs. demo quality: avoid feature creep while still shipping a complete, readable game loop.' },
          solution: { es: 'Vertical slice ágil (un nivel/loop núcleo primero), priorización de feel y claridad de controles antes de contenido secundario.', en: 'Agile vertical slice (one core level/loop first), prioritizing feel and control clarity before secondary content.' },
        },
      ],
    },
  },
  {
    id: 'education',
    spine: {
      titleKey: 'books.education.spineTitle',
      subtitleKey: 'books.education.spineSubtitle',
      color: '#1E3A4A',
      highlightColor: '#2D5A6A',
      thickness: 44,
      roman: 'VI',
    },
    content: {
      type: 'education',
      items: [
        {
          institution: 'Universidad Técnica Federico Santa María',
          degree: { es: 'Ingeniería Civil en Informática', en: 'Computer Engineering' },
          period: { es: 'Marzo 2018 – Septiembre 2024', en: 'March 2018 – September 2024' },
        },
      ],
    },
  },
  {
    id: 'courses',
    spine: {
      titleKey: 'books.courses.spineTitle',
      subtitleKey: 'books.courses.spineSubtitle',
      color: '#3D3D1E',
      highlightColor: '#6A6A35',
      thickness: 38,
      roman: 'VII',
    },
    content: {
      type: 'courses',
      items: [
        { name: { es: 'Conceptos básicos de React', en: 'Introduction to React' }, provider: 'Meta', year: '2023' },
        { name: { es: 'React Avanzado', en: 'Advanced React' }, provider: 'Meta', year: '2023' },
      ],
    },
  },
  {
    id: 'contact',
    spine: {
      titleKey: 'books.contact.spineTitle',
      subtitleKey: 'books.contact.spineSubtitle',
      color: '#5E2A2A',
      highlightColor: '#8E4A4A',
      thickness: 46,
      roman: 'VIII',
    },
    content: {
      type: 'contact',
      items: [
        { icon: '✉', label: { es: 'Correo', en: 'Email' }, value: 'alfredo.llanos@sansano.usm.cl', href: 'mailto:alfredo.llanos@sansano.usm.cl' },
        { icon: '📱', label: { es: 'Teléfono', en: 'Phone' }, value: '+56 9 7950 8792', href: 'tel:+56979508792' },
        { icon: '📍', label: { es: 'Ubicación', en: 'Location' }, value: 'Talagante, Chile' },
        { icon: '🔗', label: { es: 'LinkedIn', en: 'LinkedIn' }, value: 'linkedin.com/in/alfredo-llanos', href: 'https://www.linkedin.com/in/alfredo-llanos' },
        { icon: '⌨', label: { es: 'GitHub', en: 'GitHub' }, value: 'github.com/darkyuyo', href: 'https://github.com/darkyuyo' },
        { icon: '⬇', label: { es: 'Curriculum', en: 'Resume' }, value: 'Alfredo-Llanos-CV.pdf', href: '/Alfredo-Llanos-CV.pdf' },
      ],
    },
  },
]
