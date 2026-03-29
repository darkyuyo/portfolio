import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const PARTICLE_COUNT = 18

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 10,
  }))
}

export default function Background() {
  const particles = useRef<Particle[]>(generateParticles())

  useEffect(() => {
    // Nothing needed – CSS handles animation
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* Base dark background */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--color-bg-library)' }}
      />

      {/* Warm radial glow from bottom center (lamp effect) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 110%, rgba(201,162,39,0.12) 0%, rgba(92,58,30,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(10,6,2,0.7) 100%)',
        }}
      />

      {/* Floating dust particles */}
      {particles.current.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
