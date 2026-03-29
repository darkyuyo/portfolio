const en = {
  ui: {
    langToggle: 'ES',
    atAGlance: 'At a glance',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
    openBook: 'Open book',
    backToShelf: 'Back to shelf',
    viewGithub: 'GitHub',
    viewDemo: 'Demo',
    intro: 'Choose a book to explore my story as a developer.',
  },
  books: {
    about: {
      spineTitle: 'Prologue',
      spineSubtitle: 'Who I am',
      pageTitle: 'Prologue',
      pageSubtitle: 'A brief introduction',
    },
    stack: {
      spineTitle: 'Stack & Tools',
      spineSubtitle: 'Technologies',
      pageTitle: 'Technical Catalogue',
      pageSubtitle: 'Languages, frameworks & tools',
    },
    experience: {
      spineTitle: 'Experience',
      spineSubtitle: 'Professional log',
      pageTitle: 'Professional Log',
      pageSubtitle: 'Work history',
    },
    projects: {
      spineTitle: 'Projects',
      spineSubtitle: 'Published works',
      pageTitle: 'Published Works',
      pageSubtitle: 'Featured projects',
      challenge: 'Challenge',
      solution: 'Solution',
    },
    experimental: {
      spineTitle: 'Lab',
      spineSubtitle: 'Experiments',
      pageTitle: 'The Laboratory',
      pageSubtitle: 'Experimental projects',
      challenge: 'Challenge',
      solution: 'Solution',
    },
    education: {
      spineTitle: 'Education',
      spineSubtitle: 'Academic background',
      pageTitle: 'Academic Background',
      pageSubtitle: 'Studies & formation',
    },
    courses: {
      spineTitle: 'Certifications',
      spineSubtitle: 'Appendix',
      pageTitle: 'Appendix',
      pageSubtitle: 'Courses & certifications',
    },
    contact: {
      spineTitle: 'Epilogue',
      spineSubtitle: 'Get in touch',
      pageTitle: 'Epilogue',
      pageSubtitle: "Let's connect",
      quote: '"Walking in a straight line, no one can go very far."',
      quoteAuthor: '— The Little Prince',
    },
  },
} as const

export default en
export type TranslationKeys = typeof en
