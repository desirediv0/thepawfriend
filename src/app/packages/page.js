"use client";

import Link from "next/link";
import { useState } from "react";

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Packages", icon: "pets" },
    { id: "puppy", name: "Puppy Packages", icon: "child_care" },
    { id: "senior", name: "Senior Care", icon: "elderly_woman" },
    { id: "vaccination", name: "Vaccination Plans", icon: "vaccines" }
  ];

  const packages = [
    {
      id: "Basic",
      name: "Basic Care Package",
      description: "Essential care for a healthy pet.",
      category: "puppy",
      features: [
        "2 Vet Visits",
        "1 Vaccination",
        "Health Check-up",
        "Priority Support"
      ]
    },
    {
      id: "Premium",
      name: "Premium Care Package",
      description: "Complete care for a happy pet.",
      category: "vaccination",
      popular: true,
      features: [
        "4 Vet Visits",
        "2 Vaccinations",
        "Full Health Check-up",
        "Grooming (1 Time)",
        "Priority Support"
      ]
    },
    {
      id: "Ultimate",
      name: "Ultimate Care Package",
      description: "Your pet deserves the best care.",
      category: "senior",
      features: [
        "Unlimited Vet Visits",
        "All Vaccinations",
        "Full Health Check-up",
        "Grooming (2 Times)",
        "24/7 Emergency Support"
      ]
    }
  ];

  const filteredPackages = activeCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <>
      {/* Header Section */}
      <section className="bg-peach-gradient py-section-padding px-gutter text-center">
        <div className="max-w-container-max mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span>Comprehensive Protection Plans</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background">
            Care Packages & <span className="text-primary">Support</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Choose a care plan that fits your pet's needs. All plans are designed to provide complete peace of mind.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group flex flex-col items-center gap-3 focus:outline-none"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white"
                      : "bg-surface-container text-on-surface-variant group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                </div>
                <span className={`font-label-md text-label-md transition-colors ${
                  activeCategory === cat.id ? "text-primary font-bold" : "text-on-surface-variant"
                }`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-section-padding px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch pt-4">
            {filteredPackages.map((pkg) => {
              return (
                <div
                  key={pkg.id}
                  className={`bg-white border p-8 rounded-2xl flex flex-col relative transition-all duration-300 card-shadow hover:shadow-xl ${
                    pkg.popular
                      ? "border-2 border-primary md:scale-105 shadow-xl z-10"
                      : "border-surface-variant/70 hover:-translate-y-1"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold shadow-sm tracking-wide">
                      ★ Most Popular
                    </div>
                  )}
                  <h3 className="font-headline-md text-headline-md text-on-background mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-6">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10 flex-grow border-t border-surface-variant/40 pt-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="font-body-md text-on-surface text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/book?plan=${pkg.id}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-primary text-on-primary hover:bg-primary-container"
                        : "border-2 border-primary text-primary hover:bg-primary-fixed"
                    }`}
                  >
                    <span>Select Plan</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-padding px-gutter bg-white">
        <div className="max-w-container-max mx-auto space-y-12">
          <h2 className="font-headline-lg text-headline-lg text-center text-on-background">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-bold text-body-lg text-on-background">How do home visits work?</h3>
              <p className="text-body-md text-on-surface-variant">Our licensed veterinarians come directly to your doorstep equipped with clinical-grade medical kits to treat your pet in their safe home environment.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-body-lg text-on-background">Can I cancel my package?</h3>
              <p className="text-body-md text-on-surface-variant">Yes! All subscription packages can be cancelled or paused anytime with zero hidden fees or cancellation penalties.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-body-lg text-on-background">What cities do you cover?</h3>
              <p className="text-body-md text-on-surface-variant">We currently provide complete doorstep pet care services across all of Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad).</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-body-lg text-on-background">What if there's an emergency?</h3>
              <p className="text-body-md text-on-surface-variant">Ultimate package subscribers get 24/7 dedicated emergency support. You can call our emergency helpline anytime for priority response.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
