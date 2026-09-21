import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BOOKS, type Book } from '../../data/books'
import BookSpine, { BOOK_HEIGHT_MAP, SPINE_WIDTH_FACTOR } from '../book/BookSpine'
import { useViewport } from '../../hooks/useIsMobile'

type ShelfProps = {
  onBookClick: (bookId: string) => void
}

const BOOK_GAP = 4
const ROW_PADDING_X = 24
const PLANK_HEIGHT = 46
const ROW_GAP = 16

function WoodPlank() {
  return (
    <>
      <div
        style={{
          height: '6px',
          background: 'linear-gradient(180deg, var(--color-wood-light) 0%, var(--color-wood-medium) 100%)',
          borderRadius: '2px 2px 0 0',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.4)',
          position: 'relative',
          zIndex: 3,
        }}
      />
      <div
        style={{
          height: '28px',
          background: 'linear-gradient(180deg, var(--color-wood-medium) 0%, var(--color-wood-dark) 60%, #2a1d13 100%)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
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
    </>
  )
}

function ShelfRow({
  books,
  startIndex,
  onBookClick,
  widthScale,
  heightScale,
  rowPadX,
}: {
  books: Book[]
  startIndex: number
  onBookClick: (bookId: string) => void
  widthScale: number
  heightScale: number
  rowPadX: number
}) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: `${BOOK_GAP}px`,
          padding: `0 ${rowPadX}px`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {books.map((book, index) => (
          <BookSpine
            key={book.id}
            book={book}
            index={startIndex + index}
            onClick={() => onBookClick(book.id)}
            widthScale={widthScale}
            heightScale={heightScale}
          />
        ))}
      </div>
      <WoodPlank />
    </div>
  )
}

export default function Shelf({ onBookClick }: ShelfProps) {
  const { t } = useTranslation()
  const { width, height, isMobile, isShort } = useViewport()

  const twoRows = isMobile && !isShort
  const rows = twoRows
    ? [BOOKS.slice(0, 4), BOOKS.slice(4)]
    : [BOOKS]

  const padTop = isMobile ? 84 : 72
  const padBottom = isMobile ? 28 : 88
  const introSpace = isMobile ? 64 : 72
  const rowPadX = isMobile ? 10 : ROW_PADDING_X
  const availableW = Math.max(240, width - (isMobile ? 12 : 32))
  const availableH = Math.max(160, height - padTop - padBottom - introSpace)

  const spineSum = (books: Book[]) =>
    books.reduce((sum, book) => sum + book.spine.thickness * SPINE_WIDTH_FACTOR, 0)

  let widthScale = 1
  let heightScale = 1

  if (twoRows) {
    const maxSpineRow = Math.max(spineSum(rows[0]), spineSum(rows[1]))
    const gaps = BOOK_GAP * 3
    widthScale = Math.min(1, (availableW - rowPadX * 2 - gaps) / maxSpineRow)
    const booksBudget = availableH - PLANK_HEIGHT * 2 - ROW_GAP
    const tallSum =
      Math.max(...rows[0].map((book) => BOOK_HEIGHT_MAP[book.id] ?? 230)) +
      Math.max(...rows[1].map((book) => BOOK_HEIGHT_MAP[book.id] ?? 230))
    heightScale = Math.min(0.8, booksBudget / tallSum)
  } else {
    const gaps = BOOK_GAP * Math.max(0, BOOKS.length - 1)
    widthScale = Math.min(1, (availableW - rowPadX * 2 - gaps) / spineSum(BOOKS))
    const tallest = Math.max(...BOOKS.map((book) => BOOK_HEIGHT_MAP[book.id] ?? 230))
    const fitH = (availableH - PLANK_HEIGHT) / tallest
    heightScale = Math.min(1, isShort ? Math.min(fitH, 0.7) : fitH)
  }

  widthScale = Math.max(0.35, widthScale)
  heightScale = Math.max(0.38, heightScale)

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full"
      style={{
        zIndex: 1,
        position: 'relative',
        paddingTop: `max(${padTop}px, calc(env(safe-area-inset-top, 0px) + 56px))`,
        paddingBottom: `max(${padBottom}px, calc(env(safe-area-inset-bottom, 0px) + 64px))`,
        paddingLeft: 8,
        paddingRight: 8,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: isMobile ? 'clamp(0.85rem, 3.6vw, 1.05rem)' : '1.15rem',
          marginBottom: twoRows ? '1.35rem' : isMobile ? '1rem' : '2.5rem',
          letterSpacing: '0.02em',
          textAlign: 'center',
          padding: '0 12px',
          maxWidth: 640,
          lineHeight: 1.45,
        }}
      >
        {t('ui.intro')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: twoRows ? ROW_GAP : 0,
          maxWidth: '100%',
        }}
      >
        {rows.map((books, rowIndex) => (
          <ShelfRow
            key={rowIndex}
            books={books}
            startIndex={rowIndex === 0 ? 0 : rows[0].length}
            onBookClick={onBookClick}
            widthScale={widthScale}
            heightScale={heightScale}
            rowPadX={rowPadX}
          />
        ))}
      </motion.div>
    </div>
  )
}
