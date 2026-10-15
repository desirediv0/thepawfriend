'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconArrowUp, IconBrandWhatsapp, IconCalendarEvent, IconPhone, IconPhoneCall, type Icon } from '@tabler/icons-react'

const WHATSAPP = 'https://wa.me/919211338489?text=Hi%20THE%20PAWS%20FRIEND%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pet%20care%20services.'
const CALL = 'tel:+919211338489'
const BOOK = '/book'

type Action = { key: 'wa' | 'call' | 'book'; label: string; sub: string; aria: string; href: string; Icon: Icon; bg: string; external?: boolean }

const actions: Action[] = [
  { key: 'wa', label: 'WhatsApp Us', sub: '+91 9211338489', aria: 'Chat with THE PAWS FRIEND on WhatsApp', href: WHATSAPP, Icon: IconBrandWhatsapp, bg: 'bg-[#1f9d55]', external: true },
  { key: 'call', label: 'Call Vet', sub: '+91 9211338489', aria: 'Call THE PAWS FRIEND veterinarian', href: CALL, Icon: IconPhoneCall, bg: 'bg-[#1d5fc4]' },
  { key: 'book', label: 'Book Appointment', sub: 'Doorstep Visit', aria: 'Book a doorstep veterinary visit', href: BOOK, Icon: IconCalendarEvent, bg: 'bg-brand' },
]

/**
 * Floating action dock (bottom-right): a slim paper capsule holding WhatsApp, Call and Book.
 * Labels slide out to the left on hover/focus; Book keeps its label visible on desktop as the primary action.
 * The entrance is pure CSS (no JS dependency), so the dock can never get stuck invisible.
 */
export function FloatingContactActions() {
  const pathname = usePathname()
  const [nearFooter, setNearFooter] = useState(false)
  const compact = pathname.startsWith('/book')
  const [pastHero, setPastHero] = useState(pathname !== '/')
  const [progress, setProgress] = useState(0)

  // Home: keep the dock hidden while the hero is on screen. Also track page scroll progress.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      if (pathname === '/') {
        const hero = document.getElementById('top')
        setPastHero(window.scrollY > (hero ? hero.offsetHeight - 120 : 600))
      } else setPastHero(true)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [pathname])

  // Ease off (not hide) when the footer is on screen so it doesn't cover footer content.
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) { setNearFooter(false); return }
    const io = new IntersectionObserver(([e]) => setNearFooter(e.isIntersecting), { threshold: 0.15 })
    io.observe(footer)
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
    <ScrollTop progress={progress} />
    <MobileBar show={pastHero} />
    <div aria-hidden={!pastHero} className={`transition-opacity duration-500 ${pastHero ? 'opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
    <div className="pointer-events-none fixed bottom-7 right-7 z-[60] hidden motion-safe:animate-[pf-fab-in_.9s_cubic-bezier(.16,1,.3,1)_.5s_both] md:block">
      <div
        role="group"
        aria-label="Quick contact actions"
        className={`pointer-events-auto flex origin-bottom-right flex-col items-center gap-1.5 rounded-full border border-line bg-paper p-1.5 shadow-[0_24px_50px_-18px_#4b2a18bb] transition-[opacity,transform] duration-500 md:gap-2 md:p-2 ${nearFooter ? 'scale-90 opacity-75' : ''}`}
      >
        {actions.map(({ key, label, sub, aria, href, Icon, bg, external }) => {
          const primary = key === 'book'
          const size = compact ? 'size-10 md:size-11' : primary ? 'size-12 md:size-14' : 'size-11 md:size-12'
          const className = `group/fab relative grid shrink-0 place-items-center rounded-full text-white outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 motion-safe:hover:scale-105 ${bg} ${size}`
          const inner = (
            <>
              {key === 'wa' && <span aria-hidden className={`absolute inset-0 -z-10 rounded-full ${bg} motion-safe:animate-[pf-fab-pulse_3s_ease-out_infinite]`} />}
              <Icon size={primary ? 25 : 22} stroke={1.75} className="transition-transform duration-300 motion-safe:group-hover/fab:-rotate-12 motion-safe:group-hover/fab:scale-110" />
              <span
                aria-hidden
                className={`pointer-events-none absolute right-[calc(100%+14px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-charcoal py-2 pl-4 pr-4 text-left leading-tight shadow-[0_14px_28px_-14px_#000a] transition-all duration-300 md:block ${
                  primary && !compact ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0 group-hover/fab:translate-x-0 group-hover/fab:opacity-100 group-focus-visible/fab:translate-x-0 group-focus-visible/fab:opacity-100'
                }`}
              >
                <span className="block text-[13px] font-extrabold tracking-tight">{label}</span>
                <span className="block text-[10.5px] font-medium text-white/70">{sub}</span>
              </span>
            </>
          )
          return external || href.startsWith('tel:')
            ? <a key={key} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={aria} className={className}>{inner}</a>
            : <Link key={key} href={href} aria-label={aria} className={className}>{inner}</Link>
        })}
      </div>
    </div>
    </div>
    </>
  )
}

/** Mobile (<md): full-width bottom bar — Call | WhatsApp | Book. Sits under the open menu drawer (z-39 < z-40). */
function MobileBar({ show }: { show: boolean }) {
  const item = 'flex h-14 flex-1 items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[.12em] outline-none focus-visible:bg-sand'
  return (
    <nav aria-label="Quick contact" aria-hidden={!show} className={`${show ? '' : 'pointer-events-none invisible translate-y-4 opacity-0'} transition-all duration-500 fixed inset-x-3 bottom-[calc(12px+env(safe-area-inset-bottom))] z-[39] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_40px_-16px_#4b2a18aa] md:hidden`}>
      <div className="flex divide-x divide-line">
        <a href={CALL} aria-label="Call THE PAWS FRIEND" className={item}><IconPhone size={18} stroke={1.75} className="text-brand" /> Call</a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={item}><IconBrandWhatsapp size={18} stroke={1.75} className="text-[#1f9d55]" /> WhatsApp</a>
        <Link href={BOOK} aria-label="Book a doorstep visit" className={`${item} !flex-[1.1] bg-brand text-white`}><IconCalendarEvent size={18} stroke={1.75} /> Book</Link>
      </div>
    </nav>
  )
}

/** Scroll-to-top button; the ring fills with page scroll progress. */
function ScrollTop({ progress }: { progress: number }) {
  const R = 20, C = 2 * Math.PI * R
  const show = progress > 0.04
  return (
    <button
      type="button"
      aria-label={`Back to top, ${Math.round(progress * 100)}% scrolled`}
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[88px] right-3 z-[38] grid size-12 place-items-center rounded-full border border-line bg-paper shadow-[0_14px_30px_-14px_#4b2a18aa] transition-all duration-500 md:bottom-7 md:left-7 md:right-auto md:z-[60] ${show ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="24" cy="24" r={R} fill="none" stroke="var(--color-line)" strokeWidth="2.5" />
        <circle cx="24" cy="24" r={R} fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - progress)} />
      </svg>
      <IconArrowUp size={18} stroke={2} className="text-ink" />
    </button>
  )
}
