import type { Metadata, Viewport } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { services, site } from "@/config/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Veteran-Owned Cleaning in Jacksonville, FL`,
    template: `%s | ${site.name}`,
  },
  description:
    "PFC Cleaning Service provides disciplined residential and commercial cleaning in Jacksonville, Florida. Veteran-owned, mission-driven, and committed to stronger standards.",
  applicationName: site.name,
  keywords: [
    "cleaning service Jacksonville FL",
    "veteran-owned cleaning service Jacksonville",
    "residential cleaning Jacksonville",
    "commercial cleaning Jacksonville",
    "deep cleaning Jacksonville",
    "move-out cleaning Jacksonville",
    "office cleaning Jacksonville",
    "post-construction cleaning Jacksonville",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | Veteran-Owned Cleaning in Jacksonville, FL`,
    description:
      "Disciplined residential and commercial cleaning in Jacksonville, Florida. Veteran-owned, mission-driven, committed to stronger standards.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PFC Cleaning Service — Pride, Focus, Commitment. Veteran-owned cleaning in Jacksonville, FL.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Veteran-Owned Cleaning in Jacksonville, FL`,
    description:
      "Disciplined residential and commercial cleaning in Jacksonville, Florida. Veteran-owned and mission-driven.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: site.colors.navyDeep,
  width: "device-width",
  initialScale: 1,
};

/** LocalBusiness structured data for local SEO */
function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: "+1-904-496-4760",
    slogan: "We Don't Cut Corners. We Clean Them.",
    description:
      "Veteran-owned residential and commercial cleaning service in Jacksonville, Florida, delivering discipline, respect, and excellence in every clean.",
    image: `${site.url}/og.png`,
    logo: `${site.url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.serviceArea.city,
      addressRegion: site.serviceArea.stateAbbr,
      addressCountry: "US",
    },
    areaServed: site.serviceArea.communities.map((name) => ({
      "@type": "City",
      name: `${name}, FL`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.blurb,
          url: `${site.url}/services#${s.slug}`,
        },
      })),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </body>
    </html>
  );
}
