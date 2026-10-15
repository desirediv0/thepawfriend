import Link from 'next/link'
import Image from 'next/image'
import { IconArrowUpRight, IconBrandWhatsapp } from '@tabler/icons-react'
import { SectionHead, waHref } from '@/components/pages/bits'

const steps = [
  { n: '01', label: 'Prepare', text: 'Tools sterilised, coat checked, your pet settled in their own space.', img: '/photos/groom-prepare.jpg', pos: '50% 30%' },
  { n: '02', label: 'Cleanse', text: 'A warm herbal bath and conditioning, with gentle hands and no cages.', img: '/photos/groom-bath.jpg', pos: '50% 35%' },
  { n: '03', label: 'Style', text: 'Brushing, blow-drying and breed-specific styling, finished with care.', img: '/photos/groom-style.jpg', pos: '50% 40%' },
  { n: '04', label: 'Finish', text: 'Fresh coat, fresh confidence — and a happy pet on their favourite sofa.', img: '/photos/groom-finish.jpg', pos: '55% 40%' },
]

export function GroomStory() {
  return (
    <section className="overflow-hidden bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <SectionHead label="The grooming session">A grooming session,<br /><em>without leaving home.</em></SectionHead>
        <ol className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
          {steps.map((s, i) => (
            <li key={s.n} className={i % 2 ? 'lg:mt-16' : ''}>
              <div data-clip className={`relative aspect-[3/4] overflow-hidden ${i % 2 ? 'rounded-[24px] rounded-tr-[90px]' : 'rounded-[24px] rounded-tl-[90px]'} bg-sand`}>
                <Image src={s.img} alt={`${s.label}: ${s.text}`} fill sizes="(min-width:1024px) 24vw, (min-width:640px) 46vw, 100vw" loading="lazy" style={{ objectPosition: s.pos }} className="object-cover" data-parallax-img />
              </div>
              <p data-reveal className="mt-5 flex items-baseline gap-3"><span className="text-[13px] font-extrabold tabular-nums text-brand">{s.n}</span><span className="text-[11px] font-extrabold uppercase tracking-[.2em]">{s.label}</span></p>
              <p data-reveal className="mt-2 max-w-[260px] text-[14px] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function GroomCTA() {
  return (
    <section className="on-dark overflow-hidden bg-charcoal text-white">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[clamp(16px,4vw,72px)] py-14 lg:col-span-7 lg:py-24">
          <h2 data-reveal className="display text-[clamp(2.5rem,5.2vw,4.9rem)]">Ready to give your pet a<br /><em>spa day &amp; health check at home?</em></h2>
          <div data-reveal className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#book" className="btn btn-brand">Book Home Grooming <IconArrowUpRight size={17} stroke={2} /></a>
            <Link href="/veterinary#book" className="btn btn-line border-white/40 hover:bg-white hover:text-ink">Book Vet Visit @ ₹499</Link>
            <a href={waHref('Hi, I would like to book home grooming with The Paws Friend.')} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp</a>
          </div>
        </div>
        <div data-clip className="relative min-h-[420px] lg:col-span-5 lg:min-h-[560px]">
          <Image src="/photos/groom-cat.jpg" alt="Groomer gently brushing a calm Persian cat at home" fill sizes="(min-width:1024px) 42vw, 100vw" loading="lazy" className="object-cover object-[60%_55%]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
