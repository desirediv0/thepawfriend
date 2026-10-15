import { Animations } from '@/components/home/Animations'
import { Faq } from '@/components/home/Faq'
import { Testimonials } from '@/components/home/Testimonials'
import { Hero } from '@/components/home/Hero'
import { PetStories } from '@/components/home/PetStories'
import { Difference, FinalCTA, Intro, Locations, Packages, Process, Services, Spread, Veterinary } from '@/components/home/Sections'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Services />
        <PetStories />
        <Difference />
        <Process />
        <Veterinary />
        <Spread />
        <Packages />
        <Testimonials />
        <Locations />
        <Faq />
        <FinalCTA />
      </main>
      <Animations />
    </>
  )
}
