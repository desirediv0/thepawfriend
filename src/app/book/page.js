"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";

function BookingForm() {
  const router = useRouter();
  const { showToast } = useToast();

  const [petType, setPetType] = useState("Dog");
  const [petName, setPetName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const petOptions = [
    { id: "Dog", emoji: "🐶", label: "Dog" },
    { id: "Cat", emoji: "🐱", label: "Cat" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!petName || !phone || !email) {
      showToast("Please fill out all required fields.", "error");
      return;
    }

    setLoading(true);

    const bookingPayload = {
      petName,
      petType,
      phone,
      email,
      query,
      breed: "N/A",
      service: "Consultation",
      ownerName: "",
      address: "N/A",
    };

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      const resJson = await response.json();

      if (response.ok) {
        showToast("We'll reach out to you shortly! 🐾", "success");
        setTimeout(() => {
          router.push("/");
        }, 1800);
      } else {
        showToast(resJson.error || "Failed to submit. Try again.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-container-max mx-auto px-gutter py-12">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          <span>Doorstep Professional Pet Care</span>
        </span>
        <h1 className="font-headline-xl text-headline-xl mb-4 text-on-background mt-4">
          Book an <span className="text-primary">Appointment</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Fill in the quick form below — we'll call you back to confirm your slot.
        </p>
      </section>

      {/* Centered compact form card */}
      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-surface-variant rounded-2xl card-shadow p-8 space-y-6"
        >
          {/* Pet Type */}
          <div className="space-y-3">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Select Pet Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {petOptions.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setPetType(p.id)}
                  className={`border-2 rounded-xl py-3 cursor-pointer transition-all duration-200 flex flex-col items-center gap-1 select-none ${
                    petType === p.id
                      ? "border-primary bg-primary-fixed-dim text-on-primary-fixed shadow-inner"
                      : "border-outline-variant bg-white text-on-surface-variant hover:border-primary"
                  }`}
                >
                  <span className="text-2xl leading-none">{p.emoji}</span>
                  <span className="font-label-md text-label-md font-semibold">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pet Name */}
          <div className="space-y-2">
            <label htmlFor="petName" className="font-label-md text-label-md text-on-surface-variant block">
              Pet's Name *
            </label>
            <input
              id="petName"
              required
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder={`e.g. Buddy`}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition-all"
            />
          </div>

          {/* Phone + Email side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="font-label-md text-label-md text-on-surface-variant block">
                Phone *
              </label>
              <input
                id="phone"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant block">
                Email *
              </label>
              <input
                id="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition-all"
              />
            </div>
          </div>

          {/* Custom Query */}
          <div className="space-y-2">
            <label htmlFor="query" className="font-label-md text-label-md text-on-surface-variant block">
              What do you need? <span className="opacity-60">(optional)</span>
            </label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Grooming, vaccination, health check-up, or any specific concern..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md text-headline-md hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg flex justify-center items-center gap-2"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span>{loading ? "Sending..." : "Request Appointment"}</span>
          </button>

          <p className="text-center text-xs text-on-surface-variant">
            We'll call you within 2 hours to confirm your slot 🐾
          </p>
        </form>

        {/* Help card */}
        <div className="bg-surface-container p-5 rounded-2xl mt-4 flex items-start gap-3">
          <span className="material-symbols-outlined text-primary text-xl mt-0.5">contact_support</span>
          <div>
            <p className="font-bold text-on-surface text-sm">Need Help Booking?</p>
            <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
              Call or WhatsApp us at <strong>+91 98765 43210</strong> for custom requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
