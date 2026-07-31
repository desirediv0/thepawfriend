"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/context/ToastContext";

function Counter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericTarget = parseInt(target.replace(/[^0-9.]/g, ""), 10);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const { showToast } = useToast();
  
  // State for Hero Quick Callback Form
  const [queryPetType, setQueryPetType] = useState("");
  const [queryService, setQueryService] = useState("");
  const [queryPetName, setQueryPetName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryPhone, setQueryPhone] = useState("");
  const [queryMessage, setQueryMessage] = useState("");
  const [queryLoading, setQueryLoading] = useState(false);

  // GSAP Animations
  useEffect(() => {
    const initGsap = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Hero timeline animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".gsap-hero-item", 
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
        );
        tl.fromTo(".gsap-hero-form",
          { opacity: 0, scale: 0.93, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        );

        // Stats section scroll animation
        gsap.fromTo(".gsap-stat-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".gsap-stats-section",
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );

        // Core Services section scroll animation
        gsap.fromTo(".gsap-service-card",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".gsap-services-section",
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );

        // Why Choose Us list items scroll animation
        gsap.fromTo(".gsap-choose-item",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".gsap-choose-section",
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      } catch (err) {
        console.warn("GSAP loading failed:", err);
      }
    };

    initGsap();
  }, []);

  const handleQuickQuery = async (e) => {
    e.preventDefault();
    if (!queryPhone || queryPhone.length < 10) {
      showToast("Please enter a valid 10-digit mobile number.", "error");
      return;
    }
    setQueryLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ownerName: queryName,
          petName: queryPetName || "My Pet",
          petType: queryPetType || "Dog",
          service: queryService || "General Consultation",
          phone: queryPhone,
          email: queryEmail || "support@thepawsfriend.in",
          address: "Delhi NCR",
          query: `Service: ${queryService || 'N/A'}\nPet Name: ${queryPetName || 'N/A'}\nPet Type: ${queryPetType || 'N/A'}\nOwner Name: ${queryName}\nEmail: ${queryEmail}\nPhone: +91 ${queryPhone}${queryMessage ? '\nSpecial Requests: ' + queryMessage : ''}`
        })
      });

      const result = await response.json();

      if (response.ok) {
        showToast("Appointment booked successfully! Our team will contact you shortly.", "success");
        setQueryPetType("");
        setQueryService("");
        setQueryPetName("");
        setQueryName("");
        setQueryEmail("");
        setQueryPhone("");
        setQueryMessage("");
      } else {
        showToast(result.error || "Failed to submit appointment.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setQueryLoading(false);
    }
  };

  return (
    <>
      {/* ── Hero Section ── Full-width bg image + left content + right glass form */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Dark overlay gradient — left darker, right lighter so form is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,10,5,0.78) 0%, rgba(20,10,5,0.55) 50%, rgba(20,10,5,0.30) 100%)",
          }}
        />
        {/* Subtle primary tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(171,47,0,0.10)" }}
        />

        <div className="relative z-10 max-w-container-max mx-auto px-gutter" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "88px", paddingBottom: "48px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

            {/* ── Left: Text Content ── */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="gsap-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-label-md text-label-md"
                style={{
                  background: "rgba(255,219,209,0.18)",
                  border: "1px solid rgba(255,219,209,0.40)",
                  color: "#ffdbd1",
                  backdropFilter: "blur(8px)",
                }}>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Professional Pet Care You Can Trust
              </div>

              {/* Headline */}
              <h1 className="gsap-hero-item font-headline-xl leading-tight"
                style={{
                  color: "#fff",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  lineHeight: 1.15,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.35), 0 12px 40px rgba(171,47,0,0.25)",
                }}>
                Professional Pet<br />
                Healthcare{" "}
                <span style={{ color: "#ffb59f", textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 6px 24px rgba(171,47,0,0.45), 0 0 40px rgba(255,181,159,0.20)" }}>At Your Doorstep</span>
              </h1>

              {/* Sub */}
              <p className="gsap-hero-item text-body-lg max-w-lg"
                style={{ color: "rgba(255,255,255,0.75)" }}>
                Expert veterinary care in the comfort of your home. From routine vaccinations to emergency consultations — we bring the clinic to you.
              </p>

              {/* Trust chips */}
              <div className="gsap-hero-item flex flex-wrap gap-2 pt-1">
                {[
                  { icon: "verified_user", label: "Licensed Vets" },
                  { icon: "health_and_safety", label: "Insured" },
                  { icon: "schedule", label: "Same-Day Visits" },
                  { icon: "vaccines", label: "US-Based Vaccination & Medicine" },
                ].map((t) => (
                  <span key={t.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-md font-label-md"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: "#fff",
                      backdropFilter: "blur(6px)",
                    }}>
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1", color: "#ffb59f" }}>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="gsap-hero-item flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/book"
                  className="bg-primary text-on-primary px-7 py-3.5 rounded-xl font-headline-md text-headline-md shadow-lg hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{ fontSize: "16px" }}
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  Book Appointment
                </Link>
                <button
                  onClick={() => window.open("https://wa.me/919211338489", "_blank")}
                  className="px-7 py-3.5 rounded-xl font-headline-md text-headline-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                    fontSize: "16px",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </button>
              </div>

              {/* Star rating */}
              <div className="gsap-hero-item flex items-center gap-3 pt-2">
                <div className="flex -space-x-2.5">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbk9yweuJOYJJsoofS1e2mwLP266cxGqsHr1HKD-DWvS-fKpuXjtX46HpG7mkCyMKyThaR1X4BZ6-S-pB-2WWFizSsw0JU9wXBleSM03gkgPacHgRWigSlZV9lAzP3S2-Gf9B1xFPIgfoQrLUPRBOy8Om3oOxp5YEfuBy7yUMshki_4_YtfO94MZfoi9iWnDW3_jiT_Xg10UI2mRRQ_Ix16HYd8XupO3IQyXuS73_Ribxjt70iAy7TJTt6TFqWF7b54cDE36nrQN_1",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBE36jkWFdRQY8xfwaQotoiRB4HwXi3yKyXfhzEf4uHHVY84oqCY5_KuHRAZbcW2269iCoNxXDsQbgTos59yX7J1aRqeJkPteHSvSA8fYfScE80kpPnrzbU-D1la7x_CB8MOE2NiHm-KjAdSCFcZgyFpAWhZX5ThBAL_gyTIP6WOdVmYDQF-Uh1LuBx6vJ7pC7MLIpqKfUETlAWvQd_0P412y9Zd-lXc_vtfxLaTdqW8x8weZxH2WHEGLDwpNznoEhxL1G1LTV_jYn6",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXyLVDi5f1YZJkg_30-r9zB0emdgtFFfL3EU87to1ia_4lpWws8slFrqVYm2sgYx4c6td03zDBVav2DW0GlSn88-IHovCEi4DK6pucMEdy6RvKlzkuYcTUGpIo3R2epxaMDLqqUbRSOlo1qlhVeTP0rVa_tTaS3Wf-1KmJost7kyFFp8iH8XWWKIfmls23bMBSFTZLmhxcKcLPD1D4-jH84ZkS9naqeO5NpcoVXbolzJYEC32YgYxO_2zo99SU-a4QeBvHGBCqqtUP",
                  ].map((url, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2" style={{ border: "2px solid rgba(255,255,255,0.5)", backgroundImage: `url('${url}')`, backgroundSize: "cover" }} />
                  ))}
                </div>
                <div>
                  <div className="flex" style={{ color: "#ffb59f" }}>
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="text-label-md" style={{ color: "rgba(255,255,255,0.70)" }}>
                    <span className="font-bold text-white">4.8</span>/5 · <Counter target="5200" suffix="+" /> Happy Pet Parents
                  </span>
                </div>
              </div>
            </div>

            {/* ── Right: Glassmorphism Form Card ── */}
            <div className="gsap-hero-form flex justify-end">
              <div
                className="w-full max-w-sm rounded-[1.75rem] p-7 space-y-5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(28px) saturate(160%)",
                  WebkitBackdropFilter: "blur(28px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                {/* Card header */}
                <div className="text-center">
                  <h3 className="font-headline-md text-center" style={{ color: "#fff", fontSize: "22px", fontWeight: 800, textTransform: "capitalize" }}>
                    Book Your Appointment
                  </h3>
                  <p className="text-label-md mt-1 text-center font-bold tracking-wider" style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", textTransform: "uppercase" }}>
                    PROFESSIONAL HOME VISITS - OFFERS ON TREATMENTS
                  </p>
                  
                  {/* Offer Pill */}
                  <div className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm" style={{ background: "linear-gradient(90deg, #ff4e50, #f9d423)", color: "#111" }}>
                    <span>🎉</span>
                    <span>Special Offers Available - Up to 30% OFF!</span>
                  </div>
                </div>

                <form onSubmit={handleQuickQuery} className="space-y-3 pt-2">
                  {/* Select Your Pet Dropdown */}
                  <div>
                    <label className="block text-xs font-bold mb-1 flex items-center gap-1" style={{ color: "#fff" }}>
                      <span className="material-symbols-outlined text-[15px]" style={{ color: "#ffb59f" }}>pets</span>
                      Select Your Pet:
                    </label>
                    <select
                      value={queryPetType}
                      onChange={(e) => setQueryPetType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all cursor-pointer font-medium"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        border: "1px solid rgba(255,255,255,0.30)",
                        color: "#fff",
                      }}
                    >
                      <option value="" style={{ color: "#000" }}>-- Select Your Pet --</option>
                      <option value="Dog" style={{ color: "#000" }}>Dog</option>
                      <option value="Cat" style={{ color: "#000" }}>Cat</option>
                      <option value="Other Pet" style={{ color: "#000" }}>Other Pet</option>
                    </select>
                  </div>

                  {/* Choose Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold mb-1 flex items-center gap-1" style={{ color: "#fff" }}>
                      <span className="material-symbols-outlined text-[15px]" style={{ color: "#ffb59f" }}>grade</span>
                      Choose Service:
                    </label>
                    <select
                      value={queryService}
                      onChange={(e) => setQueryService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl outline-none text-sm transition-all cursor-pointer font-medium"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        border: "1px solid rgba(255,255,255,0.30)",
                        color: "#fff",
                      }}
                    >
                      <option value="" style={{ color: "#000" }}>-- Select Your Service --</option>
                      <option value="Vet Consultation" style={{ color: "#000" }}>Vet Consultation</option>
                      <option value="Pet Grooming" style={{ color: "#000" }}>Pet Grooming</option>
                      <option value="Vaccinations" style={{ color: "#000" }}>Vaccinations</option>
                      <option value="Pet Training" style={{ color: "#000" }}>Pet Training</option>
                      <option value="Emergency Care" style={{ color: "#000" }}>Emergency Care</option>
                      <option value="Care Packages" style={{ color: "#000" }}>Care Packages</option>
                    </select>
                  </div>

                  {/* Pet Name & Your Name */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Pet Name *</label>
                      <input
                        required
                        type="text"
                        value={queryPetName}
                        onChange={(e) => setQueryPetName(e.target.value)}
                        placeholder="Your pet's name"
                        className="w-full px-3 py-2 rounded-xl outline-none text-xs transition-all"
                        style={{
                          background: "rgba(255,255,255,0.18)",
                          border: "1px solid rgba(255,255,255,0.30)",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Your Name *</label>
                      <input
                        required
                        type="text"
                        value={queryName}
                        onChange={(e) => setQueryName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3 py-2 rounded-xl outline-none text-xs transition-all"
                        style={{
                          background: "rgba(255,255,255,0.18)",
                          border: "1px solid rgba(255,255,255,0.30)",
                          color: "#fff",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Email Address *</label>
                    <input
                      required
                      type="email"
                      value={queryEmail}
                      onChange={(e) => setQueryEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        border: "1px solid rgba(255,255,255,0.30)",
                        color: "#fff",
                      }}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Mobile Number *</label>
                    <div className="flex gap-2">
                      <div
                        className="px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(255,255,255,0.22)",
                          border: "1px solid rgba(255,255,255,0.30)",
                          color: "#fff",
                        }}
                      >
                        +91
                      </div>
                      <input
                        required
                        type="tel"
                        maxLength={10}
                        value={queryPhone}
                        onChange={(e) => setQueryPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit number"
                        className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all"
                        style={{
                          background: "rgba(255,255,255,0.18)",
                          border: "1px solid rgba(255,255,255,0.30)",
                          color: "#fff",
                        }}
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>Special Requests</label>
                    <textarea
                      value={queryMessage}
                      onChange={(e) => setQueryMessage(e.target.value)}
                      placeholder="Tell us about any specific concerns or requirements..."
                      rows={2}
                      className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all resize-none"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        border: "1px solid rgba(255,255,255,0.30)",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={queryLoading}
                    className="w-full py-3.5 mt-2 rounded-xl font-extrabold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, #ab2f00 0%, #d43b00 100%)",
                      color: "#fff",
                      fontSize: "14px",
                      boxShadow: "0 4px 20px rgba(171,47,0,0.45)",
                    }}
                    onMouseOver={e => e.currentTarget.style.background = "#cf4516"}
                    onMouseOut={e => e.currentTarget.style.background = "linear-gradient(135deg, #ab2f00 0%, #d43b00 100%)"}
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {queryLoading ? "Booking..." : "Book Now & Save Up to 30% OFF ✦"}
                  </button>
                </form>

                <div className="flex items-center justify-center gap-1.5 pt-1" style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)" }}>
                  <span className="material-symbols-outlined text-[15px]" style={{ color: "#ffb59f" }}>verified_user</span>
                  <span>Our expert will reach out to you in 15 mins</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-surface gsap-stats-section">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="gsap-stat-card flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full text-primary">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Certified Vets</h3>
            <p className="text-label-md text-on-surface-variant">Licensed & Experienced</p>
          </div>
          <div className="gsap-stat-card flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full text-primary">
              <span className="material-symbols-outlined text-[28px]">emergency</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Emergency</h3>
            <p className="text-label-md text-on-surface-variant">24/7 Support Available</p>
          </div>
          <div className="gsap-stat-card flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full text-primary">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Professional</h3>
            <p className="text-label-md text-on-surface-variant">Verified Veterinarians</p>
          </div>
          <div className="gsap-stat-card flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full text-primary">
              <span className="material-symbols-outlined text-[28px]">home</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Home Care</h3>
            <p className="text-label-md text-on-surface-variant">Stress-Free Environment</p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-section-padding bg-background gsap-services-section">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg text-on-background">Our Core Services</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Complete care for every stage of your pet's life, delivered with compassion and professional expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Service 1 */}
            <div className="gsap-service-card apple-glass apple-glass-hover p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">medical_services</span>
                <h3 className="font-headline-md text-headline-md">Vet Consultations</h3>
                <p className="text-body-md text-on-surface-variant">Comprehensive health checks, diagnosis, and treatment plans in the stress-free comfort of your home.</p>
              </div>
              <Link href="/book?service=Consultation" className="text-primary font-bold text-label-md inline-flex items-center gap-1 mt-6">
                Book Consultation <span className="material-symbols-outlined text-[18px]">east</span>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="gsap-service-card apple-glass apple-glass-hover p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">content_cut</span>
                <h3 className="font-headline-md text-headline-md">Pet Grooming</h3>
                <p className="text-body-md text-on-surface-variant">Professional bathing, haircuts, nail trimming, and ear cleaning services to keep your pet looking and feeling great.</p>
              </div>
              <Link href="/book?service=Grooming" className="text-primary font-bold text-label-md inline-flex items-center gap-1 mt-6">
                Book Grooming <span className="material-symbols-outlined text-[18px]">east</span>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="gsap-service-card apple-glass apple-glass-hover p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-primary">vaccines</span>
                <h3 className="font-headline-md text-headline-md">Vaccinations</h3>
                <p className="text-body-md text-on-surface-variant">Timely core and non-core vaccinations to protect your pet against major infectious diseases.</p>
              </div>
              <Link href="/book?service=Vaccination" className="text-primary font-bold text-label-md inline-flex items-center gap-1 mt-6">
                Book Vaccination <span className="material-symbols-outlined text-[18px]">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-padding bg-surface-container-lowest gsap-choose-section">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full border-none"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Why Choose The Paws Friend"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-8">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg text-on-background">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="gsap-choose-item flex gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-bold text-headline-md">Stress-Free Home Visit</h4>
                  <p className="text-body-md text-on-surface-variant">No clinic queues, no carrier battles. Your pet is treated in their natural, safe environment.</p>
                </div>
              </div>
              <div className="gsap-choose-item flex gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-bold text-headline-md">Hygiene & Safety First</h4>
                  <p className="text-body-md text-on-surface-variant">We follow strict clinical-grade protocols for every visit to ensure a safe environment.</p>
                </div>
              </div>
              <div className="gsap-choose-item flex gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-bold text-headline-md">Doorstep Convenience</h4>
                  <p className="text-body-md text-on-surface-variant">No stress of travel or clinic waiting rooms. Professional healthcare in the comfort of your home.</p>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-md text-headline-md hover:bg-primary-container transition-all inline-block"
            >
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding">
        <div className="bg-primary-container rounded-[2rem] p-12 md:p-16 text-center text-on-primary-container relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl">Give Your Pet The Best Care They Deserve</h2>
            <p className="text-body-lg max-w-2xl mx-auto opacity-90">Join thousands of happy pet parents who have switched to a smarter, stress-free way of managing their pet's health.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book"
                className="bg-white text-primary px-10 py-5 rounded-xl font-headline-md text-headline-md shadow-xl hover:bg-surface-container transition-all active:scale-95 text-center"
              >
                Book Your First Visit
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-headline-md text-headline-md hover:bg-white hover:text-primary transition-all active:scale-95 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
