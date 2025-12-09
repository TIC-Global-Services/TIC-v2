import ArchiveCards from "@/components/Archive/ArchiveCards";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Archive – The Internet Company | Past Work, Concepts & Creative Goodies",
  description:
    "Explore the Archive at The Internet Company — a curated collection of past projects, design concepts, and creative experiments that shaped our journey.",

  keywords: [
    "archive",
    "past work",
    "case studies",
    "creative archive",
    "brand design archive",
    "The Internet Company",
    "TIC Global Services",
    "portfolio archive",
    "design concepts",
    "creative experiments",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/archive",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/archive",
    title: "Archive – The Internet Company | Creative Work & Past Projects",
    description:
      "A curated archive of previous design explorations, branding work, and creative experiments from The Internet Company.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/Archive.png",
        width: 1200,
        height: 630,
        alt: "Archive – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Archive – The Internet Company",
    description:
      "A showcase of past design work, creative ideas, and visual explorations.",
    images: ["/open-graph/Archive.png"],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Archive – The Internet Company",
    url: "https://www.theinternetcompany.one/archive",
    description:
      "A curated archive featuring past branding work, creative experiments, and design explorations from The Internet Company.",

    isPartOf: {
      "@type": "WebSite",
      name: "The Internet Company",
      url: "https://www.theinternetcompany.one",
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

    hasPart: [
      {
        "@type": "CreativeWork",
        name: "Web & Branding",
      },
      {
        "@type": "CreativeWork",
        name: "3D Web Experience",
      },
      {
        "@type": "CreativeWork",
        name: "Web & Mobile Apps",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <ArchiveCards />
      </div>
    </>
  );
};

export default page;
