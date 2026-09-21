import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Book } from '../../data/books'

type BookSpineProps = {
  book: Book
  index: number
  onClick: () => void
  widthScale?: number
  heightScale?: number
}

export const BOOK_HEIGHT_MAP: Record<string, number> = {
  about: 290,
  stack: 315,
  experience: 285,
  projects: 340,
  experimental: 278,
  education: 288,
  courses: 272,
  contact: 294,
}

export const SPINE_WIDTH_FACTOR = 1.35

export default function BookSpine({
  book,
  index,
  onClick,
  widthScale = 1,
  heightScale = 1,
}: BookSpineProps) {
  const { t } = useTranslation()
  const height = Math.round((BOOK_HEIGHT_MAP[book.id] ?? 230) * heightScale)
  const width = Math.max(36, Math.round(book.spine.thickness * SPINE_WIDTH_FACTOR * widthScale))
  const title = t(book.spine.titleKey as Parameters<typeof t>[0])
  const compact = heightScale < 0.85 || widthScale < 0.9
  const titleSize = compact ? '0.72rem' : '0.85rem'
  const romanSize = compact ? '0.64rem' : '0.75rem'

  return (
    <motion.button
      onClick={onClick}
      aria-label={`${t('ui.openBook')}: ${title}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5 + index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: compact ? -6 : -10,
        rotateY: 8,
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        minWidth: '36px',
        background: `linear-gradient(
          180deg,
          ${book.spine.highlightColor} 0%,
          ${book.spine.color} 20%,
          ${book.spine.color} 80%,
          rgba(0,0,0,0.4) 100%
        )`,
        borderRadius: '2px 4px 4px 2px',
        cursor: 'pointer',
        border: 'none',
        padding: compact ? '8px 0' : 0,
        outline: 'none',
        boxShadow: `
          inset -3px 0 6px rgba(0,0,0,0.35),
          inset 2px 0 4px rgba(255,255,255,0.06),
          3px 4px 12px rgba(0,0,0,0.5)
        `,
        transformStyle: 'preserve-3d',
        transformOrigin: 'left center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        flexShrink: 0,
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: romanSize,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.05em',
        }}
      >
        {book.spine.roman}
      </span>

      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: titleSize,
          fontWeight: 600,
          color: 'rgba(255,255,255,0.92)',
          letterSpacing: compact ? '0.06em' : '0.12em',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          lineHeight: 1,
          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </span>

      <div
        style={{
          width: '60%',
          height: '1px',
          background: 'var(--color-gold-accent)',
          opacity: 0.6,
          borderRadius: '1px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)`,
          borderRadius: '2px 0 0 2px',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)`,
          pointerEvents: 'none',
        }}
      />
    </motion.button>
  )
}
