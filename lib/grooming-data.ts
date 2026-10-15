// Grooming page data — sourced from the live thepawsfriend.com/grooming page. Do not add unverified claims.
export type GroomCategory = 'Full Spa & Haircut' | 'Bathing & Refresh' | 'Anti-Tick & Skin' | 'Cat Grooming'
export type GroomPet = 'Dogs' | 'Cats'

export type GroomPackage = {
  id: string
  name: string
  tag: string
  category: GroomCategory
  pets: GroomPet[]
  price: number
  oldPrice: number
  points: string[]
}

export const groomPackages: GroomPackage[] = [
  { id: 'full', name: 'Full Grooming (Head to Tail)', tag: 'Most popular spa', category: 'Full Spa & Haircut', pets: ['Dogs', 'Cats'], price: 1199, oldPrice: 2499, points: ['Warm Herbal Bath & Conditioning', 'Breed-Specific Haircut & Styling', 'Dematting & De-shedding Treatment', 'Nail Clipping & Edge Filing', 'Dental & Mouth Cleansing', 'Ear, Eye & Paw Pad Deep Clean', 'Relieving Paw & Body Massage', 'Hypoallergenic Pet Perfume'] },
  { id: 'mini', name: 'Mini Grooming Maintenance', tag: 'Mid-month touch-up', category: 'Full Spa & Haircut', pets: ['Dogs', 'Cats'], price: 999, oldPrice: 1899, points: ['Choice of Bath or Haircut Trim', 'Dry Bath Option Available', 'Paw Pad Cleansing', 'Dental & Mouth Freshness', 'Combing & Undercoat Brushing', 'Nail Trimming', 'Coat Conditioning & Perfume'] },
  { id: 'bath', name: 'Bathing & Blow Dry Spa', tag: 'Quick freshness', category: 'Bathing & Refresh', pets: ['Dogs', 'Cats'], price: 899, oldPrice: 1299, points: ['Organic Shampooing & Rinse', 'Waterless Dry Bath Option Available', 'Professional High-Velocity Blow Drying', 'Nail Clipping & Edge Filing', 'Undercoat Brushing & Combing', 'Hypoallergenic Pet Perfume Finish'] },
  { id: 'trim', name: 'Breed Trimming & Haircut', tag: 'Coat styling', category: 'Full Spa & Haircut', pets: ['Dogs', 'Cats'], price: 899, oldPrice: 1299, points: ['Full Breed Haircut / Scissors Trim', 'Sanitary Area Trimming', 'Coat Combing & Undercoat Brushing', 'Nail Clipping & Paw Clean', 'Pet Perfume Application'] },
  { id: 'tick', name: 'Anti-Tick/Flea + Full Grooming', tag: 'Parasite defense spa', category: 'Anti-Tick & Skin', pets: ['Dogs'], price: 1499, oldPrice: 1999, points: ['Full Breed Haircut & Styling', 'Specialized Medicated Anti-Tick Dip', 'Thorough Manual Extraction of Ticks & Fleas', 'Skin Soothing Wash & Conditioning', 'Undercoat Pest Comb-out & Fragrance', '30-Day Anti-Tick Prevention Coat Shield'] },
  { id: 'cat', name: 'Cat Special Doorstep Spa', tag: 'Gentle cat care', category: 'Cat Grooming', pets: ['Cats'], price: 1299, oldPrice: 2199, points: ['Low-Noise Waterless/Warm Bath', 'Gentle De-shedding & Dematting', 'Claw Trimming & Paw Pad Clean', 'Ear Wax & Eye Wipe Audit', 'Calming Cat Herbal Spray'] },
]

export const groomCategories = ['All Packages', 'Full Spa & Haircut', 'Bathing & Refresh', 'Anti-Tick & Skin', 'Cat Grooming'] as const
export const groomPetFilters = ['All Pets', 'Dogs', 'Cats'] as const

export const groomCities = ['Delhi', 'Gurugram', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad', 'Lucknow']

export const groomProtocol = [
  { n: '01', code: 'GP-STERILE-01', name: 'Tool & Blade Sterilization', body: '100% sterilised scissors, clippers, and slicker brushes before every doorstep session.', elements: ['Autoclave UV Sanitization', 'Anti-Fungal Wash', 'Single-Use Blades'] },
  { n: '02', code: 'GP-SKIN-02', name: 'Skin & Coat Screening', body: 'Full body dermatological audit identifying hidden rashes, fungal lesions, or parasite nests.', elements: ['Hotspot Identification', 'Flea & Tick Extraction', 'pH-Balanced Herbal Shampoo'] },
  { n: '03', code: 'GP-STRESS-03', name: 'Zero-Cage, Stress-Free Handling', body: 'Gentle groomer interaction without cages or force restraints, keeping senior pets and anxious cats completely at ease.', elements: ['No Force-Restraint', 'Low-Noise Dryers', 'Calming Pheromone Spray'] },
  { n: '04', code: 'GP-EAR-04', name: 'Ear Canal & Ocular Hygiene', body: 'Mite-cleansing ear drops & gentle tear stain wipes preventing chronic otitis.', elements: ['Ear Mite Flushing', 'Tear Stain Cleansing', 'Cotton-Free Safe Audit'] },
  { n: '05', code: 'GP-TICK-05', name: 'Anti-Tick & Flea Extraction Dip', body: 'Targeted organic anti-tick bath and manual tick extraction from paw webs, ears, and neck folds.', elements: ['Permethrin-Free Dip', 'Manual Tick Removal', '30-Day Coat Shield'] },
  { n: '06', code: 'GP-PAW-06', name: 'Paw Pad & Nail Safety', body: 'Precision nail trimming keeping clear of sensitive quick blood vessels, followed by nourishing paw pad balm.', elements: ['Quick-Safe Clipping', 'Smooth Edge Filing', 'Antiseptic Paw Balm'] },
]

export const groomAdvice = [
  { n: '01', title: 'Monsoon Anti-Tick & Parasite Prevention Protocol', author: 'Master Groomer Vikram Singh', role: 'Lead Pet Stylist & Canine Skin Specialist', body: 'Humidity triggers aggressive tick breeding in gardens. Daily paw pad and ear inspection combined with medicated baths prevents painful skin infestations.' },
  { n: '02', title: 'Preventing Painful Coat Matting & Undercoat Trapping', author: 'Master Groomer Priya Sharma', role: 'Certified Feline & Canine Stylist', body: 'Mats trap moisture against sensitive skin, breeding yeast and fungus. Daily slicker brushing and regular de-shedding maintains coat air circulation.' },
  { n: '03', title: 'Safe Nail Trimming & Ear Canal Cleaning Guidelines', author: 'Dr. Ananya Roy', role: 'BVSc & AH — Senior Veterinary Consultant', body: 'Overgrown nails alter joint alignment and posture. Learn how to trim safely without clipping the sensitive quick blood vessel.' },
  { n: '04', title: 'Stress-Free Doorstep Grooming for Anxious Cats', author: 'Master Groomer Vikram Singh', role: 'Cat Handling Specialist', body: 'Cats are highly sensitive to unfamiliar environments. At-home grooming eliminates cage stress and car travel panic.' },
]

// Answers are not published on the source page; they only restate package data from this page.
export const groomFaqs = [
  { q: 'What is included in full dog grooming at home?', a: 'Full Grooming (Head to Tail) includes a warm herbal bath & conditioning, breed-specific haircut & styling, dematting & de-shedding, nail clipping & edge filing, dental & mouth cleansing, ear, eye & paw pad deep clean, a relieving paw & body massage, and a hypoallergenic pet perfume.' },
  { q: 'How much does doorstep dog grooming cost in Delhi NCR?', a: 'Packages start at ₹899 (Bathing & Blow Dry, Breed Trimming). Mini Grooming is ₹999, Full Grooming is ₹1,199 and Anti-Tick/Flea + Full Grooming is ₹1,499.' },
  { q: 'How often should long-haired dogs be groomed?', a: 'Our Mini Grooming Maintenance package is designed as a mid-month touch-up between full sessions. Our team will advise a schedule for your dog’s coat when they call to confirm — +91 9211338489.' },
  { q: 'Is cat grooming at home safe and stress-free?', a: 'Yes — the Cat Special Doorstep Spa (₹1,299) uses a low-noise waterless/warm bath, gentle handling and a calming cat herbal spray, with no cages or force restraints.' },
  { q: 'How does an anti-tick bath treatment work for dogs?', a: 'The Anti-Tick/Flea + Full Grooming package (₹1,499) includes a medicated anti-tick dip, thorough manual extraction of ticks and fleas, a skin-soothing wash, and a 30-day anti-tick prevention coat shield.' },
]
