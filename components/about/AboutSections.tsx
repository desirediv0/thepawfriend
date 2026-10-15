import Image from 'next/image'
import Link from 'next/link'
import {
  IconArrowUpRight, IconBrandWhatsapp, IconCalendarTime, IconCheck, IconHeart, IconMessageCircle, IconPaw, IconStar, IconStethoscope, IconUsers,
} from '@tabler/icons-react'
import { CountUp } from '@/components/home/CountUp'
import { whatsappHref } from '@/lib/contact'

const label = 'label'
const h2 = 'display mt-4 text-[clamp(2.2rem,4.8vw,4.4rem)]'

/* ---------- Hero ---------- */
export function AboutHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pb-16 pt-8 md:pt-12 lg:pb-24">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div data-intro className="relative z-10 lg:col-span-7">
            <p className={label}><IconPaw size={15} stroke={1.75} className="-ml-1" /> Our story · Our passion · Your trust</p>
            <h1 data-lines className="display mt-5 text-[clamp(3rem,7vw,6.6rem)]" aria-label="We Treat Pets Like Family.">
              <span aria-hidden className="block overflow-hidden pb-[.06em]"><span className="block">We treat pets</span></span>
              <span aria-hidden className="block overflow-hidden pb-[.06em]"><span className="block text-brand">like family.</span></span>
            </h1>
            <p className="mt-6 max-w-[500px] text-[15.5px] leading-relaxed text-muted">The Paws Friend was founded with one belief — every pet deserves professional healthcare in the comfort of their own home. No clinics, no cages, no stress.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/services" className="btn btn-brand">Explore our services <IconArrowUpRight size={17} stroke={2} /></Link>
              <Link href="/contact" className="btn btn-line">Talk to us <IconMessageCircle size={17} stroke={1.75} /></Link>
            </div>
          </div>
          <div className="relative lg:-ml-10 lg:col-span-5">
            <div data-sc="hero40" className="relative">
              <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-[24px] rounded-tr-[140px] bg-sand" />
              <div data-clip className="relative aspect-[4/4.9] overflow-hidden rounded-[24px] rounded-tr-[140px] border-[6px] border-paper shadow-[0_44px_80px_-46px_#4b2a1880]">
                <Image src="/photos/ab-hero.jpg" alt="Indian veterinarian gently examining a golden retriever at home" fill priority sizes="(min-width:1024px) 42vw, 100vw" className="object-cover object-[50%_40%]" />
              </div>
              <p className="absolute -left-2 bottom-10 max-w-[200px] border-l-[3px] border-brand bg-paper p-4 text-[11px] font-extrabold uppercase leading-snug tracking-[.14em] shadow-[0_22px_40px_-24px_#4b2a1870] sm:-left-8">Care, where they feel safest.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Stats strip ---------- */
const stats = [
  { v: '10+', l: 'Clinical experience', Icon: IconStethoscope },
  { v: '5,200+', l: 'Happy pet parents', Icon: IconHeart },
  { v: '30+', l: 'Expert vets', Icon: IconUsers },
  { v: '4.8★', l: 'Average rating', Icon: IconStar },
  { v: '10+', l: 'Years of care', Icon: IconCalendarTime },
]

export function AboutStats() {
  return (
    <section className="bg-ivory">
      <dl data-stagger className="wrap grid grid-cols-2 border-b border-line lg:grid-cols-5">
        {stats.map(({ v, l, Icon }, i) => (
          <div key={l} className={`px-3 py-8 lg:px-8 lg:py-12 ${i % 2 ? 'border-l border-line lg:border-l-0' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-line' : 'lg:pl-0'} ${i === 4 ? 'col-span-2 border-l-0 lg:col-span-1' : ''}`}>
            <Icon size={20} stroke={1.5} className="text-brand" />
            <dd className="mt-3 text-[clamp(2.4rem,4.4vw,3.8rem)] font-extrabold leading-none tracking-[-.05em]"><CountUp value={v} /></dd>
            <dt className="mt-2 text-[10.5px] font-extrabold uppercase tracking-[.16em] text-muted">{l}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* ---------- Story / origin ---------- */
export function AboutStory() {
  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <div data-clip className="relative aspect-[4/5] overflow-hidden rounded-[24px] rounded-bl-[120px] bg-sand">
            <Image src="/photos/ab-story.jpg" alt="Indian veterinarian talking to a pet parent beside a labrador at home" fill sizes="(min-width:1024px) 40vw, 100vw" loading="lazy" className="object-cover object-[45%_50%]" data-parallax-img />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div data-reveal><p className={label}>Why we started</p><h2 className={h2}>Care should feel<br /><em>like home.</em></h2></div>
          <div data-stagger className="mt-8 max-w-xl space-y-5 text-[16px] leading-relaxed text-ink/80">
            <p>The Paws Friend was founded with one belief — every pet deserves professional healthcare in the comfort of their own home.</p>
            <p>For many pets, a clinic visit means travel, crowded waiting rooms and cages — and for busy pet parents, fitting it all around a schedule is its own stress.</p>
            <p>So we brought the care to the doorstep: licensed veterinary professionals, genuine compassion, and the calm of a home environment — where pets are at their most comfortable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Mission ---------- */
const missionPoints = ['Same-day doorstep appointments', 'Transparent, flat-rate pricing', 'No hidden charges — ever']

export function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-paper py-14 lg:py-0">
      <div className="grid lg:min-h-[720px] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-[clamp(16px,4vw,72px)] lg:col-span-7 lg:py-28 lg:pl-[max(72px,calc((100vw-1360px)/2+48px))]">
          <div data-reveal><p className={label}>Our mission</p><h2 className={h2}>Accessible care,<br /><em>every doorstep.</em></h2></div>
          <p data-reveal className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/80">Our mission is simple — make world-class veterinary care accessible to every pet parent, regardless of location or schedule. We eliminate the stress of clinic visits by bringing licensed professionals, sterile equipment, and genuine compassion directly to your door. Because your pet&apos;s comfort is our first prescription.</p>
          <ul data-stagger className="mt-9 max-w-xl border-t border-ink/80">
            {missionPoints.map((p) => (
              <li key={p} className="group relative flex items-center gap-4 border-b border-line py-5 transition-[padding] duration-300 hover:pl-4">
                <span aria-hidden className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 bg-brand transition-[height] duration-300 group-hover:h-8" />
                <IconCheck size={20} stroke={2.25} className="text-brand" />
                <span className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-extrabold tracking-tight">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div data-clip className="relative mt-12 min-h-[420px] lg:col-span-5 lg:mt-0 lg:-ml-16">
          <Image src="/photos/vet.jpg" alt="Veterinarian caring for a golden retriever at home" fill sizes="(min-width:1024px) 45vw, 100vw" loading="lazy" className="object-cover object-[62%_50%]" data-parallax-img />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-paper/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ---------- Statement ---------- */
export function AboutStatement() {
  return (
    <section className="relative overflow-hidden bg-sand py-14 md:py-20 lg:py-24">
      <IconPaw aria-hidden size={420} stroke={0.6} className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-ink/[.07] lg:block" />
      <div className="wrap relative">
        <p data-reveal className="display max-w-5xl text-[clamp(2.2rem,5.6vw,5.4rem)]">Because your pet&apos;s comfort<br /><em>is our first prescription.</em></p>
      </div>
    </section>
  )
}

/* ---------- Vision ---------- */
const visionPoints = [
  { k: 'Growth', t: 'Pan-India expansion by 2030' },
  { k: 'Technology', t: 'AI-powered preventive health plans' },
  { k: 'Community', t: 'Community wellness programs' },
]

export function AboutVision() {
  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div data-reveal className="lg:col-span-6"><p className={label}>Our vision</p><h2 className={h2}>A healthier future<br /><em>for every pet.</em></h2></div>
          <p data-reveal className="max-w-xl self-end text-[16px] leading-relaxed text-ink/80 lg:col-span-6">We envision an India where no pet suffers due to lack of access to healthcare. By 2030, we aim to be present in every major city — connecting India&apos;s finest veterinarians with pet families through technology and care. We are building the infrastructure for preventive pet health, one home visit at a time.</p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div aria-hidden data-line className="absolute left-0 right-0 top-[9px] hidden h-px origin-left bg-ink/25 lg:block" />
          <ol data-stagger className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            <li className="relative lg:pr-4"><span aria-hidden className="mb-5 hidden size-[19px] rounded-full bg-ink lg:block" /><p className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-none tracking-[-.04em]">2026</p><p className="mt-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-muted">Where we are</p></li>
            {visionPoints.map((v, i) => (
              <li key={v.k} className="relative lg:pr-4">
                <span aria-hidden className="mb-5 hidden size-[19px] rounded-full border-[3px] border-brand bg-ivory lg:block" />
                <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-brand">0{i + 1} · {v.k}</p>
                <p className="mt-2 flex gap-2.5 text-[clamp(1.15rem,1.7vw,1.4rem)] font-extrabold leading-snug tracking-tight"><IconCheck size={19} stroke={2.25} className="mt-1 shrink-0 text-brand" />{v.t}</p>
              </li>
            ))}
            <li className="relative lg:pr-4"><span aria-hidden className="mb-5 hidden size-[19px] rounded-full bg-brand lg:block" /><p className="text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-none tracking-[-.04em] text-brand">2030</p><p className="mt-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-muted">Every major city</p></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- Image band ---------- */
export function AboutImageBand() {
  return (
    <section className="relative isolate flex min-h-[460px] items-end md:min-h-[540px] overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-x-0 -bottom-[8%] -top-[8%] -z-10" data-parallax-img>
        <Image src="/photos/ab-family.jpg" alt="Indian family with their dog and cat while a veterinarian gently checks the dog at home" fill sizes="100vw" loading="lazy" className="object-cover object-[50%_45%]" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
      <div className="wrap on-dark w-full pb-10 pt-28 lg:pb-14">
        <p data-reveal className="display max-w-3xl text-[clamp(2.2rem,5vw,4.6rem)]">Professional care.<br /><em>Right where they feel at home.</em></p>
      </div>
    </section>
  )
}

/* ---------- Why doorstep ---------- */
const why = [
  ['01', 'No clinic stress', 'Care happens in the comfort of home.'],
  ['02', 'Professional expertise', 'Licensed veterinary professionals come to you.'],
  ['03', 'Transparent pricing', 'Clear, upfront pricing without hidden charges.'],
  ['04', 'Pet-first experience', 'Every interaction prioritizes your pet’s comfort.'],
]

export function AboutWhy() {
  return (
    <section className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal><p className={label}>What makes us different</p><h2 className={h2}>Why pet parents choose<br /><em>doorstep care.</em></h2></div>
        <ol data-stagger className="mt-12 grid border-y border-ink/80 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(([n, t, d], i) => (
            <li key={n} className={`p-7 lg:p-8 ${i ? 'border-t border-line sm:border-t-0 sm:border-l' : ''} ${i === 2 ? 'sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l' : ''} ${i === 3 ? 'sm:border-t lg:border-t-0' : ''}`}>
              <p className="text-[13px] font-extrabold tabular-nums text-brand">{n}</p>
              <h3 className="mt-6 text-[20px] font-extrabold uppercase leading-tight tracking-tight">{t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- Final CTA (combined with the brand closing CTA) ---------- */
export function AboutCTA() {
  return (
    <section className="on-dark overflow-hidden bg-charcoal text-white">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[clamp(16px,4vw,72px)] py-14 lg:col-span-7 lg:py-24">
          <h2 data-reveal className="display text-[clamp(2.6rem,5.4vw,5.2rem)]">Ready to experience<br /><em>the difference?</em></h2>
          <p data-reveal className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70">Join thousands of pet parents who trust The Paws Friend for doorstep professional care. Expert veterinary care delivered straight to your home — no travel, no stress.</p>
          <div data-reveal className="mt-9 flex flex-wrap gap-4">
            <Link href="/book" className="btn btn-brand">Book your first visit <IconArrowUpRight size={17} stroke={2} /></Link>
            <Link href="/services" className="btn btn-line border-white/40 hover:bg-white hover:text-ink">View all services</Link>
          </div>
          <a data-reveal href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-white/80 hover:text-white"><IconBrandWhatsapp size={18} stroke={1.75} /> Or WhatsApp us on +91 9211338489</a>
        </div>
        <div data-clip className="relative min-h-[460px] lg:col-span-5 lg:min-h-[600px]">
          <Image src="/photos/ab-calm.jpg" alt="Indian pet parent with a chai beside her relaxed golden retriever after a vet visit" fill sizes="(min-width:1024px) 42vw, 100vw" loading="lazy" className="object-cover object-[50%_45%]" data-parallax-img />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />
        </div>
      </div>
      <dl data-stagger className="wrap grid border-t border-white/20 sm:grid-cols-3">
        {[['5200+', 'Happy pet parents'], ['4.8 ★', 'Average rating'], ['6 Cities', 'Delhi · Gurgaon · Noida · Gr. Noida · Ghaziabad · Faridabad']].map(([v, l], i) => (
          <div key={l} className={`py-5 sm:px-8 sm:py-8 ${i ? 'border-t border-white/20 sm:border-l sm:border-t-0' : 'sm:pl-0'}`}>
            <dd className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-.04em]">{v}</dd>
            <dt className="mt-2 text-[11px] font-bold uppercase tracking-[.14em] text-white/60">{l}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
