// Dog Training page data — sourced from the live thepawsfriend.com/dog-training page. Do not add unverified claims.
import { inr } from './vet-data'

export const trainingOffer = {
  value: 2797,
  inclusions: [
    { n: '01', name: 'Pet Behaviour Assessment', value: 799 },
    { n: '02', name: 'Personalised Training Roadmap', value: 1499 },
    { n: '03', name: 'Dog Trainability Assessment', value: 499 },
  ],
  slotsLeft: 5,
  booked: 25,
  total: 30,
}

export const trainingRating = { stars: '★★★★★', score: '4.9/5', dogs: '5,200+ Dogs' }

export type Problem = { n: string; name: string; group: 'Training' | 'Behaviour Therapy'; img: 'leash' | 'behav' | 'hero' | 'session' }

export const problems: Problem[] = [
  { n: '01', name: 'Leash Pulling & Training', group: 'Training', img: 'leash' },
  { n: '02', name: 'Ignoring Commands', group: 'Training', img: 'session' },
  { n: '03', name: 'Dog Jumping on People', group: 'Training', img: 'hero' },
  { n: '04', name: 'Hyperactive Behaviour', group: 'Training', img: 'session' },
  { n: '05', name: 'Biting and Mouthing', group: 'Behaviour Therapy', img: 'behav' },
  { n: '06', name: 'Potty & House Training', group: 'Behaviour Therapy', img: 'session' },
  { n: '07', name: 'Dog Barking Solution', group: 'Behaviour Therapy', img: 'behav' },
  { n: '08', name: 'Dog Aggression Training', group: 'Behaviour Therapy', img: 'behav' },
]

export const trainingSteps = [
  { n: '01', title: 'Free In-Home Demo', text: 'Certified trainer visits your doorstep to assess your pet’s personality and demonstrate positive techniques.', img: 'demo' },
  { n: '02', title: 'Customized Roadmap', text: 'We design a personalized session schedule based on your household routine and behavioral goals.', img: 'plan' },
  { n: '03', title: '1-on-1 Doorstep Sessions', text: '3x weekly 45-minute structured sessions where your dog learns commands and you get hands-on coaching.', img: 'session' },
  { n: '04', title: 'Parent Certification & Support', text: 'Master lifelong command handling with ongoing trainer guidance and progress tracking.', img: 'cta' },
] as const

export const trainingRegions = [
  { name: 'Delhi NCR', status: 'Active coverage region' },
  { name: 'Gurugram', status: 'Available near you' },
  { name: 'Noida & Gr. Noida', status: 'Available near you' },
  { name: 'Ghaziabad & Faridabad', status: 'Available near you' },
  { name: 'Lucknow', status: 'Available near you' },
]

export type TrainingPackage = { id: string; name: string; price: number; per: string; text: string; includes: string[] }

export const trainingPackages: TrainingPackage[] = [
  { id: 'puppy', name: 'Puppy Training', price: 8999, per: 'per 12 sessions', text: 'Foundational training for young puppies — house manners, name recognition and first commands.', includes: ['Pee-Poop Training', 'Name Recognition'] },
  { id: 'obedience', name: 'Basic + Advanced Obedience Training', price: 11999, per: 'per 12 sessions', text: 'A complete obedience curriculum from house etiquettes through advanced commands and guarding position.', includes: ['House Etiquettes', 'Crate Training'] },
  { id: 'behaviour', name: 'Behavioural Modification', price: 14999, per: 'per 12 sessions', text: 'Targeted correction for anxiety, aggression, and other behavioural issues.', includes: ['Separation Anxiety', 'Fussy Eater'] },
  { id: 'guard', name: 'Protection / Guard Dog Training', price: 16999, per: 'per 12 sessions', text: 'Advanced protection and property-guarding training for capable, confident dogs.', includes: ['Article Protection', 'Property Protection'] },
]

export const trainingSkills = ['Potty Routine', 'Anti-Biting', 'Leash Heel Walk', 'Guest Manners']

export const trainingReasons = [
  { n: '01', title: '100% At-Home Environment', text: 'Dogs learn 3x faster in their real living environment where actual triggers (doorbells, visitors, furniture) occur.' },
  { n: '02', title: 'Positive Reinforcement Science', text: 'Zero force, punishment, or choke collars. We use science-backed treat, praise, and play motivation for happy, eager learning.' },
  { n: '03', title: 'Customized Breed Curriculum', text: 'Every program is tailored to your dog’s specific age, breed energy level, temperament, and your household rules.' },
  { n: '04', title: 'Pet Parent Coaching', text: 'We don’t just train your dog — our certified trainers coach YOU so obedience commands work seamlessly for your family.' },
  { n: '05', title: 'Certified KCI Behaviorists', text: 'Background-checked, experienced professional dog trainers with certified behavioral expertise across Delhi NCR.' },
  { n: '06', title: 'Visible Results From Week 1', text: 'Notice immediate improvements in calmness, attention, and basic command execution right from your first 3 sessions.' },
]

export const trainingCompare = [
  { feature: 'Learning Location', us: 'Your Home (Natural Triggers)', them: 'Unfamiliar Cage/Kennel' },
  { feature: 'Training Method', us: '100% Positive Reinforcement', them: 'Generic/Force & Isolation' },
  { feature: 'Owner Coaching', us: 'Full 1-on-1 Parent Hands-on Training', them: 'Zero Owner Involvement' },
  { feature: 'Behavior Retention', us: 'Permanent Lifelong Habit', them: 'Fades Quickly After Return' },
  { feature: 'Health & Safety', us: '100% Safe Home Environment', them: 'Risk of Ticks, Infections, Kennel Cough' },
  { feature: 'Pet Stress Level', us: 'Zero Stress & Happy Play', them: 'High Stress & Separation Anxiety' },
]

export const trainingReviews = [
  { quote: 'Bruno was constantly nipping and jumping on everyone... within 3 weeks of training, Bruno is walking calmly on leash and sitting when guests enter!', owner: 'Rohit & Ananya Verma', dog: 'Bruno (Golden Retriever, 5 Mo)', place: 'Gurugram, Phase 5' },
  { quote: 'I was worried Rocky was getting reactive on walks. The positive reinforcement methods... completely turned things around without any harsh punishment.', owner: 'Siddharth Mehta', dog: 'Rocky (German Shepherd, 1 Year)', place: 'South Delhi' },
  { quote: 'Best investment for our puppy! Potty training was sorted within 10 days... extremely patient and taught our entire family how to give commands correctly.', owner: 'Meenakshi Sundaram', dog: 'Coco (Indie Puppy, 3 Mo)', place: 'Noida, Sector 62' },
]

export const trainingAges = ['Puppy (2-6 Mo)', 'Basic (6+ Mo)', 'Advanced', 'Behavioral Fix']

// The source page lists these questions but publishes no answers. Answers below only restate facts from this page;
// anything not covered points to the team instead of inventing claims.
const call = 'Call +91 9211338489 and our team will guide you.'
export const trainingFaqs = [
  { q: 'What age should my dog be to start training?', a: 'Puppy Training covers young puppies (the demo form starts at 2–6 months), with Basic, Advanced and Behavioral Fix options for older dogs. Book the free demo and the trainer will recommend the right start for your dog.' },
  { q: 'What is the dog training cost?', a: `Programs are ${inr(8999)} (Puppy Training), ${inr(11999)} (Basic + Advanced Obedience), ${inr(14999)} (Behavioural Modification) and ${inr(16999)} (Protection / Guard Dog), each per 12 sessions. Your first demo is free.` },
  { q: 'How long are the sessions and how often?', a: 'Structured sessions run 3x weekly for 45 minutes each, with hands-on coaching for you.' },
  { q: 'Do you offer breed-specific dog training?', a: 'Every program is tailored to your dog’s age, breed energy level, temperament, and your household rules.' },
  { q: 'What training methods do you use?', a: '100% force-free positive reinforcement — treat, praise, and play motivation, with zero force, punishment, or choke collars.' },
  { q: 'What is included in the free dog training demo?', a: 'A Pet Behaviour Assessment (₹799), a Personalised Training Roadmap (₹1,499) and a Dog Trainability Assessment (₹499) — a total value of ₹2,797, free.' },
  { q: 'Can I choose my trainer?', a: call },
  { q: 'What is the ‘High Standard Dog Selection System’?', a: call },
  { q: 'How do I find the best dog trainer near me?', a: 'We train at your doorstep across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad and Lucknow, using certified KCI behaviorists. Book the free demo to meet your trainer.' },
  { q: 'Do you offer puppy obedience classes?', a: 'Yes — Puppy Training (12 sessions) covers house manners, name recognition, pee-poop training and first commands.' },
  { q: 'How can I train my dog at home?', a: 'Our trainers coach you hands-on during the sessions so commands work seamlessly for your family. Book the free demo to get started.' },
  { q: 'Do you help with separation anxiety and socialisation training?', a: 'Separation anxiety is part of our Behavioural Modification program (12 sessions). For socialisation needs, our trainer will advise at your free demo.' },
]
