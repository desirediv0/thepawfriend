'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconAlertCircle, IconArrowRight, IconCircleCheck, IconLoader2 } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { CONTACT, isIndianPhone } from '@/lib/contact'
import { Honeypot, markSubmitted } from '@/lib/use-lead-form'

type Errors = Partial<Record<'name' | 'phone' | 'message', string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const control = 'h-14 w-full rounded-none border-0 border-b border-ink/30 !bg-transparent px-0 text-[18px] font-medium text-ink placeholder:text-[#9b9187] focus-visible:border-brand focus-visible:ring-0'
const label = '!text-[10px] !font-extrabold uppercase tracking-[.2em] text-muted'

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const router = useRouter()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const name = String(f.get('name') ?? '').trim()
    const phone = String(f.get('phone') ?? '').trim()
    const message = String(f.get('message') ?? '').trim()

    const next: Errors = {}
    if (name.length < 2) next.name = 'Please enter your name.'
    if (!isIndianPhone(phone)) next.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (message.length < 5) next.message = 'Tell us a little about what your pet needs.'
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('loading')
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', name, phone, message, source: window.location.pathname, website: String(f.get('website') ?? '') }) })
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !out.ok) throw new Error(out.error || 'failed')
      form.reset()
      markSubmitted('contact', name)
      router.push('/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="message" className="scroll-mt-24 bg-ivory py-14 md:py-20 lg:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div data-reveal className="lg:col-span-5">
          <p className="label">Message us</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,4.2rem)]">Send us<br /><em>a message.</em></h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">Tell us what your pet needs and our team will get back to you.</p>
          <p className="mt-8 border-t border-line pt-5 text-[13px] text-muted">Prefer to talk? Call <a className="font-extrabold text-ink underline underline-offset-4 hover:text-brand" href={CONTACT.phoneHref}>{CONTACT.phone}</a> · {CONTACT.hours}</p>
        </div>

        <div data-reveal className="lg:col-span-7">
          {status === 'success' ? (
            <div role="status" className="border-t border-ink/80 py-12">
              <IconCircleCheck size={40} stroke={1.5} className="text-brand" />
              <p className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">Thank you — message received.</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">Our team will get back to you during working hours (Mon - Sun, 9 AM–9 PM).</p>
              <button type="button" onClick={() => setStatus('idle')} className="tlink mt-6 text-[13px]">Write another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="relative border-t border-ink/80 pt-8">
              <Honeypot />
              <FieldGroup className="gap-8">
                <Field data-invalid={!!errors.name} className="gap-1">
                  <FieldLabel htmlFor="c-name" className={label}>Your name</FieldLabel>
                  <Input id="c-name" name="name" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} className={control} />
                  {errors.name && <FieldError id="c-name-err">{errors.name}</FieldError>}
                </Field>
                <Field data-invalid={!!errors.phone} className="gap-1">
                  <FieldLabel htmlFor="c-phone" className={label}>Phone number</FieldLabel>
                  <Input id="c-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'c-phone-err' : undefined} className={control} />
                  {errors.phone && <FieldError id="c-phone-err">{errors.phone}</FieldError>}
                </Field>
                <Field data-invalid={!!errors.message} className="gap-1">
                  <FieldLabel htmlFor="c-message" className={label}>Your message</FieldLabel>
                  <textarea id="c-message" name="message" rows={4} placeholder="How can we help your pet?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-message-err' : undefined} className="w-full resize-y border-0 border-b border-ink/30 bg-transparent py-3 text-[18px] font-medium text-ink outline-none transition-colors placeholder:text-[#9b9187] focus:border-brand aria-invalid:border-destructive" />
                  {errors.message && <FieldError id="c-message-err">{errors.message}</FieldError>}
                </Field>
              </FieldGroup>

              {status === 'error' && <p role="alert" className="mt-6 flex items-center gap-2 text-[13.5px] font-bold text-destructive"><IconAlertCircle size={18} stroke={1.75} /> We couldn&apos;t send your message. Please call {CONTACT.phone} or email {CONTACT.email}.</p>}

              <Button type="submit" disabled={status === 'loading'} className="group mt-10 h-14 rounded-full bg-brand px-8 text-[13px] font-bold uppercase tracking-[.08em] text-white hover:bg-brand-dark">
                {status === 'loading' ? <><IconLoader2 size={18} stroke={2} className="animate-spin" /> Sending…</> : <>Send message <IconArrowRight size={18} stroke={2} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
