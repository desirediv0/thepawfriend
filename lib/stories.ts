// Pet stories / reels. Everything here is SAMPLE content until real stories exist.
// To go live: set `videoUrl` (and optionally image/title/customer/location/review) and `isPlaceholder: false`.
export type PetStory = {
  id: number
  title: string
  customer: string
  location: string
  service: string
  review: string
  image: string
  imagePosition?: string
  videoUrl: string
  isPlaceholder: boolean
}

export const petStoriesCopy = {
  eyebrow: 'Real pet parent stories',
  heading: ['Loved by pets.', 'Trusted by pet parents.'],
  description: 'Real moments from pets and families who choose The Paws Friend for care that comes home.',
}

export const petStories: PetStory[] = [
  { id: 1, title: 'A calmer grooming day', customer: 'Priya', location: 'Delhi NCR', service: 'Grooming', review: 'He absolutely loved the experience.', image: '/photos/groom.jpg', imagePosition: '50% 45%', videoUrl: '', isPlaceholder: true },
  { id: 2, title: 'Care that comes home', customer: 'Rahul', location: 'Gurugram', service: 'Veterinary', review: 'So convenient and reassuring.', image: '/photos/vet.jpg', imagePosition: '58% 50%', videoUrl: '', isPlaceholder: true },
  { id: 3, title: 'Sit, stay, celebrate', customer: 'Ananya', location: 'Noida', service: 'Training', review: 'Learning felt like play for her.', image: '/photos/train.jpg', imagePosition: '50% 50%', videoUrl: '', isPlaceholder: true },
  { id: 4, title: 'Our everyday companion', customer: 'Meera', location: 'Lucknow', service: 'Home care', review: 'Care that fits around our day.', image: '/photos/hero.jpg', imagePosition: '50% 40%', videoUrl: '', isPlaceholder: true },
  { id: 5, title: 'A relaxed home visit', customer: 'Kabir', location: 'Ghaziabad', service: 'Veterinary', review: 'No travel, no stress for him.', image: '/photos/vet.jpg', imagePosition: '20% 60%', videoUrl: '', isPlaceholder: true },
  { id: 6, title: 'Family time, upgraded', customer: 'Sanya', location: 'Faridabad', service: 'Home care', review: 'Everyone in the house was calm.', image: '/photos/comfort.jpg', imagePosition: '30% 50%', videoUrl: '', isPlaceholder: true },
  { id: 7, title: 'Fresh coat, fresh confidence', customer: 'Dev', location: 'Greater Noida', service: 'Grooming', review: 'Gentle hands and great patience.', image: '/photos/groom.jpg', imagePosition: '30% 60%', videoUrl: '', isPlaceholder: true },
  { id: 8, title: 'Home is their happy place', customer: 'Isha', location: 'Delhi', service: 'Home care', review: 'He never left his favourite spot.', image: '/photos/cta.jpg', imagePosition: '60% 40%', videoUrl: '', isPlaceholder: true },
]
