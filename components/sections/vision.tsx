'use client'

import { useEffect, useRef, useState } from 'react'

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-background rounded-3xl m-6 md:m-12 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'animate-scaleIn' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-balance mb-8">
            Where We&apos;re Headed
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance max-w-3xl mx-auto">
            To become the world&apos;s most trusted human-led Islamic learning brand for children. We are building a future where children everywhere can access high-quality Islamic learning experiences that strengthen faith, nurture character, and inspire action.
          </p>
        </div>
      </div>
    </section>
  )
}
