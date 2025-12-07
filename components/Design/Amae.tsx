"use client";
import React, { useState } from "react";
import Image from "next/image";

const Amae = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/BrandBooks/AMAE.pdf"; // Update this path to your actual PDF file
    link.download = "brandbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
      className="bg-white h-[700px] flex items-center"
    >
      <div className=" flex flex-col items-start justify-start max-w-5xl mx-auto p-6">
        <h1 className="text-[#424242] leading-relaxed text-left cursor-none text-xs md:text-base">
          The "AMAE" logo is a design triumph, blending an "empty A" with a
          customised serif typeface. The deliberate absence of a line in the
          first 'A' signifies openness, mirroring the emotional receptivity
          embedded in the Japanese concept. Connected AE letters convey unity
          and interdependence of the perfume, a visual manifestation of the
          brand's commitment to emotional bonds. The all caps, bold lettering
          exudes confidence, underlining the brand's assurance in delivering
          profound emotional experiences through its fragrances.
        </h1>

        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/AMAE%20Logo%20Illustrator%20File%201.png?updatedAt=1761808000296"
          alt="AMAE Logo"
          width={1200}
          height={500}
          className="w-full max-w-5xl mt-6 object-contain"
        />
      </div>

      {/* Custom Cursor */}
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
    </div>
  );
};

export default Amae;
