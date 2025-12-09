"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    // Split text into characters for top text
    const topSplit = new SplitText(topTextRef.current, { type: "chars" });

    // Split text into characters for bottom text
    const bottomSplit = new SplitText(bottomTextRef.current, { type: "chars" });

    // Animation for top-right text (letter by letter)
    gsap.fromTo(
      topSplit.chars,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: topTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for bottom-left text (letter by letter)
    gsap.fromTo(
      bottomSplit.chars,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      topSplit.revert();
      bottomSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className="h-[100dvh] w-full flex items-end bg-cover"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/82e78d144af04f280594a334c1dc1c109956c699.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-15 px-8 md:px-16 lg:px-14 max-w-4xl text-white">
          <h1 className="font-normal tracking-tighter text-[70px] md:text-[90px] leading-[1.1] mb-4">
            Design House
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">
            We're a design house built for bold ideas and modern brands. From
            concept to execution, we blend strategy with storytelling to build
            brands that connect, convert, and stand out in a noisy world.
          </p>
        </div>
      </div>

      {/* Brand Video */}
      <div className="relative h-[100dvh] bg-white w-full overflow-hidden flex items-center justify-center">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/vid%2001.mp4?updatedAt=1761288663851"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Top-right paragraph */}
        <div className="absolute top-15 right-15 max-w-xl tracking-tighter text-left text-black z-10 pl-4">
          <p ref={topTextRef} className="text-lg md:text-xl font-normal">
            Eye-catching visuals for ads, websites, and product mockups. Artists
            use 3D tools to craft unique, collectible digital art. Visualize
            spaces before they're built. 3D environments for immersive shopping
            or brand experiences.
          </p>
        </div>

        {/* Bottom-left paragraph */}
        <div className="absolute bottom-15 left-15 max-w-[589px] tracking-tighter text-left text-black z-10 pr-4">
          <p ref={bottomTextRef} className="text-lg md:text-xl font-normal text-justify">
            Every website we create is designed with international UI/UX
            standards so that your brand looks credible across any audience,
            anywhere in the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
