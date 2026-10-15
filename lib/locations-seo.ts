// City-specific copy for SEO. Each city gets its own text (not a find-and-replace of one template),
// so the pages are not duplicates. Prices/phones are shared facts from lib/content.ts. Do not add unverified claims
// (no fake reviews, ratings, addresses or clinic names).
export type CitySeo = {
  title: string
  description: string
  about: string[]
  needs: [string, string][]
  faqs: { q: string; a: string }[]
}

export const SITE_URL = 'https://www.thepawsfriend.com'

export const citySeo: Record<string, CitySeo> = {
  delhi: {
    title: 'Vet Home Visit in Delhi from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Book a vet doctor home visit in Delhi from ₹499. Doorstep pet grooming, dog training, vaccination and blood tests across South Delhi, Dwarka, Rohini and more.',
    about: [
      'Delhi is a big city and getting a pet to a clinic can take an hour each way, especially on weekdays. The Paws Friend brings the clinic to your home: a certified vet doctor examines your dog or cat in the room they already feel safe in, and you get a digital prescription the same day.',
      'We cover colonies, apartments and independent houses across Delhi — from South Delhi and Saket to Dwarka, Rohini and Mayur Vihar. Whether it is a first vaccination for a puppy, a skin problem that will not clear up, a full groom or a few sessions of obedience training, one phone call is enough to start.',
    ],
    needs: [
      ['Summer heat', 'Delhi summers cross 45°C. Dogs overheat quickly — we help with heatstroke prevention, coat care and hydration plans, and a short summer grooming reduces heat stress for thick-coated breeds.'],
      ['Winter air quality', 'Smoggy winters can trigger coughing, watery eyes and breathing trouble in dogs and cats. A home check-up helps you catch it early.'],
      ['Ticks and fleas', 'The monsoon brings ticks and fleas into homes and balconies. Anti-tick treatment during a grooming visit keeps the whole house protected.'],
      ['Stress-free vaccination', 'Puppies and kittens are safest at home before they are fully vaccinated — no waiting rooms full of other animals.'],
    ],
    faqs: [
      { q: 'How much does a vet home visit cost in Delhi?', a: 'A vet doctor home visit consultation in Delhi is ₹499, including a complete physical examination and a digital prescription. Blood tests start at ₹999.' },
      { q: 'Which areas of Delhi do you cover?', a: 'We visit South Delhi, Dwarka, Rohini, Janakpuri, Vasant Kunj, Saket, Lajpat Nagar, Pitampura, Mayur Vihar, Karol Bagh and nearby areas. Call us if your area is not listed.' },
      { q: 'Can I get a vet at home in Delhi on the same day?', a: 'Same-day appointments are available in most areas, subject to slot availability. Book and our expert will call you within 15 minutes.' },
      { q: 'Do you offer pet grooming at home in Delhi?', a: 'Yes. Home grooming in Delhi starts from ₹899 and includes herbal baths, breed haircuts and anti-tick treatment, done at your doorstep.' },
      { q: 'What if my pet has an emergency?', a: 'Call our emergency line +91 9211338488 straight away. For life-threatening situations, please also go to the nearest emergency vet hospital.' },
    ],
  },
  gurugram: {
    title: 'Vet Home Visit in Gurugram from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Vet doctor home visits in Gurugram from ₹499. Doorstep pet grooming, dog training and vaccination in DLF, Golf Course Road, Sohna Road, South City and more.',
    about: [
      'Life in Gurugram runs on tight schedules and high-rise living. Our certified vets, groomers and trainers come to your society, so there is no need to take time off work, book a cab for the carrier or wait at a crowded clinic.',
      'We serve gated communities and apartments across DLF Phases 1–5, Golf Course Road, Sohna Road, Sector 56, South City and Sushant Lok. A vet visit, a vaccination, a full groom and obedience training can all be booked from the same page.',
    ],
    needs: [
      ['Apartment-living dogs', 'Dogs in apartments need steady exercise and mental stimulation. Our trainers build routines around lifts, balconies and society rules.'],
      ['Heat-sensitive breeds', 'Golden Retrievers, Labradors, Huskies and Pugs are common in Gurugram and struggle in the heat. We advise on coat care, cooling and when to groom.'],
      ['Busy pet parents', 'Evening and weekend slots help working professionals. You are at home, and your pet stays calm.'],
      ['Preventive care', 'Vaccination schedules, deworming and tick control are easy to miss — we help you stay on track.'],
    ],
    faqs: [
      { q: 'Do you provide vet home visits in Gurugram?', a: 'Yes. A vet doctor home visit in Gurugram is ₹499, with a full physical examination and a digital prescription.' },
      { q: 'Which Gurugram areas do you serve?', a: 'DLF Phases 1–5, Golf Course Road, Sohna Road, Sector 56, South City, Sushant Lok, MG Road, Nirvana Country and Palam Vihar, plus nearby societies.' },
      { q: 'Can your trainer visit my apartment society?', a: 'Yes. Dog training happens at your home or society. Book a free demo to meet your trainer first.' },
      { q: 'How quickly will someone contact me?', a: 'Our expert will reach out within 15 minutes during working hours, 9 AM to 9 PM, every day.' },
      { q: 'Do you do home grooming in Gurugram?', a: 'Yes, from ₹899 — herbal bath, breed haircut and anti-tick care at your doorstep.' },
    ],
  },
  noida: {
    title: 'Vet Home Visit in Noida from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Book a vet at home in Noida from ₹499. Doorstep dog and cat grooming, training and vaccination across Sector 18, 50, 62, 137, 76 and the Noida Expressway.',
    about: [
      'Noida is spread across numbered sectors and large societies, and the nearest good clinic is rarely close. The Paws Friend sends a certified vet, groomer or trainer to your door, so check-ups and vaccinations fit around your day instead of the other way round.',
      'From Sector 18 and Sector 50 to Sector 62, Sector 76, Sector 137 and the Noida Expressway, we handle consultations, blood tests, home grooming and dog training for dogs and cats of all ages.',
    ],
    needs: [
      ['Society and sector living', 'Whether you live in an independent house or a tower, our team comes prepared for lifts, gates and visitor entry.'],
      ['Skin and coat issues', 'Dust, humidity and seasonal changes cause itching and hotspots. A vet visit at home plus a medicated or herbal bath often sorts it out.'],
      ['Puppy start-up', 'Vaccinations, deworming, diet advice and first training — a single plan for the first few months.'],
      ['Senior pets', 'Older pets find travel hard. Home check-ups and tests mean fewer stressful trips.'],
    ],
    faqs: [
      { q: 'What is the cost of a vet home visit in Noida?', a: 'A vet home visit consultation in Noida is ₹499, including a complete physical examination and a digital prescription.' },
      { q: 'Which sectors in Noida do you cover?', a: 'Sector 18, 44, 50, 62, 76, 122, 137, the Noida Expressway and nearby sectors and societies.' },
      { q: 'Can I book a vaccination at home in Noida?', a: 'Yes. Cold-chain vaccines are brought to your doorstep. Fill in the form and our expert will confirm the schedule.' },
      { q: 'Is dog training available at home in Noida?', a: 'Yes. Certified behaviourists train at your home. You can start with a free demo.' },
      { q: 'How do I book?', a: 'Use the form on this page, call +91 9211338489 or message us on WhatsApp. No advance payment is needed.' },
    ],
  },
  'greater-noida': {
    title: 'Vet Home Visit in Greater Noida & Greater Noida West from ₹499 | Pet Care at Home',
    description: 'Vet doctor home visits in Greater Noida and Greater Noida West from ₹499. Doorstep pet grooming, dog training and vaccination in Alpha, Beta, Gamma, Pari Chowk and nearby societies.',
    about: [
      'In Greater Noida and Greater Noida West, large new societies are often far from established veterinary clinics. We close that gap with home visits by certified vets, plus grooming and training at your door.',
      'We cover Greater Noida West, Alpha, Beta and Gamma sectors, Pari Chowk, Omega, Techzone 4 and Knowledge Park. One call gets a vet to your home for an examination, diagnosis and digital prescription.',
    ],
    needs: [
      ['Distance to clinics', 'Long drives are hard on sick, anxious or elderly pets. A home visit removes the journey completely.'],
      ['New-society living', 'Open spaces and construction dust mean paws, skin and ears need regular checks. We show you what to watch.'],
      ['Large-breed grooming', 'Big, thick-coated breeds are a handful at salons. Home grooming is calmer and easier.'],
      ['Training for new pet parents', 'Many families here are first-time owners. A trainer helps with leash manners, toilet training and barking.'],
    ],
    faqs: [
      { q: 'Do you visit Greater Noida West?', a: 'Yes. We serve Greater Noida West and Greater Noida, including Alpha, Beta, Gamma, Pari Chowk, Omega and Techzone 4.' },
      { q: 'How much is a vet visit in Greater Noida?', a: 'A vet doctor home visit consultation is ₹499 with a complete physical examination and a digital prescription.' },
      { q: 'Can I get blood tests done at home?', a: 'Yes. Blood tests start at ₹999 and samples are collected at your doorstep.' },
      { q: 'Do you offer grooming in Greater Noida?', a: 'Yes, doorstep grooming from ₹899 for dogs and cats.' },
      { q: 'What are your working hours?', a: 'We work Monday to Sunday, 9 AM to 9 PM. Our emergency line is +91 9211338488.' },
    ],
  },
  ghaziabad: {
    title: 'Vet Home Visit in Ghaziabad from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Vet doctor home visits in Ghaziabad from ₹499. Doorstep dog and cat grooming, training and vaccination in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension and more.',
    about: [
      'Traffic around Indirapuram, Vaishali and Vasundhara can turn a short clinic trip into a long, stressful one for your pet. We bring a certified vet, groomer or trainer straight to your home in Ghaziabad.',
      'We serve Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Kaushambi, Crossings Republik and nearby areas — for check-ups, vaccinations, diagnostics, home grooming and obedience training.',
    ],
    needs: [
      ['Traffic-free care', 'No carrier, no jam, no waiting room. Your pet is examined where they are calmest.'],
      ['Dense apartment living', 'Close neighbours and lifts mean barking and manners matter. Our trainers work on these first.'],
      ['Seasonal skin problems', 'Humid monsoons and dusty summers cause itching and ear infections. Early checks prevent bigger problems.'],
      ['Multi-pet homes', 'One visit can cover more than one pet, saving time and travel.'],
    ],
    faqs: [
      { q: 'Do you provide a vet at home in Indirapuram?', a: 'Yes. We cover Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension and Crossings Republik.' },
      { q: 'What does a vet home visit cost in Ghaziabad?', a: 'A vet home visit consultation is ₹499, including a complete physical examination and a digital prescription.' },
      { q: 'Can the vet check more than one pet?', a: 'Please mention the number of pets when we call. Our expert will confirm the plan and price.' },
      { q: 'Do you offer dog training in Ghaziabad?', a: 'Yes, at home, with a free demo to begin with.' },
      { q: 'How soon will you call me back?', a: 'Within 15 minutes during working hours, 9 AM to 9 PM.' },
    ],
  },
  faridabad: {
    title: 'Vet Home Visit in Faridabad from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Vet doctor home visits in Faridabad from ₹499. Doorstep pet grooming, dog training and vaccination in Sector 15, 21, NIT, Greater Faridabad and Ballabgarh.',
    about: [
      'Faridabad has fewer modern pet clinics per kilometre than most of NCR, and going across the city with an anxious pet is hard. The Paws Friend brings vet care, grooming and training to your home.',
      'We cover Sector 15, Sector 21, Sector 37, NIT Faridabad, Greater Faridabad, Neelam Chowk and Ballabgarh. Book a check-up, vaccination, blood test, full groom or training sessions with one call.',
    ],
    needs: [
      ['Dust and air quality', 'Dusty weather affects eyes, skin and breathing. Regular check-ups and coat care keep pets comfortable.'],
      ['Independent houses', 'Many homes here have open terraces and gardens, which means more ticks and fleas. Anti-tick care is built into our grooming.'],
      ['Vaccination schedules', 'We keep track of due dates and bring cold-chain vaccines to your door.'],
      ['Behaviour help', 'Chewing, barking and pulling on the leash are common and fixable with a few trainer sessions.'],
    ],
    faqs: [
      { q: 'Is there a vet who visits homes in Faridabad?', a: 'Yes. The Paws Friend vets visit homes across Faridabad, Greater Faridabad and Ballabgarh.' },
      { q: 'What is the vet home visit fee in Faridabad?', a: 'A vet home visit consultation is ₹499, including a complete physical examination and digital prescription.' },
      { q: 'Do you groom cats at home?', a: 'Yes. Doorstep grooming for dogs and cats starts from ₹899.' },
      { q: 'Can I book on WhatsApp?', a: 'Yes. Message +91 9211338489 on WhatsApp or use the form on this page.' },
      { q: 'Do I need to pay in advance?', a: 'No advance payment is needed to book a visit.' },
    ],
  },
  lucknow: {
    title: 'Vet Home Visit in Lucknow from ₹499 | Pet Grooming & Dog Training at Home',
    description: 'Vet doctor home visits in Lucknow from ₹499. Doorstep pet grooming, dog training and vaccination in Gomti Nagar, Hazratganj, Indira Nagar, Aliganj and more.',
    about: [
      'The Paws Friend is now in Lucknow, with certified vets, groomers and trainers who come to your home. Pets here stay in familiar surroundings while they are examined, vaccinated, groomed or trained.',
      'We serve Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Jankipuram, Aashiana and Vibhuti Khand. Call or fill in the form, and our expert will help you choose the right care.',
    ],
    needs: [
      ['Hot, humid monsoons', 'Humidity brings skin allergies, ear infections, ticks and fleas. Early treatment and the right grooming routine help.'],
      ['Summer heat', 'Lucknow summers are harsh. We advise on hydration, shade, coat care and heat-safe exercise.'],
      ['Bungalows and apartments', 'Care works equally well in independent houses and apartments — we come to you.'],
      ['First-time pet parents', 'Vaccination schedules, diet, toilet training and basic obedience, explained step by step.'],
    ],
    faqs: [
      { q: 'Do you provide vet home visits in Lucknow?', a: 'Yes. A vet doctor home visit in Lucknow is ₹499, including a complete physical examination and a digital prescription.' },
      { q: 'Which areas of Lucknow do you serve?', a: 'Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Jankipuram, Aashiana, Vibhuti Khand and nearby areas.' },
      { q: 'Can I book dog training in Lucknow?', a: 'Yes. Trainers visit your home, and you can begin with a free demo.' },
      { q: 'Do you offer grooming in Lucknow?', a: 'Yes, doorstep grooming from ₹899 with herbal baths, haircuts and anti-tick care.' },
      { q: 'How do I contact you?', a: 'Call +91 9211338489, message on WhatsApp or use the booking form on this page.' },
    ],
  },
}
