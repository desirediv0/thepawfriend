import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingActions from "@/components/FloatingActions";
import { ToastProvider } from "@/context/ToastContext";

export const metadata = {
  title: "The Paws Friend | Professional Pet Healthcare At Your Doorstep",
  description: "Professional at-home pet healthcare services including vet visits, vaccinations, and grooming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-background text-on-surface font-body-md antialiased flex flex-col pt-20">
        <Preloader />
        <ToastProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </ToastProvider>
      </body>
    </html>
  );
}
