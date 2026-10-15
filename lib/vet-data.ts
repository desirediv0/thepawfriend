// Veterinary page data — sourced from the live thepawsfriend.com/veterinary page. Do not add unverified claims.
export type VetCategory = 'Vet Visit' | 'Blood Test' | 'Vaccine Package' | 'Single Vaccine'

export type VetService = {
  id: string
  name: string
  category: VetCategory
  price: number
  oldPrice: number
  points: string[]
  schedule?: { day: string; shot: string }[]
  note?: string
}

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`

export const vetCategories: { label: string; value: 'All' | VetCategory }[] = [
  { label: 'All Services', value: 'All' },
  { label: 'Vet Visit', value: 'Vet Visit' },
  { label: 'Blood Tests', value: 'Blood Test' },
  { label: 'Vaccine Packages', value: 'Vaccine Package' },
  { label: 'Single Shots', value: 'Single Vaccine' },
]

export const vetServices: VetService[] = [
  { id: 'vet-visit', name: 'Vet Doctor Home Visit Consultation', category: 'Vet Visit', price: 499, oldPrice: 999, note: 'Valid for dogs & cats of all ages across Delhi NCR', points: ['Complete physical examination (Eyes, Ears, Teeth, Heart & Lungs, Temperature)', 'Digital prescription & personalized diet/treatment advice', 'Zero travel stress & zero exposure to clinic cross-infections'] },
  { id: 'cbc', name: 'CBC Test (Complete Blood Count)', category: 'Blood Test', price: 999, oldPrice: 1499, points: ['RBC, Total & Differential WBC, Hemoglobin, DLC & Platelet Count', 'Detects tick fever, anemia, dehydration & immune status', 'Free home blood sample collection by trained technician', 'Certified digital lab report delivered within 12–24 hours'] },
  { id: 'lft', name: 'LFT Test (Liver Function Test)', category: 'Blood Test', price: 999, oldPrice: 1499, points: ['SGPT (ALT), SGOT (AST), Bilirubin (Total & Direct), Alkaline Phosphatase', 'Evaluates liver tissue health, metabolic disorders & medication toxicity', 'Free home sample collection with cold-chain transport', 'Digital report verified by veterinary pathologist'] },
  { id: 'kft', name: 'KFT Test (Kidney Function Test)', category: 'Blood Test', price: 999, oldPrice: 1499, points: ['Serum Creatinine, Blood Urea Nitrogen (BUN), Uric Acid & Electrolytes', 'Crucial for senior pets, renal disease monitoring & chronic hydration issues', 'Free home sample collection by trained vet staff', 'Digital lab report delivered in 12–24 hours'] },
  { id: 'combo', name: '3-in-1 Blood Panel (CBC + KFT + LFT)', category: 'Blood Test', price: 2799, oldPrice: 4497, points: ['Complete CBC + full KFT kidney profile + full LFT liver profile', 'Comprehensive check for internal organs, blood count & immunity', 'Free home sample collection & cold-chain transport', 'Fast-track digital lab report verified by pathologist doctor'] },
  { id: 'parvo', name: 'Parvo Rapid Kit Test (Canine Parvovirus CPV)', category: 'Blood Test', price: 1199, oldPrice: 1800, points: ['Instant 10-minute rapid antigen kit test conducted right in front of you', 'Essential for puppies showing high fever, vomiting or bloody diarrhea', 'Immediate vet doctor action & fluid plan advice on-site'] },
  { id: 'distemper', name: 'Distemper Rapid Kit Test (Canine Distemper CDV)', category: 'Blood Test', price: 1999, oldPrice: 2800, points: ['High-precision 10-minute CDV rapid kit test at your home', 'Detects distemper virus early in cases of nasal discharge, fever or twitches', 'Immediate doctor advice and emergency protocol guidance'] },
  {
    id: 'puppy-pack', name: 'Complete Puppy Vaccination Package (8 Shots)', category: 'Vaccine Package', price: 6999, oldPrice: 10500,
    points: ['Free deworming doses included with every visit', 'Strict 2°C to 8°C cold-chain vaccine transport guaranteed'],
    schedule: [{ day: 'Day 35', shot: 'Puppy DP' }, { day: 'Day 50', shot: 'DHPPiL (9-in-1) Core' }, { day: 'Day 60', shot: 'Canine Corona' }, { day: 'Day 71', shot: 'DHPPiL Booster' }, { day: 'Day 90', shot: 'Corona Booster + Anti-Rabies Core Shot' }, { day: 'Day 120', shot: 'Anti-Rabies Booster + Kennel Cough Vaccine' }],
  },
  { id: 'adult-dog-pack', name: 'Adult Dog Annual Vaccination Package', category: 'Vaccine Package', price: 3999, oldPrice: 5499, points: ['Anti-Rabies Core Shot + DHPPiL (9-in-1) multi-disease protection', 'Canine Corona vaccine + Kennel Cough (Bordetella) shield', 'Deworming dose + full physical health checkup'] },
  {
    id: 'kitten-pack', name: 'Kitten Complete Vaccination Package', category: 'Vaccine Package', price: 3999, oldPrice: 6800,
    points: ['Kitten deworming dose + weight & growth inspection'],
    schedule: [{ day: 'Day 60', shot: 'Tricat (3-in-1 Feline Vaccine)' }, { day: 'Day 90', shot: 'Tricat Booster' }, { day: 'Day 95', shot: 'Anti-Rabies Vaccine' }, { day: 'Day 125', shot: 'Anti-Rabies Booster' }],
  },
  { id: 'adult-cat-pack', name: 'Adult Cat Annual Vaccination Package', category: 'Vaccine Package', price: 1999, oldPrice: 2800, points: ['Tricat (3-in-1 Feline Core Vaccine)', 'Anti-Rabies Core Vaccine Shot', 'Deworming dose + basic wellness examination'] },
  { id: 'arv', name: 'Anti-Rabies Core Vaccine Shot', category: 'Single Vaccine', price: 999, oldPrice: 1299, points: ['Essential annual rabies vaccine for dogs and cats', 'Includes official rabies vaccination record certificate', 'Cold-chain 2°C–8°C storage strictly maintained'] },
  { id: 'dhppil', name: 'DHPPiL (9-in-1 Core Vaccine Shot)', category: 'Single Vaccine', price: 1199, oldPrice: 1699, points: ['Protects against 9 deadly pathogens (CPV, CDV, CAV1, CAV2, CPiV, Leptospira 4-strains)', 'Administered by certified BVSc veterinarian'] },
  { id: 'corona', name: 'Canine Corona Vaccine Shot', category: 'Single Vaccine', price: 1199, oldPrice: 1699, points: ['Prevents viral enteritis and digestive infection in dogs', 'Highly recommended for puppies and active outdoor dogs'] },
  { id: 'kc', name: 'Kennel Cough (Bordetella) Vaccine Shot', category: 'Single Vaccine', price: 1499, oldPrice: 1999, points: ['Intranasal/injectable respiratory protection against contagious tracheobronchitis', 'Must-have for pets visiting parks, boarding facilities or grooming salons'] },
  { id: 'dp', name: 'Puppy DP Shot (Distemper & Parvo)', category: 'Single Vaccine', price: 1199, oldPrice: 1699, points: ['Crucial first-line defense against Parvovirus & Distemper in young puppies', 'Includes puppy growth check & deworming advice'] },
  { id: 'tricat', name: 'Tricat (Feline 3-in-1 Vaccine Shot)', category: 'Single Vaccine', price: 1199, oldPrice: 1699, points: ['Core 3-in-1 vaccine for cats (FPV, FVR & FCV protection)', 'Cold-chain transport directly to your home'] },
]

export const vetStats = [
  { value: '₹499', label: 'Vet home visit' },
  { value: '₹999', label: 'CBC · LFT · KFT' },
  { value: '10 min', label: 'Rapid kit result' },
  { value: '2–8°C', label: 'Cold chain' },
]

export const vetProtocol = [
  { n: '01', name: 'Oral Deworming', target: 'Internal helminths & zoonotic parasites', body: 'Eliminates internal parasites responsible for weakness, poor growth, severe stomach distress, and infections with zoonotic potential.', pets: 'Dogs & Cats' },
  { n: '02', name: '9-in-1 / Puppy DP Vaccine', target: 'Canine Parvovirus, Distemper & Hepatitis', body: 'Establishes critical early immunity against aggressive viral pathogens attacking the canine digestive, respiratory, and nervous systems.', pets: 'Dogs only' },
  { n: '03', name: 'Kennel Cough Shield', target: 'Bordetella bronchiseptica', body: 'Shields against highly contagious respiratory infections presenting as persistent coughing, fever, and lethargy in social environments.', pets: 'Dogs only' },
  { n: '04', name: 'Trio Cat (FVRCP) Core', target: 'Feline Panleukopenia, Calici & Rhinotracheitis', body: 'Fortifies felines against severe viral strains that compromise respiratory function, vision, and core immune response during early life stages.', pets: 'Cats only' },
  { n: '05', name: '9-in-1 Annual Booster', target: 'Annual immunity reinforcement', body: 'Reinforces and extends earlier vaccination protection, ensuring systemic immunity remains robust and effective year after year.', pets: 'Dogs only' },
  { n: '06', name: 'Anti-Rabies (ARV) Shield', target: 'Fatal rabies neurotropic virus', body: 'Delivers mandatory, life-saving protection against a fatal neurotropic virus, safeguarding the pet, your family, and the broader community.', pets: 'Dogs & Cats' },
]

export const vetAdvice = [
  { n: '01', topic: 'Diagnostics', title: 'Why Regular CBC, LFT & KFT Blood Screening Matters', target: 'Detects kidney, liver & tick fever early', body: 'Pets naturally mask early organ disease. Annual CBC, LFT (Liver), and KFT (Kidney) blood panels identify organ distress, anemia, and tick fever before critical symptoms manifest.', points: ['Identifies asymptomatic liver & kidney enzyme spikes', 'Screens for tick-borne parasites (Ehrlichia & Anaplasma)', 'Includes free doorstep sample collection by vet tech'], quote: 'Catches silent organ distress up to 6 months before physical symptoms appear.' },
  { n: '02', topic: 'Vaccine Safety', title: 'Cold-Chain (2°C – 8°C) Vaccine Potency Assurance', target: 'Maximizes rabies & parvo antibody titer', body: 'Vaccines are bio-sensitive biologicals. Room temperature breaks the antibody chain. Our doorstep vets carry portable cold-chain insulated carriers maintained strictly at 2°C–8°C.', points: ['Guaranteed 2°C–8°C temperature logs at your doorstep', 'Ensures 100% active immunogenic response', 'Unopened, verified seals inspected prior to injection'], quote: 'Exposing vaccines to ambient heat destroys viral antigen potency within 30 minutes.' },
  { n: '03', topic: 'Emergency Triage', title: 'High Fever (>103°F) & Parvo / Distemper Rapid Triage', target: '10-minute antigen diagnostic testing', body: 'If your pet has a fever over 103°F, lethargy, or acute vomiting, rapid antigen testing kits (Parvo, Distemper, CPV/CCV) provide confirmed diagnostic results at home in 10 minutes.', points: ['Normal body temp baseline: 101.0°F – 102.5°F', 'Home rapid kit testing avoids clinic stress', 'Immediate emergency protocol initiation by visiting vet'], quote: 'Normal temp is 101°F–102.5°F. Immediate rapid kit testing saves vital treatment hours.' },
  { n: '04', topic: 'Parasite Defense', title: 'Strategic Deworming & Zoonotic Infection Shield', target: 'Prevents internal worms & human transmission', body: 'Gastrointestinal parasites (roundworms, hookworms, tapeworms) cause severe malnutrition and anemia, and can be transmitted to family members. Scheduled deworming eliminates parasite cycles.', points: ['Tailored dosage based on exact pet weight & age', 'Prevents severe weight loss, dull coat & abdominal bloating', 'Eliminates zoonotic risk to children & adults'], quote: 'Regular deworming protects both pet gastrointestinal health and family members.' },
]

// Answers are not published on the source page; unanswered questions point to the team instead of inventing medical claims.
export const vetFaqs = [
  { q: 'How much does dog vaccination cost at home, and what factors affect the overall price?', a: 'Single shots start at ₹999 (Anti-Rabies) and ₹1,199 for DHPPiL, Corona, Puppy DP and Tricat; Kennel Cough is ₹1,499. Packages bundle the shots: the Complete Puppy Package (8 shots) is ₹6,999 and the Adult Dog Annual Package is ₹3,999.' },
  { q: 'What is the difference between 7-in-1 and 9-in-1 core dog vaccines, and is Anti-Rabies included?', a: 'Our core combination shot is DHPPiL (9-in-1), protecting against CPV, CDV, CAV1, CAV2, CPiV and four Leptospira strains. Anti-Rabies is a separate core shot, included in the puppy and adult dog packages.' },
  { q: 'What critical diseases does a complete canine immunization schedule protect against?', a: 'The schedule covers Parvovirus, Distemper, Hepatitis, respiratory infections including Kennel Cough, Corona enteritis, Leptospirosis and Rabies.' },
  { q: 'What is the standard puppy vaccination timeline, and how frequently do adult dogs need boosters?', a: 'The 8-shot puppy schedule runs from Day 35 (Puppy DP) through Day 120 (Anti-Rabies Booster + Kennel Cough). Adult dogs follow an annual package with a yearly booster; your vet will confirm timing for your pet.' },
  { q: 'Will I receive an official pet vaccination record and health certificate after home vaccination?', a: 'The Anti-Rabies shot includes an official rabies vaccination record certificate. Call us on +91 9211338489 for details on other records.' },
  { q: 'How do I schedule a doorstep dog or cat vaccination appointment near me in Delhi NCR / Lucknow?', a: 'Fill in the booking form on this page or message us on WhatsApp. Our expert will reach out to you within 15 minutes.' },
  { q: 'Is doorstep pet vaccination safe, and can pet owners inject vaccines themselves?', a: 'Our vaccines are administered by qualified doctors and carried in strict 2°C–8°C cold-chain storage with seals inspected before injection.' },
  { q: 'What mild side effects might occur post-vaccination, and what precautions should I follow?', a: 'Your visiting vet will guide you on aftercare. For any concern after a visit, call +91 9211338489 (emergency: +91 9211338488).' },
]
