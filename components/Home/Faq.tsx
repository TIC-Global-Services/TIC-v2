import React from "react";
import Accordion from "@/components/Reusbale/Accordition";

const Faq = () => {
  const cancelpolicy=[
    {
      policy:"Clients will be notified immediately with an explanation."
    },
    {
      policy:"Refunds for any incomplete work will be processed as per the progress of the project."
    }
  ]
  const servicesList=[
      {
        title:"Website Design and Development:",
        subtitle:" Creating visually appealing, responsive, and user-friendly websites that are tailored to your specific business requirements."
      },
      {
        title:"Web branding and brand identity:",
        subtitle:"Involve developing a consistent online identity through logo design, color schemes, and branding strategies."
      },
      {
        title:"UI/UX Design:",
        subtitle:" Creating visually appealing, responsive, and user-friendly websites that are tailored to your specific business requirements."
      },
      {
        title:"Website Design and Development:",
        subtitle:"Improving the user experience through intuitive design and functionality."
      },
      {
        title:"E-Commerce Solutions:",
        subtitle:"Building strong and secure e-commerce platforms to provide seamless online shopping experiences."
      },
      {
        title:"Digital Marketing Services:",
        subtitle:"Through the use of SEO, social media marketing, PPC campaigns, and content marketing to increase online visibility."
      },
      {
        title:"Custom Web Applications:",
        subtitle:"Creating well-designed web applications to meet specific business needs."
      },
      {
        title:"Brand Product Shoots:",
        subtitle:"Photography and cinematography with your product/services for OG content."
      },
  ]

  const faqList = [
    {
      question: "How Does TIC Global Services Work?",
      answer:
        "TIC Global Services, an expert in web development in Chennai, offers complete solutions for establishing and improving your online presence. We specialize in web branding, brand identity, anddigital marketing, uses a strategic approach to understand your company's goals and target audience.From designing user-friendly websites to creating a strong digital footprint through dedicated marketing campaigns, TIC ensures your brand stands out in the competitive online world. TIC Global Services provides solutions that drive business growth and success by combining creativity, cutting-edge technology, and innovative strategies.",
    },
    {
      question: "What Services do TIC Global services Offer?",
      answer:
        "TIC, as a web development company in Chennai we provide a wide range of services to help businesses establish and expand their online presence. These usually include:",
      services:servicesList
    },
    {
      question: "What's the average project duration in TIC Global Services?",
      answer:
        "At TIC Global Services, the project duration varies based on the requirements and complexity of the product or service. Simple projects, like basic website development, may take upto 1 or 2 weeks, while more complex solutions, such as custom web applications or comprehensive branding campaigns, can span several weeks. Each project is carefully planned and executed to ensure quality, timely delivery, and alignment with client goals.",
    },
    {
      question: "Is an advance payment required before starting a project?",
      answer:
        "Yes, we require an advance payment of 50% of the project value to confirm the order. This ensures we allocate the necessary resources to your project.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We do not offer refunds once project commences, Refunds are available only under specific conditions for work that has not yet commenced. Kindly contact support@theinternetcompany.one for further assistance.",
    },
    {
      question: "What happens if I miss a payment deadline?",
      answer:
        "Missing a payment deadline may result in a temporary suspension of services and ownership transfer until the dues are cleared. We recommend timely payments to avoid interruptions",
    },
    {
      question: "Can the company cancel a project?",
      answer:
        "In rare circumstances, we may cancel a project due to unforeseen situations, such as lack of cooperation or expectation of higher work for a particular budget. In such cases:",
        policy:cancelpolicy
    },
    {
      question: "How long will it take to get an estimate from you?",
      answer:
        "We hate to keep you waiting. Setting up a team, making preliminary research and analysis, and getting back to you with the contract will take up to 24 hours from the moment we learn what's needed.",
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
            <div key={index} className="p-1 lg:p-3 text-black">
              <Accordion title={faq.question} answer={faq.answer} serviceList={faq.services} policy={faq.policy} />
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
