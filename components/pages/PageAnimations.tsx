'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * One GSAP context for service pages, driven by data attributes (same philosophy as the homepage).
 * data-intro | data-reveal | data-stagger | data-clip | data-parallax-img | data-line.
 * Never put these attributes inside filtered/dynamic lists — they only animate what exists on mount.
 */
export function PageAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ease = 'power3.out'
      gsap.fromTo('[data-intro] > *', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease, stagger: 0.09, delay: 0.1 })
      gsap.fromTo('[data-lines] > span > span', { yPercent: 105 }, { yPercent: 0, duration: 0.9, ease, stagger: 0.1, delay: 0.2 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease, scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((el) => {
        gsap.fromTo(el.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease, stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-parallax-img]').forEach((el) => {
        gsap.fromTo(el, { yPercent: -4, scale: 1.1 }, { yPercent: 4, scale: 1.1, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
      })
    })

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const st = { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 0.6 }
      gsap.to('[data-sc="title"]', { y: -45, ease: 'none', scrollTrigger: st })
      gsap.to('[data-sc="image"]', { y: 55, ease: 'none', scrollTrigger: st })
      gsap.to('[data-sc="form"]', { y: 25, ease: 'none', scrollTrigger: st })
      gsap.to('[data-sc="hero40"]', { y: 40, ease: 'none', scrollTrigger: st })
      gsap.to('[data-sc="offer"]', { y: -15, ease: 'none', scrollTrigger: st })
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('[data-reveal], [data-stagger] > *, [data-intro] > *', { opacity: 1 })
    })

    return () => mm.revert()
  }, [])

  return null
}
