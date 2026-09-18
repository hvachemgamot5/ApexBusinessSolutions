import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Business Solutions | QuickBooks & Xero Bookkeeping",
  description: "Remote QuickBooks Online and Xero bookkeeping support for small businesses, including reconciliation, AP/AR, cleanup, catch-up, financial reporting, and business analysis.",
  keywords: ["QuickBooks Online bookkeeping", "Xero bookkeeping", "bank reconciliation", "accounts payable", "accounts receivable", "financial reporting"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
