'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion defaultValue={['0']} className="border-t border-line">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={String(i)} className="border-b border-line">
          <AccordionTrigger className="rounded-none border-0 py-5 pr-1 text-[17px] font-extrabold leading-snug tracking-tight hover:text-brand hover:no-underline focus-visible:ring-brand/30 **:data-[slot=accordion-trigger-icon]:ml-4 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-brand">{f.q}</AccordionTrigger>
          <AccordionContent><p className="max-w-xl pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
