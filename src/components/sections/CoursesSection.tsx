import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'courses' }> }

export default function CoursesSection({ content }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en'
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.courses.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.courses.pageTitle')}
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {content.items.map((course, i) => (
          <motion.div
            key={course.name.en}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 16px',
              background: 'rgba(245,230,200,0.5)',
              border: '1px solid rgba(92,58,30,0.18)',
              borderRadius: '3px',
            }}
          >
            <span style={{ color: 'var(--color-gold-accent)', fontSize: '1rem', flexShrink: 0 }}>✓</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.9rem', color: '#2a1208', marginBottom: '2px' }}>
                {course.name[lang]}
              </p>
              <p style={{ fontSize: '0.72rem', color: 'rgba(92,58,30,0.65)' }}>
                {course.provider}{course.year ? ` · ${course.year}` : ''}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
