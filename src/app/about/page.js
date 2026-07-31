"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function AboutPage() {

  useEffect(() => {
    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance
        gsap.fromTo(
          ".gsap-about-hero-left > *",
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.15, ease: "power3.out" }
        );
        gsap.fromTo(
          ".gsap-about-hero-right",
          { opacity: 0, scale: 0.94, x: 40 },
          { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: "back.out(1.5)", delay: 0.3 }
        );

        // Alternating sections — slide in from left or right
        document.querySelectorAll(".gsap-section-img-left").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -60 },
            {
              opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" },
            }
          );
        });
        document.querySelectorAll(".gsap-section-img-right").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 60 },
            {
              opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" },
            }
          );
        });
        document.querySelectorAll(".gsap-section-text").forEach((el) => {
          gsap.fromTo(
            el.querySelectorAll(":scope > *"),
            { opacity: 0, y: 28 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" },
            }
          );
        });

        // Stats counter strip
        gsap.fromTo(
          ".gsap-stat-item",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.4)",
            scrollTrigger: { trigger: ".gsap-stats-strip", start: "top 85%", toggleActions: "play none none none" },
          }
        );

        // Values cards
        gsap.fromTo(
          ".gsap-value-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: ".gsap-values-section", start: "top 82%", toggleActions: "play none none none" },
          }
        );
      } catch (err) {
        console.warn("GSAP failed:", err);
      }
    };
    init();
  }, []);

  const sections = [
    {
      tag: "Our Story",
      title: "Born from a Love for Pets",
      accent: "Love for Pets",
      body: "The Paws Friend began in 2014 when Dr. Neha Sharma, frustrated by the stress clinics caused her own pet, decided to bring veterinary care home. What started as weekend house calls with a single kit bag has grown into Delhi NCR's most trusted doorstep pet-care service — built on love, trust, and a relentless commitment to every animal we touch.",
      icon: "auto_stories",
      img: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?auto=format&fit=crop&w=800&q=80",
      imgAlt: "Vet caring for a dog at home",
      points: ["Founded with 2 veterinarians", "Grown to 30+ certified professionals", "Served 2,000+ families across Delhi NCR"],
      imgLeft: true,
    },
    {
      tag: "Our Mission",
      title: "Accessible Care, Every Doorstep",
      accent: "Every Doorstep",
      body: "Our mission is simple — make world-class veterinary care accessible to every pet parent, regardless of location or schedule. We eliminate the stress of clinic visits by bringing licensed professionals, sterile equipment, and genuine compassion directly to your door. Because your pet's comfort is our first prescription.",
      icon: "flag",
      img: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
      imgAlt: "Professional vet visiting home",
      points: ["Same-day doorstep appointments", "Transparent, flat-rate pricing", "No hidden charges — ever"],
      imgLeft: false,
    },
    {
      tag: "Our Vision",
      title: "A Healthier Future for Every Pet",
      accent: "Every Pet",
      body: "We envision an India where no pet suffers due to lack of access to healthcare. By 2030, we aim to be present in every major city — connecting India's finest veterinarians with pet families through technology and care. We are building the infrastructure for preventive pet health, one home visit at a time.",
      icon: "visibility",
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      imgAlt: "Happy dog with family",
      points: ["Pan-India expansion by 2030", "AI-powered preventive health plans", "Community wellness programs"],
      imgLeft: true,
    },
  ];

  const stats = [
    { value: "2,000+", label: "Happy Families" },
    { value: "30+", label: "Expert Vets" },
    { value: "4.9★", label: "Average Rating" },
    { value: "10+", label: "Years of Care" },
  ];

  const values = [
    { icon: "favorite", title: "Compassion First", desc: "Every interaction is guided by genuine love for animals and their families." },
    { icon: "verified_user", title: "Clinical Excellence", desc: "Our vets carry the same standards as the best hospitals — right to your home." },
    { icon: "handshake", title: "Radical Transparency", desc: "No surprise bills. No upsells. Just honest, upfront pricing every time." },
    { icon: "eco", title: "Sustainable Care", desc: "Eco-friendly practices and biodegradable supplies across all our services." },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative px-gutter py-section-padding max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="gsap-about-hero-left space-y-6 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-md text-label-md">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              Our Story · Our Passion · Your Trust
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-background leading-tight">
              We Treat Pets <br />
              <span className="text-primary">Like Family</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              The Paws Friend was founded with one belief — every pet deserves professional healthcare in the comfort of their own home. No clinics, no cages, no stress.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/services"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-lg"
                style={{ fontSize: "15px" }}
              >
                Explore Our Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-headline-md flex items-center gap-2 transition-all active:scale-95 border-2 border-primary text-primary hover:bg-primary-fixed"
                style={{ fontSize: "15px" }}
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="relative gsap-about-hero-right">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                className="w-full h-auto aspect-[4/3] object-cover"
                alt="Veterinarian caring for a golden retriever at home"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuPELIcwhZF_bVaWSNpFemcFKk3pEH-OHX19Yq5XgYYjtz0YDCpyKLZmbc5xUUrvOcnjATA3timQb98KfDoG9CwFArvLYyCfWZojN1dCpJX3aHqXOSf0iF86iTTnXFKk2A2jqiNLwUVR_0CyQuR2gA09sEIo5xw2-WN5e8hvUoyzxleJnfcsmPse7AOdStVcwTAujQvYA_WIqbKaa3pwgZP2VmlheBQvgc53Pa4KNxPGq-ehcU-01C_rYtGqenXsASPlxJ1h34qTVf"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-surface-container">
              <div className="bg-primary-fixed p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
              </div>
              <div>
                <p className="font-headline-md text-primary font-bold">10+ Years</p>
                <p className="font-label-md text-on-surface-variant">Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-primary py-12 gsap-stats-strip">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="gsap-stat-item text-center">
              <div className="text-on-primary font-headline-xl font-bold" style={{ fontSize: "2rem" }}>{s.value}</div>
              <div className="text-on-primary opacity-80 font-label-md mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Alternating Sections: Story / Mission / Vision ── */}
      {sections.map((sec, i) => (
        <section
          key={i}
          className={`py-section-padding ${i % 2 === 0 ? "bg-background" : "bg-surface-container-low"}`}
        >
          <div className="max-w-container-max mx-auto px-gutter">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!sec.imgLeft ? "lg:flex lg:flex-row-reverse" : ""}`}
              style={{ display: "grid" }}
            >
              {/* Image side */}
              <div
                className={sec.imgLeft ? "gsap-section-img-left" : "gsap-section-img-right"}
                style={{ order: sec.imgLeft ? 1 : 2 }}
              >
                <div className="relative">
                  {/* Decorative background blob */}
                  <div
                    className="absolute rounded-3xl"
                    style={{
                      inset: "-12px",
                      background: "linear-gradient(135deg, rgba(171,47,0,0.08) 0%, rgba(255,181,159,0.12) 100%)",
                      borderRadius: "28px",
                      zIndex: 0,
                    }}
                  />
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={sec.img}
                      alt={sec.imgAlt}
                      className="w-full object-cover"
                      style={{ aspectRatio: "4/3" }}
                    />
                    {/* Image overlay label */}
                    <div
                      className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(171,47,0,0.85)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>{sec.icon}</span>
                      {sec.tag}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div
                className="gsap-section-text space-y-5"
                style={{ order: sec.imgLeft ? 2 : 1 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>{sec.icon}</span>
                  {sec.tag}
                </span>

                <h2 className="font-headline-xl text-on-background leading-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                  {sec.title.replace(sec.accent, "").trim()}{" "}
                  <span className="text-primary">{sec.accent}</span>
                </h2>

                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  {sec.body}
                </p>

                {/* Bullet points */}
                <ul className="space-y-3 pt-2">
                  {sec.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined flex-shrink-0 mt-0.5"
                        style={{ color: "#ab2f00", fontSize: "20px", fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-on-surface-variant font-label-md">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative rule */}
                <div
                  className="w-16 h-1 rounded-full mt-4"
                  style={{ background: "linear-gradient(90deg, #ab2f00, #ffb59f)" }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Our Values ── */}
      <section className="py-section-padding bg-primary gsap-values-section">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-label-md text-label-md mb-4"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              What We Stand For
            </span>
            <h2 className="font-headline-xl text-on-primary leading-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="gsap-value-card p-6 rounded-2xl space-y-4"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255,255,255,0.16)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.10)"; }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                >
                  <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                </div>
                <h4 className="font-headline-md text-on-primary" style={{ fontSize: "18px" }}>{v.title}</h4>
                <p className="text-label-md text-on-primary opacity-75">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-section-padding bg-background">
        <div className="max-w-container-max mx-auto px-gutter text-center space-y-6">
          <h2 className="font-headline-xl text-on-background" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Ready to Experience the <span className="text-primary">Difference?</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Join thousands of pet parents who trust The Paws Friend for doorstep professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/book"
              className="bg-primary text-on-primary px-10 py-4 rounded-xl font-headline-md hover:bg-primary-container transition-all active:scale-95 shadow-lg"
              style={{ fontSize: "15px" }}
            >
              Book Your First Visit
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-headline-md hover:bg-primary-fixed transition-all active:scale-95"
              style={{ fontSize: "15px" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
