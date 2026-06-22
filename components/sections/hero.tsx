'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/20 via-background to-background pt-20 md:pt-32"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kid2-cdmMvuBL8qneXWXecPfXe2aKdgQdjx.jpeg"
          alt="Kid Dua Love - Happy child making heart gesture"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Content */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="font-quicksand text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Trusted, human-led Islamic learning for children
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance max-w-2xl mx-auto">
              Helping children learn, understand, and practise Islam through trusted content, meaningful experiences, and everyday habits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="https://youtube.com/@kiddualove" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base font-semibold"
                >
                  Watch on YouTube
                </Button>
              </a>
              <a href="https://mailchi.mp/turtleandbloom/kid-dua-love-newsletter" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 text-base font-semibold"
                >
                  Join Our Community
                </Button>
              </a>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-primary/20 hover:shadow-3xl transition-shadow duration-300" style={{ pointerEvents: 'none' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CTGIkgFUHyg?rel=0&modestbranding=1&color=white&fs=0"
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
                style={{ pointerEvents: 'auto' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
