import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Sentinel Layer | Verifiable Risk Management for AI",
  description: "Fail-closed, non-custodial, and on-chain risk management for AI trading agents.",
  icons: {
    icon: '/web-app-manifest-192x192.png',
    shortcut: '/web-app-manifest-192x192.png',
    apple: '/web-app-manifest-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen w-full overflow-x-hidden bg-brand-dark flex flex-col">{children}</body>
    </html>
  );
}
