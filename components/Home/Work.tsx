"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Work: React.FC = () => {
  useEffect(() => {
    // Video setup (unchanged)
    const videos = document.querySelectorAll("video");
    videos?.forEach((video) => {
      video.load();
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.controls = false;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
    });

    // Parallax effect — smooth, performant, respects rounded corners
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight / 2; // center-based trigger

      document.querySelectorAll<HTMLElement>(".parallax-media").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2 + window.scrollY;

        // Distance from viewport center
        const distance = scrolled - cardCenter;
        const offset = distance * 0.12; // adjust speed here (0.12 = smooth & subtle)

        el.style.transform = `translateY(${offset}px) scale(1.1)`; // slight scale to fill bleed
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const WorksList = [
    {
      title: "Hashmint\n India",
      subtitle: "3D Website & Photography",
      video: "/transistion.mp4",
      url: "https://hashmint.in/",
      name: "Hashmint India",
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
      title: "Medium \nTurtles",
      subtitle: "Brand Identity, Web & App",
      image: "/works-13.svg",
      url: "https://mediumturtle.com/",
      name: "Medium Turtles",
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
      title: "Zaap\n Energy",
      subtitle: "Brand Identity, Web & App",
      url: "https://zappenergy.in/",
      video: "/zapvideo.webm",
      name: "Zaap Energy",
    },
    {
      title: "Techvenchure\n Dubai",
      subtitle: "3D Website",
      image: "/works-11.svg",
      url: "https://www.techvenchure.com/",
      name: "Techvenchure Dubai",
    },
    {
      title: "Vols\nFuture of Data",
      subtitle: "Web App Development",
      video: "/Nv-studio.webm",
      url: "https://vols.noricai.com/",
      name: "Future of Data",
    },
    {
      title: "Akwad\nUAE",
      subtitle: "Brand Identity, Website",
      image: "/akwadUae.svg",
      url: "https://www.akwad.ae/en",
      name: "Akwad UAE",
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
      title: "Adwin\n Power & Battery",
      subtitle: "Brand Identity & Web",
      url: "https://www.adwinpower.com/",
      image:
        "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/works/AdwinBattery.png",
      name: "Adwin Battery & Power",
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
      // url: "https://tic-hissin-3vwm.vercel.app/",
      name: "Architecture",
    },
    {
      title: "Bulk Begins",
      subtitle: "Brand Identity, Web & App",
      video: "/Bulkbeings.webm",
      // url: "https://tic-global-bulkbeings.vercel.app/",
      name: "Bulk Begins",
    },
  ];

  return (
    <div className="p-3 lg:p-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-normal text-[50px] lg:text-[80px] tracking-[-3.91px] lg:tracking-[-4.91px]">
            Works
          </p>
        </div>
        <div>
          <Image
            src="/DownArrow.svg"
            width={83}
            height={87}
            alt="Down Arrow"
            className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-5 md:gap-10 lg:gap-5">
        {WorksList.map((item, idx) => {
          const isWide =
            [0, 3, 6, 9, 12, 15, 16, 19].includes(idx);

          const cardClasses = `
            relative group overflow-hidden
            rounded-xl sm:rounded-2xl lg:rounded-3xl
            transition-all duration-500
            min-h-[390px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[620px]
            ${isWide ? "lg:col-span-2" : ""}
            ${idx === 2 ? "bg-[#141414]" : ""}
          `;

          const mediaContent = item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              width={1200}
              height={1200}
              className="parallax-media absolute inset-0 w-full h-full object-cover"
            />
          ) : item.video ? (
            <video
              src={item.video}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="parallax-media absolute inset-0 w-full h-full object-cover"
            />
          ) : null;

          return (
            <div key={idx} className={cardClasses}>
              {item.url ? (
                <Link href={item.url} target="_blank" className="block h-full">
                  {/* Background Media with Parallax */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                    {mediaContent}
                  </div>

                  {/* Overlay Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 md:p-8">
                    <p className="text-[32.45px] lg:text-[43.5px] font-light text-white tracking-[-0.07em] max-w-[400px] whitespace-pre-line leading-[45px] sm:leading-[50px] md:leading-[60px]">
                      {item.title}
                    </p>

                    <h3 className="font-normal text-white tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] px-1 sm:px-6 py-2">
                      {item.subtitle}
                    </h3>
                  </div>
                </Link>
              ) : (
                <>
                  <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                    {mediaContent}
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 pointer-events-none">
                    <p className="text-[32.45px] lg:text-[43.5px] font-light text-white tracking-[-0.07em] max-w-[400px] whitespace-pre-line leading-[45px] sm:leading-[50px] md:leading-[60px]">
                      {item.title}
                    </p>
                    <h3 className="font-normal text-white tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] px-1 sm:px-6 py-2">
                      {item.subtitle}
                    </h3>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Optional: CSS for smoother parallax */}
      <style jsx>{`
        .parallax-media {
          will-change: transform;
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Work;