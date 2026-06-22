'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/sections/hero'
import TrustStatement from '@/components/sections/trust-statement'
import Features from '@/components/sections/features'
import OnTour from '@/components/sections/on-tour'
import WhyWeDoit from '@/components/sections/why-we-do-it'
import IhsanJar from '@/components/sections/ihsan-jar'
import Vision from '@/components/sections/vision'
import Testimonials from '@/components/sections/testimonials'
import PartnerWithUs from '@/components/sections/partner-with-us'
import Contact from '@/components/sections/contact'
import FinalCTA from '@/components/sections/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustStatement />
      <Features />
      <OnTour />
      <WhyWeDoit />
      <IhsanJar />
      <Vision />
      <Testimonials />
      <PartnerWithUs />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
