import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/pages/FaqAccordion'
import { PageAnimations } from '@/components/pages/PageAnimations'
import { TrainingHero } from '@/components/training/TrainingHero'
import { Coverage, Manifesto, ProblemExplorer, ProcessTimeline, Reviews } from '@/components/training/TrainingInteractive'
import { Compare, Packages, Skills, TrainingCTA } from '@/components/training/TrainingSections'
import { trainingFaqs } from '@/lib/training-data'

export const metadata: Metadata = {
  title: 'Doorstep Professional Dog Training in Delhi NCR | The Paws Friend',
  description: 'Certified dog behavioral trainers visiting your doorstep. 100% force-free positive reinforcement. Book a free demo worth ₹2,797.',
}

export default function DogTrainingPage() {
  return (
    <>
      <main>
        <TrainingHero />
        <ProblemExplorer />
        <ProcessTimeline />
        <Coverage />
        <Packages />
        <Skills />
        <Manifesto />
        <Compare />
        <Reviews />
        <section id="faqs" className="bg-paper py-14 md:py-20 lg:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div data-reveal className="lg:col-span-5">
              <p className="label">Dog training FAQs</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">Good questions.<br /><em>Honest answers.</em></h2>
            </div>
            <div className="lg:col-span-7"><FaqAccordion items={trainingFaqs} /></div>
          </div>
        </section>
        <TrainingCTA />
      </main>
      <PageAnimations />
    </>
  )
}
