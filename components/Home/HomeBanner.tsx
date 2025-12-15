"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { PopupModal } from "react-calendly";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const totalFrames = 150;
  const currentFrame = (i: number) =>
    `/door/${(i + 1).toString().padStart(5, "0")}.avif`;

  const [progress, setProgress] = useState(0);
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const calendlyRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    calendlyRootRef.current = document.body;
  }, []);

  useEffect(() => {
    let images: HTMLImageElement[] = [];
    let imgSeq = { frame: 0 };
    let ctx: CanvasRenderingContext2D | null = null;

    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;
    contextRef.current = ctx;

    /** -------------------------
     * Percentage Loader
     --------------------------*/
    const preloadImages = (): Promise<void> => {
      return new Promise((resolve) => {
        let loaded = 0;

        for (let i = 0; i < totalFrames; i++) {
          const img = new Image();
          img.src = currentFrame(i);

          img.onload = handleLoaded;
          img.onerror = handleLoaded;

          images.push(img);
        }

        function handleLoaded() {
          loaded++;
          const percent = Math.round((loaded / totalFrames) * 100);
          setProgress(percent);

          if (loaded === totalFrames) resolve();
        }
      });
    };

    /** -------------------------
     * Canvas Rendering
     --------------------------*/
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    const render = () => {
      const img = images[imgSeq.frame];
      if (!img || !ctx) return;

      const cw = canvas!.width;
      const ch = canvas!.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const x = cw / 2 - (iw / 2) * scale;
      const y = ch / 2 - (ih / 2) * scale;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, x, y, iw * scale, ih * scale);
    };

    /** -------------------------
     * Start Preloading
     --------------------------*/
    preloadImages().then(() => {
      setTimeout(() => setIsLoaderDone(true), 300); // fade-out delay

      resizeCanvas();
      render();

      ScrollTrigger.getAll().forEach((t) => t.kill());

      gsap.to(imgSeq, {
        frame: totalFrames - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${isMobile ? 1500 : 3500}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    });

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll()
        .filter((t) => t.vars.trigger === sectionRef.current)
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-pin="main"
      className="w-full h-screen relative overflow-hidden"
    >
      {/* --------------------------------------------------
          FULL PAGE LOADER (PERCENTAGE)
       -------------------------------------------------- */}
      <div
        className={`fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-700 ${
          isLoaderDone ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <p className="text-white text-6xl md:text-8xl font-light tracking-tight">
          {progress}%
        </p>
      </div>

      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-screen object-cover z-10"
        />

        {/* TEXT BLOCK */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-10 h-2/3 translate-y-1/3 mix-blend-difference text-white">
          <p className="text-[30px] md:text-[60px] lg:text-[75px] tracking-[-2.6px] lg:tracking-[-3.6px] text-center leading-[40px] md:leading-[70px] font-normal">
            A Web Branding House
          </p>

          <p className="max-w-3xl font-light lg:text-[18px] leading-6 text-center mb-3">
            At The Internet Company, we craft immersive 3D CGI websites,
            striking brand identities, and digital experiences that redefine how
            audiences interact with brands online.
          </p>

          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="bg-white cursor-pointer text-black px-5 py-3 rounded-[15.32px] flex items-center"
          >
            Book a Call
            <MoveRight />
          </button>

          {calendlyRootRef.current && (
            <PopupModal
              url="https://calendly.com/theinternetcompany01/30min"
              open={isCalendlyOpen}
              onModalClose={() => setIsCalendlyOpen(false)}
              rootElement={calendlyRootRef.current}
            />
          )}
        </div>

        {/* KEEP SCROLLING */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white">
          <div className="flex items-center gap-2">
            <div className="dot-animation bg-black/50" />
            <span className="text-black/50">Keep scrolling</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dot-animation {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: pulseCircle 1.4s infinite ease-in-out;
        }
        @keyframes pulseCircle {
          0% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
