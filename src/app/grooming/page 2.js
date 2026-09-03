import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";
import InteractiveArticleGrid from "@/components/InteractiveArticleGrid";

export const metadata = {
  title: "Doorstep Pet Grooming Packages & Pricing | Dog & Cat Bath & Haircut Delhi NCR & Lucknow",
  description:
    "Book certified pet grooming packages at home in Delhi, Gurugram, Noida, Ghaziabad, Faridabad & Lucknow. Full grooming ₹1199, Mini grooming ₹999, Anti-tick bath ₹899. AEO & SEO optimized.",
  keywords: [
    "pet grooming at home",
    "dog groomer near me",
    "home dog bath delhi ncr",
    "cat haircut doorstep lucknow",
    "doorstep pet grooming packages pricing",
    "full dog grooming cost india",
    "anti tick bath for dogs at home",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/grooming",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Doorstep Pet Grooming Packages & Pricing | The Paws Friend",
    description:
      "Stress-free professional dog & cat grooming packages at your home in Delhi NCR & Lucknow.",
    url: "https://thepawsfriend.com/grooming",
    siteName: "The Paws Friend",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Doorstep Pet Grooming Packages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doorstep Pet Grooming Packages | The Paws Friend",
    description: "Certified pet groomers visiting your home in Delhi NCR & Lucknow.",
    images: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function GroomingPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Doorstep Pet Grooming Services & Packages",
    provider: {
      "@type": "LocalBusiness",
      name: "The Paws Friend",
      telephone: "+91-9211338489",
      areaServed: [
        "Delhi",
        "Gurugram",
        "Noida",
        "Greater Noida",
        "Ghaziabad",
        "Faridabad",
        "Lucknow",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "620",
      },
    },
    areaServed: "Delhi NCR & Lucknow",
    description:
      "Professional dog & cat grooming, bathing, hair styling, nail trimming, dematting, and anti-tick spa at home.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grooming Packages Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Grooming Package (Dog & Cat)",
            description:
              "Bathing, trimming, haircut, dematting, nail clipping, ear/eye/dental cleaning, paw massage & perfume.",
          },
          price: "1199",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Grooming Package",
            description:
              "Bath or haircut touch-up, paw cleaning, dental cleaning, nail trimming & perfume.",
          },
          price: "999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathing & Blow Dry Package",
            description: "Herbal shampoo bath, dry bath option, blow dry, nail clip & perfume.",
          },
          price: "899",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trimming & Haircut Package",
            description: "Haircut, coat styling, combing & nail clipping.",
          },
          price: "899",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anti-Tick & Flea Defense Spa",
            description:
              "Medicated tick bath, manual tick extraction, skin soothing & parasite prevention.",
          },
          price: "899",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cat Elite Yearly Grooming Bundle",
            description: "6 Full Grooming sessions + Complete Cat Vaccination Package.",
          },
          price: "7799",
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
        name: "Grooming Packages",
        item: "https://thepawsfriend.com/grooming",
      },
    ],
  };

  // AEO (Answer Engine Optimization) Structured FAQs for Perplexity, ChatGPT & Google AI Overviews
  const aeoFaqs = [
    {
      q: "What is included in full dog grooming at home?",
      a: "Full dog grooming at home includes a **warm water herbal bath**, coat conditioning, **breed-specific haircut and trimming**, nail clipping and edge filing, **ear and eye cleaning**, dental hygiene spray, paw pad massage, and hypoallergenic pet perfume.",
    },
    {
      q: "How much does doorstep dog grooming cost in Delhi NCR and Lucknow?",
      a: "Doorstep pet grooming costs at The Paws Friend start at **₹899 for Bathing or Trimming**, **₹999 for Mini Grooming**, and **₹1,199 for Full Grooming Head-to-Tail Spa**. All prices include doorstep travel across Delhi, Gurgaon, Noida, Ghaziabad, Faridabad, and Lucknow.",
    },
    {
      q: "How often should long-haired dogs be groomed?",
      a: "Long-haired breeds like Shih Tzus, Golden Retrievers, and Poodles should receive **full grooming every 4 to 6 weeks**, with weekly coat brushing to prevent severe painful matting and trapped skin parasites.",
    },
    {
      q: "Is cat grooming at home safe and stress-free?",
      a: "Yes. Home cat grooming eliminates travel anxiety and cage stress. Our groomers use quiet dryers, waterless dry-shampoos when preferred, and gentle cat-handling techniques for trimming, de-matting, and nail clipping.",
    },
    {
      q: "How does an anti-tick bath treatment work for dogs?",
      a: "An anti-tick bath uses **medicated anti-parasitic shampoo** to kill ticks and fleas on contact, followed by manual tick extraction, skin-soothing conditioner, and a 30-day preventative coat recommendation.",
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

  const groomingPackages = [
    {
      id: "full-grooming",
      title: "Full Grooming (Head to Tail)",
      unit: "Per Session",
      price: "₹1,199",
      originalPrice: "₹2,499",
      badge: "MOST COMPLETE SPA",
      popular: true,
      summary:
        "Our signature spa session for dogs & cats — complete bathing, haircut, dental & coat care.",
      features: [
        "Warm Herbal Bath & Conditioning",
        "Breed-Specific Haircut & Styling",
        "Dematting & De-shedding Treatment",
        "Nail Clipping & Filing",
        "Dental & Mouth Cleansing",
        "Ear, Eye & Paw Pad Deep Clean",
        "Relieving Paw & Body Massage",
        "Hypoallergenic Pet Perfume",
      ],
    },
    {
      id: "mini-grooming",
      title: "Mini Grooming Maintenance",
      unit: "Per Session",
      price: "₹999",
      originalPrice: "₹1,899",
      badge: "MID-MONTH TOUCH UP",
      popular: false,
      summary: "A lighter touch-up session between full grooming visits.",
      features: [
        "Choice of Bath or Haircut Trim",
        "Dry Bath Option Available",
        "Paw Pad Cleansing",
        "Dental & Mouth Freshness",
        "Combing & Undercoat Brushing",
        "Nail Trimming",
        "Coat Conditioning & Perfume",
      ],
    },
    {
      id: "bathing",
      title: "Bathing & Blow Dry",
      unit: "Per Session",
      price: "₹899",
      originalPrice: "₹1,299",
      badge: "QUICK FRESHNESS",
      popular: false,
      summary: "A thorough shampoo bath and blow dry for a clean, sweet-smelling pet.",
      features: [
        "Shampooing & Rinse",
        "Dry Bath Option Available",
        "Professional Blow Drying",
        "Nail Clipping & Filing",
        "Brushing & Combing",
        "Pet Perfume Finish",
      ],
    },
    {
      id: "trimming",
      title: "Trimming & Haircut",
      unit: "Per Session",
      price: "₹899",
      originalPrice: "₹1,299",
      badge: "COAT MAINTENANCE",
      popular: false,
      summary: "Haircut and coat trimming focused visit to prevent matting and overgrown fur.",
      features: [
        "Full Breed Haircut / Scissors Trim",
        "Sanitary Area Trimming",
        "Coat Combing & Brushing",
        "Nail Clipping",
        "Pet Perfume Application",
      ],
    },
    {
      id: "tick-flea",
      title: "Anti-Tick & Flea Defense Spa",
      unit: "Per Session",
      price: "₹899",
      originalPrice: "₹1,499",
      badge: "PARASITE DEFENSE",
      popular: false,
      summary: "Medicated treatment bath to remove and prevent ticks, fleas, and skin irritation.",
      features: [
        "Specialized Medicated Anti-Tick Shampoo",
        "Thorough Manual Extraction of Ticks & Fleas",
        "Skin Soothing Conditioning",
        "Undercoat Pest Comb-out",
        "30-Day Anti-Tick Prevention Guidance",
      ],
    },
    {
      id: "cat-yearly",
      title: "Cat Elite Yearly Bundle",
      unit: "Per Year (All-Inclusive)",
      price: "₹7,799",
      originalPrice: "₹12,793",
      badge: "SAVE OVER ₹4,900",
      popular: true,
      summary: "A full year of grooming and core vaccination scheduled for your cat.",
      features: [
        "6 Full Grooming Sessions Across the Year",
        "Complete Cat Vaccination Package (Tricat & Anti Rabies)",
        "Annual Deworming",
        "Free Skin Inspection at Every Visit",
        "Priority Doorstep Slot Scheduling",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
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
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(171,47,0,0.12)" }}
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
            {/* Left Column - SEO H1 Content */}
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="text-xs text-white/70 flex items-center gap-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span className="text-primary-fixed font-bold">Grooming Packages & Pricing</span>
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
                  content_cut
                </span>
                Doorstep Pet Grooming in Delhi NCR & Lucknow
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Doorstep Pet Grooming <br />
                <span style={{ color: "#ffb59f" }}>Packages & Pricing</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Gentle, professional dog and cat grooming in your living room. Warm herbal baths, breed haircuts, tick removal, nail clipping & ear cleaning by certified groomers.
              </p>

              {/* City chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad", "Lucknow"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    <span className="material-symbols-outlined text-[14px]" style={{ color: "#ffb59f" }}>
                      location_on
                    </span>
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/veterinary"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Explore Veterinary Packages →
                </Link>
              </div>
            </div>

            {/* Right Hero Booking Form */}
            <HeroBookingForm
              defaultService="Grooming"
              formTitle="Book Doorstep Grooming"
              formSubtitle="SELECT YOUR DESIRED PACKAGE"
              offerBadge="✂️ Book now get FREE ear cleaning & nail trim"
            />
          </div>
        </div>
      </section>

      {/* ── Integrated Grooming Packages Grid ── */}
      <section className="py-16 bg-surface" id="packages">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              All Grooming Packages & Pricing
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Transparent Doorstep Grooming Pricing
            </h2>
            <p className="text-on-surface-variant text-base">
              Flat-rate packages with zero hidden travel charges across Delhi NCR & Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groomingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-white border-2 border-primary shadow-xl scale-[1.02]"
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
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-on-surface-variant">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/book?service=Grooming&package=${encodeURIComponent(pkg.title)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-all ${
                      pkg.popular
                        ? "bg-primary text-white hover:bg-primary-container shadow-md"
                        : "bg-surface-container text-on-surface hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    Book {pkg.title} Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pet Grooming & Coat Care Tips ── */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Pet Grooming Tips & Advice
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Pro Grooming Tips For Healthy Pets
            </h2>
            <p className="text-on-surface-variant text-sm">
              Keep your dog or cat&apos;s skin and coat healthy between professional grooming visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                01
              </div>
              <h3 className="font-bold text-lg text-on-surface">Monsoon Anti-Tick Prevention</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Humidity increases tick breeding in lawns and parks. Inspect your pet&apos;s paw pads, ears, and neck daily, and schedule an anti-tick bath at the first sign of pests.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                02
              </div>
              <h3 className="font-bold text-lg text-on-surface">Preventing Coat Matting</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Mats trap moisture and cause painful skin infections. Brush long-haired breeds daily with a slicker brush and book de-shedding treatments before severe mats form.
              </p>
            </div>

            <div className="bg-surface-container/30 p-7 rounded-2xl border border-surface-variant/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                03
              </div>
              <h3 className="font-bold text-lg text-on-surface">Safe Nail Trimming Interval</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Overgrown nails alter your pet&apos;s gait, leading to joint pain. Trim nails every 3 to 4 weeks, ensuring the sensitive quick (blood vessel) is never cut.
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
              Frequently Asked Pet Grooming Questions
            </h2>
            <p className="text-on-surface-variant text-sm">
              Clear, direct answers for pet parents and AI search engines.
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
      <InteractiveArticleGrid category="grooming" />

      {/* ── Footer Banner ── */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-gutter text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Ready to Give Your Pet a Spa Day at Home?
          </h2>
          <p className="max-w-xl mx-auto text-white/90 text-sm">
            Serving Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad) & Lucknow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/veterinary"
              className="bg-white text-primary px-6 py-3 rounded-xl font-extrabold hover:bg-primary-fixed transition-all"
            >
              Explore Veterinary Packages →
            </Link>
            <Link
              href="/lucknow/grooming"
              className="bg-primary-container/40 text-white border border-white/40 px-6 py-3 rounded-xl font-extrabold hover:bg-white/20 transition-all"
            >
              Lucknow Grooming Page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
