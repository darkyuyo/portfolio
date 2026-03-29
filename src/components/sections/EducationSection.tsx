import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'education' }> }

export default function EducationSection({ content }: Props) {
  const { t } = useTranslation()
  return (
    <div style={{ fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}>
      <div style={{ marginBottom: '40px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.education.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.education.pageTitle')}
        </h2>
      </div>

      {content.items.map((item, i) => (
        <motion.div
          key={item.institution}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          style={{
            padding: '32px 40px',
            border: '1px solid rgba(201,162,39,0.4)',
            borderRadius: '4px',
            background: 'rgba(201,162,39,0.05)',
            maxWidth: '380px',
            width: '100%',
          }}
        >
          {/* Ornament */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ height: '1px', flex: 1, background: 'rgba(201,162,39,0.4)' }} />
            <span style={{ color: 'var(--color-gold-accent)', fontSize: '1.2rem' }}>✦</span>
            <div style={{ height: '1px', flex: 1, background: 'rgba(201,162,39,0.4)' }} />
          </div>

          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '12px' }}>
            {item.period}
          </p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: '#2a1208', marginBottom: '8px', lineHeight: 1.3 }}>
            {item.degree}
          </h3>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.88rem', color: 'rgba(60,34,20,0.75)' }}>
            {item.institution}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
