import HeroVideo from "@/components/Branding/Hero";
import HomeBanner from "@/components/Home/HomeBanner";
import ImageChange from "@/components/Branding/ImageChange";
import Joinus from "@/components/Branding/JoinUs";
import Testimonials from "@/components/Branding/Testimonials";
import Vision from "@/components/Branding/Vision";
import Works from "@/components/Home/Work";
import Faq from "@/components/Home/Faq";
export default function Home() {
  return (
    <div className="">
      {/* <HeroVideo /> */}
      <HomeBanner />
      <Works />
      <Faq />
      {/* <ImageChange /> */}
      {/* <Joinus />
      <Testimonials /> */}
      {/* <Vision /> */}
    </div>
  );
}
