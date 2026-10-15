import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconBolt, IconBrain } from '@tabler/icons-react'
import { TrainingForm } from './TrainingForm'
import { inr } from '@/lib/vet-data'
import { trainingOffer, trainingRating } from '@/lib/training-data'

export function TrainingHero() {
  const o = trainingOffer
  const pct = Math.round((o.booked / o.total) * 100)
  return (
    <section id="top" className="relative overflow-hidden bg-paper pb-20 pt-8 md:pt-12 lg:pb-28">
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div data-intro className="lg:col-span-6 lg:pb-24">
            <p className="label"><IconBrain size={15} stroke={1.75} className="-ml-1" /> Science-backed at-home dog training</p>
            <div><h1 data-sc="title" className="display mt-5 text-[clamp(2.7rem,5.6vw,5.4rem)]">
              NCR&apos;s #1 Doorstep<br /><span className="text-brand">Professional</span><br />Dog Training
            </h1></div>
            <p className="mt-6 max-w-[500px] text-[15.5px] leading-relaxed text-muted">
              Certified dog behavioral trainers visiting your doorstep across Delhi NCR. 100% force-free positive reinforcement methodology tailored for your home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="#demo" className="btn btn-brand">Book free demo <IconArrowUpRight size={17} stroke={2} /></Link>
              <Link href="#problems" className="tlink">Explore training <IconArrowUpRight size={16} stroke={2} /></Link>
            </div>
            <p className="mt-9 flex items-center gap-3 border-t border-line pt-5 text-[13px]">
              <span aria-label="5 out of 5 stars" className="tracking-[.25em] text-brand">{trainingRating.stars}</span>
              <span><b className="font-extrabold">{trainingRating.score}</b> <span className="text-muted">· {trainingRating.dogs}</span></span>
            </p>
          </div>

          <div data-sc="image" className="relative lg:col-span-6">
            <div data-clip className="relative aspect-[4/4.7] overflow-hidden rounded-[28px] rounded-tl-[150px] rounded-br-[150px] border border-line bg-sand">
              <Image src="/photos/tr-hero.jpg" alt="Indian dog trainer teaching a labrador a hand signal while the owner watches" fill priority sizes="(min-width:1024px) 48vw, 100vw" className="object-cover object-[45%_40%]" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            <div className="absolute -left-2 top-10 border-l-[3px] border-brand bg-paper p-4 shadow-[0_22px_40px_-24px_#4b2a1870] sm:-left-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">Free demo</p>
              <p className="mt-1 text-[11px] text-muted">Worth</p>
              <p className="text-[30px] font-extrabold leading-none tracking-[-.04em]">{inr(o.value)}</p>
            </div>
            <p className="absolute right-4 top-5 flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-white"><IconBolt size={14} stroke={2} /> Only {o.slotsLeft} free slots left</p>
          </div>
        </div>

        {/* Offer + booking, overlapping the photo */}
        <div id="demo" className="relative z-10 mt-12 grid scroll-mt-28 gap-6 lg:-mt-20 lg:grid-cols-12 lg:gap-8">
          <div data-sc="offer" className="on-dark flex flex-col justify-between bg-charcoal p-7 text-white sm:p-9 lg:col-span-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#f4a37f]">Your first demo session</p>
            <p className="mt-2 text-[13.5px] text-white/70">Experience a complete professional session at home.</p>
            <ol className="mt-6 border-t border-white/20">
              {o.inclusions.map((i) => (
                <li key={i.n} className="flex items-baseline gap-4 border-b border-white/15 py-3.5 text-[14px]">
                  <span className="text-[11px] font-extrabold tabular-nums text-[#f4a37f]">{i.n}</span>
                  <span className="flex-1">{i.name}</span>
                  <span className="text-white/60">{inr(i.value)}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/60">Total value</p>
                <p className="mt-1 text-[22px] font-bold text-white/50 line-through decoration-brand decoration-2">{inr(o.value)}</p>
              </div>
              <p className="display text-[clamp(3.6rem,7vw,5.6rem)] text-[#f08a5b]">FREE</p>
            </div>
            <div className="mt-6">
              <p className="flex justify-between text-[10.5px] font-extrabold uppercase tracking-[.14em]"><span>Only {o.slotsLeft} free slots left this month</span><span className="text-white/60">{o.booked}/{o.total} booked</span></p>
              <div role="progressbar" aria-label="Free demo slots booked this month" aria-valuemin={0} aria-valuemax={o.total} aria-valuenow={o.booked} className="mt-2.5 h-1.5 bg-white/20"><div className="h-full bg-[#f08a5b]" style={{ width: `${pct}%` }} /></div>
            </div>
          </div>
          <div data-sc="form" className="lg:col-span-7"><TrainingForm /></div>
        </div>
      </div>
    </section>
  )
}
