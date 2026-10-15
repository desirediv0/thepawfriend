import Image from 'next/image'
import { IconArrowUpRight, IconHeart, IconMapPin, IconScissors, IconSparkles } from '@tabler/icons-react'
import { BookingPanel } from '@/components/pages/BookingPanel'
import { groomCities } from '@/lib/grooming-data'

export function GroomHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-8 md:pt-12">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 hidden size-[620px] rounded-full bg-sand lg:block" />
      <div className="wrap relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-intro className="lg:col-span-6">
            <p className="label"><IconSparkles size={15} stroke={1.75} className="-ml-1" /> Professional doorstep pet grooming &amp; vet care</p>
            <h1 className="display mt-5 text-[clamp(2.8rem,5.8vw,5.6rem)]">
              Doorstep pet grooming,<br /><em>beautifully done.</em>
            </h1>
            <p className="mt-6 max-w-[500px] text-[15.5px] leading-relaxed text-muted">
              Warm herbal baths, breed haircuts, tick removal, nail clipping and ear cleaning — by certified groomers, in the comfort of your own home. No cages, no travel, no stress.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#packages" className="btn btn-brand">View packages <IconArrowUpRight size={17} stroke={2} /></a>
              <a href="#book" className="tlink">Book home grooming <IconArrowUpRight size={16} stroke={2} /></a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[12.5px] font-bold">
              {[[IconScissors, 'Breed-specific styling'], [IconHeart, 'Zero-cage, stress-free'], [IconSparkles, 'Hypoallergenic finish']].map(([Ic, t]) => {
                const I = Ic as typeof IconScissors
                return <li key={t as string} className="flex items-center gap-2"><I size={18} stroke={1.5} className="text-brand" />{t as string}</li>
              })}
            </ul>
          </div>

          <div className="relative lg:col-span-6">
            <div data-clip className="relative aspect-[4/4.7] overflow-hidden rounded-[28px] rounded-tr-[150px] rounded-bl-[150px] border-[6px] border-paper shadow-[0_44px_80px_-46px_#4b2a1880] lg:aspect-[4/4.9]">
              <Image src="/photos/groom-hero.jpg" alt="Indian groomer styling a fluffy shih tzu at home" fill priority sizes="(min-width:1024px) 46vw, 100vw" className="object-cover object-[50%_30%]" />
            </div>
            <div className="absolute -left-2 bottom-10 rounded-[18px] bg-paper px-5 py-4 shadow-[0_24px_44px_-24px_#4b2a1870] sm:-left-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand">Packages from</p>
              <p className="mt-0.5 text-[44px] font-extrabold leading-none tracking-[-.045em]">₹899</p>
              <p className="mt-1 text-[11px] text-muted">at your doorstep</p>
            </div>
            <p className="absolute right-3 top-6 flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] shadow-sm"><IconHeart size={13} stroke={2} className="text-brand" /> Calm &amp; comfortable</p>
          </div>
        </div>
      </div>

      {/* Location strip */}
      <div className="wrap relative mt-16 lg:mt-20">
        <div className="flex flex-col gap-3 border-y border-line py-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="flex shrink-0 items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand"><IconMapPin size={15} stroke={1.75} /> Serving</p>
          <ul className="no-scrollbar -mx-4 flex gap-x-7 overflow-x-auto px-4 text-[15px] font-bold sm:mx-0 sm:px-0">
            {groomCities.map((c, i) => <li key={c} className="flex shrink-0 items-center gap-7">{c}{i < groomCities.length - 1 && <i aria-hidden className="size-1 rounded-full bg-brand" />}</li>)}
          </ul>
        </div>
      </div>

      {/* Booking */}
      <div className="wrap relative pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-6">
            <p className="label">Home grooming appointment</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">A spa day,<br /><em>without leaving home.</em></h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">Zero travel stress, certified BVSc doctors on call and no advance payment. Our expert will reach out to you in 15 minutes.</p>
          </div>
          <div data-reveal className="lg:col-span-6"><BookingPanel service="Grooming" tone="warm" title={<>Book a grooming<br />session.</>} intro="Free expert call — we help you pick the right package." /></div>
        </div>
      </div>
    </section>
  )
}
