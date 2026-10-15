import Image from 'next/image'
import {
  IconArrowUpRight, IconBrandWhatsapp, IconCalendarEvent, IconCheck, IconDoorEnter,IconPaw, IconStethoscope,
} from '@tabler/icons-react'
import { CountUp } from './CountUp'
import { ServicesList } from './ServicesList'
import { LocationsCoverage } from './LocationsCoverage'
import { packages, stats, vetPoints, WHATSAPP } from '@/lib/content'

function Heading({ label, children, dark }: { label: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div data-reveal className={dark ? 'on-dark' : ''}>
      <p className="label">{label}</p>
      <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.6rem)]">{children}</h2>
    </div>
  )
}

/* ---------- 01 Intro ---------- */
export function Intro() {
  const row = stats.slice(0, 3)
  return (
    <section className="pb-4 pt-14 lg:pb-8 lg:pt-20">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Heading label="A little of everything. A lot of love.">Care that<br /><em>comes home.</em></Heading>
          </div>
          <p data-reveal className="max-w-sm text-[16px] leading-relaxed text-muted lg:col-span-4 lg:pb-3">
            Veterinary care, grooming and training from trusted professionals — brought to the one place your pet feels safest.
          </p>
        </div>
        <dl data-stagger className="mt-10 grid grid-cols-3 border-y border-line lg:mt-14">
          {row.map((s, i) => (
            <div key={s.label} className={`px-2 py-6 sm:px-8 sm:py-10 ${i > 0 ? 'border-l border-line' : 'pl-0 sm:pl-0'}`}>
              <dd className="text-[clamp(1.9rem,8.5vw,5.5rem)] font-extrabold leading-none tracking-[-.05em]"><CountUp value={s.value} /></dd>
              <dt className="mt-2 text-[10px] font-extrabold uppercase tracking-[.1em] text-muted sm:mt-3 sm:text-[11px] sm:tracking-[.18em]">{s.label}{i === 2 ? ' · at home' : ''}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- 02 Services ---------- */
export function Services() {
  return (
    <section id="services" className="py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <Heading label="Everything, under one roof — yours.">Everything they need.<br /><em>Without leaving home.</em></Heading>
        <ServicesList />
      </div>
    </section>
  )
}

/* ---------- 03 The home difference ---------- */
const reasons = [
  ['01', 'Their home. Their happy place.'],
  ['02', 'Your pet gets our full attention.'],
  ['03', 'Fits around your everyday.'],
]

export function Difference() {
  return (
    <section className="bg-sand">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]" data-clip>
          <Image src="/photos/comfort.jpg" alt="An Indian family relaxing at home with their golden retriever and cat" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[30%_50%]" data-parallax-img loading="lazy" />
        </div>
        <div className="flex flex-col justify-center px-[clamp(16px,5vw,88px)] py-12 md:py-16 lg:py-20">
          <Heading label="There’s no place like home.">Less clinic stress.<br /><em>More tail wags.</em></Heading>
          <ol data-stagger className="mt-12 border-t border-ink/15">
            {reasons.map(([n, t]) => (
              <li key={n} className="flex items-baseline gap-6 border-b border-ink/15 py-6">
                <span className="text-[13px] font-extrabold tabular-nums text-brand">{n}</span>
                <span className="text-[clamp(1.4rem,2.3vw,2rem)] font-extrabold leading-tight tracking-tight">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- 04 Visual story ---------- */
export function Story() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-x-0 -bottom-[8%] -top-[8%] -z-10" data-parallax-img>
        <Image src="/photos/cta.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_30%]" loading="lazy" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />
      <div className="wrap on-dark w-full pb-14 pt-40 lg:pb-20">
        <h2 data-reveal className="display max-w-4xl text-[clamp(2.8rem,7vw,6.6rem)]">Professional care.<br /><em>Personal attention.</em></h2>
        <div data-reveal className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-white/25 pt-6">
          <p className="max-w-sm text-[15px] leading-relaxed text-white/80">Licensed professionals bringing trusted pet care directly to your doorstep.</p>
          <a href="#booking" className="tlink text-[14px]">Meet a kinder way to care <IconArrowUpRight size={17} stroke={2} /></a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 05 How it works ---------- */
const steps = [
  { Icon: IconPaw, title: 'Choose their care', text: 'Veterinary, grooming or training — pick what your pet needs.' },
  { Icon: IconCalendarEvent, title: 'Find a time that fits', text: 'Share a convenient slot and our team will call to confirm.' },
  { Icon: IconDoorEnter, title: 'We’ll be at your door', text: 'A trusted professional arrives, ready to care.' },
]

export function Process() {
  return (
    <section id="how-it-works" className="py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <Heading label="Less planning. More petting.">Great care.<br /><em>Three simple steps.</em></Heading>
        <div className="relative mt-16">
          <div aria-hidden data-line className="absolute left-0 right-0 top-[27px] hidden h-px origin-left bg-ink/20 md:block" />
          <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map(({ Icon, title, text }, i) => (
              <li key={title} data-step className="relative">
                <div className="relative flex items-center gap-4">
                  <span className="grid size-[54px] place-items-center rounded-full border border-ink/20 bg-ivory text-brand"><Icon size={24} stroke={1.5} /></span>
                  <span className="text-[clamp(3.4rem,6vw,5.4rem)] font-extrabold leading-none tracking-[-.05em] text-ink/10">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-[24px] font-extrabold leading-tight tracking-tight">{title}</h3>
                <p className="mt-2 max-w-[300px] text-[14.5px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- 06 Veterinary ---------- */
export function Veterinary() {
  return (
    <section id="veterinary" className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:order-2 lg:col-span-7">
          <div data-clip className="relative aspect-[4/3.4] overflow-hidden rounded-tr-[110px] rounded-bl-[110px] rounded-br-md rounded-tl-md">
            <Image src="/photos/vet.jpg" alt="Veterinarian examining a golden retriever at home" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover object-[60%_50%]" data-parallax-img loading="lazy" />
          </div>
          <div data-reveal className="absolute -bottom-6 left-4 border-l-[3px] border-brand bg-paper p-5 shadow-[0_24px_40px_-20px_#4b2a1855] lg:-left-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">Home consultation from</p>
            <p className="mt-1 text-[56px] font-extrabold leading-none tracking-[-.05em]">₹499</p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Heading label="A healthier pet. A happier you.">Expert veterinary care.<br /><em>Without the clinic stress.</em></Heading>
          <ul data-stagger className="mt-9 border-t border-line">
            {vetPoints.map((p) => (
              <li key={p} className="flex items-center gap-4 border-b border-line py-4 text-[15.5px] font-semibold"><IconCheck size={18} stroke={2.25} className="shrink-0 text-brand" />{p}</li>
            ))}
          </ul>
          <a data-reveal href="#booking" className="btn btn-brand mt-9"><IconStethoscope size={18} stroke={1.75} /> Book a Vet Visit <IconArrowUpRight size={17} stroke={2} /></a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 07 Grooming + Training ---------- */
const spread = [
  { club: 'Good-hair-day club', title: 'Fresh coat. Fresh confidence.', text: 'Gentle professional grooming at home.', href: '/grooming', cta: 'Explore grooming', img: '/photos/groom.jpg', alt: 'Groomer gently brushing a dog at home', pos: '50% 45%' },
  { club: 'Good habits, great friendships', title: 'A better bond starts here.', text: 'Positive dog training at home.', href: '/dog-training', cta: 'Explore training', img: '/photos/train.jpg', alt: 'Trainer teaching a labrador a command at home', pos: '50% 40%' },
]

export function Spread() {
  return (
    <section className="grid md:grid-cols-2">
      {spread.map((s) => (
        <a key={s.club} href={s.href} className="group relative isolate block min-h-[560px] overflow-hidden text-white lg:min-h-[760px]">
          <Image src={s.img} alt={s.alt} fill sizes="(min-width:768px) 50vw, 100vw" style={{ objectPosition: s.pos }} className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" loading="lazy" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
            <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#f4a37f]">{s.club}</p>
            <h3 className="display mt-3 max-w-md text-[clamp(2rem,3.6vw,3.4rem)]">{s.title}</h3>
            <p className="mt-3 text-[15px] text-white/80">{s.text}</p>
            <span className="tlink mt-6 text-[14px]">{s.cta} <IconArrowUpRight size={16} stroke={2} /></span>
          </div>
        </a>
      ))}
    </section>
  )
}

/* ---------- 08 Packages (renders only with real data) ---------- */
export function Packages() {
  if (!packages.length) return null
  const list = packages.slice(0, 3)
  return (
    <section id="packages" className="py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <Heading label="Care, planned ahead.">Packages made<br /><em>for every pet.</em></Heading>
        <div data-stagger className="mt-12 grid border-y border-line md:grid-cols-3">
          {list.map((p, i) => (
            <div key={p.name} className={`py-10 md:px-8 ${i > 0 ? 'border-t border-line md:border-l md:border-t-0' : 'md:pl-0'}`}>
              <p className="text-[12px] font-extrabold tabular-nums text-brand">0{i + 1}</p>
              <h3 className="mt-3 text-[26px] font-extrabold tracking-tight">{p.name}</h3>
              <p className="mt-5 text-[44px] font-extrabold leading-none tracking-[-.04em]">{p.price}</p>
              {p.note && <p className="mt-1 text-[13px] text-muted">{p.note}</p>}
              {p.features && <ul className="mt-6 space-y-2 text-[14px]">{p.features.map((f) => <li key={f} className="flex gap-2.5"><IconCheck size={16} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{f}</li>)}</ul>}
            </div>
          ))}
        </div>
        <a href="#booking" className="tlink mt-8">View all packages <IconArrowUpRight size={16} stroke={2} /></a>
      </div>
    </section>
  )
}

/* ---------- 10 Locations ---------- */
export function Locations() {
  return (
    <section id="locations" className="overflow-hidden bg-sand py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <Heading label="Good care is closer than you think.">In your city.<br /><em>At your doorstep.</em></Heading>
        <LocationsCoverage />
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section className="on-dark overflow-hidden bg-charcoal text-white">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[clamp(16px,4vw,72px)] py-14 lg:col-span-7 lg:py-24">
          <h2 data-reveal className="display text-[clamp(2.8rem,6vw,5.6rem)]">Your pet deserves<br /><em>care without the stress.</em></h2>
          <p data-reveal className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">Professional pet care delivered directly to your doorstep.</p>
          <div data-reveal className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#booking" className="btn btn-brand">Book a Home Visit <IconArrowUpRight size={17} stroke={2} /></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp Us</a>
          </div>
        </div>
        <div data-clip className="relative min-h-[460px] lg:col-span-5 lg:min-h-[640px]">
          <Image src="/photos/cta.jpg" alt="An Indian pet parent hugging his golden retriever at home" fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover object-[60%_40%]" loading="lazy" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
