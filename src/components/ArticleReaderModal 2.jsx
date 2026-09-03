"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ArticleReaderModal({ article, onClose, onBookClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-surface-variant/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header bar */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-surface-variant/40 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              {article.category || "Pet Care Guide"}
            </span>
            <span className="text-xs text-on-surface-variant">
              • {article.readTime || "5 min read"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Title & Metadata */}
          <div className="space-y-3">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant pt-1">
              <div className="flex items-center gap-2">
                <img
                  src={article.authorAvatar || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80"}
                  alt={article.author || "Dr. Ananya Sharma"}
                  className="w-7 h-7 rounded-full object-cover border border-primary/30"
                />
                <span className="font-bold text-on-surface">
                  {article.author || "Dr. Ananya Sharma, Senior Veterinarian"}
                </span>
              </div>
              <span>•</span>
              <span>Published: {article.date || "August 2026"}</span>
              <span>•</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>{article.rating || "4.9"}</span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden shadow-md max-h-[380px] relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Highlight Box */}
          {article.takeaways && (
            <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-2xl space-y-2">
              <h4 className="font-extrabold text-primary text-sm uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Key Expert Takeaways
              </h4>
              <ul className="space-y-1.5 text-xs text-on-surface font-medium">
                {article.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Full Text Content */}
          <div className="prose prose-sm max-w-none text-on-surface-variant space-y-4 leading-relaxed text-sm">
            {article.content ? (
              article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <>
                <p>
                  Proper pet healthcare and grooming are vital for maintaining your furry family member&apos;s overall wellbeing. Routine home care prevents skin infections, reduces stress, and ensures early diagnosis of underlying medical conditions.
                </p>
                <h3 className="font-headline-md text-xl font-bold text-on-surface pt-2">
                  Why Doorstep Care Is Revolutionizing Pet Parenting
                </h3>
                <p>
                  Traditional visits to noisy clinics or busy grooming salons often induce severe anxiety in pets. Car rides, unfamiliar scents, and aggressive barking from other animals increase heart rate and stress hormones. In contrast, at-home visits keep your dog or cat completely relaxed in their familiar territory.
                </p>
                <h3 className="font-headline-md text-xl font-bold text-on-surface pt-2">
                  Expert Clinical Guidelines
                </h3>
                <p>
                  Always ensure that vaccines are maintained at cold-chain temperatures (2°C to 8°C) and administered by registered veterinary professionals. For grooming, hypoallergenic shampoos suited to your pet&apos;s specific skin pH avoid post-bath itching or irritation.
                </p>
              </>
            )}
          </div>

          {/* CTA Box inside Article Reader */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white space-y-4 text-center shadow-lg">
            <h3 className="font-bold text-xl">
              Ready to Give Your Pet The Care They Deserve?
            </h3>
            <p className="text-xs text-white/90 max-w-md mx-auto">
              Book a doorstep visit with our certified veterinarians & expert groomers in Delhi NCR & Lucknow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/book"
                onClick={onClose}
                className="bg-white text-primary px-6 py-3 rounded-xl font-extrabold text-xs shadow-md hover:bg-primary-fixed transition-all"
              >
                Book Appointment Now →
              </Link>
              <button
                onClick={() => {
                  onClose();
                  window.open("https://wa.me/919211338489", "_blank");
                }}
                className="bg-white/15 border border-white/40 text-white px-5 py-3 rounded-xl font-bold text-xs hover:bg-white/25 transition-all"
              >
                WhatsApp Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
