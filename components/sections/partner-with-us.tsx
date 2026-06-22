'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function PartnerWithUs() {
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
      id="partner"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`rounded-2xl bg-white p-8 md:p-12 shadow-xl border-2 border-primary/10 transform transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
            isVisible ? 'animate-scaleIn' : 'opacity-0 scale-95'
          }`}>
            <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-center text-balance mb-6">
              Come. Partner With Us.
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center text-balance mb-8">
              We work with schools, brands, educators, community organisations, and creators who share our commitment to helping children learn and grow. Whether you&apos;re interested in sponsorship, collaboration, events, or educational partnerships, we&apos;d love to hear from you.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a href="mailto:salam@kiddualove.com">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base font-semibold"
                >
                  Partner With Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
