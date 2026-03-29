import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BOOKS } from '../../data/books'
import PageFlip from './PageFlip'
import AboutSection from '../sections/AboutSection'
import StackSection from '../sections/StackSection'
import ExperienceSection from '../sections/ExperienceSection'
import ProjectsSection from '../sections/ProjectsSection'
import EducationSection from '../sections/EducationSection'
import CoursesSection from '../sections/CoursesSection'
import ContactSection from '../sections/ContactSection'

type BookOpenProps = {
  bookId: string | null
  onClose: () => void
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

function buildPages(book: ReturnType<typeof BOOKS.find> & object): ReactNode[] {
  if (!book) return []
  const { content } = book

  switch (content.type) {
    case 'about':
      return [<AboutSection key="about" content={content} />]

    case 'stack':
      return [<StackSection key="stack" content={content} />]

    case 'experience':
      return [<ExperienceSection key="exp" content={content} />]

    case 'projects': {
      const chunks = chunkArray(content.items, 2)
      return chunks.map((chunk, i) => (
        <ProjectsSection
          key={`projects-${i}`}
          content={{ type: 'projects', items: chunk }}
          bookKey="projects"
        />
      ))
    }

    case 'experimental':
      return [
        <ProjectsSection
          key="experimental"
          content={content}
          bookKey="experimental"
        />,
      ]

    case 'education':
      return [<EducationSection key="edu" content={content} />]

    case 'courses':
      return [<CoursesSection key="courses" content={content} />]

    case 'contact':
      return [<ContactSection key="contact" content={content} />]

    default:
      return []
  }
}

export default function BookOpen({ bookId, onClose }: BookOpenProps) {
  const { t } = useTranslation()
  const book = bookId ? BOOKS.find((b) => b.id === bookId) : null
  const pages = book ? buildPages(book) : []

  return (
    <AnimatePresence>
      {book && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,6,2,0.75)',
              backdropFilter: 'blur(4px)',
              zIndex: 10,
              cursor: 'pointer',
            }}
          />

          <div
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >
          <motion.div
            key="book-open"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              pointerEvents: 'auto',
              width: 'min(780px, 95vw)',
              height: 'min(540px, 88vh)',
              display: 'flex',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,162,39,0.15)',
            }}
          >
            <div
              style={{
                width: '38%',
                flexShrink: 0,
                background: `linear-gradient(160deg, ${book.spine.highlightColor} 0%, ${book.spine.color} 40%, #1a0d06 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid rgba(201,162,39,0.15)' }} />
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '90px', height: '90px', borderRadius: '50%', border: '1px solid rgba(201,162,39,0.1)' }} />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{ textAlign: 'center', zIndex: 1 }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
                  {book.spine.roman}
                </p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.95)', lineHeight: 1.25, marginBottom: '12px', fontStyle: 'italic' }}>
                  {t(book.spine.titleKey as Parameters<typeof t>[0])}
                </h2>
                <div style={{ width: '40px', height: '1px', background: 'rgba(201,162,39,0.6)', margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  {t(book.spine.subtitleKey as Parameters<typeof t>[0])}
                </p>
              </motion.div>
            </div>

            <div style={{ width: '4px', background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)', flexShrink: 0 }} />

            <div
              style={{
                flex: 1,
                background: 'var(--color-page-cream)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <button
                onClick={onClose}
                aria-label={t('ui.close')}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '14px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1px solid rgba(92,58,30,0.25)',
                  background: 'rgba(245,230,200,0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'rgba(92,58,30,0.7)',
                  zIndex: 2,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                ✕
              </button>

              <PageFlip
                pages={pages}
                bookColor={book.spine.color}
                bookHighlight={book.spine.highlightColor}
              />
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
