import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import NavBar from "@/components/layout/navbar";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import Footer from "@/components/layout/footer";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Bold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Extralight.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--clash-display-font",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  keywords: [
    "Africash",
    "Financial Inclusion",
    "Fintech",
    "African Transactions",
  ],
  creator: "kolynzb",
  authors: [
    { name: "Atuhaire Collins Benda", url: "https://collinsbenda.com" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
      },
    ],
  },
  description: siteConfig.description,
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
    creator: "@Kolynz_b",
  },
  metadataBase: new URL(siteConfig.url),
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(clashDisplay.variable, "font-clash")}>
        <NavBar />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
