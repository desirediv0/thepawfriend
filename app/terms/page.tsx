import type { Metadata } from 'next'
import { EMAIL, PHONE } from '@/lib/content'

export const metadata: Metadata = { title: 'Terms of Service | The Paws Friend', description: 'Terms for using The Paws Friend website and booking our services.' }

const sections = [
  ['Our service', 'The Paws Friend arranges doorstep veterinary, grooming and training visits in Delhi NCR and Lucknow. A booking request on this site is an enquiry; a visit is confirmed once our team speaks with you.'],
  ['Pricing', 'Prices shown are starting prices and may vary by pet, breed and service. Our team will confirm the final price before your visit.'],
  ['Medical advice', 'Our vets provide care based on examination at your home. In an emergency, call our emergency line immediately rather than relying on the website.'],
  ['Cancellations', 'Please let us know as early as possible if you need to reschedule or cancel a visit.'],
  ['Contact', `Questions about these terms? Write to ${EMAIL} or call ${PHONE}.`],
]

export default function TermsPage() {
  return (
    <main className="bg-ivory py-12 md:py-16 lg:pb-24">
      <div className="wrap max-w-3xl">
        <p className="label">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5.6vw,4.2rem)]">Terms of <em>Service.</em></h1>
        <p className="mt-4 text-[13px] text-muted">Last updated: October 2026</p>
        <div className="mt-8 space-y-7">
          {sections.map(([t, d]) => <section key={t}><h2 className="text-[19px] font-extrabold tracking-tight">{t}</h2><p className="mt-2 text-[14.5px] leading-relaxed text-muted">{d}</p></section>)}
        </div>
      </div>
    </main>
  )
}
