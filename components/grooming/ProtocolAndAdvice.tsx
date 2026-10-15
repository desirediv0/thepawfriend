'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconBath, IconBug, IconDroplet, IconEar, IconHeart, IconPaw, IconScissors, IconShieldCheck, type Icon } from '@tabler/icons-react'
import { groomAdvice, groomProtocol } from '@/lib/grooming-data'

const protoIcons: Icon[] = [IconShieldCheck, IconDroplet, IconHeart, IconEar, IconBug, IconPaw]
const protoImgs = [
  { src: '/photos/groom-prepare.jpg', pos: '50% 30%' },
  { src: '/photos/groom-bath.jpg', pos: '50% 35%' },
  { src: '/photos/groom-cat.jpg', pos: '55% 50%' },
  { src: '/photos/groom-hero.jpg', pos: '50% 30%' },
  { src: '/photos/groom-bath.jpg', pos: '30% 60%' },
  { src: '/photos/groom-finish.jpg', pos: '55% 45%' },
]

/* ---------- Hygiene & safety protocol: sticky image changes as you scroll ---------- */
export function GroomProtocol() {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-gproto]').forEach((el, i) => {
        ScrollTrigger.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => s.isActive && setActive(i) })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={root} className="bg-sand py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label"><IconBath size={15} stroke={1.75} className="-ml-1" /> Hygiene &amp; safety</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">The doorstep<br /><em>grooming protocol.</em></h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[28px] rounded-tr-[120px] bg-paper">
              {protoImgs.map((im, i) => (
                <Image key={i} src={im.src} alt="" fill sizes="40vw" loading="lazy" style={{ objectPosition: im.pos }} className={`object-cover transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`} />
              ))}
              <p className="absolute bottom-5 left-5 rounded-full bg-paper px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.16em]"><span className="text-brand">{groomProtocol[active].code}</span></p>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {groomProtocol.map((p, i) => {
              const Ic = protoIcons[i] ?? IconScissors
              return (
                <li key={p.code} data-gproto className={`border-t border-ink/20 py-9 transition-opacity duration-500 lg:py-14 ${i === active ? 'opacity-100' : 'lg:opacity-40'}`}>
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full bg-paper text-brand"><Ic size={22} stroke={1.5} /></span>
                    <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-muted">{p.n} · {p.code}</span>
                  </div>
                  <h3 className="mt-5 text-[clamp(1.5rem,2.5vw,2.1rem)] font-extrabold leading-tight tracking-tight">{p.name}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{p.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.elements.map((e) => <li key={e} className="rounded-full border border-ink/20 px-3.5 py-1.5 text-[12px] font-bold">{e}</li>)}</ul>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- Advice: magazine layout ---------- */
export function GroomAdvice() {
  const [i, setI] = useState(0)
  const box = useRef<HTMLDivElement>(null)
  const a = groomAdvice[i]

  useEffect(() => {
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
    return () => { t.kill() }
  }, [i])

  return (
    <section className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Groomer&apos;s notes</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Coat care,<br /><em>straight from the experts.</em></h2>
          </div>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div ref={box} aria-live="polite" className="lg:col-span-7">
            <p className="text-[clamp(5rem,12vw,10rem)] font-extrabold leading-[.8] tracking-[-.06em] text-brand/15">{a.n}</p>
            <h3 className="display mt-2 text-[clamp(1.9rem,3.6vw,3.2rem)]">{a.title}</h3>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/80">{a.body}</p>
            <p className="mt-8 border-t border-ink/20 pt-4 text-[13px]"><b className="font-extrabold">{a.author}</b> <span className="text-muted">· {a.role}</span></p>
          </div>
          <ul className="border-t border-ink/80 lg:col-span-5 lg:self-end">
            {groomAdvice.map((t, idx) => (
              <li key={t.n} className="border-b border-line">
                <button type="button" onClick={() => setI(idx)} aria-pressed={idx === i} className="group flex w-full items-start gap-5 py-5 text-left transition-[padding] duration-300 hover:pl-2">
                  <span className={`pt-0.5 text-[13px] font-extrabold tabular-nums ${idx === i ? 'text-brand' : 'text-muted'}`}>{t.n}</span>
                  <span className={`text-[16.5px] font-extrabold leading-snug tracking-tight ${idx === i ? 'text-ink' : 'text-ink/60 group-hover:text-ink'}`}>{t.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
