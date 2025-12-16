"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi2";
import Container from "@/components/Reusbale/Container";
import { usePathname } from "next/navigation";
import { PopupModal } from "react-calendly";
import gsap from 'gsap'


// Navigation items
const navItems = [
  { name: "About", link: "/about" },
  { name: "Design House", link: "/design-house" },
  { name: "Client Portal", link: "/client" },
  { name: "Your Brand", link: "/branding" },
  { name: "Archive", link: "/archive" },
  { name: "Contact", link: "/contact" },
  { name: "Abu Dhabi", link: "https://ticbyakwad.com/" },
];

const FnavItems = [{ name: "Home", link: "/" }, ...navItems];

const Navbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const plusIconRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuLinksRef = useRef<HTMLDivElement | null>(null);
  const socialLinksRef = useRef<HTMLDivElement | null>(null);
  const overlayLogoRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 100, opacity: 0 });

  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const calendlyRootRef = useRef<HTMLElement | null>(null);

  const isWhiteBg =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/archive";

  const isClient =
    pathname === "/client" ||
    pathname === "/design-house" ||
    pathname === "/branding";

  const lastScrollY = useRef(0);
const ticking = useRef(false);


  /* -------------------------------
     INITIAL STATES (RUN ONCE)
  -------------------------------- */
  useEffect(() => {
    calendlyRootRef.current = document.body;

    if (menuButtonRef.current) {
      gsap.set(menuButtonRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -20,
      });
    }

    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        visibility: "hidden",
        opacity: 0,
      });
    }

    gsap.set(
      [menuLinksRef.current, socialLinksRef.current, overlayLogoRef.current],
      { opacity: 0, y: 50 }
    );
  }, []);

  /* -------------------------------
     NAVBAR SCROLL ANIMATION
     (LISTENS TO HERO PIN)
  -------------------------------- */
  useEffect(() => {
  if (!navbarRef.current || !menuButtonRef.current) return;

  const navbar = navbarRef.current;
  const menuBtn = menuButtonRef.current;

  // initial state
  navbar.style.transform = "translateY(0)";
  navbar.style.opacity = "1";

  menuBtn.style.opacity = "0";
  menuBtn.style.transform = "translateY(-20px) scale(0.8)";

  const onScroll = () => {
    if (ticking.current) return;

    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;

      // SCROLL DOWN → hide navbar, show menu
      if (currentY > 80) {
        navbar.style.transform = "translateY(-80px)";
        navbar.style.opacity = "0";

        menuBtn.style.opacity = "1";
        menuBtn.style.transform = "translateY(0) scale(1)";
      } 
      // TOP → show navbar, hide menu
      else {
        navbar.style.transform = "translateY(0)";
        navbar.style.opacity = "1";

        menuBtn.style.opacity = "0";
        menuBtn.style.transform = "translateY(-20px) scale(0.8)";
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);


  /* -------------------------------
     ACTIVE / HOVER NAV BG
  -------------------------------- */
  useEffect(() => {
    const index = navItems.findIndex((i) => i.link === pathname);
    setActiveIndex(index === -1 ? null : index);
  }, [pathname]);

  useEffect(() => {
    const index = hoveredIndex ?? activeIndex;
    if (index === null) {
      setBgStyle((p) => ({ ...p, opacity: 0 }));
      return;
    }

    const el = navRefs.current[index];
    if (!el) return;

    setBgStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  }, [hoveredIndex, activeIndex]);

  /* -------------------------------
     MENU OPEN / CLOSE
  -------------------------------- */
  const openMenu = useCallback(() => {
    if (!overlayRef.current || !plusIconRef.current) return;

    gsap.set(overlayRef.current, { visibility: "visible", opacity: 1 });

    gsap.to(plusIconRef.current, {
      rotation: 45,
      scale: 1.1,
      duration: 0.3,
    });

    gsap.to(overlayRef.current, {
      clipPath: "circle(150% at 95% 5%)",
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(
      [overlayLogoRef.current, menuLinksRef.current, socialLinksRef.current],
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        delay: 0.2,
      }
    );
  }, []);

  const closeMenu = useCallback(() => {
    if (!overlayRef.current || !plusIconRef.current) return;

    gsap.to(plusIconRef.current, {
      rotation: isHovering ? 22.5 : 0,
      scale: 1,
      duration: 0.3,
    });

    gsap.to(
      [overlayLogoRef.current, menuLinksRef.current, socialLinksRef.current],
      {
        opacity: 0,
        y: 30,
        stagger: 0.05,
      }
    );

    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at 95% 5%)",
      duration: 0.4,
      delay: 0.1,
      onComplete: () => {
        gsap.set(overlayRef.current, {
          visibility: "hidden",
          opacity: 0,
        });
      },
    });
  }, [isHovering]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((p) => {
      !p ? openMenu() : closeMenu();
      return !p;
    });
  }, [openMenu, closeMenu]);

  /* -------------------------------
     HOVER EFFECT
  -------------------------------- */
  const handleHoverEnter = () => {
    setIsHovering(true);
    if (!isMenuOpen && plusIconRef.current) {
      gsap.to(plusIconRef.current, { rotation: 22.5, duration: 0.25 });
    }
  };

  const handleHoverLeave = () => {
    setIsHovering(false);
    if (!isMenuOpen && plusIconRef.current) {
      gsap.to(plusIconRef.current, { rotation: 0, duration: 0.25 });
    }
  };

  // Close menu when link is clicked
  const handleLinkClick = useCallback(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen, toggleMenu]);

  // useEffect(() => {

  //   const targetIndex = hoveredIndex ?? activeIndex;

  //   if (targetIndex !== null && navRefs.current[targetIndex]) {
  //     const element = navRefs.current[targetIndex];
  //     const parent = element?.parentElement;

  //     if (element && parent) {
  //       const elementRect = element.getBoundingClientRect();
  //       const parentRect = parent.getBoundingClientRect();

  //       setBgStyle({
  //         left: element.offsetLeft,
  //         width: elementRect.width,
  //         opacity: 1,
  //       });
  //     }
  //   } else {
  //     setBgStyle((prev) => ({ ...prev, opacity: 0 }));
  //   }
  // }, [hoveredIndex, activeIndex]);

  useEffect(() => {
    const index = navItems.findIndex((item) => item.link === pathname);
    setActiveIndex(index === -1 ? null : index);
  }, [pathname]);

  useEffect(() => {
    const index = hoveredIndex ?? activeIndex;
    if (index === null) {
      setBgStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const target = navRefs.current[index];
    if (!target) return;

    const { offsetLeft, offsetWidth } = target;

    setBgStyle({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  }, [hoveredIndex, activeIndex]);

  return (
    <>
      {/* Main Navigation */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-40 bg-transparent"
      >
        <Container className="flex items-center justify-between  py-4 sm:py-6 lg:py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                // src={
                //   isWhiteBg
                //     ? "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/tic%20(3)%201.png?updatedAt=1759839855964"
                //     : "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/newLogo.png?updatedAt=1751867093209"
                // }
                src={!isClient ? "/tic_logo.svg" : "/logo_white.png"}
                alt="The Internet Company Logo"
                width={200}
                height={100}
                className=" w-14 h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          {/* <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={`nav-${index}`}
                href={item.link}
                className={`text-base xl:text-[19px] font-normal transition-colors duration-300 relative group ${
                  isWhiteBg
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div> */}
          <div className="relative hidden lg:flex flex-row justify-center items-center bg-white/20 backdrop-blur-md rounded-[20.52px] px-2 ">
            {/* Floating background that moves to hovered/active item */}
            <div
              className="absolute bg-black/90 rounded-[15.32px]  transition-all duration-300 ease-out "
              style={{
                left: `${bgStyle.left}px`,
                width: `${bgStyle.width}px`,
                height: "calc(100% - 12px)",
                top: "7px",
                opacity: bgStyle.opacity,
              }}
            />

            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                className="relative z-10"
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-center pt-[13px] pb-[13px] px-5">
                  <span
                    className={`
    text-[14.9px] md:text-[13.5px] font-normal whitespace-nowrap transition-colors duration-300
    ${
      index === hoveredIndex
        ? "text-white"
        : // ✔ Active item (but only white when highlight stays under it)
        index === activeIndex
        ? hoveredIndex === null
          ? "text-white" // active + NO hover → keep white
          : " text-black" // active + hover on other item → turn black
        : // ✔ Default (non-hover, non-active)
        isWhiteBg
        ? "text-black"
        : "text-white/70"
    }
  `}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button - Responsive sizing */}
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="text-sm cursor-pointer sm:text-base lg:text-[16px] 
    rounded-[12px] font-light transition-all duration-300 shadow-lg 
    bg-black text-white px-5 py-2 hover:bg-black/80"
          >
            Let&apos;s talk
          </button>

          {calendlyRootRef.current && (
            <PopupModal
              url="https://calendly.com/theinternetcompany01/30min"
              open={isCalendlyOpen}
              onModalClose={() => setIsCalendlyOpen(false)}
              rootElement={calendlyRootRef.current}
            />
          )}
        </Container>
      </nav>

      {/* Floating Menu Button - Higher z-index and responsive positioning */}
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        className="fixed top-4 right-4 sm:top-5 sm:right-5 lg:top-7 lg:right-6 z-100 w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 bg-white cursor-pointer rounded-full flex items-center justify-center shadow-md transition-all duration-300 group
  lg:hover:bg-black lg:hover:scale-105 "
        style={{ opacity: 0 }}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div
          ref={plusIconRef}
          className="transition-transform duration-300 ease-out"
        >
          <HiPlus className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-black lg:group-hover:text-white transition-colors duration-300" />
        </div>
      </button>

      {/* Full Screen Overlay Menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 opacity-0 invisible overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        <div className="min-h-screen w-full flex flex-col  lg:justify-between gap-10 lg:flex-row px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative">
          {/* Logo */}
          <div className=" flex justify-start md:mb-0">
            <div ref={overlayLogoRef} className="flex-shrink-0 ">
              <a href="/" onClick={handleLinkClick}>
                <img
                  src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/newLogo.png?updatedAt=1751867093209"
                  alt="The Internet Company Logo"
                  className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Navigation + Social */}
          <div className="w-full md:w-[40%] flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-20">
            {/* Menu Items */}
            <div ref={menuLinksRef}>
              <nav className="space-y-3 sm:space-y-4" id="menu-title">
                {FnavItems.map((item, index) => (
                  <div key={index} className="relative w-fit">
                    <Link
                      href={item.link}
                      onClick={handleLinkClick}
                      className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white hover:text-gray-400 transition"
                    >
                      {item.name}
                    </Link>

                    {/* Badges */}
                    {item.name === "Client Portal" && (
                      <span className="absolute -top-2 -right-10 sm:-right-12 lg:-right-14 px-2 py-1 text-xs bg-[#c7e55b] text-black rounded">
                        New
                      </span>
                    )}
                    {item.name === "Archive" && (
                      <span className="absolute -top-2 -right-8 sm:-right-10 lg:-right-12 px-2 py-1 text-xs bg-gray-700 text-white rounded">
                        36
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div
              ref={socialLinksRef}
              className="flex flex-col items-start gap-2 pt-4 md:pt-20"
            >
              {[
                {
                  href: "https://www.instagram.com/the.internetcompany",
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/tic-global-services/",
                  label: "LinkedIn",
                },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg lg:text-3xl tracking-tight text-white hover:text-gray-500 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
            onClick={() => console.log("Close menu")}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Bottom section */}
          {/* <div className="absolute bottom-6 left-4 sm:left-6 flex flex-col gap-3">
            <Link href="/contact">
              <button
                onClick={handleLinkClick}
                className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
              >
                Contact
              </button>
            </Link>
          </div>

          <div className="hidden md:absolute bottom-6 right-4 sm:right-6 text-right">
            <p className="text-xs sm:text-sm text-gray-500">
              © Copyright TIC INTERNET COMPANY
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
