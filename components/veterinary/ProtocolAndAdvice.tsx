'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconArrowUpRight, IconBook2, IconShieldCheck } from '@tabler/icons-react'
import { vetAdvice, vetProtocol } from '@/lib/vet-data'

/* ---------- Protection Protocol Index: sticky heading, scroll-driven active step ---------- */
export function ProtocolIndex() {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-proto]').forEach((el, i) => {
        ScrollTrigger.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => s.isActive && setActive(i) })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={root} className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="label"><IconShieldCheck size={15} stroke={1.75} className="-ml-1" /> Clinical protocol</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">The protection<br /><em>protocol index.</em></h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">Six evidence-based clinical formulas, standard dose, administered by certified vets.</p>
            <p className="mt-10 hidden items-baseline gap-2 lg:flex" aria-hidden>
              <span className="text-[88px] font-extrabold leading-none tracking-[-.06em] text-brand">{vetProtocol[active].n}</span>
              <span className="text-[13px] font-bold uppercase tracking-[.14em] text-muted">/ 06</span>
            </p>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {vetProtocol.map((p, i) => (
            <li key={p.n} data-proto className={`border-t border-ink/80 py-9 transition-opacity duration-500 lg:py-14 ${i === active ? 'opacity-100' : 'lg:opacity-40'}`}>
              <div className="flex items-baseline gap-5">
                <span className="text-[13px] font-extrabold tabular-nums text-brand">{p.n}</span>
                <h3 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-extrabold leading-tight tracking-tight">{p.name}</h3>
              </div>
              <p className="mt-3 pl-[38px] text-[11px] font-extrabold uppercase tracking-[.14em] text-muted">{p.target} · {p.pets}</p>
              <p className="mt-4 max-w-md pl-[38px] text-[15px] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- Veterinary advice: featured article + numbered topic list ---------- */
export function VetAdvice() {
  const [i, setI] = useState(0)
  const box = useRef<HTMLDivElement>(null)
  const a = vetAdvice[i]

  useEffect(() => {
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
    return () => { t.kill() }
  }, [i])

  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label"><IconBook2 size={15} stroke={1.75} className="-ml-1" /> Veterinary guidance</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">What our vets<br /><em>want you to know.</em></h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <article ref={box} aria-live="polite" className="border border-ink/85 bg-paper p-6 sm:p-10 lg:col-span-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">{a.topic} · {a.target}</p>
            <h3 className="display mt-4 text-[clamp(1.7rem,3vw,2.6rem)]">{a.title}</h3>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted">{a.body}</p>
            <ul className="mt-6 space-y-2.5 text-[14px]">
              {a.points.map((p) => <li key={p} className="flex gap-3 border-t border-line pt-2.5"><span aria-hidden className="mt-2 size-1.5 shrink-0 bg-brand" />{p}</li>)}
            </ul>
            <blockquote className="mt-8 border-l-[3px] border-brand pl-5 font-serif text-[22px] italic leading-snug text-ink">{a.quote}</blockquote>
          </article>
          <ul className="border-t border-ink/80 lg:col-span-5 lg:self-start">
            {vetAdvice.map((t, idx) => (
              <li key={t.n} className="border-b border-line">
                <button type="button" onClick={() => setI(idx)} aria-pressed={idx === i} className="group flex w-full items-center gap-5 py-6 text-left transition-[padding] duration-300 hover:pl-2">
                  <span className={`text-[13px] font-extrabold tabular-nums ${idx === i ? 'text-brand' : 'text-muted'}`}>{t.n}</span>
                  <span className="flex-1">
                    <span className={`block text-[11px] font-extrabold uppercase tracking-[.14em] ${idx === i ? 'text-brand' : 'text-muted'}`}>{t.topic}</span>
                    <span className="mt-1 block text-[17px] font-extrabold leading-snug tracking-tight">{t.title}</span>
                  </span>
                  <IconArrowUpRight size={20} stroke={1.5} className={`transition-all duration-300 ${idx === i ? 'text-brand' : 'text-muted'} group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
