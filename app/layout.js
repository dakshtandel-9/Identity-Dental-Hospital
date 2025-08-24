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

export const metadata = {
  title: "Identity Dental Hospital",
  description:
    "Painless single‑visit root canals, implants, and microscopic dentistry in Kadapa.",
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
        {/* Optional: favicon (place /public/favicon.ico) */}
        <link rel="icon" href="/favicon.ico" />
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
