'use client'

import { useState } from 'react'
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react'
import { validateLead, type LeadType } from './lead'

type Status = 'idle' | 'loading' | 'success' | 'error'

/**
 * Shared submit logic for every enquiry form. Posts to /api/lead (nodemailer → Brevo SMTP on the server).
 * `extra` adds fixed fields (e.g. service). Form inputs are read by name from the <form>.
 */
export function useLeadForm(type: LeadType, extra: Record<string, string> = {}) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return
    const form = e.currentTarget
    const raw: Record<string, unknown> = { ...Object.fromEntries(new FormData(form).entries()), ...extra, type, source: window.location.pathname }

    const checked = validateLead(type, raw)
    if (!checked.ok) { setStatus('error'); setError(checked.error); return }

    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...raw, website: raw.website ?? '' }) })
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !out.ok) throw new Error(out.error || 'Something went wrong.')
      form.reset()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please call +91 9211338489.')
    }
  }

  return { status, error, onSubmit, loading: status === 'loading', done: status === 'success', reset: () => { setStatus('idle'); setError('') } }
}

/** Hidden anti-spam field. Humans never see or fill it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
      <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" /></label>
    </div>
  )
}

export function LeadError({ error }: { error: string }) {
  if (!error) return null
  return <p role="alert" className="col-span-2 flex items-start gap-2 text-[13px] font-bold leading-snug text-destructive"><IconAlertCircle size={18} stroke={1.75} className="mt-px shrink-0" /> {error}</p>
}

export function LeadSuccess({ title = 'Thank you — request received.', text = 'Our expert will reach out to you within 15 minutes during working hours (9 AM–9 PM).', onReset, className = '' }: { title?: string; text?: string; onReset: () => void; className?: string }) {
  return (
    <div role="status" className={`relative rounded-[14px] border border-line bg-paper p-8 text-center shadow-[0_24px_44px_-32px_#4b2a1850] ${className}`}>
      <span aria-hidden className="absolute -top-px left-1/2 h-[3px] w-14 -translate-x-1/2 bg-brand" />
      <IconCircleCheck size={44} stroke={1.5} className="mx-auto text-brand" />
      <p className="mt-4 text-[22px] font-extrabold leading-tight tracking-tight">{title}</p>
      <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-muted">{text}</p>
      <button type="button" onClick={onReset} className="tlink mt-6 text-[12.5px]">Submit another request</button>
    </div>
  )
}
