'use client'

import { useMemo, useState } from 'react'
import {
  IconCheck, IconFlask, IconHeartbeat, IconMicroscope, IconSearch, IconStethoscope, IconVaccine, IconPaw, type Icon,
} from '@tabler/icons-react'
import { BookLink, WhatsAppLink } from '@/components/pages/bits'
import { inr, vetCategories, vetServices, type VetCategory, type VetService } from '@/lib/vet-data'

const catIcon: Record<'All' | VetCategory, Icon> = {
  All: IconPaw, 'Vet Visit': IconStethoscope, 'Blood Test': IconMicroscope, 'Vaccine Package': IconVaccine, 'Single Vaccine': IconFlask,
}
const catLabel: Record<VetCategory, string> = { 'Vet Visit': 'Vet visit', 'Blood Test': 'Blood test', 'Vaccine Package': 'Vaccine package', 'Single Vaccine': 'Single shot' }

function Price({ s }: { s: VetService }) {
  return (
    <div className="flex items-baseline gap-2.5">
      <span className="text-[34px] font-extrabold leading-none tracking-[-.04em]">{inr(s.price)}</span>
      <s className="text-[14px] text-muted">{inr(s.oldPrice)}</s>
      <span className="rounded-[3px] bg-brand/10 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[.1em] text-brand">Save {inr(s.oldPrice - s.price)}</span>
    </div>
  )
}

function Actions({ s }: { s: VetService }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <BookLink service="Veterinary" pkg={s.name} />
      <WhatsAppLink message={`Hi, I would like to book: ${s.name} (${inr(s.price)}) — Veterinary, The Paws Friend.`} />
    </div>
  )
}

function Row({ s }: { s: VetService }) {
  const Ic = catIcon[s.category]
  return (
    <article className="flex h-full flex-col border-t border-ink/80 pt-5">
      <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand"><Ic size={16} stroke={1.5} /> {catLabel[s.category]}</p>
      <h3 className="mt-3 text-[20px] font-extrabold leading-tight tracking-tight">{s.name}</h3>
      <ul className="mt-4 space-y-2 text-[13.5px] leading-snug text-muted">
        {s.points.slice(0, 4).map((p) => <li key={p} className="flex gap-2.5"><IconCheck size={15} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
      </ul>
      {s.schedule && (
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[.1em] text-ink/70">{s.schedule.length}-step schedule · {s.schedule[0].day} → {s.schedule[s.schedule.length - 1].day}</p>
      )}
      <div className="mt-auto space-y-4 pt-6"><Price s={s} /><Actions s={s} /></div>
    </article>
  )
}

export function VetServices() {
  const [cat, setCat] = useState<'All' | VetCategory>('All')
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    const term = q.trim().toLowerCase()
    return vetServices.filter((s) => (cat === 'All' || s.category === cat) && (!term || `${s.name} ${s.category} ${s.points.join(' ')}`.toLowerCase().includes(term)))
  }, [cat, q])

  const featured = list.find((s) => s.id === 'vet-visit')
  const rest = list.filter((s) => s.id !== 'vet-visit')

  return (
    <section id="services" className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Services &amp; pricing</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Every veterinary service,<br /><em>delivered at home.</em></h2>
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div role="tablist" aria-label="Service categories" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto border-b border-line px-4 sm:mx-0 sm:px-0">
            {vetCategories.map((c) => {
              const Ic = catIcon[c.value]
              const on = cat === c.value
              return (
                <button key={c.value} role="tab" aria-selected={on} onClick={() => setCat(c.value)} className={`relative flex shrink-0 items-center gap-2 px-4 py-3.5 text-[13px] font-bold transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                  <Ic size={17} stroke={1.5} className={on ? 'text-brand' : ''} />{c.label}
                  <span aria-hidden className={`absolute inset-x-3 -bottom-px h-[2px] origin-left bg-brand transition-transform duration-300 ${on ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
              )
            })}
          </div>
          <label className="relative block w-full lg:max-w-[340px]">
            <span className="sr-only">Search services</span>
            <IconSearch size={18} stroke={1.75} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Search CBC, Parvo, Rabies, 9-in-1…" className="h-11 w-full rounded-[10px] border border-line bg-white pl-10 pr-3 text-[14px] outline-none transition-[border-color,box-shadow] placeholder:text-[#9b9187] focus:border-brand focus:ring-[3px] focus:ring-brand/15" />
          </label>
        </div>
        <p className="mt-4 text-[12px] font-semibold text-muted" aria-live="polite">{list.length} {list.length === 1 ? 'service' : 'services'}</p>

        {featured && (
          <article className="mt-6 grid gap-8 border border-ink/85 bg-paper p-6 sm:p-9 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand"><IconHeartbeat size={17} stroke={1.5} /> Featured · Most booked</p>
              <h3 className="display mt-4 text-[clamp(1.9rem,3.4vw,3rem)]">Vet Doctor Home Visit Consultation</h3>
              <p className="mt-3 text-[14px] text-muted">{featured.note}. Licensed BVSc &amp; MVSc vet doctor.</p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 text-[14px] sm:grid-cols-1">
                {featured.points.map((p) => <li key={p} className="flex gap-3 border-b border-line pb-3"><IconCheck size={17} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">Delhi NCR · home visit</p>
                <p className="mt-2 text-[72px] font-extrabold leading-none tracking-[-.05em]">{inr(featured.price)}</p>
                <p className="mt-2 flex items-center gap-3 text-[14px]"><s className="text-muted">{inr(featured.oldPrice)}</s><span className="rounded-[3px] bg-brand/10 px-2 py-1 text-[11px] font-extrabold uppercase tracking-[.1em] text-brand">Save {inr(featured.oldPrice - featured.price)}</span></p>
              </div>
              <Actions s={featured} />
            </div>
          </article>
        )}

        {rest.length > 0 ? (
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((s) => <Row key={s.id} s={s} />)}
          </div>
        ) : !featured && (
          <p className="mt-12 border-t border-line py-10 text-[15px] text-muted">No service matches “{q}”. Try CBC, Parvo, Rabies or 9-in-1 — or <a className="font-bold text-brand underline" href="tel:+919211338489">call us</a>.</p>
        )}
      </div>
    </section>
  )
}
