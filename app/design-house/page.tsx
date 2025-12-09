import Amae from "@/components/Design/Amae";
import Attar from "@/components/Design/Attar";
import Caara from "@/components/Design/Caara";
import Hero from "@/components/Design/Hero";
import Horizontal from "@/components/Design/Horizontal";
import HouseOfRuth from "@/components/Design/HouseOfRuth";
import Projects from "@/components/Design/Projects";
import SummrAndVesenex from "@/components/Design/Summr";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Design House – The Internet Company | Creative Design & Digital Craft",
  description:
    "Welcome to the Design House by The Internet Company — a creative space where ideas, aesthetics, and digital craftsmanship come together. We design modern identities, web experiences, and visually driven brand systems.",

  keywords: [
    "Design House",
    "The Internet Company",
    "TIC Global Services",
    "creative design studio",
    "brand identity design",
    "UI UX design",
    "digital design agency",
    "creative direction",
    "web design",
    "visual design house",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/design-house",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/design-house",
    title:
      "Design House – The Internet Company | Creative Digital & Visual Design Studio",
    description:
      "A design-focused division of The Internet Company crafting branding, UI/UX, visual systems, and digital aesthetics.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/DesignHub.png",
        width: 1200,
        height: 630,
        alt: "Design House – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Design House – The Internet Company",
    description:
      "A creative design space shaping modern identities, UI/UX, and digital experiences.",
    images: ["/open-graph/DesignHub.png"],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Design House – The Internet Company",
    url: "https://www.theinternetcompany.one/design-house",
    description:
      "The Design House by The Internet Company is a creative division focused on branding, UI/UX, digital design, and visual identity systems.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.theinternetcompany.one",
      name: "The Internet Company",
    },
    publisher: {
      "@type": "Organization",
      name: "The Internet Company",
      url: "https://www.theinternetcompany.one",
      logo: "https://www.theinternetcompany.one/tic_logo.svg",
      sameAs: [
        "https://www.linkedin.com/company/tic-global-services/",
        "https://www.instagram.com/the.internetcompany",
      ],
    },
  };

  return (
    <div>
      <Hero />
      <Projects />
      <HouseOfRuth />
      <Horizontal />
      <Caara />
      <SummrAndVesenex />
      <Amae />
      <Attar />
    </div>
  );
};

export default page;
