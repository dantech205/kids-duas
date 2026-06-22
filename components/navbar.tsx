'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm font-medium text-foreground transition hover:text-primary"
  >
    {label}
  </a>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KID%20DUA%20LOVE%20official%20logo.PNG-7Olu6otpa5NzoZJy7p5I7RIL0eXPZ7.png"
              alt="Kid Dua Love Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home" label="Home" />
            <NavLink href="#what-we-do" label="What We Do" />
            <NavLink href="#our-story" label="Our Story" />
            <NavLink href="#products" label="Products" />
            <NavLink href="#partner" label="Partner" />
            <NavLink href="#contact" label="Contact" />
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="https://mailchi.mp/turtleandbloom/kid-dua-love-newsletter" target="_blank" rel="noopener noreferrer">
              <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full">
                Join Our Community
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white py-4 px-4 space-y-3">
            <NavLink href="#home" label="Home" />
            <NavLink href="#what-we-do" label="What We Do" />
            <NavLink href="#our-story" label="Our Story" />
            <NavLink href="#products" label="Products" />
            <NavLink href="#partner" label="Partner" />
            <NavLink href="#contact" label="Contact" />
            <a href="https://mailchi.mp/turtleandbloom/kid-dua-love-newsletter" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Join Our Community
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
