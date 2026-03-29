import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Background from './components/layout/Background'
import Shelf from './components/layout/Shelf'
import BookOpen from './components/book/BookOpen'
import LanguageToggle from './components/ui/LanguageToggle'
import AudioPlayer from './components/ui/AudioPlayer'

export default function App() {
  const [activeBook, setActiveBook] = useState<string | null>(null)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <Background />

      <LanguageToggle />
      <AudioPlayer />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'filter 0.35s, opacity 0.35s',
          filter: activeBook ? 'blur(2px)' : 'none',
          opacity: activeBook ? 0.4 : 1,
          pointerEvents: activeBook ? 'none' : 'auto',
        }}
      >
        <Shelf onBookClick={setActiveBook} />
      </div>

      <AnimatePresence>
        {activeBook && (
          <BookOpen
            key={activeBook}
            bookId={activeBook}
            onClose={() => setActiveBook(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
