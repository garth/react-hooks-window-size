import { useState, useEffect } from 'react'

export const useWindowSize = (ssrWidth = 1280, ssrHeight = 1024): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== 'undefined'
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
    if (typeof window !== 'undefined') {
      const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }
  })

  return windowSize
}
