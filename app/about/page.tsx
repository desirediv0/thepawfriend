import type { Metadata } from 'next'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutCTA, AboutHero, AboutImageBand, AboutMission, AboutStats, AboutStatement, AboutStory, AboutVision, AboutWhy } from '@/components/about/AboutSections'
import { PageAnimations } from '@/components/pages/PageAnimations'

export const metadata: Metadata = {
  title: 'About The Paws Friend | We Treat Pets Like Family',
  description: 'Our story, mission and vision: professional doorstep veterinary care, built around comfort, trust and compassion.',
}

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutMission />
        <AboutStatement />
        <AboutVision />
        <AboutValues />
        <AboutImageBand />
        <AboutWhy />
        <AboutCTA />
      </main>
      <PageAnimations />
    </>
  )
}
