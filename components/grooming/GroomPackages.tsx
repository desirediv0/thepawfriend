'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { IconCat, IconCheck, IconDog, IconPaw } from '@tabler/icons-react'
import { BookLink, WhatsAppLink } from '@/components/pages/bits'
import { groomCategories, groomPackages, groomPetFilters, type GroomPackage } from '@/lib/grooming-data'
import { inr } from '@/lib/vet-data'

const cat = (c: string) => (c === 'All Packages' ? undefined : c)
const msg = (p: GroomPackage) => `Hi, I would like to book: ${p.name} (${inr(p.price)}) — Grooming, The Paws Friend.`

function Pricing({ p, size = 'md' }: { p: GroomPackage; size?: 'md' | 'lg' }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className={`${size === 'lg' ? 'text-[64px]' : 'text-[36px]'} font-extrabold leading-none tracking-[-.045em]`}>{inr(p.price)}</span>
      <s className="text-[14px] text-muted">{inr(p.oldPrice)}</s>
      <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-brand">Save {inr(p.oldPrice - p.price)}</span>
    </p>
  )
}

function PetTags({ p }: { p: GroomPackage }) {
  return <span className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[.14em] text-muted">{p.pets.includes('Dogs') && <IconDog size={15} stroke={1.5} />}{p.pets.includes('Cats') && <IconCat size={15} stroke={1.5} />}{p.pets.join(' & ')}</span>
}

export function GroomPackages() {
  const [c, setC] = useState<(typeof groomCategories)[number]>('All Packages')
  const [pet, setPet] = useState<(typeof groomPetFilters)[number]>('All Pets')

  const list = useMemo(
    () => groomPackages.filter((p) => (!cat(c) || p.category === c) && (pet === 'All Pets' || p.pets.includes(pet === 'Dogs' ? 'Dogs' : 'Cats'))),
    [c, pet],
  )
  const featured = list.find((p) => p.id === 'full')
  const medium = list.filter((p) => ['mini', 'tick', 'cat'].includes(p.id))
  const compact = list.filter((p) => !['full', 'mini', 'tick', 'cat'].includes(p.id))

  const chip = (on: boolean) => `shrink-0 rounded-full px-4 py-2.5 text-[13px] font-bold transition-colors ${on ? 'bg-ink text-white' : 'text-ink hover:bg-sand'}`

  return (
    <section id="packages" className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Packages &amp; pricing</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Find the right<br /><em>kind of pampering.</em></h2>
        </div>

        <div className="mt-10 space-y-3">
          <div role="group" aria-label="Package type" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            {groomCategories.map((x) => <button key={x} aria-pressed={c === x} onClick={() => setC(x)} className={chip(c === x)}>{x}</button>)}
          </div>
          <div role="group" aria-label="Pet" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            {groomPetFilters.map((x) => <button key={x} aria-pressed={pet === x} onClick={() => setPet(x)} className={`${chip(pet === x)} flex items-center gap-2`}>{x === 'Dogs' ? <IconDog size={16} stroke={1.5} /> : x === 'Cats' ? <IconCat size={16} stroke={1.5} /> : <IconPaw size={16} stroke={1.5} />}{x}</button>)}
          </div>
        </div>
        <p className="mt-4 text-[12px] font-semibold text-muted" aria-live="polite">{list.length} {list.length === 1 ? 'package' : 'packages'}</p>

        {featured && (
          <article className="mt-6 grid overflow-hidden rounded-[28px] bg-sand lg:grid-cols-12">
            <div className="relative min-h-[360px] lg:col-span-5">
              <Image src="/photos/groom.jpg" alt="Groomer brushing a fluffy white dog on a towel at home" fill sizes="(min-width:1024px) 40vw, 100vw" loading="lazy" className="object-cover object-[50%_40%]" />
              <span className="absolute left-4 top-4 rounded-full bg-paper px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{featured.tag}</span>
            </div>
            <div className="p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <PetTags p={featured} />
              <h3 className="display mt-3 text-[clamp(2rem,3.6vw,3.2rem)]">Full Grooming <em>(Head to Tail)</em></h3>
              <ul className="mt-6 grid gap-x-8 gap-y-2.5 text-[14px] sm:grid-cols-2">
                {featured.points.map((p) => <li key={p} className="flex gap-2.5"><IconCheck size={16} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-ink/15 pt-6">
                <Pricing p={featured} size="lg" />
                <div className="flex flex-wrap gap-2.5"><BookLink service="Grooming" pkg={featured.name} className="!rounded-full" /><WhatsAppLink message={msg(featured)} className="!rounded-full" /></div>
              </div>
            </div>
          </article>
        )}

        {medium.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {medium.map((p) => (
              <article key={p.id} className="flex flex-col rounded-[22px] border border-line bg-ivory p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{p.tag}</p>
                <h3 className="mt-2 text-[21px] font-extrabold leading-tight tracking-tight">{p.name}</h3>
                <div className="mt-2"><PetTags p={p} /></div>
                <ul className="mt-5 space-y-1.5 text-[13.5px] text-muted">
                  {p.points.slice(0, 5).map((x) => <li key={x} className="flex gap-2"><IconCheck size={15} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{x}</li>)}
                </ul>
                <div className="mt-auto space-y-4 pt-6"><Pricing p={p} /><div className="flex flex-wrap gap-2.5"><BookLink service="Grooming" pkg={p.name} className="!rounded-full" /><WhatsAppLink message={msg(p)} className="!rounded-full" /></div></div>
              </article>
            ))}
          </div>
        )}

        {compact.length > 0 && (
          <ul className="mt-8 border-t border-ink/80">
            {compact.map((p) => (
              <li key={p.id} className="grid items-center gap-x-6 gap-y-3 border-b border-line py-6 md:grid-cols-[1.4fr_1.6fr_auto_auto]">
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{p.tag}</p><h3 className="mt-1 text-[19px] font-extrabold tracking-tight">{p.name}</h3></div>
                <p className="text-[13px] leading-snug text-muted">{p.points.slice(0, 4).join(' · ')}</p>
                <p className="flex items-baseline gap-2"><span className="text-[28px] font-extrabold tracking-[-.04em]">{inr(p.price)}</span><s className="text-[12px] text-muted">{inr(p.oldPrice)}</s></p>
                <BookLink service="Grooming" pkg={p.name} className="!rounded-full" />
              </li>
            ))}
          </ul>
        )}

        {list.length === 0 && <p className="mt-10 border-t border-line py-10 text-[15px] text-muted">No package matches this filter. Try “All Packages”, or <a className="font-bold text-brand underline" href="tel:+919211338489">call us</a>.</p>}
      </div>
    </section>
  )
}
