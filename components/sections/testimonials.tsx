'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mariam, Nigeria',
    quote: "Can't love this channel less. Alhamdullilah, may Almighty Allah keep strengthening the anchors of this program.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Rodhiya, Canada',
    quote: "The kids love this song so much! They sing it randomly now.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Amal, UAE',
    quote: "My 4-year old son absolutely loves KDL and he can't wait to meet Mama Zee!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Abdul, England',
    quote: "This is different and I love that Kid Dua Love is providing fresh content for Muslims across the world. I enjoy watching with my daughter.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Olamide, Nigeria',
    quote: "It's not just for the kids… even I find myself learning one or two things from the show.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Haleemah, Nigeria',
    quote: "The presenter looks so warm and makes the show much more engaging. The topics are also easy to understand",
    rating: 5,
  },
  {
    id: 7,
    name: 'Ms. Zainab, Nigeria',
    quote: "Kid Dua Love is a timeless program for kids and even adults. We love the colors and how the little pictures pop up when she's talking about something. Allahumma barik.",
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
