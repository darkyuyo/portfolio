import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

const IconPlay = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <polygon points="5,3 19,12 5,21"/>
  </svg>
)

const IconPause = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <rect x="5" y="3" width="4" height="18" rx="1"/>
    <rect x="15" y="3" width="4" height="18" rx="1"/>
  </svg>
)

export default function AudioPlayer({ hidden }: { hidden?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)
  const [volume, setVolume] = useState(0.2)
  const isMobile = useIsMobile()

  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3')
    audio.loop = true
    audio.volume = 0.2
    audio.addEventListener('error', () => setAvailable(false))
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.volume = volume
  }, [volume])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setAvailable(false))
    }
  }

  if (!available || hidden) return null

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: isMobile ? '16px' : 'auto', right: isMobile ? 'auto' : '20px', zIndex: 30, display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(26,18,8,0.7)', padding: '8px', borderRadius: '999px', border: '1px solid rgba(201,162,39,0.18)', backdropFilter: 'blur(6px)', boxShadow: '0 6px 18px rgba(0,0,0,0.45)' }}>
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label={playing ? 'Pause ambient music' : 'Play ambient music'}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: playing ? 'rgba(201,162,39,0.18)' : 'transparent',
            border: `1px solid ${playing ? 'rgba(201,162,39,0.55)' : 'rgba(201,162,39,0.16)'}`,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gold-accent)',
          }}
        >
          {playing ? <IconPause /> : <IconPlay />}
        </motion.button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            aria-label="Volume"
            type="range"
            min={0}
            max={100}
            value={Math.round(volume * 100)}
            onChange={(e) => setVolume(Number(e.target.value) / 100)}
            style={{ width: isMobile ? '72px' : '110px', accentColor: 'var(--color-gold-accent)' }}
          />
        </div>
      </div>
    </div>
  )
}
