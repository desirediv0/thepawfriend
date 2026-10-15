'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconBrandWhatsapp, IconPhone } from '@tabler/icons-react'
import { BookLink, SectionHead, WhatsAppLink, waHref } from '@/components/pages/bits'
import { PHONE, PHONE_HREF } from '@/lib/content'
import { comparisonTabs, services, type Service } from '@/lib/services-data'
import { inr } from '@/lib/vet-data'

const price = (s: Service) => (s.price === null ? s.priceLabel! : inr(s.price))
const bookService = (s: Service) => (s.group === 'Grooming & Spa' ? 'Grooming' : s.group === 'Training & Obedience' ? 'Dog Training' : 'Veterinary')

/* ---------- Compare options ---------- */
export function Compare() {
  const [tab, setTab] = useState<(typeof comparisonTabs)[number]['key']>('Training')
  const t = comparisonTabs.find((x) => x.key === tab)!
  const rows = services.filter((s) => t.groups.includes(s.group))

  return (
    <section id="compare" className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <SectionHead label="Compare options">Find your<br /><em>best fit.</em></SectionHead>
        <div role="tablist" aria-label="Compare by category" className="no-scrollbar -mx-4 mt-10 flex gap-1 overflow-x-auto border-b border-line px-4 sm:mx-0 sm:px-0">
          {comparisonTabs.map((x) => (
            <button key={x.key} role="tab" aria-selected={tab === x.key} onClick={() => setTab(x.key)} className={`relative shrink-0 px-5 py-3.5 text-[13.5px] font-bold transition-colors ${tab === x.key ? 'text-ink' : 'text-muted hover:text-ink'}`}>
              {x.label}
              <span aria-hidden className={`absolute inset-x-3 -bottom-px h-[2px] origin-left bg-brand transition-transform duration-300 ${tab === x.key ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>

        <table className="mt-6 hidden w-full text-left md:table">
          <caption className="sr-only">{t.label}</caption>
          <thead><tr className="border-b border-ink/80 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">
            <th scope="col" className="py-3 pr-4">Service</th><th scope="col" className="py-3 pr-4">Price</th><th scope="col" className="py-3 pr-4">Duration</th><th scope="col" className="py-3 pr-4">Best for</th><th scope="col" className="py-3 text-right">Action</th>
          </tr></thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className="border-b border-line align-top">
                <th scope="row" className="max-w-[240px] py-5 pr-4 text-[16px] font-extrabold leading-snug tracking-tight">{s.name}</th>
                <td className="whitespace-nowrap py-5 pr-4 text-[18px] font-extrabold tracking-tight">{price(s)}</td>
                <td className="whitespace-nowrap py-5 pr-4 text-[13px] text-muted">{s.duration}</td>
                <td className="max-w-[340px] py-5 pr-4 text-[13.5px] leading-snug text-muted">{s.text}</td>
                <td className="py-5 text-right"><BookLink service={bookService(s)} pkg={s.name} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">
          {rows.map((s) => (
            <li key={s.id} className="flex w-[82%] shrink-0 snap-start flex-col rounded-[16px] border border-line bg-paper p-5">
              <h3 className="text-[18px] font-extrabold leading-tight tracking-tight">{s.name}</h3>
              <p className="mt-3 text-[30px] font-extrabold leading-none tracking-[-.04em]">{price(s)}</p>
              <p className="mt-1 text-[12px] text-muted">{s.duration}</p>
              <p className="mt-3 text-[13px] leading-snug text-muted"><b className="text-ink">Best for:</b> {s.text}</p>
              <div className="mt-auto pt-5"><BookLink service={bookService(s)} pkg={s.name} /></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- Need help ---------- */
export function Help() {
  return (
    <section id="help" className="scroll-mt-24 bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-clip className="relative aspect-[3/2] overflow-hidden rounded-[24px] rounded-tl-[100px] lg:col-span-6">
          <Image src="/photos/sv-help.jpg" alt="Care coordinator chatting with a pet parent and her golden retriever at home" fill sizes="(min-width:1024px) 50vw, 100vw" loading="lazy" className="object-cover object-[50%_30%]" />
        </div>
        <div className="lg:col-span-6">
          <SectionHead label="We&apos;re here to help">Need help choosing the<br /><em>right service?</em></SectionHead>
          <p data-reveal className="mt-5 max-w-md text-[15.5px] leading-relaxed text-muted">Our veterinary and grooming coordinators are available to guide you based on your pet&apos;s age, breed and health needs.</p>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a href={waHref('Hi, I need help choosing the right service for my pet.')} target="_blank" rel="noopener noreferrer" className="btn btn-brand"><IconBrandWhatsapp size={18} stroke={1.75} /> Chat on WhatsApp</a>
            <a href={PHONE_HREF} className="btn btn-line"><IconPhone size={17} stroke={1.75} /> Call {PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
export function ServicesCTA() {
  return (
    <section className="on-dark bg-charcoal py-20 text-white lg:py-28">
      <div className="wrap">
        <h2 data-reveal className="display max-w-3xl text-[clamp(2.6rem,5.6vw,5.2rem)]">Ready to give your pet <em>the best care?</em></h2>
        <p data-reveal className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70">Book a doorstep visit today. Expert veterinary care delivered straight to your home — no travel, no stress.</p>
        <div data-reveal className="mt-9 flex flex-wrap gap-4">
          <Link href="/book?service=Services" className="btn btn-brand">Book a visit <IconArrowUpRight size={17} stroke={2} /></Link>
          <a href={waHref('Hi, I would like to book a visit with The Paws Friend.')} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp us</a>
        </div>
        <dl data-stagger className="mt-14 grid border-t border-white/20 sm:grid-cols-3">
          {[['5200+', 'Happy pet parents'], ['4.8 ★', 'Average rating'], ['6 Cities', 'Delhi · Gurgaon · Noida · Gr. Noida · Ghaziabad · Faridabad']].map(([v, l], i) => (
            <div key={l} className={`py-5 sm:px-8 sm:py-7 ${i ? 'border-t border-white/20 sm:border-l sm:border-t-0' : 'sm:pl-0'}`}>
              <dd className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-.04em]">{v}</dd>
              <dt className="mt-2 text-[11px] font-bold uppercase tracking-[.14em] text-white/60">{l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
