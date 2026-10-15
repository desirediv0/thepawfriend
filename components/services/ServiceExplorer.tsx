'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  IconAmbulance, IconArrowUpRight, IconClock, IconFlame, IconHomeCheck, IconMicroscope, IconPaw, IconScissors, IconSchool, IconSearch, IconStethoscope, type Icon,
} from '@tabler/icons-react'
import { BookLink, WhatsAppLink, waHref } from '@/components/pages/bits'
import { inr } from '@/lib/vet-data'
import { featuredServiceIds, serviceCategories, services, type Service, type ServiceGroup } from '@/lib/services-data'

const groupIcon: Record<'All Services' | ServiceGroup, Icon> = {
  'All Services': IconPaw, 'Veterinary Care': IconStethoscope, 'Lab Tests & Kits': IconMicroscope, 'Grooming & Spa': IconScissors, 'Training & Obedience': IconSchool, 'Emergency & Boarding': IconAmbulance,
}
const featImg: Record<string, { src: string; pos: string }> = {
  consult: { src: '/photos/vet-hero.jpg', pos: '50% 35%' },
  full: { src: '/photos/groom-hero.jpg', pos: '50% 30%' },
  puppy: { src: '/photos/tr-hero.jpg', pos: '45% 40%' },
}

const priceText = (s: Service) => (s.price === null ? s.priceLabel! : inr(s.price))
const bookService = (s: Service) =>
  s.group === 'Grooming & Spa' ? 'Grooming' : s.group === 'Training & Obedience' ? 'Dog Training' : s.group === 'Emergency & Boarding' ? 'Services' : 'Veterinary'

function Badges({ s }: { s: Service }) {
  return (
    <span className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em]">
      <span className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-muted"><IconHomeCheck size={13} stroke={1.75} className="text-brand" /> Doorstep</span>
      {s.popular && <span className="flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-white"><IconFlame size={13} stroke={2} /> Popular</span>}
    </span>
  )
}

function Cta({ s }: { s: Service }) {
  const external = s.href.startsWith('tel:')
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {external ? <a href={s.href} className="btn btn-brand !min-h-[42px] !px-5 text-[12.5px]">Call helpline</a> : <BookLink service={bookService(s)} pkg={s.name} />}
      <WhatsAppLink message={`Hi, I would like to book: ${s.name} (${priceText(s)}) — The Paws Friend.`} label="Book on WhatsApp" />
      {external ? null : <Link href={s.href} className="tlink text-[12.5px]">Explore details <IconArrowUpRight size={15} stroke={2} /></Link>}
    </div>
  )
}

export function ServiceExplorer() {
  const [cat, setCat] = useState<'All Services' | ServiceGroup>('All Services')
  const [q, setQ] = useState('')
  const term = q.trim().toLowerCase()
  const browsing = cat === 'All Services' && !term

  const list = useMemo(
    () => services.filter((s) => (cat === 'All Services' || s.group === cat) && (!term || `${s.name} ${s.group} ${s.text}`.toLowerCase().includes(term))),
    [cat, term],
  )
  const featured = featuredServiceIds.map((id) => services.find((s) => s.id === id)!)
  const rows = browsing ? list.filter((s) => !(featuredServiceIds as readonly string[]).includes(s.id)) : list

  return (
    <section id="catalogue" className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Service catalogue</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">What does your pet<br /><em>need today?</em></h2>
        </div>

        <label className="relative mt-10 block">
          <span className="sr-only">What does your pet need today?</span>
          <IconSearch size={22} stroke={1.5} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-brand" />
          <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Search veterinary care, grooming, training..." className="h-16 w-full rounded-[14px] border border-ink/80 bg-white pl-14 pr-5 text-[16px] font-medium outline-none transition-[box-shadow,border-color] placeholder:text-[#9b9187] focus:border-brand focus:ring-4 focus:ring-brand/15" />
        </label>

        <div role="tablist" aria-label="Service categories" className="no-scrollbar -mx-4 mt-6 flex gap-1 overflow-x-auto border-b border-line px-4 sm:mx-0 sm:px-0">
          {serviceCategories.map((c) => {
            const Ic = groupIcon[c]
            const on = cat === c
            return (
              <button key={c} role="tab" aria-selected={on} onClick={() => setCat(c)} className={`relative flex shrink-0 items-center gap-2 px-4 py-3.5 text-[13px] font-bold transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                <Ic size={17} stroke={1.5} className={on ? 'text-brand' : ''} />{c}
                <span aria-hidden className={`absolute inset-x-3 -bottom-px h-[2px] origin-left bg-brand transition-transform duration-300 ${on ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-[12px] font-semibold text-muted" aria-live="polite">{list.length} {list.length === 1 ? 'service' : 'services'}</p>

        {browsing && (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featured.map((s) => {
              const im = featImg[s.id]
              return (
                <article key={s.id} className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-ivory">
                  <div className="relative aspect-[4/3.4] overflow-hidden">
                    <Image src={im.src} alt={s.name} fill sizes="(min-width:768px) 33vw, 100vw" loading="lazy" style={{ objectPosition: im.pos }} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute left-4 top-4"><Badges s={s} /></div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{s.group}</p>
                    <h3 className="mt-2 text-[24px] font-extrabold leading-tight tracking-tight">{s.name}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.text}</p>
                    <p className="mt-5 flex items-baseline gap-3"><span className="text-[42px] font-extrabold leading-none tracking-[-.045em]">{priceText(s)}</span><span className="flex items-center gap-1.5 text-[12px] text-muted"><IconClock size={14} stroke={1.75} />{s.duration}</span></p>
                    <div className="mt-auto pt-6"><Cta s={s} /></div>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {rows.length > 0 ? (
          <ul className="mt-8 border-t border-ink/80">
            {rows.map((s) => {
              const Ic = groupIcon[s.group]
              return (
                <li key={s.id} className="grid items-center gap-x-8 gap-y-3 border-b border-line py-6 lg:grid-cols-[1.5fr_1.4fr_auto_auto]">
                  <div>
                    <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand"><Ic size={16} stroke={1.5} />{s.group}</p>
                    <h3 className="mt-1.5 text-[19px] font-extrabold leading-tight tracking-tight">{s.name}</h3>
                    <div className="mt-2"><Badges s={s} /></div>
                  </div>
                  <p className="text-[13.5px] leading-snug text-muted">{s.text}</p>
                  <p className="lg:text-right"><span className="block text-[28px] font-extrabold leading-none tracking-[-.04em]">{priceText(s)}</span><span className="mt-1 flex items-center gap-1.5 text-[11.5px] text-muted lg:justify-end"><IconClock size={13} stroke={1.75} />{s.duration}</span></p>
                  <Cta s={s} />
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="mt-10 border-t border-line py-10 text-[15px] text-muted">No service matches “{q}”. Try “vaccination”, “grooming” or “training” — or <a className="font-bold text-brand underline" href={`${waHref('Hi, I need help choosing a service.')}`}>ask us on WhatsApp</a>.</p>
        )}
      </div>
    </section>
  )
}
