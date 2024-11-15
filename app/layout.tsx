import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "fffont - Discover Diverse Styles of Korean Fonts!",
  description:
    "Explore a variety of Korean fonts in different styles. Enhance your website with beautiful typography.",
  keywords: [
    "web font",
    "Korean font",
    "free fonts",
    "typography",
    "font preview",
    "font download",
  ],
  authors: [{ name: "fontKor" }],
  openGraph: {
    title: "fffont - Discover Diverse Styles of Korean Fonts",
    description:
      "Explore a variety of Korean fonts in different styles. Enhance your website with beautiful typography.",
    url: "https://fffont.com",
    images: [
      {
        url: "https://fffont.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "fffont website preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fffont - Discover Diverse Styles of Korean Fonts",
    description:
      "Explore a variety of Korean fonts in different styles. Enhance your website with beautiful typography.",
    images: ["https://fffont.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
