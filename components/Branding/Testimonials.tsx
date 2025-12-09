import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
} from "@/assets/Home";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "../Reusbale/Container";

const Testimonials = () => {
  const TestimonialContents = [
    {
      image: Client1,
      name: "Brett",
      username: "@thebrett",
      review:
        "The Internet Company elevated our brand presence with clarity and precision. A truly refined experience.",
    },
    {
      image: Client2,
      name: "Alex Prokhorov",
      username: "@alex_pro_dsg",
      review:
        "A beautifully crafted branding approach. Their design language brought our vision to life effortlessly.",
    },
    {
      image: Client3,
      name: "Hewar",
      username: "@hewarsaber",
      review:
        "Exceptional attention to detail. Our digital identity finally feels modern, intentional, and on-brand.",
    },
    {
      image: Client4,
      name: "Lamaan",
      username: "@lamaandesign",
      review:
        "The team understood our direction instantly. A smooth process and outstanding creative output.",
    },
    {
      image: Client5,
      name: "Chinaa",
      username: "@chinwechinaa",
      review:
        "Clean, contemporary, and beautifully executed. Exactly what we wanted for our brand identity.",
    },
    {
      image: Client6,
      name: "Jagdev Soni",
      username: "@SoniJagdev",
      review:
        "They reimagined our visual system with a fresh, modern perspective. The result feels premium and intentional.",
    },
    {
      image: Client7,
      name: "Brian",
      username: "@iambrianoconnor",
      review:
        "A seamless branding experience. The Internet Company delivers creativity with real strategic depth.",
    },
    {
      image: Client8,
      name: "ӓli",
      username: "@aaalixyz",
      review:
        "Impressed with their process and the final outcome. Our brand feels significantly more polished and cohesive.",
    },
  ];

  const TestimonialCard = ({
    image,
    name,
    username,
    review,
  }: {
    image: StaticImageData;
    name: string;
    username: string;
    review: string;
  }) => {
    return (
      <div className="flex flex-col space-y-5 p-5 rounded-[10px] bg-[#1A1B1C] mb-2">
        <div className="flex items-center space-x-3">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-normal text-[16px] leading-[24px] tracking-[-0.4px] text-white">
              {name}
            </span>
            <span className="font-normal text-[14px] leading-[20px] tracking-[-0.4px] text-gray-500">
              {username}
            </span>
          </div>
        </div>
        <p className="font-normal text-[14px] leading-[20px] tracking-[-0.4px] text-white">
          {review}
        </p>
      </div>
    );
  };

  // Create enough testimonials for seamless infinite scroll
  // Duplicate testimonials multiple times to ensure smooth looping
  const duplicatedTestimonials = [
    ...TestimonialContents,
    ...TestimonialContents,
    ...TestimonialContents,
    ...TestimonialContents,
  ];

  // Split testimonials into 3 columns for vertical scrolling
  const getColumnTestimonials = (columnIndex: number) => {
    return duplicatedTestimonials.filter(
      (_, index) => index % 3 === columnIndex
    );
  };

  return (
    <Container className=" bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto pb-10 overflow-hidden relative">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-[110px] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-10 left-0 right-0 h-[110px] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 h-[800px] overflow-hidden">
          <div className="flex flex-col p">
            <div className="animate-infinite-scroll flex flex-col">
              {getColumnTestimonials(0).map((testimonial, index) => (
                <TestimonialCard
                  key={`col1-${testimonial.name}-${index}`}
                  image={testimonial.image}
                  name={testimonial.name}
                  username={testimonial.username}
                  review={testimonial.review}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="animate-infinite-scroll-delayed-1 flex flex-col">
              {getColumnTestimonials(1).map((testimonial, index) => (
                <TestimonialCard
                  key={`col2-${testimonial.name}-${index}`}
                  image={testimonial.image}
                  name={testimonial.name}
                  username={testimonial.username}
                  review={testimonial.review}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="animate-infinite-scroll-delayed-2 flex flex-col">
              {getColumnTestimonials(2).map((testimonial, index) => (
                <TestimonialCard
                  key={`col3-${testimonial.name}-${index}`}
                  image={testimonial.image}
                  name={testimonial.name}
                  username={testimonial.username}
                  review={testimonial.review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
