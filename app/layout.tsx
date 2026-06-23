import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kham Medicus Care — Clinic & Pharmacy, Komarock Nairobi",
    template: "%s | Kham Medicus Care",
  },
  description:
    "Professional clinic and 24-hour pharmacy in Komarock Plaza, Spine Road, Nairobi North. Outpatient, emergency, antenatal, family planning, and pharmacy services.",
  keywords: [
    "clinic Komarock Nairobi",
    "pharmacy Komarock 24 hours",
    "emergency clinic Nairobi North",
    "GP Spine Road Nairobi",
    "antenatal care Nairobi",
    "family planning Komarock",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Kham Medicus Care",
    title: "Kham Medicus Care — Clinic & Pharmacy, Komarock Nairobi",
    description:
      "Professional clinic and 24-hour pharmacy in Komarock Plaza, Spine Road, Nairobi North. Available 24 hours a day.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFBF5]">
        {/* Google Analytics */}
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1 pb-14 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
