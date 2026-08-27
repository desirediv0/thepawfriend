import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";
import InteractiveArticleGrid from "@/components/InteractiveArticleGrid";

export const metadata = {
  title: "Doorstep Pet Grooming Packages & Pricing in Lucknow | Gomti Nagar Aliganj",
  description:
    "Book at-home dog and cat grooming packages in Lucknow (Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Ashiyana). Full grooming ₹1199, mini grooming ₹999, anti-tick bath ₹899. AEO & SEO optimized.",
  keywords: [
    "dog grooming packages lucknow",
    "cat groomer gomti nagar lucknow",
    "pet haircut lucknow aliganj",
    "doorstep dog bath indira nagar",
    "anti tick bath cost lucknow",
    "at home pet grooming pricing lucknow",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/lucknow/grooming",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Lucknow Doorstep Pet Grooming Packages & Pricing | The Paws Friend",
    description: "At-home grooming packages for dogs & cats across all Lucknow localities.",
    url: "https://thepawsfriend.com/lucknow/grooming",
    siteName: "The Paws Friend Lucknow",
    locale: "en_IN",
    type: "website",
  },
};

export default function LucknowGroomingPage() {
  const jsonLdGrooming = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lucknow Doorstep Pet Grooming Packages",
    provider: {
      "@type": "LocalBusiness",
      name: "The Paws Friend Lucknow",
      telephone: "+91-9211338489",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
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
    ],
    description:
      "Professional dog & cat grooming, warm herbal bathing, haircut styling, and anti-tick spa in Lucknow.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lucknow Grooming Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Grooming Package (Lucknow)",
            description: "Bathing, haircut, dematting, nail clipping, ear/eye/dental cleaning & perfume.",
          },
          price: "1199",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Grooming Maintenance (Lucknow)",
            description: "Bath or haircut touch-up, paw cleaning, dental cleaning & nail trim.",
          },
          price: "999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anti-Tick & Flea Defense Spa (Lucknow)",
            description: "Medicated tick bath, manual tick extraction & pest prevention.",
          },
          price: "899",
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
        name: "Lucknow Grooming",
        item: "https://thepawsfriend.com/lucknow/grooming",
      },
    ],
  };

  const lucknowAeoFaqs = [
    {
      q: "How much does doorstep dog grooming cost in Lucknow?",
      a: "Doorstep pet grooming in Lucknow costs **₹899 for Bathing or Trimming**, **₹999 for Mini Grooming**, and **₹1,199 for Full Grooming Spa**. All packages include zero travel charges across Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, and Ashiyana.",
    },
    {
      q: "What equipment do your groomers bring to my house in Lucknow?",
      a: "Our Lucknow groomers bring portable warm water bath setups, high-velocity dryers, sterilized scissors, hypoallergenic shampoos, nail clippers, and anti-tick solutions. All we need is electricity and water access.",
    },
    {
      q: "Which areas in Lucknow are eligible for same-day pet grooming?",
      a: "Same-day pet grooming is available across **Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Ashiyana, Mahanagar, Rajajipuram, Jankipuram, Sushant Golf City, and Vrindavan Yojna**.",
    },
    {
      q: "Is doorstep cat grooming available in Lucknow?",
      a: "Yes! We provide specialized at-home cat grooming in Lucknow including waterless dry baths, gentle coat dematting, nail trimming, and ear cleaning designed to keep cats calm.",
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

  const lucknowPackages = [
    {
      title: "Full Grooming (Head to Tail)",
      price: "₹1,199",
      originalPrice: "₹2,499",
      badge: "MOST POPULAR IN LUCKNOW",
      popular: true,
      summary: "Complete spa-level grooming session brought right to your living room in Lucknow.",
      features: [
        "Warm Water Herbal Bath & Blow Dry",
        "Breed-Specific Haircut & Trimming",
        "Nail Clipping & Edge Filing",
        "Ear Cleaning & Wax Removal",
        "Teeth & Mouth Cleansing",
        "Coat Dematting & De-shedding",
        "Paw Pad Massage & Perfume",
      ],
    },
    {
      title: "Mini Grooming Maintenance",
      price: "₹999",
      originalPrice: "₹1,899",
      badge: "QUICK REFRESH",
      popular: false,
      summary: "Ideal touch-up session between full grooming visits in Lucknow.",
      features: [
        "Choice of Bath or Haircut Trim",
        "Dry Bath Option Available",
        "Nail Trimming",
        "Dental Cleansing",
        "Paw Cleaning & Perfume",
      ],
    },
    {
      title: "Anti-Tick & Flea Defense Spa",
      price: "₹899",
      originalPrice: "₹1,499",
      badge: "SEASONAL PROTECT",
      popular: false,
      summary: "Medicated tick bath and extraction for Lucknow monsoons & summers.",
      features: [
        "Medicated Anti-Tick Shampoo Bath",
        "Manual Tick Extraction",
        "Skin Soothing Conditioning",
        "Pest Comb Out & Prevention Advice",
      ],
    },
    {
      title: "Cat Elite Yearly Bundle",
      price: "₹7,799",
      originalPrice: "₹12,793",
      badge: "SAVE OVER ₹4,900",
      popular: true,
      summary: "Full year of grooming and core vaccination for cats in Lucknow.",
      features: [
        "6 Full Grooming Sessions Across the Year",
        "Complete Cat Vaccination Package (Tricat & Anti Rabies)",
        "Annual Deworming",
        "Free Skin Inspection at Every Visit",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGrooming) }}
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
          backgroundImage: `url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80')`,
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
                <span className="text-primary-fixed font-bold">Grooming Packages</span>
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
                  content_cut
                </span>
                Lucknow Doorstep Pet Grooming Packages
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Doorstep Grooming Packages <br />
                <span style={{ color: "#ffb59f" }}>In Lucknow</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                At-home grooming packages across Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Ashiyana, Rajajipuram & all Lucknow localities. Zero travel stress!
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Gomti Nagar", "Indira Nagar", "Aliganj", "Hazratganj", "Ashiyana"].map((loc) => (
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
                  href="/lucknow/veterinary"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all inline-block"
                >
                  Need Lucknow Vet Visit? →
                </Link>
              </div>
            </div>

            {/* Right Form pre-selected for Lucknow + Grooming */}
            <HeroBookingForm
              defaultCity="Lucknow"
              defaultService="Grooming"
              formTitle="Book Lucknow Grooming"
              formSubtitle="SPECIAL LUCKNOW GROOMING OFFERS"
              offerBadge="✂️ Free Nail Trimming & Ear Cleaning in Lucknow"
            />
          </div>
        </div>
      </section>

      {/* Lucknow Packages Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Grooming Rates
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Grooming Packages & Pricing in Lucknow
            </h2>
            <p className="text-on-surface-variant text-sm">
              All-inclusive doorstep grooming packages with zero travel fees across Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lucknowPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative rounded-3xl p-6 flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-white border-2 border-primary shadow-xl"
                    : "bg-white border border-surface-variant/40 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <span className="bg-primary/10 text-primary text-[11px] font-extrabold px-3 py-1 rounded-full inline-block">
                    {pkg.badge}
                  </span>
                  <h3 className="font-bold text-lg text-on-surface">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-primary">{pkg.price}</span>
                    <span className="text-xs text-on-surface-variant line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{pkg.summary}</p>
                  <ul className="space-y-2 text-xs text-on-surface-variant pt-2 border-t border-surface-variant/30">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[15px]">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href={`/book?city=Lucknow&service=Grooming&package=${encodeURIComponent(pkg.title)}`}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs text-center block hover:bg-primary-container transition-all"
                  >
                    Book {pkg.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lucknow Grooming Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Grooming Advice
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Grooming Tips For Lucknow Pet Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                01
              </div>
              <h3 className="font-bold text-lg text-on-surface">Monsoon Anti-Tick Care</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Humidity in UP monsoons triggers tick infestations. Schedule a medicated anti-tick bath if your pet scratches frequently.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                02
              </div>
              <h3 className="font-bold text-lg text-on-surface">Summer Haircuts for Dogs</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Trim long coats during hot Lucknow summers to keep pets cool, but avoid shaving double-coated breeds like Huskies or Labradors completely.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                03
              </div>
              <h3 className="font-bold text-lg text-on-surface">Stress-Free Cat Grooming</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Cats hate car journeys to grooming parlors. At-home grooming keeps cats in their safe environment, reducing stress by 90%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Magazine & Article Grid ── */}
      <InteractiveArticleGrid category="grooming" city="Lucknow" />

      {/* Lucknow AEO FAQs */}
      <section className="py-16 bg-surface-container/40" id="faqs">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow AEO FAQs
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Lucknow Pet Grooming FAQs
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
