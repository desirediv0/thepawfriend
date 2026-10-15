// Packages page data. Package prices/inclusions are from the live thepawsfriend.com/packages page; grooming, training and
// vaccination items use the names and prices supplied by the owner, with inclusions only where the live site publishes them
// for the same named service. Nothing here is invented — fields that don't exist are simply omitted.
export type PetType = 'dog' | 'cat'
export type Category = 'packages' | 'grooming' | 'training' | 'vaccination'

export type CareItem = {
  id: string
  pets: PetType[]
  category: Category
  title: string
  description?: string
  image?: string
  imagePosition?: string
  price: string
  priceSuffix?: string
  was?: string
  badge?: string
  includes: string[]
  duration?: string
  /** layout role inside its category */
  role?: 'feature' | 'highlight'
}

export const petOptions: { value: PetType; label: string }[] = [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }]
export const categoryOptions: { value: Category; label: string }[] = [
  { value: 'packages', label: 'Packages' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'training', label: 'Training' },
  { value: 'vaccination', label: 'Vaccination' },
]

export const careItems: CareItem[] = [
  /* ---- Complete-care packages (dog) ---- */
  { id: 'adult-dog-elite', pets: ['dog'], category: 'packages', role: 'feature', title: 'Adult Dog — Elite', badge: 'Popular', description: 'Our most complete adult-dog plan — training, grooming and vaccination bundled for the whole year.', image: '/photos/tr-skills.jpg', imagePosition: '40% 50%', price: '₹20,999', priceSuffix: 'per year, all-inclusive', includes: ['Basic + Advanced Obedience Training — 12 sessions', 'Commands: Sit, Stay, Come, Heel, Fetch, Crate & more'] },
  { id: 'adult-dog-premium', pets: ['dog'], category: 'packages', title: 'Adult Dog — Premium', description: 'Core training plus a full year of grooming and vaccination — a lighter alternative to Elite.', image: '/photos/tr-hero.jpg', imagePosition: '45% 40%', price: '₹18,999', priceSuffix: 'per year, all-inclusive', includes: ['Basic Obedience Training', 'House etiquettes, socialization & core commands'] },
  { id: 'puppy-elite', pets: ['dog'], category: 'packages', title: 'Puppy — Elite', description: 'The complete first-90-days plan — full training, grooming and every puppy vaccine on schedule.', image: '/photos/tr-session.jpg', imagePosition: '50% 40%', price: '₹36,999', priceSuffix: 'per 3-month plan, all-inclusive', duration: '3 months', includes: ['3-Month Basic + Advanced Obedience Training', 'Pee-poop, socialization, leash walking & full command set'] },
  { id: 'puppy-premium', pets: ['dog'], category: 'packages', title: 'Puppy — Premium', description: 'A focused first-month plan covering essential training, grooming and the full vaccine schedule.', image: '/photos/vet-vaccine.jpg', imagePosition: '55% 45%', price: '₹20,999', priceSuffix: 'per 1-month plan, all-inclusive', duration: '1 month', includes: ['1-Month Basic Obedience Training', 'Pee-poop training, name recognition & house etiquettes'] },

  /* ---- Grooming ---- */
  { id: 'g-full', pets: ['dog', 'cat'], category: 'grooming', role: 'feature', title: 'Full Grooming', badge: 'Most popular', description: 'A complete coat-and-hygiene reset for a clean, comfortable, well-finished pet.', image: '/photos/groom.jpg', imagePosition: '50% 45%', price: '₹1,199', duration: '90–120 mins', includes: ['Warm Herbal Bath & Conditioning', 'Breed-Specific Haircut & Styling', 'Dematting & De-shedding Treatment', 'Nail Clipping & Edge Filing', 'Dental & Mouth Cleansing', 'Ear, Eye & Paw Pad Deep Clean', 'Relieving Paw & Body Massage', 'Hypoallergenic Pet Perfume'] },
  { id: 'g-mini', pets: ['dog', 'cat'], category: 'grooming', title: 'Mini Grooming', description: 'A lighter maintenance visit between full grooming appointments.', image: '/photos/groom-prepare.jpg', imagePosition: '50% 35%', price: '₹999', duration: '45–60 mins', includes: ['Choice of Bath or Haircut Trim', 'Dry Bath Option Available', 'Paw Pad Cleansing', 'Dental & Mouth Freshness', 'Combing & Undercoat Brushing', 'Nail Trimming', 'Coat Conditioning & Perfume'] },
  { id: 'g-bath', pets: ['dog', 'cat'], category: 'grooming', title: 'Bathing', description: 'A gentle, coat-appropriate wash and dry for a fresher everyday routine.', image: '/photos/groom-bath.jpg', imagePosition: '50% 35%', price: '₹899', duration: '45–60 mins', includes: ['Organic Shampooing & Rinse', 'Waterless Dry Bath Option Available', 'Professional High-Velocity Blow Drying', 'Nail Clipping & Edge Filing', 'Undercoat Brushing & Combing', 'Hypoallergenic Pet Perfume Finish'] },
  { id: 'g-trim', pets: ['dog', 'cat'], category: 'grooming', title: 'Trimming', description: 'Breed Trimming & Haircut — coat styling.', image: '/photos/groom-hero.jpg', imagePosition: '50% 30%', price: '₹899', includes: ['Full Breed Haircut / Scissors Trim', 'Sanitary Area Trimming', 'Coat Combing & Undercoat Brushing', 'Nail Clipping & Paw Clean', 'Pet Perfume Application'] },
  { id: 'g-tick', pets: ['dog'], category: 'grooming', role: 'highlight', title: 'Anti-Tick/Flea + Full Grooming', badge: 'Parasite defense', description: 'Complete full grooming haircut & bath paired with medicated tick dip, manual tick extraction & anti-parasitic wash.', image: '/photos/groom-style.jpg', imagePosition: '50% 45%', price: '₹1,499', duration: '60–75 mins', includes: ['Full Breed Haircut & Styling', 'Specialized Medicated Anti-Tick Dip', 'Thorough Manual Extraction of Ticks & Fleas', 'Skin Soothing Wash & Conditioning', 'Undercoat Pest Comb-out & Fragrance', '30-Day Anti-Tick Prevention Coat Shield'] },
  { id: 'g-cat', pets: ['cat'], category: 'grooming', role: 'highlight', title: 'Cat Special Doorstep Spa', badge: 'Gentle cat care', description: 'Gentle, low-noise grooming for cats, at home.', image: '/photos/groom-cat.jpg', imagePosition: '55% 50%', price: '₹1,299', includes: ['Low-Noise Waterless/Warm Bath', 'Gentle De-shedding & Dematting', 'Claw Trimming & Paw Pad Clean', 'Ear Wax & Eye Wipe Audit', 'Calming Cat Herbal Spray'] },

  /* ---- Training (dogs) ---- */
  { id: 't-obedience', pets: ['dog'], category: 'training', role: 'feature', title: 'Basic + Advanced Obedience Training', badge: 'Popular', description: 'A complete obedience curriculum from house etiquettes through advanced commands and guarding position.', image: '/photos/tr-hero.jpg', imagePosition: '45% 40%', price: '₹11,999', priceSuffix: '/ 12 sessions', duration: '12 sessions', includes: ['House Etiquettes', 'Crate Training'] },
  { id: 't-puppy', pets: ['dog'], category: 'training', title: 'Puppy Training', description: 'Foundational training for young puppies — house manners, name recognition and first commands.', image: '/photos/tr-session.jpg', imagePosition: '50% 40%', price: '₹8,999', priceSuffix: '/ 12 sessions', duration: '12 sessions', includes: ['Pee-Poop Training', 'Name Recognition'] },
  { id: 't-behaviour', pets: ['dog'], category: 'training', title: 'Behavioural Modification', description: 'Targeted correction for anxiety, aggression, and other behavioural issues.', image: '/photos/tr-behav.jpg', imagePosition: '50% 45%', price: '₹14,999', priceSuffix: '/ 12 sessions', duration: '12 sessions', includes: ['Separation Anxiety', 'Fussy Eater'] },
  { id: 't-guard', pets: ['dog'], category: 'training', title: 'Protection / Guard Dog Training', description: 'Advanced protection and property-guarding training for capable, confident dogs.', image: '/photos/tr-leash.jpg', imagePosition: '50% 40%', price: '₹16,999', priceSuffix: '/ 12 sessions', duration: '12 sessions', includes: ['Article Protection', 'Property Protection'] },

  /* ---- Vaccination ---- */
  { id: 'v-puppy', pets: ['dog'], category: 'vaccination', title: 'Puppy Vaccination Package', price: '₹7,399', includes: [] },
  { id: 'v-adult-dog', pets: ['dog'], category: 'vaccination', title: 'Adult Dog Vaccination Package', price: '₹3,999', includes: [] },
  { id: 'v-individual', pets: ['dog', 'cat'], category: 'vaccination', title: 'Veterinary Services (Individual)', price: 'From ₹499', includes: [] },
  { id: 'v-kitten', pets: ['cat'], category: 'vaccination', title: 'Kitten Vaccination Package', price: '₹4,999', includes: [] },
  { id: 'v-cat', pets: ['cat'], category: 'vaccination', title: 'Cat Vaccination Package', price: '₹1,999', includes: [] },
]

/** Which service the booking flow should receive. */
export const bookingService: Record<Category, string> = { packages: 'Packages', grooming: 'Grooming', training: 'Dog Training', vaccination: 'Veterinary' }
