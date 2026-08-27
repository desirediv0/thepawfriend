"use client";

import { useState } from "react";

const PHONE = "+91 9211338489";
const WHATSAPP = "https://wa.me/919211338489";

const SERVICES = [
  {
    id: "veterinary-consultation",
    cat: "health",
    emoji: "🩺",
    title: "Veterinary Consultation",
    cardDesc: "Thoughtful clinical guidance for everyday health concerns, in the comfort of home.",
    img: "/service_vet_consultation.png",
    duration: "45–60 mins",
    priceBadge: "₹299",
    heroPrice: "From ₹299 (Puppy) / ₹499 (Adult)",
    trustLine: "Registered Veterinarian • Doorstep Consultation",
    popular: true,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "All life stages" },
      { label: "Service Type", value: "Doorstep consultation" },
      { label: "Duration", value: "45–60 minutes" },
      { label: "Professional", value: "Registered veterinarian" },
    ],
    whyText: "Choose veterinary consultation for new symptoms, preventive check-ins and follow-up questions without traveling to a clinic.",
    includesGroup: {
      title: "Every Consultation Includes",
      items: [
        "History review and owner discussion",
        "Nose-to-tail clinical examination",
        "Vital observations where clinically appropriate",
        "Assessment, care plan and digital prescription",
      ],
    },
    individualServices: {
      title: "Individual Tests & Visits",
      items: [
        { name: "Consultation – Puppy", price: "₹299" },
        { name: "Consultation – Adult", price: "₹499" },
        { name: "Rapid Kit Test – Parvo", price: "₹1,199" },
        { name: "Rapid Kit Test – Distemper", price: "₹1,999" },
      ],
    },
  },
  {
    id: "vaccination",
    cat: "health",
    emoji: "💉",
    title: "Vaccination",
    cardDesc: "A calm, record-led vaccination visit designed around your pet's age and history.",
    img: "/service_vaccination.png",
    duration: "20–30 mins",
    priceBadge: "₹999",
    heroPrice: "From ₹999 (Individual) / Packages from ₹1,999",
    trustLine: "Registered Veterinarian • US Standard Vaccines",
    popular: true,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "Puppies, kittens & adults" },
      { label: "Service Type", value: "Doorstep preventive care" },
      { label: "Duration", value: "20–30 minutes" },
      { label: "Professional", value: "Registered veterinarian" },
    ],
    whyText: "Keep core immunity protected with scheduled, cold-chain handled vaccinations administered right at your doorstep.",
    includesGroup: {
      title: "Every Vaccination Visit Includes",
      items: [
        "Eligibility and wellness check before vaccination",
        "Review of previous vaccination record",
        "Veterinarian-administered vaccine",
        "Digital record update and booster tracking",
      ],
    },
    subItems: [
      {
        name: "Puppy Vaccination Package",
        unit: "complete 8-shot schedule",
        price: "₹7,399",
        included: [
          "35th day — Puppy DP",
          "50th day — DHPPIL",
          "60th day — Canine Corona",
          "71st day — DHPPIL (booster)",
          "90th day — Canine Corona (booster) + Anti Rabies",
          "120th day — Anti Rabies (booster) + Kennel Cough",
          "Deworming",
        ],
      },
      {
        name: "Adult Dog Vaccination Package",
        unit: "annual core package",
        price: "₹3,999",
        included: ["Anti Rabies", "DHPPIL", "Canine Corona", "Kennel Cough", "Deworming"],
      },
      {
        name: "Kitten Vaccination Package",
        unit: "complete kitten schedule",
        price: "₹4,999",
        included: ["60th day — Tricat", "90th day — Tricat (booster)", "95th day — Anti Rabies", "125th day — Anti Rabies (booster)", "Deworming"],
      },
      {
        name: "Cat Vaccination Package",
        unit: "annual cat package",
        price: "₹1,999",
        included: ["Tricat", "Anti Rabies", "Deworming"],
      },
    ],
  },
  {
    id: "full-grooming",
    cat: "grooming",
    emoji: "✂️",
    title: "Full Grooming",
    cardDesc: "A complete coat-and-hygiene reset for a clean, comfortable, well-finished pet.",
    img: "/service_full_grooming.png",
    duration: "90–120 mins",
    priceBadge: "₹1,799",
    heroPrice: "₹1,799 per session",
    trustLine: "Professional Groomer • Doorstep Grooming",
    popular: true,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "3 months and older" },
      { label: "Service Type", value: "Doorstep grooming spa" },
      { label: "Duration", value: "90–120 minutes" },
      { label: "Professional", value: "Professional groomer" },
    ],
    whyText: "Full grooming handles bathing, haircutting, nail clipping, dematting, and ear/eye cleaning in one comfortable home appointment.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Coat and skin visual check",
        "Bath with premium shampoo & conditioner",
        "Blow dry, brushing & dematting",
        "Nail trim, ear, eye & dental cleaning",
        "Hygiene trim and coat styling",
        "Perfume application finish",
      ],
    },
  },
  {
    id: "mini-grooming",
    cat: "grooming",
    emoji: "🧼",
    title: "Mini Grooming",
    cardDesc: "A lighter maintenance visit between full grooming appointments.",
    img: "/service_mini_grooming.png",
    duration: "45–60 mins",
    priceBadge: "₹1,399",
    heroPrice: "₹1,399 per session",
    trustLine: "Professional Groomer • Maintenance Care",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "3 months and older" },
      { label: "Service Type", value: "Doorstep touch-up" },
      { label: "Duration", value: "45–60 minutes" },
      { label: "Professional", value: "Professional groomer" },
    ],
    whyText: "Keeps coat, nails, and sanitary areas tidy between full grooming sessions.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Coat assessment & brushing",
        "Nail clipping & paw cleaning",
        "Dental cleaning & ear wipe",
        "Hygiene area tidy-up & perfume",
      ],
    },
  },
  {
    id: "bathing",
    cat: "grooming",
    emoji: "🛁",
    title: "Bathing",
    cardDesc: "A gentle, coat-appropriate wash and dry for a fresher everyday routine.",
    img: "/service_bathing.png",
    duration: "45–60 mins",
    priceBadge: "₹899",
    heroPrice: "₹899 per session",
    trustLine: "Professional Groomer • Doorstep Hygiene",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "3 months and older" },
      { label: "Service Type", value: "Doorstep bath" },
      { label: "Duration", value: "45–60 minutes" },
      { label: "Professional", value: "Professional groomer" },
    ],
    whyText: "Removes everyday dirt and outdoor odor with pet-safe shampoo and blow dry.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Coat-appropriate shampooing",
        "Blow drying & combing",
        "Nail clipping",
        "Perfume finish",
      ],
    },
  },
  {
    id: "tick-flea-bath",
    cat: "grooming",
    emoji: "🌿",
    title: "Tick & Flea Bath",
    cardDesc: "A careful hygiene bath that supports parasite-control plans.",
    img: "/service_tick_flea.png",
    duration: "60–75 mins",
    priceBadge: "₹899",
    heroPrice: "₹899 per session",
    trustLine: "Professional Groomer • Parasite Treatment",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "All pets needing parasite care" },
      { label: "Service Type", value: "Treatment bath" },
      { label: "Duration", value: "60–75 minutes" },
      { label: "Professional", value: "Professional groomer" },
    ],
    whyText: "Specialized shampoo bath to soothe skin and remove active ticks and fleas.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Medicated tick & flea shampoo bath",
        "Thorough inspection & manual tick removal",
        "Gentle blow dry & pest comb-through",
        "Ongoing prevention guidance",
      ],
    },
  },
  {
    id: "puppy-training",
    cat: "training",
    emoji: "🎓",
    title: "Puppy Training",
    cardDesc: "A positive, practical foundation for calm routines and confident learning at home.",
    img: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=800&auto=format&fit=crop",
    duration: "12 sessions",
    priceBadge: "₹8,999",
    heroPrice: "₹8,999 per 12 sessions",
    trustLine: "Certified Pet Trainer • Positive Reinforcement",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "Puppies 2–6 months" },
      { label: "Service Type", value: "Home training" },
      { label: "Duration", value: "12 sessions" },
      { label: "Professional", value: "Certified trainer" },
    ],
    whyText: "Establishes toilet training, house manners, name recognition, and basic commands early.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Pee & poop routine establishment",
        "Name recognition & house etiquette",
        "Socialization & biting correction",
        "Basic commands: Sit, Stay, Come, Heel",
      ],
    },
  },
  {
    id: "obedience-training",
    cat: "training",
    emoji: "🏆",
    title: "Basic & Advanced Obedience",
    cardDesc: "Structured, reward-led training that turns everyday cues into reliable shared habits.",
    img: "/service_dog_training.png",
    duration: "12 sessions",
    priceBadge: "₹11,999",
    heroPrice: "₹11,999 per 12 sessions",
    trustLine: "Certified Pet Trainer • Full Obedience",
    popular: true,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "Dogs 6 months+" },
      { label: "Service Type", value: "Home training" },
      { label: "Duration", value: "12 sessions" },
      { label: "Professional", value: "Certified trainer" },
    ],
    whyText: "Full obedience curriculum covering leash walking, recall, bed commands, and guarding position.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Heel walking & leash manners",
        "Advanced commands: Down, Drop, Fetch, Leave",
        "Greetings etiquettes: Shake hand, High-five",
        "Guarding position & alert commands",
      ],
    },
  },
  {
    id: "behaviour-modification",
    cat: "training",
    emoji: "🧠",
    title: "Behaviour Modification",
    cardDesc: "A careful, management-first plan for behaviour concerns that need more than commands.",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800&auto=format&fit=crop",
    duration: "12 sessions",
    priceBadge: "₹14,999",
    heroPrice: "₹14,999 per 12 sessions",
    trustLine: "Specialized Trainer • Behavioral Correction",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "Dogs showing anxiety/aggression" },
      { label: "Service Type", value: "Behavioral correction" },
      { label: "Duration", value: "12 sessions" },
      { label: "Professional", value: "Behavioral specialist" },
    ],
    whyText: "Targeted correction for separation anxiety, leash reactivity, aggression, and destructive habits.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Separation anxiety management",
        "Aggression & barking correction",
        "Hyperactivity & jumping control",
        "Desensitization practice",
      ],
    },
  },
  {
    id: "emergency-care",
    cat: "emergency",
    emoji: "🚨",
    title: "Emergency Care",
    cardDesc: "Rapid triage and next-step coordination for urgent medical concerns.",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
    duration: "24/7 Priority",
    priceBadge: "24/7 Helpline",
    heroPrice: "Priority Emergency Dispatch",
    trustLine: "24/7 Vet Support • Emergency Coordination",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "All pets" },
      { label: "Service Type", value: "Urgent care & triage" },
      { label: "Availability", value: "24/7 hotline" },
      { label: "Location", value: "Doorstep / Clinic dispatch" },
    ],
    whyText: "Immediate response for sudden illness, trauma, breathing difficulty, or unresponsiveness.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Immediate phone triage with vet coordinator",
        "Doorstep vet dispatch or clinic referral",
        "First-aid guidance over phone while team arrives",
      ],
    },
  },
  {
    id: "boarding",
    cat: "emergency",
    emoji: "🏠",
    title: "Pet Boarding",
    cardDesc: "A structured, welfare-first stay with routine, monitoring and clear owner updates.",
    img: "/service_pet_boarding.png",
    duration: "Overnight / Daily",
    priceBadge: "Custom Stay",
    heroPrice: "Customized Boarding Packages",
    trustLine: "Trained Care Team • Home Environment",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "Dogs & Cats" },
      { label: "Service Type", value: "Full-day / Overnight stay" },
      { label: "Location", value: "Flagship Facilities Delhi NCR" },
      { label: "Updates", value: "Daily photo & video updates" },
    ],
    whyText: "Safe, home-like boarding with supervised play, custom meals, and daily video check-ins.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Individual sleeping quarters",
        "Supervised play & exercise sessions",
        "Customized feeding per instructions",
        "Daily photo & video updates for owners",
      ],
    },
  },
  {
    id: "online-consultation",
    cat: "health",
    emoji: "📹",
    title: "Online Consultation",
    cardDesc: "Convenient video guidance for non-urgent questions, reports review, and routine advice.",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    duration: "20–30 mins",
    priceBadge: "Online",
    heroPrice: "Convenient Video Call",
    trustLine: "Registered Veterinarian • Video Call",
    popular: false,
    quickFacts: [
      { label: "Ideal Pet / Age", value: "All pets" },
      { label: "Service Type", value: "Video consultation" },
      { label: "Duration", value: "20–30 minutes" },
      { label: "Professional", value: "Registered vet surgeon" },
    ],
    whyText: "Get professional advice on diet, minor symptoms, or test reports without leaving your home.",
    includesGroup: {
      title: "Everything Included",
      items: [
        "Video discussion with vet surgeon",
        "Review of past reports & prescriptions",
        "Dietary & home-care advice",
        "Digital prescription where applicable",
      ],
    },
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services", emoji: "🐾" },
  { id: "health", label: "Veterinary & Health", emoji: "🩺" },
  { id: "grooming", label: "Grooming & Spa", emoji: "✂️" },
  { id: "training", label: "Training & Obedience", emoji: "🎓" },
  { id: "emergency", label: "Emergency & Boarding", emoji: "🚨" },
];

export default function ServicesPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeModalSvc, setActiveModalSvc] = useState(null);
  const [compareTab, setCompareTab] = useState("training");

  const filteredServices = SERVICES.filter(
    (s) => activeCat === "all" || s.cat === activeCat
  );

  const handleBook = (svc) => {
    const message = encodeURIComponent(
      `Hello! I want to book the ${svc.title} service for my pet.`
    );
    window.open(`https://wa.me/919211338489?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#3B322C] font-sans pb-28 sm:pb-16 antialiased">
      {/* ── 1. HERO SECTION ── */}
      <section className="bg-gradient-to-br from-[#F5ECDF] via-[#FBF6EE] to-[#FBEBDE] py-12 sm:py-16 border-b border-[#E7D9C6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#FBEBDE] text-[#B54717] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-[#F6D9BC] shadow-2xs">
            <span>🐾</span>
            Trusted by 5,200+ Happy Pet Parents
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#3B322C] leading-tight mb-4">
            Complete Care For <span className="text-[#D2571E]">Every Paw</span>
          </h1>
          <p className="text-[#6B5F55] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From routine vet check-ups to emergency care, spa grooming to behavioral training — every service delivered at your doorstep across Delhi NCR by certified professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <a
              href="#services-grid"
              className="w-full sm:w-auto bg-[#D2571E] hover:bg-[#B54717] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>🧭</span> Explore Services
            </a>
            <button
              onClick={() => window.open(WHATSAPP, "_blank")}
              className="w-full sm:w-auto bg-white border-2 border-[#E7D9C6] text-[#3B322C] hover:border-[#D2571E] hover:text-[#D2571E] px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <span>💬</span> Talk to an Expert
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 max-w-xl mx-auto gap-4 pt-6 border-t border-[#E7D9C6]/60">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#D2571E]">5,200+</div>
              <div className="text-[11px] sm:text-xs text-[#6B5F55] font-semibold">Pet Parents</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#D2571E]">5</div>
              <div className="text-[11px] sm:text-xs text-[#6B5F55] font-semibold">Clinics in NCR</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#D2571E]">15+</div>
              <div className="text-[11px] sm:text-xs text-[#6B5F55] font-semibold">Doorstep Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CATEGORY SELECTOR ── */}
      <section className="sticky top-0 z-30 bg-[#FBF6EE]/95 backdrop-blur-md border-b border-[#E7D9C6] py-3 shadow-xs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none pb-1 sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 border shrink-0 ${
                    isActive
                      ? "bg-[#D2571E] text-white border-[#D2571E] shadow-md scale-[1.02]"
                      : "bg-white text-[#3B322C] border-[#E7D9C6] hover:border-[#D2571E] hover:text-[#D2571E]"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID ── */}
      <main id="services-grid" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl md:rounded-3xl border border-[#E7D9C6] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Card Banner Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#FBEBDE]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-black/60 text-white backdrop-blur-md border border-white/20">
                    <span>{svc.emoji}</span> Doorstep
                  </span>
                  {svc.popular && (
                    <span className="bg-amber-400 text-amber-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Popular
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 text-white z-10">
                  <span className="text-xs font-bold text-amber-300">
                    {svc.priceBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-black text-[#3B322C] leading-snug group-hover:text-[#D2571E] transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#6B5F55] leading-relaxed line-clamp-3 mb-4">
                    {svc.cardDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7D9C6]/60 space-y-2">
                  <div className="text-[11px] text-[#6B5F55] font-semibold flex justify-between">
                    <span>Duration: {svc.duration}</span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => setActiveModalSvc(svc)}
                      className="w-full bg-[#D2571E] hover:bg-[#B54717] text-white py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>ℹ️</span> Explore Details
                    </button>
                    <button
                      onClick={() => handleBook(svc)}
                      className="w-full bg-white border border-[#E7D9C6] hover:border-[#D2571E] text-[#3B322C] hover:text-[#D2571E] py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>💬</span> WhatsApp Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 4. COMPARISON TABLE SECTION ── */}
        <section className="my-16 bg-white border border-[#E7D9C6] rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-block bg-[#FBEBDE] text-[#B54717] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Compare Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3B322C]">
              Find Your Best Fit
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5F55] mt-1">
              Compare transparent pricing, durations and inclusions side-by-side.
            </p>
          </div>

          {/* Comparison Tabs */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {["training", "grooming", "health"].map((tab) => (
              <button
                key={tab}
                onClick={() => setCompareTab(tab)}
                className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm capitalize transition-all ${
                  compareTab === tab
                    ? "bg-[#D2571E] text-white shadow-sm"
                    : "bg-[#FBF6EE] text-[#6B5F55] border border-[#E7D9C6] hover:border-[#D2571E]"
                }`}
              >
                {tab} Services
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#FBF6EE] border-b border-[#E7D9C6] text-[#3B322C] font-bold">
                  <th className="p-3">Service</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Best For</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7D9C6]">
                {SERVICES.filter((s) => compareTab === "all" || s.cat === compareTab).map((s) => (
                  <tr key={s.id} className="hover:bg-[#FBEBDE]/30">
                    <td className="p-3 font-bold text-[#3B322C] flex items-center gap-2">
                      <span>{s.emoji}</span> {s.title}
                    </td>
                    <td className="p-3 font-extrabold text-[#D2571E]">{s.priceBadge}</td>
                    <td className="p-3 text-[#6B5F55]">{s.duration}</td>
                    <td className="p-3 text-[#6B5F55] max-w-xs">{s.cardDesc}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setActiveModalSvc(s)}
                        className="bg-[#D2571E] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#B54717] transition-all"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. BOTTOM PAGE CTA ── */}
        <section className="bg-gradient-to-br from-[#D2571E] to-[#B54717] rounded-3xl p-8 sm:p-12 text-center text-white my-12 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Need Help Choosing The Right Service?
          </h2>
          <p className="text-white/90 text-xs sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Our veterinary and grooming coordinators are available to guide you based on your pet&apos;s age, breed and health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => window.open(WHATSAPP, "_blank")}
              className="w-full sm:w-auto bg-white text-[#D2571E] hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>💬</span> Chat on WhatsApp
            </button>
            <a
              href={`tel:${PHONE}`}
              className="w-full sm:w-auto bg-transparent border-2 border-white/60 hover:border-white text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>📞</span> Call +91 9211338489
            </a>
          </div>
        </section>
      </main>

      {/* ── 6. SERVICE DETAIL SIDE DRAWER / MODAL ── */}
      {activeModalSvc && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalSvc(null)}
        >
          <div
            className="bg-[#FBF6EE] w-full max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Header */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#1a0905]">
              <img
                src={activeModalSvc.img}
                alt={activeModalSvc.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0905] via-[#1a0905]/40 to-transparent" />

              <button
                onClick={() => setActiveModalSvc(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors font-bold z-20 border border-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#D2571E] text-white px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {activeModalSvc.emoji} {activeModalSvc.cat}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black leading-snug drop-shadow-md">
                  {activeModalSvc.title}
                </h2>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                  {activeModalSvc.trustLine}
                </p>
              </div>
            </div>

            {/* Modal Scroll Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm sm:text-base text-[#6B5F55] leading-relaxed">
                {activeModalSvc.cardDesc}
              </p>

              {/* Quick Specs */}
              {activeModalSvc.quickFacts && (
                <div className="grid grid-cols-2 gap-3 bg-white border border-[#E7D9C6] rounded-2xl p-4 shadow-2xs">
                  {activeModalSvc.quickFacts.map((fact, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-[#B54717]">
                        {fact.label}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#3B322C]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Inclusions */}
              {activeModalSvc.includesGroup && (
                <div className="pt-4 border-t border-[#E7D9C6]">
                  <h3 className="text-lg font-bold text-[#3B322C] mb-3 flex items-center gap-2">
                    <span>📋</span> {activeModalSvc.includesGroup.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalSvc.includesGroup.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 bg-white border border-[#E7D9C6] rounded-xl p-3 text-xs sm:text-sm text-[#3B322C]"
                      >
                        <span className="text-[#4F7A5E] font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub items / Packages if any */}
              {activeModalSvc.subItems && (
                <div className="pt-4 border-t border-[#E7D9C6]">
                  <h3 className="text-lg font-bold text-[#3B322C] mb-3 flex items-center gap-2">
                    <span>📦</span> Available Packages
                  </h3>
                  <div className="space-y-3">
                    {activeModalSvc.subItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-[#E7D9C6] rounded-2xl p-4 space-y-2 shadow-2xs"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-sm text-[#3B322C]">{sub.name}</h4>
                          <span className="font-extrabold text-[#D2571E] text-base">{sub.price}</span>
                        </div>
                        <p className="text-xs text-[#6B5F55]">{sub.unit}</p>
                        <ul className="text-xs text-[#3B322C] space-y-1 pt-1 border-t border-[#E7D9C6]/50">
                          {sub.included.map((inc, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-[#4F7A5E]">✓</span> {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Individual Services */}
              {activeModalSvc.individualServices && (
                <div className="pt-4 border-t border-[#E7D9C6]">
                  <h3 className="text-lg font-bold text-[#3B322C] mb-3 flex items-center gap-2">
                    <span>💵</span> {activeModalSvc.individualServices.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalSvc.individualServices.items.map((item, idx) => (
                      <div key={idx} className="bg-white border border-[#E7D9C6] rounded-xl p-3 text-xs flex justify-between font-semibold">
                        <span>{item.name}</span>
                        <span className="text-[#D2571E] font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Sticky CTA Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[#E7D9C6] p-4 sm:px-8 flex items-center justify-between gap-3 shadow-lg z-20">
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#D2571E] block">
                  {activeModalSvc.priceBadge}
                </span>
                <span className="text-[11px] text-[#6B5F55]">Doorstep Service</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveModalSvc(null)}
                  className="px-5 py-2.5 rounded-full border border-[#E7D9C6] text-[#3B322C] font-semibold text-xs sm:text-sm hover:border-[#D2571E]"
                >
                  Close
                </button>
                <button
                  onClick={() => handleBook(activeModalSvc)}
                  className="bg-[#D2571E] hover:bg-[#B54717] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
                >
                  <span>💬</span> Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
