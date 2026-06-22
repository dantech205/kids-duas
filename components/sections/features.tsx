'use client'

import { useEffect, useRef, useState } from 'react'
import { BookOpen, Users, Package, Heart } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Content',
    description: 'Fun and engaging Islamic learning videos designed for children and families.',
  },
  {
    icon: Users,
    title: 'Live Experiences',
    description: 'School programmes, community events, family festivals, and interactive learning sessions that bring faith to life.',
  },
  {
    icon: Package,
    title: 'Products',
    description: 'Thoughtfully designed tools that help children build positive habits and practise what they learn.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Supporting parents, educators, and caregivers raising the next generation with faith and intention.',
  },
]

export default function Features() {
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
      id="what-we-do"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background to-secondary/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-center text-balance mb-4">
            What We Do
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Kid Dua Love offers four pillars of Islamic learning experiences
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20 transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all group-hover:animate-pulse-slow">
                        <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Embedded YouTube Video */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20 bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/978rC_OcOhU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
