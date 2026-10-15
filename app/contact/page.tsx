import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactCTA, ContactDetails, EmergencyBanner, ServiceArea, TrustStats, WorkingHours } from '@/components/contact/ContactSections'
import { PageAnimations } from '@/components/pages/PageAnimations'

export const metadata: Metadata = {
  title: 'Contact The Paws Friend | Call, WhatsApp or Visit Us',
  description: 'Talk to our team about doorstep vet care, grooming, training and packages. Call +91 9211338489 — emergency line +91 9211338488, 24/7.',
}

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactDetails />
        <ServiceArea />
        <WorkingHours />
        <ContactForm />
        <EmergencyBanner />
        <ContactCTA />
        <TrustStats />
      </main>
      <PageAnimations />
    </>
  )
}
