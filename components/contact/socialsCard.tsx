import Image from "next/image";
import React from "react";

const socialsCard = () => {
  return (
    <div className="mt-19">
      <div className="relative  rounded-xl lg:rounded-xl xl:rounded-2xl transition-all duration-500 h-[599px] w-full bg-[#e8e4df]">
        {/* PHONE IMAGE — FIXED POSITION RIGHT SIDE */}
        <div className="absolute overflow-hidden -left-24  lg:right-0 bottom-0  flex justify-end items-end pointer-events-none">
          <Image
            src="/Free_Realistic_iPhone_16_Pro_in_Hand_Mockup.svg"
            alt="Mobile Mockup"
            width={820}
            height={815}
            className=" w-[920px]  translate-x-5 translate-y-0"
          />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 h-full flex flex-col justify-start xl:justify-between lg:xl:justify-between p-6 lg:p-6  sm:p-6 md:p-8">
          {/* TITLE */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl max-w-full sm:max-w-[400px] md:max-w-[470px] leading-tight sm:leading-[40px] md:leading-[50px] tracking-[-0.07em] font-normal text-black">
              Follow us on
              <br />
              <span className="opacity-45 font-[400]">Instagram</span>
              <br />
              <span className="opacity-45">Linkedin</span>
            </h3>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-start gap-5 mt-3">
            <a className="inline-flex items-center gap-2 px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border border-black text-black font-normal rounded-full transition-all duration-300 hover:bg-white tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
              Instagram
            </a>

            <a className="inline-flex items-center gap-2 px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border border-black text-black font-normal rounded-full transition-all duration-300 hover:bg-white tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default socialsCard;
