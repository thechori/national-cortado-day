import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  variable: "--font-bricolage",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s | National Cortado Day",
    default:
      "National Cortado Day - December 20th | Celebrate the Perfect Coffee Balance"
  },
  description:
    "Celebrate National Cortado Day on December 20th! Learn about this perfect balance of espresso and steamed milk, find cortados near you, and join coffee lovers worldwide.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg"
      }
    ]
  },
  manifest: "/site.webmanifest",
  applicationName: "National Cortado Day",
  appleWebApp: {
    capable: true,
    title: "National Cortado Day",
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d3a9f"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-V4Z61P5ZPF" />
    </html>
  );
}
