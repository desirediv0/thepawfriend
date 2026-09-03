import Link from "next/link";
import HeroBookingForm from "@/components/HeroBookingForm";

export const metadata = {
  title: "Doorstep Pet Healthcare & Grooming Services | Delhi NCR & Lucknow | The Paws Friend",
  description:
    "Complete doorstep pet healthcare, vet doctor home visits, and pet grooming in Delhi, Gurugram, Noida, Ghaziabad, Faridabad & Lucknow. Professional stress-free home care.",
  keywords: [
    "doorstep pet care delhi ncr",
    "vet doctor home visit near me",
    "pet grooming at home delhi gurgaon noida",
    "at home dog care lucknow",
    "pet vaccination doorstep",
  ],
  alternates: {
    canonical: "https://thepawsfriend.com/doorstep-pet-care",
  },
  openGraph: {
    title: "Doorstep Pet Healthcare Hub | The Paws Friend",
    description: "At-home veterinary visits, dog & cat grooming across Delhi NCR & Lucknow.",
    url: "https://thepawsfriend.com/doorstep-pet-care",
    siteName: "The Paws Friend",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Doorstep Pet Care Hub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function DoorstepPetCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Doorstep Pet Healthcare Services Hub",
    description: "Hub page connecting doorstep pet grooming and at-home veterinary consultations across Delhi NCR and Lucknow.",
    publisher: {
      "@type": "Organization",
      name: "The Paws Friend",
      url: "https://thepawsfriend.com",
    },
  };

  const faqs = [
    {
      q: "How do doorstep vet doctor visits work?",
      a: "Our certified veterinarian arrives at your home at the scheduled time with complete diagnostic equipment, medicines, and vaccines. They perform a thorough physical exam in your pet's comfortable home environment.",
    },
    {
      q: "What equipment do your pet groomers bring?",
      a: "Our groomers bring portable warm bath setups, professional dryer units, sterilized scissors, organic shampoos, nail clippers, and anti-tick treatments. All we need from you is electricity and water access.",
    },
    {
      q: "Which cities are covered by The Paws Friend?",
      a: "We currently provide full doorstep vet visits and grooming services across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad, and Lucknow.",
    },
    {
      q: "Are your vet doctors licensed and experienced?",
      a: "Yes, 100% of our veterinarians hold registered BVSc / MVSc degrees with years of clinical experience in small animal medicine.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "90vh",
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
            {/* Left Column */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,219,209,0.2)",
                  border: "1px solid rgba(255,219,209,0.45)",
                  color: "#ffdbd1",
                }}
              >
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                Complete Doorstep Pet Healthcare Hub
              </div>

              <h1
                className="font-headline-xl leading-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Doorstep Pet Care & <br />
                <span style={{ color: "#ffb59f" }}>Veterinary Hub</span>
              </h1>

              <p
                className="text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Discover our dedicated grooming and veterinary services tailored for Delhi NCR & Lucknow pet owners. Quick home appointments with zero stress.
              </p>

              {/* Direct links to Grooming & Veterinary */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/grooming"
                  className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-primary-container transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    content_cut
                  </span>
                  Grooming Page →
                </Link>
                <Link
                  href="/veterinary"
                  className="bg-white/15 text-white border border-white/30 px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/25 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    stethoscope
                  </span>
                  Veterinary Page →
                </Link>
                <Link
                  href="/lucknow"
                  className="bg-primary-fixed text-primary px-5 py-3 rounded-xl font-extrabold text-sm hover:bg-white transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    location_on
                  </span>
                  Lucknow Hub →
                </Link>
              </div>
            </div>

            {/* Right Hero Booking Form */}
            <HeroBookingForm
              formTitle="Book Doorstep Visit"
              formSubtitle="DELHI NCR & LUCKNOW COVERAGE"
              offerBadge="🌟 Free expert call & consultation"
            />
          </div>
        </div>
      </section>

      {/* ── Connected Services Overview ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Our Connected Portals
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Explore Our Specialized Service Pages
            </h2>
            <p className="text-on-surface-variant text-base">
              Each dedicated page features specialized packages, certified professionals, and localized booking forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Grooming */}
            <div className="bg-white p-8 rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    content_cut
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">
                  Doorstep Pet Grooming
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Baths, breed haircuts, tick removal, nail clipping & ear cleaning in the stress-free environment of your home.
                </p>
              </div>
              <Link
                href="/grooming"
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs text-center block hover:bg-primary-container transition-all"
              >
                Visit Grooming Page →
              </Link>
            </div>

            {/* Card 2: Veterinary */}
            <div className="bg-white p-8 rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    stethoscope
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">
                  Vet Doctor Home Visit
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Licensed veterinarians for general health checkups, cold-chain vaccinations, blood sampling & prescriptions.
                </p>
              </div>
              <Link
                href="/veterinary"
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs text-center block hover:bg-primary-container transition-all"
              >
                Visit Veterinary Page →
              </Link>
            </div>

            {/* Card 3: Lucknow Hub */}
            <div className="bg-white p-8 rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    location_on
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">
                  Lucknow Pet Care Hub
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Dedicated doorstep services across Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Ashiyana & Rajajipuram.
                </p>
              </div>
              <Link
                href="/lucknow"
                className="w-full bg-primary-fixed text-primary py-3 rounded-xl font-extrabold text-xs text-center block hover:bg-primary/20 transition-all"
              >
                Visit Lucknow Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs Section ── */}
      <section className="py-16 bg-surface-container/40">
        <div className="max-w-container-max mx-auto px-gutter space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
              Got Questions About Home Pet Care?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-2xl border border-surface-variant/40 space-y-2 shadow-sm"
              >
                <h3 className="font-headline-md text-lg font-bold text-on-surface">
                  {faq.q}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
