import Link from 'next/link'
import { IconArrowUpRight, IconPaw } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <main className="bg-ivory py-20 lg:py-28">
      <div className="wrap max-w-3xl">
        <p className="label"><IconPaw size={15} stroke={1.75} className="-ml-1" /> Page not found</p>
        <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5.6rem)]">This page has<br /><em>wandered off.</em></h1>
        <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-brand">Back to home <IconArrowUpRight size={17} stroke={2} /></Link>
          <Link href="/services" className="btn btn-line">View all services</Link>
          <Link href="/contact" className="tlink self-center">Talk to us <IconArrowUpRight size={16} stroke={2} /></Link>
        </div>
      </div>
    </main>
  )
}
