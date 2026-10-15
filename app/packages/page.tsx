import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconBrandWhatsapp } from '@tabler/icons-react'
import { PackagesExplorer } from '@/components/packages/PackagesExplorer'
import { waHref } from '@/components/pages/bits'
import { PageAnimations } from '@/components/pages/PageAnimations'

export const metadata: Metadata = {
  title: 'Care Packages for Dogs & Cats at Home | The Paws Friend',
  description: 'Complete doorstep protection plans, grooming, training and vaccination packages for your dog or cat across Delhi NCR and Lucknow.',
}

export default function PackagesPage() {
  return (
    <>
      <main>
        <PackagesExplorer />

        <section className="on-dark overflow-hidden bg-charcoal text-white">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-center px-[clamp(16px,4vw,72px)] py-14 lg:col-span-6 lg:py-24">
              <h2 data-reveal className="display text-[clamp(2.5rem,5vw,4.8rem)]">Ready to give your pet <em>the best care?</em></h2>
              <p data-reveal className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">Book a doorstep visit today — certified vet &amp; grooming care delivered straight to your home.</p>
              <div data-reveal className="mt-9 flex flex-wrap gap-4">
                <Link href="/book" className="btn btn-brand">Book a visit <IconArrowUpRight size={17} stroke={2} /></Link>
                <a href={waHref('Hi, I would like to book a visit with The Paws Friend.')} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp us</a>
              </div>
            </div>
            <div data-clip className="relative min-h-[420px] lg:col-span-6 lg:min-h-[560px]">
              <Image src="/photos/pk-cta.jpg" alt="Indian couple relaxing with their golden retriever and cats at home" fill sizes="(min-width:1024px) 50vw, 100vw" loading="lazy" className="object-cover object-[55%_45%]" data-parallax-img />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
            </div>
          </div>
          <dl data-stagger className="wrap grid border-t border-white/20 py-0 sm:grid-cols-3">
            {[['5,200+', 'Happy pet parents'], ['4.8 ★', 'Average rating'], ['6 Cities', 'Delhi · Gurgaon · Noida · Gr. Noida · Ghaziabad · Faridabad']].map(([v, l], i) => (
              <div key={l} className={`py-5 sm:px-8 sm:py-8 ${i ? 'border-t border-white/20 sm:border-l sm:border-t-0' : 'sm:pl-0'}`}>
                <dd className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-.04em]">{v}</dd>
                <dt className="mt-2 text-[11px] font-bold uppercase tracking-[.14em] text-white/60">{l}</dt>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <PageAnimations />
    </>
  )
}
