'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRight, IconMapPin, IconPaw, IconPlayerPlay } from '@tabler/icons-react'
import { petStories, petStoriesCopy, type PetStory } from '@/lib/stories'

function PetStoryCard({ story }: { story: PetStory }) {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [soon, setSoon] = useState(false)
  const hasVideo = Boolean(story.videoUrl)

  const toggle = () => {
    const v = video.current
    if (!hasVideo || !v) {
      setSoon(true)
      window.setTimeout(() => setSoon(false), 1800)
      return
    }
    if (v.paused) { v.muted = false; void v.play() } else v.pause()
  }

  // Muted hover preview only on devices that actually hover; never on touch.
  const preview = (on: boolean) => {
    const v = video.current
    if (!v || !hasVideo || !window.matchMedia('(hover: hover)').matches) return
    if (on && v.paused) { v.muted = true; void v.play().catch(() => {}) } else if (!on && !v.paused) { v.pause(); v.currentTime = 0 }
  }

  return (
    <li className="snap-start">
      <article
        onMouseEnter={() => preview(true)}
        onMouseLeave={() => preview(false)}
        className="group relative h-full overflow-hidden rounded-[10px] border border-line bg-charcoal transition-transform duration-500 ease-out hover:-translate-y-1.5"
      >
        <button type="button" onClick={toggle} aria-label={hasVideo ? `Play or pause: ${story.title}` : `${story.title} — video coming soon`} className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-offset-[-4px]" />
        <div className="relative aspect-[9/14]">
          {hasVideo && (
            <video ref={video} src={story.videoUrl} poster={story.image} playsInline muted preload="none" loop onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} className="absolute inset-0 size-full object-cover" />
          )}
          {!playing && (
            <Image src={story.image} alt={`${story.title} — ${story.service.toLowerCase()} at home`} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 31vw, 46vw" loading="lazy" style={{ objectPosition: story.imagePosition }} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          )}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-transparent" />

          <span className="absolute left-3 top-3 z-[5] rounded-full bg-paper/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-ink">{story.service}</span>
          {story.isPlaceholder && <span className="absolute right-3 top-3 z-[5] text-[10px] font-bold uppercase tracking-[.14em] text-white/75">Sample</span>}

          <span aria-hidden className={`absolute left-1/2 top-[42%] z-[5] grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_10px_30px_-10px_#00000080] transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white ${playing ? 'pointer-events-none opacity-0' : ''}`}>
            <IconPlayerPlay size={22} stroke={1.75} className="ml-0.5" fill="currentColor" />
          </span>
          {soon && <span role="status" className="absolute inset-x-0 top-[calc(42%+44px)] z-20 mx-auto w-fit rounded-full bg-charcoal/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white">Video coming soon</span>}

          <div className="absolute inset-x-0 bottom-0 z-[5] p-4 text-white">
            <h3 className="text-[15px] font-extrabold leading-tight tracking-tight">{story.title}</h3>
            <p className="mt-1.5 text-[12.5px] leading-snug text-white/85">“{story.review}”</p>
            <p className="mt-2.5 flex items-center gap-1.5 border-t border-white/25 pt-2.5 text-[10.5px] font-semibold uppercase tracking-[.1em] text-white/80">
              <span>{story.customer}</span><span aria-hidden>·</span><IconMapPin size={11} stroke={2} className="-mr-0.5 text-[#f4a37f]" /><span className="truncate">{story.location}</span>
            </p>
          </div>
        </div>
      </article>
    </li>
  )
}

export function PetStories() {
  const track = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState(0)
  const [edge, setEdge] = useState({ start: true, end: false })
  const drag = useRef({ down: false, x: 0, left: 0, moved: false })

  const sync = useCallback(() => {
    const el = track.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 })
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  const go = (dir: 1 | -1) => {
    touched()
    const el = track.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0')
    const visible = Math.max(1, Math.floor(el.clientWidth / step))
    el.scrollBy({ left: dir * step * Math.max(1, visible - 1), behavior: 'smooth' })
  }

  // Auto-advance one card every few seconds, looping back to the start. It keeps running after manual
  // navigation (arrows, keys, drag, swipe); a tick is only skipped while the user is mid-gesture or a video plays.
  const lastTouch = useRef(0)
  useEffect(() => {
    const el = track.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      if (document.hidden || drag.current.down) return
      if (Date.now() - lastTouch.current < 2500) return
      if ([...el.querySelectorAll('video')].some((v) => !v.paused)) return
      const card = el.querySelector('li')
      if (!card) return
      const max = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= max - 4) { el.scrollTo({ left: 0, behavior: 'smooth' }); return }
      el.scrollBy({ left: card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0'), behavior: 'smooth' })
    }, 3000)
    return () => window.clearInterval(id)
  }, [])
  const touched = () => { lastTouch.current = Date.now() }

  const onKey = (e: React.KeyboardEvent) => {
    touched()
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }

  // Mouse drag; touch and trackpad use native scrolling.
  const onPointerDown = (e: React.PointerEvent) => {
    touched()
    if (e.pointerType !== 'mouse' || !track.current) return
    drag.current = { down: true, x: e.clientX, left: track.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    const el = track.current
    if (!d.down || !el) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 5 && !d.moved) { d.moved = true; el.dataset.dragging = 'true' }
    if (d.moved) el.scrollLeft = d.left - dx
  }
  const endDrag = () => {
    const el = track.current
    drag.current.down = false
    if (el && drag.current.moved) window.setTimeout(() => { delete el.dataset.dragging }, 0)
  }

  const current = Math.min(petStories.length, Math.round(progress * (petStories.length - 1)) + 1)

  return (
    <section id="stories" className="overflow-hidden bg-sand py-12 md:py-12 md:py-16 lg:py-20" aria-labelledby="stories-title">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div data-reveal>
            <p className="label"><IconPaw size={14} stroke={1.75} className="-ml-1" /> {petStoriesCopy.eyebrow} <span className="text-ink/40">/ 01</span></p>
            <h2 id="stories-title" className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">
              {petStoriesCopy.heading[0]}<br /><em>{petStoriesCopy.heading[1]}</em>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{petStoriesCopy.description}</p>
          </div>
          <div data-reveal className="flex items-center gap-2" role="group" aria-label="Pet stories navigation">
            <button type="button" aria-label="Previous pet stories" disabled={edge.start} onClick={() => go(-1)} className="grid size-12 place-items-center rounded-[10px] border border-brand text-brand transition-colors duration-300 hover:bg-brand hover:text-white disabled:pointer-events-none disabled:border-line disabled:text-ink/30">
              <IconArrowLeft size={20} stroke={1.75} />
            </button>
            <button type="button" aria-label="Next pet stories" disabled={edge.end} onClick={() => go(1)} className="grid size-12 place-items-center rounded-[10px] border border-brand text-brand transition-colors duration-300 hover:bg-brand hover:text-white disabled:pointer-events-none disabled:border-line disabled:text-ink/30">
              <IconArrowRight size={20} stroke={1.75} />
            </button>
          </div>
        </div>

        <div className="-mr-[clamp(16px,3.4vw,48px)] mt-10 lg:mt-14">
          <ul
            ref={track}
            tabIndex={0}
            aria-label="Pet parent stories. Use left and right arrow keys to scroll."
            onScroll={sync}
            onTouchStart={touched}
            onTouchMove={touched}
            onWheel={touched}
            onKeyDown={onKey}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={(e) => { if (track.current?.dataset.dragging) { e.preventDefault(); e.stopPropagation() } }}
            data-stagger
            className="stories-track grid auto-cols-[calc((100%-var(--gap)*(var(--n)-1))/var(--n))] grid-flow-col gap-[var(--gap)] snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth -mt-2 pt-2 pb-2 pr-[clamp(16px,3.4vw,48px)] [--gap:12px] [--n:2.15] [overscroll-behavior-x:contain] [scrollbar-width:none] sm:[--gap:16px] sm:[--n:3.15] lg:[--n:4.4] xl:[--n:4.6] [&::-webkit-scrollbar]:hidden data-[dragging=true]:cursor-grabbing data-[dragging=true]:snap-none data-[dragging=true]:scroll-auto"
          >
            {petStories.map((s) => <PetStoryCard key={s.id} story={s} />)}
          </ul>
        </div>

        <div data-reveal className="mt-8 flex items-center gap-5">
          <div role="progressbar" aria-label="Scroll progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)} className="relative h-px flex-1 bg-ink/15">
            <span className="absolute -inset-y-px left-0 h-[3px] bg-brand transition-[width] duration-200" style={{ width: `${Math.max(8, progress * 100)}%` }} />
          </div>
          <span className="text-[11px] font-bold tabular-nums tracking-[.12em] text-muted">{String(current).padStart(2, '0')} / {String(petStories.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
