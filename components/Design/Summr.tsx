import React from "react";
import Image from "next/image";

const SummrAndVesenex = () => {
  return (
    <>
      <div>
        <div className=" h-[500px]">
          <Image
            src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/a0e6a074a11aa3326e3e680a79ffd27cedb73075.png"
            alt=""
            width={1000}
            height={500}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <Image
            src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/Group%204.png"
            alt=""
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className=" relative h-[300px] md:h-[500px] bg-black  w-full flex items-end py-10 px-10 text-center">
        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/venesx%20banner.png"
          alt="Banner"
          width={1000}
          height={500}
          className="w-full  absolute inset-0 z-10"
        />
        <h1 className="text-white/80 text-xs md:text-base z-50">
          At Vesenex, we help Australian businesses stay secure in a
          digital-first world. As a trusted MSSP, we deliver tailored cyber
          protection with 24/7 monitoring, threat detection, and rapid response
          powered by our expert SOC team and global best practices.
        </h1>
      </div>

      <div>
        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/02.%20%20Key%20Tag%20Mockup%201.png"
          alt=""
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default SummrAndVesenex;
