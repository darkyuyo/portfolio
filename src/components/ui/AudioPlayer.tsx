import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3')
    audio.loop = true
    audio.volume = 0.2
    audioRef.current = audio
    return () => {
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      void audio.play().catch(() => undefined)
    }
    setPlaying((prev) => !prev)
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={playing ? 'Pause ambient music' : 'Play ambient music'}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 30,
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: playing ? 'rgba(201,162,39,0.18)' : 'rgba(26,18,8,0.75)',
        border: `1px solid ${playing ? 'rgba(201,162,39,0.55)' : 'rgba(201,162,39,0.25)'}`,
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: 'var(--color-gold-accent)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      }}
    >
      {playing ? '♫' : '♪'}
    </motion.button>
  )
}
