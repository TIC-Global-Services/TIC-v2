import React from "react";

const contacpersonList = [
  {
    name: "GokZ",
    designation: "Director of\n Design",
    email: "design@theinternetcompany.one",
  },
  {
    name: "Manoj",
    designation: "Director of\n Development",
    email: "dev@theinternetcompany.one",
  },
];

const Contacts = () => {
  return (
    <div >
      <div className="mt-40">
            <section className="w-full md:px-10 lg:px-5 py-5">
              {/* TOP Heading */}
              <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-4xl mb-12">
                We're always looking
                <br /> for new collaborations.
              </h1>

              <div className="space-y-10">
                {contacpersonList.map((item, index) => (
                  <div key={index} className="pb-5 border-b border-black/50">
                    <div className="grid grid-cols-2 lg:grid-cols-3 items-center text-start">
                      
                      <h2 className="text-[20px] md:text-[38px] lg:text-[44px] font-normal whitespace-pre-line text-black ">
                        {item.designation}
                      </h2>

                    
                      <h2 className="text-[20px] md:text-[38px] lg:text-[44px] font-normal text-black ">
                        {item.name}
                      </h2> 
                      <a
                        href={`mailto:${item.email}`}
                        className="inline-flex w-fit px-6 py-3 border border-black rounded-full text-[18px] md:text-[20px] lg:text-[25.1px] tracking-tight hover:bg-black hover:text-white transition text-black "
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
      
       
      </div>
    </div>
  );
};

export default Contacts;
