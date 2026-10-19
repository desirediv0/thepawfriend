'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconArrowUpRight, IconBrandWhatsapp, IconMapPin, IconMenu2, IconPhone, IconX } from '@tabler/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { locationHref } from '@/lib/locations-data'
import { cities as allCities, nav, PHONE, PHONE_HREF, WHATSAPP } from '@/lib/content'


export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [hash, setHash] = useState('')

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '#contact') return hash === '#contact'
    if (href === '/') return pathname === '/' && hash !== '#contact'
    return pathname === href || pathname.startsWith(href + '/')
  }

  // Already on home: logo / Home scrolls to the top instead of doing nothing.
  const goHome = (e: React.MouseEvent) => {
    setOpen(false)
    if (pathname !== '/') return
    e.preventDefault()
    window.history.replaceState(null, '', '/')
    setHash('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const st = ScrollTrigger.create({ start: 24, end: 'max', onToggle: (s) => setScrolled(s.isActive || s.progress === 1), onUpdate: (s) => setScrolled(s.scroll() > 24) })
    return () => st.kill()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <div className="hidden bg-charcoal text-[10px] font-semibold uppercase tracking-[.14em] text-[#d7cec3] md:block">
        <div className="wrap flex h-8 items-center gap-6">
          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
            <ul className="flex w-max animate-[pf-marquee_38s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
              {[0, 1].map((k) => (
                <li key={k} aria-hidden={k === 1} className="flex shrink-0 items-center">
                  <span className="px-5">Trusted doorstep pet healthcare</span>
                  {allCities.map((c) => (
                    <Link key={c} href={locationHref(c)} tabIndex={k === 1 ? -1 : undefined} className="flex items-center gap-5 px-2.5 transition-colors hover:text-white"><i className="size-[3px] rounded-full bg-brand" /><IconMapPin size={12} stroke={1.75} className="-mr-3" />{c}</Link>
                  ))}
                  <i className="mx-5 size-[3px] rounded-full bg-brand" />
                </li>
              ))}
            </ul>
          </div>
          <a href={PHONE_HREF} className="shrink-0 whitespace-nowrap transition-colors hover:text-white">Need help? <b className="font-bold text-[#f4a37f]">{PHONE}</b></a>
        </div>
      </div>
      <header
        data-scrolled={scrolled}
        className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur-md transition-[background-color,box-shadow] duration-300 data-[scrolled=true]:bg-ivory/[.97] data-[scrolled=true]:shadow-[0_8px_30px_-18px_#4b2a1840]"
      >
        <div className={`wrap flex items-center gap-4 xl:gap-8 duration-300 h-[96px]`}>
          <Link href="/" onClick={goHome} aria-label="The Paws Friend — home" className="flex shrink-0 items-center gap-3">
            <Image src="/logo.png" alt="" width={200} height={200} priority className={`rounded-full size-[84px]`} />
            <span className="hidden leading-none sm:block lg:hidden xl:block">
              <span className="block text-[15px] font-extrabold tracking-[.12em]">THE PAWS FRIEND</span>
              <span className="mt-1 block font-serif text-[17px] italic text-brand">Pawfectly devoted</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="ml-1 hidden items-center gap-4 whitespace-nowrap lg:flex xl:ml-4 xl:gap-6 2xl:gap-8">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={n.href === '/' ? goHome : undefined} aria-current={isActive(n.href) ? 'page' : undefined} className={`group relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors ${isActive(n.href) ? 'text-brand' : ''}`}>
                {n.label}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand transition-transform duration-300 group-hover:scale-x-100 ${isActive(n.href) ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-5">
            <a href={PHONE_HREF} className="hidden items-center gap-2 whitespace-nowrap text-[13px] font-bold 2xl:flex"><IconPhone size={16} stroke={1.75} className="text-brand" />{PHONE}</a>
            <Link href="/#booking" className="btn btn-ink hidden !min-h-[42px] shrink-0 whitespace-nowrap !px-5 sm:inline-flex"><span className="xl:hidden">Book a visit</span><span className="hidden xl:inline">Book a home visit</span> <IconArrowUpRight size={16} stroke={2} /></Link>
            <button className="grid size-11 place-items-center rounded-full border border-line lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
              {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" hidden={!open} className="fixed inset-0 z-40 overflow-hidden bg-ivory pt-[96px] lg:hidden">
        <div className="wrap flex h-full flex-col justify-between py-6">
          <nav aria-label="Mobile navigation">
            {nav.map((n, i) => (
              <Link key={n.href} href={n.href} onClick={n.href === '/' ? goHome : () => setOpen(false)} aria-current={isActive(n.href) ? 'page' : undefined} className={`flex items-center justify-between border-b border-line py-3 text-[22px] font-extrabold tracking-tight ${isActive(n.href) ? 'text-brand' : ''}`}>
                <span><small className="mr-3 align-middle text-[11px] font-bold text-brand">0{i + 1}</small>{n.label}</span>
                <IconArrowUpRight size={22} className="text-muted" />
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            <Link href="/#booking" onClick={() => setOpen(false)} className="btn btn-brand w-full">Book a home visit <IconArrowUpRight size={16} /></Link>
            <div className="grid grid-cols-2 gap-3">
              <a href={PHONE_HREF} className="btn btn-line"><IconPhone size={16} /> Call us</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line"><IconBrandWhatsapp size={16} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
