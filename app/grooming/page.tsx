import type { Metadata } from 'next'
import { GroomHero } from '@/components/grooming/GroomHero'
import { GroomPackages } from '@/components/grooming/GroomPackages'
import { GroomAdvice, GroomProtocol } from '@/components/grooming/ProtocolAndAdvice'
import { GroomCTA, GroomStory } from '@/components/grooming/GroomSections'
import { FaqAccordion } from '@/components/pages/FaqAccordion'
import { PageAnimations } from '@/components/pages/PageAnimations'
import { groomFaqs } from '@/lib/grooming-data'

export const metadata: Metadata = {
  title: 'Doorstep Pet Grooming at Home | The Paws Friend',
  description: 'Professional doorstep dog and cat grooming across Delhi NCR and Lucknow: herbal baths, breed haircuts, anti-tick treatments and more, from ₹899.',
}

export default function GroomingPage() {
  return (
    <>
      <main>
        <GroomHero />
        <GroomPackages />
        <GroomStory />
        <GroomProtocol />
        <GroomAdvice />
        <section id="faqs" className="bg-ivory py-14 md:py-20 lg:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div data-reveal className="lg:col-span-5">
              <p className="label">Grooming FAQs</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Good questions.<br /><em>Honest answers.</em></h2>
            </div>
            <div className="lg:col-span-7"><FaqAccordion items={groomFaqs} /></div>
          </div>
        </section>
        <GroomCTA />
      </main>
      <PageAnimations />
    </>
  )
}
