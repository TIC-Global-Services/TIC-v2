import Link from "next/link";
import React from "react";

import Image from "next/image";
import { ClienteleData } from "../Data/ClienteleData";

interface InfoItem {
  label: string;
  href?: string;
}

interface InfoCardProps {
  title: string;
  items: InfoItem[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-black text-lg">{title}</h2>
      <div className="flex flex-col text-lg">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href || "#"}
            target={item.href ? "_blank" : "_self"}
            className="text-gray-500 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Clientele = () => {
  const location: InfoItem[] = [
    {
      label:
        "Our team of creative experts specializes in delivering comprehensive brandingsolutions, from eye-catchinglogos and cohesive visualidentities to cutting-edgewebsites, mobile apps, andengaging multimedia content",
    },
  ];

  const contact: InfoItem[] = [
    {
      label:
        "We are a concept driven brand design agency that helps companies build,communicate and strengthen their brand identities and ideas.",
    },
  ];

  const socials: InfoItem[] = [
    {
      label:
        "We always work in regards tothe final output, be it an application, website, product etc. Since final output is where the identity should thrive and not in an impressive design presentation or PDF.",
    },
  ];

  return (
    <div className="flex flex-col gap-5  bg-[#F5F5F5] space-y-10 py-20">
      <h1 className="xL:text-7xl lg:text-7xl md:text-6xl text-4xl   text-black tracking-tighter">
        This is how <br />
        we work
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 lg:gap-20 md:gap-8 max-w-5xl">
        <InfoCard title="Background" items={location} />
        <InfoCard title="What we do" items={contact} />
        <InfoCard title="Philosophy" items={socials} />
      </div>

      <div className="bg-black rounded-2xl p-10 ">
        <h1 className="text-7xl tracking-tighter font-normal text-white">Clientele</h1>
        <p className="text-[#7B7B7B] mt-10 max-w-2xl">
          We're proud to collaborate with a diverse range of clients from bold
          startups to established brands each bringing unique ideas to the
          table. Their trust fuels our creativity, and together, we turn visions
          into results.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 md:gap-10 py-10 place-items-center">
          {ClienteleData.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              <Image
                src={item.img}
                alt={item.name}
                className="rounded-lg object-contain w-26 h-26 md:w-32 md:h-32"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientele;
