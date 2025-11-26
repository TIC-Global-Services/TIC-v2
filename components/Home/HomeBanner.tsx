"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const totalFrames = 150;
  const currentFrame = (index: number) =>
  `/door/${(index + 1).toString().padStart(5, '0')}.avif`;

  const images: HTMLImageElement[] = [];
  const imgSeq = { frame: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      const img = images[imgSeq.frame];
      if (!img || !img.complete) return;
      const canvas = canvasRef.current;
      const context = contextRef.current;
      if (!canvas || !context) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      if (imgWidth === 0 || imgHeight === 0) return;

      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);

      const x = canvasWidth / 2 - (imgWidth / 2) * scale;
      const y = canvasHeight / 2 - (imgHeight / 2) * scale;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(
        img,
        0,
        0,
        imgWidth,
        imgHeight,
        x,
        y,
        imgWidth * scale,
        imgHeight * scale
      );
    };

    images[0].onload = () => {
      render();

      // Canvas animation
      gsap.to(imgSeq, {
        frame: totalFrames - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 1,
          pin: true,
        },
        onUpdate: render,
      });
    };

    canvas.width = 1920;
    canvas.height = 1080;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden"
    >
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-screen object-cover z-10"
        />

<div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-10 h-2/3 translate-y-1/3">
        <h1 className="text-4xl lg:text-[70px] md:text-[91.5px] font-light leading-[92px] tracking-tighter text-white mb-4">
          A Web Branding House
        </h1>


<div>
 <p className="max-w-2xl text-white lg:text-[20px] text-center mb-6">At The Internet Company, we craft immersive 3D CGI websites, striking brand identities, and digital experiences that redefine how audiences interact with brands online.</p>
</div>
      <div>
        <Link
          href="#"
          className="bg-white text-black px-5 py-3 rounded-[15.32px] flex items-center "
        >
          Book a Call
          <MoveRight style={{ clipPath: "inset(0px 0 0px 10px)" }}/>
        </Link>
      </div>
        </div>



        


        {/* Keep Scrolling Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-sm md:text-base font-light tracking-wider ">
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 md:py-3">
            {/* Animated Dot */}
            <div className="flex items-center justify-center">
              <div className="dot-animation bg-black/50" />
            </div>

            {/* Static Text */}
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black/50 whitespace-nowrap leading-none">
              Keep scrolling
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
  .dot-animation {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: pulseCircle 1.5s infinite ease-in-out;
    flex-shrink: 0;
  }

  @media (min-width: 640px) {
    .dot-animation { width: 8px; height: 8px; }
  }

  @media (min-width: 768px) {
    .dot-animation { width: 10px; height: 10px; }
  }

  @media (min-width: 1024px) {
    .dot-animation { width: 12px; height: 12px; }
  }

  @keyframes pulseCircle {
    0%   { opacity: 0.3; transform: scale(0.8) translateX(0); }
    50%  { opacity: 1;   transform: scale(1.2) translateX(2px); }
    100% { opacity: 0.3; transform: scale(0.8) translateX(0); }
  }

  @media (min-width: 640px) {
    @keyframes pulseCircle {
      0%   { opacity: 0.3; transform: scale(0.8) translateX(0); }
      50%  { opacity: 1;   transform: scale(1.2) translateX(3px); }
      100% { opacity: 0.3; transform: scale(0.8) translateX(0); }
    }
  }

  @media (min-width: 768px) {
    @keyframes pulseCircle {
      0%   { opacity: 0.3; transform: scale(0.8) translateX(0); }
      50%  { opacity: 1;   transform: scale(1.2) translateX(4px); }
      100% { opacity: 0.3; transform: scale(0.8) translateX(0); }
    }
  }
`}</style>
    </section>
  );
};

export default HomeBanner;
