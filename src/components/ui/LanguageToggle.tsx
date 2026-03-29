import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle({ hidden }: { hidden?: boolean }) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en')
  }

  if (hidden) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(26,18,8,0.85)',
        border: '1px solid rgba(201,162,39,0.55)',
        borderRadius: '4px',
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,162,39,0.1)',
      }}
    >
      {(['es', 'en'] as const).map((lang) => {
        const isActive = currentLang === lang
        return (
          <motion.button
            key={lang}
            onClick={toggle}
            whileHover={!isActive ? { background: 'rgba(201,162,39,0.12)' } : {}}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${lang === 'en' ? 'English' : 'Español'}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              padding: '8px 16px',
              cursor: isActive ? 'default' : 'pointer',
              border: 'none',
              background: isActive ? 'rgba(201,162,39,0.22)' : 'transparent',
              color: isActive ? 'var(--color-gold-accent)' : 'rgba(245,230,200,0.4)',
              fontWeight: isActive ? 700 : 400,
              transition: 'color 0.2s, background 0.2s',
              position: 'relative',
            }}
          >
            {lang.toUpperCase()}
            {isActive && (
              <motion.span
                layoutId="lang-indicator"
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  background: 'var(--color-gold-accent)',
                  borderRadius: '1px',
                  display: 'block',
                }}
              />
            )}
          </motion.button>
        )
      })}
    </motion.div>
  )
}
