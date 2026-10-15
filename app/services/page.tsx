import type { Metadata } from 'next'
import { PageAnimations } from '@/components/pages/PageAnimations'
import { ServiceExplorer } from '@/components/services/ServiceExplorer'
import { ServicesHero } from '@/components/services/ServicesHero'
import { Compare, Help, ServicesCTA } from '@/components/services/ServicesBottom'

export const metadata: Metadata = {
  title: 'All Pet Care Services at Your Doorstep | The Paws Friend',
  description: 'Veterinary care, lab tests, grooming, dog training, emergency care and boarding — delivered at your doorstep across Delhi NCR and Lucknow.',
}

export default function ServicesPage() {
  return (
    <>
      <main>
        <ServicesHero />
        <ServiceExplorer />
        <Compare />
        <Help />
        <ServicesCTA />
      </main>
      <PageAnimations />
    </>
  )
}
