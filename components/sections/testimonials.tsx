'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Parent Name',
    quote: 'Kid Dua Love has transformed the way my children think about Islam. The content is engaging and the values are crystal clear.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Parent Name',
    quote: 'We love that the learning goes beyond screens. The Ihsan Jar has become part of our daily family routine, and my kids are so excited about their good deeds.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Parent Name',
    quote: 'As an educator, I appreciate the thoughtful approach to Islamic learning. Kid Dua Love truly makes a difference in children&apos;s lives.',
    rating: 5,
  },
]

export default function Testimonials() {
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
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-foreground text-center text-balance mb-8">
            Parents Like You Love KDL. You&apos;ll Love It Too.
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-accent/20 flex flex-col transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent hover:scale-125 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Name */}
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
