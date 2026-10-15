// Services catalogue — sourced from the live thepawsfriend.com/services page. Do not add unverified claims.
export type ServiceGroup = 'Veterinary Care' | 'Lab Tests & Kits' | 'Grooming & Spa' | 'Training & Obedience' | 'Emergency & Boarding'

export type Service = {
  id: string
  name: string
  group: ServiceGroup
  price: number | null
  priceLabel?: string
  duration: string
  text: string
  popular?: boolean
  href: string
  wa: string
}

export const serviceCategories: ('All Services' | ServiceGroup)[] = ['All Services', 'Veterinary Care', 'Lab Tests & Kits', 'Grooming & Spa', 'Training & Obedience', 'Emergency & Boarding']

export const services: Service[] = [
  { id: 'consult', name: 'Veterinary Consultation', group: 'Veterinary Care', price: 499, duration: '45–60 mins', text: 'Thoughtful clinical guidance for everyday health concerns, in the comfort of home.', popular: true, href: '/veterinary#services', wa: 'Veterinary Consultation' },
  { id: 'vaccination', name: 'Vaccination', group: 'Veterinary Care', price: 999, duration: '20–30 mins', text: 'A calm, record-led vaccination visit designed around your pet’s age and history.', popular: true, href: '/veterinary#vaccination', wa: 'Vaccination' },
  { id: 'online', name: 'Online Consultation', group: 'Veterinary Care', price: 199, duration: '20–30 mins', text: 'Convenient video guidance for non-urgent questions, reports review, and routine advice.', href: '/veterinary#services', wa: 'Online Consultation' },
  { id: 'organ', name: '3-in-1 Organ Panel (CBC + LFT + KFT)', group: 'Lab Tests & Kits', price: 2799, duration: '15–30 mins sample collection', text: 'Complete diagnostic blood screening combining Complete Blood Count (CBC), Liver Function (LFT) & Kidney Function (KFT) with doorstep sample collection.', popular: true, href: '/veterinary#diagnostics', wa: '3-in-1 Organ Panel' },
  { id: 'parvo', name: 'Parvo Rapid Antigen Kit Test (10-Min)', group: 'Lab Tests & Kits', price: 1199, duration: '10 mins result', text: 'Instant 10-minute on-site antigen rapid kit test for quick Canine Parvovirus (CPV) detection at home.', popular: true, href: '/veterinary#services', wa: 'Parvo Rapid Antigen Kit Test' },
  { id: 'distemper', name: 'Distemper Rapid Kit Test (10-Min)', group: 'Lab Tests & Kits', price: 1999, duration: '10 mins result', text: 'High-sensitivity 10-minute rapid antigen kit test for quick Canine Distemper Virus (CDV) detection at home.', href: '/veterinary#services', wa: 'Distemper Rapid Kit Test' },
  { id: 'blood', name: 'Individual Blood Profile (CBC / LFT / KFT)', group: 'Lab Tests & Kits', price: 999, duration: '15–20 mins sample collection', text: 'Targeted single diagnostic blood test (Choose CBC, LFT, or KFT) with doorstep sample collection.', href: '/veterinary#diagnostics', wa: 'Individual Blood Profile' },
  { id: 'senior', name: 'Senior Pet Complete Health Panel', group: 'Lab Tests & Kits', price: 3499, duration: '30 mins visit', text: 'Comprehensive wellness screening for senior pets (7+ years) — full blood profile, urine test & organ health audit.', href: '/veterinary#services', wa: 'Senior Pet Complete Health Panel' },
  { id: 'full', name: 'Full Grooming', group: 'Grooming & Spa', price: 1199, duration: '90–120 mins', text: 'A complete coat-and-hygiene reset for a clean, comfortable, well-finished pet.', popular: true, href: '/grooming#packages', wa: 'Full Grooming' },
  { id: 'mini', name: 'Mini Grooming', group: 'Grooming & Spa', price: 999, duration: '45–60 mins', text: 'A lighter maintenance visit between full grooming appointments.', href: '/grooming#packages', wa: 'Mini Grooming' },
  { id: 'bathing', name: 'Bathing', group: 'Grooming & Spa', price: 899, duration: '45–60 mins', text: 'A gentle, coat-appropriate wash and dry for a fresher everyday routine.', href: '/grooming#packages', wa: 'Bathing' },
  { id: 'tick', name: 'Anti-Tick/Flea + Full Grooming', group: 'Grooming & Spa', price: 1499, duration: '60–75 mins', text: 'Complete full grooming haircut & bath paired with medicated tick dip, manual tick extraction & anti-parasitic wash.', href: '/grooming#packages', wa: 'Anti-Tick/Flea + Full Grooming' },
  { id: 'puppy', name: 'Puppy Foundation Training', group: 'Training & Obedience', price: 8999, duration: '12 sessions', text: 'A positive, practical foundation for calm routines and confident learning at home.', href: '/dog-training#packages', wa: 'Puppy Foundation Training' },
  { id: 'obedience', name: 'Basic Obedience & Mannerism', group: 'Training & Obedience', price: 11999, duration: '12 sessions', text: 'Structured, reward-led training that turns everyday cues into reliable shared habits.', popular: true, href: '/dog-training#packages', wa: 'Basic Obedience & Mannerism' },
  { id: 'behaviour', name: 'Behaviour Modification Program', group: 'Training & Obedience', price: 14999, duration: '12 sessions', text: 'A careful, management-first plan for behaviour concerns that need specialized attention.', href: '/dog-training#packages', wa: 'Behaviour Modification Program' },
  { id: 'emergency', name: 'Emergency Care', group: 'Emergency & Boarding', price: null, priceLabel: '24/7 Helpline', duration: '24/7 priority', text: 'Rapid triage and next-step coordination for urgent medical concerns.', href: 'tel:+919211338488', wa: 'Emergency Care' },
  { id: 'boarding', name: 'Pet Boarding', group: 'Emergency & Boarding', price: null, priceLabel: 'Custom stay', duration: 'Overnight / daily', text: 'A structured, welfare-first stay with routine, monitoring and clear owner updates.', href: '#help', wa: 'Pet Boarding' },
]

export const featuredServiceIds = ['consult', 'full', 'puppy'] as const

export const comparisonTabs = [
  { key: 'Training', label: 'Training Services', groups: ['Training & Obedience'] as ServiceGroup[] },
  { key: 'Grooming', label: 'Grooming Services', groups: ['Grooming & Spa'] as ServiceGroup[] },
  { key: 'Health', label: 'Health Services', groups: ['Veterinary Care', 'Lab Tests & Kits'] as ServiceGroup[] },
]
