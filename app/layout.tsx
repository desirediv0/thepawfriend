import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'
import { FloatingContactActions } from '@/components/FloatingContactActions'
import { Footer } from '@/components/home/Footer'
import { Header } from '@/components/home/Header'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-instrument', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://thepawsfriend.com'),
  title: 'The Paws Friend | Pawfectly devoted pet care',
  description: 'Trusted doorstep veterinary and pet-care services across Delhi NCR and Lucknow.',

}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f4ed',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${serif.variable}`}>
      <body className="max-md:pb-[84px]"><Header />{children}<Footer /><FloatingContactActions />{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
