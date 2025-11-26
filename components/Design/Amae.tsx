import React from "react";
import Image from "next/image";

const Amae = () => {
  return (
    <div className="bg-white h-[700px] flex items-center">
      <div className=" flex flex-col items-start justify-start max-w-5xl mx-auto p-6">
        <h1 className="text-[#424242] leading-relaxed text-left">
          The "AMAE" logo is a design triumph, blending an "empty A" with a
          customised serif typeface. The deliberate absence of a line in the
          first 'A' signifies openness, mirroring the emotional receptivity
          embedded in the Japanese concept. Connected AE letters convey unity
          and interdependence of the perfume, a visual manifestation of the
          brand's commitment to emotional bonds. The all caps, bold lettering
          exudes confidence, underlining the brand's assurance in delivering
          profound emotional experiences through its fragrances.
        </h1>

        <Image
          src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/TIC%20Official/AMAE%20Logo%20Illustrator%20File%201.png?updatedAt=1761808000296"
          alt="AMAE Logo"
          width={1200}
          height={500}
          className="w-full max-w-5xl mt-6 object-contain"
        />
      </div>
    </div>
  );
};

export default Amae;
