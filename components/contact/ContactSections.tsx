import Image from 'next/image'
import Link from 'next/link'
import {
  IconAmbulance, IconArrowUpRight, IconBrandWhatsapp, IconClock, IconHeartbeat, IconMail, IconMapPin, IconMessageCircle, IconPhone, IconShieldCheck,
} from '@tabler/icons-react'
import { CountUp } from '@/components/home/CountUp'
import { CONTACT, serviceCities, whatsappHref } from '@/lib/contact'

/* ---------- 2. Contact / reception information ---------- */
export function ContactDetails() {
  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="label">Reception</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">Your questions.<br /><em>Our people.</em></h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">Whether you need help choosing a service, want to understand a package, or need urgent veterinary assistance, our team is here to help.</p>
        </div>
        <ul data-stagger className="border-t border-ink/80 lg:col-span-7">
          <li className="grid gap-4 border-b border-line py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
            <IconPhone size={26} stroke={1.5} className="text-brand" />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">Phone &amp; emergency</p>
              <a href={CONTACT.phoneHref} className="mt-2 block text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-.04em] transition-colors hover:text-brand">{CONTACT.phone}</a>
              <a href={CONTACT.emergencyHref} className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold text-ink/80 hover:text-brand"><IconAmbulance size={18} stroke={1.5} className="text-brand" /> Emergency: {CONTACT.emergency}</a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 text-[14px] font-bold text-ink/80 hover:text-brand"><IconBrandWhatsapp size={18} stroke={1.5} className="text-brand" /> Chat on WhatsApp</a>
            </div>
          </li>
          <li className="grid gap-4 border-b border-line py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
            <IconMail size={26} stroke={1.5} className="text-brand" />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">Email</p>
              <a href={CONTACT.emailHref} className="mt-2 block break-all text-[clamp(1.4rem,2.6vw,2.2rem)] font-extrabold tracking-tight transition-colors hover:text-brand">{CONTACT.email}</a>
            </div>
          </li>
          <li className="grid gap-4 border-b border-line py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
            <IconMapPin size={26} stroke={1.5} className="text-brand" />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-muted">Location</p>
              <p className="mt-2 max-w-md text-[clamp(1.2rem,2vw,1.6rem)] font-extrabold leading-snug tracking-tight">Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad &amp; Lucknow</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4. Service area ---------- */
export function ServiceArea() {
  return (
    <section id="service-area" className="relative scroll-mt-24 overflow-hidden bg-sand py-14 md:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#4b2a1826_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="wrap relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="label">Service area</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">Care that<br /><em>comes to you.</em></h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/75">Our doorstep pet care services are currently available across major cities in Delhi NCR and Lucknow.</p>
        </div>
        <ol data-stagger className="relative lg:col-span-7">
          <span aria-hidden className="absolute bottom-6 left-[11px] top-6 w-px bg-ink/25" />
          {serviceCities.map((c, i) => (
            <li key={c} className="relative flex items-center gap-6 py-3.5 pl-10 sm:gap-8">
              <span aria-hidden className="absolute left-0 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-sand"><span className="size-3 rounded-full border-2 border-brand bg-paper" /></span>
              <span className="w-8 text-[11px] font-extrabold tabular-nums text-brand">0{i + 1}</span>
              <span className="text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold leading-none tracking-[-.04em]">{c}</span>
              <IconMapPin size={20} stroke={1.5} className="ml-auto hidden text-ink/40 sm:block" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- 5. Working hours ---------- */
export function WorkingHours() {
  return (
    <section className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-7">
          <p className="label"><IconClock size={15} stroke={1.75} className="-ml-1" /> When we&apos;re here</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6.4vw,6rem)]">Always<br /><em>within reach.</em></h2>
        </div>
        <div data-reveal className="lg:col-span-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-muted">Mon - Sun</p>
          <p className="mt-2 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-none tracking-[-.045em]">9:00 AM – 9:00 PM</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[.14em] text-brand"><IconShieldCheck size={15} stroke={1.75} /> Available all days</p>
          <p className="mt-6 max-w-sm border-t border-line pt-5 text-[14.5px] leading-relaxed text-muted">For urgent medical assistance, our emergency line is available 24/7. <a href={CONTACT.emergencyHref} className="font-extrabold text-ink underline underline-offset-4 hover:text-brand">{CONTACT.emergency}</a></p>
        </div>
      </div>
    </section>
  )
}

/* ---------- 7. Emergency ---------- */
export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(135deg,#ffffff22_0,#ffffff22_1px,transparent_1px,transparent_16px)]" />
      <div className="wrap relative grid items-center gap-8 py-16 lg:grid-cols-12 lg:py-20">
        <div data-reveal className="flex items-start gap-5 lg:col-span-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/50"><IconHeartbeat size={28} stroke={1.5} /></span>
          <div>
            <h2 className="display text-[clamp(2rem,4.4vw,3.8rem)]">Emergency care available 24/7</h2>
            <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-white/90">Call {CONTACT.emergency} anytime for urgent medical assistance.</p>
          </div>
        </div>
        <div data-reveal className="lg:col-span-4 lg:text-right">
          <a href={CONTACT.emergencyHref} className="btn bg-white text-brand hover:bg-charcoal hover:text-white"><IconPhone size={18} stroke={2} /> Call now</a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 8. Final CTA ---------- */
export function ContactCTA() {
  return (
    <section className="on-dark overflow-hidden bg-charcoal text-white">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-[clamp(16px,4vw,72px)] py-14 lg:col-span-7 lg:py-24">
          <h2 data-reveal className="display text-[clamp(2.6rem,5.4vw,5.2rem)]">Ready to give your pet<br /><em>the best care?</em></h2>
          <p data-reveal className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70">Book a doorstep visit today. Expert veterinary care delivered straight to your home — no travel, no stress.</p>
          <div data-reveal className="mt-9 flex flex-wrap gap-4">
            <Link href={CONTACT.bookHref} className="btn btn-brand">Book a visit <IconArrowUpRight size={17} stroke={2} /></Link>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp us</a>
          </div>
        </div>
        <div data-clip className="relative min-h-[460px] lg:col-span-5 lg:min-h-[600px]">
          <Image src="/photos/ct-cta.jpg" alt="Indian pet parent smiling on the sofa with her cat and sleeping golden retriever" fill sizes="(min-width:1024px) 42vw, 100vw" loading="lazy" className="object-cover object-[55%_35%]" data-parallax-img />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ---------- 9. Trust metrics ---------- */
export function TrustStats() {
  return (
    <section className="bg-paper">
      <dl data-stagger className="wrap grid border-b border-line sm:grid-cols-3">
        {[['5,200+', 'Happy pet parents'], ['4.8★', 'Average rating'], ['6 Cities', 'Delhi · Gurgaon · Noida · Gr. Noida · Ghaziabad · Faridabad']].map(([v, l], i) => (
          <div key={l} className={`py-6 sm:px-8 sm:py-10 ${i ? 'border-t border-line sm:border-l sm:border-t-0' : 'sm:pl-0'}`}>
            <dd className="text-[clamp(2.4rem,4.6vw,4rem)] font-extrabold leading-none tracking-[-.05em]"><CountUp value={v} /></dd>
            <dt className="mt-2 text-[11px] font-bold uppercase tracking-[.14em] text-muted">{l}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
