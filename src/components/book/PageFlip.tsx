import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useViewport } from '../../hooks/useIsMobile'

type PageFlipProps = {
  pages: ReactNode[]
  bookColor: string
  bookHighlight: string
}

export default function PageFlip({ pages, bookColor }: PageFlipProps) {
  const { t } = useTranslation()
  const { isMobile } = useViewport()
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const totalPages = pages.length
  const canPrev = currentPage > 0
  const canNext = currentPage < totalPages - 1

  const goTo = (next: number, dir: 1 | -1) => {
    setDirection(dir)
    setCurrentPage(next)
  }

  const pageVariants = {
    enter: (d: number) => ({ rotateY: d > 0 ? 90 : -90, opacity: 0 }),
    center: { rotateY: 0, opacity: 1 },
    exit: (d: number) => ({ rotateY: d > 0 ? -90 : 90, opacity: 0 }),
  }

  return (
    <div className="flex flex-col h-full" style={{ flex: 1, minHeight: 0, minWidth: 0 }}>
      <div
        className="book-perspective"
        style={{ flex: 1, minHeight: 0, position: 'relative', overflow: 'hidden' }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}
          >
            <div
              className="book-scroll"
              style={{
                height: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: isMobile ? '20px 16px 28px' : '40px 48px',
                color: '#2a1d13',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {pages[currentPage]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            padding: isMobile ? '10px 12px' : '12px 24px 16px',
            paddingBottom: isMobile
              ? 'max(10px, env(safe-area-inset-bottom, 0px))'
              : '16px',
            borderTop: '1px solid rgba(92,58,30,0.3)',
            background: 'rgba(232,213,163,0.4)',
            flexShrink: 0,
          }}
        >
          <motion.button
            onClick={() => canPrev && goTo(currentPage - 1, -1)}
            disabled={!canPrev}
            whileHover={canPrev ? { x: -2 } : {}}
            whileTap={canPrev ? { scale: 0.95 } : {}}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              color: canPrev ? bookColor : 'rgba(92,58,30,0.35)',
              background: 'none',
              border: 'none',
              cursor: canPrev ? 'pointer' : 'default',
              letterSpacing: '0.05em',
              padding: isMobile ? '8px 4px' : '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              minWidth: isMobile ? 72 : undefined,
            }}
          >
            {`<- ${t('ui.prev')}`}
          </motion.button>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: isMobile ? '0.74rem' : '0.84rem',
              color: 'rgba(92,58,30,0.6)',
              letterSpacing: '0.08em',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            {`${t('ui.page')} ${currentPage + 1} ${t('ui.of')} ${totalPages}`}
          </span>

          <motion.button
            onClick={() => canNext && goTo(currentPage + 1, 1)}
            disabled={!canNext}
            whileHover={canNext ? { x: 2 } : {}}
            whileTap={canNext ? { scale: 0.95 } : {}}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              color: canNext ? bookColor : 'rgba(92,58,30,0.35)',
              background: 'none',
              border: 'none',
              cursor: canNext ? 'pointer' : 'default',
              letterSpacing: '0.05em',
              padding: isMobile ? '8px 4px' : '4px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '6px',
              minWidth: isMobile ? 72 : undefined,
            }}
          >
            {`${t('ui.next')} ->`}
          </motion.button>
        </div>
      )}
    </div>
  )
}
