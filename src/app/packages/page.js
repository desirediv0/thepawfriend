"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ---------- data ---------- */

const BENEFITS_POOL = {
  coat: { icon: "spa", label: "Healthy Coat" },
  skin: { icon: "healing", label: "Healthy Skin" },
  immunity: { icon: "shield", label: "Strong Immunity" },
  behaviour: { icon: "psychology", label: "Better Behaviour" },
  professional: { icon: "verified", label: "Professional Care" },
  doorstep: { icon: "home", label: "Doorstep Convenience" },
  stressfree: { icon: "self_improvement", label: "Stress-free Experience" },
  bond: { icon: "favorite", label: "Stronger Bond With You" },
  safety: { icon: "security", label: "Long-term Protection" },
};

const WHY_US = [
  { icon: "school", label: "Certified Trainers" },
  { icon: "content_cut", label: "Professional Groomers" },
  { icon: "medical_services", label: "Qualified Veterinarians" },
  { icon: "home", label: "Doorstep Service" },
  { icon: "spa", label: "Premium Products" },
  { icon: "vaccines", label: "US Standard Vaccines" },
  { icon: "emergency", label: "Emergency Support" },
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
  packages: { icon: "inventory_2", label: "Packages" },
  grooming: { icon: "content_cut", label: "Grooming" },
  training: { icon: "school", label: "Training" },
  vaccination: { icon: "vaccines", label: "Vaccination" },
};

const PET_META = {
  dog: { icon: "🐶", label: "Dog" },
  cat: { icon: "🐱", label: "Cat" },
};

const POSTER_IMAGES = {
  Poster01_Adult_Dog_Ultra_Premium_Bundle:
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&h=500&fit=crop",
  Poster02_Puppy_Training:
    "https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=640&h=500&fit=crop",
  Poster03_Basic_Advanced_Obedience_Training:
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=640&h=500&fit=crop",
  Poster04_Behavioural_Modification:
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=640&h=500&fit=crop",
  Poster05_Protection_Guard_Dog_Training:
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=640&h=500&fit=crop",
  Poster06_Full_Grooming:
    "https://images.unsplash.com/photo-1516756587012-0e8f0e909803?w=640&h=500&fit=crop",
  Poster07_Mini_Grooming:
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=640&h=500&fit=crop",
  Poster08_Bathing:
    "https://images.unsplash.com/photo-1524511751214-b0a384dd9f70?w=640&h=500&fit=crop",
  Poster09_Trimming:
    "https://images.unsplash.com/photo-1544568100-847a948585b9?w=640&h=500&fit=crop",
  Poster10_Tick_and_Flea_Bath:
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=640&h=500&fit=crop",
  Poster11_Veterinary:
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=640&h=500&fit=crop",
  Poster12_Puppy_Vaccination_Package:
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&h=500&fit=crop",
  Poster13_Adult_Dog_Vaccination_Package:
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=640&h=500&fit=crop",
  Poster14_Kitten_Vaccination_Package:
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=640&h=500&fit=crop",
  Poster15_Cat_Vaccination_Package:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=640&h=500&fit=crop",
  Poster16_Adult_Dog_Premium_Bundle:
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=640&h=500&fit=crop",
  Poster17_Puppy_Ultra_Premium_Bundle:
    "https://images.unsplash.com/photo-1587559070757-f72a388edbba?w=640&h=500&fit=crop",
  Poster18_Puppy_Premium_Bundle:
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=640&h=500&fit=crop",
  Poster19_Cat_Yearly_Bundle:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=640&h=500&fit=crop",
};

const PACKAGES = [
  /* DOG — PACKAGES */
  {
    id: "adult-ultra",
    pet: "dog",
    cat: "packages",
    img: "Poster01_Adult_Dog_Ultra_Premium_Bundle",
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
    img: "Poster16_Adult_Dog_Premium_Bundle",
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
    img: "Poster17_Puppy_Ultra_Premium_Bundle",
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
    img: "Poster18_Puppy_Premium_Bundle",
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
      {
        label: "Week 4",
        detail: "Anti Rabies + Kennel Cough + Grooming #4–6",
      },
    ],
    savings: {
      exact: false,
      note: "Bundled pricing across 1 month of training, 6 grooming sessions and the full 8-shot vaccine schedule.",
      rows: [],
      individualTotal: null,
      packagePrice: 20999,
    },
  },

  /* CAT — PACKAGES */
  {
    id: "cat-yearly",
    pet: "cat",
    cat: "packages",
    img: "Poster19_Cat_Yearly_Bundle",
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
      healthNote:
        "Keeps coat, skin and core immunity covered across the full year.",
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
    img: "Poster02_Puppy_Training",
    name: "Puppy Training",
    unit: "per 12 sessions",
    price: "₹8,999",
    summary:
      "Foundational training for young puppies — house manners, name recognition and first commands.",
    overview: {
      ageFit: "Puppies, 2–6 months",
      breedFit: "Any breed",
      lifestyle: "Ideal first training programme for a new puppy in the home.",
      healthNote:
        "Builds early habits that prevent bigger behavioural issues later.",
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
    img: "Poster03_Basic_Advanced_Obedience_Training",
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
    img: "Poster04_Behavioural_Modification",
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
    img: "Poster05_Protection_Guard_Dog_Training",
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
    img: "Poster06_Full_Grooming",
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
    img: "Poster07_Mini_Grooming",
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
    img: "Poster08_Bathing",
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
    img: "Poster09_Trimming",
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
    img: "Poster10_Tick_and_Flea_Bath",
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
    img: "Poster12_Puppy_Vaccination_Package",
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
    img: "Poster13_Adult_Dog_Vaccination_Package",
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
    img: "Poster11_Veterinary",
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
    img: "Poster14_Kitten_Vaccination_Package",
    name: "Kitten Vaccination Package",
    unit: "one-time package",
    price: "₹4,999",
    summary:
      "The complete kitten vaccination schedule from day 60 through booster doses.",
    overview: {
      ageFit: "Kittens, 60 days – 5 months",
      breedFit: "Any breed",
      lifestyle:
        "Essential first vaccination schedule for a new kitten.",
      healthNote:
        "Includes Tricat and Anti Rabies with properly timed boosters.",
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
    img: "Poster15_Cat_Vaccination_Package",
    name: "Cat Vaccination Package",
    unit: "one-time package",
    price: "₹1,999",
    summary: "Annual core vaccination coverage for adult cats.",
    overview: {
      ageFit: "Adult cats, 1+ years",
      breedFit: "Any breed",
      lifestyle: "For annual re-vaccination and continued protection.",
      healthNote:
        "Covers Tricat and Anti Rabies in one scheduled visit.",
    },
    includes: [
      {
        group: null,
        items: ["Tricat", "Anti Rabies", "Deworming"],
      },
    ],
    benefits: ["immunity", "safety", "professional"],
    timeline: null,
    savings: null,
  },
];

/* ---------- helpers ---------- */

function fmtINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

/* ---------- sub-components ---------- */

function BenefitChip({ benefitKey }) {
  const b = BENEFITS_POOL[benefitKey];
  if (!b) return null;
  return (
    <span className="tpf-pkg-benefit-chip">
      <span className="material-symbols-outlined">{b.icon}</span> {b.label}
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
      <div className="tpf-pkg-m-section">
        <h3>
          <span className="material-symbols-outlined">savings</span> Your
          Savings
        </h3>
        <div className="tpf-pkg-savings-box">
          {rows.map((r, i) => (
            <div key={i} className="tpf-pkg-savings-row">
              <span>{r.label}</span>
              <span className="tpf-pkg-cost">{fmtINR(r.cost)}</span>
            </div>
          ))}
          <div className="tpf-pkg-savings-row tpf-pkg-total">
            <span>Individual total</span>
            <span>{fmtINR(individualTotal)}</span>
          </div>
          <div className="tpf-pkg-savings-row tpf-pkg-total">
            <span>Bundle price</span>
            <span>{fmtINR(packagePrice)}</span>
          </div>
          <div className="tpf-pkg-savings-highlight">
            <span>You save</span>
            <span>
              {fmtINR(save)} ({pct}%)
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">savings</span> Bundle
        Value
      </h3>
      <div className="tpf-pkg-savings-box">
        {rows.length > 0 &&
          rows.map((r, i) => (
            <div key={i} className="tpf-pkg-savings-row">
              <span>{r.label}</span>
              <span className="tpf-pkg-cost">{fmtINR(r.cost)}</span>
            </div>
          ))}
        <p className="tpf-pkg-savings-note">{note}</p>
      </div>
    </div>
  );
}

function TimelineBlock({ timeline }) {
  if (!timeline) return null;
  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">timeline</span> Your
        Journey
      </h3>
      <div className="tpf-pkg-timeline">
        {timeline.map((t, i) => (
          <div key={i} className="tpf-pkg-timeline-item">
            <div className="tpf-pkg-timeline-dot" />
            <div className="tpf-pkg-t-label">{t.label}</div>
            <div className="tpf-pkg-t-detail">{t.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncludesBlock({ includes }) {
  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">checklist</span>{" "}
        Everything Included
      </h3>
      {includes.map((group, gi) => (
        <div key={gi} className="tpf-pkg-include-group">
          {group.group && (
            <div className="tpf-pkg-include-group-title">{group.group}</div>
          )}
          <div className="tpf-pkg-include-grid">
            {group.items.map((item, ii) => (
              <div key={ii} className="tpf-pkg-include-chip">
                <span className="material-symbols-outlined">check_circle</span>{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function OverviewBlock({ overview }) {
  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">info</span> Package
        Overview
      </h3>
      <div className="tpf-pkg-overview-grid">
        <div className="tpf-pkg-overview-item">
          <div className="tpf-pkg-label">Ideal Age</div>
          <div className="tpf-pkg-value">{overview.ageFit}</div>
        </div>
        <div className="tpf-pkg-overview-item">
          <div className="tpf-pkg-label">Suitable Breeds</div>
          <div className="tpf-pkg-value">{overview.breedFit}</div>
        </div>
        <div className="tpf-pkg-overview-item">
          <div className="tpf-pkg-label">Best For</div>
          <div className="tpf-pkg-value">{overview.lifestyle}</div>
        </div>
        <div className="tpf-pkg-overview-item">
          <div className="tpf-pkg-label">Health Benefit</div>
          <div className="tpf-pkg-value">{overview.healthNote}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialBlock({ pet }) {
  const list = TESTIMONIALS[pet === "both" ? "dog" : pet] || TESTIMONIALS.dog;
  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">rate_review</span> What Pet
        Parents Say
      </h3>
      <div className="tpf-pkg-testimonial-grid">
        {list.map((t, i) => (
          <div key={i} className="tpf-pkg-testimonial-card">
            <div className="tpf-pkg-t-stars">{"★".repeat(t.rating)}</div>
            <p className="tpf-pkg-t-text">&ldquo;{t.text}&rdquo;</p>
            <div className="tpf-pkg-t-author">
              {t.name} <span>· {t.pet}</span>
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
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">help</span> Frequently
        Asked Questions
      </h3>
      {FAQ_SHARED.map((f, i) => (
        <div
          key={i}
          className={`tpf-pkg-faq-item ${openIdx === i ? "open" : ""}`}
        >
          <button
            className="tpf-pkg-faq-q"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            {f.q}{" "}
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <div className="tpf-pkg-faq-a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhyUsBlock() {
  return (
    <div className="tpf-pkg-m-section">
      <h3>
        <span className="material-symbols-outlined">workspace_premium</span>{" "}
        Why Choose The Paws Friend
      </h3>
      <div className="tpf-pkg-why-grid">
        {WHY_US.map((w, i) => (
          <div key={i} className="tpf-pkg-why-item">
            <span className="material-symbols-outlined">{w.icon}</span>
            <div className="tpf-pkg-label">{w.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- main page ---------- */

export default function PackagesPage() {
  const [selectedPet, setSelectedPet] = useState("dog");
  const [selectedCategory, setSelectedCategory] = useState("packages");
  const [modalPkg, setModalPkg] = useState(null);

  const filtered = PACKAGES.filter(
    (p) =>
      (p.pet === selectedPet || p.pet === "both") &&
      p.cat === selectedCategory
  );

  const openModal = useCallback((pkg) => {
    setModalPkg(pkg);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalPkg(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  return (
    <div className="tpf-packages">
      {/* Header */}
      <section className="tpf-pkg-section-head">
        <div className="tpf-pkg-wrap">
          <span className="tpf-pkg-eyebrow">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 15 }}
            >
              verified
            </span>{" "}
            Comprehensive Protection Plans
          </span>
          <h1>
            Care Packages,{" "}
            <span>picked for your pet</span>
          </h1>
          <p>
            Select your pet and a category to see the exact package posters you
            already know — now bookable in two taps.
          </p>
        </div>
      </section>

      <main className="tpf-pkg-wrap">
        {/* Pet Selector */}
        <div className="tpf-pkg-pet-selector">
          {Object.entries(PET_META).map(([key, meta]) => (
            <button
              key={key}
              className={`tpf-pkg-pet-btn ${selectedPet === key ? "active" : ""}`}
              onClick={() => {
                setSelectedPet(key);
                setSelectedCategory("packages");
              }}
            >
              <span className="tpf-pkg-emoji">{meta.icon}</span> {meta.label}
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="tpf-pkg-cat-tabs">
          {Object.entries(CATEGORY_META).map(([key, meta]) => (
            <button
              key={key}
              className={`tpf-pkg-cat-tab ${selectedCategory === key ? "active" : ""}`}
              onClick={() => setSelectedCategory(key)}
            >
              <span className="material-symbols-outlined">{meta.icon}</span>{" "}
              {meta.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="tpf-pkg-card-grid">
          {filtered.length === 0 ? (
            <div className="tpf-pkg-empty-state">
              <span className="material-symbols-outlined">pets</span>
              <h3>
                No {CATEGORY_META[selectedCategory].label.toLowerCase()} for{" "}
                {PET_META[selectedPet].label.toLowerCase()}s yet
              </h3>
              <p>
                We don&apos;t currently offer a structured{" "}
                {CATEGORY_META[selectedCategory].label.toLowerCase()} for{" "}
                {PET_META[selectedPet].label.toLowerCase()}s, but our team can
                build a custom plan around your pet&apos;s needs.
              </p>
              <Link
                href="https://wa.me/919211338489"
                target="_blank"
                className="tpf-pkg-btn tpf-pkg-btn-green"
              >
                <span className="material-symbols-outlined">
                  support_agent
                </span>{" "}
                Talk to an Expert
              </Link>
            </div>
          ) : (
            filtered.map((pkg) => (
              <article key={pkg.id} className="tpf-pkg-card">
                <div
                  className="tpf-pkg-poster-frame"
                  onClick={() => openModal(pkg)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openModal(pkg)}
                >
                  <img
                    src={POSTER_IMAGES[pkg.img]}
                    alt={`${pkg.name} — official package poster`}
                    loading="lazy"
                  />
                  {pkg.popular && (
                    <span className="tpf-pkg-popular-badge">
                      <span className="material-symbols-outlined">star</span>{" "}
                      Most Popular
                    </span>
                  )}
                  <span className="tpf-pkg-poster-tag">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 13 }}
                    >
                      photo_camera
                    </span>{" "}
                    Official Poster
                  </span>
                </div>
                <div className="tpf-pkg-body">
                  <div className="tpf-pkg-name">{pkg.name}</div>
                  <p className="tpf-pkg-summary">{pkg.summary}</p>
                  <div className="tpf-pkg-price-row">
                    <span className="tpf-pkg-price">{pkg.price}</span>
                    <span className="tpf-pkg-unit">{pkg.unit}</span>
                  </div>
                  <div className="tpf-pkg-actions">
                    <Link
                      href={`https://wa.me/919211338489?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}`}
                      target="_blank"
                      className="tpf-pkg-btn tpf-pkg-btn-primary"
                    >
                      <span className="material-symbols-outlined">
                        calendar_today
                      </span>{" "}
                      Book Now
                    </Link>
                    <button
                      className="tpf-pkg-btn tpf-pkg-btn-secondary"
                      onClick={() => openModal(pkg)}
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>{" "}
                      View Details
                    </button>
                    <Link
                      href="https://wa.me/919211338489"
                      target="_blank"
                      className="tpf-pkg-btn tpf-pkg-btn-soft-green"
                    >
                      <span className="material-symbols-outlined">
                        support_agent
                      </span>{" "}
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <section className="tpf-pkg-bottom-cta">
          <h2>Ready to give your pet the best care?</h2>
          <p>
            Book a doorstep visit today — expert care delivered straight to your
            home.
          </p>
          <div className="tpf-pkg-cta-row">
            <Link
              href="https://wa.me/919211338489"
              target="_blank"
              className="tpf-pkg-btn tpf-pkg-btn-primary"
            >
              <span className="material-symbols-outlined">calendar_today</span>{" "}
              Book a Package
            </Link>
            <Link
              href="https://wa.me/919211338489"
              target="_blank"
              className="tpf-pkg-btn tpf-pkg-btn-outline"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp
              Us
            </Link>
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      {modalPkg && (
        <div
          className="tpf-pkg-modal-backdrop open"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="tpf-pkg-modal" role="dialog" aria-modal="true">
            <button
              className="tpf-pkg-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="tpf-pkg-modal-hero">
              <img
                src={POSTER_IMAGES[modalPkg.img]}
                alt={`${modalPkg.name} — official package poster`}
              />
              <div className="tpf-pkg-modal-hero-tag">
                <span className="tpf-pkg-poster-tag">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 13 }}
                  >
                    photo_camera
                  </span>{" "}
                  Official Poster, Digitized
                </span>
                <h2>{modalPkg.name}</h2>
                <div className="tpf-pkg-price">
                  {modalPkg.price}{" "}
                  <span className="tpf-pkg-unit">{modalPkg.unit}</span>
                </div>
              </div>
            </div>
            <div className="tpf-pkg-modal-body">
              <OverviewBlock overview={modalPkg.overview} />
              <IncludesBlock includes={modalPkg.includes} />
              <TimelineBlock timeline={modalPkg.timeline} />
              <div className="tpf-pkg-m-section">
                <h3>
                  <span className="material-symbols-outlined">favorite</span>{" "}
                  Benefits
                </h3>
                <div className="tpf-pkg-benefit-row">
                  {modalPkg.benefits.map((b) => (
                    <BenefitChip key={b} benefitKey={b} />
                  ))}
                </div>
              </div>
              <SavingsBlock savings={modalPkg.savings} />
              <TestimonialBlock pet={modalPkg.pet} />
              <FaqBlock />
              <WhyUsBlock />
            </div>
            <div className="tpf-pkg-modal-sticky-cta">
              <div className="tpf-pkg-sticky-info">
                <div className="tpf-pkg-sticky-price">{modalPkg.price}</div>
                <div className="tpf-pkg-sticky-unit">{modalPkg.unit}</div>
              </div>
              <Link
                href="https://wa.me/919211338489"
                target="_blank"
                className="tpf-pkg-btn tpf-pkg-btn-soft-green tpf-pkg-icon-btn"
              >
                <span className="material-symbols-outlined">chat</span>
              </Link>
              <a
                href="tel:+919211338489"
                className="tpf-pkg-btn tpf-pkg-btn-secondary tpf-pkg-icon-btn"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
              <Link
                href={`https://wa.me/919211338489?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(modalPkg.name)}`}
                target="_blank"
                className="tpf-pkg-btn tpf-pkg-btn-primary"
                style={{ flex: 1 }}
              >
                <span className="material-symbols-outlined">
                  calendar_today
                </span>{" "}
                Book Package
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
