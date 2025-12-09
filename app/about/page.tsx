import Clientele from "@/components/About/Clientele";
import CollaborationGrid from "@/components/About/Collaboration_Grid";
import Founder from "@/components/About/Founder";
import Hero from "@/components/About/Hero";
import Container from "@/components/Reusbale/Container";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – The Internet Company | Creative Digital Branding Studio",
  description:
    "The Internet Company is a creative digital studio shaping brands through design, storytelling, web experiences, and modern digital craftsmanship. Learn more about our vision, culture, and philosophy.",

  keywords: [
    "The Internet Company",
    "about TIC Global Services",
    "creative digital studio",
    "branding agency",
    "web experience design",
    "UI UX design",
    "digital branding",
    "modern brand builders",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/about",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/about",
    title:
      "About – The Internet Company | Creative Branding & Digital Experience Studio",
    description:
      "We are a digital branding studio building modern brands with design, technology, and storytelling.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/About.png",
        width: 1200,
        height: 630,
        alt: "About – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About – The Internet Company",
    description:
      "A creative digital studio crafting brands through design-driven digital experiences.",
    images: ["/open-graph/About.png"],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About The Internet Company",
    description:
      "Learn about The Internet Company — a creative digital branding studio focused on design, technology, and transformative web experiences.",
    url: "https://www.theinternetcompany.one/about",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#F5F5F5]">
        <Hero />
        <Container>
          <Clientele />
          <CollaborationGrid />
          <Founder />
        </Container>
      </div>
    </>
  );
};

export default page;
