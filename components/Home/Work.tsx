"use client";
import React, { useState } from "react";
import Image from "next/image";
const Work = () => {
  const WorksList = [
    {
      title: "Akwad UAE",
      subtitle: "Brand Identity, Website",
      image: "/akwadUae.svg",
      name: "Akwad UAE",
    },
    {
      title: "Summr India",
      subtitle: "Branding & 3D Website",
      image: "/works-2.svg",
      name: "Summr India",
    },
    {
      title: "BCF Cast Factory",
      subtitle: "UIUX & Web",
      image: "/works-3.svg",
      name: "BCF Cast Factory",
    },
    {
      title: "Zaap Energy",
      subtitle: "Brand Identity, Web & App",
      image: "/works-4.svg",
      name: "Zaap Energy",
    },
    {
      title: "Panchayat Amazon Prime",
      subtitle: "WebApp",
      image: "/works-5.svg",
      name: "Panchayat Amazon Prime",
    },
    {
      title: "Enclave Block Chain",
      subtitle: "UIUX & Web",
      image: "/works-6.svg",
      name: "Enclave Block Chain",
    },
    {
      title: "Haus of Chaos Chennai",
      subtitle: "Website Development",
      image: "/works-7.svg",
      name: "Haus of Chaos Chennai",
    },
    {
      title: "2.0 Clothing",
      subtitle: "E-Commerce WebApp",
      image: "/works-8.svg",
      name: "2.0 Clothing",
    },
    {
      title: "Staap Stories of Art",
      subtitle: "Website",
      image: "/works-9.svg",
      name: "Staap Stories of Art",
    },
    {
      title: "Hashmint India",
      subtitle: "3D Website & Photography",
      image: "/works-10.png",
      name: "Hashmint India",
    },
    {
      title: "Techvenchure Dubai",
      subtitle: "3D Website",
      image: "/works-11.svg",
      name: "Techvenchure Dubai",
    },
    {
      title: "Future of Data",
      subtitle: "Web App Development",
      image: "/works-11.svg",
      name: "Future of Data",
    },
    {
      title: "Medium Turtles",
      subtitle: "Brand Identity, Web & App",
      image: "/works-13.svg",
      name: "Medium Turtles",
    },
    {
      title: "Maxclean India",
      subtitle: "UIUX & Web",
      image: "/works-14.svg",
      name: "Maxclean India",
    },
    {
      title: "Alati The Truck app",
      subtitle: "Brand Identity & Web",
      image: "/works-15.svg",
      name: "Alati The Truck app",
    },
    {
      title: "Lifestyle Investments",
      subtitle: "3D Web Dev",
      image: "/works-16.svg",
      name: "Lifestyle Investments",
    },
    {
      title: "DSA Cancer Institute",
      subtitle: "Brand Identity & Web",
      image: "/works-16.svg",
      name: "DSA Cancer Institute",
    },
    {
      title: "Kondaas Solar Power",
      subtitle: "3D Website & App",
      image: "/works-18.svg",
      name: "Kondaas Solar Powe",
    },
    {
      title: "Architecture",
      subtitle: "Brand Identity & Web",
      image: "/works-3.svg",
      name: "Architecture",
    },
    {
      title: "Bulk Begins",
      subtitle: "Brand Identity, Web & App",
      image: "/works-20.svg",
      name: "Bulk Begins",
    },
  ];

  const [scrollY, setScrollY] = useState(0);
  return (
    <div className="mt-10 p-10">
      <div className="flex justify-between items-center">
        <div className="col-span-1">
          <h1 className="font-bold text-7xl">Works</h1>
        </div>
        <div>
          <Image
            src={"/DownArrow.svg"}
            width={83}
            height={87}
            alt="Down Arrow"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-5 md:gap-10 lg:gap-5">
        {WorksList.map((item, idx) => {
          // const parallaxOffset = scrollY * 15;
          return (
            <div
              key={idx}
              className={`relative group  overflow-hidden rounded-xl lg:rounded-3xl sm:rounded-3xl transition-all duration-500  min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[620px] ${
                idx == 0 ||
                idx == 3 ||
                idx == 6 ||
                idx == 9 ||
                idx == 12 ||
                idx == 15 ||
                idx == 16 ||
                idx == 19
                  ? "lg:col-span-2 sm:col-span-1"
                  : " "
              }  `}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 md:p-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl max-w-full lg:max-w-[200px] sm:max-w-[400px] md:max-w-[200px] leading-tight sm:leading-[40px] md:leading-[50px] tracking-[-0.07em] font-medium text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="flex justify-start items-start">
                  <p className="inline-flex items-start gap-2 px-5 sm:px-6 md:px-4 py-2 sm:py-2.5 md:py-3 bg-transparent  text-white font-normal transition-all duration-300 tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
