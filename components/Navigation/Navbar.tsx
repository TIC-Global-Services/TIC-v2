"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiPlus } from "react-icons/hi2";
import Container from "@/components/Reusbale/Container";
import { usePathname } from "next/navigation";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Navigation items
const navItems = [
  { name: "About", link: "/about" },
  {
    name: "Design House",
    link: "/design-house",
  },
  {
    name: "Client Portal",
    link: "/client",
  },
  {
    name: "Your Brand",
    link: "http://branding.theinternetcompany.one/",
  },
  { name: "Archive", link: "/archive" },
  { name: "Contact", link: "/contact" },
  { name: "Abu Dhabi", link: "https://ticbyakwad.com/" },
];

const FnavItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Design House",
    link: "/about",
  },
  {
    name: "Client Portal",
    link: "/client",
  },
  {
    name: "Your Brand",
    link: "http://branding.theinternetcompany.one/",
  },
  { name: "Archive", link: "/archive" },
  { name: "Contact", link: "/contact" },
  // { name: "Contact", link: "https://www.theinternetcompany.one/contact" },
  { name: "Abu Dhabi", link: "https://ticbyakwad.com/" },
];
const Navbar = () => {
  // References for DOM elements
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const plusIconRef = useRef(null);
  const overlayRef = useRef(null);
  const menuLinksRef = useRef(null);
  const socialLinksRef = useRef(null);
  const overlayLogoRef = useRef(null);

  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 100, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isWhiteBg =
    pathname === "/contact" ||
    pathname === "/archive" ||
    pathname === "/about" ||
    pathname === "/";

  const isClient = pathname === "/client";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "column_view" });
    })();
  }, []);

  // Setup initial element states
  const setupInitialStates = useCallback(() => {
    if (!menuButtonRef.current || !overlayRef.current) return;

    // Hide menu button initially
    gsap.set(menuButtonRef.current, {
      opacity: 0,
      scale: 0.8,
      y: -20,
    });

    // Hide overlay initially
    gsap.set(overlayRef.current, {
      clipPath: "circle(0% at 95% 5%)",
      visibility: "hidden",
    });

    // Hide overlay content initially
    const overlayElements = [
      menuLinksRef.current,
      socialLinksRef.current,
      overlayLogoRef.current,
    ].filter(Boolean);
    if (overlayElements.length > 0) {
      gsap.set(overlayElements, {
        opacity: 0,
        y: 50,
      });
    }
  }, []);

  // Setup scroll-based animations
  const setupScrollAnimations = useCallback(() => {
    if (!navbarRef.current || !menuButtonRef.current) return;

    return ScrollTrigger.create({
      trigger: document.body,
      start: "50px top",
      end: "20px top",
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        // Navbar fade out smoothly
        const navbarOpacity = Math.max(0, 1 - progress * 2);
        const navbarY = progress * -80;

        // Menu button fade in with proper timing
        const buttonOpacity = Math.min(1, Math.max(0, (progress - 0.3) * 2));
        const buttonScale = 0.8 + buttonOpacity * 0.2;
        const buttonY = -20 + buttonOpacity * 20;

        // Animate navbar
        gsap.set(navbarRef.current, {
          y: navbarY,
          opacity: navbarOpacity,
        });

        // Animate menu button (only when navbar is mostly hidden)
        gsap.set(menuButtonRef.current, {
          opacity: buttonOpacity,
          scale: buttonScale,
          y: buttonY,
        });
      },
    });
  }, []);

  // Open menu animation
  const openMenu = useCallback(() => {
    if (!overlayRef.current || !plusIconRef.current) return;

    gsap.set(overlayRef.current, { visibility: "visible", opacity: 1 });

    // Animate plus icon to X
    gsap.to(plusIconRef.current, {
      rotation: 45,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Expand overlay
    gsap.to(overlayRef.current, {
      clipPath: "circle(150% at 95% 5%)",
      duration: 0.6,
      ease: "power3.inOut",
    });

    // Animate overlay content with stagger
    const tl = gsap.timeline({ delay: 0.2 });

    if (overlayLogoRef.current) {
      tl.to(overlayLogoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (menuLinksRef.current) {
      tl.to(
        menuLinksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    if (socialLinksRef.current) {
      tl.to(
        socialLinksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  }, []);

  // Close menu animation
  const closeMenu = useCallback(() => {
    if (!plusIconRef.current || !overlayRef.current) return;

    // Reset plus icon based on hover state
    const targetRotation = isHovering ? 22.5 : 0;
    gsap.to(plusIconRef.current, {
      rotation: targetRotation,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Hide overlay content
    const overlayElements = [
      overlayLogoRef.current,
      menuLinksRef.current,
      socialLinksRef.current,
    ].filter(Boolean);
    if (overlayElements.length > 0) {
      gsap.to(overlayElements, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: 0.05,
      });
    }

    // Collapse overlay
    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at 95% 5%)",
      duration: 0.4,
      delay: 0.1,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(overlayRef.current, { visibility: "hidden", opacity: 0 });
      },
    });
  }, [isHovering]);

  // Handle menu toggle
  const toggleMenu = useCallback(() => {
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen, openMenu, closeMenu]);

  // Handle hover enter
  const handleHoverEnter = useCallback(() => {
    setIsHovering(true);
    if (!isMenuOpen && plusIconRef.current) {
      gsap.to(plusIconRef.current, {
        rotation: 22.5,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  // Handle hover leave
  const handleHoverLeave = useCallback(() => {
    setIsHovering(false);
    if (!isMenuOpen && plusIconRef.current) {
      gsap.to(plusIconRef.current, {
        rotation: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  // Close menu when link is clicked
  const handleLinkClick = useCallback(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen, toggleMenu]);

  // Setup animations on mount
  useEffect(() => {
    setupInitialStates();
    const scrollTrigger = setupScrollAnimations();

    // Cleanup function
    return () => {
      if (scrollTrigger) scrollTrigger.kill();
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setupInitialStates, setupScrollAnimations]);
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    setupInitialStates();
    const trigger = setupScrollAnimations();
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      trigger?.kill();
    };
  }, [pathname]);

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
        <Container className="flex items-center justify-between lg:p-10 py-4 sm:py-6 lg:py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                // src={
                //   isWhiteBg
                //     ? "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/tic%20(3)%201.png?updatedAt=1759839855964"
                //     : "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/newLogo.png?updatedAt=1751867093209"
                // }
                src={!isClient ? "/tic_logo.svg" : "/tic_logo_white.png"}
                alt="The Internet Company Logo"
                width={200}
                height={100}
                className={
                  !isClient
                    ? "h-15 sm:h-19 lg:h-20 w-auto"
                    : "h-15 sm:h-19 lg:h-30 w-auto"
                }
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
                className={`text-base xl:text-[19px] font-medium transition-colors duration-300 relative group ${
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
      // ✔ Hover wins
      index === hoveredIndex
        ? "text-white"
        : // ✔ Active item (but only white when highlight stays under it)
        index === activeIndex
        ? hoveredIndex === null
          ? "text-white" // active + NO hover → keep white
          : "text-black" // active + hover on other item → turn black
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
            data-cal-namespace="discovery-call"
            data-cal-link="theinternetcompany/discovery-call"
            data-cal-config='{"layout":"column_view"}'
            className="text-sm cursor-pointer sm:text-base lg:text-[16px] p-(14px,20px,14px,20px) sm:px-4  rounded-[12px] font-light transition-all duration-300 shadow-lg bg-black text-white px-5 py-2  hover:bg-black/80"
          >
            Let&apos;s talk
          </button>
        </Container>
      </nav>

      {/* Floating Menu Button - Higher z-index and responsive positioning */}
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        className="fixed top-4 right-4 sm:top-5 sm:right-5 lg:top-7 lg:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 bg-white cursor-pointer rounded-full flex items-center justify-center shadow-md transition-all duration-300 group
  lg:hover:bg-black lg:hover:scale-105 lg:hover:shadow-lg"
        style={{ opacity: 0 }}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <div
          ref={plusIconRef}
          className="transition-transform duration-300 ease-out"
        >
          <HiPlus className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-black group-hover:text-white transition-colors duration-300" />
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
                      className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white hover:text-gray-400 transition"
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
