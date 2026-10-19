import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight, IconMapPin } from '@tabler/icons-react'
import { locations } from '@/lib/locations-data'

export const metadata: Metadata = {
  title: 'Cities We Serve | The Paws Friend',
  description: 'Doorstep vet, grooming and dog training across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad and Lucknow.',
}

export default function LocationsPage() {
  return (
    <main className="bg-ivory py-12 md:py-16 lg:pb-24">
      <div className="wrap">
        <p className="label">Where we work</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5.6vw,4.8rem)]">Cities we <em>serve.</em></h1>
        <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted">Doorstep pet care across Delhi NCR and Lucknow. Pick your city to see services and book a visit.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <li key={l.slug}>
              <Link href={`/${l.slug}`} className="group block overflow-hidden rounded-[14px] border border-line bg-paper transition-colors hover:border-brand">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={l.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="p-5">
                  <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[.12em] text-brand"><IconMapPin size={13} stroke={2} />{l.region}</p>
                  <p className="mt-1.5 text-[22px] font-extrabold tracking-tight">{l.name}</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{l.areas.slice(0, 4).join(' · ')}</p>
                  <span className="tlink mt-4 text-[12.5px]">View city <IconArrowUpRight size={15} stroke={2} /></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
