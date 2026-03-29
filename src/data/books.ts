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
        'Fullstack developer passionate about building products that truly make a difference. I thrive at the intersection of frontend and backend, crafting seamless experiences from database to browser.',
        'With a degree in Civil Informatics Engineering from Universidad Técnica Federico Santa María, I have built and shipped production-grade mobile and web applications across multiple industries.',
        'I love learning, adapting quickly to new technologies, and collaborating closely with teammates to deliver clean, impactful solutions.',
      ],
      highlights: [
        'Fullstack Developer',
        'Ingeniero Civil Informático',
        'Mobile & Web',
        'AWS & Cloud',
        'Team Player',
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
          role: 'Fullstack Developer',
          period: 'Febrero 2026 – Presente',
          description: [
            'Development and maintenance of multiple production applications for mobile and web.',
            'Led full product lifecycle from architecture design to deployment across iOS, Android and web.',
          ],
        },
        {
          company: 'IBM S.A',
          role: 'IT Consultant',
          period: 'Enero – Julio 2023',
          description: [
            'SAP version migration for Carozzi project.',
            'Version consistency verification, profile and credit loading, role updates and contract conditions setup.',
          ],
        },
        {
          company: 'Práctica Industrial MELÓN S.A',
          role: 'Intern Developer',
          period: 'Enero – Marzo 2021',
          description: [
            'Business process review and diagramming.',
            'Preparation of technical delivery documents.',
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
          description: 'Quality management system for fruits enabling real-time control and validation across the supply chain.',
          challenge: 'Real-time sync of quality data between field workers and the cloud.',
          solution: 'Amazon Amplify DataStore for offline-first capability with automatic conflict resolution.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Chiquitina',
          stack: ['Ruby on Rails', 'PostgreSQL'],
          description: 'Platform that automates the management of requests received by email, reducing manual processing time.',
          challenge: 'Parsing and routing inbound emails into structured workflows.',
          solution: 'ActionMailbox pipeline with custom routing rules and status tracking.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Hereneo',
          stack: ['Vue.js', 'JavaScript'],
          description: 'Marketplace specialized in infant products, connecting parents with trusted sellers.',
          challenge: 'Building a performant catalog with dynamic filtering for a wide product range.',
          solution: 'Computed Vue properties with debounced search and lazy-loaded product images.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Caliper',
          stack: ['React Native'],
          description: 'Mobile app for organizing and sharing forest inventory data among field teams.',
          challenge: 'Complex tree data structures with offline access requirements.',
          solution: 'Local SQLite persistence with sync-on-connect strategy.',
          github: 'https://github.com/darkyuyo',
        },
        {
          name: 'Elogos',
          stack: ['React Native', 'Moodle API'],
          description: 'E-learning app providing Ripley employees access to training courses through Moodle.',
          challenge: 'Consuming a non-standard Moodle REST API with token-based authentication.',
          solution: 'Custom API abstraction layer mapping Moodle endpoints to cleanly typed app state.',
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
          description: 'VR experience built for the Software Fair (Feria de Software) that helps users practice social and professional skills through immersive simulated scenarios.',
          challenge: 'Creating fluid, natural-feeling VR interactions under strict performance constraints.',
          solution: 'Optimized scene graph, shader variants and interaction system built on XR Toolkit.',
        },
        {
          name: 'Videojuego — Memoria USM',
          stack: ['Unity', 'C#'],
          description: 'Playable videogame prototype developed as a graduation project aligned with cultural fund criteria.',
          challenge: 'Delivering a polished prototype within tight academic deadlines.',
          solution: 'Agile scoping using a minimum viable vertical slice, focusing on the core game loop first.',
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
