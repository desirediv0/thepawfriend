"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links — Combined Core Services, Dedicated Landing Pages & Info Pages
  const navLinks = [
    { name: "Home", href: "/" },
    // Dedicated Doorstep Care & City Hub Landing Pages (SEO & High Conversion)
    { name: "Veterinary", href: "/veterinary" },
    { name: "Grooming", href: "/grooming" },
    { name: "Lucknow", href: "/lucknow" },
    // Core Services, Catalog & Company Info
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-surface-variant/40 shadow-sm py-2"
            : "bg-white/60 backdrop-blur-lg py-4"
        }`}
      >
        <nav className="flex justify-between items-center px-gutter w-full max-w-container-max mx-auto">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              alt="The Paws Friend Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU"
            />
            <span className="text-body-lg font-headline-lg text-primary uppercase tracking-tight font-extrabold">
              THE PAWS FRIEND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 bg-surface-container/60 p-1.5 rounded-full border border-surface-variant/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-primary-container transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Book Visit
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-surface-variant/40 px-6 py-4 space-y-3 animate-in slide-in-from-top-5 duration-200 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-xl font-semibold text-base transition-colors ${
                    isActive
                      ? "bg-primary-container/20 text-primary font-bold"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2 text-center flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Book Appointment Now
            </Link>
          </div>
        )}
      </header>

      {/* ── Mobile Sticky Bottom Action Bar ── */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2.5 bg-transparent p-0 border-none shadow-none">
        <button
          onClick={() => window.open("tel:+919211338489", "_self")}
          className="flex-1 bg-surface-container text-on-surface py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-surface-variant/60 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-primary text-[18px]">call</span>
          Call Vet
        </button>

        <button
          onClick={() => window.open("https://wa.me/919211338489", "_blank")}
          className="flex-1 bg-[#25D366] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </button>

        <Link
          href="/book"
          className="flex-1 bg-primary text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-all shadow-md text-center"
        >
          Book Visit
        </Link>
      </div>
    </>
  );
}
