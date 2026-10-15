// Single source of truth for homepage copy. Existing business data only.
export const PHONE = '+91 9211338489'
export const PHONE_HREF = 'tel:+919211338489'
export const EMERGENCY_PHONE = '+91 9211338488'
export const EMAIL = 'support@thepawsfriend.com'
export const WHATSAPP = 'https://wa.me/919211338489?text=Hi%20THE%20PAWS%20FRIEND%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pet%20care%20services.'
export const HOURS = 'Mon–Sun, 9 AM–9 PM'

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Veterinary', href: '/veterinary' },
  { label: 'Grooming', href: '/grooming' },
  { label: 'Dog Training', href: '/dog-training' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const cities = ['Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad', 'Lucknow']

export const stats = [
  { value: '5,200+', label: 'Pet parents' },
  { value: '30+', label: 'Care experts' },
  { value: '4.8★', label: 'Rated care' },
  { value: 'At home', label: 'Less travel · more comfort' },
]

export const faqs = [
  { q: 'What areas do you serve?', a: 'We currently serve Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad and Lucknow.' },
  { q: 'How does a home visit work?', a: 'Choose a service, share a convenient time and our team will call to confirm your visit.' },
  { q: 'How much does a vet home visit cost?', a: 'A vet doctor home visit consultation is ₹499, including a complete physical examination and a digital prescription. Blood tests start at ₹999.' },
  { q: 'Do I need to pay in advance?', a: 'No advance payment is needed. Our expert will call you to confirm the visit.' },
  { q: 'Which services come to my home?', a: 'Veterinary consultations, vaccinations, blood tests and rapid kits, grooming and dog training — all delivered at your doorstep.' },
  { q: 'What if it is an emergency?', a: 'Call our emergency line on +91 9211338488, available 24/7. Our regular line, +91 9211338489, is open Mon - Sun, 9 AM – 9 PM.' },
  { q: 'What should I prepare for my pet’s visit?', a: 'A calm familiar space is all we need. We’ll guide you through anything else before we arrive.' },
]

export const vetPoints = [
  'Home consultation & health checks',
  'Vaccination & diagnostics',
  'Follow-up consultation',
  'Emergency assistance & guidance',
]

// Packages and testimonials: no data exists in the project yet.
// Populate these arrays with real data and the homepage sections will render automatically.
export type PackageItem = { name: string; price: string; note?: string; features?: string[] }
export type Testimonial = { quote: string; name: string; pet: string; city: string }
export const packages: PackageItem[] = []
// Real reviews from the live dog-training page (verified there). Name = pet parent, pet = dog and age.
export const testimonials: Testimonial[] = [
  { quote: 'Bruno was constantly nipping and jumping on everyone... within 3 weeks of training, Bruno is walking calmly on leash and sitting when guests enter!', name: 'Rohit & Ananya Verma', pet: 'Bruno (Golden Retriever, 5 Mo)', city: 'Gurugram, Phase 5' },
  { quote: 'I was worried Rocky was getting reactive on walks. The positive reinforcement methods... completely turned things around without any harsh punishment.', name: 'Siddharth Mehta', pet: 'Rocky (German Shepherd, 1 Year)', city: 'South Delhi' },
  { quote: 'Best investment for our puppy! Potty training was sorted within 10 days... extremely patient and taught our entire family how to give commands correctly.', name: 'Meenakshi Sundaram', pet: 'Coco (Indie Puppy, 3 Mo)', city: 'Noida, Sector 62' },
]
