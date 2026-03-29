import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'
import type { BookContent } from '../../data/books'

const CONTACT_ICONS: Record<string, ReactElement> = {
  Email: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>,
  Phone: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.21l3-.02a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Location: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  LinkedIn: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  GitHub: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
}

type Props = { content: Extract<BookContent, { type: 'contact' }> }

export default function ContactSection({ content }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'es' ? 'es' : 'en') as 'es' | 'en'
  return (
    <div style={{ fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '300px' }}>
      <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(92,58,30,0.25)', paddingBottom: '16px', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.82rem', color: 'rgba(92,58,30,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
          {t('books.contact.pageSubtitle')}
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 600, color: '#2a1208', margin: 0, lineHeight: 1.2, fontStyle: 'italic' }}>
          {t('books.contact.pageTitle')}
        </h2>
      </div>

      {/* Closing quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        style={{ marginBottom: '32px', textAlign: 'center' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'rgba(60,34,20,0.65)',
            lineHeight: 1.7,
            marginBottom: '6px',
          }}
        >
          {t('books.contact.quote')}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-accent)',
          }}
        >
          {t('books.contact.quoteAuthor')}
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '360px' }}>
        {content.items.map((item, i) => (
          <motion.div
            key={item.value}
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
                <span style={{ width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(92,58,30,0.65)', flexShrink: 0 }}>{CONTACT_ICONS[item.label.en]}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '2px' }}>{item.label[lang]}</p>
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
                <span style={{ width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(92,58,30,0.65)', flexShrink: 0 }}>{CONTACT_ICONS[item.label.en]}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(92,58,30,0.5)', marginBottom: '2px' }}>{item.label[lang]}</p>
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
