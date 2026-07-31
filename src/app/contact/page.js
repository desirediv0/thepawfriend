"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function ContactPage() {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        showToast(result.message || "Message sent successfully!", "success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        showToast(result.error || "Failed to send message.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Hero with Reception Image — Split Layout ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a0905 0%, #2c1208 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "520px",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: Full Image — no crop */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "420px",
            }}
          >
            <img
              src="/contact-reception.png"
              alt="The Paws Friend Reception"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
            {/* Right-edge fade into the dark content panel */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(26,9,5,0.95) 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(26,9,5,0.15) 0%, transparent 40%, rgba(26,9,5,0.25) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Right: Content panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "60px 48px 60px 40px",
            }}
          >
            {/* Badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 16px",
                borderRadius: "100px",
                background: "rgba(255,219,209,0.15)",
                border: "1px solid rgba(255,181,159,0.30)",
                color: "#ffdbd1",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "20px",
                width: "fit-content",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "15px", fontVariationSettings: "'FILL' 1" }}
              >
                contact_support
              </span>
              Get In Touch
            </span>

            {/* Headline */}
            <h1
              className="font-headline-xl"
              style={{
                color: "#fff",
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                lineHeight: 1.2,
                marginBottom: "14px",
              }}
            >
              We'd Love to Hear{" "}
              <span style={{ color: "#ffb59f" }}>From You</span>
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: "15px",
                lineHeight: "24px",
                marginBottom: "32px",
                maxWidth: "380px",
              }}
            >
              Have questions about our services or packages? Our team is just a call or message away.
            </p>

            {/* Contact info list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "call", text: "+91 9211338489 (Emergency: +91 9211338488)", label: "Phone & Emergency" },
                { icon: "mail", text: "support@thepawsfriend.in", label: "Email" },
                { icon: "location_on", text: "Delhi NCR, India", label: "Location" },
              ].map((c) => (
                <div
                  key={c.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "11px 16px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "18px",
                      color: "#ffb59f",
                      fontVariationSettings: "'FILL' 1",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.40)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.80)", marginTop: "1px" }}>
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-gutter py-12">
        <section className="mb-4" />

        {/* Contact Info and Form Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-section-padding">
          {/* Left Column: Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="apple-glass apple-glass-hover p-8 rounded-2xl flex items-start gap-5">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">chat_bubble</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">WhatsApp/Call</h3>
                <p className="text-on-surface-variant">+91 9211338489</p>
                <button
                  onClick={() => window.open("https://wa.me/919211338489", "_blank")}
                  className="text-label-md text-primary mt-2 font-semibold hover:underline text-left"
                >
                  Start Chat →
                </button>
              </div>
            </div>

            <div className="apple-glass apple-glass-hover p-8 rounded-2xl flex items-start gap-5">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Email</h3>
                <p className="text-on-surface-variant">support@thepawsfriend.in</p>
                <button
                  onClick={() => window.open("mailto:support@thepawsfriend.in", "_self")}
                  className="text-label-md text-primary mt-2 font-semibold hover:underline text-left"
                >
                  Send Email →
                </button>
              </div>
            </div>

            <div className="apple-glass apple-glass-hover p-8 rounded-2xl flex items-start gap-5">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Address</h3>
                <p className="text-on-surface-variant">D-111, Sector 4, Noida, Uttar Pradesh - 201301</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-label-md text-primary mt-2 font-semibold hover:underline text-left"
                >
                  Get Directions →
                </button>
              </div>
            </div>

            <div className="apple-glass apple-glass-hover p-8 rounded-2xl flex items-start gap-5">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Working Hours</h3>
                <p className="text-on-surface-variant">Mon - Sun: 9:00 AM - 9:00 PM</p>
                <p className="text-label-md text-primary mt-2 font-semibold">Available all days</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="apple-glass p-10 rounded-2xl h-full">
              <h2 className="font-headline-lg text-headline-lg mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Your Name</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                    <input
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="example@email.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Your Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, "message")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md resize-none focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="How can we help you today?"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-md text-headline-md hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-50"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="w-full h-[450px] relative overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0px_0px_50px_rgba(0,0,0,0.05)]"></div>
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-[0.9] opacity-80"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtnT9_4tROqTbNIad8WUa-1roil6SlhuzOmZ8yFmk6HpoK0sht2AuuPNKmkSN4OxS0X-DCuKFfy804Ymbe2Vp7SL_YejcFl8z-rd_amO6t6hEGLtQTVsScUwRj-ISYB04lHELA-Oz1w77TClhQSyj_4_ktFKnve5qibQEO32nR8YGXoQN5cwzmuNSUXw1dMQJXWVWTOYfc-n7aZydcJx5I0WdbSMtFJp7GXY98MfYT9Rf3zBx0_8hRKc8KolRTk9Pb3kcy3f_M4iK')`
          }}
        ></div>
        {/* Floating Map Pin Card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
        >
          <div className="apple-glass-elevated p-4 rounded-2xl flex items-center gap-4 animate-bounce">
            <img
              alt="Logo"
              className="w-10 h-10 rounded-full mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU"
            />
            <div>
              <p className="font-bold text-primary">The Paws Friend</p>
              <p className="text-[12px] text-on-surface-variant">Click to view flagship clinic details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care Banner */}
      <section className="bg-primary py-6 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-on-primary">
            <span className="material-symbols-outlined text-4xl animate-pulse">emergency</span>
            <div>
              <h4 className="font-headline-md text-headline-md">Emergency Care Available 24/7</h4>
              <p className="font-body-md opacity-90">Call +91 9211338488 anytime for urgent medical assistance.</p>
            </div>
          </div>
          <button
            onClick={() => window.open("tel:+919211338488", "_self")}
            className="bg-on-primary text-primary px-8 py-3 rounded-full font-headline-md hover:bg-primary-fixed transition-colors active:scale-95"
          >
            Call Now
          </button>
        </div>
      </section>

      {/* Branch Modal Overlay */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="apple-glass-elevated p-8 max-w-sm w-full relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Noida Flagship Clinic</h3>
            <p className="text-body-md text-on-surface mb-3">📍 D-81, Sector 4, Noida, Uttar Pradesh - 201301</p>
            <p className="text-body-md text-on-surface mb-4">⏰ Working hours: Mon - Sun (9 AM - 9 PM)</p>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Noida+Sector+4", "_blank")}
              className="w-full bg-[#ab2f00] text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">directions</span> Get Directions
            </button>
          </div>
        </div>
      )}
    </>
  );
}
