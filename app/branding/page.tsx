import HeroVideo from "@/components/Branding/Hero";
import ImageChange from "@/components/Branding/ImageChange";
import Joinus from "@/components/Branding/JoinUs";
import Testimonials from "@/components/Branding/Testimonials";
import Vision from "@/components/Branding/Vision";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding – The Internet Company | Brand Identity, Strategy & Design",
  description:
    "Explore our branding approach at The Internet Company—where strategy, design, storytelling, and digital identity merge to create powerful, modern brands. Includes client success stories and testimonials.",

  keywords: [
    "branding",
    "brand identity design",
    "brand strategy",
    "visual identity",
    "branding agency",
    "The Internet Company",
    "TIC Global Services",
    "brand storytelling",
    "digital branding",
    "creative branding studio",
  ],

  metadataBase: new URL("https://www.theinternetcompany.one"),

  alternates: {
    canonical: "https://www.theinternetcompany.one/branding",
  },

  openGraph: {
    type: "website",
    url: "https://www.theinternetcompany.one/branding",
    title:
      "Branding – The Internet Company | Identity, Strategy & Digital Design",
    description:
      "A refined branding experience: identity systems, strategy, storytelling, and creative direction supported by real client testimonials.",
    siteName: "The Internet Company",
    images: [
      {
        url: "/open-graph/DesignHub.png",
        width: 1200,
        height: 630,
        alt: "Branding – The Internet Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Branding – The Internet Company",
    description:
      "Brand identity, strategy, storytelling, and digital design backed by real client testimonials.",
    images: ["/open-graph/DesignHub.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding Services",
    serviceType: "Brand Identity, Strategy & Design",
    provider: {
      "@type": "Organization",
      name: "The Internet Company",
      url: "https://www.theinternetcompany.one",
      logo: "https://www.theinternetcompany.one/tic_logo.svg",
      sameAs: [
        "https://www.linkedin.com/company/tic-global-services/",
        "https://www.instagram.com/the.internetcompany",
      ],
    },
    description:
      "Brand identity, strategy, digital storytelling, and visual design services by The Internet Company.",

    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jagdev Soni",
        },
        reviewBody:
          "They reimagined our visual system with a fresh, modern perspective. The result feels premium and intentional.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "ӓli",
        },
        reviewBody:
          "Impressed with their process and the final outcome. Our brand feels significantly more polished and cohesive.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="">
        <HeroVideo />
        <ImageChange />
        <Joinus />
        <Testimonials />
        <Vision />
      </div>
    </>
  );
}
