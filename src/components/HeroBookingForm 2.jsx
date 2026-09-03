"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function HeroBookingForm({
  defaultCity = "",
  defaultService = "General Consultation",
  formTitle = "Book Your Appointment",
  formSubtitle = "PROFESSIONAL HOME VISITS - OFFERS ON TREATMENTS",
  offerBadge = "📞 Book now free expert call",
}) {
  const { showToast } = useToast();

  const [petName, setPetName] = useState("");
  const [userName, setUserName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [phone, setPhone] = useState("");
  const [petType, setPetType] = useState("Dog");
  const [service, setService] = useState(defaultService);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      showToast("Please enter a valid 10-digit mobile number.", "error");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          petName: petName || "My Pet",
          petType: petType || "Dog",
          service: service || defaultService || "General Consultation",
          phone,
          userName: userName || "",
          petAge: petAge || "",
          city: city || defaultCity || "Delhi NCR",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        showToast(
          "Appointment booked successfully! Our team will contact you shortly.",
          "success"
        );
        setPetName("");
        setUserName("");
        setPetAge("");
        setPhone("");
        if (!defaultCity) setCity("");
      } else {
        showToast(result.error || "Failed to submit appointment.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gsap-hero-form flex justify-end w-full">
      <div
        className="w-full max-w-sm rounded-[1.75rem] p-7 space-y-4"
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      >
        {/* Card Header */}
        <div className="text-center">
          <h3
            className="font-headline-md text-center"
            style={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: 800,
              textTransform: "capitalize",
            }}
          >
            {formTitle}
          </h3>
          <p
            className="text-label-md mt-1 text-center font-bold tracking-wider"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "11px",
              textTransform: "uppercase",
            }}
          >
            {formSubtitle}
          </p>

          {/* Offer Pill */}
          {offerBadge && (
            <div
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
              style={{
                background: "linear-gradient(90deg, #ff4e50, #f9d423)",
                color: "#111",
              }}
            >
              <span>{offerBadge}</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          {/* Pet Name */}
          <div>
            <label
              className="block text-xs font-bold mb-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Pet Name *
            </label>
            <input
              required
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Your pet's name"
              className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all font-medium placeholder-white/50"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.30)",
                color: "#fff",
              }}
            />
          </div>

          {/* Your Name */}
          <div>
            <label
              className="block text-xs font-bold mb-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Your Name *
            </label>
            <input
              required
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all font-medium placeholder-white/50"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.30)",
                color: "#fff",
              }}
            />
          </div>

          {/* Pet Age */}
          <div>
            <label
              className="block text-xs font-bold mb-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Pet Age *
            </label>
            <input
              required
              type="text"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              placeholder="e.g. 2 years"
              className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all font-medium placeholder-white/50"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.30)",
                color: "#fff",
              }}
            />
          </div>

          {/* Select City */}
          <div>
            <label
              className="block text-xs font-bold mb-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Select City *
            </label>
            <div className="relative">
              <select
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all font-medium appearance-none cursor-pointer pr-8"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  color: city ? "#fff" : "rgba(255,255,255,0.6)",
                }}
              >
                <option
                  value=""
                  disabled
                  style={{ color: "#222", background: "#fff" }}
                >
                  Select your city
                </option>
                <option
                  value="Delhi"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Delhi
                </option>
                <option
                  value="Gurugram"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Gurugram
                </option>
                <option
                  value="Noida"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Noida
                </option>
                <option
                  value="Greater Noida"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Greater Noida
                </option>
                <option
                  value="Ghaziabad"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Ghaziabad
                </option>
                <option
                  value="Faridabad"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Faridabad
                </option>
                <option
                  value="Lucknow"
                  style={{ color: "#222", background: "#fff" }}
                >
                  Lucknow
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/70">
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label
              className="block text-xs font-bold mb-1"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Mobile Number *
            </label>
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
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                placeholder="10-digit number"
                className="w-full px-4 py-2 rounded-xl outline-none text-xs transition-all font-medium placeholder-white/50"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  color: "#fff",
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 mt-2 rounded-xl font-extrabold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #ab2f00 0%, #d43b00 100%)",
              color: "#fff",
              fontSize: "14px",
              boxShadow: "0 4px 20px rgba(171,47,0,0.45)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#cf4516")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #ab2f00 0%, #d43b00 100%)")
            }
          >
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            {loading ? "Booking..." : "Book Now - Free Expert Call ✦"}
          </button>
        </form>

        <div
          className="flex items-center justify-center gap-1.5 pt-1"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)" }}
        >
          <span
            className="material-symbols-outlined text-[15px]"
            style={{ color: "#ffb59f" }}
          >
            verified_user
          </span>
          <span>Our expert will reach out to you in 15 mins</span>
        </div>
      </div>
    </div>
  );
}
