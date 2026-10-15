import Link from 'next/link'
import { IconArrowUpRight, IconBrandWhatsapp } from '@tabler/icons-react'

const WA = 'https://wa.me/919211338489'

export const bookHref = (service: string, pkg?: string) =>
  `/book?service=${encodeURIComponent(service)}${pkg ? `&package=${encodeURIComponent(pkg)}` : ''}`

export const waHref = (message: string) => `${WA}?text=${encodeURIComponent(message)}`

export function BookLink({ service, pkg, className = '', children = 'Book now' }: { service: string; pkg?: string; className?: string; children?: React.ReactNode }) {
  return (
    <a href={bookHref(service, pkg)} className={`btn btn-brand !min-h-[42px] !px-5 text-[12.5px] ${className}`}>
      {children} <IconArrowUpRight size={16} stroke={2} />
    </a>
  )
}

export function WhatsAppLink({ message, className = '', label = 'WhatsApp' }: { message: string; className?: string; label?: string }) {
  return (
    <a href={waHref(message)} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens WhatsApp)`} className={`btn btn-line !min-h-[42px] !px-4 text-[12.5px] ${className}`}>
      <IconBrandWhatsapp size={17} stroke={1.75} /> {label}
    </a>
  )
}

export function SectionHead({ label, children, dark, className = '' }: { label: string; children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <div data-reveal className={`${dark ? 'on-dark' : ''} ${className}`}>
      <p className="label">{label}</p>
      <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">{children}</h2>
    </div>
  )
}
