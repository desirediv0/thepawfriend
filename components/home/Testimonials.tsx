'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { IconQuote, IconRosetteDiscountCheck } from '@tabler/icons-react'
import { testimonials } from '@/lib/content'

/** Text testimonials: one large quote that auto-advances every 3.5s (pauses on hover/focus; static with reduced motion). */
export function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const box = useRef<HTMLElement>(null)
  const first = useRef(true)
  const n = testimonials.length

  useEffect(() => {
    if (paused || n < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setI((x) => (x + 1) % n), 3500)
    return () => window.clearInterval(id)
  }, [paused, n])

  useEffect(() => {
    if (first.current) { first.current = false; return }
    if (!box.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = gsap.fromTo(box.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    return () => { t.kill() }
  }, [i])

  if (!n) return null
  const t = testimonials[i]

  return (
    <section id="reviews" className="bg-sand py-14 md:py-20 lg:py-24" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-4">
          <p className="label">Loved by pet parents</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,4rem)]">Words from<br /><em>happy homes.</em></h2>
          <div className="mt-8 flex gap-2" role="tablist" aria-label="Choose a review">
            {testimonials.map((x, idx) => (
              <button key={x.name} type="button" role="tab" aria-selected={idx === i} aria-label={`Review ${idx + 1} of ${n}: ${x.name}`} onClick={() => setI(idx)} className="group py-3">
                <span className={`block h-[3px] rounded-full transition-all duration-500 ${idx === i ? 'w-12 bg-brand' : 'w-6 bg-ink/20 group-hover:bg-ink/40'}`} />
              </button>
            ))}
          </div>
        </div>
        <figure ref={box} aria-live="polite" className="lg:col-span-8">
          <IconQuote size={40} stroke={1.25} className="text-brand" />
          <p className="mt-3 tracking-[.3em] text-brand" aria-label="5 out of 5 stars">★★★★★</p>
          <blockquote className="display mt-5 min-h-[9rem] text-[clamp(1.5rem,3vw,2.6rem)] !font-bold !leading-[1.18] md:min-h-[11rem]">“{t.quote}”</blockquote>
          <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink/20 pt-5 text-[13px]">
            <b className="font-extrabold">{t.name}</b><span className="text-muted">{t.pet} · {t.city}</span>
            <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand"><IconRosetteDiscountCheck size={15} stroke={1.75} /> Verified</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
