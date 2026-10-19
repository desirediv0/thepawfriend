import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { IconArrowUpRight, IconBrandWhatsapp, IconMapPin, IconPhone } from '@tabler/icons-react'
import { LocationForm } from '@/components/locations/LocationForm'
import { waHref } from '@/components/pages/bits'
import { FaqAccordion } from '@/components/pages/FaqAccordion'
import { EMAIL, PHONE, PHONE_HREF } from '@/lib/content'
import { cityHow, cityServices, getLocation, locations } from '@/lib/locations-data'
import { citySeo, SITE_URL } from '@/lib/locations-seo'

export const dynamicParams = false
export const generateStaticParams = () => locations.map((l) => ({ city: l.slug }))

type Props = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).city
  const loc = getLocation(slug)
  if (!loc) return {}
  const seo = citySeo[slug]
  const url = `/locations/${slug}`
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: url },
    openGraph: { title: seo.title, description: seo.description, url, type: 'website', images: [{ url: loc.image }] },
    twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
  }
}

export default async function CityPage({ params }: Props) {
  const loc = getLocation((await params).city)
  if (!loc) notFound()
  const seo = citySeo[loc.slug]
  const pageUrl = `${SITE_URL}/locations/${loc.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VeterinaryCare', '@id': `${pageUrl}#service`, name: `The Paws Friend — ${loc.name}`, url: pageUrl, image: `${SITE_URL}${loc.image}`, telephone: PHONE, email: EMAIL, priceRange: '₹₹',
        areaServed: [{ '@type': 'City', name: loc.name }, ...loc.areas.map((a) => ({ '@type': 'Place', name: `${a}, ${loc.name}` }))],
        openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '21:00' },
      },
      { '@type': 'FAQPage', mainEntity: seo.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` }, { '@type': 'ListItem', position: 3, name: loc.name, item: pageUrl }] },
    ],
  }
  const wa = waHref(`Hi THE PAWS FRIEND, I’d like to book a service in ${loc.name}.`)

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="bg-ivory pb-14 pt-8 md:pt-12 lg:pb-20">
        <div className="wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 lg:pt-4">
            <nav aria-label="Breadcrumb" className="mb-5 text-[12px] font-semibold text-muted"><Link href="/" className="hover:text-brand">Home</Link> / <Link href="/locations" className="hover:text-brand">Locations</Link> / <span className="text-ink">{loc.name}</span></nav>
            <p className="label"><IconMapPin size={14} stroke={1.75} className="-ml-1" /> {loc.name} · {loc.region}</p>
            <h1 className="display mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)]">Vet, grooming &amp; dog training at home in <em>{loc.name}.</em></h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">{loc.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#location-form" className="btn btn-brand">Book a visit <IconArrowUpRight size={16} stroke={2} /></a>
              <a href={PHONE_HREF} className="btn btn-line"><IconPhone size={16} stroke={1.75} /> {PHONE}</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-line"><IconBrandWhatsapp size={17} stroke={1.75} /> WhatsApp</a>
            </div>
            <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-[14px]">
              <Image src={loc.image} alt={`Pet care at home in ${loc.name}`} fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-5"><LocationForm city={loc.name} /></div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap">
          <p className="label">Services in {loc.name}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">Everything your pet needs, <em>at home.</em></h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cityServices.map((s) => (
              <Link key={s.title} href={s.href} className="group flex flex-col rounded-[14px] border border-line bg-paper p-5 transition-colors hover:border-brand">
                <p className="text-[11px] font-extrabold uppercase tracking-[.12em] text-brand">{s.price}</p>
                <p className="mt-2 text-[19px] font-extrabold tracking-tight">{s.title}</p>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                <span className="tlink mt-5 self-start text-[12.5px]">Learn more <IconArrowUpRight size={15} stroke={2} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">About our service</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Pet care that comes to <em>{loc.name}.</em></h2>
          </div>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-muted lg:col-span-7">{seo.about.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap">
          <p className="label">Pet care in {loc.name}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">What pets here <em>need most.</em></h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {seo.needs.map(([t, d]) => (
              <div key={t} className="rounded-[14px] border border-line bg-paper p-6"><p className="text-[18px] font-extrabold tracking-tight">{t}</p><p className="mt-2 text-[14px] leading-relaxed text-muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Areas we cover</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Across <em>{loc.name}.</em></h2>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-muted">{loc.note} Don’t see your area? Call us — we may still reach you.</p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5 lg:col-span-7">
            {loc.areas.map((a) => <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-paper px-4 py-2 text-[13px] font-semibold"><IconMapPin size={14} stroke={1.75} className="text-brand" />{a}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap">
          <p className="label">How it works</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Three simple <em>steps.</em></h2>
          <ol className="mt-9 grid gap-4 md:grid-cols-3">
            {cityHow.map(([t, d], i) => (
              <li key={t} className="rounded-[14px] border border-line bg-paper p-6">
                <span className="text-[34px] font-extrabold leading-none text-brand">0{i + 1}</span>
                <p className="mt-3 text-[18px] font-extrabold tracking-tight">{t}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">FAQ</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Questions from <em>{loc.name}.</em></h2>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-muted">Still unsure? Call <a href={PHONE_HREF} className="font-bold text-ink underline">{PHONE}</a> and we will help.</p>
          </div>
          <div className="lg:col-span-8"><FaqAccordion items={seo.faqs} /></div>
        </div>
      </section>

      <section className="bg-brand py-12 text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-5">
          <p className="max-w-xl text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight tracking-tight">Vet home visit in {loc.name} from ₹499. No advance payment.</p>
          <a href="#location-form" className="btn bg-white text-ink hover:bg-ink hover:text-white">Book a visit <IconArrowUpRight size={16} stroke={2} /></a>
        </div>
      </section>

      <section className="bg-charcoal py-12 text-white">
        <div className="wrap">
          <p className="label !text-[#f4a37f]">Other cities</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {locations.filter((l) => l.slug !== loc.slug).map((l) => <li key={l.slug}><Link href={`/locations/${l.slug}`} className="inline-flex rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-white hover:text-ink">{l.name}</Link></li>)}
          </ul>
        </div>
      </section>
    </main>
  )
}
