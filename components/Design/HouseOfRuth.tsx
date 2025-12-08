import Image from "next/image";
import React from "react";

const HouseOfRuth = () => {
  return (
    <div className=" bg-[#f5f5f5] py-10">
      <div className=" w-full flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
        <Image
          src={
            "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/ba8915f68c91934f63916d6b8b8d9d263878990e.png"
          }
          alt={``}
          width={500}
          height={500}
          className="object-contain w-full"
        />
        <p className=" text-black text-xs md:text-base ">
          House of Ruh is a lifestyle brand that brings the timeless artistry of
          India to a global audience. Rooted in the vibrant heritage of Jaipur,
          the brandcelebrates traditional craftsmanship through thoughtfully
          designed carrywear featuring authentic Jaipuri prints.
        </p>
        <Image
          src={
            "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/Design%20House/a177bcdd53002067f111dca822514b4ada46fdab.png?updatedAt=1765182805661"
          }
          alt={``}
          width={500}
          height={500}
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default HouseOfRuth;
