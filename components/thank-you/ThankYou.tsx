'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IconArrowUpRight, IconBrandWhatsapp, IconCheck, IconClock, IconPawFilled, IconPhone, IconStethoscope } from '@tabler/icons-react'
import { EMERGENCY_PHONE, HOURS, PHONE, PHONE_HREF, WHATSAPP } from '@/lib/content'
import type { LeadType } from '@/lib/lead'
import { THANKS_KEY } from '@/lib/use-lead-form'

type Info = { type: LeadType; name: string; city: string; at: number }

const WINDOW = 30 * 60 * 1000 // a submission counts for 30 min, so a refresh still works

const COPY: Record<LeadType, string> = {
  'home-visit': 'home visit request',
  booking: 'booking request',
  'training-demo': 'free dog-training demo request',
  contact: 'message',
}

const steps = [
  ['We got your details', 'Your request is with our care team right now.'],
  ['A call within 15 minutes', 'An expert calls to understand your pet and confirm the plan, time and price.'],
  ['Care at your doorstep', 'A certified professional visits you at home. No advance payment.'],
]

const explore = [['Veterinary care', '/veterinary'], ['Home grooming', '/grooming'], ['Dog training', '/dog-training'], ['Packages', '/packages']]

export function ThankYou() {
  const router = useRouter()
  const [info, setInfo] = useState<Info | null>(null)

  useEffect(() => {
    let found: Info | null = null
    try {
      const raw = sessionStorage.getItem(THANKS_KEY)
      const parsed = raw ? (JSON.parse(raw) as Info) : null
      if (parsed && Date.now() - parsed.at < WINDOW) found = parsed
    } catch { /* ignore */ }
    if (found) setInfo(found)
    else router.replace('/') // nobody submitted a form: this page is not for direct visits
  }, [router])

  if (!info) return <main className="min-h-[70vh] bg-ivory" aria-busy="true" />

  return (
    <main className="relative overflow-hidden bg-ivory pb-16 pt-12 md:pt-16 lg:pb-24">
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[360px] rounded-full border border-brand/20" />
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 size-[200px] rounded-full border border-brand/15" />

      <div className="wrap relative max-w-4xl">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-brand text-white shadow-[0_20px_40px_-18px_#d94710] [animation:fadeUp_.6s_ease-out]">
          <IconCheck size={40} stroke={2.5} />
        </div>

        <div className="mt-8 text-center [animation:fadeUp_.7s_.1s_ease-out_both]">
          <p className="label justify-center">Request received</p>
          <h1 className="display mt-4 text-[clamp(2.4rem,6.4vw,4.6rem)]">
            Thank you{info.name ? `, ${info.name}` : ''}.<br /><em>We’ll call you soon.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted">
            Your {COPY[info.type]}{info.city ? ` for ${info.city}` : ''} has reached us. A care expert will reach out within 15 minutes during working hours ({HOURS}).
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3 [animation:fadeUp_.7s_.2s_ease-out_both]">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative rounded-[14px] border border-line bg-paper p-6">
              <span className="text-[30px] font-extrabold leading-none text-brand">0{i + 1}</span>
              <p className="mt-3 text-[17px] font-extrabold tracking-tight">{t}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-[14px] bg-charcoal p-6 text-white sm:p-8 [animation:fadeUp_.7s_.3s_ease-out_both]">
          <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#f4a37f]"><IconClock size={15} stroke={2} /> Can’t wait?</p>
          <p className="mt-2 text-[clamp(1.3rem,3vw,1.8rem)] font-extrabold leading-tight tracking-tight">Reach us right now.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn btn-brand"><IconPhone size={16} stroke={1.75} /> {PHONE}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={17} stroke={1.75} /> WhatsApp</a>
          </div>
          <p className="mt-5 flex items-start gap-2 text-[12.5px] leading-snug text-white/65"><IconStethoscope size={16} stroke={1.75} className="mt-px shrink-0 text-[#f4a37f]" /> Pet emergency? Call our emergency line {EMERGENCY_PHONE} immediately.</p>
        </div>

        <div className="mt-12 text-center [animation:fadeUp_.7s_.4s_ease-out_both]">
          <p className="label justify-center"><IconPawFilled size={13} className="-ml-1" /> While you wait</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {explore.map(([l, h]) => <li key={h}><Link href={h} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-4 py-2.5 text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand">{l} <IconArrowUpRight size={14} stroke={2} /></Link></li>)}
          </ul>
          <Link href="/" className="tlink mt-8 text-[13px]">Back to home <IconArrowUpRight size={15} stroke={2} /></Link>
        </div>
      </div>
    </main>
  )
}
