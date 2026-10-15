import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconHeartHandshake } from '@tabler/icons-react'
import { PHONE_HREF } from '@/lib/content'

const stats = [['5,200+', 'Pet parents'], ['5', 'Clinics in NCR'], ['15+', 'Doorstep services']]

export function ServicesHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pb-16 pt-8 md:pt-12 lg:pb-20">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-intro className="lg:col-span-7">
            <p className="label"><IconHeartHandshake size={16} stroke={1.75} className="-ml-1" /> Trusted by 5,200+ happy pet parents</p>
            <h1 className="display mt-5 text-[clamp(2.8rem,6.2vw,6rem)]">Complete care<br /><em>for every paw.</em></h1>
            <p className="mt-6 max-w-[540px] text-[15.5px] leading-relaxed text-muted">
              From routine vet check-ups to emergency care, spa grooming to behavioral training — every service delivered at your doorstep across Delhi NCR by certified professionals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="#catalogue" className="btn btn-brand">Explore services <IconArrowUpRight size={17} stroke={2} /></Link>
              <a href={PHONE_HREF} className="tlink">Talk to an expert <IconArrowUpRight size={16} stroke={2} /></a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div data-clip className="relative aspect-[4/4.8] overflow-hidden rounded-[24px] rounded-tr-[130px] rounded-bl-[130px] border-[6px] border-paper shadow-[0_44px_80px_-46px_#4b2a1880]">
              <Image src="/photos/sv-hero.jpg" alt="Indian pet parent at home with her golden retriever and cat" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[50%_35%]" />
            </div>
          </div>
        </div>
        <dl data-stagger className="mt-10 grid grid-cols-3 border-y border-line lg:mt-14">
          {stats.map(([v, l], i) => (
            <div key={l} className={`px-2 py-5 sm:px-9 sm:py-7 ${i ? 'border-l border-line' : 'pl-0'}`}>
              <dd className="text-[clamp(1.8rem,8vw,4.2rem)] font-extrabold leading-none tracking-[-.05em]">{v}</dd>
              <dt className="mt-2 text-[10px] font-extrabold uppercase tracking-[.1em] text-muted sm:text-[10.5px] sm:tracking-[.18em]">{l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
