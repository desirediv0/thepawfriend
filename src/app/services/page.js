"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      id: "Consultation",
      title: "Vet Consultation",
      description: "Expert diagnosis & treatment at your home for maximum comfort.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ysTL3dQCJAz7GCIGv_dFGartyuYxj8OM6qHIb6-pCkn0HjJQ5Jr1tsgS4kIOXAO8fij8sQtIQSDCvnYxklrAI0IYUgtRlxYSx6eZCQNUq_p3fGPSLa9Xalp6ULU3UM-OopLc3OU3dO3HuN8jrJL-BNjsZfXC3kT-yi1dzQ-LNMbBQ9Cv2L8Pc8txYW-2Qo7Loes07iu7aBhmivnu7pSxzadPMmJ81usx3VrOYtEM-Z19y6PHB7qFq5bZvz6UMwBwXrlTXp1pCLUr"
    },
    {
      id: "LabTests",
      title: "Lab Tests",
      description: "Accurate lab tests at your doorstep with quick results.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp0Z5D6Spu0QskpA-uzdetHo3VTxMXwJMzZ7DHx6WG15TtW3_qiT1Uj5o0_oRKptEVtwcLHZfwR2FWJHrAq-pPBTIML01WrKPBv7pvX-D300JHSCwg6gYCrbnNMzLK51IZtUUolVGaCmyUJvEKZEuEcv1FvrX8VsRtR-cqTwuz5R-nuh1b-BOtx2od9EnNEgRxlELL88FBkc5dJl-nKvEDtVkQJrhLVVHa7mwd5w5Jh0jHXpqAjhVoxs9i4A7zABdUgabD9TvEoKD2"
    },
    {
      id: "Vaccination",
      title: "Vaccination",
      description: "Protect your pet with essential vaccines and boosters.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDUUDl5__j_fJdqhX7-KC1r9cKO7u0eq4747FhLZse29dmv07bi5UGgJvfDZwKYpubDrjHEZEgEUMTAFWjI1xRhjIs82XrCgejHFGW13DgEbVQgPy_qSOcyi0wvm2ltrllqFT_0si-6t9C2p3oIUeoCpBtlgHhZHWH7JHhSMhT71m8XSfL7g48dSwXwKD27hky6_jlFcUpN6uAcz6o1cHXfbpE-8Jtpue0AqaHlbzjJXK2U4mkUQVPtsv0csfzYmddXzQxUjl6pWIg"
    },
    {
      id: "Emergency",
      title: "Emergency Care",
      description: "24/7 emergency care at your service when seconds count.",
      isError: true,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC77yrcn-8CINEj9mEusa0QNEeA7XgIUXnoOjiSDfmRTkC7R0qbVfNS2VSupluE6SojsXYLIeBunDvGd73uI4ccUniNsZL8zAJrVUkdbIcaYUv5j8RFxq2oIm1vSAhI2hcrb5JtfSTU9byyHOzuWjI1RE2KnsYdFpUSb9YOTGVT_zzxk5iqpxzm5aPPu2m5PG7ARoDBS9UQjsVF0ZLfsL-J2OqkuzXhCWtLl_hKDv-M1Jof1eNc6g8mgtVHm_FM2Xr6fN3O8ROPqacF"
    },
    {
      id: "Grooming",
      title: "Pet Grooming",
      description: "Professional grooming for a healthy, happy, and clean pet.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2_kBV-moVchUhi3Xwy_l6Gs0z-5jgPtQMev8XR_fMKDrOri9fHHd-CACNc3n7Iq_JciFAzTr7JHZW7yuGQ8l4uWSfmMcBUNJ6bmn48hKmJCVyg36RXAoe8Ylya7uszYm7E5KQx9P7TvlJ4IsdiaHx4BA76d5RqJmmvC0PU7OjtZcTJn40tYiB1Qkp6-cos4gzosTssTRZ4odzXCG5n1JD5u-0Y74SyFlXJCKXhcctMqBnOyo5rMyZpp5D06maaXngODSNMbV3PkzZ"
    },
    {
      id: "Boarding",
      title: "Pet Boarding",
      description: "Safe & comfortable stay for your pet while you're away.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz12hc0iDJw7QVa-R6ZzmRdtgUmMDb7x_tcSUI4o2e-gZlJ44127HXQ7c-bf9rwtbsxkP0bc4TDkTh82T6-xfx8ObYqnjt3EgJJdkZdPgjRBSGggX1Z-eYqNFKZKxSH-bpICeaPnkcQtEgOYEl26ubXthXBd6JBqHmpO4xf48VY_ngHdtPKWODu-yF4LTQa_SvuTPE5nqtku7HghAUiOKmTn1lL7rgmcH8G1t8yg2Z27rw1S63jpW9gwr8olek4Akp-V16vTNSTSYP"
    },
    {
      id: "Training",
      title: "Pet Training",
      description: "Positive training for a well-behaved and confident pet.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCTbBADTeQlfntLQYT18WnZjwxAfHHWV7jtlF4CvRhPP8QdrCRukuEF_JtboY4EOLfjC83E4nvfnM9Ou9hAWMl9DKaJQllSW0S61lKxSKP9GvJOFk6-sylMGUFwtBCzuUmmOXojnTesfOlV3YOIkqUMLMHyCDHdg5xit35duFpCqhLqomRQsfZrUtTP5ZDqjtcUQ9p5DXwJBPnyinzDdaN3ob8FwV32FIHv8ak7oKjlDgi_UUQVwFOjta6TljVBcV_gM7LopjW8yb6"
    },
    {
      id: "OnlineConsultation",
      title: "Online Consultation",
      description: "Consult our vets from anywhere, anytime via video call.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjE1OorUk4v_FUDNxZMjACpVISN7u3RRkm9lLlN2xaUZgSx3JYBYL3soqNF8up-A3SgHx4Qv1XB2ordB3IEU0DaArsUOJFr97Zh2YElWvI7gtEw1uTYYeF8TpGGNM8z5wr6wl8dTIfQ3OSP8Toqeu6FzNrQHyrf7UwQS4ZdQ90Hzrm6MApgV8Id_c-1affU0Zd_3itP7GWKWRiuWCX3UCRCHi-ey7tgAEzeCI5HTDVsbiMzScp20uhMG_vpyJ_NMFsHm9p8YzXoS-o"
    }
  ];

  useEffect(() => {
    const initServicesGsap = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Hero items
        gsap.fromTo(".gsap-serv-hero-left *",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" }
        );

        // Hero image
        gsap.fromTo(".gsap-serv-hero-right",
          { opacity: 0, scale: 0.96, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );

        // Grid cards scroll trigger staggered animation
        gsap.fromTo(".gsap-serv-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            scrollTrigger: {
              trigger: "#services-grid",
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      } catch (err) {
        console.warn("GSAP loading failed on Services page:", err);
      }
    };

    initServicesGsap();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-peach-gradient py-section-padding px-gutter overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 gsap-serv-hero-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
              <span>Trusted by 10,000+ Happy Parents</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-background max-w-xl leading-tight">
              Complete Care <span className="text-primary">For Every Paw</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              From routine check-ups to emergency care — we are here for your pets, every step of the way. Professional veterinary services delivered right at your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => {
                  document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-md hover:bg-primary-container transition-all active:scale-95 shadow-lg"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="relative gsap-serv-hero-right">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-fixed rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-white">
              <img
                className="w-full h-auto aspect-[4/3] object-cover"
                alt="Helpful male veterinarian examining dog on floor."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYsWZ8g6E4xNBEEWw0zYwPZv3v1EqkyxebXnlekxb6De0t_heH5hRSLZF0ty06o3TRn6GmozPhMFD2AN5KAyKcbS-2tXr53z9YAv1ZhCmoKoV5RJZyfUb5nKiiWKX757vhPCxiUBMR5vCfVmXjQ-EjfLx1c-sdLQ8VEGbm5kE8RVlIKcYRvRByc4RJ6sybWQsO9iQIP-8Qx_TSKEnZxE6IFIz3EsD-UzTtlkx_qn3WEtDnTpjygrCCTfsuP1ZFlH_hljY5kIno77z4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="py-section-padding px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto space-y-12">
          <div className="text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-background">Our Specializations</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="gsap-serv-card bg-white border border-surface-variant/70 p-6 rounded-2xl flex flex-col justify-between relative group card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="h-44 rounded-xl overflow-hidden mb-4 bg-surface-container relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={service.title}
                      src={service.img}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      Doorstep
                    </div>
                  </div>
                  <h3 className="font-bold text-headline-md text-on-background flex items-center gap-2">
                    {service.title}
                    {service.isError && (
                      <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">emergency</span>
                    )}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-surface-container mt-6">
                  <button
                    onClick={() => router.push(`/book?service=${service.id}`)}
                    className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-label-md hover:bg-primary-container transition-all active:scale-95 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book Service</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
