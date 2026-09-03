"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function Footer() {
  const { showToast } = useToast();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast("Please enter a valid email.", "error");
      return;
    }
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
    <>
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #ffb59f 25%,
            #ab2f00 50%,
            #ffb59f 75%,
            #ffffff 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        .footer-link {
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          font-size: 14px;
          line-height: 22px;
          display: block;
        }
        .footer-link:hover {
          color: #ffb59f;
        }
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: rgba(255,255,255,0.6);
        }
        .social-btn:hover {
          border-color: #ffb59f;
          color: #ffb59f;
          background: rgba(171,47,0,0.18);
        }
        .email-input::placeholder {
          color: rgba(255,255,255,0.35);
        }
      `}</style>

      {/* ── Pre-footer CTA Strip ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a0d08 0%, #2c1208 50%, #1a0d08 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "80px 0 72px",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(171,47,0,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />
        {/* Warm glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(171,47,0,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          {/* Paw icon */}
          <div style={{ fontSize: "32px", marginBottom: "16px", opacity: 0.6 }}>🐾</div>

          {/* Animated headline */}
          <h2
            className="font-headline-xl animated-gradient-text"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "16px" }}
          >
            Ready to Give Your Pet the Best Care?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", maxWidth: "520px", margin: "0 auto 36px" }}>
            Book a doorstep visit today. Expert veterinary care delivered straight to your home — no travel, no stress.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "52px" }}>
            <Link
              href="/book"
              style={{
                background: "#ab2f00",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "15px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 20px rgba(171,47,0,0.45)",
                transition: "background 0.2s",
                textDecoration: "none",
              }}
              onMouseOver={e => e.currentTarget.style.background = "#cf4516"}
              onMouseOut={e => e.currentTarget.style.background = "#ab2f00"}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>calendar_today</span>
              Book a Visit ✦
            </Link>
            <button
              onClick={() => window.open("https://wa.me/919211338489", "_blank")}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "15px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = "#ffb59f"}
              onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </button>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "36px",
            }}
          >
            {[
              { value: "5200+", label: "Happy Pet Parents" },
              { value: "4.8 ★", label: "Average Rating" },
              { value: "7 Cities", label: "Delhi · Gurgaon · Noida · Gr. Noida · Ghaziabad · Faridabad · Lucknow" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  className="font-headline-md"
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#ffb59f",
                    marginBottom: "2px",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Footer ── */}
      <footer
        style={{
          background: "linear-gradient(180deg, #150a05 0%, #0f0603 100%)",
          color: "#fff",
        }}
      >
        {/* Top divider line with gradient */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(171,47,0,0.6), transparent)",
          }}
        />

        <div className="max-w-container-max mx-auto px-gutter" style={{ paddingTop: "60px", paddingBottom: "48px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Col 1: Brand */}
            <div style={{ gridColumn: "span 1" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <img
                  alt="The Paws Friend Logo"
                  style={{ height: "38px", width: "38px", objectFit: "contain", mixBlendMode: "multiply" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU"
                />
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#fff", letterSpacing: "0.04em" }}>
                  THE PAWS FRIEND
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.50)", fontSize: "13.5px", lineHeight: "22px", marginBottom: "20px" }}>
                Professional pet healthcare at your doorstep — combining clinical expertise with convenience for your furry family.
              </p>

              {/* Stars */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
                <div style={{ display: "flex", color: "#ffb59f" }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="material-symbols-outlined" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>4.8 rated by 600+ Pet Parents</span>
              </div>

              {/* Newsletter */}
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.40)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px", fontWeight: 600 }}>
                Get Pet Care Tips
              </p>
              <form
                onSubmit={handleSubscribe}
                style={{ display: "flex", gap: "0" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="email-input"
                  required
                  disabled={loading}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRight: "none",
                    borderRadius: "8px 0 0 8px",
                    padding: "9px 14px",
                    fontSize: "13px",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#ab2f00",
                    border: "none",
                    borderRadius: "0 8px 8px 0",
                    padding: "9px 14px",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    {loading ? "hourglass_empty" : "send"}
                  </span>
                </button>
              </form>

              {/* Social icons */}
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.40)", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: "20px", marginBottom: "10px", fontWeight: 600 }}>
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                {/* Instagram */}
                <a href="/" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="/" className="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="/" className="social-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/919211338489" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Our Services */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Our Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Vet Consultation", "Pet Grooming", "Vaccinations", "Pet Training", "Emergency Care", "Care Packages"].map(s => (
                  <li key={s}>
                    <Link className="footer-link" href="/services">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Contact Us
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#ffb59f", marginTop: "1px", flexShrink: 0 }}>call</span>
                  <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "20px" }}>+91 9211338489<br /><span style={{ fontSize: "11px", opacity: 0.8 }}>Emergency: +91 9211338488</span></span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#ffb59f", marginTop: "1px", flexShrink: 0 }}>mail</span>
                  <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "20px" }}>support@thepawsfriend.com</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "#ffb59f", marginTop: "1px", flexShrink: 0 }}>location_on</span>
                  <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "20px" }}>Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad, Lucknow<br />Services available at doorstep</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Quick Links */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "Veterinary Care", href: "/veterinary" },
                  { label: "Doorstep Grooming", href: "/grooming" },
                  { label: "Lucknow Pet Care", href: "/lucknow" },
                  { label: "Services", href: "/services" },
                  { label: "Packages", href: "/packages" },
                  { label: "About Us", href: "/about" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Blog & News", href: "/blog" },
                  { label: "Contact Us", href: "/contact" },
                ].map(l => (
                  <li key={l.href}>
                    <Link className="footer-link" href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "20px 0",
          }}
        >
          <div className="max-w-container-max mx-auto px-gutter" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
              © 2025 The Paws Friend. All rights reserved. Professional Pet Healthcare at Your Doorstep.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map(t => (
                <Link key={t.label} href={t.href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.color = "#ffb59f"}
                  onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Disclaimer */}
          <div className="max-w-container-max mx-auto px-gutter" style={{ marginTop: "12px" }}>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.22)", lineHeight: "18px", textAlign: "center" }}>
              ⚠️ The Paws Friend does not support unethical breeding or illegal pet trade. We connect pet lovers with trusted, guidance-led professionals only.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-8 left-8 w-11 h-11 md:w-12 md:h-12 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-40 ${
          showBackToTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#ab2f00", color: "#fff" }}
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </>
  );
}
