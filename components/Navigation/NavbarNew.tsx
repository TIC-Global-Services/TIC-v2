"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: "Home", link:"/"},
  { name: "About", link: "/about" },
  { name: "Design House",link: "/design-house"},
  { name: "Client Portal",link: "/client",},
  { name: "Archive", link: "/archive" },
  { name: "Branding", link: "/branding" },
];

const NavbarNew = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const isActive = (link: string) => {
    if (link.startsWith('http')) return false;
    if (link === '/' && pathname === '/') return true;
    if (link !== '/' && pathname.startsWith(link)) return true;
    return false;
  };

  useEffect(() => {
    const active = navItems.findIndex(item => isActive(item.link));
    setActiveIndex(active !== -1 ? active : null);
  }, [pathname]);

  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    
    if (targetIndex !== null && navRefs.current[targetIndex]) {
      const element = navRefs.current[targetIndex];
      const parent = element?.parentElement;
      
      if (element && parent) {
        const elementRect = element.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        
        setBgStyle({
          left: element.offsetLeft,
          width: elementRect.width,
          opacity: 1,
        });
      }
    } else {
      setBgStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 w-full'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-row items-center justify-between'>
          {/* Logo */}
          <Link href="/" className='flex-shrink-0'>
            <Image 
              src='https://ik.imagekit.io/99y1fc9mh/TIC_Akwad/Frame%205.png?updatedAt=1759756217013' 
              alt='The Internet Company' 
              width={320} 
              height={320} 
              className='w-54 h-54 md:w-48 md:h-38 object-contain transition-transform hover:scale-105' 
              priority
            />
          </Link>

          {/* Navigation Items */}
          <div className='relative flex flex-row items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-2 '>
            {/* Floating background that moves to hovered/active item */}
            <div 
              className='absolute bg-black/90 rounded-full transition-all duration-300 ease-out'
              style={{
                left: `${bgStyle.left}px`,
                width: `${bgStyle.width}px`,
                height: 'calc(100% - 16px)',
                top: '8px',
                opacity: bgStyle.opacity,
              }}
            />
            
            {navItems.map((item, index) => (
              <Link 
                href={item.link} 
                key={index} 
                ref={(el) => { navRefs.current[index] = el; }}
                className='relative z-10'
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='px-4 py-2 text-center'>
                  <span className='text-sm md:text-[13.5px] font-normal text-white whitespace-nowrap'>
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className='bg-black text-white px-5 py-2 rounded-full hover:bg-black/80 transition-colors duration-300'
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;