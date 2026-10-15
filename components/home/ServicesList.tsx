'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'

const items = [
  { title: 'Grooming', text: 'Thoughtful care for a fresh, healthy coat.', img: '/photos/groom.jpg', pos: '50% 40%' },
  { title: 'Vaccination', text: 'Protection, delivered to your door.', img: '/photos/vet.jpg', pos: '30% 60%' },
  { title: 'Diagnostics', text: 'Reliable testing, collected at home.', img: '/photos/vet.jpg', pos: '70% 40%' },
  { title: 'Dog Training', text: 'Positive habits for happier everyday life.', img: '/photos/train.jpg', pos: '50% 50%' },
  { title: 'Emergency Care', text: 'A calm expert voice when you need it.', img: '/photos/cta.jpg', pos: '50% 30%' },
  { title: 'Online Consultation', text: 'Expert advice, wherever you are.', img: '/photos/comfort.jpg', pos: '30% 50%' },
]

const base = { title: 'Veterinary Care', img: '/photos/vet.jpg', pos: '55% 50%' }

export function ServicesList() {
  const [hover, setHover] = useState(-1)
  const [auto, setAuto] = useState(-1)
  const active = hover >= 0 ? hover : auto

  // Auto-cycle through the services; pauses while a row is hovered/focused, off for reduced motion.
  useEffect(() => {
    if (hover >= 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setAuto((a) => (a + 1 >= items.length ? -1 : a + 1)), 3200)
    return () => clearInterval(t)
  }, [hover])
  const cur = active < 0 ? base : items[active]
  const imgs = [base, ...items]

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
      <Link href="/veterinary" data-reveal className="group relative block lg:col-span-6">
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-tl-[90px] rounded-br-[90px] rounded-bl-md rounded-tr-md bg-sand">
          {imgs.map((s, i) => (
            <Image
              key={s.title}
              src={s.img}
              alt={i === 0 ? 'A veterinarian examining a golden retriever at home' : ''}
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              style={{ objectPosition: s.pos }}
              className={`object-cover transition-[opacity,transform] duration-700 ease-out ${cur.title === s.title ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0'}`}
            />
          ))}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#f4a37f]">{active < 0 ? 'Health comes first' : 'Also at your door'}</p>
            <h3 className="mt-2 text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-none tracking-tight">{cur.title}</h3>
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/30 pt-4 text-[13px]">
              <span>{active < 0 ? <>Home visits from <b className="text-[17px]">₹499</b></> : 'Delivered at home'}</span>
              <span className="inline-flex items-center gap-2 font-bold">Explore Veterinary <IconArrowUpRight size={18} stroke={2} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </div>
          </div>
        </div>
      </Link>

      <ul data-stagger className="self-center lg:col-span-6" onMouseLeave={() => setHover(-1)}>
        {items.map((s, i) => (
          <li key={s.title} className="border-b border-line first:border-t">
            <Link
              href={s.title === 'Grooming' ? '/grooming' : s.title === 'Dog Training' ? '/dog-training' : s.title === 'Online Consultation' ? '/services' : ['Vaccination', 'Diagnostics', 'Emergency Care'].includes(s.title) ? '/veterinary' : '#booking'}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(-1)}
              data-active={active === i}
              className="group relative flex items-center gap-5 py-6 transition-[padding] duration-300 hover:pl-5 focus-visible:pl-5 data-[active=true]:pl-5"
            >
              <span aria-hidden className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 bg-brand transition-[height] duration-300 group-hover:h-10 group-focus-visible:h-10 group-data-[active=true]:h-10" />
              <span className="w-7 text-[12px] font-bold tabular-nums text-muted">0{i + 2}</span>
              <span className="flex-1">
                <span className="block text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold leading-none tracking-tight">{s.title}</span>
                <span className="mt-1.5 block text-[13.5px] text-muted">{s.text}</span>
              </span>
              <IconArrowUpRight size={24} stroke={1.5} className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand group-data-[active=true]:-translate-y-1 group-data-[active=true]:translate-x-1 group-data-[active=true]:text-brand" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
