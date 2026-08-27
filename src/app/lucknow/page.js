import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";
import InteractiveArticleGrid from "@/components/InteractiveArticleGrid";

export const metadata = {
  title: "Doorstep Vet Doctor & Pet Grooming in Lucknow | The Paws Friend",
  description:
    "Top rated pet care at home in Lucknow (Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Ashiyana). Book certified vet doctor home visits, dog & cat grooming, and vaccinations at your doorstep. AEO & SEO optimized.",
  keywords: [
    "vet doctor home visit lucknow",
    "dog grooming at home lucknow",
    "doorstep pet care lucknow",
    "cat groomer gomti nagar lucknow",
    "pet vaccination at home lucknow",
    "veterinary doctor aliganj lucknow",
    "pet care services in lucknow",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/lucknow",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Doorstep Pet Care & Vet Visit in Lucknow | The Paws Friend",
    description: "Professional vet doctors and pet groomers visiting your home in Lucknow.",
    url: "https://thepawsfriend.com/lucknow",
    siteName: "The Paws Friend Lucknow",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lucknow Doorstep Pet Healthcare",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LucknowLandingPage() {
  const jsonLdLucknow = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Paws Friend - Lucknow Doorstep Pet Care",
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
      "Lucknow's premier doorstep veterinary consultation and dog/cat grooming home service.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "280",
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
        name: "Lucknow Pet Care Hub",
        item: "https://thepawsfriend.com/lucknow",
      },
    ],
  };

  const lucknowHubFaqs = [
    {
      q: "What pet services are available at home in Lucknow?",
      a: "In Lucknow, we provide **licensed vet doctor home visits**, **cold-chain puppy & cat vaccinations**, **home blood sample collection**, and **doorstep dog & cat grooming** (herbal baths, breed haircuts, anti-tick treatments).",
    },
    {
      q: "How fast can a vet doctor or groomer reach my home in Lucknow?",
      a: "Our mobile vet and grooming teams reach most Lucknow localities (Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Ashiyana) within **30 to 45 minutes** of booking.",
    },
    {
      q: "Are there any hidden travel charges for home visits in Lucknow?",
      a: "No. All prices listed for Lucknow vet consultations (from ₹299) and grooming packages (from ₹899) are **100% all-inclusive** with zero additional travel or visiting fees.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lucknowHubFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.replace(/\*\*/g, ""),
      },
    })),
  };

  const lucknowLocalities = [
    "Gomti Nagar",
    "Gomti Nagar Extension",
    "Indira Nagar",
    "Hazratganj",
    "Aliganj",
    "Ashiyana",
    "Mahanagar",
    "Rajajipuram",
    "Jankipuram",
    "Sushant Golf City",
    "Vrindavan Yojna",
    "Vikas Nagar",
    "Chinnhat",
    "Charbagh",
    "LDA Colony",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLucknow) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Lucknow Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "92vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,10,5,0.85) 0%, rgba(20,10,5,0.65) 50%, rgba(20,10,5,0.40) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(171,47,0,0.14)" }}
        />

        <div
          className="relative z-10 max-w-container-max mx-auto px-gutter"
          style={{
            minHeight: "92vh",
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
                <span className="text-primary-fixed font-bold">Lucknow Pet Care Hub</span>
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
                  location_on
                </span>
                #1 Doorstep Pet Healthcare in Lucknow
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Lucknow&apos;s Premier <br />
                <span style={{ color: "#ffb59f" }}>At-Home Pet Care & Vet Visit</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Professional vet doctors & certified pet groomers visiting homes across Lucknow. From Gomti Nagar to Aliganj & Hazratganj — we bring full veterinary care right to your doorstep.
              </p>

              {/* Connected Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/lucknow/veterinary"
                  className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-primary-container transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    stethoscope
                  </span>
                  Lucknow Vet Packages →
                </Link>
                <Link
                  href="/lucknow/grooming"
                  className="bg-white/15 text-white border border-white/30 px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/25 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    content_cut
                  </span>
                  Lucknow Grooming Packages →
                </Link>
              </div>
            </div>

            {/* Right Hero Booking Form pre-configured with defaultCity="Lucknow" */}
            <HeroBookingForm
              defaultCity="Lucknow"
              formTitle="Book Visit in Lucknow"
              formSubtitle="SPECIAL LUCKNOW INTRODUCTORY OFFERS"
              offerBadge="📍 Lucknow Doorstep Visit within 30 mins"
            />
          </div>
        </div>
      </section>

      {/* ── Lucknow Services Hub Cards ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Dedicated Portals
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Our Lucknow Specialized Services
            </h2>
            <p className="text-on-surface-variant text-base">
              Explore dedicated packages and pricing for Veterinary Doctor Visits or Doorstep Grooming in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Lucknow Veterinary */}
            <div className="bg-white p-8 rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    stethoscope
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                  Vet Doctor Home Visit & Vaccines in Lucknow
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Licensed BVSc vet doctors for general health checkups, puppy 8-shot schedules, cold-chain vaccines, and blood testing across Lucknow.
                </p>
                <div className="text-xs text-primary font-bold">
                  Packages from ₹1,999 · Consultations from ₹299
                </div>
              </div>

              <Link
                href="/lucknow/veterinary"
                className="w-full bg-primary text-white py-3.5 rounded-xl font-extrabold text-sm text-center block hover:bg-primary-container shadow-md transition-all"
              >
                Explore Lucknow Vet Packages →
              </Link>
            </div>

            {/* Card 2: Lucknow Grooming */}
            <div className="bg-white p-8 rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    content_cut
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                  Doorstep Pet Grooming Packages in Lucknow
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Warm baths, breed haircuts, anti-tick treatments, nail trimming, and cat dry grooming in your living room in Lucknow.
                </p>
                <div className="text-xs text-primary font-bold">
                  Packages from ₹899 · Full Grooming Spa ₹1,199
                </div>
              </div>

              <Link
                href="/lucknow/grooming"
                className="w-full bg-primary-fixed text-primary py-3.5 rounded-xl font-extrabold text-sm text-center block hover:bg-primary/20 transition-all"
              >
                Explore Lucknow Grooming Packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lucknow Localities Grid ── */}
      <section className="py-16 bg-surface-container/40">
        <div className="max-w-container-max mx-auto px-gutter space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Wide Coverage
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Lucknow Localities Covered
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {lucknowLocalities.map((loc) => (
              <div
                key={loc}
                className="bg-white p-4 rounded-xl border border-surface-variant/40 text-center font-bold text-xs text-on-surface hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                📍 {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Magazine & Article Grid ── */}
      <InteractiveArticleGrid city="Lucknow" />

      {/* Lucknow Hub AEO FAQs */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Lucknow Answer Engine FAQs
            </span>
            <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface">
              Lucknow Pet Care FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {lucknowHubFaqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface-container/30 p-6 rounded-2xl border border-surface-variant/40 space-y-2 shadow-sm"
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
    </>
  );
}
