export type L = { es: string; en: string }

export type SkillGroup = { category: L; skills: string[] }

export type TimelineItem = {
  company: string
  role: L
  period: string
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
          skills: ['React', 'React Native', 'Flutter', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
          category: { es: 'Backend', en: 'Backend' },
          skills: ['Node.js', 'Ruby on Rails', 'PHP', 'Java', 'C#', 'Python', 'C/C++'],
        },
        {
          category: { es: 'Bases de datos', en: 'Databases' },
          skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
        },
        {
          category: { es: 'Nube y herramientas', en: 'Cloud & Tools' },
          skills: ['AWS', 'Amazon Amplify', 'SAP', 'Unity', 'Git', 'Excel'],
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
          period: 'Febrero 2026 – Presente',
          description: [
            { es: 'Desarrollo y mantención de múltiples aplicaciones productivas para móvil y web.', en: 'Development and maintenance of multiple production applications for mobile and web.' },
            { es: 'Lideré el ciclo completo del producto, desde el diseño de arquitectura hasta el despliegue en iOS, Android y web.', en: 'Led full product lifecycle from architecture design to deployment across iOS, Android and web.' },
          ],
        },
        {
          company: 'IBM S.A',
          role: { es: 'Consultor IT', en: 'IT Consultant' },
          period: 'Enero – Julio 2023',
          description: [
            { es: 'Migración de versión SAP para el proyecto Carozzi.', en: 'SAP version migration for the Carozzi project.' },
            { es: 'Verificación de consistencia de versiones, carga de perfiles y créditos, actualización de roles y configuración de condiciones de contrato.', en: 'Version consistency verification, profile and credit loading, role updates and contract conditions setup.' },
          ],
        },
        {
          company: 'Práctica Industrial MELÓN S.A',
          role: { es: 'Desarrollador en Práctica', en: 'Intern Developer' },
          period: 'Enero – Marzo 2021',
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
          name: 'Checkview',
          stack: ['Flutter', 'Amazon Amplify', 'AWS'],
          description: { es: 'Sistema de control de calidad de frutas que permite validación y control en tiempo real a lo largo de la cadena de suministro.', en: 'Quality management system for fruits enabling real-time control and validation across the supply chain.' },
          challenge: { es: 'Sincronización en tiempo real de datos de calidad entre trabajadores en terreno y la nube.', en: 'Real-time sync of quality data between field workers and the cloud.' },
          solution: { es: 'Amazon Amplify DataStore para capacidad offline con resolución automática de conflictos.', en: 'Amazon Amplify DataStore for offline-first capability with automatic conflict resolution.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Chiquitina',
          stack: ['Ruby on Rails', 'PostgreSQL'],
          description: { es: 'Plataforma que automatiza la gestión de solicitudes recibidas por correo, reduciendo el tiempo de procesamiento manual.', en: 'Platform that automates the management of requests received by email, reducing manual processing time.' },
          challenge: { es: 'Parsear y enrutar correos entrantes a flujos de trabajo estructurados.', en: 'Parsing and routing inbound emails into structured workflows.' },
          solution: { es: 'Pipeline ActionMailbox con reglas de enrutamiento personalizadas y seguimiento de estado.', en: 'ActionMailbox pipeline with custom routing rules and status tracking.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Hereneo',
          stack: ['Vue.js', 'JavaScript'],
          description: { es: 'Marketplace especializado en productos infantiles que conecta a padres con vendedores de confianza.', en: 'Marketplace specialized in infant products, connecting parents with trusted sellers.' },
          challenge: { es: 'Construir un catálogo eficiente con filtrado dinámico para un amplio rango de productos.', en: 'Building a performant catalog with dynamic filtering for a wide product range.' },
          solution: { es: 'Propiedades computadas en Vue con búsqueda con debounce e imágenes cargadas de forma lazy.', en: 'Computed Vue properties with debounced search and lazy-loaded product images.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Caliper',
          stack: ['React Native'],
          description: { es: 'Aplicación móvil para organizar y compartir datos de inventario forestal entre equipos en terreno.', en: 'Mobile app for organizing and sharing forest inventory data among field teams.' },
          challenge: { es: 'Estructuras de datos de árboles complejas con requerimientos de acceso sin conexión.', en: 'Complex tree data structures with offline access requirements.' },
          solution: { es: 'Persistencia local con SQLite y estrategia de sincronización al reconectarse.', en: 'Local SQLite persistence with sync-on-connect strategy.' },
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Elogos',
          stack: ['React Native', 'Moodle API'],
          description: { es: 'App de e-learning que permite a empleados de Ripley acceder a cursos de capacitación a través de Moodle.', en: 'E-learning app providing Ripley employees access to training courses through Moodle.' },
          challenge: { es: 'Consumir una API REST de Moodle no estándar con autenticación basada en tokens.', en: 'Consuming a non-standard Moodle REST API with token-based authentication.' },
          solution: { es: 'Capa de abstracción de API personalizada que mapea los endpoints de Moodle a un estado de app con tipos definidos.', en: 'Custom API abstraction layer mapping Moodle endpoints to cleanly typed app state.' },
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
          name: 'Arsis — VR',
          stack: ['Unity', 'C#', 'VR SDK'],
          description: { es: 'Experiencia de realidad virtual construida para la Feria de Software que ayuda a los usuarios a practicar habilidades sociales y profesionales mediante escenarios simulados inmersivos.', en: 'VR experience built for the Software Fair that helps users practice social and professional skills through immersive simulated scenarios.' },
          challenge: { es: 'Crear interacciones VR fluidas y naturales bajo estrictas limitaciones de rendimiento.', en: 'Creating fluid, natural-feeling VR interactions under strict performance constraints.' },
          solution: { es: 'Optimización del grafo de escena, variantes de shaders y sistema de interacción construido sobre XR Toolkit.', en: 'Optimized scene graph, shader variants and interaction system built on XR Toolkit.' },
        },
        {
          name: 'Videojuego — Memoria USM',
          stack: ['Unity', 'C#'],
          description: { es: 'Prototipo de videojuego jugable desarrollado como proyecto de titulación alineado con los criterios del fondo cultural.', en: 'Playable videogame prototype developed as a graduation project aligned with cultural fund criteria.' },
          challenge: { es: 'Entregar un prototipo pulido dentro de plazos académicos ajustados.', en: 'Delivering a polished prototype within tight academic deadlines.' },
          solution: { es: 'Definición ágil del alcance usando un vertical slice mínimo viable, enfocado en el loop principal del juego.', en: 'Agile scoping using a minimum viable vertical slice, focusing on the core game loop first.' },
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
      ],
    },
  },
]
