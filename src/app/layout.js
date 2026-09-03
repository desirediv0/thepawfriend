import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingActions from "@/components/FloatingActions";
import { ToastProvider } from "@/context/ToastContext";

export const metadata = {
  metadataBase: new URL("https://thepawsfriend.com"),
  title: {
    default: "The Paws Friend | Doorstep Vet Doctor Home Visit & Pet Grooming Delhi NCR & Lucknow",
    template: "%s | The Paws Friend",
  },
  description:
    "Book certified vet doctor home visits, puppy & cat vaccinations, and doorstep pet grooming packages across Delhi, Gurugram, Noida, Ghaziabad, Faridabad & Lucknow. Cold-chain vaccines & stress-free home care.",
  keywords: [
    "vet doctor home visit",
    "at home pet grooming delhi ncr lucknow",
    "doorstep dog grooming cost",
    "puppy 8 shot vaccination package price",
    "cat groomer near me",
    "veterinary consultation at home gomti nagar delhi",
    "cold chain pet vaccine home delivery",
  ],
  authors: [{ name: "The Paws Friend Veterinary Team", url: "https://thepawsfriend.com" }],
  creator: "The Paws Friend",
  publisher: "The Paws Friend",
  category: "Pet Care & Veterinary Healthcare",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://thepawsfriend.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Paws Friend | Professional Pet Healthcare & Grooming At Your Doorstep",
    description:
      "Licensed BVSc vet doctors and certified pet groomers visiting your home in Delhi NCR & Lucknow.",
    url: "https://thepawsfriend.com",
    siteName: "The Paws Friend",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "The Paws Friend Doorstep Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Paws Friend | Doorstep Vet & Pet Grooming",
    description: "Licensed vet doctor home visits & pet grooming in Delhi NCR & Lucknow.",
    images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({ children }) {
  const jsonLdGlobalOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thepawsfriend.com/#organization",
        name: "The Paws Friend",
        url: "https://thepawsfriend.com",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkuANiBnzYDxy_sQLfNvBAGihvzbWHQFJB6zcyXBITtmp3uFCnp2Ej1LTQwXHJzLlfP0dnDHX5RVkOCQClmL1VCdSX_n7OAHKQuBvjgY5jJY6lrETQ7vHXBMNx00o6AFYHqSO4nqvgPHy3j26U0edBEwE5CY0Gu7F-H3vU9Hq1P_zSqbDcDBuqA7nAe_1zGH9nNtkiL_oRWASTRBeSifWNN4pgU9zWJkxYHZkY3Ug_Lde7iyKXtz4_ITYjtfwD5zOO-Fo9TrHJnpMU",
        telephone: "+91-9211338489",
        email: "support@thepawsfriend.com",
        sameAs: [
          "https://wa.me/919211338489",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://thepawsfriend.com/#website",
        url: "https://thepawsfriend.com",
        name: "The Paws Friend",
        description: "Professional at-home pet healthcare, vaccinations, and grooming in Delhi NCR & Lucknow.",
        publisher: {
          "@id": "https://thepawsfriend.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://thepawsfriend.com/services?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth h-full overflow-x-hidden">
      <head>
        <meta name="theme-color" content="#ab2f00" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGlobalOrg) }}
        />
      </head>
      <body className="min-h-full bg-background text-on-surface font-body-md antialiased flex flex-col pt-20 overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDNWF32M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDNWF32M');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Preloader />
        <ToastProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
        </ToastProvider>
      </body>
    </html>
  );
}
