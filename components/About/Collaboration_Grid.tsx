import Image from "next/image";
import React from "react";

const CollaborationGrid = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className=" bg-white rounded-xl">
        <div className=" relative">
          <img
            src={
              "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/about/handshake%201.png"
            }
            alt="Collab Handshake"
            width={400}
            height={400}
            className=" w-full object-cover rounded-xl"
          />
        </div>
        <div className=" px-6 py-6 max-w-md">
          <h1 className=" text-4xl text-black font-medium tracking-tighter">Colloboration is Key</h1>
          <p className=" text-gray-400 py-5">
            TIC was built on the belief that successful branding comes from a
            collaborative process. We work closely with our clients, ensuring
            they feel confident and supported at every stage of building their
            brand.
          </p>
        </div>
      </div>

      <div  className=" bg-white rounded-xl flex flex-col justify-between items-end">
        <div className=" px-6 pt-6 max-w-md md:text-right">
          <h1 className=" text-4xl text-black font-medium tracking-tighter">Not just a Brand</h1>
          <p className=" text-gray-400 py-5  ">
            While logo, colours, and fonts are the entirety of their brand in
            some instances, it's often just a small part of what the audience
            experiences. In fact, a well-designed landing page can communicate
            much more than a logo alone.
          </p>
        </div>
        <div>
          <img
            src={
              "https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/about/Watch"
            }
            alt="Collab Handshake"
            width={400}
            height={400}
            className=" w-2/3 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationGrid;
