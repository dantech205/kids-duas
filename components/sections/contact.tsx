import { Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">
                Keep in touch
              </p>
              <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                Get in touch with Kid Dua Love
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/70">
                Have questions, partnership ideas, or feedback? Reach out directly by email or phone, or send us a quick message through the contact form.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-lg shadow-slate-200/50">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="h-6 w-6" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <p className="text-foreground/70">salam@kiddualove.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-lg shadow-slate-200/50">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="h-6 w-6" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-white/95 p-8 shadow-2xl shadow-slate-300/40">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/90">
                  Contact form
                </p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Drop us a message
                </h3>
              </div>

              <form
                action="mailto:salam@kiddualove.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-foreground/80">
                    <span>Name</span>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm text-foreground/80">
                    <span>Email</span>
                    <input
                      type="email"
                      name="Email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      required
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-foreground/80">
                  <span>Message</span>
                  <textarea
                    name="Message"
                    rows={5}
                    placeholder="Tell us how we can help"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    required
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                    Send Message
                  </Button>
                  <p className="text-sm text-foreground/60">
                    This form opens your email client for direct delivery.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
