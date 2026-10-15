'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconBuilding, IconHome, IconMapPin } from '@tabler/icons-react'
import { locations } from '@/lib/locations-data'

const INTERVAL = 4500

/**
 * Coverage radar: cities auto-rotate every few seconds (a ring around the centre shows the countdown).
 * Picking a city on the list or on the orbit jumps to it and the rotation carries on from there.
 */
export function LocationsCoverage() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [motion, setMotion] = useState(true)
  const loc = locations[i]
  const n = locations.length

  useEffect(() => { setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) }, [])

  useEffect(() => {
    if (!motion || paused) return
    const t = window.setTimeout(() => setI((v) => (v + 1) % n), INTERVAL)
    return () => window.clearTimeout(t)
  }, [i, paused, motion, n])

  return (
    <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-16">
      {/* Radar */}
      <div className="mx-auto w-full max-w-[460px] lg:order-last lg:col-span-6 lg:max-w-[540px]">
        <div className="relative aspect-square w-full" onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* static rings + slow dashed orbit */}
          {[100, 78, 56].map((s) => <span key={s} aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/12" style={{ width: `${s}%`, height: `${s}%` }} />)}
          <span aria-hidden className="cov-anim absolute inset-[11%] rounded-full border border-dashed border-brand/35" style={{ animation: 'cov-spin 70s linear infinite' }} />
          {/* ripples from the centre */}
          {[0, 1.5].map((d) => <span key={d} aria-hidden className="cov-anim absolute inset-[22%] rounded-full border border-brand/40" style={{ animation: 'cov-ripple 3s ease-out infinite', animationDelay: `${d}s` }} />)}

          {/* city nodes on the outer ring */}
          {locations.map((x, idx) => {
            const a = (idx / n) * Math.PI * 2 - Math.PI / 2
            const on = idx === i
            return (
              <button key={x.slug} type="button" onClick={() => setI(idx)} aria-label={x.name} aria-pressed={on} className="group absolute z-20 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center" style={{ left: `${50 + Math.cos(a) * 50}%`, top: `${50 + Math.sin(a) * 50}%` }}>
                <span className={`relative grid place-items-center rounded-full border transition-all duration-500 ${on ? 'size-5 border-brand bg-brand shadow-[0_0_0_6px_rgba(217,71,16,.18)]' : 'size-3 border-ink/35 bg-sand group-hover:border-brand group-hover:bg-brand/30'}`}>
                  {on && <IconMapPin size={11} stroke={2.5} className="text-white" />}
                </span>
                <span className={`pointer-events-none absolute whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] transition-all duration-500 max-sm:hidden ${on ? 'translate-y-0 bg-ink text-white opacity-100' : 'translate-y-1 opacity-0'}`} style={{ [Math.sin(a) > 0.5 ? 'bottom' : 'top']: '130%' }}>{x.name}</span>
              </button>
            )
          })}

          {/* centre disc: crossfading city photos + countdown ring */}
          <div className="absolute inset-[24%] z-10" aria-live="polite">
            <svg viewBox="0 0 100 100" aria-hidden className="absolute -inset-[5%] size-[110%] -rotate-90">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="1" className="text-ink" />
              {motion && <circle key={`${i}-${paused}`} cx="50" cy="50" r="48" fill="none" stroke="var(--color-brand)" strokeWidth="1.6" strokeLinecap="round" pathLength={100} strokeDasharray="100" className="cov-anim" style={{ animation: `cov-progress ${INTERVAL}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }} />}
            </svg>
            <div className="absolute inset-0 overflow-hidden rounded-full bg-charcoal shadow-[0_30px_60px_-30px_#4b2a18]">
              {locations.map((x, idx) => (
                <Image key={x.slug} src={x.image} alt="" fill sizes="(min-width:1024px) 260px, 45vw" className={`object-cover transition-all duration-[1400ms] ease-out ${idx === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} />
              ))}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center text-white">
                <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#f4a37f] sm:text-[10px]">{loc.region}</p>
                <p key={loc.slug} className="display mt-1 animate-[fadeUp_.6s_ease-out] text-[clamp(1.35rem,5.4vw,2.4rem)] [text-wrap:balance]">{loc.name}</p>
                <Link href={`/locations/${loc.slug}`} className="btn btn-brand mt-3 !min-h-[38px] !gap-1.5 !px-4 !text-[11.5px] sm:!min-h-[42px] sm:!text-[12.5px]">View city <IconArrowUpRight size={14} stroke={2} /></Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[.16em] text-muted">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')} · {loc.areas.slice(0, 3).join(' · ')}</p>
      </div>

      {/* City list */}
      <div className="lg:col-span-6">
        <ul className="border-t border-ink/80">
          {locations.map((x, idx) => {
            const Ic = idx === 0 ? IconBuilding : idx === n - 1 ? IconMapPin : IconHome
            const on = idx === i
            return (
              <li key={x.slug} className="relative border-b border-ink/15">
                {on && motion && !paused && <span key={`bar-${i}`} aria-hidden className="cov-anim absolute -bottom-px left-0 h-[2px] origin-left bg-brand" style={{ animation: `cov-bar ${INTERVAL}ms linear forwards` }} />}
                <button type="button" onClick={() => setI(idx)} aria-pressed={on} className="group flex w-full items-center gap-4 py-4 text-left transition-[padding] duration-300 hover:pl-3 sm:py-5">
                  <Ic size={22} stroke={1.5} className={on ? 'text-brand' : 'text-muted'} />
                  <span className={`flex-1 text-[clamp(1.2rem,2.2vw,1.7rem)] font-extrabold tracking-tight transition-colors ${on ? 'text-ink' : 'text-ink/55'}`}>{x.name}</span>
                  <span className="hidden text-[10px] font-extrabold uppercase tracking-[.14em] text-muted sm:block">{on ? 'Now showing' : 'Available near you'}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <p className="mt-5 text-[13px] leading-relaxed text-muted"><span className="font-bold text-ink">Areas in {loc.name}:</span> {loc.areas.slice(0, 6).join(' · ')} and more.</p>
      </div>
    </div>
  )
}
