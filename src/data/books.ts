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
        'Lorem ipsum developer, passionate about building products that people actually enjoy using.',
        'With a background in Informatics Engineering, I thrive at the intersection of frontend and backend, crafting seamless experiences from database to browser.',
        'I enjoy working in collaborative teams, adapting quickly to new challenges, and writing code that is both clean and impactful.',
      ],
      highlights: [
        'Fullstack Developer',
        'Informatics Engineer',
        'Mobile & Web',
        'Team Player',
        'Lifelong Learner',
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
          skills: ['React', 'React Native', 'Flutter', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
          category: 'Backend',
          skills: ['Node.js', 'Ruby on Rails', 'PHP', 'Java', 'C#'],
        },
        {
          category: 'Databases',
          skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
        },
        {
          category: 'Cloud & Tools',
          skills: ['AWS', 'SAP', 'Git', 'Unity', 'Docker'],
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
          company: 'Company A',
          role: 'Fullstack Developer',
          period: '2023 – Present',
          description: [
            'Process analysis and documentation for key business flows.',
            'Design and delivery of technical specifications.',
          ],
        },
        {
          company: 'Company B',
          role: 'IT Consultant',
          period: '2022 – 2023',
          description: [
            'Supported migration of ERP version for a major food company.',
            'Configured user profiles, roles and credit conditions in SAP.',
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
          name: 'Project Alpha',
          stack: ['Flutter', 'AWS Amplify'],
          description: 'Mobile app for real-time data collection and validation.',
          challenge: 'Synchronize offline-first data with cloud.',
          solution: 'Used AWS Amplify DataStore for conflict resolution.',
          github: '#',
        },
        {
          name: 'Project Beta',
          stack: ['Ruby on Rails', 'PostgreSQL'],
          description: 'Web platform for inventory and logistics management.',
          challenge: 'Handle complex multi-tenant data models.',
          solution: 'Row-level security policies and scoped queries.',
          github: '#',
        },
        {
          name: 'Project Gamma',
          stack: ['Vue.js', 'JavaScript'],
          description: 'Landing page and product catalog for a retail brand.',
          challenge: 'Performance on low-end devices.',
          solution: 'Lazy loading, code splitting and image optimization.',
          github: '#',
        },
        {
          name: 'Project Delta',
          stack: ['React Native'],
          description: 'Cross-platform mobile app for field technicians.',
          challenge: 'Complex forms with dynamic validation rules.',
          solution: 'Custom form engine with rule-based schema.',
          github: '#',
        },
        {
          name: 'Project Epsilon',
          stack: ['React Native', 'Moodle API'],
          description: 'E-learning app integrated with Moodle LMS.',
          challenge: 'Consuming a non-standard REST API.',
          solution: 'Abstraction layer mapping Moodle tokens to app state.',
          github: '#',
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
          name: 'VR Experience',
          stack: ['Unity', 'C#', 'VR SDK'],
          description: 'Immersive virtual reality environment for architectural visualization.',
          challenge: 'Achieving 90fps with rich 3D assets.',
          solution: 'LOD system and occlusion culling strategies.',
        },
        {
          name: 'Videogame Prototype',
          stack: ['Unity', 'C#'],
          description: '2D puzzle-platformer prototype built as a personal experiment.',
          challenge: 'Designing tight and responsive movement mechanics.',
          solution: 'Custom physics controller decoupled from Unity Rigidbody.',
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
          degree: 'Civil Engineering in Informatics',
          period: '2018 – 2024',
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
        { name: 'React Fundamentals', provider: 'Meta', year: '2023' },
        { name: 'Advanced React', provider: 'Meta', year: '2023' },
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
        { icon: '✉', label: 'Email', value: 'yourname@email.com', href: 'mailto:yourname@email.com' },
        { icon: '📱', label: 'Phone', value: '+56 9 0000 0000', href: 'tel:+56900000000' },
        { icon: '📍', label: 'Location', value: 'Talagante, Chile' },
        { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
        { icon: '⌨', label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
      ],
    },
  },
]
