import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { BookContent } from '../../data/books'

type Props = { content: Extract<BookContent, { type: 'contact' }> }

export default function ContactSection({ content }: Props) {
  const { t } = useTranslation()
  return (
    <div style={{ fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '300px' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.contact.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.contact.pageTitle')}
        </h2>
      </div>

      {/* Closing quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.9rem',
          color: 'rgba(60,34,20,0.65)',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: 1.7,
        }}
      >
        "Every great story worthy of telling begins with someone brave enough to start the conversation."
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '360px' }}>
        {content.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  background: 'rgba(245,230,200,0.5)',
                  border: '1px solid rgba(92,58,30,0.18)',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
              >
                <span style={{ fontSize: '1rem', width: '20px', textAlign: 'center' }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '2px' }}>{item.label}</p>
                  <p style={{ fontSize: '0.84rem', color: '#2a1208', fontWeight: 500 }}>{item.value}</p>
                </div>
              </a>
            ) : (
              <div
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
                <span style={{ fontSize: '1rem', width: '20px', textAlign: 'center' }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '2px' }}>{item.label}</p>
                  <p style={{ fontSize: '0.84rem', color: '#2a1208', fontWeight: 500 }}>{item.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
