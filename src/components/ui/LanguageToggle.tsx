import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en')
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 30,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '0.78rem',
        letterSpacing: '0.12em',
        color: 'var(--color-gold-accent)',
        background: 'rgba(26,18,8,0.75)',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: '3px',
        padding: '6px 14px',
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      }}
    >
      {t('ui.langToggle')}
    </motion.button>
  )
}
