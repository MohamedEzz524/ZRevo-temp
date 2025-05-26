import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "./MainTitle";
import { services } from "./assets/Data";

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative w-full  bg-bgSecondary row-auto"
    >
      <div className="container m-auto px-[30px] max-md:px-[10px] ">
        <MainTitle title="Services" subtitle="What I Do?" />
        <div className="grid grid-cols-2 gap-[40px] w-full  xl:w-[90%] m-auto ">
          {services.map(({ icon, title, subtitle }, i) => (
            <div key={i} className="col-span-1 px-[10px] max-md:col-span-2 ">
              <div className="flex gap-[20px] font-Poppins">
                <div>
                  <FontAwesomeIcon
                    className="text-btnPrimary p-[15px] rounded-[8px] bg-bgPrimary shadow-md"
                    icon={icon}
                    size="2xl"
                  ></FontAwesomeIcon>
                </div>
                <div>
                  <div className="text-textPrimary font-medium text-[clamp(1.25rem,1.2vw+.4rem,1.5rem)] mb-[10px]">
                    {title}
                  </div>
                  <div className="font-Poppins font-normal text-textBody leading-[1.6] text-[clamp(.9rem,1vw+.2rem,1.25rem)] max-md:text-balance">
                    {subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
