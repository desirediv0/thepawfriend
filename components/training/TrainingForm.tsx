'use client'

import { IconArrowRight, IconLock, IconPaw } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { IconSelectValue, Opt } from '@/components/ui/opt'
import { cities } from '@/lib/content'
import { trainingAges } from '@/lib/training-data'
import { Honeypot, LeadError, LeadSuccess, useLeadForm } from '@/lib/use-lead-form'

const control = 'h-11 w-full rounded-[10px] border-line !bg-white px-3.5 text-[14px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-brand/15 data-placeholder:text-[#9b9187]'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.12em] text-muted'

/** Same fields as the live page. Emails the enquiry via /api/lead. */
export function TrainingForm() {
  const lead = useLeadForm('training-demo')
  return (
    <>
    {lead.done && <LeadSuccess title="Your free demo is requested." onReset={lead.reset} className="h-full" />}
    <form hidden={lead.done} noValidate onSubmit={lead.onSubmit} className="relative h-full rounded-[10px] border border-line bg-paper p-6 shadow-[0_30px_60px_-36px_#4b2a1860] sm:p-9">
      <span aria-hidden className="absolute -top-px left-7 h-[3px] w-14 bg-brand" />
      <Honeypot />
      <p className="label !text-[10px]"><IconPaw size={13} stroke={1.75} className="-ml-1" /> Book your free demo</p>
      <h2 className="mt-2.5 text-[26px] font-extrabold uppercase leading-[1.05] tracking-tight">Book your free demo</h2>
      <p className="mt-2 text-[13.5px] text-muted">Worth <b className="font-extrabold text-ink">₹2,797</b> → <b className="font-extrabold text-brand">FREE</b> for a limited time</p>

      <FieldGroup className="mt-6 grid grid-cols-2 gap-x-3 gap-y-4 border-t border-line pt-6">
        <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="t-pet" className={label}>Pet name</FieldLabel><Input id="t-pet" required name="petName" placeholder="Pet name" className={control} /></Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1"><FieldLabel htmlFor="t-name" className={label}>Your name</FieldLabel><Input id="t-name" required name="name" autoComplete="name" placeholder="Your name" className={control} /></Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1">
          <FieldLabel htmlFor="t-phone" className={label}>Phone number</FieldLabel>
          <div className="flex">
            <span className="grid h-11 shrink-0 place-items-center rounded-l-[10px] border border-r-0 border-line bg-sand px-3 text-[13px] font-bold">+91</span>
            <Input id="t-phone" required name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="00000 00000" className={`${control} !rounded-l-none`} />
          </div>
        </Field>
        <Field className="col-span-2 gap-1.5 sm:col-span-1">
          <FieldLabel htmlFor="t-city" className={label}>Select city</FieldLabel>
          <Select name="city" required>
            <SelectTrigger id="t-city" className={control}><IconSelectValue placeholder="Select city" /></SelectTrigger>
            <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">{cities.map((c) => <SelectItem key={c} value={c} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={c} /></SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field className="col-span-2 gap-1.5">
          <FieldLabel htmlFor="t-age" className={label}>Dog&apos;s age</FieldLabel>
          <Select name="age" required>
            <SelectTrigger id="t-age" className={control}><IconSelectValue placeholder="Select age / need" /></SelectTrigger>
            <SelectContent alignItemWithTrigger={false} className="rounded-[10px] bg-paper p-1 ring-line">{trainingAges.map((a) => <SelectItem key={a} value={a} className="py-2 text-[14px] font-medium focus:bg-sand"><Opt v={a} /></SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <LeadError error={lead.error} />
        <Button type="submit" disabled={lead.loading} className="group col-span-2 mt-1 h-12 w-full rounded-[10px] bg-brand text-[13px] font-bold uppercase tracking-[.08em] text-white hover:bg-brand-dark">
          {lead.loading ? 'Sending…' : <>Book free demo now <IconArrowRight size={17} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
        </Button>
      </FieldGroup>
      <p className="mt-4 flex items-center justify-center gap-2 text-[11.5px] font-medium text-muted"><IconLock size={14} stroke={1.75} className="text-brand" /> Zero spam. Certified trainer doorstep evaluation.</p>
    </form>
    </>
  )
}
