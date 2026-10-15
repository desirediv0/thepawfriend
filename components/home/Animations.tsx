'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** One GSAP context for the whole page, driven by data attributes. Native scroll only. */
export function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ease = 'power3.out'

      gsap.utils.toArray<HTMLElement>('[data-parallax-img]').forEach((el) => {
        gsap.fromTo(el, { yPercent: -5, scale: 1.12 }, { yPercent: 5, scale: 1.12, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease, scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((el) => {
        gsap.fromTo(el.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease, stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
      })
      gsap.set('[data-step]', { opacity: 0, y: 24 })
      ScrollTrigger.batch('[data-step]', { start: 'top 88%', once: true, onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.18 }) })
      gsap.fromTo('[data-line]', { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: '[data-line]', start: 'top 88%', once: true } })
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('[data-reveal], [data-stagger] > *', { opacity: 1 })
    })

    return () => mm.revert()
  }, [])

  return null
}
