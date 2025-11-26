"use client";
import React, { useState } from "react";
import Image from "next/image";

const Attar = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/BrandBooks/AMAE.pdf"; 
    link.download = "AMAE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      {/* === FIRST SECTION WITH SPECIAL CURSOR === */}
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
        className="relative cursor-none" // hides the default cursor
      >
        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/attar.png?updatedAt=1761809418016"
          alt="Attar Bazzar"
          width={1500}
          height={1500}
          className="w-full h-[900px]"
        />

        {/* Custom cursor visible only inside this section */}
        {isHovering && (
          <div
            className="fixed pointer-events-none z-50 transition-opacity duration-150 flex items-center gap-3"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <div className="text-white text-2xl font-medium whitespace-nowrap">
              click to view brandbook
            </div>
          </div>
        )}
      </section>

      {/* === SECOND SECTION === */}
      <section className="bg-[#4114D5] h-[700px] flex flex-col items-center justify-between text-center px-6 py-10">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/Asset%201%201.png?updatedAt=1761808749551"
            alt="Perky paws"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <h1 className="text-white text-lg max-w-6xl mb-6">
          We built this logo & Packaging to make sure Playful Paws Meet Purrfect
          Products. We use vibrant purple (#6d00c2) and tangy orange (#ffb552)
          for our primary colors, playfully contrasted by a lineup of cool and
          techy tones that make up our supporting colors.
        </h1>
      </section>

      {/* === THIRD SECTION === */}
      <section>
        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/Artboard%201%201.png?updatedAt=1761288662820"
          alt="Pearky Paws"
          width={1500}
          height={1500}
          className="w-full h-[800px]"
        />
      </section>
    </div>
  );
};

export default Attar;
