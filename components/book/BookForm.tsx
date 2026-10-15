'use client'

import { IconArrowRight, IconCheck, IconPaw } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { IconSelectValue, Opt } from '@/components/ui/opt'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { cities } from '@/lib/content'
import { Honeypot, LeadError, LeadSuccess, useLeadForm } from '@/lib/use-lead-form'

const control = 'h-11 w-full rounded-[10px] border-line !bg-white px-3.5 text-[14px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-brand/15 data-placeholder:text-[#9b9187]'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.12em] text-muted'

export const BOOK_SERVICES = ['Veterinary', 'Grooming', 'Dog Training', 'Packages', 'Services']

/** Booking request form for /book. Service / package come from the link the visitor clicked (e.g. /book?service=Grooming&package=Full%20Grooming). */
export function BookForm({ service, pkg }: { service?: string; pkg?: string }) {
  const options = service && !BOOK_SERVICES.includes(service) ? [service, ...BOOK_SERVICES] : BOOK_SERVICES
  const lead = useLeadForm('booking', pkg ? { package: pkg } : {})

  return (
    <>
      {lead.done && <LeadSuccess onReset={lead.reset} />}
      <form id="booking-form" hidden={lead.done} noValidate onSubmit={lead.onSubmit} className="relative w-full rounded-[14px] border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_#4b2a1860] sm:p-9">
        <span aria-hidden className="absolute -top-px left-7 h-[3px] w-14 bg-brand" />
        <Honeypot />
        <p className="label !text-[10px]"><IconPaw size={13} stroke={1.75} className="-ml-1" /> Book a doorstep visit</p>
        <h2 className="mt-2.5 text-[26px] font-extrabold uppercase leading-[1.05] tracking-tight">Tell us about your pet.</h2>
        {pkg && <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[12px] font-extrabold text-brand"><IconCheck size={15} stroke={2.25} /> {pkg}</p>}

        <FieldGroup className="mt-6 grid grid-cols-2 gap-x-3 gap-y-4 border-t border-line pt-6">
          <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="bk-pet" className={label}>Pet name</FieldLabel><Input id="bk-pet" name="petName" placeholder="Pet name" className={control} /></Field>
          <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="bk-age" className={label}>Pet age</FieldLabel><Input id="bk-age" name="petAge" placeholder="e.g. 2 years" className={control} /></Field>
          <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="bk-name" className={label}>Your name</FieldLabel><Input id="bk-name" name="name" autoComplete="name" placeholder="Your name" className={control} /></Field>
          <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="bk-phone" className={label}>Mobile number</FieldLabel><Input id="bk-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" className={control} /></Field>
          <Field className="col-span-2 gap-1.5 sm:col-span-1">
            <FieldLabel htmlFor="bk-city" className={label}>City</FieldLabel>
            <Select name="city">
              <SelectTrigger id="bk-city" className={control}><IconSelectValue placeholder="Select city" /></SelectTrigger>
              <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">{cities.map((c) => <SelectItem key={c} value={c} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={c} /></SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field className="col-span-2 gap-1.5 sm:col-span-1">
            <FieldLabel htmlFor="bk-service" className={label}>Service</FieldLabel>
            <Select name="service" defaultValue={service}>
              <SelectTrigger id="bk-service" className={control}><IconSelectValue placeholder="Select service" /></SelectTrigger>
              <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">{options.map((o) => <SelectItem key={o} value={o} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={o} /></SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field className="col-span-2 gap-1.5">
            <FieldLabel htmlFor="bk-notes" className={label}>Anything we should know? (optional)</FieldLabel>
            <textarea id="bk-notes" name="notes" rows={3} placeholder="Symptoms, preferred time, breed…" className="w-full resize-y rounded-[10px] border border-line bg-white px-3.5 py-3 text-[14px] font-medium text-ink outline-none transition-[border-color,box-shadow] placeholder:text-[#9b9187] focus:border-brand focus:ring-[3px] focus:ring-brand/15" />
          </Field>
          <LeadError error={lead.error} />
          <Button type="submit" disabled={lead.loading} className="group col-span-2 mt-1 h-12 w-full rounded-[10px] bg-brand text-[13px] font-bold uppercase tracking-[.08em] text-white hover:bg-brand-dark">
            {lead.loading ? 'Sending…' : <>Request booking <IconArrowRight size={17} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
          </Button>
        </FieldGroup>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-muted">
          {['No advance payment', 'Our expert will reach out in 15 mins', 'Zero travel stress'].map((t) => <li key={t} className="flex items-center gap-1.5"><IconCheck size={13} stroke={2.5} className="text-brand" />{t}</li>)}
        </ul>
      </form>
    </>
  )
}
