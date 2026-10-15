import type { Metadata } from 'next'
import { BookForm } from '@/components/book/BookForm'
import { PageAnimations } from '@/components/pages/PageAnimations'
import { IconClock, IconHome, IconShieldCheck } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Book a Doorstep Visit | The Paws Friend',
  description: 'Request a doorstep vet, grooming or training visit. Our expert will reach out within 15 minutes.',
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.slice(0, 120)

export default async function BookPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams
  const service = one(sp.service)
  const pkg = one(sp.package)

  return (
    <>
      <main>
        <section id="top" className="bg-ivory pb-20 pt-10 md:pt-14 lg:pb-28">
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div data-intro className="lg:col-span-5 lg:pt-6">
              <p className="label">Book a visit</p>
              <h1 className="display mt-5 text-[clamp(2.6rem,5.4vw,5rem)]">Care at your<br /><em>doorstep.</em></h1>
              <p className="mt-6 max-w-sm text-[15.5px] leading-relaxed text-muted">Tell us about your pet and our expert will reach out to you within 15 minutes. No clinics, no cages, no stress.</p>
              <ul className="mt-9 space-y-4 border-t border-line pt-6 text-[14px] font-bold">
                {[[IconClock, 'Same-day doorstep appointments'], [IconShieldCheck, 'No advance payment'], [IconHome, 'Certified professionals at your home']].map(([I, t]) => {
                  const Ic = I as typeof IconClock
                  return <li key={t as string} className="flex items-center gap-3"><Ic size={20} stroke={1.5} className="text-brand" />{t as string}</li>
                })}
              </ul>
            </div>
            <div className="lg:col-span-7"><BookForm service={service} pkg={pkg} /></div>
          </div>
        </section>
      </main>
      <PageAnimations />
    </>
  )
}
