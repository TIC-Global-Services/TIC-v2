import Form from "@/components/client/Form";
import Hero from "@/components/client/Hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal – The Internet Company | Onboarding & Project Intake",
  description:
    "Welcome to the Client Portal of The Internet Company. Submit your onboarding details, share project requirements, and begin your digital journey with our team.",

  keywords: [
    "client portal",
    "onboarding form",
    "project intake form",
    "The Internet Company",
    "TIC Global Services",
    "client onboarding",
    "start a project",
    "digital agency onboarding",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/client",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/client",
    title: "Client Portal – The Internet Company",
    description:
      "Fill out the onboarding form to start your journey with The Internet Company. Share project goals, brand details, and requirements.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/Client_Portal.png",
        width: 1200,
        height: 630,
        alt: "Client Portal – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Client Portal – The Internet Company",
    description:
      "Submit your onboarding details and start your project with our digital team.",
    images: ["/open-graph/Client_Portal.png"],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Client Portal – The Internet Company",
    url: "https://www.theinternetcompany.one/client",
    description:
      "A secure onboarding form for new clients to submit project details and begin working with The Internet Company.",
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

    potentialAction: {
      "@type": "SubmitAction",
      name: "Client Onboarding",
      target: "https://www.theinternetcompany.one/client",
      description:
        "Submit onboarding information to begin a project with The Internet Company.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className=" bg-black">
        <Hero />
        <Form />
      </div>
    </>
  );
};

export default page;
