"use client";

import { useState } from "react";
import Link from "next/link";
import ArticleReaderModal from "@/components/ArticleReaderModal";

export default function InteractiveArticleGrid({ category = "all", city = "" }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Article Database customized for Grooming, Veterinary & Lucknow
  const articles = [
    {
      id: "dog-grooming-guide-2026",
      category: "Grooming",
      city: city || "Delhi NCR & Lucknow",
      title: "Dog Grooming at Home in Delhi NCR & Lucknow — The Complete 2026 Guide",
      summary:
        "Discover why doorstep grooming is 90% less stressful for dogs and cats. Complete guide to warm baths, breed haircuts, anti-tick treatments, and coat care.",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80",
      author: "Rajesh Kumar (Master Pet Groomer)",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      date: "August 24, 2026",
      readTime: "6 min read",
      rating: "4.9",
      featured: true,
      takeaways: [
        "Doorstep grooming eliminates carrier and travel anxiety for pets.",
        "Monsoon anti-tick baths prevent severe blood-parasite infections.",
        "Hypoallergenic organic shampoos protect your pet's natural skin pH.",
      ],
      content: [
        "Professional pet grooming at home has become the preferred choice for thousands of pet parents across Delhi NCR and Lucknow. Unlike traditional salons where dogs wait in cages around unfamiliar barking animals, home grooming allows your pet to remain in their safe environment.",
        "Our certified groomers bring warm water bath setups, high-velocity blow dryers, sterilized scissors, and organic shampoos straight to your home. From breed-specific styling to sanitary area care and claw trimming, every step is executed with gentle, stress-free care.",
      ],
    },
    {
      id: "puppy-vaccination-schedule-guide",
      category: "Veterinary",
      city: city || "Delhi NCR & Lucknow",
      title: "Complete 8-Shot Puppy Vaccination Schedule Explained by Vets",
      summary:
        "A week-by-week guide to mandatory puppy vaccines from Day 35 Puppy DP to Day 120 Kennel Cough & Anti-Rabies boosters.",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Ananya Sharma, BVSc & AH",
      authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80",
      date: "August 22, 2026",
      readTime: "8 min read",
      rating: "5.0",
      featured: false,
      takeaways: [
        "Puppy DP at day 35 protects against deadly Parvovirus & Distemper.",
        "DHPPiL 9-in-1 requires a mandatory booster 21 days after first dose.",
        "Cold-chain transport (2°C–8°C) is mandatory for vaccine potency.",
      ],
      content: [
        "Vaccinating your puppy on exact schedule is the single most critical step in safeguarding their life. In India, viral diseases like Parvovirus and Canine Distemper spread easily through contaminated soil and water.",
        "Our at-home veterinary service ensures cold-chain maintenance from clinic refrigerators to your living room. Doctors track booster dates digitally so you never miss a dose.",
      ],
    },
    {
      id: "monsoon-tick-flea-prevention",
      category: "Grooming",
      city: city || "Delhi NCR & Lucknow",
      title: "Monsoon Anti-Tick & Flea Defense: How to Protect Your Pet at Home",
      summary:
        "Humidity during monsoons causes tick surges. Learn how medicated baths and manual tick extraction keep your pet safe.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1000&q=80",
      author: "Pooja Verma (Skin & Coat Specialist)",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      date: "August 20, 2026",
      readTime: "5 min read",
      rating: "4.8",
      featured: false,
      takeaways: [
        "Ticks hide between paw pads, under collars, and inside ear flaps.",
        "Medicated shampoos kill ticks on contact while soothing inflamed skin.",
        "Monthly spot-on treatments prevent re-infestation.",
      ],
      content: [
        "Monsoon and summer humidity in North India lead to a massive spike in tick infestation. Ticks transmit dangerous diseases like Babesiosis and Ehrlichiosis (Tick Fever).",
        "Our Anti-Tick Spa includes a specialized medicated bath, meticulous manual extraction, skin conditioning, and expert advice on environmental tick control.",
      ],
    },
    {
      id: "cat-grooming-secrets-stressfree",
      category: "Grooming",
      city: city || "Lucknow & Delhi NCR",
      title: "Cat Grooming Secrets: How to Groom Anxious Cats Without Stress",
      summary:
        "Persian & Indie cat grooming at home. Waterless dry baths, de-matting techniques, and nail trimming tips for cat parents.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80",
      author: "Sneha Roy (Feline Behaviourist)",
      authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      date: "August 18, 2026",
      readTime: "6 min read",
      rating: "4.9",
      featured: false,
      takeaways: [
        "Waterless dry baths prevent water panic in sensitive cats.",
        "De-matting prevents painful hairballs and skin pulling.",
        "Quiet dryers keep cats calm throughout the session.",
      ],
      content: [
        "Cats are notoriously territorial and sensitive to unfamiliar environments. Taking a cat in a carrier to a busy salon often leads to severe stress, scratching, or panting.",
        "Our cat grooming specialists use waterless foam shampoos when appropriate, quiet low-noise blowers, and gentle towel wraps to groom cats in the comfort of their home.",
      ],
    },
    {
      id: "pet-fever-emergency-triage",
      category: "Veterinary",
      city: city || "Delhi NCR & Lucknow",
      title: "Recognizing Pet Fever & Dehydration: Vet First-Aid Triage Guide",
      summary:
        "Normal vs dangerous pet body temperature. What to do if your dog or cat experiences fever, lethargy, or vomiting.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Vikramaditya Singh, MVSc",
      authorAvatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
      date: "August 15, 2026",
      readTime: "7 min read",
      rating: "4.9",
      featured: false,
      takeaways: [
        "Normal pet temperature ranges from 101°F to 102.5°F.",
        "Never give human paracetamol or crocin — it causes liver failure in pets.",
        "Immediate vet dispatch is recommended for fever above 103°F.",
      ],
      content: [
        "A pet's normal body temperature is higher than humans, resting between 101°F and 102.5°F. A rectal thermometer reading above 103°F indicates a fever requiring medical diagnosis.",
        "If your pet exhibits warm dry ears, lethargy, loss of appetite, or vomiting, avoid home remedies and contact our 24/7 emergency veterinary team.",
      ],
    },
    {
      id: "lucknow-doorstep-pet-care-revolution",
      category: "Lucknow",
      city: "Lucknow",
      title: "Doorstep Pet Healthcare in Lucknow — Gomti Nagar, Aliganj & Hazratganj",
      summary:
        "Lucknow pet parents now have 100% access to certified vet doctors and doorstep grooming spa visits right at their home.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80",
      author: "Team Paws Friend Lucknow",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      date: "August 12, 2026",
      readTime: "4 min read",
      rating: "5.0",
      featured: false,
      takeaways: [
        "Full coverage across all major Lucknow sectors within 30-45 mins.",
        "Flat-rate packages with zero extra travel charges in Lucknow.",
        "Cold-chain vaccines & sterile grooming equipment at home.",
      ],
      content: [
        "We are proud to serve pet parents across Lucknow, from Gomti Nagar to Indira Nagar, Aliganj, Hazratganj, Ashiyana, and Rajajipuram.",
        "Our mobile teams carry full diagnostic, medical, and salon kits, bringing world-class pet care directly to your doorstep.",
      ],
    },
  ];

  // Filter articles based on category prop
  const filteredArticles =
    category === "all"
      ? articles
      : articles.filter(
          (a) =>
            a.category.toLowerCase() === category.toLowerCase() ||
            (category === "lucknow" && a.city.includes("Lucknow"))
        );

  const featuredArticle =
    filteredArticles.find((a) => a.featured) || filteredArticles[0] || articles[0];

  const gridArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id);

  return (
    <>
      {/* ── Magazine Section Header ── */}
      <section className="py-12 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-surface-variant/40 pb-6">
            <div>
              <span className="text-primary font-extrabold text-xs tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full inline-block mb-2">
                {category.toUpperCase()} ARTICLES & PET CARE GUIDES
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-on-surface">
                {city ? `${city} Pet Healthcare & Grooming Journal` : "Pet Care Knowledge Hub"}
              </h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Expert vet advice, grooming tutorials, vaccination timelines, and health guides.
              </p>
            </div>
            <div className="text-xs text-on-surface-variant font-bold">
              Showing {filteredArticles.length} Verified Articles
            </div>
          </div>

          {/* ── Featured Spotlight Article Card (Hero Magazine Card) ── */}
          {featuredArticle && (
            <div
              onClick={() => setSelectedArticle(featuredArticle)}
              className="group bg-white rounded-3xl border border-surface-variant/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Left */}
              <div className="lg:col-span-7 relative min-h-[320px] overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                  FEATURED ARTICLE
                </div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <span className="bg-primary/10 px-2.5 py-0.5 rounded-md">
                      {featuredArticle.category}
                    </span>
                    <span>• {featuredArticle.readTime}</span>
                  </div>

                  <h3 className="font-headline-md text-2xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <img
                      src={featuredArticle.authorAvatar}
                      alt={featuredArticle.author}
                      className="w-7 h-7 rounded-full object-cover border border-primary/30"
                    />
                    <span className="font-bold text-on-surface">{featuredArticle.author}</span>
                  </div>

                  <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-extrabold group-hover:bg-primary-container transition-all flex items-center gap-1">
                    Read Article →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Main Layout: Articles Grid + Sticky Sidebar Widget ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Articles Grid (Col 1 to 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-3xl border border-surface-variant/40 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-on-surface text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                          <span>{article.rating}</span>
                        </div>
                      </div>

                      <h4 className="font-headline-md text-base font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>

                      <p className="text-on-surface-variant text-xs line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-4 mt-2 border-t border-surface-variant/30 flex items-center justify-between text-xs">
                    <span className="text-primary font-bold">{article.readTime}</span>
                    <span className="text-primary font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Right Sidebar Widget (Col 9 to 12) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Sticky Reservation Widget */}
              <div className="sticky top-28 bg-gradient-to-b from-surface-container to-white p-7 rounded-3xl border border-surface-variant/50 shadow-lg space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-extrabold">
                  <span className="material-symbols-outlined text-[28px]">
                    calendar_today
                  </span>
                </div>

                <div>
                  <span className="text-primary text-xs font-extrabold tracking-wider uppercase">
                    Doorstep Booking
                  </span>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mt-1">
                    Reserve A Doorstep Slot
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Professional at-home grooming & vet doctor visits across Delhi NCR & Lucknow.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/book"
                    className="w-full bg-primary text-white py-3.5 rounded-xl font-extrabold text-xs text-center block shadow-md hover:bg-primary-container transition-all active:scale-95"
                  >
                    Book Home Visit Now ✦
                  </Link>

                  <button
                    onClick={() => window.open("https://wa.me/919211338489", "_blank")}
                    className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </button>
                </div>

                <div className="pt-2 border-t border-surface-variant/40 flex items-center justify-between text-xs text-on-surface-variant font-medium">
                  <span>Emergency 24/7 Helpline:</span>
                  <a href="tel:+919211338489" className="text-primary font-bold hover:underline">
                    +91 9211338489
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Reader Full Modal */}
      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}
