// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SITE } from "./components/siteConfig";

export const metadata = {
  metadataBase: new URL("https://identitydental.in"),
  title: {
    default: "Identity Dental Hospital | Best Dental Hospital in Kadapa, Andhra Pradesh",
    template: "%s | Identity Dental Hospital",
  },
  description:
    "Identity Dental Hospital in Kadapa offers painless root canals, dental implants, cosmetic dentistry, and microscopic dental treatments. Book your appointment today.",
  keywords: [
    "Best Dental Hospital in Kadapa Andhra Pradesh",
    "Dentist in Kadapa",
    "Dental Hospital Kadapa",
    "Root Canal Treatment",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Best Dental Clinic Kadapa",
    "Identity Dental Hospital",
    "Microscopic Dentistry",
  ],
  authors: [{ name: "Identity Dental Hospital" }],
  creator: "Identity Dental Hospital",
  publisher: "Identity Dental Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Identity Dental Hospital | Advanced Dental Care in Kadapa",
    description:
      "Experience world-class dental care at Identity Dental Hospital, Kadapa. Specialized in painless single-visit root canals, implants, and laser dentistry.",
    url: "https://identitydental.in",
    siteName: "Identity Dental Hospital",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have an og-image.jpg in public folder or update this
        width: 1200,
        height: 630,
        alt: "Identity Dental Hospital Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity Dental Hospital | Best Dentist in Kadapa",
    description:
      "Painless single-visit root canals, implants, and microscopic dentistry in Kadapa.",
    images: ["/og-image.jpg"],
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

  verification: {
    google: "google83d312d94cd57bba",
  },
  alternates: {
    canonical: "https://identitydental.in",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.clinicName,
  image: "https://identitydental.in/og-image.jpg",
  "@id": "https://identitydental.in",
  url: "https://identitydental.in",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressLine2,
    addressLocality: "Kadapa",
    addressRegion: "Andhra Pradesh",
    postalCode: "516001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.4741,
    longitude: 78.8239,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:30",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Root Canal Treatment (Single-Visit)"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Implants"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Invisalign & Clear Aligners"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cosmetic Dentistry & Smile Design"
        }
      }
    ]
  },
  sameAs: [
    "https://www.facebook.com/identitydental",
    "https://www.instagram.com/identitydental",
    SITE.mapsUrl
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN + preconnect for faster first paint */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkfNwp5H8Z5q5G8hA6V9E1l4ZCkxzgv2Fne5+5ZT1J/NzNw6xkB2f2hNw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Headers />
        {/* If Header is fixed at 64px (h-16), keep content clear with pt-16 */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
