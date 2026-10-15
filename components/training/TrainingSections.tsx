import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconBrandWhatsapp, IconCheck, IconDoorEnter, IconDroplet, IconMoodSmile, IconRoute, IconX } from '@tabler/icons-react'
import { BookLink, SectionHead, waHref } from '@/components/pages/bits'
import { inr } from '@/lib/vet-data'
import { trainingCompare, trainingPackages } from '@/lib/training-data'

/* ---------- Packages: featured + stacked rows ---------- */
export function Packages() {
  const [feat, ...rest] = trainingPackages
  return (
    <section id="packages" className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <SectionHead label="Official training packages">Programs built<br /><em>around your dog.</em></SectionHead>

        <article className="mt-12 grid overflow-hidden rounded-[28px] bg-sand lg:grid-cols-12">
          <div className="relative min-h-[340px] lg:col-span-5" data-clip>
            <Image src="/photos/tr-session.jpg" alt="Trainer teaching a beagle puppy to sit" fill sizes="(min-width:1024px) 40vw, 100vw" loading="lazy" className="object-cover object-[50%_40%]" />
            <span className="absolute left-4 top-4 rounded-full bg-paper px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">Start here</span>
          </div>
          <div className="p-7 sm:p-10 lg:col-span-7 lg:p-12">
            <h3 className="display text-[clamp(2rem,3.6vw,3.2rem)]">{feat.name}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/75">{feat.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">{feat.includes.map((x) => <li key={x} className="flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[13px] font-bold"><IconCheck size={15} stroke={2.25} className="text-brand" />{x}</li>)}</ul>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-ink/15 pt-6">
              <p><span className="text-[56px] font-extrabold leading-none tracking-[-.045em]">{inr(feat.price)}</span><span className="ml-2 text-[12px] font-bold uppercase tracking-[.12em] text-muted">{feat.per}</span></p>
              <div className="flex flex-wrap gap-2.5"><BookLink service="Dog Training" pkg={feat.name} className="!rounded-full">Book now</BookLink><a href={waHref(`Hi, I would like full details of: ${feat.name} (${inr(feat.price)} per 12 sessions) — Dog Training, The Paws Friend.`)} target="_blank" rel="noopener noreferrer" className="btn btn-line !min-h-[42px] !rounded-full !px-4 text-[12.5px]">View full details</a></div>
            </div>
          </div>
        </article>

        <ul data-stagger className="mt-6 border-t border-ink/80">
          {rest.map((p, i) => (
            <li key={p.id} className="grid items-center gap-x-8 gap-y-4 border-b border-line py-8 md:grid-cols-[auto_1.3fr_1fr_auto]">
              <span className="hidden text-[13px] font-extrabold tabular-nums text-brand md:block">0{i + 2}</span>
              <div><h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold leading-tight tracking-tight">{p.name}</h3><p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">{p.text}</p></div>
              <ul className="flex flex-wrap gap-2">{p.includes.map((x) => <li key={x} className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] font-bold"><IconCheck size={13} stroke={2.25} className="text-brand" />{x}</li>)}</ul>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-end">
                <p><span className="text-[32px] font-extrabold tracking-[-.04em]">{inr(p.price)}</span><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-muted">{p.per}</span></p>
                <div className="flex flex-col gap-2"><BookLink service="Dog Training" pkg={p.name} className="!rounded-full">Book now</BookLink><a href={waHref(`Hi, I would like full details of: ${p.name} (${inr(p.price)} per 12 sessions) — Dog Training, The Paws Friend.`)} target="_blank" rel="noopener noreferrer" className="text-center text-[11.5px] font-bold underline underline-offset-4 hover:text-brand">View full details</a></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- Specialized care: image with four skills around it ---------- */
const skills = [
  { t: 'Potty Routine', Icon: IconDroplet, pos: 'left-3 top-5 sm:left-8 sm:top-10' },
  { t: 'Anti-Biting', Icon: IconMoodSmile, pos: 'right-3 top-5 sm:right-8 sm:top-10' },
  { t: 'Leash Heel Walk', Icon: IconRoute, pos: 'bottom-5 left-3 sm:bottom-10 sm:left-8' },
  { t: 'Guest Manners', Icon: IconDoorEnter, pos: 'bottom-5 right-3 sm:bottom-10 sm:right-8' },
]

export function Skills() {
  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div className="text-center"><SectionHead label="Specialized canine care" className="mx-auto max-w-2xl">Looking to train your dog?<br /><em>We do that best.</em></SectionHead></div>
        <div data-clip className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[16/10] lg:aspect-[16/8]">
          <Image src="/photos/tr-skills.jpg" alt="Pet parent practicing a stay command with her golden retriever at home" fill sizes="(min-width:1360px) 1264px, 100vw" loading="lazy" className="object-cover object-[50%_55%]" data-parallax-img />
          {skills.map(({ t, Icon, pos }) => (
            <p key={t} className={`absolute ${pos} flex items-center gap-2.5 rounded-full bg-paper/95 py-2 pl-2 pr-4 text-[12px] font-extrabold shadow-[0_14px_30px_-16px_#00000070] sm:text-[13px]`}>
              <span className="grid size-8 place-items-center rounded-full bg-brand text-white sm:size-9"><Icon size={18} stroke={1.75} /></span>{t}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- At-home vs boarding ---------- */
export function Compare() {
  return (
    <section className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <SectionHead label="At-home doorstep training vs boarding kennels">Where your dog learns<br /><em>changes everything.</em></SectionHead>
        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-0">
          <div className="rounded-[20px] border border-brand/40 bg-sand p-6 sm:p-9 lg:rounded-r-none">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-brand"><IconCheck size={17} stroke={2.25} /> The Paws Friend at-home</p>
            <dl className="mt-5">{trainingCompare.map((r) => <div key={r.feature} className="border-t border-ink/15 py-4"><dt className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">{r.feature}</dt><dd className="mt-1 text-[16px] font-extrabold leading-snug">{r.us}</dd></div>)}</dl>
          </div>
          <div className="rounded-[20px] border border-line bg-ivory p-6 sm:p-9 lg:rounded-l-none lg:border-l-0">
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-muted"><IconX size={17} stroke={2.25} /> Traditional boarding kennel</p>
            <dl className="mt-5">{trainingCompare.map((r) => <div key={r.feature} className="border-t border-line py-4"><dt className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted/80">{r.feature}</dt><dd className="mt-1 text-[16px] font-semibold leading-snug text-muted">{r.them}</dd></div>)}</dl>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
export function TrainingCTA() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-charcoal text-white">
      <Image src="/photos/tr-cta.jpg" alt="" fill sizes="100vw" loading="lazy" className="-z-10 object-cover object-[70%_40%]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/10" />
      <div className="wrap py-16 md:py-24 lg:py-28">
        <h2 data-reveal className="display max-w-3xl text-[clamp(2.4rem,5.4vw,5rem)]">Ready to give your dog the gift of <em>calm obedience?</em></h2>
        <p data-reveal className="mt-6 max-w-md text-[16px] leading-relaxed text-white/80">Book a 100% free doorstep training evaluation demo today.</p>
        <div data-reveal className="mt-9 flex flex-wrap gap-4">
          <Link href="#demo" className="btn btn-brand">Book free demo now <IconArrowUpRight size={17} stroke={2} /></Link>
          <a href={waHref('Hi, I would like to book a free dog training demo with The Paws Friend.')} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp us</a>
        </div>
      </div>
    </section>
  )
}
