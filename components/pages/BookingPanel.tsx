'use client'

import { IconArrowRight, IconBrandWhatsapp, IconCheck, IconPaw } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { IconSelectValue, Opt } from '@/components/ui/opt'
import { cities } from '@/lib/content'
import { waHref } from './bits'
import { Honeypot, LeadError, LeadSuccess, useLeadForm } from '@/lib/use-lead-form'

const control = 'h-11 w-full rounded-[10px] border-line !bg-white px-3.5 text-[14px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-brand/15 data-placeholder:text-[#9b9187]'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.12em] text-muted'

/**
 * Booking panel shared by /veterinary and /grooming. Same fields as the live pages:
 * Pet Name, Your Name, Pet Age, City, Mobile Number. On submit it emails the enquiry via /api/lead.
 */
export function BookingPanel({ service, id = 'book', tone = 'clinical', title, intro }: { service: 'Veterinary' | 'Grooming'; id?: string; tone?: 'clinical' | 'warm'; title: React.ReactNode; intro: string }) {
  const lead = useLeadForm('booking', { service })
  const warm = tone === 'warm'

  return (
    <>
    {lead.done && <LeadSuccess onReset={lead.reset} />}
    <form
      id={id}
      hidden={lead.done}
      noValidate
      onSubmit={lead.onSubmit}
      className={`relative w-full scroll-mt-28 border border-line p-5 sm:p-7 ${warm ? 'rounded-[28px] bg-paper shadow-[0_30px_60px_-40px_#4b2a1860]' : 'rounded-[8px] bg-paper shadow-[0_24px_44px_-34px_#4b2a1850]'}`}
    >
      <span aria-hidden className="absolute -top-px left-6 h-[3px] w-12 bg-brand" />
      <Honeypot />
      <p className="label !text-[10px]"><IconPaw size={13} stroke={1.75} className="-ml-1" /> {service === 'Veterinary' ? 'Book a vet visit' : 'Book home grooming'}</p>
      <h2 className="mt-2.5 text-[24px] font-extrabold uppercase leading-[1.05] tracking-tight">{title}</h2>
      <p className="mt-2 text-[13px] leading-snug text-muted">{intro}</p>

      <FieldGroup className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3.5 border-t border-line pt-5">
        <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor={`${id}-pet`} className={label}>Pet name</FieldLabel><Input id={`${id}-pet`} required name="petName" placeholder="Pet name" className={control} /></Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor={`${id}-pet-age`} className={label}>Pet age</FieldLabel><Input id={`${id}-pet-age`} required name="petAge" placeholder="e.g. 2 years" className={control} /></Field>
        <Field className="col-span-2 gap-1.5"><FieldLabel htmlFor={`${id}-name`} className={label}>Your name</FieldLabel><Input id={`${id}-name`} required name="name" autoComplete="name" placeholder="Your name" className={control} /></Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1">
          <FieldLabel htmlFor={`${id}-city`} className={label}>City</FieldLabel>
          <Select name="city" required>
            <SelectTrigger id={`${id}-city`} className={control}><IconSelectValue placeholder="Select city" /></SelectTrigger>
            <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">
              {cities.map((c) => <SelectItem key={c} value={c} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={c} /></SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor={`${id}-mobile`} className={label}>Mobile number</FieldLabel><Input id={`${id}-mobile`} required name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" className={control} /></Field>
        <LeadError error={lead.error} />
        <Button type="submit" disabled={lead.loading} className="group col-span-2 mt-1 h-12 w-full rounded-[10px] bg-brand text-[13px] font-bold uppercase tracking-[.08em] text-white hover:bg-brand-dark">
          {lead.loading ? 'Sending…' : <>Book now — free expert call <IconArrowRight size={17} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
        </Button>
        <a href={waHref(`Hi, I would like to book ${service === 'Veterinary' ? 'a vet visit' : 'home grooming'} with The Paws Friend.`)} target="_blank" rel="noopener noreferrer" className="btn btn-line col-span-2 !min-h-[44px] !rounded-[10px] text-[12.5px]"><IconBrandWhatsapp size={17} stroke={1.75} /> WhatsApp booking</a>
      </FieldGroup>

      <ul className="mt-3.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-muted">
        {['Our expert will reach out in 15 mins', 'No advance payment', 'Zero travel stress'].map((t) => <li key={t} className="flex items-center gap-1.5"><IconCheck size={13} stroke={2.5} className="text-brand" />{t}</li>)}
      </ul>
    </form>
    </>
  )
}
