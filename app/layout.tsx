import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

import "./globals.css";

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
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#78350f" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-V4Z61P5ZPF" />
    </html>
  );
}
