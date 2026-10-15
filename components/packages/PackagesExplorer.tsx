'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  IconArrowUpRight, IconCat, IconCheck, IconDog, IconInfoCircle, IconPackage, IconPaw, IconSchool, IconScissors, IconStar, IconStethoscope, IconVaccine, IconX, type Icon,
} from '@tabler/icons-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { bookHref, waHref } from '@/components/pages/bits'
import { bookingService, careItems, categoryOptions, petOptions, type CareItem, type Category, type PetType } from '@/lib/packages-data'

const catIcon: Record<Category, Icon> = { packages: IconPackage, grooming: IconScissors, training: IconSchool, vaccination: IconVaccine }
const petIcon: Record<PetType, Icon> = { dog: IconDog, cat: IconCat }

type Open = (item: CareItem) => void

function Price({ item, size = 'md' }: { item: CareItem; size?: 'md' | 'lg' }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
      <span className={`${size === 'lg' ? 'text-[clamp(2.8rem,5vw,4rem)]' : 'text-[34px]'} font-extrabold leading-none tracking-[-.045em]`}>{item.price}</span>
      {item.priceSuffix && <span className="text-[11px] font-bold uppercase tracking-[.12em] text-muted">{item.priceSuffix}</span>}
    </p>
  )
}

function Actions({ item, open }: { item: CareItem; open: Open }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <Link href={bookHref(bookingService[item.category], item.title)} className="group/b btn btn-brand !min-h-[44px] !px-5 text-[12.5px] uppercase tracking-[.08em]">
        Book now <IconArrowUpRight size={16} stroke={2} className="transition-transform duration-300 group-hover/b:-translate-y-0.5 group-hover/b:translate-x-1" />
      </Link>
      <button type="button" onClick={() => open(item)} className="flex items-center gap-1.5 text-[11.5px] font-extrabold uppercase tracking-[.1em] text-ink/70 transition-colors hover:text-brand">
        <IconInfoCircle size={16} stroke={1.75} /> View full details
      </button>
    </div>
  )
}

function Tags({ item }: { item: CareItem }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">
      {item.pets.map((p) => { const Ic = petIcon[p]; return <span key={p} className="flex items-center gap-1"><Ic size={14} stroke={1.75} />For {p === 'dog' ? 'dogs' : 'cats'}</span> })}
      {item.category === 'packages' && <span className="text-muted">Official package</span>}
      {item.badge && <span className="flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-white"><IconStar size={11} stroke={2} fill="currentColor" />{item.badge}</span>}
    </p>
  )
}

function Includes({ list, cols = false }: { list: string[]; cols?: boolean }) {
  if (!list.length) return null
  return (
    <ul className={`mt-5 gap-x-8 gap-y-2.5 text-[14px] ${cols ? 'grid sm:grid-cols-2' : 'space-y-2.5'}`}>
      {list.map((x) => <li key={x} className="flex gap-2.5"><IconCheck size={16} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{x}</li>)}
    </ul>
  )
}

function Img({ item, sizes, className = '' }: { item: CareItem; sizes: string; className?: string }) {
  if (!item.image) return null
  return <Image src={item.image} alt={`${item.title} — care at home`} fill sizes={sizes} loading="lazy" style={{ objectPosition: item.imagePosition }} className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${className}`} />
}

/* ---- Feature: large 2-column editorial block ---- */
function Feature({ item, open }: { item: CareItem; open: Open }) {
  return (
    <article className="group grid overflow-hidden rounded-[24px] border border-line bg-paper transition-colors duration-300 hover:border-ink/40 lg:grid-cols-12">
      <div className="relative min-h-[340px] overflow-hidden lg:col-span-5 lg:min-h-[480px]">
        <Img item={item} sizes="(min-width:1024px) 40vw, 100vw" />
        <span className="absolute left-4 top-4 rounded-full bg-paper px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{item.category === 'packages' ? 'Featured care plan' : 'Featured'}</span>
      </div>
      <div className="flex flex-col p-7 sm:p-10 lg:col-span-7 lg:p-12">
        <Tags item={item} />
        <h3 className="display mt-4 text-[clamp(2rem,3.8vw,3.4rem)]">{item.title}</h3>
        {item.description && <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">{item.description}</p>}
        <Includes list={item.includes} cols={item.includes.length > 4} />
        {item.duration && <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[.14em] text-muted">Duration · {item.duration}</p>}
        <div className="mt-auto space-y-6 pt-8"><Price item={item} size="lg" /><Actions item={item} open={open} /></div>
      </div>
    </article>
  )
}

/* ---- Supporting editorial cards (packages) ---- */
function Support({ item, open, tall = false, wide = false }: { item: CareItem; open: Open; tall?: boolean; wide?: boolean }) {
  return (
    <article className={`group flex overflow-hidden rounded-[22px] border border-line bg-ivory transition-all duration-300 hover:-translate-y-1 hover:border-ink/40 ${wide ? 'flex-col md:flex-row' : 'flex-col'}`}>
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/10] md:aspect-auto md:w-[38%]' : tall ? 'aspect-[16/11]' : 'aspect-[16/9]'}`}><Img item={item} sizes="(min-width:1024px) 40vw, 100vw" /></div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <Tags item={item} />
        <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-tight tracking-tight">{item.title}</h3>
        {item.description && <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.description}</p>}
        <Includes list={item.includes} />
        <div className="mt-auto space-y-5 pt-6"><Price item={item} /><Actions item={item} open={open} /></div>
      </div>
    </article>
  )
}

/* ---- Editorial row (grooming / training) ---- */
function Row({ item, open }: { item: CareItem; open: Open }) {
  return (
    <li className="group grid items-center gap-x-8 gap-y-4 border-b border-line py-7 transition-colors duration-300 hover:border-ink/50 md:grid-cols-[96px_1.4fr_1.2fr_auto]">
      <div className="relative hidden aspect-square overflow-hidden rounded-[14px] md:block"><Img item={item} sizes="96px" /></div>
      <div><Tags item={item} /><h3 className="mt-2 text-[clamp(1.25rem,2vw,1.6rem)] font-extrabold leading-tight tracking-tight">{item.title}</h3>{item.description && <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-muted">{item.description}</p>}</div>
      <div>
        {item.includes.length > 0 && <ul className="flex flex-wrap gap-2">{item.includes.slice(0, 3).map((x) => <li key={x} className="rounded-full border border-line px-3 py-1.5 text-[11.5px] font-bold">{x}</li>)}</ul>}
        {item.duration && <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-muted">{item.duration}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end"><Price item={item} /><Actions item={item} open={open} /></div>
    </li>
  )
}

/* ---- Highlighted treatment ---- */
function Highlight({ item, open }: { item: CareItem; open: Open }) {
  return (
    <article className="group grid overflow-hidden rounded-[24px] bg-sand md:grid-cols-12">
      <div className="p-7 sm:p-10 md:col-span-7">
        <Tags item={item} />
        <h3 className="display mt-4 text-[clamp(1.8rem,3vw,2.7rem)]">{item.title}</h3>
        {item.description && <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/75">{item.description}</p>}
        <Includes list={item.includes} cols />
        <div className="mt-7 flex flex-wrap items-end justify-between gap-5 border-t border-ink/15 pt-6"><Price item={item} /><Actions item={item} open={open} /></div>
      </div>
      <div className="relative min-h-[260px] overflow-hidden md:col-span-5"><Img item={item} sizes="(min-width:768px) 40vw, 100vw" /></div>
    </article>
  )
}

/* ---- Vaccination: clean clinical rows ---- */
function VaccRow({ item, open }: { item: CareItem; open: Open }) {
  return (
    <li className="group grid items-center gap-x-8 gap-y-3 border-b border-line py-7 transition-colors duration-300 hover:border-ink/50 md:grid-cols-[56px_1.6fr_auto_auto]">
      <span className="hidden size-12 place-items-center rounded-full bg-sand text-brand md:grid">{item.id === 'v-individual' ? <IconStethoscope size={22} stroke={1.5} /> : <IconVaccine size={22} stroke={1.5} />}</span>
      <div><Tags item={item} /><h3 className="mt-2 text-[clamp(1.3rem,2.2vw,1.8rem)] font-extrabold leading-tight tracking-tight">{item.title}</h3></div>
      <Price item={item} />
      <Actions item={item} open={open} />
    </li>
  )
}

function Results({ items, category, open }: { items: CareItem[]; category: Category; open: Open }) {
  if (!items.length) return null
  const feature = items.find((i) => i.role === 'feature')
  const highlight = items.find((i) => i.role === 'highlight')
  const rest = items.filter((i) => i !== feature && i !== highlight)

  if (category === 'packages') {
    const [a, b, c] = rest
    return (
      <div className="space-y-6">
        {feature && <Feature item={feature} open={open} />}
        <div className="grid gap-6 lg:grid-cols-12">
          {a && <div className="lg:col-span-5 [&>article]:h-full"><Support item={a} open={open} /></div>}
          {b && <div className="lg:col-span-7 [&>article]:h-full"><Support item={b} open={open} tall /></div>}
        </div>
        {c && <Support item={c} open={open} wide />}
      </div>
    )
  }
  if (category === 'vaccination') return <ul className="border-t border-ink/80">{items.map((i) => <VaccRow key={i.id} item={i} open={open} />)}</ul>
  return (
    <div className="space-y-8">
      {feature && <Feature item={feature} open={open} />}
      {rest.length > 0 && <ul className="border-t border-ink/80">{rest.map((i) => <Row key={i.id} item={i} open={open} />)}</ul>}
      {highlight && <Highlight item={highlight} open={open} />}
    </div>
  )
}

export function PackagesExplorer() {
  const [pet, setPet] = useState<PetType>('dog')
  const [cat, setCat] = useState<Category>('packages')
  const [detail, setDetail] = useState<CareItem | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  const items = useMemo(() => careItems.filter((i) => i.category === cat && i.pets.includes(pet)), [cat, pet])

  // fade-in after content changes; fade-out happens in `change`
  useEffect(() => {
    if (first.current) { first.current = false; return }
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
    return () => { t.kill() }
  }, [pet, cat])

  const change = (apply: () => void) => {
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(); return }
    gsap.to(box.current, { opacity: 0, y: 12, duration: 0.2, ease: 'power2.in', onComplete: apply })
  }

  const seg = (on: boolean) => `relative flex items-center gap-2 px-5 py-3 text-[12.5px] font-extrabold uppercase tracking-[.1em] transition-colors duration-300 ${on ? 'bg-brand text-white' : 'text-ink hover:bg-sand'}`

  return (
    <>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-paper pb-12 pt-8 md:pt-12 lg:pb-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-intro className="lg:col-span-7">
            <p className="label"><IconPaw size={15} stroke={1.75} className="-ml-1" /> Comprehensive protection plans</p>
            <h1 className="display mt-5 text-[clamp(2.7rem,5.8vw,5.6rem)]">Care Packages,<br /><em>picked for your pet.</em></h1>
            <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-muted">Select your pet and a category to explore complete doorstep protection plans, grooming, training, and vaccination schedules.</p>

            <div className="mt-9 grid gap-6 border-t border-line pt-7 sm:grid-cols-[auto_1fr] sm:gap-x-12">
              <div role="radiogroup" aria-label="Pet">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">Pet</p>
                <div className="mt-3 inline-flex overflow-hidden rounded-[10px] border border-ink/80">
                  {petOptions.map((o, i) => { const Ic = petIcon[o.value]; const on = pet === o.value; return (
                    <button key={o.value} type="button" role="radio" aria-checked={on} onClick={() => change(() => setPet(o.value))} className={`${seg(on)} ${i ? 'border-l border-ink/80' : ''}`}><Ic size={19} stroke={1.5} />{o.label}</button>
                  ) })}
                </div>
              </div>
              <div role="radiogroup" aria-label="Category" className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">Category</p>
                <div className="no-scrollbar -mr-4 mt-3 flex gap-1 overflow-x-auto border-b border-line pr-4">
                  {categoryOptions.map((o) => { const Ic = catIcon[o.value]; const on = cat === o.value; return (
                    <button key={o.value} type="button" role="radio" aria-checked={on} onClick={() => change(() => setCat(o.value))} className={`relative flex shrink-0 items-center gap-2 px-4 py-3 text-[13px] font-bold transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                      <Ic size={18} stroke={1.5} className={on ? 'text-brand' : ''} />{o.label}
                      <span aria-hidden className={`absolute inset-x-3 -bottom-px h-[2px] origin-left bg-brand transition-transform duration-300 ${on ? 'scale-x-100' : 'scale-x-0'}`} />
                    </button>
                  ) })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div data-sc="hero40" className="relative">
              <div data-clip className="relative aspect-[4/4.8] overflow-hidden rounded-[24px] rounded-tr-[130px] rounded-bl-[130px] border-[6px] border-paper shadow-[0_44px_80px_-46px_#4b2a1880]">
                <Image src="/photos/pk-hero.jpg" alt="Indian pet parent hugging her golden retriever with a cat on the sofa" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[45%_40%]" />
              </div>
              <div className="absolute -left-2 bottom-8 w-[190px] border-l-[3px] border-brand bg-paper p-4 shadow-[0_22px_40px_-24px_#4b2a1870] sm:-left-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">Complete care</p>
                <ul className="mt-2 space-y-1 text-[12px] font-extrabold uppercase tracking-[.1em]">{['Veterinary', 'Grooming', 'Training', 'Vaccination'].map((x) => <li key={x} className="flex items-center gap-2"><IconCheck size={13} stroke={2.5} className="text-brand" />{x}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="plans" className="bg-ivory py-14 lg:py-20">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">{cat === 'packages' ? 'Featured care plan' : categoryOptions.find((o) => o.value === cat)!.label}</p>
              <p className="mt-2 text-[13px] text-muted" aria-live="polite">{items.length} {items.length === 1 ? 'option' : 'options'} for {pet === 'dog' ? 'dogs' : 'cats'}</p>
            </div>
          </div>
          <div ref={box}>
            {items.length ? <Results items={items} category={cat} open={setDetail} /> : (
              <div className="border-t border-ink/80 py-14">
                <p className="display text-[clamp(1.8rem,3vw,2.6rem)]">No {categoryOptions.find((o) => o.value === cat)!.label.toLowerCase()} listed for {pet === 'dog' ? 'dogs' : 'cats'} yet.</p>
                <p className="mt-3 max-w-md text-[15px] text-muted">Talk to our team and we&apos;ll recommend the right care plan for your {pet}.</p>
                <a href={waHref(`Hi, I'd like to know about ${cat} options for my ${pet}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-brand mt-6">Ask on WhatsApp <IconArrowUpRight size={17} stroke={2} /></a>
              </div>
            )}
          </div>

          {cat === 'packages' && (
            <div className="mt-20 grid items-end gap-8 border-t border-ink/80 pt-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="label">Beyond bundles</p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">Care that fits<br /><em>every stage of life.</em></h2>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:col-span-5 lg:justify-end">
                {categoryOptions.filter((o) => o.value !== 'packages').map((o) => { const Ic = catIcon[o.value]; return (
                  <button key={o.value} type="button" onClick={() => { change(() => setCat(o.value)); document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }) }} className="flex items-center gap-2 rounded-full border border-ink/80 px-4 py-2.5 text-[12.5px] font-extrabold transition-colors hover:bg-ink hover:text-white"><Ic size={17} stroke={1.5} />{o.label}</button>
                ) })}
              </div>
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!detail} onOpenChange={(o) => { if (!o) setDetail(null) }}>
        <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto rounded-[20px] border border-line bg-paper p-0 ring-0 sm:max-w-[560px]">
          {detail && (
            <div>
              {detail.image && <div className="relative aspect-[16/9]"><Image src={detail.image} alt="" fill sizes="560px" className="object-cover" style={{ objectPosition: detail.imagePosition }} /></div>}
              <div className="p-6 sm:p-8">
                <Tags item={detail} />
                <DialogTitle className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight">{detail.title}</DialogTitle>
                {detail.description ? <DialogDescription className="mt-2 text-[14.5px] leading-relaxed text-muted">{detail.description}</DialogDescription> : <DialogDescription className="sr-only">{detail.title} details</DialogDescription>}
                {detail.includes.length > 0 && <div className="mt-5 border-t border-line pt-5"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">What&apos;s included</p><Includes list={detail.includes} /></div>}
                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5 text-[13px]">
                  <div><dt className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">Price</dt><dd className="mt-1 text-[22px] font-extrabold tracking-tight">{detail.price}</dd>{detail.priceSuffix && <dd className="text-[11px] text-muted">{detail.priceSuffix}</dd>}</div>
                  {detail.duration && <div><dt className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">Duration</dt><dd className="mt-1 font-bold">{detail.duration}</dd></div>}
                  <div><dt className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">Pet</dt><dd className="mt-1 font-bold capitalize">{detail.pets.join(' & ')}</dd></div>
                </dl>
                <Link href={bookHref(bookingService[detail.category], detail.title)} className="btn btn-brand mt-6 w-full text-[12.5px] uppercase tracking-[.08em]">Book now <IconArrowUpRight size={16} stroke={2} /></Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
