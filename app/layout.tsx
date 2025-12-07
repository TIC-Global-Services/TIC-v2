import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/Wrapper/LenisScroll";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import { suisse } from "./fonts";

export const metadata: Metadata = {
  title: "The Internet Company",
  description: "A Web Branding House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body  className={suisse.variable}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          </LenisProvider>
      </body>
    </html>
  );
}
