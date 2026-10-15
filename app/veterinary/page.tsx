import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/pages/FaqAccordion'
import { PageAnimations } from '@/components/pages/PageAnimations'
import { ProtocolIndex, VetAdvice } from '@/components/veterinary/ProtocolAndAdvice'
import { VetHero } from '@/components/veterinary/VetHero'
import { Diagnostics, RapidTests, Vaccination, VetCTA } from '@/components/veterinary/VetSections'
import { VetServices } from '@/components/veterinary/VetServices'
import { vetFaqs } from '@/lib/vet-data'

export const metadata: Metadata = {
  title: 'Veterinary Services & Diagnostics at Home | The Paws Friend',
  description: 'Certified vet doctors for home visits @ ₹499, blood tests, 10-minute rapid kits and cold-chain vaccines at your doorstep in Delhi NCR and Lucknow.',
}

export default function VeterinaryPage() {
  return (
    <>
      <main>
        <VetHero />
        <VetServices />
        <Diagnostics />
        <RapidTests />
        <Vaccination />
        <ProtocolIndex />
        <VetAdvice />
        <section id="faqs" className="bg-paper py-14 md:py-20 lg:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div data-reveal className="lg:col-span-5">
              <p className="label">Vaccination FAQs</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Good questions.<br /><em>Honest answers.</em></h2>
            </div>
            <div className="lg:col-span-7"><FaqAccordion items={vetFaqs} /></div>
          </div>
        </section>
        <VetCTA />
      </main>
      <PageAnimations />
    </>
  )
}
