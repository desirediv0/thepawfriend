import type { Metadata } from 'next'
import Script from 'next/script'
import { ThankYou } from '@/components/thank-you/ThankYou'

export const metadata: Metadata = {
  title: 'Thank you | The Paws Friend',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <ThankYou />
      {process.env.NODE_ENV === 'production' && (
        <Script id="meta-pixel-lead" strategy="afterInteractive">
          {`fbq('track', 'Lead');`}
        </Script>
      )}
    </>
  )
}
