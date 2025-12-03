"use client";
import React, { useState } from "react";

const Accordition = ({ title, answer, serviceList, policy }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
     <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="lg:text-[36px] sm:text-lg text-start">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
       <span > <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg></span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden lg:text-xl py-2">
          <h1>{answer}</h1>
          {serviceList?.length > 0 && (
            <ul className="list-disc pl-6 space-y-3">
              {serviceList.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong> {item.subtitle}
                </li>
              ))}
            </ul>
          )}
          {policy?.length > 0 && (
            <ul className="list-disc pl-6 space-y-2">
              {policy.map((p, i) => (
                <li key={i}>{p.policy}</li>
              ))}
            </ul>
          )}
          </div>
      </div>
    </div>
  )
}

export default Accordition