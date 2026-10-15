import type { Metadata } from 'next'
import { ThankYou } from '@/components/thank-you/ThankYou'

export const metadata: Metadata = {
  title: 'Thank you | The Paws Friend',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return <ThankYou />
}
