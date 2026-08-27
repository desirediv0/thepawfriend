import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";
import InteractiveArticleGrid from "@/components/InteractiveArticleGrid";

export const metadata = {
  title: "Vet Doctor Home Visit & Vaccination Packages | Delhi NCR & Lucknow | The Paws Friend",
  description:
    "Book licensed vet doctor home visits & vaccination packages in Delhi, Gurugram, Noida, Ghaziabad, Faridabad & Lucknow. Puppy 8-shot schedule ₹6999, adult dog vaccine ₹3999, consultation from ₹299. AEO & SEO optimized.",
  keywords: [
    "vet doctor home visit",
    "at home veterinary care delhi ncr",
    "puppy 8 shot vaccination schedule india",
    "home dog vaccination near me",
    "vet consultation cost lucknow delhi",
    "parvo distemper rapid kit test price",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/veterinary",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "At-Home Vet Doctor Consultation & Vaccination Packages | The Paws Friend",
    description: "Experienced certified BVSc veterinarians visiting your home in Delhi NCR & Lucknow.",
    url: "https://thepawsfriend.com/veterinary",
    siteName: "The Paws Friend",
    images: [
      {
        url: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vet Doctor Home Visit & Health Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vet Doctor Home Visit & Vaccination Packages",
    description: "Licensed BVSc & MVSc vet doctors visiting your home in Delhi NCR & Lucknow.",
    images: [
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function VeterinaryPage() {
  const jsonLdVet = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "The Paws Friend Veterinary Home Care",
    telephone: "+91-9211338489",
    areaServed: ["Delhi", "Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Faridabad", "Lucknow"],
    description:
      "Comprehensive home veterinary visits, cold-chain vaccinations, blood diagnostics, and preventive healthcare packages for dogs and cats.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "580",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Veterinary & Vaccination Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Puppy Vaccination Package (8 Shots)",
            description: "Puppy DP, DHPPiL, Corona, Anti-Rabies, Kennel Cough & boosters + Deworming.",
          },
          price: "6999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adult Dog Annual Vaccination Package",
            description: "Anti-Rabies, DHPPiL (9-in-1), Corona, Kennel Cough & Deworming.",
          },
          price: "3999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitten Vaccination Package",
            description: "Tricat, Anti-Rabies, boosters & Deworming.",
          },
          price: "3999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adult Cat Annual Vaccination",
            description: "Tricat, Anti-Rabies & Deworming.",
          },
          price: "1999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Puppy Consultation (Home Visit)",
            description: "At-home physical examination and diet plan.",
          },
          price: "299",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adult Dog Consultation (Home Visit)",
            description: "At-home physical examination and digital prescription.",
          },
          price: "499",
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
        name: "Veterinary Care",
        item: "https://thepawsfriend.com/veterinary",
      },
    ],
  };

  // AEO (Answer Engine Optimization) Structured FAQs for Perplexity, ChatGPT & Google AI Overviews
  const aeoFaqs = [
    {
      q: "What vaccines are mandatory for puppies in India?",
      a: "Mandatory puppy vaccines in India include the **Puppy DP** (Distemper & Parvovirus at day 35), **DHPPiL / 9-in-1 core vaccine** (at day 50 & booster at day 71), **Canine Corona vaccine** (day 60 & 90), **Anti-Rabies** (at day 90 & booster at day 120), and **Kennel Cough** (day 120). Deworming should accompany every shot schedule.",
    },
    {
      q: "How much does a vet doctor home visit cost in Delhi NCR and Lucknow?",
      a: "At The Paws Friend, a standalone home consultation by a licensed BVSc vet doctor starts at **₹299 for puppies** and **₹499 for adult dogs**. Comprehensive annual vaccination packages range from **₹1,999 to ₹6,999** with zero hidden travel fees.",
    },
    {
      q: "Can dogs get vaccinated at home safely without going to a clinic?",
      a: "Yes. Home vaccination is 100% safe when administered by certified veterinarians maintaining **cold-chain storage (2°C to 8°C)**. Home vaccination eliminates clinic waiting rooms, preventing exposure to contagious viral infections like Parvovirus and Distemper.",
    },
    {
      q: "How do I prepare my dog for a vet home consultation?",
      a: "To prepare your dog: **1.** Keep your pet in a well-lit quiet room 15 minutes before the doctor's arrival. **2.** Avoid feeding heavy meals 1 hour prior. **3.** Have previous medical history/vaccination cards ready for review.",
    },
    {
      q: "What should I do if my pet shows sudden fever or vomiting?",
      a: "If your pet shows high fever (above 102.5°F), persistent vomiting, or extreme lethargy: **1.** Keep them hydrated with electrolyte water. **2.** Do NOT give human paracetamol or ibuprofen (toxic to dogs/cats). **3.** Call our 24/7 emergency helpline (+91 9211338488) immediately for a vet home dispatch.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aeoFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\*\*/g, ""),
      },
    })),
  };

  const vetPackages = [
    {
      id: "puppy-vacc",
      title: "Complete Puppy Vaccination Package (8 Shots)",
      badge: "8 SHOTS + BOOSTERS",
      unit: "Complete Schedule",
      price: "₹6,999",
      originalPrice: "₹10,500",
      popular: true,
      summary: "Full 8-shot puppy vaccination schedule tracked from Day 35 through boosters.",
      includes: [
        "Day 35: Puppy DP Shot",
        "Day 50: DHPPiL (9-in-1)",
        "Day 60: Canine Corona Vaccine",
        "Day 71: DHPPiL Booster",
        "Day 90: Canine Corona Booster + Anti-Rabies",
        "Day 120: Anti-Rabies Booster + Kennel Cough",
        "Deworming Medication Included",
        "Cold-chain Maintained Vaccines",
      ],
    },
    {
      id: "adult-vacc",
      title: "Adult Dog Annual Vaccination Package",
      badge: "ANNUAL CORE SHIELD",
      unit: "One-Time Visit",
      price: "₹3,999",
      originalPrice: "₹5,499",
      popular: false,
      summary: "Annual re-vaccination shield for adult dogs including Kennel Cough & Anti-Rabies.",
      includes: [
        "Anti-Rabies Core Shot",
        "DHPPiL (9-in-1) Core Shot",
        "Canine Corona Vaccine",
        "Kennel Cough Protection",
        "Deworming Dose",
        "Full Physical Health Checkup",
      ],
    },
    {
      id: "kitten-vacc",
      title: "Kitten Vaccination Package",
      badge: "KITTEN CARE",
      unit: "Complete Schedule",
      price: "₹3,999",
      originalPrice: "₹6,800",
      popular: false,
      summary: "Complete first-year vaccination schedule for kittens from Day 60 to Day 125.",
      includes: [
        "Day 60: Tricat Vaccine",
        "Day 90: Tricat Booster",
        "Day 95: Anti-Rabies Vaccine",
        "Day 125: Anti-Rabies Booster",
        "Kitten Deworming",
        "Weight & Growth Inspection",
      ],
    },
    {
      id: "cat-vacc",
      title: "Adult Cat Annual Vaccination",
      badge: "CAT CORE SHIELD",
      unit: "One-Time Visit",
      price: "₹1,999",
      originalPrice: "₹2,800",
      popular: false,
      summary: "Annual core protection for adult cats against respiratory & viral infections.",
      includes: [
        "Tricat Vaccine",
        "Anti-Rabies Vaccine",
        "Deworming Dose",
        "Basic Wellness Examination",
      ],
    },
  ];

  const standaloneServices = [
    { name: "Puppy Consultation (Home Visit)", price: "₹299" },
    { name: "Adult Dog Consultation (Home Visit)", price: "₹499" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVet) }}
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
          minHeight: "90vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,10,5,0.88) 0%, rgba(20,10,5,0.70) 50%, rgba(20,10,5,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(171,47,0,0.15)" }}
        />

        <div
          className="relative z-10 max-w-container-max mx-auto px-gutter"
          style={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "88px",
            paddingBottom: "48px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Column Content */}
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="text-xs text-white/70 flex items-center gap-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="text-primary-fixed font-bold">Veterinary Services & Packages</span>
              </nav>

              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,219,209,0.22)",
                  border: "1px solid rgba(255,219,209,0.45)",
                  color: "#ffdbd1",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="material-symbols-outlined text-[16px]">
                  clinical_notes
                </span>
                Licensed BVSc & MVSc Veterinarians
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Vet Doctor Home Visit & <br />
                <span style={{ color: "#ffb59f" }}>Vaccination Packages</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Protect your pet from clinic stress and cross-infections. Certified vet doctors delivering complete consultations, cold-chain vaccines, blood tests & prescriptions directly to your door in Delhi NCR & Lucknow.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Licensed BVSc Vets",
                  "Cold-Chain Vaccines",
                  "24/7 Helpline",
                  "Digital Prescriptions",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    <span className="material-symbols-outlined text-[14px]" style={{ color: "#ffb59f" }}>
                      verified
                    </span>
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/grooming"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Explore Grooming Packages →
                </Link>
              </div>
            </div>

            {/* Right Hero Booking Form */}
            <HeroBookingForm
              defaultService="Veterinary Consultation"
              formTitle="Book Vet Doctor Visit"
              formSubtitle="LICENSED VET AT YOUR DOORSTEP"
              offerBadge="🩺 Free consultation call with Senior Vet"
            />
          </div>
        </div>
      </section>

      {/* ── Integrated Veterinary & Vaccination Packages ── */}
      <section className="py-16 bg-surface" id="packages">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Vaccination & Healthcare Packages
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Comprehensive Veterinary Vaccination Packages
            </h2>
            <p className="text-on-surface-variant text-base">
              Transparent, flat-rate medical care protocols administered by registered doctors with booster tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vetPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-white border-2 border-primary shadow-xl"
                    : "bg-white border border-surface-variant/50 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-extrabold px-4 py-1 rounded-full shadow-md ${
                      pkg.popular
                        ? "bg-primary text-white"
                        : "bg-surface-container-high text-on-surface"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {pkg.unit}
                    </span>
                    <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-1">
                      {pkg.title}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-on-surface-variant line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      {pkg.summary}
                    </p>
                  </div>

                  <div className="border-t border-surface-variant/40 pt-4">
                    <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
                      Vaccine Inclusions & Schedule:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-on-surface-variant">
                      {pkg.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/book?service=Veterinary&package=${encodeURIComponent(pkg.title)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-all ${
                      pkg.popular
                        ? "bg-primary text-white hover:bg-primary-container shadow-md"
                        : "bg-surface-container text-on-surface hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    Book {pkg.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standalone Medical Services & Test Price List ── */}
      <section className="py-16 bg-surface-container/40">
        <div className="max-w-container-max mx-auto px-gutter space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Single Visit Price List
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Standalone Consultations & Diagnostic Tests
            </h2>
            <p className="text-on-surface-variant text-sm">
              Need a single vaccine, rapid virus test kit, or doctor home visit? Check our transparent price list below.
            </p>
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
            <div className="mt-6 text-center pt-4 border-t border-surface-variant/30">
              <Link
                href="/book?service=Veterinary%20Consultation"
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm inline-block shadow-md hover:bg-primary-container transition-all"
              >
                Book Vet Consultation Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pet Healthcare Tips & Doctor Advice ── */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Veterinary Advice & Health Tips
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Essential Health Guidance For Pet Parents
            </h2>
            <p className="text-on-surface-variant text-sm">
              Proven clinical advice from our senior veterinary surgeons to keep your furry family healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                01
              </div>
              <h3 className="font-bold text-lg text-on-surface">Cold-Chain Vaccine Safety</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Vaccines lose potency if exposed to room temperature. Always insist on cold-chain transport (2°C–8°C) to ensure full antibody production against Rabies & Parvovirus.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                02
              </div>
              <h3 className="font-bold text-lg text-on-surface">Early Puppy Deworming Protocol</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Puppies should be dewormed starting at 2 weeks of age and repeated every 2 weeks until 3 months. Intestinal worms can cause severe anemia and stunted growth.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                03
              </div>
              <h3 className="font-bold text-lg text-on-surface">Emergency Fever & Vomiting Triage</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Normal dog/cat temperature is 101°F–102.5°F. If fever exceeds 103°F or vomiting lasts more than 6 hours, avoid human medicines and schedule a rapid vet visit immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO (Answer Engine Optimization) FAQs Section ── */}
      <section className="py-16 bg-surface-container/40" id="faqs">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Answer Engine Optimized FAQs
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Frequently Asked Veterinary Questions
            </h2>
            <p className="text-on-surface-variant text-sm">
              Authoritative, direct answers to common pet medical questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {aeoFaqs.map((faq) => (
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
        </div>
      </section>

      {/* ── Interactive Magazine & Article Grid ── */}
      <InteractiveArticleGrid category="veterinary" />

      {/* ── Footer Banner ── */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-gutter text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Ready to Schedule Your Pet&apos;s Vet Doctor Home Visit?
          </h2>
          <p className="max-w-xl mx-auto text-white/90 text-sm">
            Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad) & Lucknow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/grooming"
              className="bg-white text-primary px-6 py-3 rounded-xl font-extrabold hover:bg-primary-fixed transition-all"
            >
              Explore Grooming Packages →
            </Link>
            <Link
              href="/lucknow/veterinary"
              className="bg-primary-container/40 text-white border border-white/40 px-6 py-3 rounded-xl font-extrabold hover:bg-white/20 transition-all"
            >
              Lucknow Vet Doctor Page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
