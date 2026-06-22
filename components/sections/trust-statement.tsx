'use client'

import { useEffect, useRef, useState } from 'react'

export default function TrustStatement() {
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
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-center text-balance mb-8">
            Trusted by Parents. Loved by All.
          </h2>

          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
              In a world filled with endless content, finding Islamic learning you can trust shouldn&apos;t be difficult. Kid Dua Love creates human-led educational experiences that help children build faith, character, and confidence through stories, lessons, challenges, products, and community engagement.
            </p>

            <div className="pt-8 border-t-2 border-primary/20">
              <p className="text-2xl md:text-3xl font-bold text-primary text-balance">
                Real People. Real Content. Real Connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
