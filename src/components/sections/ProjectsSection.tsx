import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent, Project } from '../../data/books'
import { useIsMobile } from '../../hooks/useIsMobile'

type Props = {
  content: Extract<BookContent, { type: 'projects' }> | Extract<BookContent, { type: 'experimental' }>
  bookKey: 'projects' | 'experimental'
}

function ProjectCard({ project, index, bookKey }: { project: Project; index: number; bookKey: Props['bookKey'] }) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en'
  const isMobile = useIsMobile()
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{
        marginBottom: '24px',
        padding: '16px',
        background: 'rgba(245,230,200,0.6)',
        border: '1px solid rgba(92,58,30,0.2)',
        borderRadius: '4px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#2a1208', margin: 0 }}>
          {project.name}
        </h3>
        <div style={{ display: 'flex', gap: '6px' }}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.68rem', padding: '2px 8px', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', borderRadius: '2px', color: '#3a2208', textDecoration: 'none', fontFamily: 'var(--font-sans)', letterSpacing: '0.06em' }}>
              {t('ui.viewDemo')}
            </a>
          )}
        </div>
      </div>

      {/* Stack badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
        {project.stack.map((tech) => (
          <span key={tech} style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'rgba(92,58,30,0.1)', borderRadius: '2px', color: '#5a3a1a', fontWeight: 500 }}>
            {tech}
          </span>
        ))}
      </div>

      <p style={{ fontSize: '0.82rem', color: '#3a2a1a', lineHeight: 1.65, marginBottom: '8px' }}>
        {project.description[lang]}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '8px' }}>
        <div style={{ padding: '8px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px', borderLeft: '2px solid rgba(92,58,30,0.4)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.55)', marginBottom: '4px' }}>
            {t(`books.${bookKey}.challenge` as Parameters<typeof t>[0])}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#3a2a1a', lineHeight: 1.5 }}>{project.challenge[lang]}</p>
        </div>
        <div style={{ padding: '8px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px', borderLeft: '2px solid rgba(201,162,39,0.5)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.55)', marginBottom: '4px' }}>
            {t(`books.${bookKey}.solution` as Parameters<typeof t>[0])}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#3a2a1a', lineHeight: 1.5 }}>{project.solution[lang]}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection({ content, bookKey }: Props) {
  const { t } = useTranslation()
  const titleKey = `books.${bookKey}.pageTitle` as Parameters<typeof t>[0]
  const subtitleKey = `books.${bookKey}.pageSubtitle` as Parameters<typeof t>[0]

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t(subtitleKey)}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t(titleKey)}
        </h2>
      </div>

      {content.items.map((project, i) => (
        <ProjectCard key={project.name} project={project} index={i} bookKey={bookKey} />
      ))}
    </div>
  )
}
