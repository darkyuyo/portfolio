import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'about' }> }

export default function AboutSection({ content }: Props) {
  const { t } = useTranslation()
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Page header */}
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.about.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.about.pageTitle')}
        </h2>
      </div>

      {/* Paragraphs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        {content.text.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#3a2a1a', margin: 0 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Highlights */}
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '12px' }}>
          {t('ui.atAGlance')}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {content.highlights.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                padding: '5px 14px',
                border: '1px solid rgba(92,58,30,0.4)',
                borderRadius: '2px',
                color: '#4a2d1a',
                background: 'rgba(201,162,39,0.08)',
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
