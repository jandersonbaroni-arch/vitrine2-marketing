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

export function useCounter(end: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}
