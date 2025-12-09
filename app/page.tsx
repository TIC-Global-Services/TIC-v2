import HomeBanner from "@/components/Home/HomeBanner";
import Works from "@/components/Home/Work";
import Faq from "@/components/Home/Faq";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Internet Company",
    alternateName: ["TIC Global Services"],
    url: "https://www.theinternetcompany.one",
    description:
      "A creative digital branding studio specializing in UI/UX design, website development, branding, and digital experiences.",
    logo: "https://www.theinternetcompany.one/tic_logo.svg",
    sameAs: [
      "https://www.instagram.com/theinternetcompany.one",
      "https://www.linkedin.com/company/tic-global-services/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <HomeBanner />
        <Works />
        <Faq />
      </div>
    </>
  );
}
