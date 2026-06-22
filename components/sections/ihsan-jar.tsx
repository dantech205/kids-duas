'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function IhsanJar() {
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
      id="products"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className={`order-2 lg:order-1 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center border-4 border-primary/20 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9182025_45745-NyUr3FbP00VJaXjZcY5aSOz7SASyNH.webp"
                  alt="The Ihsan Jar - Good deeds jar for children with rainbow"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Product Description */}
            <div className={`order-1 lg:order-2 space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <h2 className="font-quicksand text-5xl md:text-6xl font-bold text-foreground text-balance">
                The Ihsan Jar
              </h2>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
                A simple way to help children build the habit of doing good deeds. Every time your child performs a good deed, they write it down, roll it up, and place it inside their Ihsan Jar. Over time, the jar becomes a beautiful reminder that even small acts of kindness matter.
              </p>

              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-2xl font-bold">✓</span>
                  <span>Encourages daily good deeds and positive habits</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-2xl font-bold">✓</span>
                  <span>Beautifully designed with Islamic motifs and playful aesthetics</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-2xl font-bold">✓</span>
                  <span>Perfect for family activities and reflection</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-2xl font-bold">✓</span>
                  <span>Turns screen time learning into real-world practice</span>
                </li>
              </ul>

              <a href="mailto:salam@kiddualove.com">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-foreground rounded-full px-8 text-base font-semibold"
                >
                  Get Your Ihsan Jar Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
