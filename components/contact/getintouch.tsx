import Link from "next/link";
import React from "react";

interface InfoCardProps {
  title: string;
  items: InfoItem[];
}
interface InfoItem {
  name: string;
  label?:string
  email?:string;
  Link?: string;
}

const location =[
    {
        name:'Chennai'
    },
    {
        name:'India'
    },
]
const contactList = [
  {
    name: "Pragya Muthuraman",
    email: "founder@theinternetcompany.one",
  },
];

const socials = [
  {
    name: "Instagram",
    Link: "https://www.instagram.com/the.internetcompany",
  },
  {
    name: "Linkedin",
    Link: "https://www.linkedin.com/company/tic-global-services/",
  },
];

const   InfoCard: React.FC<InfoCardProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-black text-lg">{title}</h2>
      <div className="flex flex-col text-lg">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item?.Link || "#"}
            target={item.Link ? "_blank" : "_self"}
            className="text-gray-500 transition-colors duration-200"
          >
            {item.name}
            <p>{item.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
const getintouch = () => {
  return (
    // <div ></div>
    <div className="flex flex-col gap-5  bg-[#F5F5F5] ">
      <h1 className="xL:text-[58px] lg:text-[88px] md:text-6xl text-4xl  font-normal text-black tracking-tighter xl:mt-70  lg:mt-50 md:mt-30 mt-30">
        Let's get in<br />
        touch
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 lg:gap-20 md:gap-8 max-w-7xl">
        <InfoCard title="Located" items={location} />
        <InfoCard title="Contact" items={contactList} />
        <InfoCard title="Follow" items={socials} />
        
      </div>
      </div>
  );
};

export default getintouch;
