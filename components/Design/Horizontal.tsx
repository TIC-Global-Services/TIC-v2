"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register plugin outside component to avoid re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Horizontal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/BrandBooks/Atlya.pdf'; // Update this path to your actual PDF file
    link.download = 'Atlya.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const initializeScrollTrigger = useCallback(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (!container || !sections) return;

    // Calculate scroll distance
    const scrollWidth = sections.scrollWidth - window.innerWidth;

    // Create animation with ScrollTrigger
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => `+=${scrollWidth}`,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      animation: gsap.to(sections, {
        x: () => -scrollWidth,
        ease: "none",
      }),
    });
  }, []);

  useEffect(() => {
    // Ensure ScrollTrigger is ready
    const initTimer = setTimeout(() => {
      initializeScrollTrigger();
    }, 100);

    // Handle resize with debouncing
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      clearTimeout(initTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      // Kill all ScrollTriggers associated with this component
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [initializeScrollTrigger]);

  return (
    <div className="bg-[#f5f5f5]">
      {/* Horizontal scroll container */}
      <div ref={containerRef} className="h-screen overflow-hidden relative cursor-none">
        {isHovering && (
          <div
            className="fixed pointer-events-none z-50 transition-opacity duration-200 flex items-center gap-3"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer circle */}
            <div className="relative w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
              {/* Inner dot */}
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>

            {/* Text beside circle */}
            <div className="text-black text-2xl font-medium whitespace-nowrap">
              click to view brandbook
            </div>
          </div>
        )}
        <div ref={sectionsRef} className="flex h-full w-max">
          <section
            style={{
              backgroundImage: `url('https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/Untitled%20design%20(20)%201.png?updatedAt=1761288663001')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative h-screen w-screen flex items-center justify-center flex-shrink-0"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
          >
            <h1 className="text-black absolute top-16 right-10 max-w-md text-xl tracking-tighter">
              The primary font used for heading is "Robodron". This remains
              consistent with the crypto space being decentralized and playing
              on its clarity.
            </h1>

            <h1 className="text-black absolute bottom-16 left-10 max-w-lg text-xl tracking-tighter">
              The main logo consists of an icon and wordmark. The wordmark is
              minimal but reflective of the brand's long-term intentions with
              developing the crypto space. The main focus of the logo is the
              icon, and its use should reflect this.
            </h1>
          </section>

          <section className="h-screen w-screen flex flex-col items-center justify-center bg-white flex-shrink-0">
            <Image
              src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/Palette.png?updatedAt=1761736148448"
              alt="new"
              width={1350}
              height={1350}
            />
            <h1 className="text-black max-w-[1380px] mx-auto text-[25px] leading-[30px]  tracking-tighter mt-10">
              Touching on the brand's concept of integrity and support
              Lightspeed Listing's color palette blends a vibrant and dimmed
              blue with greyscale for a simple yet effective palette which will
              be easy to utilize for the team.
            </h1>
          </section>
          <section className="h-screen w-screen flex items-center justify-center bg-white flex-shrink-0">
            <div
              className="flex flex-col items-center justify-center max-w-7xl mx-auto px-8 w-full
            "
            >
              <div className="flex flex-row justify-between w-full max-w-8xl mx-auto gap-5 items-center">
                <div className="flex flex-row gap-4">
                  <div className="bg-[#FDFBD9] rounded-[20px] h-60 w-60 border-black text-black flex items-end py-4 px-4">
                    Light Ivory{" "}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h1 className="text-[#8B8B8B]">HEX</h1>
                      <p className="text-black">#FDFBD9</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">RGB</h1>
                      <p className="text-black">253,251,217</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">HSL</h1>
                      <p className="text-black">56°, 87%, 92%</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">CYMK</h1>
                      <p className="text-black">0%, 0.8%, 14.2%, 0.8%</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-4">
                  <div className="bg-[#1A1619] rounded-[20px] h-60 w-60  text-white py-4 px-4 flex items-end">
                    Raisin Black{" "}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h1 className="text-[#8B8B8B]">HEX</h1>
                      <p className="text-black">#1A1619</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">RGB</h1>
                      <p className="text-black">26, 22, 25</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">HSL</h1>
                      <p className="text-black">310°, 8%, 9%</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">CYMK</h1>
                      <p className="text-black">0%, 15.4%, 3.8%, 89.8%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-20 w-full max-w-8xl mx-auto gap-5 items-center">
                <div className="flex flex-row gap-4">
                  <div className="bg-[#FAF6F9] rounded-[20px] h-60 w-60 border-black text-black flex items-end py-4 px-4">
                    Lavender Blush
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h1 className="text-[#8B8B8B]">HEX</h1>
                      <p className="text-black">#FAF6F9</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">RGB</h1>
                      <p className="text-black">253,251,217</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">HSL</h1>
                      <p className="text-black">56°, 87%, 92%</p>
                    </div>
                    <div>
                      <h1 className="text-[#8B8B8B]">CYMK</h1>
                      <p className="text-black">0%, 0.8%, 14.2%, 0.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="h-screen w-screen flex items-center justify-center bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center px-5">
              <div className="flex">
                <Image
                  src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/lightspeed%20poster%202.png?updatedAt=1761288663004"
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-[600px] w-[950px] object-cover"
                />
                <Image
                  src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/lightspeed%20mockips2%201.png?updatedAt=1761288662648"
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-[600px] w-[550px] object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;