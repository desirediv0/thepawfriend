'use client'

import { useEffect, useRef, useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import gsap from 'gsap'
import { faqs } from '@/lib/content'

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  const panel = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  useEffect(() => {
    const el = panel.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const d = first.current || reduce ? 0 : 0.4
    first.current = false
    gsap.to(el, { height: open ? 'auto' : 0, opacity: open ? 1 : 0, duration: d, ease: 'power3.out' })
  }, [open])

  return (
    <div className="border-b border-line">
      <h3>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={`faq-${index}`} className="group flex w-full items-center justify-between gap-6 py-5 text-left">
          <span className="text-[18px] font-extrabold tracking-tight transition-colors group-hover:text-brand">{q}</span>
          <IconChevronDown size={22} stroke={1.75} className={`shrink-0 text-brand transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div ref={panel} id={`faq-${index}`} role="region" style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <p className="max-w-xl pb-5 text-[15px] leading-relaxed text-muted">{a}</p>
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faqs" className="bg-paper py-14 lg:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="label">A little clarity goes a long way.</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">Good questions.<br /><em>Honest answers.</em></h2>
        </div>
        <div className="border-t border-line lg:col-span-7">
          {faqs.map((f, i) => <Item key={f.q} index={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
        </div>
      </div>
    </section>
  )
}
