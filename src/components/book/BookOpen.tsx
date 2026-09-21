import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BOOKS } from '../../data/books'
import PageFlip from './PageFlip'
import { useViewport } from '../../hooks/useIsMobile'
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

function buildPages(
  book: ReturnType<typeof BOOKS.find> & object,
  compact: boolean
): ReactNode[] {
  if (!book) return []
  const { content } = book

  switch (content.type) {
    case 'about':
      return [<AboutSection key="about" content={content} />]

    case 'stack': {
      const chunks = chunkArray(content.groups, compact ? 1 : 2)
      return chunks.map((chunk, i) => (
        <StackSection
          key={`stack-${i}`}
          content={{ type: 'stack', groups: chunk }}
        />
      ))
    }

    case 'experience':
      return [<ExperienceSection key="exp" content={content} />]

    case 'projects': {
      const chunks = chunkArray(content.items, compact ? 1 : 2)
      return chunks.map((chunk, i) => (
        <ProjectsSection
          key={`projects-${i}`}
          content={{ type: 'projects', items: chunk }}
          bookKey="projects"
        />
      ))
    }

    case 'experimental': {
      const chunks = chunkArray(content.items, compact ? 1 : content.items.length)
      return chunks.map((chunk, i) => (
        <ProjectsSection
          key={`experimental-${i}`}
          content={{ type: 'experimental', items: chunk }}
          bookKey="experimental"
        />
      ))
    }

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
  const { width, height, isMobile, isShort } = useViewport()
  const stacked = isMobile || (width < 1024 && isShort)
  const book = bookId ? BOOKS.find((b) => b.id === bookId) : null
  const pages = book ? buildPages(book, stacked) : []
  const coverWidth = width < 1100 ? '32%' : '38%'

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
              alignItems: stacked ? 'stretch' : 'center',
              justifyContent: stacked ? 'stretch' : 'center',
              zIndex: 20,
              pointerEvents: 'none',
              padding: stacked ? 0 : 'clamp(8px, 2vh, 24px)',
              boxSizing: 'border-box',
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
                width: stacked ? '100%' : 'min(1020px, 96vw)',
                height: stacked ? '100%' : `min(700px, ${Math.max(280, height - 32)}px)`,
                maxHeight: stacked ? 'none' : '92vh',
                alignSelf: stacked ? 'stretch' : undefined,
                flex: stacked ? 1 : undefined,
                display: 'flex',
                flexDirection: stacked ? 'column' : 'row',
                borderRadius: stacked ? 0 : '4px',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,162,39,0.15)',
              }}
            >
              {stacked ? (
                <div
                  style={{
                    minHeight: '52px',
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${book.spine.highlightColor} 0%, ${book.spine.color} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    paddingTop: 'max(8px, env(safe-area-inset-top, 0px))',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    gap: 8,
                  }}
                >
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(201,162,39,0.15)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 1, minWidth: 0 }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>
                      {book.spine.roman}
                    </span>
                    <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem, 4.4vw, 1.15rem)', fontWeight: 700, color: 'rgba(255,255,255,0.95)', margin: 0, fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t(book.spine.titleKey as Parameters<typeof t>[0])}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label={t('ui.close')}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.25)',
                      background: 'rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.85)',
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    width: coverWidth,
                    flexShrink: 0,
                    background: `linear-gradient(160deg, ${book.spine.highlightColor} 0%, ${book.spine.color} 40%, #1a0d06 100%)`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: width < 1100 ? '24px 18px' : '32px 24px',
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
                    style={{ textAlign: 'center', zIndex: 1, padding: '0 4px' }}
                  >
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>
                      {book.spine.roman}
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.45rem, 2.4vw, 2.1rem)', fontWeight: 700, color: 'rgba(255,255,255,0.95)', lineHeight: 1.25, marginBottom: '12px', fontStyle: 'italic' }}>
                      {t(book.spine.titleKey as Parameters<typeof t>[0])}
                    </h2>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(201,162,39,0.6)', margin: '0 auto 12px' }} />
                    <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(0.82rem, 1.4vw, 0.92rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                      {t(book.spine.subtitleKey as Parameters<typeof t>[0])}
                    </p>
                  </motion.div>
                </div>
              )}

              {!stacked && <div style={{ width: '4px', background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)', flexShrink: 0 }} />}

              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  minHeight: 0,
                  background: 'var(--color-page-cream)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {!stacked && (
                  <button
                    onClick={onClose}
                    aria-label={t('ui.close')}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      width: '32px',
                      height: '32px',
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
                )}

                <PageFlip
                  key={`${book.id}-${stacked ? 'm' : 'd'}`}
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
