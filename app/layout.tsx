import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

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
