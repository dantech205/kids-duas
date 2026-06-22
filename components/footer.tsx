'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Heart, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-primary/20 text-foreground py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KID%20DUA%20LOVE%20official%20logo.PNG-7Olu6otpa5NzoZJy7p5I7RIL0eXPZ7.png"
                  alt="Kid Dua Love Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
            </Link>
            <p className="text-foreground/70">
              Trusted, human-led Islamic learning for children.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-primary transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#what-we-do"
                  className="text-foreground/70 hover:text-primary transition duration-300"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#our-story"
                  className="text-foreground/70 hover:text-primary transition duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-foreground/70 hover:text-primary transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="text-foreground/70 hover:text-primary transition duration-300"
                >
                  Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact & Follow</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60 mb-2">Email us anytime:</p>
                <a
                  href="mailto:salam@kiddualove.com"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary font-medium transition duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-2 group-hover:underline">salam@kiddualove.com</span>
                </a>
              </div>

              <div>
                <p className="text-sm text-foreground/60 mb-2">Call us:</p>
                <a
                  href="tel:+15551234567"
                  className="text-foreground/80 hover:text-primary font-medium transition duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <p className="text-sm text-foreground/60 mb-2">Follow us on social:</p>
                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/kid_dua_love"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    title="Follow on Instagram"
                  >
                    <Heart className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@kid_dua_love"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                    title="Follow on TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@kiddualove"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-accent hover:text-foreground transition-all duration-300 transform hover:scale-110"
                    title="Subscribe on YouTube"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Kid Dua Love. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
