"use client";

import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function BlogPage() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    { name: "Dog Care", icon: "pets" },
    { name: "Cat Care", icon: "pets" },
    { name: "Nutrition", icon: "nutrition" },
    { name: "First Aid", icon: "health_and_safety" },
    { name: "Grooming", icon: "content_cut" },
    { name: "Training", icon: "psychology" }
  ];

  const articles = [
    {
      id: 1,
      title: "How to Keep Your Cat Healthy & Happy",
      category: "nutrition",
      date: "May 15, 2024",
      description: "Discover the top 5 secrets to maintaining your feline friend's emotional and physical wellbeing through proper diet and play.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJOBmsZEsVysvogzkAOyiawwL5elM1w4xd01X_sXpRzXQ-D0T4U6e9Kd58HeEaMhWOrsv3YXMZ8XmPy_Y3NcYVOS4K0gScTbPGqLSGetxZm8WMzST_pVn6rNvWHvgldVv-g4OH1badOoT9j5Zyu8h1ew3V614xO5uwEQVLAylRTpfQLZi7izySEVtEnxfbjsLznxlDW_PF6BLqEzbCBxh_lPBRvd1BLf0PoUpSh4pC8sBFbqlvv_YwzwZtqjd9OA_1ynrU1o_ibYi1"
    },
    {
      id: 2,
      title: "Signs Your Pet Needs Immediate Attention",
      category: "medical",
      date: "May 10, 2024",
      description: "Learn to recognize the subtle behavioral shifts that could indicate a medical emergency before it's too late.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTc_qqdq4WUwmtyr5djSU4eBEEKoZVA7ZmJf65NBy96lV7ra1O4JVh_r137hh2e0lCBXrdLtx6fHXaTr2oacB-c8Zrq5sDjcrDnaOREA-920l2ihOiOm6Yeq7xkuCKClSFW79f7qYfALc6a8nGiieCgrhT5Lg4r-LyJjnvgDqaY23Jcnp69fPigbRc8O6GDGQPnFHwN-jEVNPSAFpgKuHv84QzfLvSsbIqSyN1njJ3Juwjsj0zr1teMq8k2lksfe5ZmxPkoE09EhUp"
    },
    {
      id: 3,
      title: "Positive Reinforcement: A Beginner's Guide",
      category: "training",
      date: "May 05, 2024",
      description: "Why shouting doesn't work and how loving rewards can transform your pet's behavior effectively and permanently.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYCJ4-l-E8p-jZAbhSS06ERFJ3Doy-abJeldgduIh1_yqDdb_tKDnbQJlmbqOq8wqwVJhGwpE9pRgCGR5C3WkmnmldOBo8TxNwy6e5HaeaqIzdEEi9na3Bmczf2lAhpjzM8r4L1mFcdXm-VtFukEsvRbTTI3tKyGQ6XRrmImOAa4ceWZt30sbTersKHpKFtMQVDlqMQLW1IPEdyowT_wCm-TLa-_fJWUyQwnlyMHwJxZ4kLJr6R1GvpzaiPV_ZPjTU0G8ekWhpGjN6"
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesTag = activeTag === "all" || article.category === activeTag;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const result = await response.json();

      if (response.ok) {
        showToast(result.message || "Subscribed successfully!", "success");
        setEmail("");
      } else {
        showToast(result.error || "Failed to subscribe.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-container-max mx-auto px-gutter py-12">
      {/* Page Header & Featured Article Hero */}
      <section className="mb-section-padding">
        <div className="mb-10">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-4 text-on-background">Pet Care Tips & Expert Advice</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Stay updated with the latest tips, guides, and news for your pets. Professional advice from our experienced veterinary team.</p>
        </div>
        <div className="relative group overflow-hidden rounded-xl card-shadow bg-surface-container-lowest flex flex-col md:flex-row h-auto md:h-[500px]">
          <div className="md:w-3/5 h-64 md:h-full relative">
            <img 
              className="w-full h-full object-cover" 
              alt="A warm, cinematic wide shot of a professional female veterinarian kneeling in a sun-drenched modern living room, gently examining a happy golden retriever." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTHo-OvJc7Rb7Nr_Y9C6dRF5D-KrPbtM1h-I0Tnx4EYjvs7g_i8NnjX_C9fjFG69ITcW01QY-Hh26pCxzPFNLq-I1lyp550EymezPz1eI8EuhlQKH9dTT7SfFIiS7vjdzxs8mShUtLtDTO72VL5BrDX8f1VmHXNnvLP_pp0GM-Zm1qn5vvvneus_1zbPEczpO93NHblBbPWdB_u9G0eNL-aHKl54QG79R3-Kw7HNjUhmzFlfz7OZkMQWwLHoZ5VlcDUxPVLgKlFzzG"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-label-md font-label-md uppercase tracking-wide">Featured</div>
          </div>
          <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
            <span className="text-primary font-semibold mb-2">Essential Care • May 24, 2024</span>
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight group-hover:text-primary transition-colors">Complete Vaccination Schedule for Your Dogs</h2>
            <p className="text-on-surface-variant mb-8 line-clamp-3">Understanding the vaccination cycle is crucial for your pet's long-term health. Our comprehensive guide breaks down every shot your furry friend needs from puppyhood to seniority.</p>
            <Link className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="/blog">
              Read Full Article <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section (Asymmetric Grid) */}
      <section className="mb-section-padding">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-headline-md text-headline-md mb-2">Explore Categories</h3>
            <p className="text-on-surface-variant">Find specific advice tailored to your needs.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                const tagMap = { "Nutrition": "nutrition", "Training": "training", "First Aid": "medical" };
                const resolvedTag = tagMap[cat.name] || "all";
                setActiveTag(resolvedTag);
                document.getElementById("latest-articles")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center justify-center p-6 bg-surface-container rounded-xl hover:bg-primary hover:text-white transition-all group card-shadow focus:outline-none"
            >
              <span className="material-symbols-outlined text-4xl mb-3 text-primary group-hover:text-white">{cat.icon}</span>
              <span className="font-label-md text-label-md">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section id="latest-articles" className="mb-section-padding">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-headline-md text-headline-md">Latest Articles</h3>
          <button onClick={() => { setActiveTag("all"); setSearchQuery(""); }} className="text-primary font-semibold flex items-center gap-1 hover:underline">
            View All Posts <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 relative z-10">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-on-surface"
              placeholder="Search articles..."
            />
          </div>
          {/* Category Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All" },
              { id: "nutrition", label: "Nutrition" },
              { id: "medical", label: "Medical" },
              { id: "training", label: "Training" }
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id)}
                className={`px-5 py-2 rounded-full text-label-md font-label-md transition-all ${
                  activeTag === tag.id
                    ? "bg-primary text-on-primary"
                    : "bg-white border border-outline-variant text-on-surface hover:bg-primary-fixed"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-surface-container-lowest rounded-xl overflow-hidden card-shadow group border border-surface-container">
                <div className="relative h-48 overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={article.title}
                    src={article.img}
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-[12px] px-2 py-0.5 rounded-full font-label-md uppercase">
                      {article.category}
                    </span>
                    <span className="text-[12px] text-on-surface-variant">{article.date}</span>
                  </div>
                  <h4 className="font-headline-md text-[20px] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-on-surface-variant text-body-md line-clamp-2 mb-6">
                    {article.description}
                  </p>
                  <Link className="text-primary font-bold text-label-md inline-flex items-center gap-1" href="/blog">
                    Read More <span className="material-symbols-outlined text-[18px]">east</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl mb-2 text-primary">search_off</span>
            <p className="text-lg font-medium">No articles matched your criteria.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary rounded-2xl p-8 md:p-16 relative overflow-hidden mb-section-padding">
        <div className="absolute right-0 top-0 opacity-10 scale-150 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="font-headline-xl text-white mb-4">Stay Updated With Pet Care Tips?</h3>
          <p className="text-on-primary text-body-lg mb-8 opacity-90">Join our community of 10,000+ pet parents and get weekly expert advice delivered straight to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:bg-white focus:text-primary focus:outline-none transition-all font-body-md disabled:opacity-50"
              placeholder="Enter your email address"
              type="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface transition-all active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>
          <p className="text-white/60 text-[12px] mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
