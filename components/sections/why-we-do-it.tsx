'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, BookOpen, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'We are Human-Led',
    description: 'We believe children learn best through people. That&apos;s why our content is led by humans who guide, encourage, and inspire meaningful learning.',
  },
  {
    icon: BookOpen,
    title: 'We are Faith-Based',
    description: 'Every lesson, story, and challenge is designed to help children build a stronger understanding of Islam and its values.',
  },
  {
    icon: Zap,
    title: 'We are Built for Practice',
    description: 'From good deed challenges to products like the Ihsan Jar, our learning goes beyond the screen. We create opportunities for children to turn every learning into action.',
  },
]

export default function WhyWeDoit() {
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
      id="our-story"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background to-secondary/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-balance">
              Why We Do It
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
              Today&apos;s children are growing up in a digital-first world and they deserve meaningful learning that helps them understand their faith and apply it in everyday life. Engaging. Fun. Balanced screen time. We are different.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className={`group rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-secondary/20 transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all group-hover:animate-pulse-slow">
                      <Icon className="h-8 w-8 text-secondary group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center pt-12 border-t-2 border-secondary/20">
            <p className="text-3xl md:text-4xl font-bold text-secondary text-balance">
              We are KDL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
