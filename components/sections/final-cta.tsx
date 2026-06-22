'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
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
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-quicksand text-5xl md:text-6xl font-bold text-foreground text-balance hover:text-primary transition-colors duration-300">
              Join the KDL Train
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              We are building more than content. Kid Dua Love is a trusted learning brand for the next generation. Subscribe to our YouTube channel, join our community, and help us inspire children to learn, love, and live Islam.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 flex-wrap">
              <a href="https://youtube.com/@kiddualove" target="_blank" rel="noopener noreferrer" className="transform transition-all hover:scale-110 hover:-translate-y-1">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Subscribe on YouTube
                </Button>
              </a>
              <a href="https://mailchi.mp/turtleandbloom/kid-dua-love-newsletter" target="_blank" rel="noopener noreferrer" className="transform transition-all hover:scale-110 hover:-translate-y-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-secondary text-secondary hover:bg-secondary/5 rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Join Our Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
