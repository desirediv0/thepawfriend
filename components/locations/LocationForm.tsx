'use client'

import { IconArrowRight, IconCheck, IconPaw } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { IconSelectValue, Opt } from '@/components/ui/opt'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Honeypot, LeadError, LeadSuccess, useLeadForm } from '@/lib/use-lead-form'

const control = 'h-11 w-full rounded-[10px] border-line !bg-white px-3.5 text-[14px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-brand/15 data-placeholder:text-[#9b9187]'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.12em] text-muted'
const selects = [
  { name: 'pet', label: 'Pet type', placeholder: 'Select pet', options: ['Dog', 'Cat'] },
  { name: 'service', label: 'Service needed', placeholder: 'Select service', options: ['Veterinary care', 'Grooming', 'Dog training', 'Diagnostics'] },
]

/** City-page enquiry form. The city is fixed to the page's city and sent with the lead email. */
export function LocationForm({ city }: { city: string }) {
  const lead = useLeadForm('home-visit', { city })
  return (
    <>
      {lead.done && <LeadSuccess onReset={lead.reset} />}
      <form id="location-form" hidden={lead.done} noValidate onSubmit={lead.onSubmit} className="relative w-full scroll-mt-28 rounded-[14px] border border-line bg-paper p-5 shadow-[0_30px_60px_-40px_#4b2a1860] sm:p-7">
        <span aria-hidden className="absolute -top-px left-6 h-[3px] w-12 bg-brand" />
        <Honeypot />
        <p className="label !text-[10px]"><IconPaw size={13} stroke={1.75} className="-ml-1" /> Book in {city}</p>
        <h2 className="mt-2.5 text-[24px] font-extrabold uppercase leading-[1.05] tracking-tight">Care at your <span className="text-brand">doorstep.</span></h2>
        <p className="mt-2 text-[13px] leading-snug text-muted">Share a few details and our expert will call you within 15 minutes.</p>
        <FieldGroup className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3.5 border-t border-line pt-5">
          <Field className="col-span-2 gap-1.5"><FieldLabel htmlFor="loc-name" className={label}>Your name</FieldLabel><Input id="loc-name" name="name" autoComplete="name" placeholder="Enter your name" className={control} /></Field>
          <Field className="col-span-2 gap-1.5"><FieldLabel htmlFor="loc-phone" className={label}>Mobile number</FieldLabel><Input id="loc-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" className={control} /></Field>
          {selects.map((s) => (
            <Field key={s.name} className="col-span-2 gap-1.5 sm:col-span-1">
              <FieldLabel htmlFor={`loc-${s.name}`} className={label}>{s.label}</FieldLabel>
              <Select name={s.name}>
                <SelectTrigger id={`loc-${s.name}`} className={control}><IconSelectValue placeholder={s.placeholder} /></SelectTrigger>
                <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">{s.options.map((o) => <SelectItem key={o} value={o} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={o} /></SelectItem>)}</SelectContent>
              </Select>
            </Field>
          ))}
          <LeadError error={lead.error} />
          <Button type="submit" disabled={lead.loading} className="group col-span-2 mt-1 h-12 w-full rounded-[10px] bg-brand text-[13px] font-extrabold uppercase tracking-[.06em] text-white hover:bg-brand-dark">
            {lead.loading ? 'Sending…' : <>Book a visit in {city} <IconArrowRight size={17} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
          </Button>
        </FieldGroup>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-muted">
          {['No advance payment', 'Doorstep care', 'We’ll call to confirm'].map((t) => <li key={t} className="flex items-center gap-1.5"><IconCheck size={13} stroke={2.5} className="text-brand" />{t}</li>)}
        </ul>
      </form>
    </>
  )
}
