import { useEffect, useRef } from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function ScrollFadeSection({ id, className = '', children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`fade-in ${className}`}>
      {children}
    </section>
  )
}
