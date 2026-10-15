import Image from 'next/image'
import Link from 'next/link'
import { IconAmbulance, IconArrowUpRight, IconMapPin, IconPaw, IconPhoneCall } from '@tabler/icons-react'
import { CONTACT } from '@/lib/contact'

export function ContactHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pb-16 pt-8 md:pt-12 lg:pb-24">
      <span aria-hidden className="pointer-events-none absolute -left-4 bottom-2 hidden select-none text-[clamp(8rem,18vw,18rem)] font-extrabold leading-none tracking-[-.06em] text-ink/[.035] lg:block">Hello</span>
      <div className="wrap relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div data-intro className="relative z-10 lg:col-span-7">
            <p className="label"><IconPaw size={15} stroke={1.75} className="-ml-1" /> The Paws Friend · Reception</p>
            <h1 data-lines className="display mt-5 text-[clamp(2.9rem,6.6vw,6.4rem)]" aria-label="We'd love to hear from you.">
              <span aria-hidden className="block overflow-hidden pb-[.06em]"><span className="block">We&apos;d love to</span></span>
              <span aria-hidden className="block overflow-hidden pb-[.06em]"><span className="block text-brand">hear from you.</span></span>
            </h1>
            <p className="mt-6 max-w-[470px] text-[15.5px] leading-relaxed text-muted">Have questions about our services or packages? Our team is just a call or message away.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={CONTACT.phoneHref} className="btn btn-brand">Talk to our team <IconPhoneCall size={17} stroke={2} /></a>
              <Link href={CONTACT.bookHref} className="btn btn-line">Book a visit <IconArrowUpRight size={17} stroke={2} /></Link>
            </div>
            <a href={CONTACT.emergencyHref} className="mt-7 inline-flex items-center gap-2.5 text-[12.5px] font-bold text-ink/80 transition-colors hover:text-brand"><IconAmbulance size={18} stroke={1.5} className="text-brand" /> 24/7 emergency assistance · <span className="underline underline-offset-4">{CONTACT.emergency}</span></a>
          </div>

          <div className="relative lg:col-span-5 lg:-ml-10">
            <div data-sc="hero40" className="relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[24px] rounded-tl-[130px] border border-brand/50" />
              <div data-clip className="relative aspect-[4/4.9] overflow-hidden rounded-[24px] rounded-tl-[130px] border-[6px] border-paper bg-sand shadow-[0_44px_80px_-46px_#4b2a1880]">
                <Image src="/photos/contact-reception.webp" alt="The Paws Friend reception: a smiling team member at the front desk with a golden retriever and a cat" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[38%_50%]" />
              </div>
              <p className="absolute -left-2 top-8 flex items-center gap-2 bg-charcoal px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-white sm:-left-8">Pet care, one call away</p>
              <p className="absolute bottom-8 right-3 flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] shadow-sm"><IconMapPin size={13} stroke={2} className="text-brand" /> Delhi NCR · Lucknow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
