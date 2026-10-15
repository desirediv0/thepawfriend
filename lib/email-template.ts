import { FIELD_LABEL, LEAD_FIELDS, LEAD_LABEL, type LeadData, type LeadType } from './lead'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const BRAND = '#d94710'
const INK = '#24211e'
const MUTED = '#6f675f'
const LINE = '#ddd5ca'
const PAPER = '#fffdf9'
const IVORY = '#f8f4ed'

export function buildLeadEmail(type: LeadType, data: LeadData, meta: { receivedAt: string }) {
  const title = LEAD_LABEL[type]
  const order = [...LEAD_FIELDS[type].required, ...LEAD_FIELDS[type].optional].filter((k) => data[k])
  const phoneDigits = data.phone.replace(/[^\d]/g, '').replace(/^0/, '')
  const wa = `https://wa.me/${phoneDigits.length === 10 ? '91' + phoneDigits : phoneDigits}`

  const subject = `New ${title.toLowerCase()} — ${data.name}${data.city ? ` (${data.city})` : ''}`

  const rows = order
    .map((k) => {
      const long = k === 'message' || k === 'notes'
      const value = k === 'phone'
        ? `<a href="tel:+91${esc(phoneDigits.slice(-10))}" style="color:${INK};text-decoration:none;font-weight:700;">${esc(data[k])}</a>`
        : long ? esc(data[k]).replace(/\n/g, '<br>') : esc(data[k])
      return `<tr>
        <td style="padding:14px 0;border-bottom:1px solid ${LINE};width:36%;vertical-align:top;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${MUTED};">${esc(FIELD_LABEL[k] ?? k)}</td>
        <td style="padding:14px 0;border-bottom:1px solid ${LINE};vertical-align:top;font-size:15px;line-height:1.55;color:${INK};">${value}</td>
      </tr>`
    })
    .join('')

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:${IVORY};font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(title)} from ${esc(data.name)} — ${esc(data.phone)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${IVORY};padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${PAPER};border:1px solid ${LINE};border-radius:14px;overflow:hidden;">
        <tr><td style="background:${INK};padding:22px 32px;">
          <div style="font-size:13px;font-weight:800;letter-spacing:.2em;color:#ffffff;">THE PAWS FRIEND</div>
          <div style="font-size:13px;font-style:italic;color:#f4a37f;margin-top:2px;">pawfectly devoted.</div>
        </td></tr>
        <tr><td style="height:4px;background:${BRAND};line-height:4px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="padding:34px 32px 8px;">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:${BRAND};">New enquiry</div>
          <h1 style="margin:10px 0 0;font-size:28px;line-height:1.15;color:${INK};font-weight:800;">${esc(title)}</h1>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.6;color:${MUTED};"><b style="color:${INK};">${esc(data.name)}</b> just submitted this on the website. Please get back to them as soon as you can.</p>
        </td></tr>
        <tr><td style="padding:12px 32px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${INK};">${rows}</table>
        </td></tr>
        <tr><td style="padding:26px 32px 34px;">
          <a href="tel:+91${esc(phoneDigits.slice(-10))}" style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;font-weight:800;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:14px 24px;border-radius:999px;margin:0 8px 8px 0;">Call ${esc(data.name.split(' ')[0])}</a>
          <a href="${esc(wa)}" style="display:inline-block;border:1px solid ${INK};color:${INK};text-decoration:none;font-weight:800;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:13px 24px;border-radius:999px;margin:0 0 8px 0;">WhatsApp</a>
        </td></tr>
        <tr><td style="padding:18px 32px;background:${IVORY};border-top:1px solid ${LINE};font-size:11.5px;line-height:1.6;color:${MUTED};">
          Received ${esc(meta.receivedAt)} (IST) via thepawsfriend website.<br>This is an automated message — reply directly to the customer using the details above.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`

  const text = [
    `THE PAWS FRIEND — ${title}`,
    '',
    ...order.map((k) => `${FIELD_LABEL[k] ?? k}: ${data[k]}`),
    '',
    `Received ${meta.receivedAt} (IST)`,
  ].join('\n')

  return { subject, html, text }
}
