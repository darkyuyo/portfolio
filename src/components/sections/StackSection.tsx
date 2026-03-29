import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'stack' }> }

const CATEGORY_COLORS: Record<string, string> = {
  Frontend:  '#1B435B',
  Backend:   '#2D4A1E',
  Databases: '#5C3A1E',
  'Cloud & Tools': '#4A2C5E',
}

export default function StackSection({ content }: Props) {
  const { t } = useTranslation()
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.stack.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.stack.pageTitle')}
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {content.groups.map((group, gi) => (
          <div key={group.category}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: CATEGORY_COLORS[group.category] ?? '#5C3A1E', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.65)' }}>
                {group.category}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.08 + si * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: '3px',
                    background: `${CATEGORY_COLORS[group.category] ?? '#5C3A1E'}22`,
                    border: `1px solid ${CATEGORY_COLORS[group.category] ?? '#5C3A1E'}55`,
                    color: '#3a2208',
                    cursor: 'default',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
