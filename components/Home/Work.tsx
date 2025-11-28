"use client";
import React, { useState } from "react";
import Image from "next/image";
const Work = () => {
  const WorksList = [
    {
      title: "Akwad\nUAE",
      subtitle: "Brand Identity, Website",
      image: "/akwadUae.svg",
      url: "https://www.akwad.ae/en",
      name: "Akwad UAE",
    },
    {
      title: "Summr\n India",
      subtitle: "Branding & 3D Website",
      url: "https://www.shopsummr.com/",
      image: "/works-2.svg",
      name: "Summr India",
    },
    {
      title: "BCF\n Cast Factory",
      subtitle: "UIUX & Web",
      url: "https://bhumacastfactory.com/",
      image: "/BCF_Impeller360_compressed.gif",
      name: "BCF Cast Factory",
    },
    {
      title: "Zaap\n Energy",
      subtitle: "Brand Identity, Web & App",
      url: "https://zappenergy.in/",
      video: "/zapvideo.webm",
      name: "Zaap Energy",
    },
    {
      title: "Panchayat \nAmazon Prime",
      subtitle: "WebApp",
      image: "/works-5.svg",
      url: "https://panchayatvoting.com/",
      name: "Panchayat Amazon Prime",
    },
    {
      title: "Enclave\nBlock Chain",
      subtitle: "UIUX & Web",
      image: "/works-6.svg",
      name: "Enclave Block Chain",
    },
    {
      title: "Haus of Chaos\n Chennai",
      subtitle: "Website Development",
      image: "/works-7.svg",
      url: "https://www.hausofchaos.co/",
      name: "Haus of Chaos Chennai",
    },
    {
      title: "2.0\nClothing",
      subtitle: "E-Commerce WebApp",
      video: "/2.0_Banner_video_Final_Horizonta_Version_V05.mp4",
      url: "https://2-0-clothing.vercel.app/",
      name: "2.0 Clothing",
    },
    {
      title: "Staap\nStories of Art",
      subtitle: "Website",
      image: "/works-9.svg",
      url: "https://staap.in/",
      name: "Staap Stories of Art",
    },
    {
      title: "Hashmint\n India",
      subtitle: "3D Website & Photography",
      video: "/transistion.mp4",
      url: "https://hashmint.in/",
      name: "Hashmint India",
    },
    {
      title: "Techvenchure\n Dubai",
      subtitle: "3D Website",
      image: "/works-11.svg",
      url: "https://www.techvenchure.com/",
      name: "Techvenchure Dubai",
    },
    {
      title: "Future of Data",
      subtitle: "Web App Development",
      video: "/Nv-studio.webm",
      url: "https://vols.noricai.com/",
      name: "Future of Data",
    },
    {
      title: "Medium \nTurtles",
      subtitle: "Brand Identity, Web & App",
      image: "/works-13.svg",
      url: "https://mediumturtle.com/",
      name: "Medium Turtles",
    },
    {
      title: "Maxclean\n India",
      subtitle: "UIUX & Web",
      image: "/works-14.svg",
      url: "https://www.themaxclean.com/",
      name: "Maxclean India",
    },
    {
      title: "Alati\n The Truck app",
      subtitle: "Brand Identity & Web",
      image: "/works-15.svg",
      name: "Alati The Truck app",
    },
    {
      title: "Lifestyle\n Investments",
      subtitle: "3D Web Dev",
      image: "/works-16.svg",
      url: "https://lifestyleinvestments.org/",
      name: "Lifestyle Investments",
    },
    {
      title: "DSA\n Cancer\n Institute",
      subtitle: "Brand Identity & Web",
      video: "/dsa_project.webm",
      name: "DSA Cancer Institute",
    },
    {
      title: "Kondaas\n Solar Power",
      subtitle: "3D Website & App",
      image: "/works-18.svg",
      url: "https://kondaas.vercel.app/",
      name: "Kondaas Solar Powe",
    },
    {
      title: "Architecture",
      subtitle: "Brand Identity & Web",
      video: "/hissn.webm",
      url: "https://tic-hissin-3vwm.vercel.app/",
      name: "Architecture",
    },
    {
      title: "Bulk Begins",
      subtitle: "Brand Identity, Web & App",
      video: "/Bulkbeings.webm",
      url: "https://tic-global-bulkbeings.vercel.app/",
      name: "Bulk Begins",
    },
  ];

  const [scrollY, setScrollY] = useState(0);
  return (
    <div className="mt-10 p-10">
      <div className="flex justify-between items-center">
        <div className="col-span-1">
          <p className=" font-normal text-5xl">Works</p>
        </div>
        <div>
          <Image
            src={"/DownArrow.svg"}
            width={83}
            height={87}
            alt="Down Arrow"
            className="w-10 h-10 lg:w-15 lg:h-15"
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
                <div className="absolute inset-0">
                  {item.image ? (
                    <a href={item.url} className="pointer-events-auto">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                      />
                    </a>
                  ) : (
                    <a href={item.url} className="pointer-events-auto">
                      <video
                        src={item.video}
                        controls
                        autoPlay
                        playsInline
                        muted
                        controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100 pointer-events-none"
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 md:p-8">
                <div>
                  <p className="text-[32.45px]  lg:text-[43.5px] font-light text-white tracking-[-0.07em] max-w-[400px] whitespace-pre-line leading-[45px] sm:leading-[40px] md:leading-[50px]">
                    {item.title}
                  </p>
                </div>

                <div className="flex justify-start items-start">
                  <h3 className="inline-flex items-start font-normal gap-2 px-1 sm:px-6 md:px-4 py-1 sm:py-2.5 md:py-3 bg-transparent  text-white  transition-all duration-300 tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
                    {item.subtitle}
                  </h3>
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
