// City landing-page data. Service pricing/phone numbers come from lib/content.ts — not repeated here.
export type Location = {
  slug: string
  name: string
  region: string
  intro: string
  areas: string[]
  image: string
  note: string
}

export const locations: Location[] = [
  { slug: 'delhi', name: 'Delhi', region: 'Delhi NCR', intro: 'Vet visits, grooming and training, delivered to your home across Delhi — so your pet never has to sit through traffic or a crowded clinic waiting room.', areas: ['South Delhi', 'Dwarka', 'Rohini', 'Janakpuri', 'Vasant Kunj', 'Saket', 'Lajpat Nagar', 'Pitampura', 'Mayur Vihar', 'Karol Bagh'], image: '/photos/hero.jpg', note: 'Same-day appointments available in most Delhi neighbourhoods.' },
  { slug: 'gurugram', name: 'Gurugram', region: 'Delhi NCR', intro: 'Busy schedule, high-rise living, no time for the clinic run? Our certified vets and groomers come to your society in Gurugram.', areas: ['DLF Phases 1–5', 'Golf Course Road', 'Sohna Road', 'Sector 56', 'South City', 'Sushant Lok', 'MG Road', 'Nirvana Country', 'Palam Vihar'], image: '/photos/vet-hero.jpg', note: 'We work with gated societies and high-rises across Gurugram.' },
  { slug: 'noida', name: 'Noida', region: 'Delhi NCR', intro: 'From Sector 18 to the Expressway, book a vet, groomer or trainer at home in Noida — no carrier, no car ride, no stress.', areas: ['Sector 18', 'Sector 62', 'Sector 50', 'Sector 137', 'Noida Expressway', 'Sector 76', 'Sector 122', 'Sector 44'], image: '/photos/groom-hero.jpg', note: 'Serving residential sectors and societies across Noida.' },
  { slug: 'greater-noida', name: 'Greater Noida', region: 'Delhi NCR', intro: 'Quality veterinary and grooming care at your door in Greater Noida and Greater Noida West, where good clinics can be a long drive away.', areas: ['Greater Noida West', 'Alpha 1 & 2', 'Beta 1 & 2', 'Gamma 1 & 2', 'Pari Chowk', 'Omega', 'Techzone 4', 'Knowledge Park'], image: '/photos/train.jpg', note: 'Home visits across Greater Noida and Greater Noida West.' },
  { slug: 'ghaziabad', name: 'Ghaziabad', region: 'Delhi NCR', intro: 'Trusted vet visits, vaccinations, grooming and training for dogs and cats in Ghaziabad — all at home, on your schedule.', areas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Raj Nagar Extension', 'Kaushambi', 'Crossings Republik', 'Siddharth Vihar', 'Nehru Nagar'], image: '/photos/vet.jpg', note: 'Covering Indirapuram, Vaishali, Vasundhara and nearby areas.' },
  { slug: 'faridabad', name: 'Faridabad', region: 'Delhi NCR', intro: 'Your pet’s doctor, groomer and trainer — at your home in Faridabad. Calm, comfortable care without the clinic stress.', areas: ['Sector 15', 'Sector 21', 'NIT Faridabad', 'Greater Faridabad', 'Sector 37', 'Neelam Chowk', 'Ballabgarh', 'Old Faridabad'], image: '/photos/groom.jpg', note: 'Serving Faridabad, Greater Faridabad and Ballabgarh.' },
  { slug: 'lucknow', name: 'Lucknow', region: 'Uttar Pradesh', intro: 'Now in Lucknow — certified vets, groomers and trainers who come to your home, so your pet gets expert care in a place they feel safe.', areas: ['Gomti Nagar', 'Hazratganj', 'Indira Nagar', 'Aliganj', 'Alambagh', 'Jankipuram', 'Aashiana', 'Vibhuti Khand'], image: '/photos/comfort.jpg', note: 'Home visits across Lucknow, including Gomti Nagar and Indira Nagar.' },
]

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug)

export const locationHref = (name: string) => {
  const key = name.toLowerCase() === 'gurgaon' ? 'gurugram' : name.toLowerCase()
  const l = locations.find((x) => x.name.toLowerCase() === key)
  return l ? `/${l.slug}` : '/locations'
}

export const cityServices = [
  { title: 'Vet home visit', text: 'Full physical examination, diagnosis and a digital prescription — at home.', href: '/veterinary', price: 'From ₹499' },
  { title: 'Home grooming', text: 'Herbal baths, breed haircuts and anti-tick care without leaving the house.', href: '/grooming', price: 'From ₹899' },
  { title: 'Dog training', text: 'Certified behaviourists teach manners and obedience on your own turf.', href: '/dog-training', price: 'Free demo' },
  { title: 'Vaccination & tests', text: 'Cold-chain vaccines and blood tests collected at your doorstep.', href: '/veterinary#services', price: 'Tests from ₹999' },
]

export const cityHow = [
  ['Tell us what you need', 'Fill the short form or message us on WhatsApp.'],
  ['We call within 15 minutes', 'A care expert confirms the service, time and price.'],
  ['Care arrives at your door', 'A certified professional visits you at home.'],
]
