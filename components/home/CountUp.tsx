'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Counts "5,200+", "30+", "4.8★" up from 0 once, when scrolled into view. Non-numeric values render as-is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/)

  useEffect(() => {
    const el = ref.current
    if (!el || !m) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    const [, pre, num, post] = m
    const target = parseFloat(num.replace(/,/g, ''))
    const decimals = num.includes('.') ? num.split('.')[1].length : 0
    const commas = num.includes(',')
    const fmt = (n: number) => {
      const s = n.toFixed(decimals)
      return pre + (commas ? Number(s).toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : s) + post
    }

    const obj = { n: 0 }
    el.textContent = fmt(0)
    const tween = gsap.to(obj, {
      n: target,
      duration: 2,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => { el.textContent = fmt(obj.n) },
      onComplete: () => { el.textContent = value },
    })
    const st = ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => tween.play() })
    return () => { st.kill(); tween.kill(); el.textContent = value }
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref} className={`tabular-nums ${className ?? ''}`}>{value}</span>
}
