import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'experience' }> }

export default function ExperienceSection({ content }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en'
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.experience.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.experience.pageTitle')}
        </h2>
      </div>

      <div style={{ position: 'relative', paddingLeft: '24px' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '1px', background: 'rgba(92,58,30,0.3)' }} />

        {content.items.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            style={{ position: 'relative', marginBottom: '28px' }}
          >
            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: '-21px',
              top: '6px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--color-gold-accent)',
              border: '2px solid var(--color-page-cream)',
              boxShadow: '0 0 0 2px var(--color-gold-accent)',
            }} />

            <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1rem', color: '#2a1208' }}>
                {item.company}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(92,58,30,0.55)', letterSpacing: '0.04em' }}>
                {item.period[lang]}
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', fontStyle: 'italic', color: 'rgba(60,34,20,0.7)', marginBottom: '8px' }}>
              {item.role[lang]}
            </p>
            <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {item.description.map((line, li) => (
                <li key={li} style={{ fontSize: '0.82rem', color: '#3a2a1a', lineHeight: 1.6, listStyleType: 'disc' }}>
                  {line[lang]}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
