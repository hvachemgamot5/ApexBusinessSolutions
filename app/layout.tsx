import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://apex-business-solutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Remote Bookkeeping Services | QuickBooks & Xero | Apex Business Solutions",
  description:
    "Reliable remote bookkeeping support for small businesses worldwide. QuickBooks Online and Xero services include monthly bookkeeping, bank reconciliation, AP/AR, cleanup, catch-up, and financial reporting.",
  keywords: [
    "remote bookkeeping services",
    "virtual bookkeeper for small business",
    "QuickBooks Online bookkeeper",
    "Xero bookkeeping services",
    "monthly bookkeeping",
    "bank and credit card reconciliation",
    "accounts payable and receivable",
    "bookkeeping cleanup and catch-up",
    "financial reporting for small businesses",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Apex Business Solutions",
    title: "Remote Bookkeeping Services | QuickBooks & Xero",
    description:
      "Remote bookkeeping support for small businesses, including QuickBooks Online, Xero, reconciliations, AP/AR, cleanup, catch-up, and financial reporting.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Bookkeeping Services | QuickBooks & Xero",
    description:
      "Remote bookkeeping support for small businesses using QuickBooks Online and Xero.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
