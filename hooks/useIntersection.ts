import { useEffect, useRef, useState } from 'react'

export function useIntersection(threshold: number = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isIntersecting, visible: isIntersecting }
}
