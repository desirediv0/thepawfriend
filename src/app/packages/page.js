"use client";

import { useState } from "react";
import Link from "next/link";

/* ---------- DATA MODEL ---------- */

const BENEFITS_POOL = {
  coat: { emoji: "✨", label: "Healthy Coat" },
  skin: { emoji: "🌿", label: "Healthy Skin" },
  immunity: { emoji: "🛡️", label: "Strong Immunity" },
  behaviour: { emoji: "🧠", label: "Better Behaviour" },
  professional: { emoji: "⭐", label: "Professional Care" },
  doorstep: { emoji: "🏠", label: "Doorstep Convenience" },
  stressfree: { emoji: "🧘", label: "Stress-free Experience" },
  bond: { emoji: "❤️", label: "Stronger Bond With You" },
  safety: { emoji: "🔐", label: "Long-term Protection" },
};

const WHY_US = [
  { emoji: "🎓", label: "Certified Trainers" },
  { emoji: "✂️", label: "Professional Groomers" },
  { emoji: "🩺", label: "Qualified Veterinarians" },
  { emoji: "🏠", label: "Doorstep Service" },
  { emoji: "✨", label: "Premium Products" },
  { emoji: "💉", label: "US Standard Vaccines" },
  { emoji: "🚨", label: "Emergency Support" },
];

const FAQ_SHARED = [
  {
    q: "How do doorstep visits work?",
    a: "Our certified professionals arrive at your home fully equipped — clinical-grade kits for vets, and professional-grade tools for groomers and trainers — so your pet is cared for in a familiar, stress-free environment.",
  },
  {
    q: "Can I reschedule or pause a session?",
    a: "Yes. Any session in a package can be rescheduled up to 24 hours in advance at no extra cost. Yearly plans can also be paused for up to 30 days if you're travelling.",
  },
  {
    q: "What cities do you cover?",
    a: "We currently serve all of Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
  },
  {
    q: "Are the vaccines the same standard used abroad?",
    a: "Yes. We use US-based vaccination protocols, administered by our in-house veterinary team, with full booster tracking so you never miss a follow-up dose.",
  },
  {
    q: "What if there's an emergency during a package?",
    a: "All package holders get priority access to our emergency helpline. Our team will guide you or dispatch a vet based on urgency.",
  },
];

const TESTIMONIALS = {
  dog: [
    {
      name: "Ritika M.",
      pet: "Golden Retriever · Goldie",
      rating: 5,
      text: "The trainer came home every week and Goldie went from jumping on every guest to sitting calmly at the door. Genuinely worth it.",
    },
    {
      name: "Arjun S.",
      pet: "Labrador · Bruno",
      rating: 5,
      text: "We did the Ultra Premium bundle for Bruno's first year — grooming, shots, training, all scheduled for us. Zero mental load.",
    },
  ],
  cat: [
    {
      name: "Neha K.",
      pet: "Persian · Momo",
      rating: 5,
      text: "Momo hates the carrier, so a vet who comes home was a lifesaver. The grooming team is unbelievably gentle with her.",
    },
    {
      name: "Sameer P.",
      pet: "Indie Cat · Simba",
      rating: 5,
      text: "Booked the yearly bundle mostly for convenience but the vaccination tracking alone made it worth it — never missed a booster.",
    },
  ],
};

const CATEGORY_META = {
  packages: { emoji: "📦", label: "Packages" },
  grooming: { emoji: "✂️", label: "Grooming" },
  training: { emoji: "🎓", label: "Training" },
  vaccination: { emoji: "💉", label: "Vaccination" },
};

const PET_META = {
  dog: { emoji: "🐶", label: "Dog" },
  cat: { emoji: "🐱", label: "Cat" },
};

const PACKAGES = [
  /* DOG — PACKAGES (BUNDLES) */
  {
    id: "adult-ultra",
    pet: "dog",
    cat: "packages",
    image: "/dog_grooming_card.png",
    name: "Adult Dog — Ultra Premium Bundle",
    unit: "per year, all-inclusive",
    price: "₹20,999",
    popular: true,
    summary:
      "Our most complete adult-dog plan — training, grooming and vaccination bundled for the whole year.",
    overview: {
      ageFit: "Adult dogs, 1–7 years",
      breedFit: "Any breed, any size",
      lifestyle:
        "Best for owners who want one plan that covers the full year without booking each service separately.",
      healthNote:
        "Combines behavioural training with a full grooming cycle and complete vaccination coverage.",
    },
    includes: [
      {
        group: "Training",
        items: [
          "Basic + Advanced Obedience Training — 12 sessions",
          "Commands: Sit, Stay, Come, Heel, Fetch, Crate & more",
        ],
      },
      {
        group: "Grooming",
        items: [
          "Full Grooming — 8 sessions across the year",
          "Bathing, trimming, nail clipping, dematting & de-shedding",
          "Ear, eye, paw & dental cleaning with perfume finish",
        ],
      },
      {
        group: "Vaccination",
        items: [
          "Adult Dog Vaccination Package with Kennel Cough",
          "Anti Rabies, DHPPIL, Canine Corona & Deworming",
          "US-based vaccination, administered by our vet team",
        ],
      },
    ],
    benefits: ["coat", "immunity", "behaviour", "doorstep", "professional"],
    timeline: [
      {
        label: "Month 1",
        detail: "Onboarding visit + first 3 training sessions + Grooming #1",
      },
      {
        label: "Month 3",
        detail: "Vaccination booster round + Grooming #2–3",
      },
      {
        label: "Month 6",
        detail: "Mid-year health check + Grooming #4–5 + refresher training",
      },
      { label: "Month 9", detail: "Grooming #6–7 + behaviour check-in" },
      {
        label: "Month 12",
        detail: "Final grooming session + annual review & renewal",
      },
    ],
    savings: {
      exact: true,
      rows: [
        { label: "Basic + Advanced Obedience Training", cost: 11999 },
        { label: "Full Grooming × 8 sessions", cost: 14392 },
        { label: "Adult Dog Vaccination Package", cost: 3999 },
      ],
      individualTotal: 30390,
      packagePrice: 20999,
    },
  },
  {
    id: "adult-premium",
    pet: "dog",
    cat: "packages",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=500&fit=crop&q=80",
    name: "Adult Dog — Premium Bundle",
    unit: "per year, all-inclusive",
    price: "₹18,999",
    summary:
      "Core training plus a full year of grooming and vaccination — a lighter alternative to Ultra Premium.",
    overview: {
      ageFit: "Adult dogs, 1–7 years",
      breedFit: "Any breed, any size",
      lifestyle:
        "For owners who want the essentials covered without the advanced/protection training tier.",
      healthNote:
        "Basic obedience keeps house manners in check while grooming and vaccination run on schedule.",
    },
    includes: [
      {
        group: "Training",
        items: [
          "Basic Obedience Training",
          "House etiquettes, socialization & core commands",
        ],
      },
      {
        group: "Grooming",
        items: [
          "Full Grooming — 8 sessions across the year",
          "Bathing, trimming, nail clipping, dematting & de-shedding",
          "Ear, eye, paw & dental cleaning with perfume finish",
        ],
      },
      {
        group: "Vaccination",
        items: [
          "Adult Dog Vaccination Package with Kennel Cough",
          "Anti Rabies, DHPPIL, Canine Corona & Deworming",
          "US-based vaccination, administered by our vet team",
        ],
      },
    ],
    benefits: ["coat", "immunity", "doorstep", "professional"],
    timeline: [
      {
        label: "Month 1",
        detail: "Onboarding visit + basic training sessions + Grooming #1",
      },
      {
        label: "Month 4",
        detail: "Vaccination booster round + Grooming #2–3",
      },
      { label: "Month 8", detail: "Grooming #4–6 + health check" },
      {
        label: "Month 12",
        detail: "Grooming #7–8 + annual review & renewal",
      },
    ],
    savings: {
      exact: false,
      note: "Grooming (8 sessions) and Vaccination alone cost ₹18,391 individually — and Basic Obedience Training is bundled in at no extra charge.",
      rows: [
        { label: "Full Grooming × 8 sessions", cost: 14392 },
        { label: "Adult Dog Vaccination Package", cost: 3999 },
      ],
      individualTotal: 18391,
      packagePrice: 18999,
    },
  },
  {
    id: "puppy-ultra",
    pet: "dog",
    cat: "packages",
    image: "/puppy_care_card.png",
    name: "Puppy — Ultra Premium Bundle",
    unit: "per 3-month plan, all-inclusive",
    price: "₹36,999",
    summary:
      "The complete first-90-days plan — full training, grooming and every puppy vaccine on schedule.",
    overview: {
      ageFit: "Puppies, 6 weeks – 6 months",
      breedFit: "Any breed",
      lifestyle:
        "For new puppy parents who want a structured, worry-free first 3 months.",
      healthNote:
        "Covers the full 8-shot puppy vaccination schedule alongside foundational obedience training.",
    },
    includes: [
      {
        group: "Training",
        items: [
          "3-Month Basic + Advanced Obedience Training",
          "Pee-poop, socialization, leash walking & full command set",
        ],
      },
      {
        group: "Grooming",
        items: [
          "Full Grooming — 6 sessions across the plan",
          "Bathing, trimming, nail clipping, dematting & de-shedding",
        ],
      },
      {
        group: "Vaccination",
        items: [
          "Complete Puppy Vaccination Package — 8 shots",
          "Puppy DP, DHPPIL, Canine Corona, Anti Rabies, Kennel Cough & boosters",
          "US-based vaccination, administered by our vet team",
        ],
      },
    ],
    benefits: ["immunity", "behaviour", "bond", "doorstep", "professional"],
    timeline: [
      {
        label: "Week 1–2",
        detail: "Puppy DP + training begins (pee-poop, name recognition)",
      },
      {
        label: "Week 5–8",
        detail: "DHPPIL + Canine Corona + boosters + Grooming #1–2",
      },
      {
        label: "Week 9–12",
        detail: "Anti Rabies + Kennel Cough + Grooming #3–4 + advanced commands",
      },
      {
        label: "Month 3",
        detail: "Final boosters + Grooming #5–6 + graduation check-in",
      },
    ],
    savings: {
      exact: false,
      note: "Bundled pricing across 3 months of training, 6 grooming sessions and the full 8-shot vaccine schedule — priced lower than booking each separately.",
      rows: [],
      individualTotal: null,
      packagePrice: 36999,
    },
  },
  {
    id: "puppy-premium",
    pet: "dog",
    cat: "packages",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=500&fit=crop&q=80",
    name: "Puppy — Premium Bundle",
    unit: "per 1-month plan, all-inclusive",
    price: "₹20,999",
    summary:
      "A focused first-month plan covering essential training, grooming and the full vaccine schedule.",
    overview: {
      ageFit: "Puppies, 6 weeks – 6 months",
      breedFit: "Any breed",
      lifestyle:
        "For puppy parents who want essentials covered in month one, without the 3-month training commitment.",
      healthNote:
        "Still includes the complete 8-shot puppy vaccination schedule for full protection.",
    },
    includes: [
      {
        group: "Training",
        items: [
          "1-Month Basic Obedience Training",
          "Pee-poop training, name recognition & house etiquettes",
        ],
      },
      {
        group: "Grooming",
        items: [
          "Full Grooming — 6 sessions across the plan",
          "Bathing, trimming, nail clipping, dematting & de-shedding",
        ],
      },
      {
        group: "Vaccination",
        items: [
          "Complete Puppy Vaccination Package — 8 shots",
          "Puppy DP, DHPPIL, Canine Corona, Anti Rabies, Kennel Cough & boosters",
          "US-based vaccination, administered by our vet team",
        ],
      },
    ],
    benefits: ["immunity", "bond", "doorstep", "professional"],
    timeline: [
      { label: "Week 1", detail: "Puppy DP + training begins" },
      {
        label: "Week 2–3",
        detail: "DHPPIL + Canine Corona + boosters + Grooming #1–3",
      },
      { label: "Week 4", detail: "Anti Rabies + Kennel Cough + Grooming #4–6" },
    ],
    savings: {
      exact: false,
      note: "Bundled pricing across 1 month of training, 6 grooming sessions and the full 8-shot vaccine schedule.",
      rows: [],
      individualTotal: null,
      packagePrice: 20999,
    },
  },

  /* CAT — PACKAGES (BUNDLE) */
  {
    id: "cat-yearly",
    pet: "cat",
    cat: "packages",
    image: "/cat_grooming_card.png",
    name: "Cat Yearly Bundle",
    unit: "per year, all-inclusive",
    price: "₹7,799",
    summary:
      "A full year of grooming and vaccination for your cat — bundled and scheduled for you.",
    overview: {
      ageFit: "Adult cats, 1+ years",
      breedFit: "Any breed",
      lifestyle:
        "For cat parents who want grooming and vaccination handled without separate bookings.",
      healthNote: "Keeps coat, skin and core immunity covered across the full year.",
    },
    includes: [
      {
        group: "Grooming",
        items: [
          "Full Grooming — 6 sessions across the year",
          "Bathing, trimming, nail clipping, dematting & de-shedding",
          "Ear, eye, paw & dental cleaning with perfume finish",
        ],
      },
      {
        group: "Vaccination",
        items: [
          "Cat Vaccination Package",
          "Tricat, Anti Rabies & Deworming",
          "US-based vaccination, administered by our vet team",
        ],
      },
    ],
    benefits: ["coat", "skin", "immunity", "doorstep", "stressfree"],
    timeline: [
      {
        label: "Month 1",
        detail: "Onboarding visit + Tricat & Anti Rabies + Grooming #1",
      },
      { label: "Month 4", detail: "Grooming #2–3" },
      { label: "Month 8", detail: "Grooming #4–5 + booster check" },
      {
        label: "Month 12",
        detail: "Grooming #6 + annual review & renewal",
      },
    ],
    savings: {
      exact: true,
      rows: [
        { label: "Full Grooming × 6 sessions", cost: 10794 },
        { label: "Cat Vaccination Package", cost: 1999 },
      ],
      individualTotal: 12793,
      packagePrice: 7799,
    },
  },

  /* TRAINING (DOG ONLY) */
  {
    id: "puppy-training",
    pet: "dog",
    cat: "training",
    image: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=800&h=500&fit=crop&q=80",
    name: "Puppy Training",
    unit: "per 12 sessions",
    price: "₹8,999",
    summary:
      "Foundational training for young puppies — house manners, name recognition and first commands.",
    overview: {
      ageFit: "Puppies, 2–6 months",
      breedFit: "Any breed",
      lifestyle: "Ideal first training programme for a new puppy in the home.",
      healthNote: "Builds early habits that prevent bigger behavioural issues later.",
    },
    includes: [
      {
        group: null,
        items: [
          "Pee-Poop Training",
          "Name Recognition",
          "House Etiquettes",
          "Basic Socialization with Pets & Humans",
          "Puppy Biting Correction",
          "Leash Walking",
          "Commands: Sit, Stay, Shake, Hand, Come, Go, Yes-No",
        ],
      },
    ],
    benefits: ["behaviour", "bond", "professional"],
    timeline: null,
    savings: null,
  },
  {
    id: "basic-advanced",
    pet: "dog",
    cat: "training",
    image: "/dog_training_card.png",
    name: "Basic + Advanced Obedience Training",
    unit: "per 12 sessions",
    price: "₹11,999",
    summary:
      "A complete obedience curriculum from house etiquettes through advanced commands and guarding position.",
    overview: {
      ageFit: "Dogs 6 months and older",
      breedFit: "Any breed",
      lifestyle:
        "For owners who want full-spectrum obedience — everyday manners plus advanced commands.",
      healthNote:
        "Structured training reduces stress-driven behaviours like excessive barking and jumping.",
    },
    includes: [
      {
        group: null,
        items: [
          "House Etiquettes",
          "Crate Training",
          "Pee-Poop Training",
          "Basic Socialization with Pets & Humans",
          "Bed & Car Time Training: Go to bed",
          "Fetch Article / Newspaper / Ball",
          "Heel Walking: Turn, Slow / Fast, Walk, Stay",
          "Commands: Lie Down, Drop, Eat, Speak, Sit, Stand, Come, Leave, Go, Get in, Roll Over, Crawl",
          "Obedience: Fetch, Jump, Don't jump / pull / bark / eat, place recognition, Open / Close Gate",
          "Greetings: Shake hand, High five, Namaste",
          "Guarding Position: Hold bark, Alert, Attack, Stop",
        ],
      },
    ],
    benefits: ["behaviour", "bond", "professional"],
    timeline: null,
    savings: null,
  },
  {
    id: "behavioural-mod",
    pet: "dog",
    cat: "training",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=500&fit=crop&q=80",
    name: "Behavioural Modification",
    unit: "per 12 sessions",
    price: "₹14,999",
    summary:
      "Targeted correction for anxiety, aggression, and other behavioural issues.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For dogs showing separation anxiety, fear, aggression or hyperactivity.",
      healthNote:
        "Reduces chronic stress behaviours that affect both the dog's wellbeing and home life.",
    },
    includes: [
      {
        group: null,
        items: [
          "Separation Anxiety",
          "Fussy Eater",
          "Fear / Anxiety / Stress Correction",
          "Excessive Barking / Growling / Biting Issue",
          "Aggressive Behaviour Correction",
          "Leash Pulling",
          "Hyper Active",
          "Jumping",
        ],
      },
    ],
    benefits: ["behaviour", "stressfree", "professional"],
    timeline: null,
    savings: null,
  },
  {
    id: "protection-guard",
    pet: "dog",
    cat: "training",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=500&fit=crop&q=80",
    name: "Protection / Guard Dog Training",
    unit: "per 12 sessions",
    price: "₹16,999",
    summary:
      "Advanced protection and property-guarding training for capable, confident dogs.",
    overview: {
      ageFit: "Dogs 1 year and older",
      breedFit: "Working / guarding breeds recommended",
      lifestyle:
        "For owners who want a dog trained for property and personal protection.",
      healthNote:
        "Requires a confident temperament; our trainers assess suitability before starting.",
    },
    includes: [
      {
        group: null,
        items: [
          "Article Protection",
          "Property Protection",
          "Sniff & Search",
          "Personal Protection",
          "Agility",
          "Herding",
        ],
      },
    ],
    benefits: ["behaviour", "professional", "safety"],
    timeline: null,
    savings: null,
  },

  /* GROOMING (DOG & CAT) */
  {
    id: "full-grooming",
    pet: "both",
    cat: "grooming",
    image: "/service_full_grooming.png",
    name: "Full Grooming",
    unit: "per session",
    price: "₹1,799",
    popular: true,
    summary:
      "Our most complete grooming session, head to tail — for dogs and cats.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For pet parents who want a complete spa-level groom in one visit.",
      healthNote:
        "Regular full grooming prevents matting, skin irritation and nail-related discomfort.",
    },
    includes: [
      {
        group: null,
        items: [
          "Bathing",
          "Trimming & Haircut",
          "Conditioning",
          "Dematting / Deshedding",
          "Nail Clipping",
          "Combing / Brushing",
          "Dental Cleaning",
          "Paw Cleaning",
          "Ear Cleaning",
          "Eye Cleaning",
          "Hairstyling",
          "Nose Cleaning",
          "Sanitary Cleaning",
          "Body Massage",
          "Paw Massage",
          "Application of Perfume",
        ],
      },
    ],
    benefits: ["coat", "skin", "stressfree", "professional"],
    timeline: null,
    savings: null,
  },
  {
    id: "mini-grooming",
    pet: "both",
    cat: "grooming",
    image: "/service_mini_grooming.png",
    name: "Mini Grooming",
    unit: "per session",
    price: "₹1,399",
    summary: "A lighter grooming touch-up between full sessions.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For maintenance between Full Grooming sessions, or pets who prefer a shorter visit.",
      healthNote:
        "Keeps coat and nails maintained without a full bath-and-style session.",
    },
    includes: [
      {
        group: null,
        items: [
          "Bathing Or Trimming Or Haircut",
          "Dry Bath Option Available",
          "Paw Cleaning",
          "Dental Cleaning",
          "Combing / Brushing",
          "Conditioning",
          "Nail Clipping",
          "Hairstyling",
          "Application of Perfume",
        ],
      },
    ],
    benefits: ["coat", "stressfree"],
    timeline: null,
    savings: null,
  },
  {
    id: "bathing",
    pet: "both",
    cat: "grooming",
    image: "/service_bathing.png",
    name: "Bathing",
    unit: "per session",
    price: "₹899",
    summary: "A thorough shampoo bath and dry — quick and fuss-free.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For pet parents who just need a clean, fresh-smelling pet without a full groom.",
      healthNote: "Regular bathing supports skin and coat hygiene.",
    },
    includes: [
      {
        group: null,
        items: [
          "Shampooing",
          "Dry Bath Option Available",
          "Nail Clipping",
          "Brushing / Combing",
          "Blow Drying",
          "Application of Perfume",
        ],
      },
    ],
    benefits: ["skin", "stressfree"],
    timeline: null,
    savings: null,
  },
  {
    id: "trimming",
    pet: "both",
    cat: "grooming",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=500&fit=crop&q=80",
    name: "Trimming",
    unit: "per session",
    price: "₹899",
    summary: "Haircut and trim focused visit for coat upkeep.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle: "For pets who need a coat trim without a full bath.",
      healthNote: "Prevents overgrown coats from matting or trapping dirt.",
    },
    includes: [
      {
        group: null,
        items: [
          "Trimming",
          "Haircut",
          "Brushing / Combing",
          "Nail Clipping",
          "Application of Perfume",
        ],
      },
    ],
    benefits: ["coat"],
    timeline: null,
    savings: null,
  },
  {
    id: "tick-flea",
    pet: "both",
    cat: "grooming",
    image: "/service_tick_flea.png",
    name: "Tick and Flea Bath",
    unit: "per session",
    price: "₹899",
    summary:
      "A specialised treatment bath to remove and prevent ticks and fleas.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For pets with an active tick/flea issue, or as seasonal prevention.",
      healthNote:
        "Soothes irritated skin while treating the underlying infestation.",
    },
    includes: [
      {
        group: null,
        items: [
          "Specialized shampoo treatment for tick and flea removal",
          "Thorough inspection and removal of ticks and fleas",
          "Gentle bathing to soothe irritated skin",
          "Additional brushing / combing to remove any remaining pests",
          "Recommendation for ongoing tick and flea prevention measures",
        ],
      },
    ],
    benefits: ["skin", "stressfree"],
    timeline: null,
    savings: null,
  },

  /* VACCINATION (DOG) */
  {
    id: "puppy-vacc",
    pet: "dog",
    cat: "vaccination",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=500&fit=crop&q=80",
    name: "Puppy Vaccination Package",
    unit: "one-time package",
    price: "₹7,399",
    summary:
      "The complete 8-shot puppy vaccination schedule, fully tracked from day 35 onward.",
    overview: {
      ageFit: "Puppies, 35 days – 5 months",
      breedFit: "Any breed",
      lifestyle:
        "Essential for every new puppy — protects against major infectious diseases early.",
      healthNote:
        "Follows a US-based protocol with booster doses timed precisely.",
    },
    includes: [
      {
        group: null,
        items: [
          "35th day — Puppy DP",
          "50th day — DHPPIL",
          "60th day — Canine Corona",
          "71st day — DHPPIL (booster)",
          "90th day — Canine Corona (booster)",
          "90th day — Anti Rabies",
          "120th day — Anti Rabies (booster)",
          "120th day — Kennel Cough",
          "Deworming",
        ],
      },
    ],
    benefits: ["immunity", "safety", "professional"],
    timeline: [
      { label: "Day 35", detail: "Puppy DP" },
      { label: "Day 50", detail: "DHPPIL" },
      { label: "Day 60", detail: "Canine Corona" },
      { label: "Day 71", detail: "DHPPIL booster" },
      { label: "Day 90", detail: "Canine Corona booster + Anti Rabies" },
      { label: "Day 120", detail: "Anti Rabies booster + Kennel Cough" },
    ],
    savings: null,
  },
  {
    id: "adult-vacc",
    pet: "dog",
    cat: "vaccination",
    image: "/service_vaccination.png",
    name: "Adult Dog Vaccination Package",
    unit: "one-time package",
    price: "₹3,999",
    summary:
      "Annual core vaccination coverage for adult dogs, including Kennel Cough.",
    overview: {
      ageFit: "Adult dogs, 1+ years",
      breedFit: "Any breed",
      lifestyle: "For annual re-vaccination and continued protection.",
      healthNote:
        "Covers rabies, DHPPIL and kennel cough in a single scheduled visit.",
    },
    includes: [
      {
        group: null,
        items: [
          "Anti Rabies",
          "DHPPIL",
          "Canine Corona",
          "Kennel Cough",
          "Deworming",
        ],
      },
    ],
    benefits: ["immunity", "safety", "professional"],
    timeline: null,
    savings: null,
  },
  {
    id: "veterinary",
    pet: "dog",
    cat: "vaccination",
    image: "/service_vet_consultation.png",
    name: "Veterinary Services (Individual)",
    unit: "priced per service",
    price: "From ₹299",
    summary:
      "Standalone veterinary services — rapid tests, consultations and individual vaccines.",
    overview: {
      ageFit: "Any age",
      breedFit: "Any breed",
      lifestyle:
        "For one-off veterinary needs outside of a package — tests, consultations or a single vaccine.",
      healthNote:
        "Backed by our team of vet surgeons across 5 clinics in Delhi NCR.",
    },
    includes: [
      {
        group: null,
        items: [
          "Rapid Kit Test – Parvo — ₹1,199",
          "Rapid Kit Test – Distemper — ₹1,999",
          "Puppy DP — ₹1,199",
          "Anti Rabies — ₹999",
          "DHPPIL (9-in-1) — ₹1,199",
          "Kennel Cough — ₹1,499",
          "Consultation – Puppy — ₹299",
          "Consultation – Adult — ₹499",
          "Tricat — ₹1,199",
        ],
      },
    ],
    benefits: ["professional", "doorstep"],
    timeline: null,
    savings: null,
  },

  /* VACCINATION (CAT) */
  {
    id: "kitten-vacc",
    pet: "cat",
    cat: "vaccination",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=500&fit=crop&q=80",
    name: "Kitten Vaccination Package",
    unit: "one-time package",
    price: "₹4,999",
    summary:
      "The complete kitten vaccination schedule from day 60 through booster doses.",
    overview: {
      ageFit: "Kittens, 60 days – 5 months",
      breedFit: "Any breed",
      lifestyle: "Essential first vaccination schedule for a new kitten.",
      healthNote: "Includes Tricat and Anti Rabies with properly timed boosters.",
    },
    includes: [
      {
        group: null,
        items: [
          "60th day — Tricat",
          "90th day — Tricat (booster)",
          "95th day — Anti Rabies",
          "125th day — Anti Rabies (booster)",
          "Deworming",
        ],
      },
    ],
    benefits: ["immunity", "safety", "professional"],
    timeline: [
      { label: "Day 60", detail: "Tricat" },
      { label: "Day 90", detail: "Tricat booster" },
      { label: "Day 95", detail: "Anti Rabies" },
      { label: "Day 125", detail: "Anti Rabies booster" },
    ],
    savings: null,
  },
  {
    id: "cat-vacc",
    pet: "cat",
    cat: "vaccination",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=500&fit=crop&q=80",
    name: "Cat Vaccination Package",
    unit: "one-time package",
    price: "₹1,999",
    summary: "Annual core vaccination coverage for adult cats.",
    overview: {
      ageFit: "Adult cats, 1+ years",
      breedFit: "Any breed",
      lifestyle: "For annual re-vaccination and continued protection.",
      healthNote: "Covers Tricat and Anti Rabies in one scheduled visit.",
    },
    includes: [{ group: null, items: ["Tricat", "Anti Rabies", "Deworming"] }],
    benefits: ["immunity", "safety", "professional"],
    timeline: null,
    savings: null,
  },
];

function fmtINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

/* ---------- SUB-COMPONENTS ---------- */

function BenefitChip({ benefitKey }) {
  const b = BENEFITS_POOL[benefitKey];
  if (!b) return null;
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#F6D9BC]/40 text-[#3B322C] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#E7D9C6]">
      <span className="text-sm">{b.emoji}</span>
      {b.label}
    </span>
  );
}

function SavingsBlock({ savings }) {
  if (!savings) return null;
  const { exact, rows, individualTotal, packagePrice, note } = savings;

  if (exact && individualTotal) {
    const save = individualTotal - packagePrice;
    const pct = Math.round((save / individualTotal) * 100);
    return (
      <div className="pt-6 border-t border-[#E7D9C6]">
        <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
          <span className="text-[#D2571E]">💰</span>
          Your Savings
        </h3>
        <div className="bg-white border border-[#E7D9C6] rounded-2xl p-4 sm:p-6 space-y-3 shadow-2xs">
          {rows.map((r, i) => (
            <div key={i} className="flex justify-between text-xs sm:text-sm text-[#6B5F55]">
              <span>{r.label}</span>
              <span className="font-semibold">{fmtINR(r.cost)}</span>
            </div>
          ))}
          <div className="pt-2 border-t border-dashed border-[#E7D9C6] flex justify-between text-sm font-bold text-[#3B322C]">
            <span>Individual Total</span>
            <span>{fmtINR(individualTotal)}</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-[#3B322C]">
            <span>Bundle Price</span>
            <span className="text-[#D2571E]">{fmtINR(packagePrice)}</span>
          </div>
          <div className="bg-[#E7F0EA] text-[#4F7A5E] rounded-xl p-3.5 font-bold text-sm sm:text-base flex items-center justify-between mt-3">
            <span>You Save</span>
            <span>
              {fmtINR(save)} ({pct}%)
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">💰</span>
        Bundle Value
      </h3>
      <div className="bg-white border border-[#E7D9C6] rounded-2xl p-4 sm:p-6 space-y-3 shadow-2xs">
        {rows.length > 0 &&
          rows.map((r, i) => (
            <div key={i} className="flex justify-between text-xs sm:text-sm text-[#6B5F55]">
              <span>{r.label}</span>
              <span className="font-semibold">{fmtINR(r.cost)}</span>
            </div>
          ))}
        <p className="text-xs sm:text-sm text-[#6B5F55] leading-relaxed mt-2">{note}</p>
      </div>
    </div>
  );
}

function TimelineBlock({ timeline }) {
  if (!timeline) return null;
  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">📅</span>
        Your Service Journey
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {timeline.map((t, i) => (
          <div key={i} className="bg-white border border-[#E7D9C6] rounded-xl p-3.5 space-y-1 relative shadow-2xs">
            <span className="inline-block bg-[#FBEBDE] text-[#B54717] text-xs font-bold px-2.5 py-0.5 rounded-md">
              {t.label}
            </span>
            <p className="text-xs sm:text-sm text-[#6B5F55] leading-snug">{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncludesBlock({ includes }) {
  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">📋</span>
        Everything Included
      </h3>
      <div className="space-y-4">
        {includes.map((group, gi) => (
          <div key={gi} className="space-y-2">
            {group.group && (
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#B54717]">
                {group.group}
              </h4>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className="flex items-start gap-2.5 bg-white border border-[#E7D9C6] rounded-xl p-3 text-xs sm:text-sm text-[#3B322C] shadow-2xs"
                >
                  <span className="text-[#4F7A5E] font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewBlock({ overview }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2">
        <span className="text-[#D2571E]">ℹ️</span>
        Package Overview
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white border border-[#E7D9C6] rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#B54717] block">
            Ideal Age
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#3B322C] block">
            {overview.ageFit}
          </span>
        </div>
        <div className="bg-white border border-[#E7D9C6] rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#B54717] block">
            Suitable Breeds
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#3B322C] block">
            {overview.breedFit}
          </span>
        </div>
        <div className="bg-white border border-[#E7D9C6] rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#B54717] block">
            Best For
          </span>
          <span className="text-xs sm:text-sm text-[#6B5F55] block">
            {overview.lifestyle}
          </span>
        </div>
        <div className="bg-white border border-[#E7D9C6] rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#B54717] block">
            Health Benefit
          </span>
          <span className="text-xs sm:text-sm text-[#6B5F55] block">
            {overview.healthNote}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialBlock({ pet }) {
  const list = TESTIMONIALS[pet === "both" ? "dog" : pet] || TESTIMONIALS.dog;
  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">💬</span>
        What Pet Parents Say
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {list.map((t, i) => (
          <div key={i} className="bg-white border border-[#E7D9C6] rounded-2xl p-4 sm:p-5 space-y-2 shadow-2xs">
            <div className="text-amber-400 text-sm tracking-widest font-bold">
              {"★".repeat(t.rating)}
            </div>
            <p className="text-xs sm:text-sm text-[#3B322C] leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="text-xs font-semibold text-[#6B5F55] pt-1">
              {t.name} <span className="font-normal opacity-75">· {t.pet}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqBlock() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">❓</span>
        Frequently Asked Questions
      </h3>
      <div className="divide-y divide-[#E7D9C6] border-y border-[#E7D9C6]">
        {FAQ_SHARED.map((f, i) => (
          <div key={i} className="py-3">
            <button
              className="w-full text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#3B322C] hover:text-[#D2571E] transition-colors py-1"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span>{f.q}</span>
              <span
                className={`text-xs text-[#D2571E] font-bold transition-transform duration-200 ${
                  openIdx === i ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIdx === i && (
              <p className="text-xs sm:text-sm text-[#6B5F55] leading-relaxed pt-2 pb-1">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyUsBlock() {
  return (
    <div className="pt-6 border-t border-[#E7D9C6]">
      <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-4">
        <span className="text-[#D2571E]">🌟</span>
        Why Choose The Paws Friend?
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {WHY_US.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#E7D9C6] rounded-xl p-3.5 flex flex-col items-center justify-center gap-2 shadow-2xs"
          >
            <div className="w-10 h-10 rounded-full bg-[#FBEBDE] text-lg flex items-center justify-center">
              <span>{item.emoji}</span>
            </div>
            <span className="text-xs font-bold text-[#3B322C] leading-snug">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- MAIN PACKAGES PAGE ---------- */

export default function PackagesPage() {
  const [pet, setPet] = useState("dog");
  const [category, setCategory] = useState("packages");
  const [activeModalPkg, setActiveModalPkg] = useState(null);

  // Filter packages based on active pet & category
  const filteredPackages = PACKAGES.filter(
    (p) => (p.pet === pet || p.pet === "both") && p.cat === category
  );

  const handleWhatsAppBooking = (pkg) => {
    const message = encodeURIComponent(
      `Hello! I want to book the ${pkg.name} (${pkg.price}) for my pet.`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#3B322C] font-sans pb-28 sm:pb-16 antialiased">
      {/* SECTION HEADER */}
      <header className="max-w-5xl mx-auto px-4 pt-10 sm:pt-16 pb-4 text-center">
        <span className="inline-flex items-center gap-1.5 bg-[#FBEBDE] text-[#B54717] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-[#F6D9BC]">
          <span>🛡️</span>
          Comprehensive Protection Plans
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3B322C] leading-tight tracking-tight mb-3">
          Care Packages, <span className="text-[#D2571E]">picked for your pet</span>
        </h1>
        <p className="text-[#6B5F55] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
          Select your pet and a category to explore complete doorstep protection plans, grooming, training, and vaccination schedules.
        </p>

        {/* PET SELECTOR */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 mb-6 px-2">
          {Object.entries(PET_META).map(([key, meta]) => {
            const isActive = pet === key;
            return (
              <button
                key={key}
                onClick={() => setPet(key)}
                className={`flex items-center justify-center gap-2.5 px-7 sm:px-10 py-3 sm:py-3.5 rounded-full font-black text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? "bg-[#D2571E] text-white shadow-lg shadow-[#D2571E]/30 scale-105"
                    : "bg-white text-[#3B322C] border-2 border-[#E7D9C6] hover:border-[#D2571E] hover:text-[#D2571E] shadow-xs"
                }`}
              >
                <span className="text-xl sm:text-2xl">{meta.emoji}</span>
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>

        {/* CATEGORY TABS */}
        <div className="w-full max-w-2xl mx-auto my-6 px-4">
          <div className="grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-2.5 sm:gap-3">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const isActive = category === key;
              return (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className={`flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 border-2 ${
                    isActive
                      ? "bg-[#D2571E] text-white border-[#D2571E] shadow-md shadow-[#D2571E]/20 scale-[1.02]"
                      : "bg-white text-[#3B322C] border-[#E7D9C6] hover:border-[#D2571E] hover:text-[#D2571E] shadow-2xs"
                  }`}
                >
                  <span className="text-lg sm:text-xl">{meta.emoji}</span>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* CARDS GRID */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-[#E7D9C6] max-w-md mx-auto my-8">
            <span className="text-4xl mb-2 block">🐾</span>
            <h3 className="text-lg font-bold text-[#3B322C] mb-1">
              No packages found
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5F55] mb-4">
              We couldn't find any packages matching this category selection.
            </p>
            <button
              onClick={() => {
                setPet("dog");
                setCategory("packages");
              }}
              className="bg-[#4F7A5E] hover:bg-[#3f624b] text-white px-5 py-2 rounded-full font-semibold text-xs transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl md:rounded-3xl border border-[#E7D9C6] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                {/* Card Top Image Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#FBEBDE]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {pkg.pet === "both" ? "Dog & Cat" : pkg.pet}
                    </span>
                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-400 text-amber-950 shadow-md">
                        <span>⭐</span>
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="text-[11px] font-bold bg-white/25 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/20">
                      Official Package
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title & Summary */}
                    <h2 className="text-xl sm:text-2xl font-black text-[#3B322C] leading-snug group-hover:text-[#D2571E] transition-colors">
                      {pkg.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B5F55] leading-relaxed mt-2 line-clamp-3">
                      {pkg.summary}
                    </p>

                    {/* Highlighted Inclusions Snippet */}
                    {pkg.includes && pkg.includes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[#E7D9C6]/60 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#B54717] block">
                          Includes:
                        </span>
                        {pkg.includes[0].items.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#3B322C]">
                            <span className="text-[#4F7A5E] font-bold text-xs shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-[#E7D9C6]/60 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black text-[#D2571E] block">
                          {pkg.price}
                        </span>
                        <span className="text-[11px] text-[#6B5F55] font-medium">
                          {pkg.unit}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <button
                        onClick={() => handleWhatsAppBooking(pkg)}
                        className="w-full bg-[#D2571E] hover:bg-[#B54717] text-white py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <span>📅</span>
                        Book Now
                      </button>
                      <button
                        onClick={() => setActiveModalPkg(pkg)}
                        className="w-full bg-white border border-[#E7D9C6] hover:border-[#D2571E] text-[#3B322C] hover:text-[#D2571E] py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>ℹ️</span>
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM SECTION CTA */}
        <section className="bg-gradient-to-br from-[#D2571E] to-[#B54717] rounded-3xl p-6 sm:p-10 md:p-12 text-center text-white my-12 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Ready to give your pet the best care?
          </h2>
          <p className="text-white/90 text-xs sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Book a doorstep visit today — certified vet & grooming care delivered straight to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(
                    "Hello! I am looking to book a pet care package."
                  )}`,
                  "_blank"
                )
              }
              className="w-full sm:w-auto bg-white text-[#D2571E] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>💬</span>
              WhatsApp Us
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto bg-transparent border-2 border-white/60 hover:border-white text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>🏠</span>
              Return Home
            </Link>
          </div>
        </section>
      </main>

      {/* DETAIL MODAL */}
      {activeModalPkg && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalPkg(null)}
        >
          <div
            className="bg-[#FBF6EE] w-full max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Banner Image */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#1a0905]">
              <img
                src={activeModalPkg.image}
                alt={activeModalPkg.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0905] via-[#1a0905]/40 to-transparent" />
              
              <button
                onClick={() => setActiveModalPkg(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors font-bold z-20 border border-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="bg-[#D2571E] text-white px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {activeModalPkg.pet === "both" ? "Dog & Cat" : activeModalPkg.pet}
                  </span>
                  {activeModalPkg.popular && (
                    <span className="bg-amber-400 text-amber-950 font-bold px-3 py-0.5 rounded-full text-[11px] uppercase tracking-wider">
                      Popular Package
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black leading-snug drop-shadow-md">
                  {activeModalPkg.name}
                </h2>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-amber-300">
                    {activeModalPkg.price}
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 font-medium">
                    {activeModalPkg.unit}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm sm:text-base text-[#6B5F55] leading-relaxed">
                {activeModalPkg.summary}
              </p>

              {/* Overview */}
              {activeModalPkg.overview && (
                <OverviewBlock overview={activeModalPkg.overview} />
              )}

              {/* Inclusions */}
              {activeModalPkg.includes && (
                <IncludesBlock includes={activeModalPkg.includes} />
              )}

              {/* Timeline */}
              {activeModalPkg.timeline && (
                <TimelineBlock timeline={activeModalPkg.timeline} />
              )}

              {/* Savings */}
              {activeModalPkg.savings && (
                <SavingsBlock savings={activeModalPkg.savings} />
              )}

              {/* Benefits Chips */}
              {activeModalPkg.benefits && activeModalPkg.benefits.length > 0 && (
                <div className="pt-6 border-t border-[#E7D9C6]">
                  <h3 className="text-lg md:text-xl font-bold text-[#3B322C] flex items-center gap-2 mb-3">
                    <span>✨</span>
                    Key Benefits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPkg.benefits.map((bKey) => (
                      <BenefitChip key={bKey} benefitKey={bKey} />
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              <TestimonialBlock pet={activeModalPkg.pet} />

              {/* Why Us */}
              <WhyUsBlock />

              {/* FAQs */}
              <FaqBlock />
            </div>

            {/* Modal Sticky CTA Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[#E7D9C6] p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg z-20">
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#D2571E] block">
                  {activeModalPkg.price}
                </span>
                <span className="text-[11px] text-[#6B5F55]">
                  {activeModalPkg.unit}
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalPkg(null)}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-full border border-[#E7D9C6] text-[#3B322C] font-semibold text-xs sm:text-sm hover:border-[#D2571E] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleWhatsAppBooking(activeModalPkg)}
                  className="flex-1 sm:flex-initial bg-[#D2571E] hover:bg-[#B54717] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>📅</span>
                  Book Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
