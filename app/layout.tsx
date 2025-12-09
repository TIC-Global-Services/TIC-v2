import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/Wrapper/LenisScroll";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import { suisse } from "./fonts";

export const metadata: Metadata = {
  title: "TIC Global Services – Creative Web Branding & Digital Experiences",
  description:
    "The Internet Company (TIC Global Services) crafts digital identities through branding, UI/UX design, websites, and immersive digital experiences for modern brands.",
  keywords: [
    "The Internet Company",
    "TIC Global Services",
    "web branding",
    "digital branding studio",
    "UI UX design agency",
    "creative web design",
    "branding agency",
    "website development",
    "digital product design",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one",
    title: "TIC Global Services – Creative Branding & Digital Studio",
    description:
      "A digital-first creative studio building brands with bold storytelling, web design, UI/UX and digital experiences.",
    siteName: "TIC Global Services",
    images: [
      {
        url: "/open-graph/Home.png",
        width: 1200,
        height: 630,
        alt: "The Internet Company – Creative Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Internet Company – Creative Web Branding & Digital Experiences",
    description:
      "We design digital identities with modern branding, UI/UX, and web development.",
    images: ["/open-graph/Home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={suisse.variable}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
