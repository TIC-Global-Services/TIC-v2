import React from "react";
import Getintouch from "@/components/contact/getintouch";
import Container from "@/components/Reusbale/Container";
import SocialsCard from "@/components/contact/socialsCard";
import Contacts from "@/components/contact/Contacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact – The Internet Company | Start Your Project or Ask a Question",
  description:
    "Get in touch with The Internet Company. Whether you're starting a project, exploring collaboration, or simply asking a question, we're here to help build meaningful digital experiences.",

  keywords: [
    "contact",
    "contact The Internet Company",
    "talk to branding agency",
    "start a project",
    "digital agency contact",
    "The Internet Company",
    "TIC Global Services",
    "branding consultation",
    "design agency inquiry",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/contact",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/contact",
    title: "Contact – The Internet Company",
    description:
      "Reach out to our team to begin your project or discuss your brand and design needs.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/Contcat.png",
        width: 1200,
        height: 630,
        alt: "Contact – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact – The Internet Company",
    description:
      "Connect with our team to begin your next digital or branding project.",
    images: ["/open-graph/Contcat.png"],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact – The Internet Company",
    url: "https://www.theinternetcompany.one/contact",
    description:
      "Contact The Internet Company to begin your branding, design, or digital experience project.",

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

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Partnership & Collab",
        name: "Pragya",
        jobTitle: "Founder",
        email: "founder@theinternetcompany.one",
        availableLanguage: ["English", "Tamil"],
        url: "https://www.theinternetcompany.one/contact",
      },
      {
        "@type": "ContactPoint",
        contactType: "Design & Creative",
        name: "Gokul",
        jobTitle: "Senior Designer",
        email: "design@theinternetcompany.one",
        availableLanguage: ["English", "Tamil"],
        url: "https://www.theinternetcompany.one/contact",
      },
      {
        "@type": "ContactPoint",
        contactType: "Development & Tech",
        name: "Mano",
        jobTitle: "Senior Software Developer",
        email: "dev@theinternetcompany.one",
        availableLanguage: ["English", "Tamil"],
        url: "https://www.theinternetcompany.one/contact",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#F5F5F5]">
        <Container>
          <Getintouch />
          <SocialsCard />
          <Contacts />
        </Container>
      </div>
    </>
  );
};

export default page;
