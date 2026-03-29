export type SkillGroup = { category: string; skills: string[] }

export type TimelineItem = {
  company: string
  role: string
  period: string
  description: string[]
}

export type Project = {
  name: string
  stack: string[]
  description: string
  challenge: string
  solution: string
  github?: string
  demo?: string
}

export type EducationItem = {
  institution: string
  degree: string
  period: string
}

export type CourseItem = {
  name: string
  provider: string
  year?: string
}

export type ContactItem = {
  icon: string
  label: string
  value: string
  href?: string
}

export type BookContent =
  | { type: 'about'; text: string[]; highlights: string[] }
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
        'Desarrollador Fullstack apasionado por construir productos que realmente marquen la diferencia. Me muevo con comodidad entre frontend y backend, creando experiencias fluidas desde la base de datos hasta el navegador.',
        'Con una carrera en Ingeniería Civil en Informática de la Universidad Técnica Federico Santa María, he construido y lanzado aplicaciones móviles y web de nivel productivo en múltiples industrias.',
        'Me encanta aprender, adaptarme rápidamente a nuevas tecnologías y colaborar estrechamente con mi equipo para entregar soluciones limpias e impactantes.',
      ],
      highlights: [
        'Desarrollador Fullstack',
        'Ingeniero Civil Informático',
        'Móvil & Web',
        'AWS & Cloud',
        'Trabajo en equipo',
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
          category: 'Frontend',
          skills: ['React', 'React Native', 'Flutter', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
          category: 'Backend',
          skills: ['Node.js', 'Ruby on Rails', 'PHP', 'Java', 'C#', 'Python', 'C/C++'],
        },
        {
          category: 'Databases',
          skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
        },
        {
          category: 'Cloud & Tools',
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
          role: 'Desarrollador Fullstack',
          period: 'Febrero 2026 – Presente',
          description: [
            'Desarrollo y mantención de múltiples aplicaciones productivas para móvil y web.',
            'Lideré el ciclo completo del producto, desde el diseño de arquitectura hasta el despliegue en iOS, Android y web.',
          ],
        },
        {
          company: 'IBM S.A',
          role: 'IT Consultant',
          period: 'Enero – Julio 2023',
          description: [
            'Migración de versión SAP para el proyecto Carozzi.',
            'Verificación de consistencia de versiones, carga de perfiles y créditos, actualización de roles y configuración de condiciones de contrato.',
          ],
        },
        {
          company: 'Práctica Industrial MELÓN S.A',
          role: 'Desarrollador en Práctica',
          period: 'Enero – Marzo 2021',
          description: [
            'Revisión y diagramación de procesos de negocio.',
            'Elaboración de documentos técnicos de entrega.',
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
          description: 'Sistema de control de calidad de frutas que permite validación y control en tiempo real a lo largo de la cadena de suministro.',
          challenge: 'Sincronización en tiempo real de datos de calidad entre trabajadores en terreno y la nube.',
          solution: 'Amazon Amplify DataStore para capacidad offline con resolución automática de conflictos.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Chiquitina',
          stack: ['Ruby on Rails', 'PostgreSQL'],
          description: 'Plataforma que automatiza la gestión de solicitudes recibidas por correo, reduciendo el tiempo de procesamiento manual.',
          challenge: 'Parsear y enrutar correos entrantes a flujos de trabajo estructurados.',
          solution: 'Pipeline ActionMailbox con reglas de enrutamiento personalizadas y seguimiento de estado.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Hereneo',
          stack: ['Vue.js', 'JavaScript'],
          description: 'Marketplace especializado en productos infantiles que conecta a padres con vendedores de confianza.',
          challenge: 'Construir un catálogo eficiente con filtrado dinámico para un amplio rango de productos.',
          solution: 'Propiedades computadas en Vue con búsqueda con debounce e imágenes cargadas de forma lazy.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Caliper',
          stack: ['React Native'],
          description: 'Aplicación móvil para organizar y compartir datos de inventario forestal entre equipos en terreno.',
          challenge: 'Estructuras de datos de árboles complejas con requerimientos de acceso sin conexión.',
          solution: 'Persistencia local con SQLite y estrategia de sincronización al reconectarse.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Elogos',
          stack: ['React Native', 'Moodle API'],
          description: 'App de e-learning que permite a empleados de Ripley acceder a cursos de capacitación a través de Moodle.',
          challenge: 'Consumir una API REST de Moodle no estándar con autenticación basada en tokens.',
          solution: 'Capa de abstracción de API personalizada que mapea los endpoints de Moodle a un estado de app con tipos definidos.',
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
          description: 'Experiencia de realidad virtual construida para la Feria de Software que ayuda a los usuarios a practicar habilidades sociales y profesionales mediante escenarios simulados inmersivos.',
          challenge: 'Crear interacciones VR fluidas y naturales bajo estrictas limitaciones de rendimiento.',
          solution: 'Optimización del grafo de escena, variantes de shaders y sistema de interacción construido sobre XR Toolkit.',
        },
        {
          name: 'Videojuego — Memoria USM',
          stack: ['Unity', 'C#'],
          description: 'Prototipo de videojuego jugable desarrollado como proyecto de titulación alineado con los criterios del fondo cultural.',
          challenge: 'Entregar un prototipo pulido dentro de plazos académicos ajustados.',
          solution: 'Definición ágil del alcance usando un vertical slice mínimo viable, enfocado en el loop principal del juego.',
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
          degree: 'Ingeniería Civil en Informática',
          period: 'Marzo 2018 – Septiembre 2024',
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
        { name: 'Conceptos básicos de React', provider: 'Meta', year: '2023' },
        { name: 'React Avanzado', provider: 'Meta', year: '2023' },
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
        { icon: '✉', label: 'Email', value: 'alfredo.llanos@sansano.usm.cl', href: 'mailto:alfredo.llanos@sansano.usm.cl' },
        { icon: '📱', label: 'Phone', value: '+56 9 7950 8792', href: 'tel:+56979508792' },
        { icon: '📍', label: 'Location', value: 'Talagante, Chile' },
        { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/alfredo-llanos', href: 'https://www.linkedin.com/in/alfredo-llanos' },
        { icon: '⌨', label: 'GitHub', value: 'github.com/darkyuyo', href: 'https://github.com/darkyuyo' },
      ],
    },
  },
]
