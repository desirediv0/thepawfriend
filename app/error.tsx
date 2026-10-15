'use client'

import { IconPaw, IconRefresh } from '@tabler/icons-react'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="bg-ivory py-20 lg:py-28">
      <div className="wrap max-w-3xl">
        <p className="label"><IconPaw size={15} stroke={1.75} className="-ml-1" /> Something went wrong</p>
        <h1 className="display mt-5 text-[clamp(2.6rem,6vw,4.8rem)]">We hit a<br /><em>small bump.</em></h1>
        <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-muted">Something went wrong while loading this page. Please try again, or contact us directly on +91 9211338489.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" onClick={reset} className="btn btn-brand"><IconRefresh size={17} stroke={2} /> Try again</button>
          <a href="tel:+919211338489" className="btn btn-line">Call +91 9211338489</a>
        </div>
      </div>
    </main>
  )
}
