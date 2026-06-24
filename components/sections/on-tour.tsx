'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function OnTour() {
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

  const placeholders = [
    { id: 1, alt: 'School visit - children learning together' },
    { id: 2, alt: 'Interactive learning session with Mama Zee' },
    { id: 3, alt: 'KDL team engaging with children' },
    { id: 4, alt: 'Community learning event' },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-center text-balance mb-8">
            Kid Dua Love On Tour
          </h2>

          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
              One of the most powerful ways children engage with Kid Dua Love is through real-world experiences. We visit schools and learning spaces which allows children to meet Mama Zee and the KDL Team, learn interactively, take part in challenges, and carry learning with them for a long time. Every visit is designed to turn curiosity into lasting engagement.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {placeholders.map((item, index) => (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden shadow-lg bg-gray-200 aspect-square flex items-center justify-center border-4 border-primary/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Image
                  src={index === 0 
                    ? '/interativelearning.jpeg'
                    : index === 1
                    ? '/classroom.jpeg'
                    : index === 2
                    ? '/community.jpeg'
                    : '/ki duas.jpeg'
                  }
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white text-sm font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 text-base font-semibold"
              >
                Book a School Visit
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
