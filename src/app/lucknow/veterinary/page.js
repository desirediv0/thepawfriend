import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";
import InteractiveArticleGrid from "@/components/InteractiveArticleGrid";

export const metadata = {
  title: "Vet Doctor Home Visit & Vaccination Packages in Lucknow | Gomti Nagar Aliganj",
  description:
    "Book licensed vet doctor home visits & vaccination packages in Lucknow (Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Ashiyana). Puppy 8-shot package ₹6999, adult dog vaccine ₹3999, consultation ₹299. AEO & SEO optimized.",
  keywords: [
    "vet doctor home visit lucknow",
    "at home vet doctor gomti nagar",
    "puppy vaccination package cost lucknow",
    "dog vaccination at home aliganj",
    "veterinary consultation lucknow price",
    "cold chain vaccine home delivery lucknow",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/lucknow/veterinary",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Lucknow Vet Doctor Home Visit & Vaccine Packages | The Paws Friend",
    description: "Licensed BVSc veterinary doctors visiting your residence in Lucknow.",
    url: "https://thepawsfriend.com/lucknow/veterinary",
    siteName: "The Paws Friend Lucknow",
    images: [
      {
        url: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lucknow Vet Doctor Home Visit",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucknow Vet Doctor Home Visit & Vaccine Packages",
    description: "Licensed BVSc vet doctors visiting your home in Lucknow.",
    images: [
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function LucknowVeterinaryPage() {
  const jsonLdLucknowVet = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "The Paws Friend Lucknow Veterinary Care",
    telephone: "+91-9211338489",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      "Gomti Nagar",
      "Indira Nagar",
      "Hazratganj",
      "Aliganj",
      "Ashiyana",
      "Mahanagar",
      "Rajajipuram",
      "Jankipuram",
      "Sushant Golf City",
      "Vrindavan Yojna",
    ],
    description:
      "At-home veterinary consultations, cold-chain vaccination schedules, and blood lab testing in Lucknow.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "280",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lucknow Veterinary & Vaccine Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Puppy Vaccination Package (8 Shots)",
            description: "Puppy DP, DHPPiL, Corona, Anti-Rabies, Kennel Cough & boosters + Deworming in Lucknow.",
          },
          price: "6999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adult Dog Annual Vaccine Package",
            description: "Anti-Rabies, DHPPiL, Corona, Kennel Cough & Deworming in Lucknow.",
          },
          price: "3999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitten Vaccination Package",
            description: "Tricat, Anti-Rabies, boosters & Deworming in Lucknow.",
          },
          price: "3999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Puppy Consultation (Lucknow Home Visit)",
            description: "Physical examination & diet consultation at home in Lucknow.",
          },
          price: "299",
          priceCurrency: "INR",
        },
      ],
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thepawsfriend.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lucknow",
        item: "https://thepawsfriend.com/lucknow",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Lucknow Veterinary Care",
        item: "https://thepawsfriend.com/lucknow/veterinary",
      },
    ],
  };

  // AEO (Answer Engine Optimization) Structured FAQs for Lucknow
  const lucknowAeoFaqs = [
    {
      q: "How can I book a vet doctor home visit in Gomti Nagar or Aliganj, Lucknow?",
      a: "You can book a vet doctor home visit in Lucknow by selecting **Lucknow** in our online hero booking form or calling **+91 9211338489**. A licensed BVSc veterinarian will visit your home in Gomti Nagar, Aliganj, Hazratganj, or Indira Nagar within 30 to 45 minutes.",
    },
    {
      q: "What is the cost of puppy vaccination in Lucknow at home?",
      a: "The complete **8-shot puppy vaccination package** in Lucknow costs **₹6,999** (all-inclusive for 4 months), covering Puppy DP, DHPPiL (9-in-1), Canine Corona, Anti-Rabies, Kennel Cough, and boosters with free deworming.",
    },
    {
      q: "Are cold-chain maintained vaccines used during home vet visits in Lucknow?",
      a: "Yes. All vaccines in Lucknow are transported in **clinical ice-packs maintaining 2°C to 8°C**, ensuring 100% vaccine potency and antibody protection against Parvovirus and Rabies.",
    },
    {
      q: "Which areas in Lucknow are covered for doorstep veterinary care?",
      a: "We cover **all major localities in Lucknow**, including Gomti Nagar, Gomti Nagar Extension, Indira Nagar, Hazratganj, Aliganj, Ashiyana, Mahanagar, Rajajipuram, Jankipuram, Sushant Golf City, and Vrindavan Yojna.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lucknowAeoFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\*\*/g, ""),
      },
    })),
  };

  const lucknowVetPackages = [
    {
      title: "Puppy Vaccination Package (8 Shots)",
      price: "₹6,999",
      originalPrice: "₹10,500",
      badge: "COMPLETE 8-SHOT SCHEDULE",
      popular: true,
      summary: "Full 8-shot puppy vaccination schedule tracked from Day 35 through boosters across Lucknow.",
      features: [
        "Day 35: Puppy DP Shot",
        "Day 50: DHPPiL (9-in-1)",
        "Day 60: Canine Corona Vaccine",
        "Day 71: DHPPiL Booster",
        "Day 90: Corona Booster + Anti-Rabies",
        "Day 120: Anti-Rabies Booster + Kennel Cough",
        "Deworming Medication Included",
        "Cold-chain Maintained Vaccines",
      ],
    },
    {
      title: "Adult Dog Annual Vaccine Package",
      price: "₹3,999",
      originalPrice: "₹5,499",
      badge: "ANNUAL CORE RE-VACCINE",
      popular: false,
      summary: "Annual re-vaccination shield for adult dogs in Lucknow including Kennel Cough & Anti-Rabies.",
      features: [
        "Anti-Rabies Core Shot",
        "DHPPiL (9-in-1) Core Shot",
        "Canine Corona Vaccine",
        "Kennel Cough Protection",
        "Deworming Dose",
        "Full Health Examination",
      ],
    },
    {
      title: "Kitten Vaccination Package",
      price: "₹3,999",
      originalPrice: "₹6,800",
      badge: "COMPLETE KITTEN SCHEDULE",
      popular: false,
      summary: "Complete first-year vaccination schedule for kittens in Lucknow from Day 60 to Day 125.",
      features: [
        "Day 60: Tricat Vaccine",
        "Day 90: Tricat Booster",
        "Day 95: Anti-Rabies Vaccine",
        "Day 125: Anti-Rabies Booster",
        "Kitten Deworming",
      ],
    },
    {
      title: "Adult Cat Annual Vaccination",
      price: "₹1,999",
      originalPrice: "₹2,800",
      badge: "CAT CORE SHIELD",
      popular: false,
      summary: "Annual core protection for adult cats in Lucknow against respiratory & viral infections.",
      features: [
        "Tricat Vaccine",
        "Anti-Rabies Vaccine",
        "Deworming Dose",
        "Basic Wellness Examination",
      ],
    },
  ];

  const standaloneServices = [
    { name: "Puppy Consultation (Lucknow Home Visit)", price: "₹299" },
    { name: "Adult Dog Consultation (Lucknow Home Visit)", price: "₹499" },
    { name: "Rapid Kit Test – Parvo", price: "₹1,199" },
    { name: "Rapid Kit Test – Distemper", price: "₹1,999" },
    { name: "Puppy DP Shot", price: "₹1,199" },
    { name: "Anti-Rabies Shot", price: "₹999" },
    { name: "DHPPiL (9-in-1) Shot", price: "₹1,199" },
    { name: "Kennel Cough Vaccine", price: "₹1,499" },
    { name: "Tricat (Feline Vaccine)", price: "₹1,199" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLucknowVet) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "88vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,10,5,0.88) 0%, rgba(20,10,5,0.68) 50%, rgba(20,10,5,0.42) 100%)",
          }}
        />

        <div
          className="relative z-10 max-w-container-max mx-auto px-gutter"
          style={{
            minHeight: "88vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "88px",
            paddingBottom: "48px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Column */}
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="text-xs text-white/70 flex items-center gap-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/lucknow" className="hover:underline">Lucknow</Link>
                <span>/</span>
                <span className="text-primary-fixed font-bold">Veterinary Services</span>
              </nav>

              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,219,209,0.22)",
                  border: "1px solid rgba(255,219,209,0.45)",
                  color: "#ffdbd1",
                }}
              >
                <span className="material-symbols-outlined text-[16px]">
                  clinical_notes
                </span>
                Lucknow Certified Vet Doctor Home Visits
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Vet Visit & Vaccine Packages <br />
                <span style={{ color: "#ffb59f" }}>In Lucknow</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Licensed BVSc veterinarians visiting your home in Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Ashiyana & all Lucknow sectors. Cold-chain vaccines & digital prescriptions.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Gomti Nagar", "Indira Nagar", "Aliganj", "Hazratganj", "Ashiyana", "Mahanagar", "Rajajipuram"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white bg-white/15 border border-white/30"
                  >
                    📍 {loc}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/lucknow/grooming"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all inline-block"
                >
                  Need Lucknow Grooming Packages? →
                </Link>
              </div>
            </div>

            {/* Right Form pre-selected for Lucknow + Veterinary */}
            <HeroBookingForm
              defaultCity="Lucknow"
              defaultService="Veterinary Consultation"
              formTitle="Book Lucknow Vet Visit"
              formSubtitle="EXPERIENCED BVSC VET DOCTOR VISIT"
              offerBadge="🩺 Free Vet Consultation Call in Lucknow"
            />
          </div>
        </div>
      </section>

      {/* Lucknow Vet Packages Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Vet Healthcare Packages
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Veterinary & Vaccine Packages in Lucknow
            </h2>
            <p className="text-on-surface-variant text-sm">
              Transparent, all-inclusive medical packages administered by certified doctors with booster tracking in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {lucknowVetPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative rounded-3xl p-7 flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-white border-2 border-primary shadow-xl"
                    : "bg-white border border-surface-variant/40 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <span className="bg-primary/10 text-primary text-xs font-extrabold px-3 py-1 rounded-full inline-block">
                    {pkg.badge}
                  </span>
                  <h3 className="font-bold text-xl text-on-surface">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-primary">{pkg.price}</span>
                    <span className="text-xs text-on-surface-variant line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{pkg.summary}</p>
                  <ul className="space-y-2 text-xs text-on-surface-variant pt-2 border-t border-surface-variant/30">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href={`/book?city=Lucknow&service=Veterinary&package=${encodeURIComponent(pkg.title)}`}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs text-center block hover:bg-primary-container transition-all"
                  >
                    Book {pkg.title} in Lucknow
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standalone Lucknow Price List */}
      <section className="py-16 bg-surface-container/40">
        <div className="max-w-container-max mx-auto px-gutter space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Price List
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Standalone Vet Consultations & Rapid Tests in Lucknow
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-surface-variant/40 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {standaloneServices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container/30 border border-surface-variant/30 text-xs font-semibold"
                >
                  <span className="text-on-surface">{item.name}</span>
                  <span className="text-primary font-extrabold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow Vet Advice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Vet Health Tips
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Doctor Advice For Lucknow Pet Parents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                01
              </div>
              <h3 className="font-bold text-lg text-on-surface">Summer Heatstroke Warning</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Lucknow summers reach extreme temperatures. Always keep your pets indoors during 12 PM to 4 PM, provide cool water, and never leave pets in parked cars.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                02
              </div>
              <h3 className="font-bold text-lg text-on-surface">Monsoon Parvovirus Alert</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Parvovirus outbreaks spike during UP monsoons. Ensure your puppy completes all 3 DHPPiL shots before taking them to public parks in Lucknow.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                03
              </div>
              <h3 className="font-bold text-lg text-on-surface">Cold-Chain Vaccine Guarantee</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our Lucknow doctors carry medical ice-boxes to maintain 2°C–8°C storage, guaranteeing full antibody immunity for your pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Magazine & Article Grid ── */}
      <InteractiveArticleGrid category="veterinary" city="Lucknow" />

      {/* Lucknow AEO FAQs */}
      <section className="py-16 bg-surface-container/40" id="faqs">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow AEO FAQs
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Lucknow Veterinary FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {lucknowAeoFaqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-2xl border border-surface-variant/40 space-y-2 shadow-sm"
              >
                <h3 className="font-headline-md text-base font-bold text-on-surface">
                  {faq.q}
                </h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  {faq.a.split("**").map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/lucknow" className="text-primary font-extrabold hover:underline">
              ← Back to Lucknow Main City Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
