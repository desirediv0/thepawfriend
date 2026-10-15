import Image from 'next/image'
import { IconArrowUpRight, IconBolt, IconBrandWhatsapp, IconCheck, IconDroplet, IconSnowflake, IconThermometer, IconVaccine } from '@tabler/icons-react'
import { BookLink, SectionHead, WhatsAppLink, waHref } from '@/components/pages/bits'
import { inr, vetServices } from '@/lib/vet-data'

const byId = (id: string) => vetServices.find((s) => s.id === id)!

/* ---------- Diagnostics: image left, stacked rows right ---------- */
const diagRows = [
  { id: 'cbc', code: 'CBC', sub: 'Complete Blood Count' },
  { id: 'lft', code: 'LFT', sub: 'Liver Function Test' },
  { id: 'kft', code: 'KFT', sub: 'Kidney Function Test' },
  { id: 'combo', code: '3-IN-1', sub: 'CBC + KFT + LFT' },
]

export function Diagnostics() {
  return (
    <section id="diagnostics" className="bg-paper py-14 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div data-clip className="relative aspect-[4/4.4] overflow-hidden rounded-[6px] border border-line">
            <Image src="/photos/vet-diag.jpg" alt="Vet technician collecting a blood sample from a beagle at home" fill sizes="(min-width:1024px) 40vw, 100vw" loading="lazy" className="object-cover object-[62%_50%]" data-parallax-img />
          </div>
          <p className="absolute -bottom-4 left-4 flex items-center gap-2 bg-charcoal px-3.5 py-2.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-white"><IconDroplet size={15} stroke={1.75} className="text-[#f4a37f]" /> Free home sample collection</p>
        </div>
        <div className="lg:col-span-7">
          <SectionHead label="Diagnostics at home">Know what&apos;s happening<br /><em>inside, early.</em></SectionHead>
          <p data-reveal className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">Certified digital lab reports in 12–24 hours, with free doorstep sample collection by a trained technician.</p>
          <ul data-stagger className="mt-9 border-t border-ink/80">
            {diagRows.map((r) => {
              const s = byId(r.id)
              return (
                <li key={r.id} className="border-b border-line">
                  <a href={`/book?service=Veterinary&package=${encodeURIComponent(s.name)}`} className="group grid grid-cols-[1fr_auto_auto] items-center gap-x-5 py-6 transition-[padding] duration-300 hover:pl-3">
                    <span>
                      <span className="block text-[clamp(1.6rem,2.8vw,2.4rem)] font-extrabold leading-none tracking-tight">{r.code}</span>
                      <span className="mt-1.5 block text-[13.5px] text-muted">{r.sub}</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold tracking-[-.03em]">{inr(s.price)}</span>
                      <s className="block text-[12px] text-muted">{inr(s.oldPrice)}</s>
                    </span>
                    <IconArrowUpRight size={24} stroke={1.5} className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Rapid tests: dark, high-contrast ---------- */
export function RapidTests() {
  const tests = [byId('parvo'), byId('distemper')]
  return (
    <section className="on-dark bg-charcoal py-20 text-white lg:py-24">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead dark label="Rapid antigen kits"><span>Answers in<br /><em>10 minutes.</em></span></SectionHead>
          <p data-reveal className="max-w-sm text-[15px] leading-relaxed text-white/70">Conducted right in front of you at home, with immediate vet doctor action and emergency protocol guidance on-site.</p>
        </div>
        <div data-stagger className="mt-12 grid border-y border-white/20 md:grid-cols-2">
          {tests.map((s, i) => (
            <div key={s.id} className={`py-9 md:px-10 ${i === 0 ? 'md:pl-0 md:border-r md:border-white/20' : 'border-t border-white/20 md:border-t-0 md:pr-0'}`}>
              <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#f4a37f]"><IconBolt size={16} stroke={1.75} /> 10-minute kit</p>
              <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-tight tracking-tight">{s.name.replace(' Test', '')}</h3>
              <ul className="mt-5 space-y-2 text-[14px] text-white/75">
                {s.points.map((p) => <li key={p} className="flex gap-2.5"><IconCheck size={16} stroke={2.25} className="mt-0.5 shrink-0 text-[#f4a37f]" />{p}</li>)}
              </ul>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-5">
                <p className="flex items-baseline gap-3"><span className="text-[44px] font-extrabold leading-none tracking-[-.04em]">{inr(s.price)}</span><s className="text-[14px] text-white/50">{inr(s.oldPrice)}</s></p>
                <BookLink service="Veterinary" pkg={s.name}>Book rapid test</BookLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Vaccination ---------- */
export function Vaccination() {
  const puppy = byId('puppy-pack')
  const others = [byId('adult-dog-pack'), byId('kitten-pack'), byId('adult-cat-pack')]
  const singles = vetServices.filter((s) => s.category === 'Single Vaccine')
  return (
    <section id="vaccination" className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <SectionHead label="Cold-chain vaccination"><span>Protection that arrives<br /><em>at 2–8°C.</em></span></SectionHead>

        <article className="mt-12 grid overflow-hidden border border-ink/85 bg-paper lg:grid-cols-12">
          <div className="relative min-h-[320px] lg:col-span-5" data-clip>
            <Image src="/photos/vet-vaccine.jpg" alt="Vet vaccinating a golden retriever puppy at home with a cold-chain carrier" fill sizes="(min-width:1024px) 40vw, 100vw" loading="lazy" className="object-cover object-[50%_40%]" />
            <p className="absolute left-4 top-4 flex items-center gap-2 bg-charcoal px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-white"><IconSnowflake size={15} stroke={1.75} className="text-[#f4a37f]" /> Cold-chain 2–8°C</p>
          </div>
          <div className="p-6 sm:p-10 lg:col-span-7">
            <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand"><IconVaccine size={17} stroke={1.5} /> Featured package</p>
            <h3 className="display mt-3 text-[clamp(1.8rem,3vw,2.7rem)]">Complete Puppy Vaccination Package</h3>
            <p className="mt-1 text-[13px] font-bold uppercase tracking-[.12em] text-muted">8 shots · free deworming with every visit</p>
            <ol className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {puppy.schedule!.map((st) => (
                <li key={st.day} className="flex gap-4 border-t border-line py-3 text-[13.5px]"><span className="w-[58px] shrink-0 text-[11px] font-extrabold uppercase tracking-[.1em] text-brand">{st.day}</span><span>{st.shot}</span></li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-ink/80 pt-6">
              <p className="flex items-baseline gap-3"><span className="text-[52px] font-extrabold leading-none tracking-[-.045em]">{inr(puppy.price)}</span><s className="text-[15px] text-muted">{inr(puppy.oldPrice)}</s><span className="text-[11px] font-extrabold uppercase tracking-[.1em] text-brand">Save {inr(puppy.oldPrice - puppy.price)}</span></p>
              <div className="flex flex-wrap gap-2.5"><BookLink service="Veterinary" pkg={puppy.name} /><WhatsAppLink message={`Hi, I would like to book: ${puppy.name} (${inr(puppy.price)}) — Veterinary, The Paws Friend.`} /></div>
            </div>
          </div>
        </article>

        <div data-stagger className="mt-12 grid border-y border-line md:grid-cols-3">
          {others.map((s, i) => (
            <div key={s.id} className={`flex flex-col py-8 md:px-8 ${i === 0 ? 'md:pl-0' : 'border-t border-line md:border-l md:border-t-0'} ${i === 2 ? 'md:pr-0' : ''}`}>
              <h3 className="text-[20px] font-extrabold leading-tight tracking-tight">{s.name}</h3>
              <ul className="mt-4 space-y-1.5 text-[13.5px] text-muted">
                {s.points.map((p) => <li key={p} className="flex gap-2"><IconCheck size={15} stroke={2.25} className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
              </ul>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-3 pt-6">
                <p className="flex items-baseline gap-2"><span className="text-[34px] font-extrabold leading-none tracking-[-.04em]">{inr(s.price)}</span><s className="text-[13px] text-muted">{inr(s.oldPrice)}</s></p>
                <BookLink service="Veterinary" pkg={s.name} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
export function VetCTA() {
  return (
    <section className="on-dark bg-charcoal py-20 text-white lg:py-28">
      <div className="wrap grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p data-reveal className="label"><IconThermometer size={15} stroke={1.75} className="-ml-1" /> Doorstep veterinary care</p>
          <h2 data-reveal className="display mt-5 text-[clamp(2.6rem,5.6vw,5.2rem)]">Ready to give your pet<br /><em>the best care?</em></h2>
          <p data-reveal className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">Book a doorstep visit today. Expert veterinary care delivered straight to your home.</p>
        </div>
        <div data-reveal className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
          <a href="#book" className="btn btn-brand">Book a Visit <IconArrowUpRight size={17} stroke={2} /></a>
          <a href={waHref('Hi, I would like to book a vet visit with The Paws Friend.')} target="_blank" rel="noopener noreferrer" className="btn btn-line border-white/40 hover:bg-white hover:text-ink"><IconBrandWhatsapp size={18} stroke={1.75} /> WhatsApp Us</a>
        </div>
      </div>
    </section>
  )
}
