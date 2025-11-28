import React from "react";
import Accordion from "@/components/Reusbale/Accordition";

const Faq = () => {
  const faqList = [
    {
      question: "How Does TIC Global Services Work?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "What Services do TIC Global services Offer?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "What's the average project duration in TIC Global Services?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "Is an advance payment required before starting a project?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "What happens if I miss a payment deadline?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "Can the company cancel a project?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
    {
      question: "How long will it take to get an estimate from you?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner and fill in the required details.",
    },
  ];
  return (
    <div>
      <div className="flex lg:justify-start justify-center lg:mx-10  mt-20">
        <h1 className="lg:text-[80px] text-[25px]">Frequenty Asked Question</h1>
      </div>
      <div className="flex flex-col mx-auto lg:max-w-8xl sm:max-w-full p-8 lg:p-15">
        <div>
          {faqList.map((faq, index) => (
            <div key={index} className="p-1 lg:p-3">
              <Accordion title={faq.question} answer={faq.answer} />
              {index !== faqList.length-1 && (
                <div className="w-full h-px bg-white mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
