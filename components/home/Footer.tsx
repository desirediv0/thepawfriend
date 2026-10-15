import Image from 'next/image'
import Link from 'next/link'
import { IconBrandWhatsapp, IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import { locationHref } from '@/lib/locations-data'
import { cities,EMAIL, EMERGENCY_PHONE, HOURS, PHONE, PHONE_HREF, WHATSAPP } from '@/lib/content'

const col = 'text-[13px] text-white/65 transition-colors hover:text-white'
const head = 'mb-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#f4a37f]'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="wrap grid gap-10 border-t border-white/10 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={96} height={96} className="size-14 rounded-full" />
            <div><p className="text-[14px] font-extrabold tracking-[.12em]">THE PAWS FRIEND</p><p className="font-serif text-[17px] italic text-[#f08a5b]">Pawfectly devoted</p></div>
          </div>
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/60">Trusted doorstep veterinary and pet-care services across Delhi NCR and Lucknow.</p>
        </div>

        <nav aria-label="Services" className="md:col-span-2">
          <p className={head}>Services</p>
          <ul className="space-y-2.5">{[['Veterinary', '/veterinary'], ['Grooming', '/grooming'], ['Dog Training', '/dog-training'], ['All Services', '/services']].map(([l, h]) => <li key={l}><Link className={col} href={h}>{l}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company" className="md:col-span-2">
          <p className={head}>Company</p>
          <ul className="space-y-2.5">{[['Home', '/'], ['About', '/about'], ['Packages', '/packages'], ['Contact', '/contact'], ['How it works', '/#how-it-works'], ['Book a visit', '/book']].map(([l, h]) => <li key={l}><Link className={col} href={h}>{l}</Link></li>)}</ul>
        </nav>
        <div className="md:col-span-2">
          <p className={head}>Locations</p>
          <ul className="space-y-2.5">{cities.map((c) => <li key={c}><Link href={locationHref(c)} className={`${col} flex items-center gap-1.5`}><IconMapPin size={13} stroke={1.75} />{c}</Link></li>)}</ul>
        </div>
        <div id="contact" className="scroll-mt-28 md:col-span-2">
          <p className={head}>Support</p>
          <ul className="space-y-2.5">
            <li><a className={`${col} flex items-center gap-2`} href={PHONE_HREF}><IconPhone size={14} stroke={1.75} />{PHONE}</a></li>
            <li><a className={`${col} flex items-center gap-2`} href={`tel:${EMERGENCY_PHONE.replace(/\s/g, '')}`}><IconPhone size={14} stroke={1.75} />{EMERGENCY_PHONE}<span className="text-[10px] uppercase tracking-wider text-[#f4a37f]">SOS</span></a></li>
            <li><a className={`${col} flex items-center gap-2 break-all`} href={`mailto:${EMAIL}`}><IconMail size={14} stroke={1.75} className="shrink-0" />{EMAIL}</a></li>
            <li><a className={`${col} flex items-center gap-2`} href={WHATSAPP} target="_blank" rel="noopener noreferrer"><IconBrandWhatsapp size={14} stroke={1.75} />WhatsApp</a></li>
            <li className={`${col} flex items-center gap-2`}><IconClock size={14} stroke={1.75} />{HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5 text-[11px] text-white/45">
          <span>© 2026 The Paws Friend</span>
          <span>Delhi NCR · Lucknow</span>
          <span className="flex gap-5"><Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link><Link href="/terms" className="transition-colors hover:text-white">Terms</Link></span>
        </div>
      </div>
    </footer>
  )
}
