import { useState, useEffect } from 'react'

export const useWindowSize = (ssrWidth = 1280, ssrHeight = 1024): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState(() =>
    window
      ? {
          width: window.innerWidth,
          height: window.innerHeight
        }
      : {
          width: ssrWidth,
          height: ssrHeight
        }
  )

  useEffect(() => {
    if (window) {
      const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }
  })

  return windowSize
}
