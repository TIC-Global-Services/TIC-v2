"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const contents = [
  {
    img: "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/old_computer_mockup_6%201.png?updatedAt=1761288662964",
  },
  {
    img: "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/e78665d4-67f2-462c-99af-6708ff07a6f4%201.png?updatedAt=1761288663104",
  },
  {
    img: "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/img0011%201.png?updatedAt=1761288662994",
  },
  {
    img: "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/11633522%201.png?updatedAt=1761288662610",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageHeights, setImageHeights] = useState<number[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index: number, event: any) => {
    const img = event.target;
    const height = (img.naturalHeight / img.naturalWidth) * 100;
    setImageHeights((prev) => {
      const newHeights = [...prev];
      newHeights[index] = height;
      return newHeights;
    });
  };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  const currentHeight = imageHeights[currentIndex] || 56.25;

  //   const handleClick = () => {
  //   // Create a temporary link element to trigger download
  //   const link = document.createElement('a');
  //   link.href = '/brandbook.pdf'; // Update this path to your actual PDF file
  //   link.download = 'brandbook.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="bg-white min-h-[100dvh] w-full pt-20 flex flex-col items-center justify-center">
      <h1 className="text-black text-6xl md:text-8xl text-center font-medium tracking-tighter mb-16">
        Projects
      </h1>

      <div
        className="relative w-full max-w-8xl overflow-hidden shadow-lg "
        // onMouseMove={handleMouseMove}
        // onMouseEnter={() => setIsHovering(true)}
        // onMouseLeave={() => setIsHovering(false)}
        // onClick={handleClick}
      >
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            paddingBottom: `${currentHeight}%`,
          }}
        >
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {contents.map((content, index) => (
              <div
                key={index}
                className="min-w-full h-full relative flex-shrink-0"
              >
                <Image
                  src={content.img}
                  alt={`project-${index}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  onLoad={(e) => handleImageLoad(index, e)}
                />
              </div>
            ))}
          </div>
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
            <div className="relative w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              {/* Inner dot */}
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Text beside circle */}
            <div className="text-white text-2xl font-medium whitespace-nowrap">
              click to view brandbook
            </div>
          </div>
        )}
      </div>

      {/* Navigation dots */}
      {/* <div className="flex gap-2 mt-8">
        {contents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-black w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
