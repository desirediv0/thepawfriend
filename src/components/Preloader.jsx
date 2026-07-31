"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [displayedText, setDisplayedText] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const fullText = "THE PAWS FRIEND";

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    // Start typing after a tiny delay
    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Show logo after typing is done
          setTimeout(() => {
            setShowLogo(true);
            
            // Start fading out after logo has been read
            setTimeout(() => {
              setIsFading(true);
              
              // Unmount after fade-out transition completes
              setTimeout(() => {
                setIsMounted(false);
              }, 600); // matches transition duration
            }, 1000); // logo reading delay
          }, 300);
        }
      }, 70); // typing speed
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fbf9f8] transition-all duration-600 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none -translate-y-6" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center px-6">
        {/* Typing Text */}
        <h1 className="text-[28px] md:text-[40px] font-extrabold text-[#ab2f00] tracking-wider min-h-[50px] font-headline-xl">
          {displayedText}
          <span className="inline-block w-[3px] h-[30px] md:h-[42px] bg-[#ab2f00] ml-1 animate-pulse"></span>
        </h1>

        {/* Logo (Fades in when typing is done) */}
        <div
          className={`w-24 h-24 md:w-32 md:h-32 transition-all duration-700 transform flex items-center justify-center ${
            showLogo
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-90 rotate-12"
          }`}
        >
          <img
            alt="The Paws Friend Logo"
            className="w-full h-full object-contain filter drop-shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU"
          />
        </div>
      </div>
    </div>
  );
}
