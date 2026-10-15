'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconArrowUpRight, IconBuilding, IconHome, IconMapPin, IconQuote, IconRosetteDiscountCheck } from '@tabler/icons-react'
import { problems, trainingReasons, trainingRegions, trainingReviews, trainingSteps } from '@/lib/training-data'

const IMG = {
  leash: { src: '/photos/tr-leash.jpg', pos: '50% 40%' },
  behav: { src: '/photos/tr-behav.jpg', pos: '50% 45%' },
  hero: { src: '/photos/tr-hero.jpg', pos: '45% 40%' },
  session: { src: '/photos/tr-session.jpg', pos: '50% 40%' },
  demo: { src: '/photos/tr-demo.jpg', pos: '50% 40%' },
  plan: { src: '/photos/tr-plan.jpg', pos: '50% 50%' },
  cta: { src: '/photos/tr-cta.jpg', pos: '55% 40%' },
} as const

/** Scroll-driven "active item" helper shared by the timeline sections. */
function useActiveOnScroll(selector: string) {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
        ScrollTrigger.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => s.isActive && setActive(i) })
      })
    }, root)
    return () => ctx.revert()
  }, [selector])
  return { root, active }
}

/* ---------- Problem explorer ---------- */
export function ProblemExplorer() {
  const [i, setI] = useState(0)
  const box = useRef<HTMLDivElement>(null)
  const p = problems[i]
  const im = IMG[p.img]

  useEffect(() => {
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
    return () => { t.kill() }
  }, [i])

  const groups = ['Training', 'Behaviour Therapy'] as const

  return (
    <section id="problems" className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Dog training problems we solve</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Whatever&apos;s holding<br /><em>your dog back.</em></h2>
          <p className="mt-4 max-w-md text-[15px] text-muted">Select a category to explore how we can help your dog.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] rounded-tl-[110px] bg-charcoal text-white lg:col-span-7 lg:min-h-[560px]">
            <Image key={im.src} src={im.src} alt="" fill sizes="(min-width:1024px) 55vw, 100vw" loading="lazy" style={{ objectPosition: im.pos }} className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent" />
            <div ref={box} aria-live="polite" className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#f4a37f]">{p.n} · {p.group}</p>
              <h3 className="display mt-3 max-w-lg text-[clamp(2rem,4vw,3.4rem)]">{p.name}</h3>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/80">Handled at your doorstep with 100% force-free positive reinforcement, and coaching for you as the pet parent.</p>
              <Link href="#demo" className="btn btn-brand mt-6">Solve this <IconArrowUpRight size={17} stroke={2} /></Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            {groups.map((g) => (
              <div key={g} className="mb-8 last:mb-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">{g}</p>
                <ul className="mt-3 border-t border-ink/80">
                  {problems.map((x, idx) => x.group === g && (
                    <li key={x.n} className="border-b border-line">
                      <button type="button" onClick={() => setI(idx)} aria-pressed={idx === i} className="group relative flex w-full items-center gap-4 py-4 pl-3 text-left transition-[padding] duration-300 hover:pl-5">
                        <span aria-hidden className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 bg-brand transition-all duration-300 ${idx === i ? 'h-8' : 'h-0'}`} />
                        <span className={`w-6 text-[12px] font-extrabold tabular-nums ${idx === i ? 'text-brand' : 'text-muted'}`}>{x.n}</span>
                        <span className={`flex-1 text-[17px] font-extrabold tracking-tight ${idx === i ? 'text-ink' : 'text-ink/60 group-hover:text-ink'}`}>{x.name}</span>
                        <IconArrowUpRight size={18} stroke={1.5} className={idx === i ? 'text-brand' : 'text-muted'} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 4-step process with scroll-active step ---------- */
export function ProcessTimeline() {
  const { root, active } = useActiveOnScroll('[data-step-item]')
  return (
    <section id="process" ref={root} className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Simple &amp; effective process</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Your 4-step journey to<br /><em>a well-behaved dog.</em></h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <ol className="lg:col-span-7">
            {trainingSteps.map((s, idx) => (
              <li key={s.n} data-step-item className="relative border-t border-ink/20 py-10 lg:py-16">
                <span aria-hidden className={`absolute left-0 top-[-1px] h-[3px] bg-brand transition-all duration-700 ${idx === active ? 'w-24' : 'w-0'}`} />
                <div className="flex gap-6 sm:gap-10">
                  <span className={`text-[clamp(3.4rem,8vw,6.5rem)] font-extrabold leading-[.85] tracking-[-.06em] transition-colors duration-500 ${idx === active ? 'text-brand' : 'text-ink/15'}`}>{s.n}</span>
                  <div>
                    <h3 className="text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[28px] rounded-tr-[110px] bg-sand">
              {trainingSteps.map((s, idx) => (
                <Image key={s.n} src={IMG[s.img].src} alt={s.title} fill sizes="40vw" loading="lazy" style={{ objectPosition: IMG[s.img].pos }} className={`object-cover transition-opacity duration-700 ${idx === active ? 'opacity-100' : 'opacity-0'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Coverage ---------- */
const regionIcons = [IconBuilding, IconHome, IconHome, IconHome, IconMapPin]

export function Coverage() {
  const [i, setI] = useState(0)
  const r = trainingRegions[i]
  return (
    <section className="overflow-hidden bg-sand py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div data-reveal>
            <p className="label">Coverage</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Professional dog<br /><em>training near you.</em></h2>
          </div>
          <ul className="mt-9 border-t border-ink/80">
            {trainingRegions.map((x, idx) => {
              const Ic = regionIcons[idx]
              return (
                <li key={x.name} className="border-b border-ink/15">
                  <button type="button" onClick={() => setI(idx)} onMouseEnter={() => setI(idx)} aria-pressed={idx === i} className="group flex w-full items-center gap-4 py-5 text-left transition-[padding] duration-300 hover:pl-3">
                    <Ic size={22} stroke={1.5} className={idx === i ? 'text-brand' : 'text-muted'} />
                    <span className={`flex-1 text-[clamp(1.3rem,2.2vw,1.8rem)] font-extrabold tracking-tight ${idx === i ? 'text-ink' : 'text-ink/60'}`}>{x.name}</span>
                    <span className="hidden text-[10px] font-extrabold uppercase tracking-[.14em] text-muted sm:block">{x.status}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="relative grid aspect-square place-items-center lg:col-span-6">
          {[100, 74, 48].map((s) => <span key={s} aria-hidden className="absolute rounded-full border border-ink/15" style={{ width: `${s}%`, height: `${s}%` }} />)}
          <div className="relative text-center" aria-live="polite">
            <IconMapPin size={30} stroke={1.5} className="mx-auto text-brand" />
            <p className="display mt-3 text-[clamp(1.9rem,3.6vw,3.2rem)]">{r.name}</p>
            <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-muted">{r.status}</p>
            <Link href="#demo" className="btn btn-ink mt-6 !min-h-[44px]">Book free demo <IconArrowUpRight size={16} stroke={2} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Why choose us: manifesto with scroll-active principle ---------- */
export function Manifesto() {
  const { root, active } = useActiveOnScroll('[data-why]')
  const a = trainingReasons[active]
  return (
    <section ref={root} className="on-dark bg-charcoal py-20 text-white lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-28">
            <p className="label">Why choose The Paws Friend</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.6vw,4.2rem)]">Science-backed<br /><em>positive reinforcement</em><br />at your doorstep.</h2>
            <div className="mt-10 hidden border-t border-white/20 pt-6 lg:block" aria-hidden>
              <p className="text-[100px] font-extrabold leading-none tracking-[-.06em] text-[#f08a5b]">{a.n}</p>
              <p className="mt-2 text-[20px] font-extrabold">{a.title}</p>
            </div>
          </div>
        </div>
        <ol className="lg:col-span-6">
          {trainingReasons.map((r, idx) => (
            <li key={r.n} data-why className={`border-t border-white/20 py-8 transition-opacity duration-500 lg:py-12 ${idx === active ? 'opacity-100' : 'lg:opacity-35'}`}>
              <div className="flex gap-5">
                <span className="text-[13px] font-extrabold tabular-nums text-[#f08a5b]">{r.n}</span>
                <div><h3 className="text-[clamp(1.3rem,2.2vw,1.8rem)] font-extrabold leading-tight tracking-tight">{r.title}</h3><p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">{r.text}</p></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- Reviews ---------- */
export function Reviews() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const main = trainingReviews[i]
  const others = trainingReviews.map((r, idx) => ({ r, idx })).filter((x) => x.idx !== i)
  const box = useRef<HTMLDivElement>(null)
  // Auto-advance every 6s; pauses on hover/focus; off with reduced motion
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setI((n) => (n + 1) % trainingReviews.length), 3500)
    return () => window.clearInterval(id)
  }, [paused])
  useEffect(() => {
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { x: 24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    return () => { t.kill() }
  }, [i])

  const Meta = ({ r }: { r: (typeof trainingReviews)[number] }) => (
    <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]"><b className="font-extrabold">{r.owner}</b><span className="text-muted">{r.dog} · {r.place}</span><span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand"><IconRosetteDiscountCheck size={15} stroke={1.75} /> Verified</span></p>
  )

  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">Real reviews</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Pet parents who<br /><em>saw the difference.</em></h2>
        </div>

        {/* mobile: swipe */}
        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 lg:hidden">
          {trainingReviews.map((r) => (
            <li key={r.owner} className="w-[85%] shrink-0 snap-start border-t border-ink/80 pt-5">
              <p className="text-brand tracking-[.25em]" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className="mt-4 text-[18px] font-bold leading-snug tracking-tight">“{r.quote}”</blockquote>
              <Meta r={r} />
            </li>
          ))}
        </ul>

        {/* desktop: one large + two supporting */}
        <div className="mt-12 hidden gap-14 lg:grid lg:grid-cols-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <figure ref={box} className="col-span-8">
            <IconQuote size={44} stroke={1.25} className="text-brand" />
            <p className="mt-2 tracking-[.3em] text-brand" aria-label="5 out of 5 stars">★★★★★</p>
            <blockquote className="display mt-5 text-[clamp(1.8rem,3vw,2.7rem)] !font-bold !leading-[1.15]">“{main.quote}”</blockquote>
            <Meta r={main} />
          </figure>
          <ul className="col-span-4 self-end">
            {others.map(({ r, idx }) => (
              <li key={r.owner} className="border-t border-ink/20 first:border-t-ink/80">
                <button type="button" onClick={() => setI(idx)} className="group w-full py-6 text-left">
                  <p className="text-[14.5px] leading-relaxed text-ink/80 group-hover:text-ink">“{r.quote}”</p>
                  <p className="mt-3 text-[12px] text-muted"><b className="font-extrabold text-ink">{r.owner}</b> · {r.dog} · {r.place}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
