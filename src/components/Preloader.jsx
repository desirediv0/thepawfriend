"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [showLogo, setShowLogo] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Show logo immediately
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 100);

    // Start fading out after logo display
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);

      // Unmount after fade-out completes
      setTimeout(() => {
        setIsMounted(false);
      }, 600);
    }, 1200);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#fbf9f8] transition-all duration-600 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100"
      }`}
    >
      {/* Logo Only */}
      <div
        className={`w-32 h-32 md:w-40 md:h-40 transition-all duration-700 transform flex items-center justify-center ${
          showLogo ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          alt="The Paws Friend Logo"
          className="w-full h-full object-contain filter drop-shadow-md mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU"
        />
      </div>
    </div>
  );
}
