import type { Metadata } from 'next'
import { EMAIL, PHONE } from '@/lib/content'

export const metadata: Metadata = { title: 'Privacy Policy | The Paws Friend', description: 'How The Paws Friend collects and uses your information.' }

const sections = [
  ['Information we collect', 'When you fill in a booking or contact form we collect your name, mobile number, city, your pet’s details and any notes you add. We use it only to respond to your request.'],
  ['How we use it', 'We use your details to call or message you about your enquiry, schedule visits and improve our service. We do not sell your information.'],
  ['Sharing', 'Your details are shared only with the care professionals assigned to your visit and service providers that help us run the website (for example email delivery), and when required by law.'],
  ['Your choices', `You can ask us to correct or delete your information at any time by writing to ${EMAIL} or calling ${PHONE}.`],
]

export default function PrivacyPage() {
  return (
    <main className="bg-ivory py-12 md:py-16 lg:pb-24">
      <div className="wrap max-w-3xl">
        <p className="label">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5.6vw,4.2rem)]">Privacy <em>Policy.</em></h1>
        <p className="mt-4 text-[13px] text-muted">Last updated: October 2026</p>
        <div className="mt-8 space-y-7">
          {sections.map(([t, d]) => <section key={t}><h2 className="text-[19px] font-extrabold tracking-tight">{t}</h2><p className="mt-2 text-[14.5px] leading-relaxed text-muted">{d}</p></section>)}
        </div>
      </div>
    </main>
  )
}
