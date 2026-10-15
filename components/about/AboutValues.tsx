import { IconCertificate, IconEye, IconHeart, IconLeaf } from '@tabler/icons-react'

const values = [
  { n: '01', t: 'Compassion first', d: 'Every interaction is guided by genuine love for animals and their families.', Icon: IconHeart },
  { n: '02', t: 'Clinical excellence', d: 'Our vets carry the same standards as the best hospitals — right to your home.', Icon: IconCertificate },
  { n: '03', t: 'Radical transparency', d: 'No surprise bills. No upsells. Just honest, upfront pricing every time.', Icon: IconEye },
  { n: '04', t: 'Sustainable care', d: 'Eco-friendly practices and biodegradable supplies across all our services.', Icon: IconLeaf },
]

/** Editorial values list. Description reveals on hover/focus (md+), always visible on mobile. */
export function AboutValues() {
  return (
    <section className="bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap">
        <div data-reveal>
          <p className="label">What we stand for</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.8vw,4.4rem)]">Our core <em>values.</em></h2>
        </div>
        <ol data-stagger className="mt-12 border-t border-ink/80">
          {values.map(({ n, t, d, Icon }) => (
            <li key={n} tabIndex={0} className="group relative border-b border-line py-7 outline-none transition-colors duration-300 focus-visible:bg-sand/60 md:py-9">
              <span aria-hidden className="absolute left-0 top-[-1px] h-[3px] w-0 bg-brand transition-all duration-500 group-hover:w-28 group-focus-visible:w-28" />
              <div className="grid items-start gap-x-8 gap-y-3 md:grid-cols-[110px_1fr_auto] md:items-center">
                <span className="text-[13px] font-extrabold tabular-nums text-brand transition-transform duration-300 md:text-[clamp(2.4rem,4vw,3.6rem)] md:leading-none md:tracking-[-.05em] md:text-ink/20 md:group-hover:translate-x-2 md:group-hover:text-brand md:group-focus-visible:translate-x-2 md:group-focus-visible:text-brand">{n}</span>
                <div>
                  <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase leading-none tracking-tight">{t}</h3>
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
                    <p className="overflow-hidden pt-3 text-[15px] leading-relaxed text-muted md:max-w-xl md:pt-4">{d}</p>
                  </div>
                </div>
                <Icon size={34} stroke={1.25} className="hidden text-ink/30 transition-all duration-500 md:block md:group-hover:rotate-[-8deg] md:group-hover:scale-110 md:group-hover:text-brand md:group-focus-visible:text-brand" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
