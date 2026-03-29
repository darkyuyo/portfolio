import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BOOKS } from '../../data/books'
import BookSpine from '../book/BookSpine'

type ShelfProps = {
  onBookClick: (bookId: string) => void
}

export default function Shelf({ onBookClick }: ShelfProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full" style={{ zIndex: 1, position: 'relative' }}>

      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          marginBottom: '2.5rem',
          letterSpacing: '0.02em',
        }}
      >
        {t('ui.intro')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '4px',
            padding: '0 32px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {BOOKS.map((book, index) => (
            <BookSpine
              key={book.id}
              book={book}
              index={index}
              onClick={() => onBookClick(book.id)}
            />
          ))}
        </div>

        <div
          style={{
            height: '6px',
            background: `linear-gradient(180deg, var(--color-wood-light) 0%, var(--color-wood-medium) 100%)`,            borderRadius: '2px 2px 0 0',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.4)',
            position: 'relative',
            zIndex: 3,
          }}
        />

        <div
          style={{
            height: '28px',
            background: `linear-gradient(180deg, var(--color-wood-medium) 0%, var(--color-wood-dark) 60%, #2a1d13 100%)`,            boxShadow: '0 8px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {[15, 35, 55, 75, 90].map((pct) => (
            <div
              key={pct}
              style={{
                position: 'absolute',
                top: `${20 + Math.sin(pct) * 4}%`,
                left: `${pct}%`,
                width: '18%',
                height: '1px',
                background: 'rgba(0,0,0,0.15)',
                borderRadius: '1px',
              }}
            />
          ))}
        </div>

        <div
          style={{
            height: '12px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)',
          }}
        />
      </motion.div>
    </div>
  )
}
