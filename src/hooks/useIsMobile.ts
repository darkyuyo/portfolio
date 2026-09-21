import { useEffect, useState } from 'react'

export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024

type Viewport = {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isShort: boolean
}

function readViewport(): Viewport {
  const width = window.innerWidth
  const height = window.innerHeight
  return {
    width,
    height,
    isMobile: width < MOBILE_BREAKPOINT,
    isTablet: width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT,
    isShort: height < 560,
  }
}

export function useViewport() {
  const [viewport, setViewport] = useState<Viewport>(readViewport)

  useEffect(() => {
    const onResize = () => setViewport(readViewport())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return viewport
}

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])

  return isMobile
}
