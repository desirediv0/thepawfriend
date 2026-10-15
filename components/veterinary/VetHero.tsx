import Image from 'next/image'
import { IconArrowUpRight, IconCertificate, IconShieldCheck, IconStethoscope } from '@tabler/icons-react'
import { BookingPanel } from '@/components/pages/BookingPanel'
import { vetStats } from '@/lib/vet-data'

export function VetHero() {
  return (
    <section id="top" className="relative bg-paper pt-8 md:pt-12">
      {/* clinical grid texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.5] [background-image:linear-gradient(to_right,#ddd5ca55_1px,transparent_1px)] [background-size:calc(100%/12)_100%]" />
      <div className="wrap relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-intro className="lg:col-span-6">
            <p className="label"><IconStethoscope size={15} stroke={1.75} className="-ml-1" /> Veterinary services &amp; diagnostics</p>
            <h1 className="display mt-5 text-[clamp(2.7rem,5.6vw,5.4rem)]">
              Expert Veterinary Care.<br /><span className="text-brand">Right at Your Doorstep.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-muted">
              Certified vet doctors delivering physical consultations, blood tests, 10-minute Parvo &amp; Distemper rapid kits and cold-chain vaccines directly to your door in Delhi NCR.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#book" className="btn btn-brand">Book a Vet Visit <IconArrowUpRight size={17} stroke={2} /></a>
              <a href="#services" className="tlink">Explore services <IconArrowUpRight size={16} stroke={2} /></a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div aria-hidden className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[6px] border border-brand/40 lg:block" />
            <div data-clip className="relative aspect-[4/4.6] overflow-hidden rounded-[6px] border border-line bg-sand sm:aspect-[4/3.6] lg:aspect-[5/5.2]">
              <Image src="/photos/vet-hero.jpg" alt="Indian veterinarian examining a labrador's ear at home" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[50%_35%]" />
              <p className="absolute left-4 top-4 flex items-center gap-2 rounded-[4px] bg-charcoal px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-white"><IconShieldCheck size={15} stroke={1.75} className="text-[#f4a37f]" /> Certified BVSc vets</p>
              <p className="absolute bottom-4 right-4 flex items-center gap-2 rounded-[4px] bg-paper/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.14em]"><IconCertificate size={15} stroke={1.75} className="text-brand" /> Zero clinic cross-infection</p>
            </div>
            <div className="absolute -bottom-6 left-4 border border-line border-l-[3px] border-l-brand bg-paper p-4 shadow-[0_18px_34px_-22px_#4b2a1860] lg:-left-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">Vet home visit</p>
              <p className="mt-1 text-[38px] font-extrabold leading-none tracking-[-.04em]">₹499</p>
              <p className="mt-1 text-[11px] text-muted">consultation · Save ₹400</p>
            </div>
          </div>
        </div>

        <dl data-stagger className="mt-16 grid grid-cols-2 border-y border-line bg-paper/80 lg:mt-20 lg:grid-cols-4">
          {vetStats.map((s, i) => (
            <div key={s.label} className={`px-4 py-6 lg:px-9 lg:py-8 ${i % 2 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l' : ''}`}>
              <dd className="text-[30px] font-extrabold leading-none tracking-[-.04em] lg:text-[42px]">{s.value}</dd>
              <dt className="mt-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="wrap relative pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-6 lg:pt-6">
            <p className="label">Doorstep appointment</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Your vet visit,<br /><em>booked in a minute.</em></h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">Tell us about your pet and our expert will reach out within 15 minutes. No advance payment, zero travel stress, certified BVSc doctors.</p>
          </div>
          <div data-reveal className="lg:col-span-6"><BookingPanel service="Veterinary" tone="clinical" title={<>Care starts with<br />a conversation.</>} intro="Free expert call — we help you choose the right care." /></div>
        </div>
      </div>
    </section>
  )
}
