// Shared (client + server) definition of every form on the site that sends an enquiry email.
export type LeadType = 'home-visit' | 'booking' | 'training-demo' | 'contact'

export const LEAD_LABEL: Record<LeadType, string> = {
  'home-visit': 'Home visit request',
  booking: 'Booking request',
  'training-demo': 'Free dog-training demo',
  contact: 'Contact message',
}

export const FIELD_LABEL: Record<string, string> = {
  name: 'Name',
  phone: 'Mobile',
  petName: 'Pet name',
  petAge: 'Pet age',
  pet: 'Pet type',
  age: 'Dog’s age / need',
  service: 'Service',
  package: 'Package',
  city: 'City',
  message: 'Message',
  notes: 'Notes',
  source: 'Sent from page',
}

// Order here is the order rows appear in the email.
export const LEAD_FIELDS: Record<LeadType, { required: string[]; optional: string[] }> = {
  'home-visit': { required: ['name', 'phone', 'pet', 'service', 'city'], optional: ['source'] },
  booking: { required: ['name', 'phone', 'petName', 'petAge', 'city'], optional: ['service', 'package', 'notes', 'source'] },
  'training-demo': { required: ['name', 'phone', 'petName', 'city', 'age'], optional: ['source'] },
  contact: { required: ['name', 'phone', 'message'], optional: ['source'] },
}

/** 10-digit Indian mobiles (6–9 start), optional +91 / 91 / 0 prefix, spaces or dashes allowed. */
export const isIndianPhone = (v: string) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ''))

export type LeadData = Record<string, string>

const MAX = 1500

const REQUIRED_MSG: Record<string, string> = {
  name: 'Please enter your name.',
  phone: 'Please enter your mobile number.',
  petName: 'Please enter your pet’s name.',
  petAge: 'Please enter your pet’s age.',
  pet: 'Please select your pet type.',
  age: 'Please select your dog’s age.',
  city: 'Please select your city.',
  service: 'Please select a service.',
  message: 'Please tell us how we can help.',
}

/** Validates + normalises raw form values. Used on the client for fast feedback and again on the server. */
export function validateLead(type: LeadType, raw: Record<string, unknown>): { ok: true; data: LeadData } | { ok: false; error: string } {
  const spec = LEAD_FIELDS[type]
  if (!spec) return { ok: false, error: 'Unknown form.' }

  const src: Record<string, unknown> = { ...raw }
  if (src.phone == null && src.mobile != null) src.phone = src.mobile // some forms call it "mobile"

  const data: LeadData = {}
  for (const key of [...spec.required, ...spec.optional]) {
    const v = typeof src[key] === 'string' ? (src[key] as string).trim().slice(0, MAX) : ''
    if (v) data[key] = v
  }

  for (const key of spec.required) {
    if (!data[key]) return { ok: false, error: REQUIRED_MSG[key] ?? `Please fill in “${FIELD_LABEL[key] ?? key}”.` }
  }
  if (data.name.length < 2) return { ok: false, error: 'Please enter your name.' }
  if (!isIndianPhone(data.phone)) return { ok: false, error: 'Enter a valid 10-digit Indian mobile number.' }
  if (type === 'contact' && data.message.length < 5) return { ok: false, error: 'Tell us a little more about what your pet needs.' }

  return { ok: true, data }
}
