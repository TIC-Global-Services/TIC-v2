import React from "react";
import Image from "next/image";

const Caara = () => {
  return (
    <>
      <div
        className="h-[700px] flex items-end py-10 px-10 text-center"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/caara%20loggo%201%20(1).png?updatedAt=1761288662903')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white/30">
          Caara isn’t just a jewelry brand—it’s a feeling. <br /> When we
          designed the logo, we imagined soft light, quiet elegance, and pieces
          that speak without saying too much. The result? A minimalistic mark
          that feels like a whisper in gold. Clean. Airy. Intentional. Just like
          the jewelry, the logo doesn’t beg for attention—it earns it with
          grace. Designed to linger in memory, not just on paper.
        </h1>
      </div>

      <div>
        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/Screenshot%202025-04-16%20at%2012.53.33%E2%80%AFAM%201.png?updatedAt=1761288662964"
          alt=""
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default Caara;
