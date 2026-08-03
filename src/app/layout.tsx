import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "SaddleBronc.pro - #1 Saddle Bronc Riding App | Draw Analysis, Stock Data & Community",
  description:
    "The everything app for saddle bronc riding. See every recorded trip on the horse you drew — buck pattern, buck-off rate, who has ridden it and for what — plus entries, scores, rerides, and the whole bronc riding community in one feed. Built for amateur, youth and college riders.",
  keywords:
    "saddle bronc, saddle bronc riding, saddle bronc app, bronc riding app, bucking horse database, draw analysis, mark out rule, spur out, bronc saddle, bronc rein, stock contractor, bucking horse, rodeo scores, NHSRA saddle bronc, NIRA saddle bronc, amateur rodeo, reride, roughstock app",
  authors: [{ name: "SaddleBronc.pro" }],
  creator: "SaddleBronc.pro",
  publisher: "SaddleBronc.pro",
  metadataBase: new URL("https://www.saddlebronc.pro"),
  alternates: {
    canonical: "https://www.saddlebronc.pro",
  },
  openGraph: {
    title: "SaddleBronc.pro - #1 Saddle Bronc Riding App",
    description:
      "Know the horse before you nod. Every trip, every buck pattern, every buck-off rate — plus the whole bronc riding community.",
    url: "https://www.saddlebronc.pro",
    siteName: "SaddleBronc.pro",
    type: "website",
    images: [
      {
        url: "https://www.saddlebronc.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "SaddleBronc.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaddleBronc.pro - #1 Saddle Bronc Riding App",
    description:
      "Know the horse before you nod. Draw analysis, stock data, scores, and community.",
    images: ["https://www.saddlebronc.pro/logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
