import nodemailer, { type Transporter } from 'nodemailer'
import { buildLeadEmail } from '@/lib/email-template'
import { LEAD_FIELDS, validateLead, type LeadType } from '@/lib/lead'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Very small in-memory throttle (per server instance): 5 submissions / 10 min / IP.
const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

let transport: Transporter | null = null
function getTransport() {
  if (transport) return transport
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  if (!host || !user || !pass) return null
  const port = Number(process.env.SMTP_PORT || 587)
  transport = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
  return transport
}

const json = (body: object, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400)
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots learn nothing.
  if (typeof body.website === 'string' && body.website.trim() !== '') return json({ ok: true })

  const type = body.type as LeadType
  if (!type || !(type in LEAD_FIELDS)) return json({ ok: false, error: 'Unknown form.' }, 400)

  const checked = validateLead(type, body)
  if (!checked.ok) return json({ ok: false, error: checked.error }, 400)

  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'local'
  if (limited(ip)) return json({ ok: false, error: 'Too many requests. Please try again in a few minutes or call us.' }, 429)

  const t = getTransport()
  const from = process.env.FROM_EMAIL
  const to = process.env.TO_EMAIL
  if (!t || !from || !to) {
    console.error('[lead] Email is not configured: set SMTP_HOST, SMTP_USER, SMTP_PASSWORD, FROM_EMAIL, TO_EMAIL')
    return json({ ok: false, error: 'We could not send your request right now. Please call +91 9211338489.' }, 500)
  }

  const receivedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
  const mail = buildLeadEmail(type, checked.data, { receivedAt })

  try {
    await t.sendMail({
      from: { name: 'The Paws Friend Website', address: from },
      to,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('[lead] sendMail failed:', err instanceof Error ? err.message : err)
    return json({ ok: false, error: 'We could not send your request right now. Please call +91 9211338489.' }, 502)
  }
}
