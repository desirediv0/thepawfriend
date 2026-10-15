// Contact page data. Business details are the owner's supplied source of truth — do not change.
export const CONTACT = {
  phone: '+91 9211338489',
  phoneHref: 'tel:+919211338489',
  emergency: '+91 9211338488',
  emergencyHref: 'tel:+919211338488',
  email: 'support@thepawsfriend.com',
  emailHref: 'mailto:support@thepawsfriend.com',
  whatsappNumber: '919211338489',
  hours: 'Mon - Sun: 9:00 AM - 9:00 PM',
  bookHref: '/book',
}

export const whatsappHref = (message = 'Hi THE PAWS FRIEND, I’d like to know more about your pet care services.') =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`

export const serviceCities = ['Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad', 'Lucknow']

/** Accepts 10-digit Indian mobiles (6–9 start), with optional +91 / 91 / 0 prefix, spaces or dashes. */
export const isIndianPhone = (v: string) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ''))

export type ContactPayload = { name: string; phone: string; message: string }

/**
 * Single integration point for the contact form.
 * No contact API exists in this project yet, so for now the message is handed to the team on WhatsApp
 * (opens a prefilled chat the visitor sends themselves). Replace the body with a fetch()/server action
 * when a backend endpoint is available — the form UI needs no changes.
 */
export async function sendContactMessage(p: ContactPayload): Promise<void> {
  const text = `Hi THE PAWS FRIEND, this is ${p.name} (${p.phone}).\n\n${p.message}`
  const w = window.open(whatsappHref(text), '_blank', 'noopener,noreferrer')
  if (!w) throw new Error('popup-blocked')
}
