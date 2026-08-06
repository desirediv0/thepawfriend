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
      {/* ── Hero with Reception Image — Responsive Split Layout ── */}
      <section className="bg-gradient-to-br from-[#1a0905] to-[#2c1208] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-0 md:min-h-[520px]">
          {/* Left: Full Image — responsive height */}
          <div className="relative overflow-hidden h-64 sm:h-80 md:h-full min-h-[240px] md:min-h-[420px]">
            <img
              src="/contact-reception.png"
              alt="The Paws Friend Reception"
              className="w-full h-full object-cover object-center block"
            />
            {/* Right-edge fade into dark panel on desktop */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a0905]/95 pointer-events-none" />
            {/* Bottom fade into dark panel on mobile */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0905]/40 to-[#1a0905] pointer-events-none" />
          </div>

          {/* Right: Content panel */}
          <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffdbd1] text-xs sm:text-sm font-semibold mb-4 w-fit backdrop-blur-md">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                contact_support
              </span>
              Get In Touch
            </span>

            {/* Headline */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3">
              We'd Love to Hear <span className="text-[#ffb59f]">From You</span>
            </h1>

            <p className="text-white/70 text-xs sm:text-base leading-relaxed mb-6 max-w-md">
              Have questions about our services or packages? Our team is just a call or message away.
            </p>

            {/* Contact info list */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "call", text: "+91 9211338489 (Emergency: +91 9211338488)", label: "Phone & Emergency" },
                { icon: "mail", text: "support@thepawsfriend.com", label: "Email" },
                { icon: "location_on", text: "Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad", label: "Location" },
              ].map((c) => (
                <div
                  key={c.text}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md"
                >
                  <span
                    className="material-symbols-outlined text-[#ffb59f] text-lg sm:text-xl shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {c.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-bold">
                      {c.label}
                    </div>
                    <div className="text-xs sm:text-sm text-white/90 font-medium truncate sm:whitespace-normal">
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28">
        {/* Contact Info Cards and Form Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12">
          {/* Left Column: Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="apple-glass p-5 sm:p-8 rounded-2xl flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">chat_bubble</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl text-on-surface mb-1">WhatsApp/Call</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium">+91 9211338489</p>
                <button
                  onClick={() => window.open("https://wa.me/919211338489", "_blank")}
                  className="text-xs sm:text-sm text-primary mt-2 font-semibold hover:underline block text-left"
                >
                  Start Chat →
                </button>
              </div>
            </div>

            <div className="apple-glass p-5 sm:p-8 rounded-2xl flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl text-on-surface mb-1">Email</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium truncate">support@thepawsfriend.com</p>
                <button
                  onClick={() => window.open("mailto:support@thepawsfriend.com", "_self")}
                  className="text-xs sm:text-sm text-primary mt-2 font-semibold hover:underline block text-left"
                >
                  Send Email →
                </button>
              </div>
            </div>

            <div className="apple-glass p-5 sm:p-8 rounded-2xl flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">location_on</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl text-on-surface mb-1">Service Area</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad & Faridabad</p>
                <p className="text-xs sm:text-sm text-primary mt-1 font-semibold">Doorstep Visits Available</p>
              </div>
            </div>

            <div className="apple-glass p-5 sm:p-8 rounded-2xl flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">schedule</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl text-on-surface mb-1">Working Hours</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">Mon - Sun: 9:00 AM - 9:00 PM</p>
                <p className="text-xs sm:text-sm text-primary mt-1 font-semibold">Available all days</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="apple-glass p-6 sm:p-8 md:p-10 rounded-2xl h-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B322C] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">Your Name</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">Phone Number</label>
                    <input
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">Email Address</label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="example@email.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">Your Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, "message")}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="How can we help you today?"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  className="w-full bg-[#D2571E] text-white py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#B54717] transition-all active:scale-[0.98] disabled:opacity-50 shadow-md"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Emergency Care Banner */}
      <section className="bg-primary py-6 overflow-hidden pb-24 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-on-primary">
            <span className="material-symbols-outlined text-3xl sm:text-4xl animate-pulse">emergency</span>
            <div>
              <h4 className="font-bold text-lg sm:text-xl">Emergency Care Available 24/7</h4>
              <p className="text-xs sm:text-sm opacity-90">Call +91 9211338488 anytime for urgent medical assistance.</p>
            </div>
          </div>
          <button
            onClick={() => window.open("tel:+919211338488", "_self")}
            className="w-full sm:w-auto bg-on-primary text-primary px-8 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-primary-fixed transition-colors active:scale-95 shadow-md"
          >
            Call Now
          </button>
        </div>
      </section>
    </>
  );
}
