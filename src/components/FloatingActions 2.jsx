"use client";

import Link from "next/link";

export default function FloatingActions() {
  return (
    <div 
      className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/919211338489"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-full font-bold text-xs shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        style={{
          boxShadow: "0 6px 24px rgba(37, 211, 102, 0.45), 0 0 0 0 rgba(37, 211, 102, 0.7)",
          animation: "whatsapp-pulse 2.2s infinite ease-in-out",
        }}
      >
        {/* Radar Ring Animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" style={{ animationDuration: "2.5s" }} />

        {/* Pulsing Live Green Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        <span className="font-extrabold tracking-wide">WhatsApp Us</span>
      </a>

      {/* ── Call Floating Button ── */}
      <a
        href="tel:+919211338489"
        aria-label="Call Vet directly"
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#075985] text-white py-2.5 px-4 rounded-full font-bold text-xs shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        style={{
          boxShadow: "0 6px 24px rgba(2, 132, 199, 0.45)",
          animation: "call-pulse 2.4s infinite ease-in-out 0.4s",
        }}
      >
        {/* Ring Ping */}
        <span className="absolute -inset-1 rounded-full bg-[#0284c7] opacity-35 animate-ping pointer-events-none" style={{ animationDuration: "2.8s" }} />

        {/* Call Icon with Wiggle */}
        <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform duration-200" style={{ animation: "phone-wiggle 1.8s infinite ease-in-out" }}>
          call
        </span>

        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-wide text-xs">Call Vet</span>
          <span className="text-[10px] opacity-90 font-medium">+91 9211338489</span>
        </div>
      </a>

      {/* ── Book Now Floating Button ── */}
      <Link
        href="/book"
        aria-label="Book Doorstep Vet Appointment"
        className="group relative flex items-center gap-2.5 text-white py-2.5 px-4 rounded-full font-bold text-xs shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ab2f00 0%, #d43b00 50%, #ff5722 100%)",
          boxShadow: "0 8px 30px rgba(171, 47, 0, 0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
          animation: "book-pulse 2s infinite ease-in-out 0.8s",
        }}
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#ab2f00] opacity-30 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />

        {/* Calendar / Star Icon */}
        <span className="material-symbols-outlined text-[18px] text-[#ffdbd1] group-hover:rotate-12 transition-transform duration-200">
          calendar_month
        </span>

        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-wide text-xs text-white">Book Appointment</span>
          <span className="text-[10px] text-[#ffdbd1] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423] animate-pulse" />
            Doorstep Visit
          </span>
        </div>
      </Link>
    </div>
  );
}
