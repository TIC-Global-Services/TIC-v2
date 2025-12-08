"use client";

import React from "react";
import Image from "next/image";
import { FounderImage } from "@/assets/About";
import { Socials } from "../Data/Socials";
import Link from "next/link";

const Founder = () => {
  return (
    <div className="md:py-20 py-10 bg-[#F5F5F5] space-y-6">
      <h1 className="text-3xl md:text-6xl text-center text-black font-normal tracking-tighter">
        Founder & Team
      </h1>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-10  rounded-2xl bg-white px-10">
        {/* === Left Section (Image + Title) === */}
        <div className="w-full md:w-1/2 pt-10">
          <img src={FounderImage} alt="Founder" className="object-cover w-full" />
        </div>

        {/* === Right Section (Content) === */}
        <div className="w-full  flex flex-col justify-center text-justify md:text-left space-y-6">
          <p className="text-gray-500 md:text-black leading-tight tracking-tighter text-base md:text-2xl 2xl:text-3xl">
            Meet Pragya Muthuraman — the creative force and strategic mind
            powering TIC Global Services. From crafting stunning digital
            experiences to redefining what it means to build a brand online; and
            is all about turning big ideas into bigger realities.
          </p>

          <p className="text-gray-500 md:text-black leading-tight tracking-tighter text-base md:text-2xl 2xl:text-3xl">
            With over 100 successful projects under our belt this year, she
            doesn't just lead the company—she set the pace for innovation in 3D
            websites breaking the barriers of traditional web development,
            ensuring every project is as bold and original as the clients we
            serve. Whether it's web branding, app design, or exploring new
            frontiers Pragya is always looking for the next big challenge.
          </p>

          {/* =Social Media Links */}
          <div className=" hidden md:flex flex-row items-start justify-start gap-4 md:gap-6">
            {Socials.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.img}
                  alt="Social logo"
                  width={item.width}
                  height={item.height}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Image
          src={
            "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/about/Screenshot%202025-08-20%20at%207.53.57%E2%80%AFPM.png?updatedAt=1755708224949"
          }
          alt="Team"
          width={1000}
          height={1000}
          className="w-full h-full rounded-2xl "
        />
      </div>
    </div>
  );
};

export default Founder;
