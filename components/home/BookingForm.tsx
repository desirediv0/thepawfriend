'use client'

import { IconArrowRight, IconCheck, IconPaw } from '@tabler/icons-react'
import { IconSelectValue, Opt } from '@/components/ui/opt'
import { cities } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Honeypot, LeadError, LeadSuccess, useLeadForm } from '@/lib/use-lead-form'

const trust = ['No advance payment', 'We’ll call to confirm', 'Doorstep care']

const selects = [
  { name: 'pet', label: 'Pet type', placeholder: 'Select pet type', options: ['Dog', 'Cat'], span: 'col-span-1' },
  { name: 'city', label: 'City', placeholder: 'Select city', options: cities, span: 'col-span-1' },
  { name: 'service', label: 'Service needed', placeholder: 'Select service', options: ['Veterinary care', 'Grooming', 'Dog training', 'Diagnostics'], span: 'col-span-2' },
]

const control = 'h-11 w-full rounded-[10px] border-line !bg-white px-3.5 text-[14px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-brand/15 data-placeholder:text-[#9b9187]'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.12em] text-muted'

export function BookingForm() {
  const lead = useLeadForm('home-visit')
  return (
    <>
    {lead.done && <LeadSuccess onReset={lead.reset} className="lg:max-w-[460px]" />}
    <form
      hidden={lead.done}
      noValidate
      className="relative w-full scroll-mt-28 rounded-[14px] border border-line bg-paper p-5 shadow-[0_24px_44px_-32px_#4b2a1850] sm:p-6 lg:max-w-[460px]"
      onSubmit={lead.onSubmit}
    >
      <span aria-hidden className="absolute -top-px left-5 h-[3px] w-12 bg-brand" />
      <Honeypot />
      <div className="flex items-center justify-between gap-3"><p className="label !text-[10px]"><IconPaw size={13} stroke={1.75} className="-ml-1" /> Book a home visit</p><span className="rounded-full bg-brand/10 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[.12em] text-brand">Free expert call</span></div>
      <h2 className="mt-2.5 text-[22px] font-extrabold uppercase leading-[1.05] tracking-tight">Care starts with<br /><span className="text-brand">a conversation.</span></h2>
      <p className="mt-2 text-[12.5px] leading-snug text-muted">Share a few details and a care expert will call you to understand your pet’s needs and help you choose the right care.</p>

      <FieldGroup className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-line pt-4">
        <Field className="col-span-2 gap-1.5">
          <FieldLabel htmlFor="b-name" className={label}>Your name</FieldLabel>
          <Input id="b-name" required name="name" placeholder="Enter your name" autoComplete="name" className={control} />
        </Field>
        <Field className="col-span-2 gap-1.5">
          <FieldLabel htmlFor="b-mobile" className={label}>Mobile number</FieldLabel>
          <Input id="b-mobile" required name="mobile" type="tel" inputMode="tel" placeholder="+91 00000 00000" autoComplete="tel" className={control} />
        </Field>
        {selects.map((s) => (
          <Field key={s.name} className={`${s.span} gap-1.5`}>
            <FieldLabel htmlFor={`b-${s.name}`} className={label}>{s.label}</FieldLabel>
            <Select name={s.name} required>
              <SelectTrigger id={`b-${s.name}`} className={control}>
                <IconSelectValue placeholder={s.placeholder} />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">
                {s.options.map((o) => <SelectItem key={o} value={o} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={o} /></SelectItem>)}
              </SelectContent>
            </Select>
          </Field>
        ))}
        <LeadError error={lead.error} />
        <Button type="submit" disabled={lead.loading} className="group col-span-2 mt-1 h-13 w-full rounded-[10px] bg-brand text-[13.5px] font-extrabold uppercase tracking-[.06em] text-white shadow-[0_14px_26px_-14px_#d94710] hover:bg-brand-dark">
          {lead.loading ? 'Sending…' : <>Book Now – Free Expert Call <IconArrowRight size={17} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
        </Button>
      </FieldGroup>

      <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-muted">
        {trust.map((t) => <li key={t} className="flex items-center gap-1.5"><IconCheck size={13} stroke={2.5} className="text-brand" />{t}</li>)}
      </ul>
    </form>
    </>
  )
}
